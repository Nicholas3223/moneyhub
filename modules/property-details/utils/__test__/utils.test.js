import { yearsSincePurchase, purchaseDate } from "../property-details-utils";

test('yearsSincePurchase returns correct number', () => {
  const purchaseDate = "2015-09-03";
  const year = Number(new Date().getFullYear());
  const currentYears = Number(purchaseDate.match(/\d{4}/)[0]);
  expect(yearsSincePurchase(purchaseDate)).toEqual(year - currentYears);
});

test('purchaseDate returns correct month and year', () => {
  const date = "2017-09-03";
  expect(purchaseDate(date)).toEqual(` in September 2017`);
});