import { readFileSync, writeFileSync } from "node:fs";

const chunkArray = (inputArray, perChunk) => {
  return inputArray.reduce((all, one, i) => {
    const ch = Math.floor(i / perChunk);
    all[ch] = [].concat(all[ch] || [], one);
    return all;
  }, []);
};

const getCustomMap = () => {
  const text = readFileSync("data/custom.txt", { encoding: "utf-8" });
  return new Map(
    text
      .trim()
      .split("\n")
      .map((line) => {
        const word = line.split(",")[0].trim();
        const zooin = line.split(",")[1].trim().split(" ");
        return [word, zooin.map((z, i) => [word[i], z])];
      }),
  );
};

const genreMap = new Map([
  ["data/fruit.txt", { genre: "水果", path: "src/data/fruit.json" }],
  ["data/meat.txt", { genre: "肉", path: "src/data/meat.json" }],
  ["data/other.txt", { genre: "其他", path: "src/data/other.json" }],
  ["data/sauce.txt", { genre: "調味料", path: "src/data/sauce.json" }],
  ["data/vegetable.txt", { genre: "菜", path: "src/data/vegetable.json" }],
]);

const processZooin = (webResult) => {
  return webResult
    .map((item) => ({
      name: item[0],
      data: item[1].split("　").map((z, i) => [item[0][i], z]),
    }))
    .reduce((a, b) => (a.name.length > b.name.length ? a : b));
};

const getZooinFromWeb = async (txt) => {
  const res = await fetch(
    `http://cmex.ericjoung.idv.tw/phon/getPhon.jsp?txt=${txt}`,
  );
  const data = await res.json();
  const result = processZooin(data);
  if (txt.length !== result.data.length) {
    const customMap = getCustomMap();
    if (customMap.has(txt)) {
      return { name: txt, data: customMap.get(txt) };
    } else {
      console.info(`無法自動標音: ${txt} 請手動新增字典`);
      return result;
    }
  } else {
    return result;
  }
};

const preprocess = async (path) => {
  let result_array_all = [];
  const text = readFileSync(path, { encoding: "utf-8" });
  const item_array = text.trim().split("\n");
  const item_arrayChunked = chunkArray(item_array, 5);
  for (const chunk of item_arrayChunked) {
    const result_web = await Promise.all(chunk.map(getZooinFromWeb));
    result_array_all = [...result_array_all, ...result_web];
  }
  const result = result_array_all.map((item) => ({
    genre: genreMap.get(path).genre,
    ...item,
  }));
  writeFileSync(genreMap.get(path).path, JSON.stringify(result));
};

const preprocessAll = async () => {
  await Promise.all([...genreMap.keys()].map(preprocess));
};

preprocessAll();

export default preprocessAll;
