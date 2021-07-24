import * as React from "react"
import { useRef, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import gsap from "gsap"
import { toRight } from "../components/animate"
import HeroImg from "../images/Hero-Slider-1.jpg"

const Footer = () => {
  return (
    <div className="bigFooter relative min-h-screen">
      <div className="absolute inset-0">
        <StaticImage
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            placeHolder: "none",
            className: "bg-opacity-95",
            //clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
            // You can set a maximum height for the image, if you wish.
            // maxHeight: 600,
          }}
          layout="constrained"
          // You can optionally force an aspect ratio for the generated image
          //aspectRatio={3 / 1}
          // This is a presentational image, so the alt should be an empty string
          alt=""
          // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
          src={"../images/Hotel-Biography-Hall.jpg"}
          formats={["auto", "webp", "avif"]}
        />
      </div>
      <div
        className="footerBody relative w-full text-center flex flex-col min-h-screen text-white"
        style={{
          padding: "4rem 1.25rem 1rem",
          backgroundColor: "rgba(21,21,21,.6)",
        }}
      >
        <a
          id="footer_logo"
          class="logo_group m-auto mb-24 2xl:mb-40 space-y-2"
          href=""
        >
          <StaticImage
            src="../images/Hotel_Biography_Logo-4stars.png"
            className="mb-4"
            alt="Hotel Biography Logo"
          />
          <div class="w-40">
            <svg viewBox="0 0 570 49" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24.89 32.678L9.024.158.002 48.235h7.06L11.923 20.9l12.848 27.334L38.32 20.929l4.364 27.306h7.002L40.635.158zM100.465.158l21.591 48.076h-7.47l-4.747-10.986H90.474l-5.039 10.986h-7.353L100.465.158zm-.118 15.293l-7.03 15.381h13.74l-6.71-15.38zM151.945 0v6.416h18.574l-22.206 41.819h32.93v-6.417h-21.71L181.74 0zm61.5 0v6.416h18.574l-22.206 41.819h32.93v-6.417h-21.71L243.24 0zm78.463.158L313.5 48.234h-7.47l-4.747-10.986h-19.365l-5.04 10.986h-7.352L291.908.158zm-.117 15.293l-7.031 15.381h13.74l-6.71-15.38zM351.152 0c5.976 0 10.293 1.123 12.95 3.37 2.93 2.5 4.394 5.8 4.394 9.901 0 3.204-.918 5.959-2.753 8.262-1.837 2.305-4.259 3.78-7.267 4.424l14.005 22.277h-8.35l-12.92-21.516h-1.23v21.516h-6.827V.002h7.998zm1.26 6.416h-2.431v14.355h2.168c6.464 0 9.697-2.47 9.697-7.412 0-4.628-3.144-6.942-9.434-6.942zm75.814.158H410.09l.013 13.711h17.607v6.416h-17.607v15.117h18.135v6.416h-24.961L403.265.158h24.96zM468.017.158l.013 41.66h13.3v6.416h-20.126L461.19.158zm50.601 0l.013 41.66h13.3v6.416h-20.126L511.792.158zm50.602 0l.013 48.076h-6.826L562.394.158z"
                fill="#fff"
                fill-rule="evenodd"
              ></path>
            </svg>
            <p class="_t1 plantin">CREATIVE RESORT</p>
            <p class="_t2 saol antialiased">* * * * *</p>
          </div>
        </a>
        <div className="space-y-12 lg:space-y-0 mb-16 2xl:mb-24 lg:flex justify-between xl:w-10/12 2xl:w-2/3 mx-auto">
          <div id="footer_address" class="text-center lg:text-left lg:w-1/3">
            <h3 class="antialiased font-serif italic font-light text-3xl mb-10">
              Адрес
            </h3>
            <p class="leading-loose antialiased">
              353993 Россия,<br></br>
              Краснодарский край,<br></br>
              г.Новороссийск,<br></br>
              п.Мысхако, ул.Луговая, 5
            </p>
          </div>
          <div
            id="footer_newsletter" class="lg:w-1/3">
            <h3 class="font-serif italic font-light text-3xl mb-10">
              Подписаться на рассылку новостей
            </h3>
          </div>
          <div
            id="footer_contact"
            class="text-center lg:text-left lg:w-1/3 lg:flex"
          >
            <div class="ml-auto">
              <h3 class="antialiased font-serif italic font-light text-3xl mb-10">
                Контакты
              </h3>
              <p class="leading-loose antialiased">
                <a className="notTarget text-white" href="tel:+78617718858">
                  Тел. +7 (8617) 71 88 58<br></br>
                </a>
                <a className="notTarget text-white" href="tel:+79883157575">
                  Моб. +7 988 315 75 75<br></br>
                </a>
                E-mail:
                <a
                  className="notTarget text-white"
                  href="mailto:hotel-biography@mail.ru"
                >
                  {" "}
                  hotel-biography@mail.ru
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="copyright">
          <p class="antialiased">
            Copyright &copy; {new Date().getFullYear()}
            <span> Отель Биография</span> - Все права защищены
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
