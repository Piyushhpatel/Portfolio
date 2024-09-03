import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

const draco = new DRACOLoader();
draco.setDecoderConfig({ type: 'js' });
draco.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');

const loader = new GLTFLoader();
loader.setDRACOLoader(draco);

const modelCache = new Map();

export function loadGLTFModel(scene, glbPath, options = { receiveShadow: true, castShadow: true }) {
  const { receiveShadow, castShadow } = options;

  if (modelCache.has(glbPath)) {
    const cachedModel = modelCache.get(glbPath).clone();
    scene.add(cachedModel);
    return Promise.resolve(cachedModel);
  }

  return new Promise((resolve, reject) => {
    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene;
        obj.position.set(0, 0, 0); // Use set for position to avoid repeated code
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;
        scene.add(obj);

        // Optimize shadow assignment by checking if it is necessary
        if (receiveShadow || castShadow) {
          obj.traverse(child => {
            if (child.isMesh) {
              child.castShadow = castShadow;
              child.receiveShadow = receiveShadow;
            }
          });
        }

        modelCache.set(glbPath, obj.clone()); // Cache a clone of the loaded model
        resolve(obj);
      },
      undefined,
      error => {
        reject(error);
      }
    );
  });
}
