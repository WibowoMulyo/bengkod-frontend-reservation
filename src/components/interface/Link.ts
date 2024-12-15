export interface link {
  children: React.ReactNode,
  href: string,
  className?: string,
  statichref?: string,
  whenactive?: string,
  whennotactive?: string,
  getActive?: (value: boolean) => void,
  showline?: boolean
}