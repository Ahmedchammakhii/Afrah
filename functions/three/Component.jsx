import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture, Stars, Text } from '@react-three/drei';
import { DoubleSide, ShaderMaterial, Vector3, Color } from 'three';

const textureArray = [
  '/p1.jpg',
  '/pool.jpg',
  '/night.jpg',
  '/depth.jpg',
  '/day.jpg',
];
const loadTextures = async (textures) => {
  const promises = textures.map((texture) => new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = texture;
  }));

  return Promise.all(promises);
};
const Sphere = (props) => {
  const mesh = useRef(null);
  const texture = useTexture(props.texture);
  const [hovered, setHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [orientation, setOrientation] = useState({ beta: 0, gamma: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const mouseX = (clientX / window.innerWidth) * 2 - 1;
      const mouseY = (clientY / window.innerHeight) * 2 + 1;
      // setMousePosition({ x: mouseX, y: mouseY });
    };

    const handleOrientationChange = (event) => {
      const { alpha, beta, gamma } = event;
      setOrientation({ alpha, beta, gamma });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('deviceorientation', handleOrientationChange);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('deviceorientation', handleOrientationChange);
    };
  }, []);
  const threshold = 220
  useFrame(({ camera }) => {
    if (mesh.current) {
      const movementX = orientation.gamma * 10;
      const movementY = orientation.beta * 10;
      // const movementZ=orientation.alpha*2

      const totalMovementX = movementX + mousePosition.x * 360;
      const totalMovementY = movementY + mousePosition.y * 60;

      mesh.current.rotation.x = totalMovementY / 100;
      mesh.current.rotation.y = totalMovementX / 100;
      // mesh.current.rotation.z=movementZ/100
      const distance = camera.position.distanceTo(mesh.current.position);
      if (distance > threshold) {
        mesh.current.rotation.y += 0.01;
      }
    }
  });

  const handleClick = () => {
    console.log('Clicked!');
  };

  return (
    <mesh
      {...props}
      ref={mesh}
      // scale={hovered ? 1.1 : 1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick}
    >
      <sphereGeometry args={[200, 200, 200]} />
      <meshStandardMaterial side={DoubleSide} map={texture} />
    </mesh>
  );
};
// function CubeButton(props) {
//   const mesh = useRef(null);
//   const [hovered, setHovered] = useState(false);

//   const handleClick = () => {
//     props.onClick();
//   };

//   return (
//     <mesh
//       {...props}
//       ref={mesh}
//       scale={hovered ? 1.1 : 1}
//       onClick={handleClick}
//       onPointerOver={() => setHovered(true)}
//       onPointerOut={() => setHovered(false)}
//     >
//       <boxGeometry args={[5, 5, 5]} />
//       <meshStandardMaterial color={hovered ? 'red' : 'blue'} />
//     </mesh>
//   );
// }

const WaveShader = {
  uniforms: {
    time: { value: 0 },
  },
  vertexShader: `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float time;
    
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      uv.y += sin(uv.x * 10.0 + time) * 0.1;
      vec3 color = vec3(uv.x, uv.y, 0.5);
      gl_FragColor = vec4(color, 1.0);
    }
  `,
};
const starMaterial = new ShaderMaterial({
  uniforms: {
    uColor: { value: new Color('#ff0000') },
  },
  vertexShader: `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 uColor;

    varying vec2 vUv;

    void main() {
      gl_FragColor = vec4(uColor, 1.0);
    }
  `,
});
export default function Component() {
  const cameraRef = useRef();
  const [cameraPosition, setCameraPosition] = useState([0, 0, 0]);
  const [currentTextureIndex, setCurrentTextureIndex] = useState(0);
  const [resolution, setResolution] = useState([1200, 700]);

  // const [loadedTextures, setLoadedTextures] = useState([]); if (innerWidth && innerHeight)

    useEffect(() => {
      const preloadTextures = async () => {
        const textures = await loadTextures(textureArray);
        // setLoadedTextures(textures);
      };

      preloadTextures();

    }, []);

  const handleChangeTexture = () => {
    setCurrentTextureIndex((prevIndex) => (prevIndex + 1) % textureArray.length);
  };

  useEffect(() => {
    if (innerWidth && innerHeight) {
      setResolution([innerWidth, innerHeight])
      console.log("azeaze")
    }
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const mouseX = (clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(clientY / window.innerHeight) * 2 + 1;
      // console.log("x", mouseX, "y", mouseY, cameraRef.current.position, "hiii", cameraPosition);
      const camera = cameraRef.current;
      camera.position.x = mouseX * 100;
      camera.position.y = mouseY * 100;
      camera.lookAt(0, 0, 0);
      mouseX && mouseY && setCameraPosition([mouseX * 100, mouseY * 100, 0]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [cameraPosition]);

  return (

    <Canvas
      style={{ position: 'absolute', background: 'transparent', height: "60vh", filter: " brightness(90%)" }}
      onCreated={({ gl }) => {
        gl.setClearColor('black');
        gl.setSize([resolution[0]], resolution[1]);
      }}
    >

      <perspectiveCamera ref={cameraRef} position={cameraPosition} target={[0, 0, 0]} />

      <ambientLight intensity={0.7} />
      <pointLight position={[15, 15, 15]} />

      <Sphere position={[0, 0, 0]} texture={textureArray[currentTextureIndex]} />
      <Text

        position={[0, 400, 70]}
        side={DoubleSide}
        fontSize={50}
        maxWidth={300}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="/fonts/Roboto.ttf"
        anchorX="center"
        anchorY="center"


      >
        Welcome to afrah events!
      </Text>
      <Text
        cursor='pointer'
        position={[150, 100, 250]}
        side={DoubleSide}
        fontSize={20}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="/fonts/Roboto.ttf"
        anchorX="center"
        anchorY="middle"
        onClick={handleChangeTexture}

      >
        click me!
      </Text>
      <Stars
        // material={new ShaderMaterial(WaveShader)}
        material={starMaterial}
        radius={250}
        depth={50}
        count={10000}
        factor={4}
        saturation={1}
        fade
      />

      <OrbitControls enableDamping dampingFactor={0.5} rotateSpeed={0.5} maxPolarAngle={Math.PI} maxDistance={820} />


    </Canvas>


  );
}
