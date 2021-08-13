import React, { useRef } from "react";
import { render } from "react-dom";

import { ClippyRef } from "../../src/clippy";

const Demo = () => {
  const clippy = useRef(null);

  const onLoad = () => {
    clippy.current.show();
  };

  return (
    <div>
      <h1>Clippy Demo</h1>
      <ClippyRef name="Clippy" ref={clippy} onLoad={onLoad} />
    </div>
  );
};

render(<Demo />, document.querySelector("#demo"));
