# Clippy React

React wrapper around [ClippyJS](https://github.com/pi0/clippyjs)

## Installation

```bash
npm install --save clippy-react
```

## Usage

Currently there's only a `ref` version of the Clippy component. A declarative version is in the works.

```tsx
import { Clippy } from "clippy-react";

export const Demo = () => {
  const clippy = useRef<Clippy>();

  const onClippyLoad = () => {
    if(clippy.current){
      clippy.current.show();
      clippy.current.speak('Hello World');
      clippy.current.play('GetTechy');
    }
  }

  return (
    <>
      <h1>Hello World</h1>
      <Clippy ref={clippy} onLoad={onClippyLoad}>
    </>;
  );
}
```

## Screenshot

![Clippy](/Demo.png)
