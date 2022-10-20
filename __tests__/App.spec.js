import React from "react";

import { App } from "../App";

describe("<App />", () => {
  it("Snapshot - 1 ", async () => {
    expect(<App />).toMatchSnapshot();
  });
});
