import React from 'react';
import ReactDOM from 'react-dom/client';

type Tile = {
  base: string,
  layers?: string[],
  type?: "Ground",
  data?: any,
}
type Map = {
  table: Tile[][], seq: number | number[], metadata?: any,
  opt: { zoom: number, size: number, row: number, cols: number }
}
type MoovableObject = {};


const t: Tile = { base: "brown" };

const initialState: Map = {
  table: [
    [t, t, t, t, t],
    [t, t, t, t, t],
    [t, t, t, t, t],
    [t, t, t, t, t],
    [t, t, t, t, t]
  ],
  seq: 1,
};

export function WorldMapCell({ items }: { items: Map }): any {
  return <div>
    <table width={900}>
      <tbody>
        {items.table.map((tab) => {
          return <tr>
            {tab.map((col) => {
              <td> </td>
            })}
          </tr>
        })}

      </tbody>
    </table>


  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<React.StrictMode></React.StrictMode>);