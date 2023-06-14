export const dataSort = (data: any) => {
    return data?.sort((a: any, b: any) => a.id - b.id)
};

export const SHOW_MORE = 'show all';
export const SHOW_LESS = 'show less';
export const SORT = 'sort';
export const DEFAULT_ROWS =10;
export const DEFAULT_PAGE = 1;
//export arrow from 'public/arrow.svg';
export { default as arrow } from 'public/arrow.png';

