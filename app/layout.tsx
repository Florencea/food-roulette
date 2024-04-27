import { clsx } from "clsx";
import localFont from "next/font/local";
import styles from "./layout.module.css";

const BopomofoRuby = localFont({
  variable: "--BopomofoRuby",
  src: "../assets/BopomofoRuby1909-v1-Regular.ttf",
  display: "swap",
});

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="zh-TW" className={clsx(BopomofoRuby.variable, styles.html)}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>今天吃什麼好呢</title>
        <meta name="description" content="今天吃什麼好呢" />
      </head>
      <body className={styles.body}>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default layout;
