import { useEffect, useRef } from "react";

export default function useClickOutsideListener(handler) {
  const ref = useRef(null);
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      handler();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mosuedown", handleClickOutside);
  }, []);
  return ref;
}
