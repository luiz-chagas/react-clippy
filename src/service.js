import clippy from "clippyjs";
import "./clippy.css";

const DEFAULT_CDN = "https://cdn.jsdelivr.net/gh/pi0/clippyjs/assets/agents/";

export const load = (name = "", cdnUrl = DEFAULT_CDN) => {
  return new Promise((resolve, reject) => {
    clippy.load(
      name,
      resolve,
      reject,
      cdnUrl,
    );
  });
}
