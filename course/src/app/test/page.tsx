"use client";

import { useState } from "react";

export default function Test() {
  const [name, setName] = useState("user");
  const prods = ["prod1", "prod2", "prod3"];

  function getInputValue() {
    const input = document.querySelector("input");
    if (!input) return;
    setName(input.value);
  }
  return (
    <>
      <h1>hello, user!</h1>
      {prods.map((prod) => (
        <p key={prod}>{prod}</p>
      ))}
      <input type="text" />
      <button onClick={getInputValue}></button>
      <p>name: {name}</p>
    </>
  );
}
