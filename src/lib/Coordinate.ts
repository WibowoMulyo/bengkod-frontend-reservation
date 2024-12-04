export const GetCenterCoord = (datawithkeycoords: Array<any>) => {
  
  return datawithkeycoords.map((area) => {
    const n = area.coords.length / 2;
    const { y: scaleY, x: scaleX } = area.coords.reduce(
      ({ y, x } : any, val : number, idx : number) =>
        !(idx % 2) ? { y, x: x + val / n } : { y: y + val / n, x },
      { y: 0, x: 0 }
    );
    return { ...area, center: { x: scaleX, y: scaleY } };
  })
}