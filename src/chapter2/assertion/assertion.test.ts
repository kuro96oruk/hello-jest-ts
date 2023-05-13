// npx jest src/chapter2/assertion/assertion.test.ts

test("testを利用してテストケースを作成する", () => {
    const result = true;
    const expected = true;
    expect(result).toBe(expected); // expect関数とtoBe関数(マッチャー関数)を利用して結果を評価する
});

it("itを利用してテストケースを作成する", () => {
    expect(true).toBe(true);
});
