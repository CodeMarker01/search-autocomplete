import { useEffect, useRef, useState } from "react";

// Hook
export function useOnClickOutsideMe(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}

export function useClickOutside() {
  const ref = useRef();
  const [state, setState] = useState({
    hasClickedOutside: false,
  });

  function handleEvent(e) {
    /* istanbul ignore else  */
    if (ref && ref.current) {
      if (ref.current.contains(e.target)) {
        setState({ hasClickedOutside: false });
      } else {
        setState({ hasClickedOutside: true });
      }
    }
  }

  useEffect(() => {
    if (window.PointerEvent) {
      document.addEventListener("pointerdown", handleEvent);
    } else {
      document.addEventListener("mousedown", handleEvent);
      document.addEventListener("touchstart", handleEvent);
    }

    return () => {
      if (window.PointerEvent) {
        document.removeEventListener("pointerdown", handleEvent);
      } else {
        document.removeEventListener("mousedown", handleEvent);
        document.removeEventListener("touchstart", handleEvent);
      }
    };
  }, []);

  return [ref, state.hasClickedOutside];
}
