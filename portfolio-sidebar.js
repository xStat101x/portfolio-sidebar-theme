/**
 * Copyright 2025 Rex Kenyon
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `portfolio-sidebar-theme`
 * 
 * @demo index.html
 * @element portfolio-sidebar
 */
export class PortfolioSidebar extends DDDSuper(LitElement) {

  static get tag() {
    return "portfolio-sidebar";
  }

  constructor() {
    super();
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        font-family: var(--ddd-font-navigation);
        --ddd-theme-default-link: white; // Links in chrome were blue by default and white in firefox !important didn't work so I did this
      }

      .wrapper
      {
        width: 300px;
        height: 100vh;
        overflow-x: hidden;
        background-color: var(--ddd-theme-default-nittanyNavy);
        display: flex;
        text-align: center;
      }

      .links{
        margin: auto;
        padding: var(--ddd-theme-default-padding);
        text-align: left;
      }
      .links a {
        text-decoration: none;
      }
      .links a:hover {
        text-decoration: underline;
      }

    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="wrapper">
      <div class="links">
        <slot></slot> 
      </div>
    </div>`;
  }

  firstUpdated() {
    const slot = this.shadowRoot.querySelector('slot');
    console.log('Slot content:', slot.assignedNodes());
  }
}



globalThis.customElements.define(PortfolioSidebar.tag, PortfolioSidebar);