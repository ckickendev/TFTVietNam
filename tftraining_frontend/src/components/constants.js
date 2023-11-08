export const COLOR = {
  BLACK: "#313236",
  UNDER_BLACK: "#303641",
  BLACK_BACKGROUND: "#000000aa",
  WHITE: "#ffffff",
  GREEN: "#2f7d31",
  YELLOW: "#ffdf80"
};

export const SIZE = {
  SIZE_IMAGE_CHANGE_CHAMPION: "28px",
  WIDTH_ICON: "28px",
  HEIGHT_ICON: "28px",
  TRAIT_ICON_WIDTH: "12px",
  TRAIT_ICON_HEIGHT: "12px",
};

export const XP_THRESH = [-1, -1, 2, 6, 10, 20, 32, 50, 66];
export const REROLL_ODDS = {
  2: [100, 0, 0, 0, 0],
  3: [70, 30, 0, 0, 0],
  4: [50, 35, 15, 0, 0],
  5: [35, 40, 20, 5, 0],
  6: [20, 35, 35, 10, 0],
  7: [14, 30, 40, 15, 1],
  8: [13, 20, 35, 25, 7],
  9: [10, 15, 25, 35, 15],
};
export const SELL_RATE = {
  1: [1, 3, 5],
  2: [2, 4, 6],
  3: [3, 5, 7],
  4: [4, 6, 8],
  5: [5, 7, 9],
};
export const CHAMPION_TOTAL_AMOUNT = {
  1: 29,
  2: 22,
  3: 16,
  4: 12,
  5: 10,
};
export var KEYBINDS = [
  [65, "Buy XP"],
  [68, "Reroll"],
  [69, "Sell Champion"],
];

const ChampionData = require("./json/champions.json");
export var championPool = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
};

ChampionData.forEach((champion) => {
  let cost = champion.cost;
  for (let i = 0; i < CHAMPION_TOTAL_AMOUNT[cost]; i++) {
    championPool[cost].push(champion);
  }
});

export const LINK_IMAGE_FIREBASE = {
  ICON_PENGUIN_HOME_1:
    "https://firebasestorage.googleapis.com/v0/b/tftspam-75b96.appspot.com/o/image%2Fhappy_pengu.png6fd34aa9-71e0-4859-a179-c33a8a40fce8?alt=media&token=10384525-af99-4732-9ca0-37b01331af1f",
  ICON_PENGUIN_HOME_2:
    "https://firebasestorage.googleapis.com/v0/b/tftspam-75b96.appspot.com/o/image%2Fcheer_pengu.pngcbf71715-695d-42f9-a382-d7aec4777d09?alt=media&token=af79aeef-ce39-416e-a766-b73e64e47f9e",
  ICON_PENGUIN_HOME_3:
    "https://firebasestorage.googleapis.com/v0/b/tftspam-75b96.appspot.com/o/image%2Fdab_pengu.pngdeb0765e-b0d7-4d39-8b97-6dd000f5619a?alt=media&token=3b9cd0c1-f174-4c67-b02e-bd7ee8cd6d26",
};
