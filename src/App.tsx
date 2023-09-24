import { useState } from "react";
import { Word, WordT } from "./components/Word";
import fruit_data from "./data/fruit.json";
import meat_data from "./data/meat.json";
import other_data from "./data/other.json";
import sauce_data from "./data/sauce.json";
import vegetable_data from "./data/vegetable.json";

const wordData = [
  ...vegetable_data,
  ...meat_data,
  ...fruit_data,
  ...sauce_data,
  ...other_data,
];

const roulette = () => {
  const total = wordData.length;
  const index = Math.floor(Math.random() * total);
  return wordData[index];
};

export default function App() {
  const [word, setWord] = useState<WordT>(roulette());
  return (
    <div
      className="select-none cursor-pointer"
      onClick={() => {
        setWord(roulette());
      }}
    >
      <Word word={word} />
    </div>
  );
}
