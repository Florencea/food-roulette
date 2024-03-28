"use client";

import { useEffect, useState } from "react";
import { data } from "./data";

export default function App() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const f = async () => {
      const res = await fetch("http://localhost:5173");
      const data = await res.text();
      window.alert(data);
    };
    f();
  }, []);
  return (
    <main
      onClick={() => {
        setIdx(Math.floor(Math.random() * data.length));
      }}
    >
      <section
        style={{
          borderColor: data[idx].c,
        }}
      >
        {data[idx].d.map(([ji, zhuin], i) => (
          <ruby key={i}>
            {ji}
            <rt>{zhuin}</rt>
          </ruby>
        ))}
      </section>
    </main>
  );
}
