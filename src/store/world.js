
const t = 'TILE0000';
const initialState = [
  [t,t,t,t,t],
  [t,t,t,t,t],
  [t,t,t,t,t],
  [t,t,t,t,t],
  [t,t,t,t,t]
];


// World constants
export const ADD_COLUMN = 'ADD_COLUMN';
export const ADD_ROW = 'ADD_ROW';
export const DELETE_COLUMN = 'DELETE_COLUMN';
export const DELETE_ROW = 'DELETE_ROW';
export const CHANGE_CELL = 'CHANGE_CELL';
export const FILL_WORLD = 'FILL_WORLD';
export const LOAD_WORLD = 'LOAD_WORLD';

export const DIRECTION_WEST = 'DIRECTION_WEST';
export const DIRECTION_EAST = 'DIRECTION_EAST';
export const DIRECTION_NORTH = 'DIRECTION_NORTH';
export const DIRECTION_SOUTH = 'DIRECTION_SOUTH';

// World actions
export function addColumn(append) {
  return { type: ADD_COLUMN, append };
}

export function addRow(append) {
  return { type: ADD_ROW, append };
}

export function deleteColumn(pop) {
  return { type: DELETE_COLUMN, pop };
}

export function deleteRow(pop) {
  return { type: DELETE_ROW, pop };
}

export function changeCell(twoDimensionalIndex, tileId) {
  return { type: CHANGE_CELL, twoDimensionalIndex, tileId };
}

export function fillWorld(tileID) {
  return { type: FILL_WORLD, tileID };
}

export function loadWorld(loadedWorld) {
  return { type: LOAD_WORLD, loadedWorld };
}


export function expandMap(direction) {
  switch (direction) {
  case DIRECTION_NORTH:
    return [
      addRow(false),
    ];
  case DIRECTION_SOUTH:
    return [
      addRow(true)
    ];
  case DIRECTION_WEST:
    return [
      addColumn(false),
    ];
  case DIRECTION_EAST:
    return [
      addColumn(true)
    ];
  default:
    return [];
  }
}

export function shrinkMap(direction) {
  switch (direction) {
  case DIRECTION_NORTH:
    return [
      deleteRow(false),
    ];
  case DIRECTION_SOUTH:
    return [
      deleteRow(true)
    ];
  case DIRECTION_WEST:
    return [
      deleteColumn(false),
    ];
  case DIRECTION_EAST:
    return [
      deleteColumn(true)
    ];
  default:
    return [];
  }
}



export function loadAppData(loadedWorld) {
  return [
    loadWorld(loadedWorld)
  ];
}