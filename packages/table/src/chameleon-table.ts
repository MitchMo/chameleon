import { LitElement, TemplateResult, customElement, html } from "lit-element";
import base from "@chameleon-ds/theme/base";
import style from "@chameleon-ds/theme/base/table";

@customElement("chameleon-table")
export default class ChameleonTable extends LitElement {
  /**
   * Properties
   */

  // @property({ type: String, reflect: true })
  // foo = "bar";

  /**
   * Styles
   */
  static styles = [base, style];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }
}
