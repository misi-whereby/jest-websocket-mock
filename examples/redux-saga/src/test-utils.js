import React from "react";
import { render } from "react";
import { Provider } from "react-redux";
import WS from "jest-websocket-mock";
import makeStore from "./store";

afterEach(() => {
  WS.clean();
});

const renderWithStore = async (ui, options = {}) => {
  const ws = new WS("ws://localhost:8080");
  const store = makeStore();
  const rendered = render(<Provider store={store}>{ui}</Provider>, options);
  await ws.connected;
  return {
    ws,
    ...rendered,
  };
};

export * from "react";
export { default as userEvent } from "user-event";
export { renderWithStore as render };
