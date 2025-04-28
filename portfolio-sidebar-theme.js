/**
 * Copyright 2025 Rex Kenyon
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "@haxtheweb/scroll-button/scroll-button.js"
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
    this.page = [];
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      page: { type: Array },
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
        bottom:0;
        left: 0;
        color: var(--portfolio-sidebar-color, white);
      }
      .wrapper {
        margin-left: 310px;      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <portfolio-sidebar>
      <ul>
        
      </ul>
    </portfolio-sidebar>
    <div class="wrapper">
      <slot></slot>
    </div>`;
  }
}

globalThis.customElements.define(PortfolioSidebarTheme.tag, PortfolioSidebarTheme);