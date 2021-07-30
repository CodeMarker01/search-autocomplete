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

export function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}

export function useDebounceYoutube(value, timeout, callback) {
  const [timer, setTimer] = useState(null);

  const clearTimer = () => {
    if (timer) clearTimeout(timer);
  };

  useEffect(() => {
    clearTimer();

    if (value && callback) {
      const newTimer = setTimeout(callback, timeout);
      setTimer(newTimer);
    }
  }, [value]);
}
