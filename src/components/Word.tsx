export interface WordT {
  name: string;
  genre: "肉" | "菜" | "水果" | "調味料" | "其他" | string;
  data: string[][];
}

interface Props {
  word?: WordT;
}

const wordColorMap: Record<WordT["genre"], string> = {
  肉: "#ff7a45",
  菜: "#73d13d",
  水果: "#bae637",
  調味料: "#ffec3d",
  其他: "#bfbfbf",
};

export const Word = ({ word }: Props) => {
  const borderColor = word
    ? wordColorMap[word.genre]
    : "rgba(249, 250, 251, 1)";
  return (
    <div className="min-h-screen bg-gray-50 p-3 flex justify-center items-center">
      <div
        className="p-10 rounded-3xl border-4"
        style={{
          borderColor,
        }}
      >
        <div className="text-9xl v flex flex-col justify-center justify-items-center align-middle">
          {word !== undefined ? (
            word.data.map((w, i) => (
              <ruby className="select-none" key={`w-${i}`}>
                {w[0]}
                <rt className="select-none">{w[1]}</rt>
              </ruby>
            ))
          ) : (
            <span> </span>
          )}
        </div>
      </div>
    </div>
  );
};
