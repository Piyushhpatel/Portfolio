"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { loadGLTFModel } from '@/libs/model';
import { DogSpinner, DogContainer } from './voxel-dog-loader';

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const VoxelDog = () => {
  const refContainer = useRef();
  const [loading, setLoading] = useState(true);
  const refRenderer = useRef();
  const refScene = useRef(new THREE.Scene());
  const refCamera = useRef();
  const refControls = useRef();
  const urlDogGLB = '/dog.glb';
  const requestRef = useRef();

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer;
    const { current: container } = refContainer;
    const { current: camera } = refCamera;
    if (container && renderer && camera) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;
      renderer.setSize(scW, scH);
      camera.aspect = scW / scH;
      camera.updateProjectionMatrix();
    }
  }, []);

  useEffect(() => {
    const { current: container } = refContainer;
    if (container) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      refRenderer.current = renderer;

      const scene = refScene.current;

      const target = new THREE.Vector3(-0.5, 1.2, 0);
      const initialCameraPosition = new THREE.Vector3(
        20 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI)
      );

      const scale = scH * 0.005 + 4.8;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);
      refCamera.current = camera;

      const ambientLight = new THREE.AmbientLight(0xcccccc, Math.PI);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;
      refControls.current = controls;

      loadGLTFModel(scene, urlDogGLB, {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate();
        setLoading(false);
      });

      const animate = () => {
        requestRef.current = requestAnimationFrame(animate);

        if (refCamera.current) {
          const { current: camera } = refCamera;
          const frameCount = requestRef.current;
          if (frameCount <= 100) {
            const p = initialCameraPosition;
            const rotSpeed = -easeOutCirc(frameCount / 120) * Math.PI * 20;

            camera.position.y = 10;
            camera.position.x =
              p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
            camera.position.z =
              p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
            camera.lookAt(target);
          } else {
            refControls.current.update();
          }

          renderer.render(scene, camera);
        }
      };

      return () => {
        cancelAnimationFrame(requestRef.current);
        renderer.domElement.remove();
        renderer.dispose();
        refControls.current.dispose();
        refScene.current.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.geometry.dispose();
            child.material.dispose();
          }
        });
      };
    }
  }, [urlDogGLB, handleWindowResize]);

  useEffect(() => {
    const debouncedResizeHandler = () => {
      clearTimeout(requestRef.current);
      requestRef.current = setTimeout(() => handleWindowResize(), 100);
    };

    window.addEventListener('resize', debouncedResizeHandler, false);
    return () => {
      window.removeEventListener('resize', debouncedResizeHandler, false);
      clearTimeout(requestRef.current);
    };
  }, [handleWindowResize]);

  return (
    <DogContainer ref={refContainer}>
      {loading && <DogSpinner />}
    </DogContainer>
  );
};

export default VoxelDog;
