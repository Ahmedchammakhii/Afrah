"use client";
import { Jost, Poppins } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import localFont from "next/font/local";
gsap.registerPlugin(ScrollTrigger);
const myFont = localFont({ src: "../Garamond-Premier-Pro-Bold.otf" });

const play = Jost({ subsets: ["latin"], weight: "700" });
const playa = Poppins({ subsets: ["latin"], weight: "300" });
export default function Hero2() {
  return (
    <main
      className="main"
      style={{
        width: "100vw",
        height: "100vh",
        zIndex: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        zIndex: -1,
        flexDirection: "column",
        background: "rgb(230,237,237)",
      }}
    >
      <video
        id="myVideo2a"
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
          display: "none",
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
        <h1
          style={{
            color: "white",
            zIndex: 400,
            textAlign: "center",
            position: "relative",
            width: "100%",
            display: "none",
            justifyContent: "center",
            letterSpacing: "1.2rem",
          }}
          className={myFont.className}
        >
          AFRAH
        </h1>
        <div
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
          }}
          onAnimationEnd={(e) => (e.currentTarget.style.opacity = 1)}
        >
          <h1
            className={playa.className}
            id="id"
            style={{
              color: "black",
              zIndex: 400,
              textAlign: "center",
            }}
          >
            La date du jour tant attendu 👰🏻 🤵🏻 tant rêvé approche?
          </h1>

          <h1
            id="id3"
            style={{
              width: "60%",
              textAlign: "center",
              fontSize: "clamp(1rem,1.2vw,1.3rem)",
              color: "#000",
            }}
            className={playa.className}
          >
            Afrah Group dispose des ressources logistiques et humaines
            nécessaires pour parfaire votre événement, et éblouir vos esprit en
            peu de temps ✨: un mariage clé en main!{" "}
          </h1>
        </div>
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
        </div>
      </div>
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
            #card {
              transform: scale(0.2);
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
              height: 40vh !important;
            }
            .parag {
              font-size: 0.1rem !important;
              width: 50% !important;
            }
            .b > .card:nth-child(1),
            .b > .card:nth-last-child(1) {
              display: none !important ;
            }
            .a > .card:nth-child(1),
            .a > .card:nth-last-child(1) {
              display: none !important ;
            }
          }
          @media screen and (max-width: 600px) {
            .card {
              width: 35vw !important;
              height: 43vh !important;
            }
            .b > .card:nth-child(3),
            .b > .card:nth-last-child(3) {
              display: none !important ;
            }
            .a > .card:nth-child(3),
            .a > .card:nth-last-child(3) {
              display: none !important ;
            }
          }
          @media screen and (max-width: 550px) {
            .b {
              display: none !important;
            }
            .a {
              display: none !important;
            }
            .herotext {
              display: none !important;
            }
            .text > h1 {
              display: flex !important;
            }
            #myVideo2a {
              display: flex !important ;
            }
          }
        `}
      </style>
    </main>
  );
}
