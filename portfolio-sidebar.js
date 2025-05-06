/**
 * Copyright 2025 Rex Kenyon
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "@haxtheweb/simple-icon/simple-icon.js";

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
    this.collapsed = false;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      collapsed: { type: Boolean },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        position: relative;
        font-family: var(--ddd-font-navigation);
        --ddd-theme-default-link: white; // Links in chrome were blue by default and white in firefox !important didn't work so I did this
      }
      .wrapper
      {
        width: 300px;
        height: 100vh;
        background-color: var(--ddd-theme-default-nittanyNavy);
        display: flex;
        text-align: center;
      }
      .wrapper.collapsed {
        width: 60px; 
      }
      .links{
        margin: auto;
        text-align: left;
      }
      .links a {
        text-decoration: none;
      }
      .links a:hover {
        text-decoration: underline;
      }
      .links.collapsed {
        display: none; /* Hide the links when collapsed */
      }
      .sidebar-menu {
        position: relative;
        top: 10px;
        left: 10px;
        cursor: pointer;
      }
      @media (max-width: 768px) {
        .wrapper.collapsed {
          width: 0;
        }
        .sidebar-menu {
          position: absolute
        }
        .wrapper {
          width: 100vw;
          height: 100vh;
        }
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="wrapper ${this.collapsed ? 'collapsed' : ''}">
    
      <simple-icon-lite class="sidebar-menu" part="icon" icon="icons:menu" dir="ltr" @click="${this.toggleSidebar}">

      </simple-icon-lite>

      <div class="links ${this.collapsed ? 'collapsed' : ''}">
        <slot></slot> 
      </div>
    </div>`;
  }

  firstUpdated() {
    const slot = this.shadowRoot.querySelector('slot');
    console.log('Slot content:', slot.assignedNodes());
  }
  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }
}



globalThis.customElements.define(PortfolioSidebar.tag, PortfolioSidebar);