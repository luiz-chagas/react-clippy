import React, { createRef } from "react";
import { render, waitFor } from "@testing-library/react";

import { Clippy } from "../src/clippy";
import { load } from "../src/service";

jest.mock("../src/service.js");

describe("Clippy", () => {
  it("exists", () => {
    expect(Clippy).toBeDefined();
  });

  it("Calls load function", async () => {
    const loadFn = jest.fn().mockResolvedValue("Clippy");
    load.mockImplementation(loadFn);

    const ref = createRef();
    render(<Clippy name="Clippy" ref={ref} onLoad={jest.fn()} />);
    await waitFor(() => {
      expect(loadFn).toHaveBeenCalled();
    });
  });

  it("Calls onLoad after loading", async () => {
    const onLoad = jest.fn();
    const ref = createRef();
    render(<Clippy name="Clippy" ref={ref} onLoad={onLoad} />);
    await waitFor(() => {
      expect(onLoad).toHaveBeenCalled();
    });
  });
});
