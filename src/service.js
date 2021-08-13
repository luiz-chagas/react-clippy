import clippy from "clippyjs";
import "./clippy.css";

export const load = (name = "") =>
  new Promise((resolve, reject) => {
    clippy.load(
      name,
      resolve,
      reject,
      "https://cdn.jsdelivr.net/gh/pi0/clippyjs/assets/agents/"
    );
  });
