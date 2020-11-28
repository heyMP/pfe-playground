import { LitElement, html, css } from 'lit-element';
import { openWcLogo } from './open-wc-logo.js';
import "@patternfly/pfe-card";
import "@patternfly/pfe-tabs";
import "@patternfly/pfe-content-set";
import "@patternfly/pfe-cta";
import "@patternfly/pfe-navigation";

export class PfePlayground extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
    };
  }

  static get styles() {
    return css`
    `;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
