const { ChronolicalAge } = require("./index");

test("Testing my birthday: ", () => {
  expect(ChronolicalAge(2002, 3, 5)).toStrictEqual({
    years: 22,
    months: 1,
    days: 14,
  });
});

