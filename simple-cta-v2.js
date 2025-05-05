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
    this.link = "";
    this.img = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      link: { type: String },
      img: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: absolute;
      }
      .wrapper {
        width: 100px;
        height: 100px;
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      a {
        display: inline-block;
        text-decoration: none; /* Remove underline from the link */
      }
      img {
        width: 100%;
        height: auto;
        border-radius: var(--ddd-border-radius-1);
        box-shadow: var(--ddd-shadow-1);
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="wrapper">
      <a href=${this.link}>
        <img src=${this.img} alt="No Image" />
      </a>
      <slot></slot>
    </div>`;
  }
}

globalThis.customElements.define(SimpleCtaV2.tag, SimpleCtaV2);