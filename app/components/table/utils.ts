export const dataSort = (data: any) => {
    return data?.sort((a: any, b: any) => a.id - b.id)
};

export const SHOW_MORE = 'Mostrar más';
export const SHOW_LESS = 'Mostrar menos';
export const SHOW_RECENT = 'Mostrar más recientes';
export const SHOW_OLDER = 'Mostrar más antiguos';
export const SHOW_COLUMNS = 'Cuantas columnas quieres ver?';
export const SORT = 'sort';
export const DEFAULT_ROWS =10;
export const DEFAULT_PAGE = 1;
//export arrow from 'public/arrow.svg';
export { default as arrow } from 'public/arrow.png';

