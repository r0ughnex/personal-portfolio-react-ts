import classNames from 'classnames';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import {
  AmbientLight,
  DirectionalLight,
  DodecahedronBufferGeometry,
  FogExp2,
  Group,
  Mesh,
  MeshPhongMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import styles from './Background3DWorld.module.scss';
import {
  ANIM_SETTINGS,
  CAMERA_SETTINGS,
  CONTROL_SETTINGS,
  GEOMETRY_SETTINGS,
  LIGHTING_SETTINGS,
  RENDERER_SETTINGS,
  SCENE_SETTINGS,
} from './settings';

export type ThreeWorldElements = {
  camera?: PerspectiveCamera;
  renderer?: WebGLRenderer;
  controls?: OrbitControls;
  scene?: Scene;
};

function Background3DWorld() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const worldRef = useRef<ThreeWorldElements>({});
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const hasLoadedRef = useRef(false);

  useEffect(() => {
    const { current: rootElem } = rootRef;
    if (!rootElem) {
      return;
    }

    // Set initial width and height.
    setWidth(rootElem?.offsetWidth);
    setHeight(rootElem?.offsetHeight);
  }, []);

  useEffect(() => {
    const { current: hasLoaded } = hasLoadedRef;
    if (!width || !height) {
      return;
    }

    if (hasLoaded) {
      const { scene, camera, renderer } = worldRef.current;
      if (!scene || !camera || !renderer) {
        return;
      }

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.render(scene, camera);
      return;
    }

    const { FOV, NEAR, FAR } = CAMERA_SETTINGS;
    const { ANTI_ALIAS, ALPHA } = RENDERER_SETTINGS;

    worldRef.current = {
      scene: new Scene(),
      camera: new PerspectiveCamera(FOV, width / height, NEAR, FAR),
      renderer: new WebGLRenderer({ antialias: ANTI_ALIAS, alpha: ALPHA }),
    };
  }, [width, height]);

  useEffect(() => {
    // Only proceed if the scene hasn't loaded.
    const { current: hasLoaded } = hasLoadedRef;
    const { current: rootElem } = rootRef;
    if (hasLoaded) {
      return;
    }

    const { scene, camera, renderer } = worldRef.current;
    if (!rootElem || !scene || !camera || !renderer) {
      return;
    }

    // Initialize renderer.
    const { CLEAR_COLOR } = RENDERER_SETTINGS;
    const { INITIAL: CAMPOS } = CAMERA_SETTINGS;
    const { FOG_COLOR, FOG_DENSITY } = SCENE_SETTINGS;

    renderer.setSize(width, height);
    renderer.setClearColor(CLEAR_COLOR, 0);
    renderer.setPixelRatio(width / height);
    const { domElement } = renderer ?? {};

    rootElem.append(domElement);
    scene.fog = new FogExp2(FOG_COLOR, FOG_DENSITY);
    camera.position.set(CAMPOS.X, CAMPOS.Y, CAMPOS.Z);

    // Add orbital controls.
    const { ENABLED, MIN_DIST, MAX_DIST, MAX_ANGLE } = CONTROL_SETTINGS;
    const controls = new OrbitControls(camera, domElement);
    worldRef.current.controls = controls;
    controls.maxPolarAngle = MAX_ANGLE;
    controls.maxDistance = MAX_DIST;
    controls.minDistance = MIN_DIST;
    controls.enabled = ENABLED;

    // Create geometry for mesh.
    const { MATERIAL_COLOR, FLAT_SHADING, RADIUS, COUNT } = GEOMETRY_SETTINGS;
    const geometry = new DodecahedronBufferGeometry(RADIUS, 0);
    const material = new MeshPhongMaterial({
      flatShading: FLAT_SHADING,
      color: MATERIAL_COLOR,
    });

    // Create a new mesh group.
    const group = new Group();
    for (let i = 0; i < COUNT; i++) {
      const mesh = new Mesh(geometry, material);
      mesh.position.z = Math.random() * 1000 - 200;
      mesh.position.x = Math.random() * 1000 - 500;
      mesh.position.y = Math.random() * 600 - 300;
      mesh.matrixAutoUpdate = false;
      mesh.updateMatrix();
      group.add(mesh);
    }

    // Add mesh group to scene.
    scene.add(group);

    // Adding lighting to scene.
    const { COLOR_LIGHT, COLOR_DARK, INTENSITY } = LIGHTING_SETTINGS;
    const light = new DirectionalLight(COLOR_LIGHT);
    light.position.set(1, 1, 1);
    scene.add(light);

    const light1 = new DirectionalLight(COLOR_DARK);
    light1.position.set(-1, -1, -1);
    scene.add(light1);

    const light2 = new AmbientLight(COLOR_DARK, INTENSITY);
    scene.add(light2);

    const animate = () => {
      const { ROTATE_BY } = ANIM_SETTINGS;
      group.rotation.x += ROTATE_BY;
      group.rotation.y += ROTATE_BY;
      renderer.render(scene, camera);

      controls.update();
      requestAnimationFrame(animate);
    };

    // Render the scene and animate.
    renderer.render(scene, camera);
    animate();

    // Callback function to handle moving of the mouse pointer on screen.
    const handlePointerMove = ({ clientX, clientY }: PointerEvent) => {
      const centerPoint = { x: width / 2, y: height / 2 };
      const { MOVE_DURATION, EASING } = ANIM_SETTINGS;

      const moveZ = (clientX - centerPoint.x) / 900;
      const moveX = (clientY - centerPoint.y) / 900;

      gsap.to(group.rotation, {
        onUpdate: () => renderer.render(scene, camera),
        duration: MOVE_DURATION,
        ease: EASING,
        x: -moveX,
        y: -moveZ,
      });
    };

    // Callback function to handle device motion / orientation changes.
    const handleDeviceMotion = ({
      acceleration,
      accelerationIncludingGravity,
    }: DeviceMotionEvent) => {
      const { x, y } = accelerationIncludingGravity || acceleration || {};
      const { MOVE_DURATION, EASING } = ANIM_SETTINGS;
      const moveX = y ? Math.floor(-y) / 3 : 0;
      const moveY = x ? Math.floor(-x) / 3 : 0;

      gsap.to(group.rotation, {
        onUpdate: () => renderer.render(scene, camera),
        duration: MOVE_DURATION,
        ease: EASING,
        x: moveX,
        y: moveY,
      });
    };

    // Callback function to handle the root element's resize.
    const resizeObserver = new ResizeObserver(elements => {
      const rect = elements[0]?.contentRect;
      setHeight(rect.height);
      setWidth(rect.width);
    });

    // @TODO: Restructure listeners so as they can be removed as well.
    window.addEventListener('devicemotion', handleDeviceMotion, true);
    window.addEventListener('pointermove', handlePointerMove);
    resizeObserver.observe(rootElem);
    hasLoadedRef.current = true;
  }, [width, height]);

  return <div className={classNames(styles.Background3DWorld)} ref={rootRef} />;
}

export default Background3DWorld;
