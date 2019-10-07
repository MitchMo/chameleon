import { storiesOf } from "@storybook/polymer";
import { withKnobs } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "../../packages/table/src/chameleon-table";

const stories = storiesOf("Table", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

stories.add(
  "Table",
  () => {
    // TODO(ryuhhnn): I don't like this markup, idealy the <chameleon-table> acts as the <table> itself
    return html`
      <chameleon-table>
        <table>
          <thead>
            <td>Name</td>
            <td>Location</td>
            <td>Price</td>
          </thead>
          <tbody>
            <tr>
              <td>Arch</td>
              <td>St. Louis</td>
              <td>$19.99</td>
            </tr>
          </tbody>
        </table>
      </chameleon-table>
    `;
  },
  { info: { inline: true } }
);
