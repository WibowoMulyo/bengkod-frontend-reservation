export interface mapitem{
  id?: string,
  shape: 'rect' | 'poly' | 'circle',
  title: string,
  alt: string,
  coords?: number[],
  strokeColor?: string,
  fillColor?: string,
  disabled?: boolean,
  active?: boolean,
  lineWidth?: number,
  preFillColor?: string,
  center?: any 
}

export type mapdictionary = {
  [key: string]: mapitem
}