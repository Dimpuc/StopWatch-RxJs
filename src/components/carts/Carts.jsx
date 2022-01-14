import React from "react";
import { SBlockCart, SCart } from "./styled";

export function Carts({ time }) {
  let seconds = time % 60;
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor(time / 60);

  return (
    <SBlockCart>
      <SCart>{hours < 10 ? "0" + hours : hours}</SCart>:
      <SCart>{minutes < 10 ? "0" + minutes : minutes}</SCart>:
      <SCart>{seconds < 10 ? "0" + seconds : seconds}</SCart>
    </SBlockCart>
  );
}
