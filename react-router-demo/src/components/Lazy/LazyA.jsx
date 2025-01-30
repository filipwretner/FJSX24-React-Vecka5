import React from "react";

export default function LazyA() {

    let result = 0;
    for (let i = 0; i < 3000; i++) {
        result += Math.sqrt(i) * Math.random();
    }

  return (
    <div>
        <h2>LazyA Component</h2>
        <p>Resultatet av tung beräkning: {result.toFixed(4)}</p>
    </div>
  );
}