import * as React from "react"
import { Link } from "gatsby"
import { useRef, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import gsap from "gsap"
import { toRight } from "../components/animate"
import HeroImg from "../images/Hero-Slider-1.jpg"
import { Formik, Field, Form } from "formik"
import ContactForm from "./ContactForm"

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
          className="logo_group m-auto sm:mb-0 lg:mb-40 space-y-2"
          href=""
        >
          <StaticImage
            src="../images/Logo_full_white.png"
            placeholder="none"
            className="mb-4 mx-auto w-1/3"
            alt="Hotel Biography Logo"
          />
        </a>
        <div className="space-y-12 lg:space-y-0 mb-16 2xl:mb-24 lg:flex justify-between xl:w-10/12 2xl:w-2/3 mx-auto">
          <div
            id="footer_address"
            className="text-center lg:text-left lg:w-1/3"
          >
            <h3 className="antialiased font-serif italic font-light text-3xl mb-5 lg:mb-10">
              Адрес
            </h3>
            <p className="leading-loose antialiased">
              353993 Россия,<br></br>
              Краснодарский край,<br></br>
              г.Новороссийск,<br></br>
              п.Мысхако, ул.Луговая, 5
            </p>
          </div>
          <ContactForm />
          <div
            id="footer_contact"
            className="text-center lg:text-left lg:w-1/3 lg:flex"
          >
            <div className="ml-auto">
              <h3 className="antialiased font-serif italic font-light text-3xl mb-10">
                Контакты
              </h3>
              <p className="leading-loose antialiased">
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
        <div className="space-y-4 mb-16">
          <div>
            <Link
              className="notTarget uppercase text-xs text-white"
              to="/page-2/"
            >
              Отель<br></br>
            </Link>
          </div>
          <div>
            <Link
              className="notTarget uppercase text-xs text-white"
              to="/page-2/"
            >
              Номера<br></br>
            </Link>
          </div>
          <div>
            <Link
              className="notTarget uppercase text-xs text-white"
              to="/page-2/"
            >
              Ресторан<br></br>
            </Link>
          </div>
          <div>
            <Link
              className="notTarget uppercase text-xs text-white"
              to="/page-2/"
            >
              Услуги<br></br>
            </Link>
          </div>
          
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-3 mb-4 md:mb-8 gap-4 justify-center">
            <Link
              className="notTarget uppercase text-xs text-white text-center lg:text-right"
              to="/page-2/"
            >
              Политика конфиденциальности<br></br>
            </Link>
            <Link
              className="notTarget uppercase text-xs text-white"
              to="/page-2/"
            >
              Политика использования файлов cookie<br></br>
					</Link>
					<Link
              className="notTarget uppercase text-xs text-white text-center lg:text-left"
              to="/page-2/"
            >
              Создание сайта<br></br>
            </Link>
          </div>
        <div className="copyright">
          <p className="antialiased">
            Copyright &copy; {new Date().getFullYear()}
            <span> Отель Биография</span> - Все права защищены
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
