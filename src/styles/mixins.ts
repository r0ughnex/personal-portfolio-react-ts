import { Color } from './variables';

const HEX_CHARACTERS = 'a-f\\d';
const REGEX_NOT_HEX = new RegExp(`[^#${HEX_CHARACTERS}]`, 'gi');

export function isHexColorStrValid(hex: string) {
  return (
    /* NOTE: We're only considering strings of format '#000' or '#000000'. */
    !!hex && !REGEX_NOT_HEX.test(hex) && (hex.length === 4 || hex.length === 7)
  );
}

export function hexColorStrToNumber(hex: string) {
  return parseInt((isHexColorStrValid(hex) ? hex : Color.White).slice(1), 16);
}
