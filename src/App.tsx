import { useState } from "react";
import data from "./data";
import "./style.css";

const rand = () => Math.floor(Math.random() * data.length);

export default function App() {
  const [idx, setIdx] = useState(0);

  const word = data[idx];

  return (
    <main
      onClick={() => {
        setIdx(rand());
      }}
    >
      <section
        style={{
          borderColor: {
            肉: "#ff7a45",
            菜: "#73d13d",
            水果: "#bae637",
            調味料: "#ffec3d",
            其他: "#bfbfbf",
          }[word.genre],
        }}
      >
        {word.data.map(([ji, zhuin], i) => (
          <ruby key={i}>
            {ji}
            <rt>{zhuin}</rt>
          </ruby>
        ))}
      </section>
    </main>
  );
}
