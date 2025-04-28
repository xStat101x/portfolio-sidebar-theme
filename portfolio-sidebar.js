/**
 * Copyright 2025 Rex Kenyon
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./portfolio-page-wrapper.js";

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
    this.pageLinkList = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      pageLinkList: { type: Array },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        width: 20vw;
        height: 100vh;
      }
      .wrapper
      {
        width: 300px;
        height: 100vh;
        top: 0;
        overflow-x: hidden;
        background:  linear-gradient(
          rgba(0, 0, 0, 0.7), 
          rgba(0, 0, 0, 0.7)
        ),
        url(https://i.pinimg.com/736x/be/67/57/be6757d2610cc12e64ce497c43734aac.jpg);;
        background-color: black;
        display: flex;
        text-align: center;
        border-right: 10px solid white;
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
}

globalThis.customElements.define(PortfolioSidebar.tag, PortfolioSidebar);