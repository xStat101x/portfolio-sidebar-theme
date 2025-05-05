/**
 * Copyright 2025 Rex Kenyon
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./portfolio-page.js";
/**
 * `simple-cta-v2`
 * 
 * @demo index.html
 * @element simple-cta-v2
 * @description A better version of simple-cta that allows me to change the icon because I couldn't figure it out
 */
export class SimpleCtaV2 extends DDDSuper(LitElement) {

  static get tag() {
    return "simple-cta-v2";
  }

  constructor() {
    super();
    this.title = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        width: 400px;
        height: 200px;
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--portfolio-sidebar-theme-label-font-size, var(--ddd-font-size-s));
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <div class=${this.title}>
      <a href=${this.href}>
        <img src=${this.img}></img>
      </a>
      <slot></slot>
    </div>`;
  }
}

globalThis.customElements.define(PortfolioPageWrapper.tag, PortfolioPageWrapper);