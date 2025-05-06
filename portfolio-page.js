/**
 * Copyright 2025 Rex Kenyon
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./simple-cta-v2.js";

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
        position: relative;
      }
      .h1 {
        color: var(--ddd-theme-default-white);
        
      }
      .header {
        background-color: var(--ddd-theme-default-nittanyNavy);
        text-align: right;
        padding: var(--ddd-spacing-1);
        width: 100vw;
        left: -330px;
        position: relative;
      }
      simple-cta-v2 {
        position: absolute;
        bottom: 0;
        right: 0;
      }
      @media (max-width: 768px) {
        :host {
          padding: px;
        }
        .h1 {
          width: 100vw;
          font-size: var(--ddd-font-size-2); 
        }
        .header {
          right: 0;
          left: -10px;
        }
        .wrapper {
          display: block;
          position: relative;
          flex-direction: column;
          width: 100%;
        }
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="header">
      <h1>${this.title}</h1>
    </div>
    ${this.cta ? html`<simple-cta-v2 link="https://gopsusports.com/spirit/nittany-lion-mascot" img="https://gopsusports.com/_nuxt/logo-BDHEpLK6.svg"></simple-cta-v2>`: ''}
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