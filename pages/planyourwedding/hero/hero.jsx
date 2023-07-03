// "use client";
// import { Dancing_Script, Poppins } from "next/font/google";
// import Image from "next/image";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// const play = Dancing_Script({ subsets: ["latin"], weight: "700" });
// const playa = Poppins({ subsets: ["latin"], weight: "200" });

// export default function Hero() {
//   const refce = useRef(null);
//   useEffect(() => {
//     const tl = gsap.timeline();

//     const cards = document.querySelectorAll(".card");

//     cards.forEach((card, index) => {
//       gsap.set(card, { x: "-100vw" });

//       tl.to(card, { x: "0", duration: 0.8 }, index * 0.5, 1)
//         .to(
//           ".a",
//           { y: 200, delay: 5, transition: "linear .5s", zIndex: 4000 },
//           2
//         )
//         .to(
//           ".b",
//           { y: -200, delay: 5, transition: "linear .5s", zIndex: 4000 },
//           2
//         )
//         .to("#aha", { y: 200, delay: 4.5, rotate: "120deg" }, 2)
//         .to("#ahaa", { y: 200, delay: 4.5 }, 2)
//         .to("#id", { opacity: 1, delay: 5.8, duration: 1 }, 2)
//         .to("#last", { y: -250, x: -150, delay: 5 }, 2);
//     });
//   });
//   return (
//     <main
//       className="main"
//       ref={refce}
//       style={{
//         width: "100vw",
//         height: "100vh",
//         zIndex: 3,
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         position: "relative",
//       }}
//     >
//       <div
//         className="text"
//         style={{
//           position: "relative",
//           width: "100%",
//           display: "flex",
//           justifyContent: "center",
//         }}
//       >
//         <h1
//           id="id"
//           className={playa.className}
//           style={{
//             fontSize: "19rem",
//             color: "black",
//             zIndex: 400,
//             opacity: 0,
//           }}
//         >
//           Afrah
//         </h1>
//         <div
//           className="cards a"
//           style={{
//             position: "absolute",
//             left: 0,
//             top: 0,
//             width: "100%",
//             height: "100%",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             gap: 5,
//             marginTop: 150,
//           }}
//         >
//           <div
//             className="card"
//             style={{
//               background: "#efefef",
//               height: "40vh",
//               width: "14vw",
//               zIndex: 20,
//               padding: 10,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               gap: 10,
//               rotate: "10deg",
//             }}
//           >
//             <div
//               className="texts"
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 gap: 20,
//               }}
//             >
//               <p style={{ fontSize: 4, width: "40%" }}>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
//                 eveniet velit voluptatibus at! Perspiciatis nihil nisi repellat.
//                 Rerum quis, blanditiis nemo aliquam harum laudantium, debitis
//                 similique omnis voluptatem fugit illum!
//               </p>
//               <p>AFRAH</p>
//               <p style={{ fontSize: 4, width: "40%" }}>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Repellendus est perferendis aperiam cum distinctio corporis
//                 ducimus ab, inventore assumenda dolores nobis, amet maxime quo?
//                 Nobis eveniet beatae dicta quisquam architecto?
//               </p>
//             </div>
//             <div
//               className="imagething"
//               style={{
//                 width: "100%",
//                 height: "90%",
//                 background: "url('/assets/1.jpg') no-repeat center ",
//                 backgroundSize: "cover",
//               }}
//             ></div>
//           </div>{" "}
//           <div
//             className="card"
//             style={{
//               background: "#efefef",
//               height: "40vh",
//               width: "14vw",
//               zIndex: 20,
//               padding: 10,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               gap: 10,
//               rotate: "-10deg",
//             }}
//           >
//             <div
//               className="texts"
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 gap: 20,
//               }}
//             >
//               <p style={{ fontSize: 4, width: "40%" }}>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
//                 eveniet velit voluptatibus at! Perspiciatis nihil nisi repellat.
//                 Rerum quis, blanditiis nemo aliquam harum laudantium, debitis
//                 similique omnis voluptatem fugit illum!
//               </p>
//               <p>AFRAH</p>
//               <p style={{ fontSize: 4, width: "40%" }}>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Repellendus est perferendis aperiam cum distinctio corporis
//                 ducimus ab, inventore assumenda dolores nobis, amet maxime quo?
//                 Nobis eveniet beatae dicta quisquam architecto?
//               </p>
//             </div>
//             <div
//               className="imagething"
//               style={{
//                 width: "100%",
//                 height: "90%",
//                 background: "url('/assets/2.jpg') no-repeat center ",
//                 backgroundSize: "cover",
//               }}
//             ></div>
//           </div>{" "}
//           <div
//             className="card"
//             style={{
//               background: "#efefef",
//               height: "40vh",
//               width: "14vw",
//               zIndex: 20,
//               padding: 10,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               gap: 10,
//               rotate: "7deg",
//               transform: "translateY(20px) translateX(15px)",
//             }}
//           >
//             <div
//               className="texts"
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 gap: 20,
//               }}
//             >
//               <p style={{ fontSize: 4, width: "40%" }}>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
//                 eveniet velit voluptatibus at! Perspiciatis nihil nisi repellat.
//                 Rerum quis, blanditiis nemo aliquam harum laudantium, debitis
//                 similique omnis voluptatem fugit illum!
//               </p>
//               <p>AFRAH</p>
//               <p style={{ fontSize: 4, width: "40%" }}>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Repellendus est perferendis aperiam cum distinctio corporis
//                 ducimus ab, inventore assumenda dolores nobis, amet maxime quo?
//                 Nobis eveniet beatae dicta quisquam architecto?
//               </p>
//             </div>
//             <div
//               className="imagething"
//               style={{
//                 width: "100%",
//                 height: "90%",
//                 background: "url('/assets/7.jpg') no-repeat center ",
//                 backgroundSize: "cover",
//               }}
//             ></div>
//           </div>{" "}
//           <div
//             className="card"
//             style={{
//               background: "#efefef",
//               height: "40vh",
//               width: "14vw",
//               zIndex: 20,
//               padding: 10,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               gap: 10,
//               rotate: "10deg",
//               transform: "translateY(-50px)",
//             }}
//           >
//             <div
//               className="texts"
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 gap: 20,
//               }}
//             >
//               <p style={{ fontSize: 4, width: "40%" }}>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
//                 eveniet velit voluptatibus at! Perspiciatis nihil nisi repellat.
//                 Rerum quis, blanditiis nemo aliquam harum laudantium, debitis
//                 similique omnis voluptatem fugit illum!
//               </p>
//               <p>AFRAH</p>
//               <p style={{ fontSize: 4, width: "40%" }}>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Repellendus est perferendis aperiam cum distinctio corporis
//                 ducimus ab, inventore assumenda dolores nobis, amet maxime quo?
//                 Nobis eveniet beatae dicta quisquam architecto?
//               </p>
//             </div>
//             <div
//               className="imagething"
//               style={{
//                 width: "100%",
//                 height: "90%",
//                 background: "url('/assets/4.jpg') no-repeat center ",
//                 backgroundSize: "cover",
//               }}
//             ></div>
//           </div>{" "}
//           <div
//             className="card"
//             style={{
//               background: "#efefef",
//               height: "40vh",
//               width: "14vw",
//               zIndex: 20,
//               padding: 10,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               gap: 10,
//               rotate: "15deg",
//               transform: "translateX(10px)",
//             }}
//           >
//             <div
//               className="texts"
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 gap: 20,
//               }}
//             >
//               <p style={{ fontSize: 4, width: "40%" }}>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
//                 eveniet velit voluptatibus at! Perspiciatis nihil nisi repellat.
//                 Rerum quis, blanditiis nemo aliquam harum laudantium, debitis
//                 similique omnis voluptatem fugit illum!
//               </p>
//               <p>AFRAH</p>
//               <p style={{ fontSize: 4, width: "40%" }}>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Repellendus est perferendis aperiam cum distinctio corporis
//                 ducimus ab, inventore assumenda dolores nobis, amet maxime quo?
//                 Nobis eveniet beatae dicta quisquam architecto?
//               </p>
//             </div>
//             <div
//               className="imagething"
//               style={{
//                 width: "100%",
//                 height: "90%",
//                 background: "url('/assets/5.jpg') no-repeat center ",
//                 backgroundSize: "cover",
//               }}
//             ></div>
//           </div>
//           <div
//             className="card"
//             style={{
//               background: "#efefef",
//               height: "40vh",
//               width: "14vw",
//               zIndex: 20,
//               padding: 10,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               gap: 10,
//               rotate: "-10deg",
//               translate: "translateX(-50px)",
//             }}
//           >
//             <div
//               className="texts"
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 gap: 20,
//               }}
//             >
//               <p style={{ fontSize: 4, width: "40%" }}>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
//                 eveniet velit voluptatibus at! Perspiciatis nihil nisi repellat.
//                 Rerum quis, blanditiis nemo aliquam harum laudantium, debitis
//                 similique omnis voluptatem fugit illum!
//               </p>
//               <p>AFRAH</p>
//               <p style={{ fontSize: 4, width: "40%" }}>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Repellendus est perferendis aperiam cum distinctio corporis
//                 ducimus ab, inventore assumenda dolores nobis, amet maxime quo?
//                 Nobis eveniet beatae dicta quisquam architecto?
//               </p>
//             </div>
//             <div
//               className="imagething"
//               style={{
//                 width: "100%",
//                 height: "90%",
//                 background: "url('/assets/thenya.jpeg') no-repeat center ",
//                 backgroundSize: "cover",
//               }}
//             ></div>
//           </div>
//         </div>
//         <div
//           className="cards b"
//           style={{
//             position: "absolute",
//             left: 0,
//             top: -200,
//             width: "100%",
//             height: "100%",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             gap: 5,
//           }}
//         >
//           <div
//             className="card"
//             style={{
//               background: "#efefef",
//               height: "40vh",
//               width: "14vw",
//               zIndex: 20,
//               padding: 10,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               gap: 10,
//               rotate: "10deg",
//             }}
//           >
//             <div
//               className="texts"
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 gap: 20,
//               }}
//             >
//               <p style={{ fontSize: 4, width: "40%" }}>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
//                 eveniet velit voluptatibus at! Perspiciatis nihil nisi repellat.
//                 Rerum quis, blanditiis nemo aliquam harum laudantium, debitis
//                 similique omnis voluptatem fugit illum!
//               </p>
//               <p>AFRAH</p>
//               <p style={{ fontSize: 4, width: "40%" }}>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Repellendus est perferendis aperiam cum distinctio corporis
//                 ducimus ab, inventore assumenda dolores nobis, amet maxime quo?
//                 Nobis eveniet beatae dicta quisquam architecto?
//               </p>
//             </div>
//             <div
//               className="imagething"
//               style={{
//                 width: "100%",
//                 height: "90%",
//                 background: "url('/assets/bg.jpg') no-repeat center ",
//                 backgroundSize: "cover",
//               }}
//             ></div>
//           </div>{" "}
//           <div
//             className="card"
//             style={{
//               background: "#efefef",
//               height: "40vh",
//               width: "14vw",
//               zIndex: 20,
//               padding: 10,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               gap: 10,
//               rotate: "-10deg",
//             }}
//           >
//             <div
//               className="texts"
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 gap: 20,
//               }}
//             >
//               <p style={{ fontSize: 4, width: "40%" }}>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
//                 eveniet velit voluptatibus at! Perspiciatis nihil nisi repellat.
//                 Rerum quis, blanditiis nemo aliquam harum laudantium, debitis
//                 similique omnis voluptatem fugit illum!
//               </p>
//               <p>AFRAH</p>
//               <p style={{ fontSize: 4, width: "40%" }}>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Repellendus est perferendis aperiam cum distinctio corporis
//                 ducimus ab, inventore assumenda dolores nobis, amet maxime quo?
//                 Nobis eveniet beatae dicta quisquam architecto?
//               </p>
//             </div>
//             <div
//               className="imagething"
//               style={{
//                 width: "100%",
//                 height: "90%",
//                 background: "url('/assets/bg1.jpg') no-repeat center ",
//                 backgroundSize: "cover",
//               }}
//             ></div>
//           </div>{" "}
//           <div
//             className="card"
//             style={{
//               background: "#efefef",
//               height: "40vh",
//               width: "14vw",
//               zIndex: 20,
//               padding: 10,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               gap: 10,
//               rotate: "7deg",
//               transform: "translateY(20px) translateX(15px)",
//             }}
//           >
//             <div
//               className="texts"
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 gap: 20,
//               }}
//             >
//               <p style={{ fontSize: 4, width: "40%" }}>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
//                 eveniet velit voluptatibus at! Perspiciatis nihil nisi repellat.
//                 Rerum quis, blanditiis nemo aliquam harum laudantium, debitis
//                 similique omnis voluptatem fugit illum!
//               </p>
//               <p>AFRAH</p>
//               <p style={{ fontSize: 4, width: "40%" }}>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Repellendus est perferendis aperiam cum distinctio corporis
//                 ducimus ab, inventore assumenda dolores nobis, amet maxime quo?
//                 Nobis eveniet beatae dicta quisquam architecto?
//               </p>
//             </div>
//             <div
//               className="imagething"
//               style={{
//                 width: "100%",
//                 height: "90%",
//                 background: "url('/assets/bg2.jpg') no-repeat center ",
//                 backgroundSize: "cover",
//               }}
//             ></div>
//           </div>{" "}
//           <div
//             className="card"
//             style={{
//               background: "#efefef",
//               height: "40vh",
//               width: "14vw",
//               zIndex: 20,
//               padding: 10,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               gap: 10,
//               rotate: "10deg",
//               transform: "translateY(-50px)",
//             }}
//           >
//             <div
//               className="texts"
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 gap: 20,
//               }}
//             >
//               <p style={{ fontSize: 4, width: "40%" }}>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
//                 eveniet velit voluptatibus at! Perspiciatis nihil nisi repellat.
//                 Rerum quis, blanditiis nemo aliquam harum laudantium, debitis
//                 similique omnis voluptatem fugit illum!
//               </p>
//               <p>AFRAH</p>
//               <p style={{ fontSize: 4, width: "40%" }}>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Repellendus est perferendis aperiam cum distinctio corporis
//                 ducimus ab, inventore assumenda dolores nobis, amet maxime quo?
//                 Nobis eveniet beatae dicta quisquam architecto?
//               </p>
//             </div>
//             <div
//               className="imagething"
//               style={{
//                 width: "100%",
//                 height: "90%",
//                 background: "url('/assets/bg4.jpg') no-repeat center ",
//                 backgroundSize: "cover",
//               }}
//             ></div>
//           </div>{" "}
//           <div
//             className="card"
//             style={{
//               background: "#efefef",
//               height: "40vh",
//               width: "14vw",
//               zIndex: 20,
//               padding: 10,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               gap: 10,
//               rotate: "15deg",
//               transform: "translateX(10px)",
//             }}
//           >
//             <div
//               className="texts"
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 gap: 20,
//               }}
//             >
//               <p style={{ fontSize: 4, width: "40%" }}>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
//                 eveniet velit voluptatibus at! Perspiciatis nihil nisi repellat.
//                 Rerum quis, blanditiis nemo aliquam harum laudantium, debitis
//                 similique omnis voluptatem fugit illum!
//               </p>
//               <p>AFRAH</p>
//               <p style={{ fontSize: 4, width: "40%" }}>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Repellendus est perferendis aperiam cum distinctio corporis
//                 ducimus ab, inventore assumenda dolores nobis, amet maxime quo?
//                 Nobis eveniet beatae dicta quisquam architecto?
//               </p>
//             </div>
//             <div
//               className="imagething"
//               style={{
//                 width: "100%",
//                 height: "90%",
//                 background: "url('/assets/5.jpg') no-repeat center ",
//                 backgroundSize: "cover",
//               }}
//             ></div>
//           </div>
//           <div
//             className="card"
//             style={{
//               background: "#efefef",
//               height: "40vh",
//               width: "14vw",
//               zIndex: 20,
//               padding: 10,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               gap: 10,
//               rotate: "-10deg",
//               translate: "translateX(-50px)",
//             }}
//           >
//             <div
//               className="texts"
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 gap: 20,
//               }}
//             >
//               <p style={{ fontSize: 4, width: "40%" }}>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
//                 eveniet velit voluptatibus at! Perspiciatis nihil nisi repellat.
//                 Rerum quis, blanditiis nemo aliquam harum laudantium, debitis
//                 similique omnis voluptatem fugit illum!
//               </p>
//               <p>AFRAH</p>
//               <p style={{ fontSize: 4, width: "40%" }}>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Repellendus est perferendis aperiam cum distinctio corporis
//                 ducimus ab, inventore assumenda dolores nobis, amet maxime quo?
//                 Nobis eveniet beatae dicta quisquam architecto?
//               </p>
//             </div>
//             <div
//               className="imagething"
//               style={{
//                 width: "100%",
//                 height: "90%",
//                 background: "url('/assets/thenya.jpeg') no-repeat center ",
//                 backgroundSize: "cover",
//               }}
//             ></div>
//           </div>
//         </div>
//       </div>
//       <Image
//         id="aha"
//         src={"/assets/arrow.jpg"}
//         width={300}
//         height={293}
//         style={{
//           position: "absolute",
//           left: 50,
//           transform: "scale(.8) rotate(180deg)",
//           top: 40,
//         }}
//       ></Image>
//       <h1
//         className={playa.className}
//         id="ahaa"
//         style={{
//           position: "absolute",
//           left: 100,
//           top: 30,
//           fontSize: 20,
//           weight: 200,
//         }}
//       >
//         Votre mariage clé en main{" "}
//       </h1>
//       <h1
//         className={playa.className}
//         id="last"
//         style={{
//           position: "absolute",
//           right: 30,
//           bottom: 40,
//           fontSize: 35,
//           zIndex: 1000,
//         }}
//       >
//         de A jusqu'à Z.{" "}
//       </h1>

//       {/* <Image
//         src={"/assets/arrow.jpg"}
//         width={300}
//         height={293}
//         style={{
//           position: "absolute",
//           right: 100,
//           bottom: 30,
//           fontSize: 20,
//           transform: "scale(.8) rotate(180deg) 	scaleX(-1) ",
//           zIndex: 3,
//         }}
//       ></Image> */}
//     </main>
//   );
// }
"use client";
import { Dancing_Script, Poppins } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
const play = Dancing_Script({ subsets: ["latin"], weight: "700" });
const playa = Poppins({ subsets: ["latin"], weight: "300" });

export default function Hero() {
  const refce = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();

    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
      gsap.set(".a", { y: 220 });
      gsap.set(".b", { y: -200 });
      gsap.set("#aha", { y: 200, rotate: "120deg" });
      gsap.set("#ahaa", { y: 200 });
      gsap.set("#id", { opacity: 1 });
      gsap.set("#last", { y: -250, x: -150 });
    });
  });
  return (
    <main
      className="main"
      ref={refce}
      style={{
        width: "100vw",
        height: "100vh",
        zIndex: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        className="text"
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1
          id="id"
          className={playa.className}
          style={{
            fontSize: "19rem",
            color: "black",
            zIndex: 400,
            opacity: 0,
          }}
        >
          Afrah
        </h1>
        <div
          className="cards a"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            marginTop: 150,
          }}
        >
          <div
            className="card"
            style={{
              background: "#efefef",
              height: "40vh",
              width: "14vw",
              zIndex: 20,
              padding: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
              rotate: "10deg",
            }}
          >
            <div
              className="texts"
              style={{
                width: "100%",
                display: "flex",
                gap: 20,
              }}
            >
              <p style={{ fontSize: 4, width: "40%" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                eveniet velit voluptatibus at! Perspiciatis nihil nisi repellat.
                Rerum quis, blanditiis nemo aliquam harum laudantium, debitis
                similique omnis voluptatem fugit illum!
              </p>
              <p>AFRAH</p>
              <p style={{ fontSize: 4, width: "40%" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus est perferendis aperiam cum distinctio corporis
                ducimus ab, inventore assumenda dolores nobis, amet maxime quo?
                Nobis eveniet beatae dicta quisquam architecto?
              </p>
            </div>
            <div
              className="imagething"
              style={{
                width: "100%",
                height: "90%",
                background: "url('/assets/1.jpg') no-repeat center ",
                backgroundSize: "cover",
              }}
            ></div>
          </div>{" "}
          <div
            className="card"
            style={{
              background: "#efefef",
              height: "40vh",
              width: "14vw",
              zIndex: 20,
              padding: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
              rotate: "-10deg",
            }}
          >
            <div
              className="texts"
              style={{
                width: "100%",
                display: "flex",
                gap: 20,
              }}
            >
              <p style={{ fontSize: 4, width: "40%" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                eveniet velit voluptatibus at! Perspiciatis nihil nisi repellat.
                Rerum quis, blanditiis nemo aliquam harum laudantium, debitis
                similique omnis voluptatem fugit illum!
              </p>
              <p>AFRAH</p>
              <p style={{ fontSize: 4, width: "40%" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus est perferendis aperiam cum distinctio corporis
                ducimus ab, inventore assumenda dolores nobis, amet maxime quo?
                Nobis eveniet beatae dicta quisquam architecto?
              </p>
            </div>
            <div
              className="imagething"
              style={{
                width: "100%",
                height: "90%",
                background: "url('/assets/2.jpg') no-repeat center ",
                backgroundSize: "cover",
              }}
            ></div>
          </div>{" "}
          <div
            className="card"
            style={{
              background: "#efefef",
              height: "40vh",
              width: "14vw",
              zIndex: 20,
              padding: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
              rotate: "7deg",
              transform: "translateY(20px) translateX(15px)",
            }}
          >
            <div
              className="texts"
              style={{
                width: "100%",
                display: "flex",
                gap: 20,
              }}
            >
              <p style={{ fontSize: 4, width: "40%" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                eveniet velit voluptatibus at! Perspiciatis nihil nisi repellat.
                Rerum quis, blanditiis nemo aliquam harum laudantium, debitis
                similique omnis voluptatem fugit illum!
              </p>
              <p>AFRAH</p>
              <p style={{ fontSize: 4, width: "40%" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus est perferendis aperiam cum distinctio corporis
                ducimus ab, inventore assumenda dolores nobis, amet maxime quo?
                Nobis eveniet beatae dicta quisquam architecto?
              </p>
            </div>
            <div
              className="imagething"
              style={{
                width: "100%",
                height: "90%",
                background: "url('/assets/7.jpg') no-repeat center ",
                backgroundSize: "cover",
              }}
            ></div>
          </div>{" "}
          <div
            className="card"
            style={{
              background: "#efefef",
              height: "40vh",
              width: "14vw",
              zIndex: 20,
              padding: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
              rotate: "10deg",
              transform: "translateY(-50px)",
            }}
          >
            <div
              className="texts"
              style={{
                width: "100%",
                display: "flex",
                gap: 20,
              }}
            >
              <p style={{ fontSize: 4, width: "40%" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                eveniet velit voluptatibus at! Perspiciatis nihil nisi repellat.
                Rerum quis, blanditiis nemo aliquam harum laudantium, debitis
                similique omnis voluptatem fugit illum!
              </p>
              <p>AFRAH</p>
              <p style={{ fontSize: 4, width: "40%" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus est perferendis aperiam cum distinctio corporis
                ducimus ab, inventore assumenda dolores nobis, amet maxime quo?
                Nobis eveniet beatae dicta quisquam architecto?
              </p>
            </div>
            <div
              className="imagething"
              style={{
                width: "100%",
                height: "90%",
                background: "url('/assets/4.jpg') no-repeat center ",
                backgroundSize: "cover",
              }}
            ></div>
          </div>{" "}
          <div
            className="card"
            style={{
              background: "#efefef",
              height: "40vh",
              width: "14vw",
              zIndex: 20,
              padding: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
              rotate: "15deg",
              transform: "translateX(10px)",
            }}
          >
            <div
              className="texts"
              style={{
                width: "100%",
                display: "flex",
                gap: 20,
              }}
            >
              <p style={{ fontSize: 4, width: "40%" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                eveniet velit voluptatibus at! Perspiciatis nihil nisi repellat.
                Rerum quis, blanditiis nemo aliquam harum laudantium, debitis
                similique omnis voluptatem fugit illum!
              </p>
              <p>AFRAH</p>
              <p style={{ fontSize: 4, width: "40%" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus est perferendis aperiam cum distinctio corporis
                ducimus ab, inventore assumenda dolores nobis, amet maxime quo?
                Nobis eveniet beatae dicta quisquam architecto?
              </p>
            </div>
            <div
              className="imagething"
              style={{
                width: "100%",
                height: "90%",
                background: "url('/assets/5.jpg') no-repeat center ",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div
            className="card"
            style={{
              background: "#efefef",
              height: "40vh",
              width: "14vw",
              zIndex: 20,
              padding: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
              rotate: "-10deg",
              translate: "translateX(-50px)",
            }}
          >
            <div
              className="texts"
              style={{
                width: "100%",
                display: "flex",
                gap: 20,
              }}
            >
              <p style={{ fontSize: 4, width: "40%" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                eveniet velit voluptatibus at! Perspiciatis nihil nisi repellat.
                Rerum quis, blanditiis nemo aliquam harum laudantium, debitis
                similique omnis voluptatem fugit illum!
              </p>
              <p>AFRAH</p>
              <p style={{ fontSize: 4, width: "40%" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus est perferendis aperiam cum distinctio corporis
                ducimus ab, inventore assumenda dolores nobis, amet maxime quo?
                Nobis eveniet beatae dicta quisquam architecto?
              </p>
            </div>
            <div
              className="imagething"
              style={{
                width: "100%",
                height: "90%",
                background: "url('/assets/thenya.jpeg') no-repeat center ",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </div>
        <div
          className="cards b"
          style={{
            position: "absolute",
            left: 0,
            top: -200,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
          }}
        >
          <div
            className="card"
            style={{
              background: "#efefef",
              height: "40vh",
              width: "14vw",
              zIndex: 20,
              padding: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
              rotate: "10deg",
            }}
          >
            <div
              className="texts"
              style={{
                width: "100%",
                display: "flex",
                gap: 20,
              }}
            >
              <p style={{ fontSize: 4, width: "40%" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                eveniet velit voluptatibus at! Perspiciatis nihil nisi repellat.
                Rerum quis, blanditiis nemo aliquam harum laudantium, debitis
                similique omnis voluptatem fugit illum!
              </p>
              <p>AFRAH</p>
              <p style={{ fontSize: 4, width: "40%" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus est perferendis aperiam cum distinctio corporis
                ducimus ab, inventore assumenda dolores nobis, amet maxime quo?
                Nobis eveniet beatae dicta quisquam architecto?
              </p>
            </div>
            <div
              className="imagething"
              style={{
                width: "100%",
                height: "90%",
                background: "url('/assets/bg.jpg') no-repeat center ",
                backgroundSize: "cover",
              }}
            ></div>
          </div>{" "}
          <div
            className="card"
            style={{
              background: "#efefef",
              height: "40vh",
              width: "14vw",
              zIndex: 20,
              padding: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
              rotate: "-10deg",
            }}
          >
            <div
              className="texts"
              style={{
                width: "100%",
                display: "flex",
                gap: 20,
              }}
            >
              <p style={{ fontSize: 4, width: "40%" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                eveniet velit voluptatibus at! Perspiciatis nihil nisi repellat.
                Rerum quis, blanditiis nemo aliquam harum laudantium, debitis
                similique omnis voluptatem fugit illum!
              </p>
              <p>AFRAH</p>
              <p style={{ fontSize: 4, width: "40%" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus est perferendis aperiam cum distinctio corporis
                ducimus ab, inventore assumenda dolores nobis, amet maxime quo?
                Nobis eveniet beatae dicta quisquam architecto?
              </p>
            </div>
            <div
              className="imagething"
              style={{
                width: "100%",
                height: "90%",
                background: "url('/assets/bg1.jpg') no-repeat center ",
                backgroundSize: "cover",
              }}
            ></div>
          </div>{" "}
          <div
            className="card"
            style={{
              background: "#efefef",
              height: "40vh",
              width: "14vw",
              zIndex: 20,
              padding: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
              rotate: "7deg",
              transform: "translateY(20px) translateX(15px)",
            }}
          >
            <div
              className="texts"
              style={{
                width: "100%",
                display: "flex",
                gap: 20,
              }}
            >
              <p style={{ fontSize: 4, width: "40%" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                eveniet velit voluptatibus at! Perspiciatis nihil nisi repellat.
                Rerum quis, blanditiis nemo aliquam harum laudantium, debitis
                similique omnis voluptatem fugit illum!
              </p>
              <p>AFRAH</p>
              <p style={{ fontSize: 4, width: "40%" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus est perferendis aperiam cum distinctio corporis
                ducimus ab, inventore assumenda dolores nobis, amet maxime quo?
                Nobis eveniet beatae dicta quisquam architecto?
              </p>
            </div>
            <div
              className="imagething"
              style={{
                width: "100%",
                height: "90%",
                background: "url('/assets/bg2.jpg') no-repeat center ",
                backgroundSize: "cover",
              }}
            ></div>
          </div>{" "}
          <div
            className="card"
            style={{
              background: "#efefef",
              height: "40vh",
              width: "14vw",
              zIndex: 20,
              padding: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
              rotate: "10deg",
              transform: "translateY(-50px)",
            }}
          >
            <div
              className="texts"
              style={{
                width: "100%",
                display: "flex",
                gap: 20,
              }}
            >
              <p style={{ fontSize: 4, width: "40%" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                eveniet velit voluptatibus at! Perspiciatis nihil nisi repellat.
                Rerum quis, blanditiis nemo aliquam harum laudantium, debitis
                similique omnis voluptatem fugit illum!
              </p>
              <p>AFRAH</p>
              <p style={{ fontSize: 4, width: "40%" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus est perferendis aperiam cum distinctio corporis
                ducimus ab, inventore assumenda dolores nobis, amet maxime quo?
                Nobis eveniet beatae dicta quisquam architecto?
              </p>
            </div>
            <div
              className="imagething"
              style={{
                width: "100%",
                height: "90%",
                background: "url('/assets/bg4.jpg') no-repeat center ",
                backgroundSize: "cover",
              }}
            ></div>
          </div>{" "}
          <div
            className="card"
            style={{
              background: "#efefef",
              height: "40vh",
              width: "14vw",
              zIndex: 20,
              padding: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
              rotate: "15deg",
              transform: "translateX(10px)",
            }}
          >
            <div
              className="texts"
              style={{
                width: "100%",
                display: "flex",
                gap: 20,
              }}
            >
              <p style={{ fontSize: 4, width: "40%" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                eveniet velit voluptatibus at! Perspiciatis nihil nisi repellat.
                Rerum quis, blanditiis nemo aliquam harum laudantium, debitis
                similique omnis voluptatem fugit illum!
              </p>
              <p>AFRAH</p>
              <p style={{ fontSize: 4, width: "40%" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus est perferendis aperiam cum distinctio corporis
                ducimus ab, inventore assumenda dolores nobis, amet maxime quo?
                Nobis eveniet beatae dicta quisquam architecto?
              </p>
            </div>
            <div
              className="imagething"
              style={{
                width: "100%",
                height: "90%",
                background: "url('/assets/5.jpg') no-repeat center ",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div
            className="card"
            style={{
              background: "#efefef",
              height: "40vh",
              width: "14vw",
              zIndex: 20,
              padding: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
              rotate: "-10deg",
              translate: "translateX(-50px)",
            }}
          >
            <div
              className="texts"
              style={{
                width: "100%",
                display: "flex",
                gap: 20,
              }}
            >
              <p style={{ fontSize: 4, width: "40%" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                eveniet velit voluptatibus at! Perspiciatis nihil nisi repellat.
                Rerum quis, blanditiis nemo aliquam harum laudantium, debitis
                similique omnis voluptatem fugit illum!
              </p>
              <p>AFRAH</p>
              <p style={{ fontSize: 4, width: "40%" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus est perferendis aperiam cum distinctio corporis
                ducimus ab, inventore assumenda dolores nobis, amet maxime quo?
                Nobis eveniet beatae dicta quisquam architecto?
              </p>
            </div>
            <div
              className="imagething"
              style={{
                width: "100%",
                height: "90%",
                background: "url('/assets/thenya.jpeg') no-repeat center ",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </div>
      </div>
      <Image
        id="aha"
        src={"/assets/arrow.jpg"}
        width={300}
        height={293}
        style={{
          position: "absolute",
          left: 50,
          transform: "scale(.8) rotate(180deg)",
          top: 40,
        }}
      ></Image>
      <h1
        className={playa.className}
        id="ahaa"
        style={{
          position: "absolute",
          left: 100,
          top: 30,
          fontSize: 20,
          weight: 200,
        }}
      >
        Votre mariage clé en main{" "}
      </h1>
      <h1
        className={playa.className}
        id="last"
        style={{
          position: "absolute",
          right: 30,
          bottom: 40,
          fontSize: 25,
          zIndex: 1000,
        }}
      >
        de A jusqu'à Z.{" "}
      </h1>

      {/* <Image
        src={"/assets/arrow.jpg"}
        width={300}
        height={293}
        style={{
          position: "absolute",
          right: 100,
          bottom: 30,
          fontSize: 20,
          transform: "scale(.8) rotate(180deg) 	scaleX(-1) ",
          zIndex: 3,
        }}
      ></Image> */}
    </main>
  );
}
