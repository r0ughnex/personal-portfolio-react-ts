import { hexColorStrToNumber } from 'styles/mixins';
import { Color } from 'styles/variables';

export const CAMERA_SETTINGS = {
  INITIAL: { X: 0, Y: 0, Z: 500 },
  FAR: 10000,
  NEAR: 1,
  FOV: 45,
};

export const RENDERER_SETTINGS = {
  CLEAR_COLOR: hexColorStrToNumber(Color.White),
  ANTI_ALIAS: true,
  ALPHA: true,
};

export const SCENE_SETTINGS = {
  FOG_COLOR: hexColorStrToNumber(Color.GreyLight),
  FOG_DENSITY: 0.002,
};

export const CONTROL_SETTINGS = {
  MAX_ANGLE: Math.PI / 2,
  MAX_DIST: 700,
  MIN_DIST: 700,
  ENABLED: false,
};

export const GEOMETRY_SETTINGS = {
  MATERIAL_COLOR: hexColorStrToNumber(Color.White),
  FLAT_SHADING: true,
  RADIUS: 3,
  COUNT: 50,
};

export const LIGHTING_SETTINGS = {
  COLOR_LIGHT: hexColorStrToNumber(Color.White),
  COLOR_DARK: hexColorStrToNumber(Color.GreyDark),
  INTENSITY: 0.3,
};

export const ANIM_SETTINGS = {
  EASING: 'power2.out',
  ROTATE_BY: 0.0002,
  MOVE_DURATION: 1,
};
