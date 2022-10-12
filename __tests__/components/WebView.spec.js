import React from "react";
import TestRenderer from "react-test-renderer";

import WebViewComponent from "../../components/WebView";

const getComponent = (props = {}) => <WebViewComponent {...props} />;
describe("<App />", () => {
  it("Snapshot - 1 ", () => {
    const component = getComponent();
    expect(component).toMatchSnapshot();
  });

  it("Render webview with url", () => {
    const component = getComponent({
      route: {
        params: {
          uri: "https://google.com",
        },
      },
    });

    const testRenderer = TestRenderer.create(component);
  });
});
