import React, { useEffect, useRef } from "react";
import { load } from "./service";

export const ClippyRef = React.forwardRef(
  ({ name = "Clippy", onLoad = () => null }, ref) => {
    const clippy = useRef(null);
    // const [hasLoaded, setHasLoaded] = useState(false);

    if (!ref) {
      throw Error("Clippy component requires a ref");
    }

    useEffect(async () => {
      try {
        const agent = await load(name);
        clippy.current = agent;
        ref.current = agent;
        onLoad();
        // setHasLoaded(true);
      } catch (err) {
        console.error(err);
      }

      return () => {
        if (clippy.current) {
          ref.current = null;
          clippy.current.hide();
        }
      };
    }, []);

    return <></>;
  }
);
