export const dataSort = (data: any) => {
    return data?.sort((a: any, b: any) => a.id - b.id)
};
