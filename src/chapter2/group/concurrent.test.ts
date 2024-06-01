/**
 * @jest-environment node
 */
//npx jest src/chapter2/group/concurrent.test.ts --runInBand
//npx jest src/chapter2/group/concurrent.test.ts --runInBand --maxConcurrency=10

const fetchData = () =>
  new Promise((resolve) => setTimeout(resolve, 1000, "lemon"));

test.concurrent.each(
  Array.from(new Array(100).keys()).map((n) => ({n, expected: "lemon"}))
)("fetchData $n", async ({n, expected}) => {
  console.log(n);
  await expect(fetchData()).resolves.toBe(expected);
});

test.concurrent.skip.each(
  Array.from(new Array(100).keys()).map((n) => ({n, expected: "lemon"}))
)("concurrent test $n", async ({n, expected}) => {
  console.log(n);
  await expect(fetchData()).resolves.toBe(expected);
});
