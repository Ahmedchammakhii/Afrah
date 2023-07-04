import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
const jost = Playfair_Display({ subsets: ["latin"], weight: "400" });
export default function Deposit() {
  return (
    <main
      style={{
        width: "100vw",
        height: "110vh",
        display: "flex",

        overflow: "hidden",
      }}
    >
      <div
        className="leftcontainer"
        style={{
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 30,
        }}
      >
        <p
          style={{
            textAlign: "left",
            color: "rgba(79, 72, 66, 1)",
            letterSpacing: "0.1em",
            fontWeight: "600",
          }}
        >
          Créateur d'instants magiques, un mariage à votre image{" "}
        </p>{" "}
        <p
          style={{
            lineHeight: 1.5,
            fontSize: "45px",
            width: "50%",
          }}
          className={jost.className}
        >
          Placez votre dépôt MAINTENANT & économisez !
        </p>
        <div
          className="article"
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div className="svg" style={{ height: "40%", width: "10%" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height={"100%"}
              width={"100%"}
              fill="rgba(152,184,191,1)"
            >
              <path d="M170.718 216.482L141.6 245.6l93.6 93.6 208-208-29.118-29.118L235.2 279.918l-64.482-63.436zM422.4 256c0 91.518-74.883 166.4-166.4 166.4S89.6 347.518 89.6 256 164.482 89.6 256 89.6c15.6 0 31.2 2.082 45.764 6.241L334 63.6C310.082 53.2 284.082 48 256 48 141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208h-41.6z"></path>
            </svg>
          </div>
          <p
            style={{
              width: "55%",
              paddingBottom: "20px",
              borderBottom: "1px solid #000",
              fontSize: "16px",
              color: "rgba(0,0,0,1)",
            }}
            className={jost.className}
          >
            Se marier cette année, la prochaine ou même en 2025 ? Il n'est
            jamais trop tôt pour "réclamer votre date" sur le calendrier de
            votre agenda, cela vous assure d'obtenir votre premier choix !
          </p>
        </div>
        <div
          className="article"
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div className="svg" style={{ height: "40%", width: "10%" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height={"100%"}
              width={"100%"}
              fill="rgba(152,184,191,1)"
            >
              <path d="M170.718 216.482L141.6 245.6l93.6 93.6 208-208-29.118-29.118L235.2 279.918l-64.482-63.436zM422.4 256c0 91.518-74.883 166.4-166.4 166.4S89.6 347.518 89.6 256 164.482 89.6 256 89.6c15.6 0 31.2 2.082 45.764 6.241L334 63.6C310.082 53.2 284.082 48 256 48 141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208h-41.6z"></path>
            </svg>
          </div>
          <p
            style={{
              width: "55%",
              paddingBottom: "20px",
              borderBottom: "1px solid #000",
              fontSize: "16px",
              color: "rgba(0,0,0,1)",
            }}
            className={jost.className}
          >
            L'embauche d'un organisateur de mariage et la réservation de votre
            lieu (confirmant cette date !) Viennent en premier dans le processus
            de planification.
          </p>
        </div>
        <div
          className="article"
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div className="svg" style={{ height: "40%", width: "10%" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height={"100%"}
              width={"100%"}
              fill="rgba(152,184,191,1)"
            >
              <path d="M170.718 216.482L141.6 245.6l93.6 93.6 208-208-29.118-29.118L235.2 279.918l-64.482-63.436zM422.4 256c0 91.518-74.883 166.4-166.4 166.4S89.6 347.518 89.6 256 164.482 89.6 256 89.6c15.6 0 31.2 2.082 45.764 6.241L334 63.6C310.082 53.2 284.082 48 256 48 141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208h-41.6z"></path>
            </svg>
          </div>
          <p
            style={{
              width: "55%",
              paddingBottom: "20px",
              borderBottom: "1px solid #000",
              fontSize: "16px",
              color: "rgba(0,0,0,1)",
            }}
            className={jost.className}
          >
            Vous n'avez pas de salle ? Vous ne savez pas du tout par où
            commencer ? Contactez-nous, nous pouvons vous dire quoi faire en
            premier, qui embaucher et quand. Notre équipe de planification peut
            vous guider à travers...
          </p>
        </div>
      </div>
      <div
        style={{
          width: "50%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
        className="rightcontainer"
      >
        <div
          className="iphone"
          style={{
            width: "max-content",
            height: "max-content",
            background: 'url("/assets/iphone.png") no-repeat ',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
            zIndex: 3,
          }}
        >
          <video
            id="myVideo"
            autoPlay
            loop
            muted
            autoCorrect="true"
            src={"/assets/Revisit AFRAH.mp4"}
            style={{
              width: "50%",
              height: "100%",
              transform: "scale(.72) translateX(-15px)",
            }}
          />
        </div>
        <div
          className="theimage"
          style={{
            background: "url('/assets/a.jpg') no-repeat",
            width: "46%",
            height: "100%",
            position: "absolute",
            zIndex: 2,
            marginTop: 100,
            marginLeft: 50,
          }}
        ></div>
      </div>
      <style>{`
       
        #myVideo::-webkit-media-controls-panel {
            display: none !important;
          }
          
          #myVideo::-webkit-media-controls {
            display: none !important;
          }
          
          #myVideo::-webkit-media-controls-overlay-play-button {
            display: none !important;
          }
        `}</style>
    </main>
  );
}
