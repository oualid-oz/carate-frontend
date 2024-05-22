import { IntlProvider } from "react-intl";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./app/containers/App";

function App() {
  return (
    <IntlProvider>
      <Main />
    </IntlProvider>
  );
}

export default App;