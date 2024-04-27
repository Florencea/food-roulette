import { clsx } from "clsx";
import type { Metadata } from "next";
import localFont from "next/font/local";
import styles from "./layout.module.css";

const BopomofoRuby = localFont({
  variable: "--BopomofoRuby",
  src: "../assets/BopomofoRuby1909-v1-Regular.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "今天吃什麼好呢",
  description: "今天吃什麼好呢",
};

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="zh-TW" className={clsx(BopomofoRuby.variable, styles.layout)}>
      <body>{children}</body>
    </html>
  );
};

export default layout;
