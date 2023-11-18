import {chohan} from "./chohan";

jest.mock("./seed", () => {
  return {
    seed: jest
      .fn()
      .mockImplementationOnce(() => 2)
      .mockImplementationOnce(() => 1),
  };
});

describe("chohan", () => {
  it("returns even when seed returns an even number like 2", () => {
    expect(chohan()).toBe("even");
  });

  it("returns odd when seed returns an odd number like 1", () => {
    expect(chohan()).toBe("odd");
  });
});
