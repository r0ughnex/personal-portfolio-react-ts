export const CAMERA_SETTINGS = {
  INITIAL: { X: 0, Y: 0, Z: 500 },
  FAR: 10000,
  NEAR: 1,
  FOV: 45,
};

export const RENDERER_SETTINGS = {
  CLEAR_COLOR: 0xffffff,
  ANTI_ALIAS: true,
  ALPHA: true,
};

export const SCENE_SETTINGS = {
  FOG_DENSITY: 0.002,
  FOG_COLOR: 0xf5f5f5,
};

export const CONTROL_SETTINGS = {
  MAX_ANGLE: Math.PI / 2,
  MAX_DIST: 700,
  MIN_DIST: 700,
  ENABLED: false,
};

export const GEOMETRY_SETTINGS = {
  MATERIAL_COLOR: 0xffffff,
  FLAT_SHADING: true,
  RADIUS: 3,
  COUNT: 50,
};

export const LIGHTING_SETTINGS = {
  COLOR_LIGHT: 0xffffff,
  COLOR_DARK: 0x212121,
  INTENSITY: 0.3,
};

export const ANIM_SETTINGS = {
  EASING: 'power2.out',
  ROTATE_BY: 0.0002,
  MOVE_DURATION: 1,
};
