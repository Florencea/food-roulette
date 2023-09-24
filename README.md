# 今天吃什麼好呢

- <https://florencea.github.io/food-roulette/>
- 每天不知買什麼食材嗎？
- 隨機選擇食材顯示，提示今天買什麼
- 有 PWA 功能，可以離線安裝

## 框架與函式庫

- [Vite](https://cn.vitejs.dev/)
- [Ant Design](https://ant.design/index-cn)
- [Tailwind CSS](https://tailwindcss.com/)

## 資料更新

- 更新`data`目錄下的`.txt`檔案，一行一筆資料，再執行

```sh
npm run update_data
```

- 會自動利用教育部資料進行自動標音、編譯與部署，但若教育部字典沒收錄的詞會跳出警告

```text
無法自動標音: 地瓜葉 請手動新增字典
```

- 請在`data/custom.txt`中按照以下格式手動新增資料，可以修正讀音
- `詞`與`注音`用`,`分隔
- `注音`之間用空白分隔
- 一行一個資料

```text
梅花肉,ㄇㄟˊ ㄏㄨㄚ ㄖㄡˋ
地瓜葉, ㄉㄧˋ ㄍㄨㄚ ㄧㄝˋ
```
