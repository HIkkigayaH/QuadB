import React, { useEffect, useState } from "react";
import "./Dropdowns.css";
import { v1 as uuid } from "uuid";
import useClickOutsideListener from "../../CustomHooks/useClickOutsideListener";
import { Link } from "react-router-dom";

export const CurrencyDropdown = ({
  links,
  preFix = "",
  siblingRef: { current },
  closeHandler,
}) => {
  const ref = useClickOutsideListener(closeHandler);
  return (
    <div
      className="absolute top-0 left-0 pa0 pt2 pb2 tl dropdown-container"
      style={{
        transform: `translate3d(5px,${
          current ? current.getBoundingClientRect().height + 7 : 0
        }px,0)`,
      }}
      ref={ref}
    >
      {links.length &&
        links.map((name) => (
          <Link
            to={`/${preFix}-${name}`}
            key={uuid()}
            className="dropdown-item no-underline nowrap fw400"
            onClick={closeHandler}
          >
            {name}
          </Link>
        ))}
    </div>
  );
};
export const CryptoDropdown = ({
  postFix = "",
  links,
  siblingRef,
  closeHandler,
}) => {
  const [goDown, setGoDown] = useState(false);
  const checkTop = () =>
    setGoDown(siblingRef.current.getBoundingClientRect().y < 25);
  const ref = useClickOutsideListener(closeHandler);
  useEffect(() => {
    document.addEventListener("scroll", checkTop);
    return () => document.removeEventListener("scroll", checkTop);
  }, []);
  return (
    <div
      className={`top-0 ${
        goDown ? "absolute left-0" : "fixed"
      } pa0 pt2 pb2 tl dropdown-container`}
      ref={ref}
      style={{
        transform: goDown
          ? `translate3d(5px,${
              siblingRef.current
                ? siblingRef.current.getBoundingClientRect().height + 7
                : 0
            }px,0)`
          : `translateX(${50}px)`,
      }}
    >
      {links.length &&
        links.map((name) => (
          <Link
            to={`/${name}-${postFix}`}
            key={uuid()}
            className="dropdown-item no-underline nowrap fw400"
            onClick={closeHandler}
          >
            {name}
          </Link>
        ))}
    </div>
  );
};
