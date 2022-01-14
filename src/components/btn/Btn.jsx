import React from "react";
import { SBlockBtn, SBtn } from "./styled";

export function Btn(props) {
  return (
    <>
      <SBlockBtn>
        <SBtn onClick={props.start}>START</SBtn>
        <SBtn onClick={props.stop}>STOP</SBtn>
        <SBtn onDoubleClick={props.wait}>WAIT</SBtn>
        <SBtn onClick={props.reset}>RESET</SBtn>
      </SBlockBtn>
    </>
  );
}
