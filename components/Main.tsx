"use client";

import styles from "@/components/Main.module.css";
import { useCallback, useState } from "react";

interface Props {
  data: Array<{
    c: string;
    d: Array<Array<string>>;
  }>;
}

export const Main = ({ data }: Props) => {
  const [idx, setIdx] = useState(0);

  const randomize = useCallback(() => {
    const randomIdx = Math.floor(Math.random() * data.length);
    setIdx(randomIdx);
  }, [data.length]);

  const item = data[idx];
  const contents = item.d;
  const borderColor = item.c;

  return (
    <main className={styles.main} onClick={randomize}>
      <section className={styles.section} style={{ borderColor }}>
        {contents.map(([text, zhuin], key) => (
          <ruby className={styles.ruby} key={key}>
            {text}
            <rt className={styles.rt}>{zhuin}</rt>
          </ruby>
        ))}
      </section>
    </main>
  );
};
