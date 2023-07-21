import data from '@/data/landing/hero_data';

export default function Record({ record }) {
    return (
        <div style={{ width: "100%", right: "-2%", height: "25%", position: "relative", bottom: "25%", marginLeft: "2.2%%", display: "flex", justifyContent: "center", flexDirection: "column", zIndex: 99, position: "absolute", bottom: 0 }}>
            <div style={{ display: "flex", gap: "1.5%" }}>
                <div style={{ width: "8vh", height: "8vh", borderRadius: "100%", border: "1px solid white", position: "relative", cursor: "pointer" }} >
                    <img style={{ width: "20%", position: "absolute", left: "45%", top: "50%", transform: "translate(-50%, -50%)" }} src='https://cdn.discordapp.com/attachments/1073737355896299542/1124656168434946048/Daco_752371.png' />
                </div>
                <div style={{ width: "8vh", height: "8vh", borderRadius: "100%", border: "1px solid white", position: "relative", cursor: "pointer" }} >
                    <img style={{ width: "20%", position: "absolute", left: "52%", top: "50%", transform: "translate(-50%, -50%) rotate(180deg)" }} src='https://cdn.discordapp.com/attachments/1073737355896299542/1124656168434946048/Daco_752371.png' />
                </div>

                <div style={{ height: "8vh", width: "35%", display: "flex", position: "relative", display: "flex", alignItems: "center" }} >
                    <div id="tracker" style={{ width: "100%", height: "0.26vh", position: "relative", display: "flex", background: "rgba(256,256,256,0.4)", boxShadow: "0px 0px 6px 1px rgba(0,0,0,0.4)" }}>
                        {data.map((e, i) => {
                            return <div key={i} style={{ height: "100%", width: `${100 / data.length}%`, borderRadius: "1vh", background: "transparent" }} >
                                <div style={{ width: "0%", height: "100%", background: "#e4ad32", transition: "width 1s cubic-bezier(.69,.26,0,1)" }} />
                            </div>
                        })}
                    </div>
                </div>
                <div style={{
                    color: "white", height: "100%", display: "flex",
                    alignItems: "center", fontSize: "3vw", marginTop: "-0.25vw",
                    fontWeight: "bold", overflow: "hidden", width: "4vw"
                }}>
                    <div ref={record} style={{ display: "flex", transition: "1s cubic-bezier(.69,.26,0,1)" }}>
                        <div>
                            02
                        </div>
                        <div style={{ transform: "translateX(100%)", transition: "1s cubic-bezier(.69,.26,0,1)" }}>
                            03
                        </div>
                    </div>
                </div>

            </div>
        </div>)
}
