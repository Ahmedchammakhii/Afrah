import Image from "next/image";
import { Jost } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { useEffect, useState } from "react";
import localFont from "next/font/local";
const jost = Jost({ subsets: ["latin"], weight: "600" });
const play = Playfair_Display({ subsets: ["latin"], weight: "400" });
const myFont = localFont({ src: "./BonVivant-Regular.otf" });

export default function Parallaxe() {
  useEffect(() => {
    const parallaxEffect = () => {
      const parallaxElements = document.querySelectorAll(".parallax");

      parallaxElements.forEach((element) => {
        const scrollPosition = window.pageYOffset;
        const elementTopPosition = element.offsetTop;
        const distance = elementTopPosition - scrollPosition;
        const parallaxSpeed = 0.1;

        element.style.backgroundPositionY = `${distance * parallaxSpeed}px`;
      });
    };

    window.addEventListener("scroll", parallaxEffect);

    return () => {
      window.removeEventListener("scroll", parallaxEffect);
    };
  }, []);

  return (
    <main
      style={{
        width: "100vw",
        height: "150vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        flexDirection: "column",
        background: "rgb(230,237,237)",
      }}
      className="mainparallax"
    >
      <p
        className={myFont.className}
        style={{
          fontSize: 36,
          letterSpacing: ".4rem",
          transform: "rotate(-1deg)",
          marginBottom: 10,
        }}
        id="myfont"
      >
        Vous êtes à la recherche de l'excellence , par hasard ?
      </p>

      <div
        className="parallax"
        style={{
          width: "100%",
          height: "50%",
          backgroundImage: "url('./assets/1.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div
          className="text_wrapper"
          style={{
            position: "absolute",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            zIndex: 4,
            top: "10%",
          }}
        >
          <p
            className={jost.className}
            style={{
              fontSize: 25,
              color: "#fff",
              textShadow: "2px 2px 2px #000000 ",
            }}
          >
            INTRODUCING{" "}
          </p>
          <p
            style={{
              fontSize: 75,
              color: "#fff",
              textShadow: "2px 2px 2px #000000 ",
            }}
            className={myFont.className}
          >
            Your Wedding planning Team
          </p>
        </div>
        <div
          className="laptop"
          style={{
            width: "max-content",
            height: "max-content",
            background: 'url("/assets/laptop.png") no-repeat ',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            zIndex: 5,
            top: "30%",
            left: "50%",
            transform: "translate(-45%)",
          }}
        >
          {" "}
          <video
            id="myVideo1"
            autoPlay
            loop
            muted
            autoCorrect="true"
            src={"/assets/Afrah.mp4"}
            style={{
              width: "80%",
              height: "80%",
              transform: "scale(.68) translateX(-14px) translateY(-20px)",
              paddingLeft: 100,
            }}
          />
        </div>
      </div>
      <div
        className="bottomText"
        style={{
          marginTop: "250px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p
          className={jost.className}
          style={{ letterSpacing: "0.1em", fontSize: "35px" }}
          id="team"
        >
          #TEAMAFRAHPRODUCTION
        </p>
        <p
          className={play.className}
          style={{
            letterSpacing: "0.1em",
            width: "50%",
            textAlign: "center",
          }}
          id="whatheheck"
        >
          {" "}
          Notre équipe est vraiment pointue et centrée sur le style, mettant en
          œuvre des idées de concept éclectiques et très stylées personnalisées
          pour chaque événement : vous serez sûr de vous faire bloguer,
          épingler, reprogrammer et tendance. En tant qu'individus, nous sommes
          connus pour notre style unique, notre authenticité, notre passion,
          notre éthique de travail et notre expérience.
        </p>
      </div>
      <style>
        {`
          #myfont {
            font-size: clamp(14px, 4vw, 35px) !important ;
            text-align:center !important;

          }
          @media screen and (max-width: 1000px) {
#myVideo1{
  width:60% !important ;
  transform : translateX(-25px) scale(.68) !important ;



}
.laptop {
  transform : translateX(-35%) !important ;
}
.parallax {
  height:100% !important
}
.text_wrapper p {
  
  font-size: clamp(14px, 5vw, 45px) !important ;
}         
#whatheheck {
  width:90% !important;
  }
  .bottomText {
    margin-top: 0px !important ;
  }

}
@media screen and (max-width: 710px) {
  .laptop {
    transform : translateX(-15%) !important ;
    
  }
  .bottomText {
  position : relative !important ;
  top:-10% !important 
  
  }
  #myVideo1{
    width:50% !important ;
  
  
  
  }
 #team {
  font-size: clamp(15px, 6.2vw, 45px) !important ;

 }

  
}

@media screen and (max-width: 450px) {
  
  .bottomText {
    bottom : -25% !important ;
  }

  
}
@media screen and (max-width: 320px) {
  
  .bottomText {
    bottom : -30% !important ;
  }

  
}
          `}
      </style>
    </main>
  );
}
