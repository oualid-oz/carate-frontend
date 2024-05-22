import { memo } from "react";
import _isFunction from "lodash/isFunction";

function Show({ if: show, children, ...props }) {
  if (show) {
    return _isFunction(children) ? children(props) : children;
  }
  return null;
}

export default memo(Show);
