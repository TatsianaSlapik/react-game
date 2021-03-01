export const HOUSE = "house";
export const TREE = "tree";
export const EMPTY = "empty";
export let heroName = "red-hat";
export let size = 4;
export const levels = {
  1: [
    [
      { row: 1, colum: 1, className: heroName },
      { row: 1, colum: 2, className: EMPTY },
      { row: 1, colum: 3, className: EMPTY },
      { row: 1, colum: 4, className: HOUSE },
    ],

    [
      { row: 2, colum: 1, className: EMPTY },
      { row: 2, colum: 2, className: TREE },
      { row: 2, colum: 3, className: TREE },
      { row: 2, colum: 4, className: TREE },
    ],

    [
      { row: 3, colum: 1, className: EMPTY },
      { row: 3, colum: 2, className: EMPTY },
      { row: 3, colum: 3, className: EMPTY },
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
      { row: 1, colum: 1, className: EMPTY },
      { row: 1, colum: 2, className: EMPTY },
      { row: 1, colum: 3, className: EMPTY },
      { row: 1, colum: 4, className: EMPTY },
    ],

    [
      { row: 2, colum: 1, className: EMPTY },
      { row: 2, colum: 2, className: heroName },
      { row: 2, colum: 3, className: TREE },
      { row: 2, colum: 4, className: EMPTY },
    ],

    [
      { row: 3, colum: 1, className: EMPTY },
      { row: 3, colum: 2, className: EMPTY },
      { row: 3, colum: 3, className: HOUSE },
      { row: 3, colum: 4, className: TREE },
    ],

    [
      { row: 4, colum: 1, className: EMPTY },
      { row: 4, colum: 2, className: EMPTY },
      { row: 4, colum: 3, className: TREE },
      { row: 4, colum: 4, className: EMPTY },
    ],
  ],
};
