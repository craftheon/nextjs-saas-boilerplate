
const themesMap = {
  Red: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },
  Indigo: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
    950: '#1e1b4b',
  }
}

export default function themeSwitch(theme: 'Red' | 'Indigo') {
  const curTheme: { [x: string]: string } = themesMap[theme]
  if (!curTheme) {
    throw new Error('Theme dose not exist.')
  }
  const t: { [x: string]: string } = {}
  Object.keys(curTheme).forEach((e: any) => {
    t[`primary-${e}`] = curTheme[e]
  })
  return t
}