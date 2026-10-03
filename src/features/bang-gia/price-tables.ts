import type { PriceCell } from "./price-format";

/**
 * Prices for the four /bang-gia tables, shared by every locale.
 *
 * Only the numbers live here; route names, headers and notes are in the
 * dictionaries (`pricing.tables[n].rows` holds the leading label cells of each
 * row). Before this file existed every price was written out once per language,
 * so a price change had to be made twice and nothing caught a missed one.
 *
 * Row order must match the dictionary rows — `BangGiaCard` throws if a table's
 * row counts disagree.
 */
export const priceTables: PriceCell[][][] = [
  // Airport transfers: 4 / 7 / 16 seats
  [
    [200_000, 250_000, 500_000],
    [480_000, 550_000, 750_000],
    [400_000, 450_000, 600_000],
    [650_000, 700_000, 900_000],
    [1_000_000, 1_100_000, 1_400_000],
    [450_000, 500_000, 700_000],
    [950_000, 1_050_000, 1_300_000],
    [780_000, 850_000, 1_000_000],
    [1_400_000, 1_600_000, 2_000_000],
    [1_900_000, 2_200_000, 2_800_000],
  ],
  // Per km, by number of directions: 4 / 7 / 16 seats
  [
    [{ perKm: 13_000 }, { perKm: 15_000 }, { perKm: 20_000 }],
    [{ perKm: 12_000 }, { perKm: 13_000 }, { perKm: 18_000 }],
    [{ perKm: 11_000 }, { perKm: 12_000 }, { perKm: 15_000 }],
    [{ perKm: 8_000 }, { perKm: 10_000 }, { perKm: 15_000 }],
    [{ perKm: 7_500 }, { perKm: 9_000 }, { perKm: 12_000 }],
    [{ perKm: 7_000 }, { perKm: 8_000 }, { perKm: 10_000 }],
  ],
  // Fixed routes from Buon Ma Thuot: 4 / 7 / 16 seats
  [
    [200_000, 250_000, 500_000],
    [900_000, 1_100_000, 1_300_000],
    [700_000, 900_000, 1_100_000],
    [1_100_000, 1_250_000, 1_700_000],
    [800_000, 1_000_000, 1_200_000],
    [1_200_000, 1_250_000, 1_700_000],
    [900_000, 1_000_000, 1_200_000],
    [1_200_000, 1_300_000, 1_700_000],
    [2_600_000, 2_800_000, 3_500_000],
    [3_600_000, 4_000_000, 4_800_000],
    [1_400_000, 1_600_000, 2_400_000],
    [2_000_000, 2_200_000, 3_000_000],
    [2_200_000, 2_200_000, 3_000_000],
    [2_200_000, 2_500_000, 3_500_000],
    [3_800_000, 4_200_000, 5_000_000],
  ],
  // 29 / 45-seat coaches
  [
    [400_000, 500_000],
    [18_000, 20_000],
    [{ from: 2_500_000 }, { from: 3_500_000 }],
  ],
];
