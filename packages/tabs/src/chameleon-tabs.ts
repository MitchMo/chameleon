import {
  LitElement,
  TemplateResult,
  customElement,
  property,
  html
} from "lit-element";
import base from "@chameleon-ds/theme/base";
import style from "@chameleon-ds/theme/base/tabs";

@customElement("chameleon-tabs")
export default class ChameleonTabs extends LitElement {
  constructor() {
    super();
    this.addEventListener("selected-changed", this._handleSelectedChanged);
  }

  /**
   * Lifecycle Methods
   */
  firstUpdated() {
    const tabs = Array.from(this.querySelectorAll("chameleon-tab"));

    if (tabs.length <= 0)
      throw new Error(
        "<chameleon-tabs> must have at least one <chameleon-tab> element"
      );

    tabs.forEach((tab, i) => tab.setAttribute("data-index", i.toString()));
  }

  updated(changedProperties) {
    if (changedProperties.has("selected")) {
      const tabs = Array.from(this.querySelectorAll("chameleon-tab"));

      tabs.forEach((tab, i) => {
        tab.removeAttribute("active");
        if (i === this.selected) tab.setAttribute("active", "true");
      });
    }
  }

  /**
   * Properties
   */
  @property({ type: Number, reflect: true })
  selected = 0;

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

  _handleSelectedChanged(e): void {
    e.preventDefault();
    this.selected = parseInt(e.detail.value);
  }
}
