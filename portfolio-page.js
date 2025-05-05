/**
 * Copyright 2025 Rex Kenyon
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";


/**
 * `portfolio-page`
 * 
 * @demo index.html
 * @element portfolio-page
 */
export class PortfolioPage extends DDDSuper(LitElement) {

  static get tag() {
    return "portfolio-page";
  }

  constructor() {
    super();
    this.title = "";
    this.order = null;
    this.cta = false;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      order: { type: Number },
      cta: { type: Boolean },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        height: 100vh;
        display: block;
        background-color: var(--ddd-theme-accent);
      }
      .h1 {
        color: white;
      }
      
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <h1>${this.title}</h1>
    <div class="wrapper">
      <slot></slot>
    </div>`;
  }
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }

    
    this.dispatchEvent(new CustomEvent('page-added', {
      bubbles: true,
      composed: true,
      detail: {
        value: this
      }
    }))
  }
}

globalThis.customElements.define(PortfolioPage.tag, PortfolioPage);