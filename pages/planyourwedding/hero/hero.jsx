"use client";
import { Parisienne } from "next/font/google";
import { Aref_Ruqaa_Ink } from "next/font/google";
import Image from "next/image";

const parisienne = Parisienne({ subsets: ["latin"], weight: "400" });
const aref = Aref_Ruqaa_Ink({
  subsets: ["arabic"],
  weight: "400",
});

export default function Hero() {
  return (
    <main
      style={{
        width: "100vw",
        height: "110vh",
        backgroundColor: "#f3cfe4",

        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        zIndex: 3,
      }}
    >
      <div
        className="text_wrapper"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "70%",
          width: "100%",
          color: "#a65535",
          fontSize: "90px",
        }}
      >
        <p
          style={{ textAlign: "center", background: "#fff", padding: 10 }}
          className={parisienne.className}
        >
          là où les rêves deviennent réalité{" "}
        </p>
        <p className={aref.className} style={{}}>
          * Warararaarays *{" "}
        </p>
      </div>
      <div
        className="images"
        style={{
          position: "absolute",
          bottom: -150,
          width: "100%",
        }}
      >
        <div
          className="images_wrapper"
          style={{
            display: "flex",
            justifyContent: "space-around",
            height: "100%",
            overflow: "hidden",
            zIndex: 3,
          }}
        >
          <div
            className="image"
            style={{
              position: "relative",
              transform: "scale(.8)",
              marginLeft: "50px",
            }}
          >
            <Image src={"/assets/0.png"} width="400" height="500"></Image>
          </div>
          <div
            className="image"
            style={{
              position: "relative",
              transform: "scale(.89)",
              marginLeft: "-50px",
              zIndex: 3,
            }}
          >
            <Image src={"/assets/8.png"} width="400" height="500"></Image>
          </div>
          <div className="image" style={{ zIndex: 3 }}>
            <Image
              src={"/assets/west.png"}
              width="400"
              height="500"
              style={{ transform: "scale(1.1)", margin: "0 20px", zIndex: 3 }}
            ></Image>
          </div>

          <div className="image" style={{ transform: "scale(.89)", zIndex: 3 }}>
            <Image src={"/assets/4.png"} width="400" height="500"></Image>
          </div>
          <div
            className="image"
            style={{
              position: "relative",
              transform: "scale(.8)",
              marginRight: "50px",
            }}
          >
            <Image src={"/assets/last.png"} width="400" height="500"></Image>
          </div>
        </div>
      </div>
    </main>
  );
}
