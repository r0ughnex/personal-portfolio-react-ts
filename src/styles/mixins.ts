import { Color } from './variables';

export function hexColorStrToNumber(hexStr: string) {
  const isHexValid =
    !!hexStr && hexStr.length > 0 && hexStr.indexOf('#') !== -1;
  return parseInt((isHexValid ? hexStr : Color.White).slice(1), 16);
}
