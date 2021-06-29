import React from "react";

export function init() {
  const elem = React.createElement("div", { className: "div" });
  console.log("init", elem);
}
