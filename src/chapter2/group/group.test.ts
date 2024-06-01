/**
 * @jest-environment node
 */
describe("グループ名", () => {
  test("テストケース1", () => {
    expect(true).toBe(true);
  });
  test("テストケース2", () => {
    expect(true).toBe(true);
  });
  test("テストケース3", () => {
    expect(true).toBe(true);
  });

  // 入れ子でグループを定義できる
  describe("グループ名", () => {
    test("グループ名", () => {
      expect(true).toBe(true);
    });
  });
});
