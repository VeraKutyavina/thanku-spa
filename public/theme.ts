import { DefaultTheme } from 'styled-components';

export enum Breakpoints {
  xs = 320,
  sm = 576,
  md = 768,
  lg = 992,
  xl = 1200,
}

export enum Colors {
  black = '#000',
  white = '#fff',
  link = '#00f',
  darkGrey = '#606c76',
  lightGrey = '#fdfbfb',
  green = '#add4d1',
  lightBlue = '#d8eae6',
  grey98 = '#989FA7',
  lightGray = '#d8dcda',
  red = '#D16684',
  grey = '#52525F',
  greenF2 = '#f2f4f0',
  brColor ='#E1EAF2',
  shadow = '#F1F1F1',
}

export const up = (breakpoint: Breakpoints, vertical = false) =>
  `@media (min-${vertical ? 'height' : 'width'}: ${breakpoint + 0.02}px)`;
export const down = (breakpoint: Breakpoints, vertical = false) =>
  `@media (max-${vertical ? 'height' : 'width'}: ${breakpoint}px)`;
export const between = (breakpointMin: Breakpoints, breakpointMax: Breakpoints, vertical = false) =>
  `@media (max-${vertical ? 'height' : 'width'}: ${breakpointMax}px) and (min-${vertical ? 'height' : 'width'}: ${
    breakpointMin + 0.02
  }px)`;

const theme: DefaultTheme = {
  breakpoints: Breakpoints,
  colors: Colors,
  up,
  down,
  between,
};

export default theme;
