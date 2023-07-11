import { Playfair_Display } from "next/font/google";
import Image from "next/image";
const jost = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["italic", "normal"],
});
export default function Deposit() {
  return (
    <main
      style={{
        width: "100vw",
        height: "110vh",
        display: "flex",
        gridTemplateAreas: '"first" "sec"',
        backgroundColor: "rgb(230,237,237)",
        overflow: "hidden",
      }}
      className="maindepoist"
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
          id="firsttext"
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
          id="middle"
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
              fontStyle: "italic",
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
              fontStyle: "italic",
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
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            fontStyle: "italic",
          }}
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
              fontStyle: "italic",
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
            maxWidth: "max-content",
            maxHeight: "max-content",
            minHeight: "600px",
            minWidth: "400px",
            background: 'url("/assets/iphone.png") no-repeat ',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
            zIndex: 3,
            marginTop: 100,
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
              width: "100%",
              height: "100%",
              transform: "scale(.72) translateX(-17px)",
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
            marginLeft: 28,
            overflow: "hidden",
          }}
        ></div>
      </div>
      <style>{`
       
        #myVideo::-webkit-media-controls-panel , myVideo1::-webkit-media-controls-panel {
            display: none !important;
          }
          
          #myVideo::-webkit-media-controls,#myVideo1::-webkit-media-controls  {
            display: none !important;
          }
          
          #myVideo::-webkit-media-controls-overlay-play-button ,  #myVideo1::-webkit-media-controls-overlay-play-button {
            display: none !important;
          }
          @media screen and (max-width: 1241px) {
            .maindepoist {
              height:115vh !important ;
            }
            #middle  {
              font-size:clamp(15px, 4vw, 45px) !important;
              width: 70% !important

            }
            #firsttext {
              font-size:clamp(10px, 1.5vw, 15px) !important;

            }
            .article {
              font-size: clamp(8px, 1vw, 15px) !important

            }
            .article p {
              font-size: clamp(10px, 1vw, 15px) !important;

              width:80% !important
            }
            #iphone {
              min-height:100% !important
            }
            #myVideo {
            width:80% !important;
            height:50% !important;
              transform:scale(1.45) translate(18px,100px) !important
              
            }
          }
          @media screen and (max-width: 860px) {
            #myVideo {
              width:40% !important;
              height:60% !important;
                transform:scale(1.5) translate(53px,70px) !important ;
                
              }
              .iphone {
                height:200px !important
              }
              .theimage{
                height:90% !important; 

              }
          }
          @media screen and (max-width: 710px) {
.maindepoist {
  display: grid !important; 
  grid-template-columns: 1fr !important; 
  grid-template-rows: 1fr 1fr !important; 
  gap: 0px 0px !important; 

}
.leftcontainer {
  grid-area:sec !important;
width:100% !important ; 
height:50% !important ; 
margin-top:100px !important ;
}
.rightcontainer{
  grid-area:first !important;
  height:50% !important ; 
  width:100% !important ; 
  overflow:visible !important ;

}
.theimage {
  width:100% !important ; 
margin : 0 !important ;
margin-top:50px !important;
height: 50% !important; }


.iphone {
left:50% !important;
position:relative !important ;
transform:translateX(-40%) !important
}
.maindepoist {
  height:170vh !important ;
}
#middle  {
  font-size:clamp(15px, 4vw, 45px) !important;
  width: 70% !important

}
#firsttext {
  font-size:clamp(10px, 3vw, 25px) !important;
  color:#000 !important
}
.article p {
  font-size: clamp(15px, 2vw, 25px) !important

}
}
@media screen and (max-width: 500px) {
  .maindepoist {
  height:180vh !important
  }}
  @media screen and (max-width: 385px) {

    .leftcontainer {
      scale:.9 !important ;
      transform:translateX(-35px) !important
    }
    .iphone {
      transform:translateX(-250px) !important ;
      scale:.8 !important;

    }
    .article {
      scale:.9 !important;

    }
    ]
  } @media screen and (max-width: 325px) {

    .leftcontainer {
      scale:.8 !important ;
      transform:translateX(-50px) !important
    }
   
  
  }
  @media screen and (max-height:601px) and (min-width:585px) {
    .maindepoist{
height:150vh !important ;
    }
  }

  
          `}</style>
    </main>
  );
}
