import {sum} from "./sum";

// テストケースを定義
test(" 1 + 2 equals 3", () => {
    // ここではsum(1,2)を実行した結果として3が返されることを検証している
    expect(sum(1, 2)).toBe(3);
});
