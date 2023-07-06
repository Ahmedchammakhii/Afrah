"use client";
import { Jost, Poppins } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "@/app/globals.css";
gsap.registerPlugin(ScrollTrigger);

const play = Jost({ subsets: ["latin"], weight: "700" });
const playa = Poppins({ subsets: ["latin"], weight: "300" });

export default function Hero() {
  const refce = useRef(null);
  const refce1 = useRef(null);

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: refce.current,
        start: "top top",
        end: () => "+=" + refce.current.clientHeight,
        scrub: true,
        pin: true,
      },
    });

    timeline
      .fromTo(
        ".main",
        {
          transform: "scale(1)",
          transformOrigin: "center center",
          duration: 5,
        },
        {
          transform: "scale(0.5)",
          transformOrigin: "center center",
          duration: 5,
        }
      )
      .fromTo(".herotext", { opacity: 1 }, { opacity: 0 })
      .fromTo(
        "#map",
        { opacity: 0, y: 0, x: -50 },
        { opacity: 1, y: 10, x: 10 },
        "-=1"
      )
      .fromTo(
        "#card",
        { opacity: 0, y: 200, x: -50 },
        { opacity: 1, y: 100, x: 10, duration: 1 },
        "-=1"
      )
      .fromTo(
        "#carda",
        { opacity: 0, y: 0 },
        { opacity: 1, y: -400, duration: 1 }
      )
      .fromTo(
        "#bottomtexta",
        { opacity: 0, y: 0 },
        { opacity: 1, y: 50, x: -50, duration: 5 }
      )
      .fromTo(
        "#colors",
        { opacity: 0, y: 0, x: 100 },
        { opacity: 1, y: -200, x: 200, duration: 5 }
      );
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
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
          flexDirection: "column",
          background: "rgb(230,237,237)",
        }}
      >
        <video
          id="myVideo"
          autoPlay
          loop
          muted
          autoCorrect="true"
          src="/assets/hero.mp4"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            objectFit: "cover",
            filter: "brightness(40%)",
          }}
        />

        <div
          className="text"
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            ref={refce1}
            className="herotext"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 15,
              zIndex: 100,
              opacity: 0,
              animation: "opaci 1s linear",
              animationDelay: "1s",
              textShadow: "2px 2px 2px #000000 ",
            }}
            onAnimationEnd={(e) => (e.currentTarget.style.opacity = 1)}
          >
            <h1
              className={playa.className}
              id="id"
              style={{
                color: "white",
                zIndex: 400,
              }}
            >
              La date du jour tant attendu 👰🏻 🤵🏻 tant rêvé approche?
            </h1>
            <div
              className="centertext"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                gap: 10,
              }}
            >
              <h1
                className={playa.className}
                id="id1"
                style={{
                  color: "white",
                  zIndex: 400,
                  fontSize: "clamp(0.5rem, 1rem, 2rem)",
                  width: "20%",
                  textAlign: "center",
                }}
              >
                Vous avez mille et une choses à faire 🤔 mais vous vous trouvez
                obstrué 😧 et le temps s'écoule?{" "}
              </h1>

              <h1
                className={playa.className}
                id="id2"
                style={{
                  color: "white",
                  zIndex: 400,
                  fontSize: "1.25rem",
                  width: "35%",
                  height: "max-content",
                  paddingBottom: "1px",
                  textAlign: "center",
                }}
              >
                {" "}
                Ne paniquez surtout pas ‼️ nous avons ce qu'il vous faut!{" "}
              </h1>
            </div>
            <h1
              id="id3"
              style={{
                width: "60%",
                textAlign: "center",
                fontSize: "1.3rem",
                color: "#fff",
              }}
              className={playa.className}
            >
              Afrah Group dispose des ressources logistiques et humaines
              nécessaires pour parfaire votre événement, et éblouir vos esprit
              en peu de temps ✨: un mariage clé en main!{" "}
            </h1>
          </div>
          {/* <div
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
            animation: "heroanim1 1s linear",
            animationDelay: "1s",
          }}
          onAnimationEnd={(e) => {
            e.currentTarget.style.transform = "translateY(200px)";
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
              <p className="parag" style={{ fontSize: ".2rem", width: "40%" }}>
                Réussir un mariage demande beaucoup d’organisation Notre équipe
                professionnelle vous accompagne de A jusqu’à Z, couvrant ainsi
                toutes les étapes de la préparation de votre mariage. Du
                faire-part à la décoration de l'entrée et de la salle, passant
                par la sonorisation, l'animation et le traiteur, et évidemment
                jusqu'au podium!
              </p>
              <p>AFRAH</p>
              <p className="parag" style={{ fontSize: ".2rem", width: "40%" }}>
                Afrah vous offre une gamme complète de prestations clé en main
                pour votre cérémonie: de l’aménagement de l'espace, a la mise en
                place du podium, passant par la décoration des lieux, le buffet
                et le service traiteur ainsi que la sonorisation et la lumière
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
              <p className="parag" style={{ fontSize: ".2rem", width: "40%" }}>
                Réussir un mariage demande beaucoup d’organisation Notre équipe
                professionnelle vous accompagne de A jusqu’à Z, couvrant ainsi
                toutes les étapes de la préparation de votre mariage. Du
                faire-part à la décoration de l'entrée et de la salle, passant
                par la sonorisation, l'animation et le traiteur, et évidemment
                jusqu'au podium!
              </p>
              <p>AFRAH</p>
              <p className="parag" style={{ fontSize: ".2rem", width: "40%" }}>
                Afrah vous offre une gamme complète de prestations clé en main
                pour votre cérémonie: de l’aménagement de l'espace, a la mise en
                place du podium, passant par la décoration des lieux, le buffet
                et le service traiteur ainsi que la sonorisation et la lumière
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
              <p className="parag" style={{ fontSize: ".2rem", width: "40%" }}>
                Réussir un mariage demande beaucoup d’organisation Notre équipe
                professionnelle vous accompagne de A jusqu’à Z, couvrant ainsi
                toutes les étapes de la préparation de votre mariage. Du
                faire-part à la décoration de l'entrée et de la salle, passant
                par la sonorisation, l'animation et le traiteur, et évidemment
                jusqu'au podium!
              </p>
              <p>AFRAH</p>
              <p className="parag" style={{ fontSize: ".2rem", width: "40%" }}>
                Afrah vous offre une gamme complète de prestations clé en main
                pour votre cérémonie: de l’aménagement de l'espace, a la mise en
                place du podium, passant par la décoration des lieux, le buffet
                et le service traiteur ainsi que la sonorisation et la lumière
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
              <p className="parag" style={{ fontSize: ".2rem", width: "40%" }}>
                Réussir un mariage demande beaucoup d’organisation Notre équipe
                professionnelle vous accompagne de A jusqu’à Z, couvrant ainsi
                toutes les étapes de la préparation de votre mariage. Du
                faire-part à la décoration de l'entrée et de la salle, passant
                par la sonorisation, l'animation et le traiteur, et évidemment
                jusqu'au podium!
              </p>
              <p>AFRAH</p>
              <p className="parag" style={{ fontSize: ".2rem", width: "40%" }}>
                Afrah vous offre une gamme complète de prestations clé en main
                pour votre cérémonie: de l’aménagement de l'espace, a la mise en
                place du podium, passant par la décoration des lieux, le buffet
                et le service traiteur ainsi que la sonorisation et la lumière
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
              <p className="parag" style={{ fontSize: ".2rem", width: "40%" }}>
                Réussir un mariage demande beaucoup d’organisation Notre équipe
                professionnelle vous accompagne de A jusqu’à Z, couvrant ainsi
                toutes les étapes de la préparation de votre mariage. Du
                faire-part à la décoration de l'entrée et de la salle, passant
                par la sonorisation, l'animation et le traiteur, et évidemment
                jusqu'au podium!
              </p>
              <p>AFRAH</p>
              <p className="parag" style={{ fontSize: ".2rem", width: "40%" }}>
                Afrah vous offre une gamme complète de prestations clé en main
                pour votre cérémonie: de l’aménagement de l'espace, a la mise en
                place du podium, passant par la décoration des lieux, le buffet
                et le service traiteur ainsi que la sonorisation et la lumière
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
            animation: "heroanim2 1s linear",
            animationDelay: "1s",
          }}
          onAnimationEnd={(e) =>
            (e.currentTarget.style.transform = "translateY(-150px)")
          }
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
              <p className="parag" style={{ fontSize: ".2rem", width: "40%" }}>
                Réussir un mariage demande beaucoup d’organisation Notre équipe
                professionnelle vous accompagne de A jusqu’à Z, couvrant ainsi
                toutes les étapes de la préparation de votre mariage. Du
                faire-part à la décoration de l'entrée et de la salle, passant
                par la sonorisation, l'animation et le traiteur, et évidemment
                jusqu'au podium!
              </p>
              <p>AFRAH</p>
              <p className="parag" style={{ fontSize: ".2rem", width: "40%" }}>
                Votre mariage clé en main de A jusqu'à Z.
              </p>
            </div>
            <div
              className="imagething"
              style={{
                width: "100%",
                height: "80%",
                background: "url('/assets/bg.jpg') no-repeat center ",
                backgroundSize: "cover",
              }}
            ></div>
            <p style={{ fontSize: 10 }}>
              Votre mariage clé en main de A jusqu'à Z.
            </p>
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
              <p className="parag" style={{ fontSize: ".2rem", width: "40%" }}>
                Réussir un mariage demande beaucoup d’organisation Notre équipe
                professionnelle vous accompagne de A jusqu’à Z, couvrant ainsi
                toutes les étapes de la préparation de votre mariage. Du
                faire-part à la décoration de l'entrée et de la salle, passant
                par la sonorisation, l'animation et le traiteur, et évidemment
                jusqu'au podium!
              </p>
              <p>AFRAH</p>
              <p className="parag" style={{ fontSize: ".2rem", width: "40%" }}>
                Afrah vous offre une gamme complète de prestations clé en main
                pour votre cérémonie: de l’aménagement de l'espace, a la mise en
                place du podium, passant par la décoration des lieux, le buffet
                et le service traiteur ainsi que la sonorisation et la lumière
              </p>
            </div>
            <div
              className="imagething"
              style={{
                width: "100%",
                height: "80%",
                background: "url('/assets/bg1.jpg') no-repeat center ",
                backgroundSize: "cover",
              }}
            ></div>
            <p style={{ fontSize: 8 }}>
              Tout un matériel desonorisation et de lumière sont à votre
              disposition pour rendre votre événement convivial.{" "}
            </p>
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
              <p className="parag" style={{ fontSize: ".2rem", width: "40%" }}>
                Réussir un mariage demande beaucoup d’organisation Notre équipe
                professionnelle vous accompagne de A jusqu’à Z, couvrant ainsi
                toutes les étapes de la préparation de votre mariage. Du
                faire-part à la décoration de l'entrée et de la salle, passant
                par la sonorisation, l'animation et le traiteur, et évidemment
                jusqu'au podium!
              </p>
              <p>AFRAH</p>
              <p className="parag" style={{ fontSize: ".2rem", width: "40%" }}>
                Afrah vous offre une gamme complète de prestations clé en main
                pour votre cérémonie: de l’aménagement de l'espace, a la mise en
                place du podium, passant par la décoration des lieux, le buffet
                et le service traiteur ainsi que la sonorisation et la lumière
              </p>
            </div>
            <div
              className="imagething"
              style={{
                width: "100%",
                height: "85%",
                background: "url('/assets/bg2.jpg') no-repeat center ",
                backgroundSize: "cover",
              }}
            ></div>
            <p style={{ fontSize: 8 }}>
              Toutes les occasions sont bonnes pour faire appel à nos services.{" "}
            </p>
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
              <p className="parag" style={{ fontSize: ".2rem", width: "40%" }}>
                Réussir un mariage demande beaucoup d’organisation Notre équipe
                professionnelle vous accompagne de A jusqu’à Z, couvrant ainsi
                toutes les étapes de la préparation de votre mariage. Du
                faire-part à la décoration de l'entrée et de la salle, passant
                par la sonorisation, l'animation et le traiteur, et évidemment
                jusqu'au podium!
              </p>
              <p>AFRAH</p>
              <p className="parag" style={{ fontSize: ".2rem", width: "40%" }}>
                Afrah vous offre une gamme complète de prestations clé en main
                pour votre cérémonie: de l’aménagement de l'espace, a la mise en
                place du podium, passant par la décoration des lieux, le buffet
                et le service traiteur ainsi que la sonorisation et la lumière
              </p>
            </div>
            <div
              className="imagething"
              style={{
                width: "100%",
                height: "80%",
                background: "url('/assets/bg4.jpg') no-repeat center ",
                backgroundSize: "cover",
              }}
            ></div>
            <p style={{ fontSize: 8 }}>
              Afrah Group vous accompagnera à chaque étape afin de garantir une
              grandiose réussite.
            </p>
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
              <p className="parag" style={{ fontSize: ".2rem", width: "40%" }}>
                Réussir un mariage demande beaucoup d’organisation Notre équipe
                professionnelle vous accompagne de A jusqu’à Z, couvrant ainsi
                toutes les étapes de la préparation de votre mariage. Du
                faire-part à la décoration de l'entrée et de la salle, passant
                par la sonorisation, l'animation et le traiteur, et évidemment
                jusqu'au podium!
              </p>
              <p>AFRAH</p>
              <p className="parag" style={{ fontSize: ".2rem", width: "40%" }}>
                Afrah vous offre une gamme complète de prestations clé en main
                pour votre cérémonie: de l’aménagement de l'espace, a la mise en
                place du podium, passant par la décoration des lieux, le buffet
                et le service traiteur ainsi que la sonorisation et la lumière
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
            <p style={{ fontSize: 10 }}>📞 23 120 121</p>
          </div>
        </div> */}
        </div>
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
        <style jsx>
          {`
            @keyframes heroanim1 {
              0% {
                transform: translateY(0px);
              }
              100% {
                transform: translateY(200px);
              }
            }
            @keyframes heroanim2 {
              0% {
                transform: translateY(0px);
              }
              100% {
                transform: translateY(-150px);
              }
            }
            @keyframes opaci {
              0% {
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
            }

            @media screen and (max-width: 1247px) {
              #id1 {
                font-size: 0.8rem !important;
              }
              #id2 {
                font-size: 1rem !important;
              }
              #id3 {
                font-size: 1rem !important;
              }
              .parag {
                font-size: 0.12rem !important;
              }
              .card {
                height: 35vh !important;
              }
              .a {
                transform: translateY(150px) !important;
              }
              .b {
                transform: translateY(-150px) !important;
              }
            }
            @media screen and (max-width: 1140px) {
              .a {
                transform: translateY(180px) !important;
              }
              .b {
                transform: translateY(-150px) !important;
              }
              #id1 {
                font-size: 0.7rem !important;
              }
              #id2 {
                font-size: 0.8rem !important;
              }
              #id3 {
                font-size: 0.8rem !important;
              }
              #id {
                font-size: 1.5rem !important;
              }

              .card {
                width: 15vw !important;
              }
            }
            @media screen and (max-width: 909px) {
              .card {
                width: 35vw !important;
              }
              .centertext {
                align-items: center;
              }
            }
            @media screen and (max-width: 750px) {
              #id1 {
                width: 35% !important;
              }
              #id {
                font-size: 1.4rem !important;
              }
              .card {
                width: 120vw !important;
                height: 30vh !important;
                .parag {
                  font-size: 0.1rem !important;
                  width: 50% !important;
                }
              }
            }
          `}
        </style>
      </main>
      <section>
        <Image
          id="map"
          src={"/assets/map.webp"}
          style={{
            position: "absolute",
            left: 0,
            zIndex: 50000,
            bottom: "-500px",
          }}
          width={348}
          height={208}
        ></Image>
        <Image
          id="card"
          src={"/assets/card.png"}
          style={{
            position: "absolute",
            right: 20,
            zIndex: 50000,
            bottom: "-600px",
            transform: "scale(.4)",
          }}
          width={742}
          height={782}
        ></Image>
        <Image
          id="card"
          src={"/assets/dinner.png"}
          style={{
            position: "absolute",
            right: 20,
            zIndex: 50000,
            bottom: "-600px",
            transform: "scale(1.2)",
          }}
          width={174}
          height={152}
        ></Image>
        <Image
          id="card"
          src={"/assets/std.png"}
          style={{
            position: "absolute",
            right: "50%",
            zIndex: 50000,
            bottom: "-600px",
            transform: "scale(1.2)",
          }}
          width={200}
          height={211}
        ></Image>
        <Image
          id="card"
          src={"/assets/song.png"}
          style={{
            position: "absolute",
            right: "20%",
            zIndex: 50000,
            bottom: "-600px",
            transform: "scale(1.2)",
          }}
          width={174}
          height={136}
        ></Image>
        <Image
          id="carda"
          src={"/assets/table.png"}
          style={{
            position: "absolute",
            right: "50%",
            zIndex: 50000,
            bottom: "-600px",
            transform: "scale(1.2)",
          }}
          width={290}
          height={94}
        ></Image>
        <Image
          id="card"
          src={"/assets/types.png"}
          style={{
            position: "absolute",
            left: "20%",
            zIndex: 50000,
            bottom: "-600px",
            transform: "scale(1.2)",
          }}
          width={56}
          height={211}
        ></Image>
        <p
          className={playa.className}
          id="bottomtexta"
          style={{
            position: "absolute",
            left: "10%",
            zIndex: 50000,
            bottom: "-600px",
            transform: "scale(1.2)",
            width: 150,

            color: "rgb(188, 129, 41)",
          }}
        >
          Un mariage à votre image, un souvenir éternel
        </p>

        <Image
          id="colors"
          src={"/assets/colors.png"}
          style={{
            position: "absolute",
            right: "20%",
            zIndex: 50000,
            bottom: "-500px",
            transform: "scale(1.2)",
          }}
          width={36}
          height={105}
        ></Image>
      </section>
    </>
  );
}
