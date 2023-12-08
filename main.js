import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const material2 = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
const cube = new THREE.Mesh( geometry, material );
const cube2 = new THREE.Mesh( geometry, material2 );
scene.add( cube );
scene.add( cube2 );


const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );

const geometry2 = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( geometry2, material );
// camera.position.z = 5;
// camera.position.y = 10;
// camera.position.x = 10;

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;


	renderer.render( scene, camera );
}

const loader = new GLTFLoader();

loader.load( 'smtest_blend.glb', function ( gltf ) {
    console.log("model is loaded")
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

scene.add( line );
renderer.render( scene, camera );
// animate();