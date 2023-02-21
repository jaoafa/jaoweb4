// types
export type ComponentTagClasses<T extends string> = {
  [key in `${T}${string}`]: boolean
}
export type ComponentTagStyles = { [key: string]: string | number }
