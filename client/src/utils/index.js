import React from "react";
import { ReactDOM } from "react-dom";
import App from "../../App";

import * as themes from './schema.json'
import { setToLS } from "./storage.js";

const Index = () => {
    setToLS("all-themes", themes.default);
    return (
      <App />
    );
}

ReactDOM.render(<Index />, document.getElementById("root"));