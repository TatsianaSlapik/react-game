export const HOUSE = "house";
export const TREE = "tree";
export const EMPTY = "empty";
export const GRANDMA = "grandma";
export const HERO = "hero";
export const RED_HAT = "red-hat";
export const WOLF = "wolf";
export const HARD = "hard";
export const EASY = "easy";
export const DAY = "day";
export const NIGHT = "night";

export const EasyLevels = {
  1: [
    [
      { row: 1, colum: 1, className: HERO },
      { row: 1, colum: 2, className: EMPTY },
      { row: 1, colum: 3, className: EMPTY },
      { row: 1, colum: 4, className: HOUSE },
    ],

    [
      { row: 2, colum: 1, className: EMPTY },
      { row: 2, colum: 2, className: TREE },
      { row: 2, colum: 3, className: TREE },
      { row: 2, colum: 4, className: EMPTY },
    ],

    [
      { row: 3, colum: 1, className: EMPTY },
      { row: 3, colum: 2, className: TREE },
      { row: 3, colum: 3, className: TREE },
      { row: 3, colum: 4, className: EMPTY },
    ],

    [
      { row: 4, colum: 1, className: EMPTY },
      { row: 4, colum: 2, className: EMPTY },
      { row: 4, colum: 3, className: EMPTY },
      { row: 4, colum: 4, className: EMPTY },
    ],
  ],
  2: [
    [
      { row: 1, colum: 1, className: HERO },
      { row: 1, colum: 2, className: TREE },
      { row: 1, colum: 3, className: TREE },
      { row: 1, colum: 4, className: TREE },
    ],

    [
      { row: 2, colum: 1, className: EMPTY },
      { row: 2, colum: 2, className: TREE },
      { row: 2, colum: 3, className: EMPTY },
      { row: 2, colum: 4, className: EMPTY },
    ],

    [
      { row: 3, colum: 1, className: EMPTY },
      { row: 3, colum: 2, className: TREE },
      { row: 3, colum: 3, className: HOUSE },
      { row: 3, colum: 4, className: TREE },
    ],

    [
      { row: 4, colum: 1, className: EMPTY },
      { row: 4, colum: 2, className: EMPTY },
      { row: 4, colum: 3, className: EMPTY },
      { row: 4, colum: 4, className: EMPTY },
    ],
  ],
  3: [
    [
      { row: 1, colum: 1, className: EMPTY },
      { row: 1, colum: 2, className: EMPTY },
      { row: 1, colum: 3, className: EMPTY },
      { row: 1, colum: 4, className: TREE },
    ],

    [
      { row: 2, colum: 1, className: EMPTY },
      { row: 2, colum: 2, className: TREE },
      { row: 2, colum: 3, className: EMPTY },
      { row: 2, colum: 4, className: EMPTY },
    ],

    [
      { row: 3, colum: 1, className: HERO },
      { row: 3, colum: 2, className: TREE },
      { row: 3, colum: 3, className: TREE },
      { row: 3, colum: 4, className: EMPTY },
    ],

    [
      { row: 4, colum: 1, className: TREE },
      { row: 4, colum: 2, className: TREE },
      { row: 4, colum: 3, className: HOUSE },
      { row: 4, colum: 4, className: EMPTY },
    ],
  ],
  4: [
    [
      { row: 1, colum: 1, className: EMPTY },
      { row: 1, colum: 2, className: HERO },
      { row: 1, colum: 3, className: EMPTY },
      { row: 1, colum: 4, className: EMPTY },
    ],

    [
      { row: 2, colum: 1, className: EMPTY },
      { row: 2, colum: 2, className: EMPTY },
      { row: 2, colum: 3, className: TREE },
      { row: 2, colum: 4, className: EMPTY },
    ],

    [
      { row: 3, colum: 1, className: EMPTY },
      { row: 3, colum: 2, className: EMPTY },
      { row: 3, colum: 3, className: EMPTY },
      { row: 3, colum: 4, className: EMPTY },
    ],

    [
      { row: 4, colum: 1, className: TREE },
      { row: 4, colum: 2, className: TREE },
      { row: 4, colum: 3, className: TREE },
      { row: 4, colum: 4, className: HOUSE },
    ],
  ],
  5: [
    [
      { row: 1, colum: 1, className: TREE },
      { row: 1, colum: 2, className: TREE },
      { row: 1, colum: 3, className: EMPTY },
      { row: 1, colum: 4, className: HERO },
    ],

    [
      { row: 2, colum: 1, className: EMPTY },
      { row: 2, colum: 2, className: EMPTY },
      { row: 2, colum: 3, className: EMPTY },
      { row: 2, colum: 4, className: TREE },
    ],

    [
      { row: 3, colum: 1, className: EMPTY },
      { row: 3, colum: 2, className: EMPTY },
      { row: 3, colum: 3, className: TREE },
      { row: 3, colum: 4, className: TREE },
    ],

    [
      { row: 4, colum: 1, className: TREE },
      { row: 4, colum: 2, className: EMPTY },
      { row: 4, colum: 3, className: EMPTY },
      { row: 4, colum: 4, className: HOUSE },
    ],
  ],
};

export const HardLevels = {
  1: [
    [
      { row: 1, colum: 1, className: TREE },
      { row: 1, colum: 2, className: EMPTY },
      { row: 1, colum: 3, className: TREE },
      { row: 1, colum: 4, className: TREE },
      { row: 1, colum: 5, className: EMPTY },
      { row: 1, colum: 6, className: EMPTY },
      { row: 1, colum: 7, className: TREE },
      { row: 1, colum: 8, className: EMPTY },
    ],

    [
      { row: 2, colum: 1, className: TREE },
      { row: 2, colum: 2, className: EMPTY },
      { row: 2, colum: 3, className: EMPTY },
      { row: 2, colum: 4, className: TREE },
      { row: 2, colum: 5, className: TREE },
      { row: 2, colum: 6, className: EMPTY },
      { row: 2, colum: 7, className: EMPTY },
      { row: 2, colum: 8, className: EMPTY },
    ],

    [
      { row: 3, colum: 1, className: TREE },
      { row: 3, colum: 2, className: EMPTY },
      { row: 3, colum: 3, className: EMPTY },
      { row: 3, colum: 4, className: EMPTY },
      { row: 3, colum: 5, className: EMPTY },
      { row: 3, colum: 6, className: EMPTY },
      { row: 3, colum: 7, className: TREE },
      { row: 3, colum: 8, className: TREE },
    ],

    [
      { row: 4, colum: 1, className: HERO },
      { row: 4, colum: 2, className: EMPTY },
      { row: 4, colum: 3, className: TREE },
      { row: 4, colum: 4, className: EMPTY },
      { row: 4, colum: 5, className: TREE },
      { row: 4, colum: 6, className: EMPTY },
      { row: 4, colum: 7, className: TREE },
      { row: 4, colum: 8, className: EMPTY },
    ],
    [
      { row: 5, colum: 1, className: TREE },
      { row: 5, colum: 2, className: EMPTY },
      { row: 5, colum: 3, className: EMPTY },
      { row: 5, colum: 4, className: TREE },
      { row: 5, colum: 5, className: TREE },
      { row: 5, colum: 6, className: EMPTY },
      { row: 5, colum: 7, className: EMPTY },
      { row: 5, colum: 8, className: EMPTY },
    ],
    [
      { row: 6, colum: 1, className: TREE },
      { row: 6, colum: 2, className: TREE },
      { row: 6, colum: 3, className: TREE },
      { row: 6, colum: 4, className: EMPTY },
      { row: 6, colum: 5, className: EMPTY },
      { row: 6, colum: 6, className: EMPTY },
      { row: 6, colum: 7, className: TREE },
      { row: 6, colum: 8, className: EMPTY },
    ],
    [
      { row: 7, colum: 1, className: TREE },
      { row: 7, colum: 2, className: EMPTY },
      { row: 7, colum: 3, className: EMPTY },
      { row: 7, colum: 4, className: EMPTY },
      { row: 7, colum: 5, className: EMPTY },
      { row: 7, colum: 6, className: TREE },
      { row: 7, colum: 7, className: TREE },
      { row: 7, colum: 8, className: EMPTY },
    ],
    [
      { row: 8, colum: 1, className: TREE },
      { row: 8, colum: 2, className: HOUSE },
      { row: 8, colum: 3, className: EMPTY },
      { row: 8, colum: 4, className: EMPTY },
      { row: 8, colum: 5, className: EMPTY },
      { row: 8, colum: 6, className: EMPTY },
      { row: 8, colum: 7, className: EMPTY },
      { row: 8, colum: 8, className: EMPTY },
    ],
  ],
  2: [
    [
      { row: 1, colum: 1, className: HERO },
      { row: 1, colum: 2, className: EMPTY },
      { row: 1, colum: 3, className: TREE },
      { row: 1, colum: 4, className: TREE },
      { row: 1, colum: 5, className: EMPTY },
      { row: 1, colum: 6, className: EMPTY },
      { row: 1, colum: 7, className: TREE },
      { row: 1, colum: 8, className: EMPTY },
    ],

    [
      { row: 2, colum: 1, className: TREE },
      { row: 2, colum: 2, className: EMPTY },
      { row: 2, colum: 3, className: EMPTY },
      { row: 2, colum: 4, className: TREE },
      { row: 2, colum: 5, className: EMPTY },
      { row: 2, colum: 6, className: EMPTY },
      { row: 2, colum: 7, className: TREE },
      { row: 2, colum: 8, className: TREE },
    ],

    [
      { row: 3, colum: 1, className: EMPTY },
      { row: 3, colum: 2, className: EMPTY },
      { row: 3, colum: 3, className: EMPTY },
      { row: 3, colum: 4, className: EMPTY },
      { row: 3, colum: 5, className: TREE },
      { row: 3, colum: 6, className: EMPTY },
      { row: 3, colum: 7, className: EMPTY },
      { row: 3, colum: 8, className: HOUSE },
    ],

    [
      { row: 4, colum: 1, className: EMPTY },
      { row: 4, colum: 2, className: TREE },
      { row: 4, colum: 3, className: TREE },
      { row: 4, colum: 4, className: EMPTY },
      { row: 4, colum: 5, className: TREE },
      { row: 4, colum: 6, className: EMPTY },
      { row: 4, colum: 7, className: EMPTY },
      { row: 4, colum: 8, className: EMPTY },
    ],
    [
      { row: 5, colum: 1, className: EMPTY },
      { row: 5, colum: 2, className: TREE },
      { row: 5, colum: 3, className: EMPTY },
      { row: 5, colum: 4, className: EMPTY },
      { row: 5, colum: 5, className: EMPTY },
      { row: 5, colum: 6, className: TREE },
      { row: 5, colum: 7, className: EMPTY },
      { row: 5, colum: 8, className: TREE },
    ],
    [
      { row: 6, colum: 1, className: EMPTY },
      { row: 6, colum: 2, className: EMPTY },
      { row: 6, colum: 3, className: EMPTY },
      { row: 6, colum: 4, className: TREE },
      { row: 6, colum: 5, className: EMPTY },
      { row: 6, colum: 6, className: TREE },
      { row: 6, colum: 7, className: EMPTY },
      { row: 6, colum: 8, className: EMPTY },
    ],
    [
      { row: 7, colum: 1, className: TREE },
      { row: 7, colum: 2, className: TREE },
      { row: 7, colum: 3, className: EMPTY },
      { row: 7, colum: 4, className: TREE },
      { row: 7, colum: 5, className: EMPTY },
      { row: 7, colum: 6, className: TREE },
      { row: 7, colum: 7, className: TREE },
      { row: 7, colum: 8, className: EMPTY },
    ],
    [
      { row: 8, colum: 1, className: EMPTY },
      { row: 8, colum: 2, className: EMPTY },
      { row: 8, colum: 3, className: EMPTY },
      { row: 8, colum: 4, className: EMPTY },
      { row: 8, colum: 5, className: EMPTY },
      { row: 8, colum: 6, className: EMPTY },
      { row: 8, colum: 7, className: EMPTY },
      { row: 8, colum: 8, className: EMPTY },
    ],
  ],
  3: [
    [
      { row: 1, colum: 1, className: EMPTY },
      { row: 1, colum: 2, className: EMPTY },
      { row: 1, colum: 3, className: EMPTY },
      { row: 1, colum: 4, className: EMPTY },
      { row: 1, colum: 5, className: TREE },
      { row: 1, colum: 6, className: EMPTY },
      { row: 1, colum: 7, className: EMPTY },
      { row: 1, colum: 8, className: EMPTY },
    ],

    [
      { row: 2, colum: 1, className: EMPTY },
      { row: 2, colum: 2, className: TREE },
      { row: 2, colum: 3, className: TREE },
      { row: 2, colum: 4, className: EMPTY },
      { row: 2, colum: 5, className: EMPTY },
      { row: 2, colum: 6, className: EMPTY },
      { row: 2, colum: 7, className: TREE },
      { row: 2, colum: 8, className: EMPTY },
    ],

    [
      { row: 3, colum: 1, className: EMPTY },
      { row: 3, colum: 2, className: EMPTY },
      { row: 3, colum: 3, className: EMPTY },
      { row: 3, colum: 4, className: TREE },
      { row: 3, colum: 5, className: TREE },
      { row: 3, colum: 6, className: EMPTY },
      { row: 3, colum: 7, className: TREE },
      { row: 3, colum: 8, className: EMPTY },
    ],

    [
      { row: 4, colum: 1, className: TREE },
      { row: 4, colum: 2, className: TREE },
      { row: 4, colum: 3, className: EMPTY },
      { row: 4, colum: 4, className: EMPTY },
      { row: 4, colum: 5, className: EMPTY },
      { row: 4, colum: 6, className: EMPTY },
      { row: 4, colum: 7, className: EMPTY },
      { row: 4, colum: 8, className: EMPTY },
    ],
    [
      { row: 5, colum: 1, className: EMPTY },
      { row: 5, colum: 2, className: EMPTY },
      { row: 5, colum: 3, className: EMPTY },
      { row: 5, colum: 4, className: TREE },
      { row: 5, colum: 5, className: EMPTY },
      { row: 5, colum: 6, className: TREE },
      { row: 5, colum: 7, className: TREE },
      { row: 5, colum: 8, className: EMPTY },
    ],
    [
      { row: 6, colum: 1, className: EMPTY },
      { row: 6, colum: 2, className: EMPTY },
      { row: 6, colum: 3, className: TREE },
      { row: 6, colum: 4, className: TREE },
      { row: 6, colum: 5, className: EMPTY },
      { row: 6, colum: 6, className: EMPTY },
      { row: 6, colum: 7, className: EMPTY },
      { row: 6, colum: 8, className: EMPTY },
    ],
    [
      { row: 7, colum: 1, className: EMPTY },
      { row: 7, colum: 2, className: HERO },
      { row: 7, colum: 3, className: TREE },
      { row: 7, colum: 4, className: EMPTY },
      { row: 7, colum: 5, className: TREE },
      { row: 7, colum: 6, className: TREE },
      { row: 7, colum: 7, className: EMPTY },
      { row: 7, colum: 8, className: HOUSE },
    ],
    [
      { row: 8, colum: 1, className: TREE },
      { row: 8, colum: 2, className: TREE },
      { row: 8, colum: 3, className: TREE },
      { row: 8, colum: 4, className: EMPTY },
      { row: 8, colum: 5, className: EMPTY },
      { row: 8, colum: 6, className: EMPTY },
      { row: 8, colum: 7, className: EMPTY },
      { row: 8, colum: 8, className: TREE },
    ],
  ],
  4: [
    [
      { row: 1, colum: 1, className: TREE },
      { row: 1, colum: 2, className: EMPTY },
      { row: 1, colum: 3, className: TREE },
      { row: 1, colum: 4, className: HERO },
      { row: 1, colum: 5, className: EMPTY },
      { row: 1, colum: 6, className: TREE },
      { row: 1, colum: 7, className: TREE },
      { row: 1, colum: 8, className: EMPTY },
    ],

    [
      { row: 2, colum: 1, className: EMPTY },
      { row: 2, colum: 2, className: TREE },
      { row: 2, colum: 3, className: TREE },
      { row: 2, colum: 4, className: EMPTY },
      { row: 2, colum: 5, className: EMPTY },
      { row: 2, colum: 6, className: TREE },
      { row: 2, colum: 7, className: TREE },
      { row: 2, colum: 8, className: EMPTY },
    ],

    [
      { row: 3, colum: 1, className: TREE },
      { row: 3, colum: 2, className: EMPTY },
      { row: 3, colum: 3, className: EMPTY },
      { row: 3, colum: 4, className: EMPTY },
      { row: 3, colum: 5, className: TREE },
      { row: 3, colum: 6, className: EMPTY },
      { row: 3, colum: 7, className: EMPTY },
      { row: 3, colum: 8, className: EMPTY },
    ],

    [
      { row: 4, colum: 1, className: EMPTY },
      { row: 4, colum: 2, className: EMPTY },
      { row: 4, colum: 3, className: EMPTY },
      { row: 4, colum: 4, className: TREE },
      { row: 4, colum: 5, className: TREE },
      { row: 4, colum: 6, className: EMPTY },
      { row: 4, colum: 7, className: TREE },
      { row: 4, colum: 8, className: EMPTY },
    ],
    [
      { row: 5, colum: 1, className: EMPTY },
      { row: 5, colum: 2, className: TREE },
      { row: 5, colum: 3, className: TREE },
      { row: 5, colum: 4, className: EMPTY },
      { row: 5, colum: 5, className: EMPTY },
      { row: 5, colum: 6, className: EMPTY },
      { row: 5, colum: 7, className: TREE },
      { row: 5, colum: 8, className: EMPTY },
    ],
    [
      { row: 6, colum: 1, className: EMPTY },
      { row: 6, colum: 2, className: EMPTY },
      { row: 6, colum: 3, className: TREE },
      { row: 6, colum: 4, className: EMPTY },
      { row: 6, colum: 5, className: TREE },
      { row: 6, colum: 6, className: TREE },
      { row: 6, colum: 7, className: EMPTY },
      { row: 6, colum: 8, className: EMPTY },
    ],
    [
      { row: 7, colum: 1, className: TREE },
      { row: 7, colum: 2, className: EMPTY },
      { row: 7, colum: 3, className: TREE },
      { row: 7, colum: 4, className: EMPTY },
      { row: 7, colum: 5, className: TREE },
      { row: 7, colum: 6, className: EMPTY },
      { row: 7, colum: 7, className: EMPTY },
      { row: 7, colum: 8, className: EMPTY },
    ],
    [
      { row: 8, colum: 1, className: TREE },
      { row: 8, colum: 2, className: EMPTY },
      { row: 8, colum: 3, className: EMPTY },
      { row: 8, colum: 4, className: EMPTY },
      { row: 8, colum: 5, className: TREE },
      { row: 8, colum: 6, className: HOUSE },
      { row: 8, colum: 7, className: TREE },
      { row: 8, colum: 8, className: EMPTY },
    ],
  ],
  5: [
    [
      { row: 1, colum: 1, className: TREE },
      { row: 1, colum: 2, className: TREE },
      { row: 1, colum: 3, className: TREE },
      { row: 1, colum: 4, className: TREE },
      { row: 1, colum: 5, className: TREE },
      { row: 1, colum: 6, className: TREE },
      { row: 1, colum: 7, className: EMPTY },
      { row: 1, colum: 8, className: HERO },
    ],

    [
      { row: 2, colum: 1, className: EMPTY },
      { row: 2, colum: 2, className: EMPTY },
      { row: 2, colum: 3, className: EMPTY },
      { row: 2, colum: 4, className: EMPTY },
      { row: 2, colum: 5, className: EMPTY },
      { row: 2, colum: 6, className: TREE },
      { row: 2, colum: 7, className: EMPTY },
      { row: 2, colum: 8, className: EMPTY },
    ],

    [
      { row: 3, colum: 1, className: EMPTY },
      { row: 3, colum: 2, className: EMPTY },
      { row: 3, colum: 3, className: TREE },
      { row: 3, colum: 4, className: TREE },
      { row: 3, colum: 5, className: EMPTY },
      { row: 3, colum: 6, className: TREE },
      { row: 3, colum: 7, className: EMPTY },
      { row: 3, colum: 8, className: TREE },
    ],

    [
      { row: 4, colum: 1, className: EMPTY },
      { row: 4, colum: 2, className: EMPTY },
      { row: 4, colum: 3, className: TREE },
      { row: 4, colum: 4, className: HOUSE },
      { row: 4, colum: 5, className: EMPTY },
      { row: 4, colum: 6, className: TREE },
      { row: 4, colum: 7, className: EMPTY },
      { row: 4, colum: 8, className: EMPTY },
    ],
    [
      { row: 5, colum: 1, className: EMPTY },
      { row: 5, colum: 2, className: EMPTY },
      { row: 5, colum: 3, className: TREE },
      { row: 5, colum: 4, className: TREE },
      { row: 5, colum: 5, className: TREE },
      { row: 5, colum: 6, className: TREE },
      { row: 5, colum: 7, className: EMPTY },
      { row: 5, colum: 8, className: EMPTY },
    ],
    [
      { row: 6, colum: 1, className: EMPTY },
      { row: 6, colum: 2, className: EMPTY },
      { row: 6, colum: 3, className: EMPTY },
      { row: 6, colum: 4, className: EMPTY },
      { row: 6, colum: 5, className: EMPTY },
      { row: 6, colum: 6, className: TREE },
      { row: 6, colum: 7, className: EMPTY },
      { row: 6, colum: 8, className: EMPTY },
    ],
    [
      { row: 7, colum: 1, className: TREE },
      { row: 7, colum: 2, className: EMPTY },
      { row: 7, colum: 3, className: TREE },
      { row: 7, colum: 4, className: EMPTY },
      { row: 7, colum: 5, className: EMPTY },
      { row: 7, colum: 6, className: EMPTY },
      { row: 7, colum: 7, className: EMPTY },
      { row: 7, colum: 8, className: EMPTY },
    ],
    [
      { row: 8, colum: 1, className: TREE },
      { row: 8, colum: 2, className: TREE },
      { row: 8, colum: 3, className: EMPTY },
      { row: 8, colum: 4, className: EMPTY },
      { row: 8, colum: 5, className: TREE },
      { row: 8, colum: 6, className: EMPTY },
      { row: 8, colum: 7, className: EMPTY },
      { row: 8, colum: 8, className: EMPTY },
    ],
  ],
};
