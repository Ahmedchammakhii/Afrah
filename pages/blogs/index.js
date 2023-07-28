import React, { useEffect, useRef, useState } from "react";
import style from "./blogs.module.css";
import  "../../app/globals.css"
import Image from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import Layout from "../../sharedComponents/layout/layout";


const blogs = () => {
  const ref = useRef(null);
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    fetchBlogs();
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.innerWidth > 650) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "end end",
          scrub: true,
        },
      });

      timeline.fromTo(
        "." + style.blogs,
        { translateY: 0, transition: "all linear 1s", duration: 2 },
        { translateY: -200, transition: "all linear 1s", duration: 2 }
      );

      let mouse = {
        x: undefined,
        y: undefined,
      };
      let posX;
      let posY;
      let degX;
      let degY;
      let sensibility = 10;

      document.addEventListener("mousemove", function () {
        mouse.x = event.clientX;
        mouse.y = event.clientY;

        posX =
          ((mouse.x - window.innerWidth / 2) / (window.innerWidth / 2)) * 100;
        posY =
          ((mouse.y - window.innerHeight / 2) / (window.innerHeight / 2)) * 100;

        degX = posX / sensibility;
        degY = posY / sensibility;

        refce.current?.style &&
          (refce.current.style.transform =
            "rotateX(" +
            -degY +
            "deg) rotateY(" +
            degX +
            "deg) translateZ(-100px)");
      });
      return () => {
        if (timeline) timeline.kill();
        document.removeEventListener("mousemove", function () {
          mouse.x = event.clientX;
          mouse.y = event.clientY;

          posX =
            ((mouse.x - window.innerWidth / 2) / (window.innerWidth / 2)) * 100;
          posY =
            ((mouse.y - window.innerHeight / 2) / (window.innerHeight / 2)) *
            100;

          degX = posX / sensibility;
          degY = posY / sensibility;

          refce.current.style &&
            (refce.current.style.transform =
              "rotateX(" +
              -degY +
              "deg) rotateY(" +
              degX +
              "deg) translateZ(-100px)");
        });
      };
    }
  });
  async function fetchBlogs() {
    try {
      const response = await fetch("http://localhost:3000/api/blogs");
      const data = await response.json();
      setblogs(data);
    } catch (e) {
      console.log(e);
    }
  }

  const refce = useRef(null);
  return (
    <>
      <Layout dark={true}>
      <div style={{paddingTop:'20vh', width:'100%'}} />
        {blogs.length > 0 ? (
          <div className={style.blogs} ref={ref}>
            <main className={style.main} ref={refce}>
              <h1>BLOGS</h1>
              <p>Filters</p>
              <div
                className={style.allbuttons}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div
                  className={style.buttons}
                  style={{ display: "flex", gap: "10px" }}
                >
                  <button className={style.selected}>
                    All {blogs && `(${blogs.length})`}
                  </button>
                </div>
                <div className="searchbutton">
                  <p style={{ fontSize: ".7rem", marginBottom: "5px" }}>
                    Search for a blog
                  </p>
                  <input
                    placeholder="i want to read about ..."
                    className={style.inputa}
                  ></input>
                </div>
              </div>
            </main>
            <div className={style.displayblogs}>
              {blogs.map((blog, i) => {
                if (i == 0) {
                  return (
                    <div
                      className={style.firstimage}
                      style={{ backgroundImage: `url(${blog.data.image})` }}
                    >
                      {" "}
                      <div className={style.blogdetails}>
                        <Link
                          style={{ color: "#000" }}
                          href={{
                            pathname: "/blog/" + blog.id,
                            query: { blog: blog.data },
                          }}
                        >
                          <h1
                            style={{
                              background: "#fff",
                              borderRadius: "3rem",
                              width: "max-content",
                              borderBottomLeftRadius: 0,
                              padding: 20,
                              borderBottomRightRadius: "0",
                              borderTopRightRadius: "20rem 3rem",
                              textAlign: "center",
                              fontSize: "2.3rvw",
                            }}
                          >
                            {blog.data.title}{" "}
                          </h1>
                          <p
                            style={{
                              color: "GrayText",
                              background: "#fff",
                              borderRadius: "2rem",
                              marginTop: "-25px",
                              paddingTop: "10px",
                              padding: 20,
                              borderTopLeftRadius: 0,
                            }}
                          >
                            {blog.data.description.slice(0, 50) + "..."}
                          </p>
                          <p
                            style={{
                              background: "#fff",
                              borderRadius: "3rem",
                              width: "max-content",
                              padding: 10,
                              marginTop: "-25px",
                              borderTopLeftRadius: 0,
                              borderBottomRightRadius: "15rem 2rem",
                            }}
                          >
                            Published : {blog.data.created_at.slice(0, 10)}{" "}
                          </p>
                        </Link>{" "}
                      </div>
                    </div>
                  );
                }
                if (i == 1) {
                  return (
                    <div
                      className={style.secimage}
                      style={{ backgroundImage: `url(${blog.data.image})` }}
                    >
                      <Link
                        style={{ color: "#000" }}
                        href={{
                          pathname: "/blog/" + blog.id,
                          query: { blog: blog.data },
                        }}
                      >
                        <div className={style.blogdetails}>
                          <h1
                            style={{
                              background: "#fff",
                              borderRadius: "3rem",
                              width: "max-content",
                              borderBottomLeftRadius: 0,
                              padding: 20,
                              borderBottomRightRadius: "0",
                              borderTopRightRadius: "20rem 3rem",
                            }}
                          >
                            {blog.data.title}{" "}
                          </h1>
                          <p
                            style={{
                              color: "GrayText",
                              background: "#fff",
                              borderRadius: "2rem",
                              marginTop: "-25px",
                              paddingTop: "10px",
                              padding: 20,
                              borderTopLeftRadius: 0,
                            }}
                          >
                            {blog.data.description.slice(0, 50) +
                              "... Read More"}
                          </p>
                          <p
                            style={{
                              background: "#fff",
                              borderRadius: "3rem",
                              width: "max-content",
                              padding: 10,
                              marginTop: "-25px",
                              borderTopLeftRadius: 0,
                              borderBottomRightRadius: "15rem 2rem",
                            }}
                          >
                            Published : {blog.data.created_at.slice(0, 10)}{" "}
                          </p>
                        </div>
                      </Link>
                    </div>
                  );
                }
              })}
            </div>
            <div className={style.listingblogs}>
              {blogs.map((blog, i) => {
                if (i > 1) {
                  return (
                    <Link
                      style={{ color: "#000" }}
                      href={{
                        pathname: "/blog/" + blog.id,
                        query: { blog: blog.data },
                      }}
                    >
                      <div
                        className={style.oneblog}
                        image={blog.data.image}
                        style={{ backgroundImage: `url(${blog.data.image})` }}
                      >
                        <div className={style.blogdetails}>
                          <h1
                            style={{
                              background: "#fff",
                              borderRadius: "3rem",
                              width: "max-content",
                              borderBottomLeftRadius: 0,
                              padding: 15,
                              borderBottomRightRadius: "5rem",
                              borderTopRightRadius: "20rem 3rem",
                            }}
                          >
                            {blog.data.title}{" "}
                          </h1>
                          <p
                            style={{
                              color: "GrayText",
                              background: "#fff",
                              borderRadius: "2rem",
                              marginTop: "-25px",
                              paddingTop: "10px",
                              padding: 20,
                              borderTopLeftRadius: 0,
                            }}
                          >
                            {blog.data.description.slice(0, 50) + "..."}
                          </p>
                          <p
                            style={{
                              background: "#fff",
                              borderRadius: "3rem",
                              width: "max-content",
                              padding: 10,
                              marginTop: "-25px",
                              borderTopLeftRadius: 0,
                              borderBottomRightRadius: "15rem 2rem",
                            }}
                          >
                            Published : {blog.data.created_at.slice(0, 10)}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                }
              })}
            </div>
          </div>
        ) : (
          <div className={style.blogs} ref={ref}>
            <main className={style.main} ref={refce}>
              <h1>BLOGS</h1>
              <p>Filters</p>
              <div
                className={style.allbuttons}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div
                  className={style.buttons}
                  style={{ display: "flex", gap: "10px" }}
                >
                  <button className={style.selected}>All (20)</button>
                </div>
                <div className="searchbutton">
                  <p style={{ fontSize: ".7rem", marginBottom: "5px" }}>
                    Search for a blog
                  </p>
                  <input
                    placeholder="i want to read about ..."
                    className={style.inputa}
                  ></input>
                </div>
              </div>
            </main>
            <div className={style.displayblogs}>
              <div className={style.firstimage}>
                <a href="/blog" style={{ color: "#000" }}>
                  {" "}
                  <div className={style.blogdetails}>
                    <h1
                      style={{
                        background: "#fff",
                        borderRadius: "3rem",
                        width: "max-content",
                        borderBottomLeftRadius: 0,
                        padding: 20,
                        borderBottomRightRadius: "0",
                        borderTopRightRadius: "20rem 3rem",
                        textAlign: "center",
                        fontSize: "2.3rvw",
                      }}
                    >
                      afrah on red carpet
                    </h1>
                    <p
                      style={{
                        color: "GrayText",
                        background: "#fff",
                        borderRadius: "2rem",
                        marginTop: "-25px",
                        paddingTop: "10px",
                        padding: 20,
                        borderTopLeftRadius: 0,
                      }}
                    >
                      {"Lorem ipsum dolor sit amet consectetur adipisicing elit. In adipisci quam vero ratione eos repellendus debitis beatae dolores, nemo, totam eveniet amet! Repellat animi, quia adipisci officiis accusantium aperiam sequi.".slice(
                        0,
                        80
                      ) + "..."}
                    </p>
                    <p
                      style={{
                        background: "#fff",
                        borderRadius: "3rem",
                        width: "max-content",
                        padding: 10,
                        marginTop: "-25px",
                        borderTopLeftRadius: 0,
                        borderBottomRightRadius: "15rem 2rem",
                      }}
                    >
                      23 mai 2022
                    </p>
                  </div>
                </a>
              </div>

              <div className={style.secimage}>
                <div className={style.blogdetails}>
                  <h1
                    style={{
                      background: "#fff",
                      borderRadius: "3rem",
                      width: "max-content",
                      borderBottomLeftRadius: 0,
                      padding: 20,
                      borderBottomRightRadius: "0",
                      borderTopRightRadius: "20rem 3rem",
                    }}
                  >
                    afrah on red carpet
                  </h1>
                  <p
                    style={{
                      color: "GrayText",
                      background: "#fff",
                      borderRadius: "2rem",
                      marginTop: "-25px",
                      paddingTop: "10px",
                      padding: 20,
                      borderTopLeftRadius: 0,
                    }}
                  >
                    {"Lorem ipsum dolor sit amet consectetur adipisicing elit. In adipisci quam vero ratione eos repellendus debitis beatae dolores, nemo, totam eveniet amet! Repellat animi, quia adipisci officiis accusantium aperiam sequi.".slice(
                      0,
                      80
                    ) + "..."}
                  </p>
                  <p
                    style={{
                      background: "#fff",
                      borderRadius: "3rem",
                      width: "max-content",
                      padding: 10,
                      marginTop: "-25px",
                      borderTopLeftRadius: 0,
                      borderBottomRightRadius: "15rem 2rem",
                    }}
                  >
                    23 mai 2022
                  </p>
                </div>
              </div>
            </div>
            <div className={style.listingblogs}>
              <div className={style.oneblog} style={{}}>
                {" "}
                <div className={style.blogdetails}>
                  <h1
                    style={{
                      background: "#fff",
                      borderRadius: "3rem",
                      width: "max-content",
                      borderBottomLeftRadius: 0,
                      padding: 15,
                      borderBottomRightRadius: "5rem",
                      borderTopRightRadius: "20rem 3rem",
                    }}
                  >
                    afrah on red carpet
                  </h1>
                  <p
                    style={{
                      color: "GrayText",
                      background: "#fff",
                      borderRadius: "2rem",
                      marginTop: "-25px",
                      paddingTop: "10px",
                      padding: 20,
                      borderTopLeftRadius: 0,
                    }}
                  >
                    e eos repellendus debitis beatae dolores, nemo, totam
                    eveniet amet! Repellat animi, quia adipisci officiis
                    accusantium aperiam sequi.
                  </p>
                  <p
                    style={{
                      background: "#fff",
                      borderRadius: "3rem",
                      width: "max-content",
                      padding: 10,
                      marginTop: "-25px",
                      borderTopLeftRadius: 0,
                      borderBottomRightRadius: "15rem 2rem",
                    }}
                  >
                    23 mai 2022
                  </p>
                </div>
              </div>
              <div className={style.oneblog} style={{ background: "#000" }}>
                {" "}
                <div className={style.blogdetails}>
                  <h1
                    style={{
                      background: "#fff",
                      borderRadius: "3rem",
                      width: "max-content",
                      borderBottomLeftRadius: 0,
                      padding: 15,
                      borderBottomRightRadius: "5rem",
                      borderTopRightRadius: "20rem 3rem",
                    }}
                  >
                    afrah on red carpet
                  </h1>
                  <p
                    style={{
                      color: "GrayText",
                      background: "#fff",
                      borderRadius: "2rem",
                      marginTop: "-25px",
                      paddingTop: "10px",
                      padding: 20,
                      borderTopLeftRadius: 0,
                    }}
                  >
                    mo, totam eveniet amet! Repellat animi, quia adipisci
                    officiis accusantium aperiam sequi.
                  </p>
                  <p
                    style={{
                      background: "#fff",
                      borderRadius: "3rem",
                      width: "max-content",
                      padding: 10,
                      marginTop: "-25px",
                      borderTopLeftRadius: 0,
                      borderBottomRightRadius: "15rem 2rem",
                    }}
                  >
                    23 mai 2022
                  </p>
                </div>
              </div>
              <div className={style.oneblog} style={{ background: "#dfb7e7" }}>
                {" "}
                <div className={style.blogdetails}>
                  <h1
                    style={{
                      background: "#fff",
                      borderRadius: "3rem",
                      width: "max-content",
                      borderBottomLeftRadius: 0,
                      padding: 15,
                      borderBottomRightRadius: "5rem",
                      borderTopRightRadius: "20rem 3rem",
                    }}
                  >
                    afrah on red
                  </h1>
                  <p
                    style={{
                      color: "GrayText",
                      background: "#fff",
                      borderRadius: "2rem",
                      marginTop: "-25px",
                      paddingTop: "10px",
                      padding: 20,
                      borderTopLeftRadius: 0,
                    }}
                  >
                    mi, quia adipisci officiis accusantium aperiam sequi.
                  </p>
                  <p
                    style={{
                      background: "#fff",
                      borderRadius: "3rem",
                      width: "max-content",
                      padding: 10,
                      marginTop: "-25px",
                      borderTopLeftRadius: 0,
                      borderBottomRightRadius: "15rem 2rem",
                    }}
                  >
                    23 mai 2022
                  </p>
                </div>
              </div>{" "}
              <div className={style.oneblog} style={{}}>
                {" "}
                <div className={style.blogdetails}>
                  <h1
                    style={{
                      background: "#fff",
                      borderRadius: "3rem",
                      width: "max-content",
                      borderBottomLeftRadius: 0,
                      padding: 15,
                      borderBottomRightRadius: "5rem",
                      borderTopRightRadius: "20rem 3rem",
                    }}
                  >
                    afrah on red carpet
                  </h1>
                  <p
                    style={{
                      color: "GrayText",
                      background: "#fff",
                      borderRadius: "2rem",
                      marginTop: "-25px",
                      paddingTop: "10px",
                      padding: 20,
                      borderTopLeftRadius: 0,
                    }}
                  >
                    e eos repellendus debitis beatae dolores, nemo, totam
                    eveniet amet! Repellat animi, quia adipisci officiis
                    accusantium aperiam sequi.
                  </p>
                  <p
                    style={{
                      background: "#fff",
                      borderRadius: "3rem",
                      width: "max-content",
                      padding: 10,
                      marginTop: "-25px",
                      borderTopLeftRadius: 0,
                      borderBottomRightRadius: "15rem 2rem",
                    }}
                  >
                    23 mai 2022
                  </p>
                </div>
              </div>
              <div className={style.oneblog} style={{ background: "#000" }}>
                {" "}
                <div className={style.blogdetails}>
                  <h1
                    style={{
                      background: "#fff",
                      borderRadius: "3rem",
                      width: "max-content",
                      borderBottomLeftRadius: 0,
                      padding: 15,
                      borderBottomRightRadius: "5rem",
                      borderTopRightRadius: "20rem 3rem",
                    }}
                  >
                    afrah on red carpet
                  </h1>
                  <p
                    style={{
                      color: "GrayText",
                      background: "#fff",
                      borderRadius: "2rem",
                      marginTop: "-25px",
                      paddingTop: "10px",
                      padding: 20,
                      borderTopLeftRadius: 0,
                    }}
                  >
                    mo, totam eveniet amet! Repellat animi, quia adipisci
                    officiis accusantium aperiam sequi.
                  </p>
                  <p
                    style={{
                      background: "#fff",
                      borderRadius: "3rem",
                      width: "max-content",
                      padding: 10,
                      marginTop: "-25px",
                      borderTopLeftRadius: 0,
                      borderBottomRightRadius: "15rem 2rem",
                    }}
                  >
                    23 mai 2022
                  </p>
                </div>
              </div>
              <div className={style.oneblog} style={{ background: "#dfb7e7" }}>
                {" "}
                <div className={style.blogdetails}>
                  <h1
                    style={{
                      background: "#fff",
                      borderRadius: "3rem",
                      width: "max-content",
                      borderBottomLeftRadius: 0,
                      padding: 15,
                      borderBottomRightRadius: "5rem",
                      borderTopRightRadius: "20rem 3rem",
                    }}
                  >
                    afrah on red
                  </h1>
                  <p
                    style={{
                      color: "GrayText",
                      background: "#fff",
                      borderRadius: "2rem",
                      marginTop: "-25px",
                      paddingTop: "10px",
                      padding: 20,
                      borderTopLeftRadius: 0,
                    }}
                  >
                    mi, quia adipisci officiis accusantium aperiam sequi.
                  </p>
                  <p
                    style={{
                      background: "#fff",
                      borderRadius: "3rem",
                      width: "max-content",
                      padding: 10,
                      marginTop: "-25px",
                      borderTopLeftRadius: 0,
                      borderBottomRightRadius: "15rem 2rem",
                    }}
                  >
                    23 mai 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
};

export default blogs;
