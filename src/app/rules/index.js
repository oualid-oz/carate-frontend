import React from "react";
import { FormattedMessage } from "react-intl";

import messages from "../containers/messages";

export const PDT_RULES = {
  required: {
    required: true,
    message: <FormattedMessage {...messages.required} />,
  },
  isNumber: {
    pattern: new RegExp("^[0-9]*$"),
    message: <FormattedMessage {...messages.isNumber} />,
  },
  isYear: {
    pattern: new RegExp("^[0-9]{4}$"),
    message: <FormattedMessage {...messages.isYear} />,
  },
  isDecimal: {
    pattern: new RegExp(/^\d*\.?\d*$/),
    message: <FormattedMessage {...messages.isDecimal} />,
  },
  isLink: {
    pattern: new RegExp("^(http|https)://"),
    message: <FormattedMessage {...messages.isLink} />,
  },
};
