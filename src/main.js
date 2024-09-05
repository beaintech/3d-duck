// Import Three.js from node_modules
import * as THREE from 'three';

// Create the scene
const scene = new THREE.Scene();

// Set up the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Set up the renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a point light
const pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

// Create the duck body (Sphere)
const bodyGeometry = new THREE.SphereGeometry(1, 32, 32);
const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0xffff00 });
const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
scene.add(body);

// Create the duck head (Smaller sphere)
const headGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const head = new THREE.Mesh(headGeometry, bodyMaterial);
head.position.set(0, 1.5, 0); // Position head on top of the body
scene.add(head);

// Create the beak (Cone)
const beakGeometry = new THREE.ConeGeometry(0.2, 0.5, 32);
const beakMaterial = new THREE.MeshStandardMaterial({ color: 0xffa500 });
const beak = new THREE.Mesh(beakGeometry, beakMaterial);
beak.position.set(0, 1.2, 0.75); // Position the beak in front of the head
beak.rotation.x = Math.PI / 2; // Rotate beak to point forward
scene.add(beak);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    body.rotation.y += 0.01; // Rotate the body
    renderer.render(scene, camera);
}

// Start the animation
animate();

// Make canvas responsive
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
