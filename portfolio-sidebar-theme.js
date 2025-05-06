/**
 * Copyright 2025 Rex Kenyon
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./portfolio-sidebar.js";
import '@haxtheweb/scroll-button/scroll-button.js';

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
        background-color: var(--ddd-theme-default-white);
        font-family: var(--ddd-font-primary);
      }
      portfolio-sidebar {
        display: block;
        width: 310px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
      }
      scroll-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
      }
      .header {
        position: block;
        margin-left: 300px;
        height: 40vh;
        display: flex;
        flex-direction: column; 
        align-items: center; 
        justify-content: center; 
      }
      .spacer {
        height: 10vh;
        width: 100%;
        background-color: var(--ddd-theme-default-nittanyNavy);
      }
      .wrapper {
        margin-left: 300px;
      }
      a {
        color: var(--ddd-theme-default-white);
        text-decoration: none;
        font-size: var(--ddd-font-size-l);
      }
      ul {
        list-style: none;
      }
      h1 {
        letter-spacing: var(--ddd-ls-72-lg);
        font-weight: bold; 
        font-size: var(--ddd-font-size-xxl); 
        color: var(--ddd-theme-default-beaverBlue);
        text-transform: uppercase; 
        margin: 0;
      }
      h2 {
        color: var(--ddd-theme-default-beaverBlue);
      }
      @media (max-width: 768px) {
        :host {
          flex-direction: column;
        }
        .wrapper {
          margin-left: 0;
        }
        .header {
          margin-left: 0;
        }
        portfolio-sidebar {
          position: fixed;
          display: block;
          width: 100vw;
          height: 100vh;
          z-index: 1000;
        }
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`


      <scroll-button></scroll-button>

      <div class="header">
        <img src="https://brand.psu.edu/images/backgrounds/penn-state-shield.jpg" width="100" height="100">
        <h2>Profesional</h2>
        <h1>Portfolio</h1>
      </div>

      <div class="spacer"></div>

      <portfolio-sidebar>
        <ul>
          ${this.pages.map((page, index) => html`
            <li>
              <a href="#screen-${page.number}" @click="${this.linkChange}" data-index="${index}">
                ${page.title}
              </a>
            </li>`)}
        </ul>
      </portfolio-sidebar>
    
      <div class="wrapper" @page-added="${this.addPage}">
        <slot></slot>
      </div>`;
  }

  linkChange(e) {
    let number = parseInt(e.target.getAttribute('data-index'));
    if (number >= 0) {
      this.pages[number].element.scrollIntoView();
    }
  }

  addPage(e) {
    const element = e.detail.value;
    const page = {
      number: element.order,
      title: element.title,
      element: element,
    };
    this.pages = [...this.pages, page];
  }

}

globalThis.customElements.define(PortfolioSidebarTheme.tag, PortfolioSidebarTheme);