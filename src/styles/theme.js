import { BREAKPOINTS } from '../constants/devices';

const theme = {
  lightTheme: {
    colors: {
      primary: {
        bg: '#FFFFFF',
        text: '#000000',
        textDecor: '#3E3E3E',
        textStatus: '#FF7F62',
        accent: '#407BFF',
        bgDark: '#000000',
        bgHot: '#FFE6E1',
      },
      secondary: {
        color1: '#7b7b7b',
        color2: '#EF5050',
        color3: '#9EBBFF',
        color4: '#FF9D43',
        color5: '#D7E3FF',
        color6: '#C6D7FF',
        color7: '#F5F5F5',
      },
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      mediumPlus: 600,
      bolt: 700,
    },
    transitions: {
      hover50ms: '50ms ease-in-out',
      hover150ms: '150ms ease-in-out',
      hover250ms: '250ms ease-in-out',
    },
    screens: {
      mob: BREAKPOINTS.MOB,
      tab: BREAKPOINTS.TAB,
      desk: BREAKPOINTS.DESK,
    },
  },

  nightTheme: {
    colors: {
      primary: { bg: '#1C1D26', text: '#D5DFF5', accent: '#5082F2' },
      secondary: {
        color1: '#1F2438',
        color2: '#F16161',
        color3: '#2F3875',
        color4: '#FFA756',
        color5: '#2A3052',
        color6: '#272E59',
        color7: '#1B1B21',
      },
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      bolt: 700,
    },
    transitions: {
      hover50ms: '50ms ease-in-out',
      hover150ms: '150ms ease-in-out',
      hover250ms: '250ms ease-in-out',
    },
    screens: {
      mob: BREAKPOINTS.MOB,
      tab: BREAKPOINTS.TAB,
      desk: BREAKPOINTS.DESK,
    },
  },
};

export default theme;
