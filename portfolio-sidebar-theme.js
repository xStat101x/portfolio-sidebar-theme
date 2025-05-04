/**
 * Copyright 2025 Rex Kenyon
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./portfolio-sidebar.js";

/**
 * `portfolio-sidebar-theme`
 * 
 * @demo index.html
 * @element portfolio-sidebar-theme
 */
export class PortfolioSidebarTheme extends DDDSuper(LitElement) {

  static get tag() {
    return "portfolio-sidebar-theme";
  }

  constructor() {
    super();
    this.pages = [];
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      pages: { type: Array },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        height: 100vh;
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }

      portfolio-sidebar {
        display: block;
        width: 310px;
        position: fixed;
        top: 0;
        left: 0;
        color: white;
      }
      .wrapper {
        margin-left: 310px;
      }
      a {
        color: white;
        font-size: var(--ddd-font-size-m);
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <portfolio-sidebar>
        <ul>
          ${this.pages.map((page, index) => html`
            <li>
              <a href="#${page.number}" @click="${this.linkChange}" data-index="${index}">
                ${page.title}
              </a>
            </li>`)}
        </ul>
      </portfolio-sidebar>
      <div class="wrapper">
        <slot></slot>
      </div>`;
  }

  /**
   * AddPage Method wasn't being called for some reason so I asked co-piolot what was wrong
   * It suggested I add this method and after verifying it was being called correctly via the console...
   * I added the event listener to this method so it would call addPage.
   * This took me 4 hours so I have no shame in asking co-pilot for help.
   */
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('page-added', this.addPage);
  }

  linkChange(e) {
    let number = parseInt(e.target.getAttribute('data-index'), 10);
    if (number >= 0) {
      this.pages[number].element.scrollIntoView();
    }
  }

  addPage(e) {
    console.log('page-added event received:', e.detail.value);
    const element = e.detail.value;
    const page = {
      number: element.order,
      title: element.title,
      element: element,
    };
    console.log('Adding page:', page);
    this.pages = [...this.pages, page];
  }

}

globalThis.customElements.define(PortfolioSidebarTheme.tag, PortfolioSidebarTheme);