import localFont from "next/font/local";
import "./style.css";

const BopomofoRuby = localFont({
  variable: "--BopomofoRuby",
  src: "./BopomofoRuby1909-v1-Regular.ttf",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" className={BopomofoRuby.variable}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>今天吃什麼好呢</title>
        <meta name="description" content="今天吃什麼好呢" />
      </head>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
