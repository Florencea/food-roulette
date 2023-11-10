import { useState } from "preact/hooks";
import data from "./data";

export default function App() {
  const [idx, setIdx] = useState(0);
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
