import { Jost } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { useEffect, useState } from "react";
const jost = Jost({ subsets: ["latin"], weight: "600" });
const play = Playfair_Display({ subsets: ["latin"], weight: "400" });
const background = [
  "/assets/bg.jpg",
  "/assets/bg1.jpg",
  "/assets/bg2.jpg",
  "/assets/bg3.jpg",
  "/assets/bg4.jpg",
];
export default function Slider({ mbottom }) {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % background.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <main
      style={{
        backgroundImage: `url(${background[currentBgIndex]}) `,
        backgroundSize: "cover",
        marginTop: mbottom ? "100vh" : 0,
        height: "80vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "#fff",
        gap: 20,
        transition: "background 1s linear",
        position: "relative",
      }}
      className="slider"
    >
      <div
        className="blacklayer"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "#000",
          opacity: 0.7,
          zIndex: 2,
        }}
      ></div>
      <p className={jost.className} style={{ zIndex: 3 }}>
        BROWSE OUR
      </p>
      <p
        className={play.className}
        style={{
          lineHeight: "1.1",
          letterSpacing: "0.15em",
          fontSize: "35px",
          zIndex: 3,
        }}
      >
        Portfolio
      </p>
      <p
        className="hr"
        style={{ width: "2px", height: "50px", background: "#fff", zIndex: 3 }}
      ></p>
      <p
        className={play.className}
        style={{
          width: "50%",
          textAlign: "center",
          letterSpacing: "0.05em",
          zIndex: 3,
        }}
        id="middletext"
      >
        Nous comprenons que votre mariage est un moment unique et précieux, et
        nous sommes là pour vous aider à le rendre absolument magique. Avec
        Afrah, vous pouvez laisser libre cours à votre imagination et nous nous
        chargeons de transformer vos rêves en réalité. Que vous souhaitiez un
        mariage intime dans un cadre pittoresque ou une célébration grandiose
        avec des feux d'artifice et des décors somptueux, nous sommes là pour
        vous accompagner à chaque étape.
      </p>
      <style jsx>
        {`
          @media screen and (max-width: 950px) {
            #middletext {
              width: 85% !important;
            }
          }
          @media screen and (max-width: 636px) {
            .slider {
              height: 100vh !important ;
            }
          }
        `}
      </style>
    </main>
  );
}
