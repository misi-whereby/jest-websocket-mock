const { act } = require("react");

describe("The index", () => {
  it("can be imported without errors", () => {
    const root = document.createElement("div");
    root.setAttribute("id", "root");
    document.body.appendChild(root);

    act(() => {
      require("./index.tsx");
    });
  });
});
