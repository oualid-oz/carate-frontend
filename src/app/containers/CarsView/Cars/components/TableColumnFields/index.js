import { FormattedMessage } from "react-intl";
import { Input } from "antd";
import messages from "../../../../messages";
import { PDT_RULES } from "../../../../../rules";

export const editCarFields = () => [
  {
    label: <FormattedMessage {...messages.carName} />,
    name: "carName",
    inputComponent: (
      <Input
        placeholder="Name"
        autoComplete="new-password"
        className="bg-transparent text-white"
      />
    ),
    rules: [PDT_RULES.required],
  },
  {
    label: <FormattedMessage {...messages.carYear} />,
    name: "carYear",
    inputComponent: (
      <Input
        placeholder="1998"
        autoComplete="new-password"
        className="bg-transparent text-white"
      />
    ),
    rules: [PDT_RULES.required, PDT_RULES.isYear],
  },
  {
    label: <FormattedMessage {...messages.carColor} />,
    name: "carColor",
    inputComponent: (
      <Input
        placeholder="Red"
        autoComplete="new-password"
        className="bg-transparent text-white"
      />
    ),
    rules: [PDT_RULES.required],
  },
  {
    label: <FormattedMessage {...messages.carPrice} />,
    name: "carPrice",
    inputComponent: (
      <Input
        placeholder="2300.00"
        autoComplete="new-password"
        className="bg-transparent text-white"
      />
    ),
    rules: [PDT_RULES.required, PDT_RULES.isDecimal],
  },
  {
    label: <FormattedMessage {...messages.carImage} />,
    name: "image_url",
    inputComponent: (
      <Input
        placeholder="https://example.com"
        autoComplete="new-password"
        className="bg-transparent text-white"
      />
    ),
    rules: [PDT_RULES.required, PDT_RULES.isLink],
  },
  {
    label: <FormattedMessage {...messages.carDescription} />,
    name: "carDescription",
    inputComponent: (
      <Input.TextArea
        placeholder="Description"
        autoComplete="new-password"
        className="bg-transparent text-white"
      />
    ),
    rules: [PDT_RULES.required],
  },
];
