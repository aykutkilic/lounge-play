import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { clone as cloneRig } from 'three/addons/utils/SkeletonUtils.js';

// Your hands in first person: the rigged hand from cookwithus (Godot XR Tools'
// hand model, CC0, see public/models/hand/License.md), posed bone by bone.
//
// Hand space (metres), as the model is drawn: a right hand with the wrist at
// the origin, fingers along -z, the thumb +y and the palm facing -x. The left
// hand is the same hand seen in a mirror (a parent scaled -1 on x).

const RIG = { scene: null, wait: [] };
new GLTFLoader().load(new URL('../models/hand/Hand_Nails_R.gltf', import.meta.url).href, (g) => {
  RIG.scene = g.scene;
  for (const f of RIG.wait.splice(0)) f();
}, undefined, () => { RIG.wait.length = 0; });

export function whenRig(f) {
  if (RIG.scene) f();
  else RIG.wait.push(f);
}

const FINGER_BONES = ['Index', 'Middle', 'Ring', 'Little'].map((f) => ['Proximal', 'Intermediate', 'Distal'].map((b) => `${f}_${b}_R`));
const THUMB_BONES = ['Thumb_Metacarpal_R', 'Thumb_Proximal_R', 'Thumb_Distal_R'];
const BEND = [1.45, 1.7, 1.15]; // a fist: how far each knuckle bends (rad)
// the thumb's bones, each turned about its own x and z (rad)
const THUMB = {
  open: [[0, 0], [0, 0], [0, 0]],
  fist: [[-0.5, -0.2], [-0.42, 0.45], [0, 0.65]],
  pinch: [[-0.6, -0.4], [0, 0.8], [0, 0.4]],
  flat: [[-0.25, -0.6], [0, 0.2], [0, 0.2]],
};
const thumbAt = (a, b, t) => THUMB[a].map((p, j) => [p[0] + (THUMB[b][j][0] - p[0]) * t, p[1] + (THUMB[b][j][1] - p[1]) * t]);

// Hand shapes: how far each finger (index → little) curls, and the thumb's pose.
export const SHAPES = {
  hold: { fingers: [0.42, 0.48, 0.52, 0.56], thumb: thumbAt('open', 'flat', 0.85) }, // round a book's edge
  pinch: { fingers: [0.45, 0.6, 0.8, 0.9], thumb: THUMB.pinch }, // a page corner between thumb and index
  relaxed: { fingers: [0.15, 0.18, 0.2, 0.24], thumb: thumbAt('open', 'flat', 0.5) },
};

// points in hand space
export const PALM = new THREE.Vector3(-0.026, 0, -0.058).multiplyScalar(0.875); // the middle of the palm
export const PINCH = new THREE.Vector3(-0.0383, 0.0247, -0.106).multiplyScalar(0.875); // between thumb and index tips

const qe = new THREE.Euler();
const qq = new THREE.Quaternion();

// A hand of its own in this skin (null until the model has loaded).
export function makeRig(skin) {
  if (!RIG.scene) return null;
  const model = cloneRig(RIG.scene);
  model.position.z = -0.0272; // the model's wrist joint, moved to the origin
  const root = new THREE.Group();
  root.add(model);
  root.scale.setScalar(0.875);
  const bones = {};
  model.traverse((o) => {
    if (o.isBone) { bones[o.name] = o; o.userData.rest = o.quaternion.clone(); }
    if (o.isSkinnedMesh) { o.material = skin; o.frustumCulled = false; o.castShadow = false; o.receiveShadow = false; }
  });
  return { root, fingers: FINGER_BONES.map((f) => f.map((n) => bones[n])), thumb: THUMB_BONES.map((n) => bones[n]) };
}

// Pose a hand between two shapes (t = 0 … 1).
export function poseRig(R, a, b = a, t = 0) {
  R.fingers.forEach((f, i) => {
    const c = a.fingers[i] + (b.fingers[i] - a.fingers[i]) * t;
    f.forEach((bone, j) => {
      if (bone) bone.quaternion.copy(bone.userData.rest).multiply(qq.setFromEuler(qe.set(0, 0, 0.06 + c * BEND[j])));
    });
  });
  R.thumb.forEach((bone, j) => {
    if (!bone) return;
    const x = a.thumb[j][0] + (b.thumb[j][0] - a.thumb[j][0]) * t;
    const z = a.thumb[j][1] + (b.thumb[j][1] - a.thumb[j][1]) * t;
    bone.quaternion.copy(bone.userData.rest).multiply(qq.setFromEuler(qe.set(x, 0, z)));
  });
}

// Skin with a soft warm sheen at its edges, as skin has.
export function skinMaterial(color) {
  return new THREE.MeshPhysicalMaterial({ color, roughness: 0.55, sheen: 0.6, sheenColor: new THREE.Color('#ff9a8a'), sheenRoughness: 0.5 });
}

// Skin tones to choose from (lobby), lightest to darkest.
export const SKIN_TONES = ['#f3cfb3', '#e0ac8a', '#c68863', '#9a6440', '#5e3a24'];
