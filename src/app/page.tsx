"use client";

import { useMainStore } from "@/store/useMainStore";
import "aos/dist/aos.css";
import AOS from "aos";
import About from "@/ui/About";
import Footer from "@/ui/Footer";
import Header from "@/ui/Header";
import Main from "@/ui/Main";
import { useEffect } from "react";
import { Contacts } from "@/ui/Contacts";
import { Services } from "@/ui/Services";
import Pet_project from "@/ui/Pet_project";

export default function Home() {
  const { isWork } = useMainStore();
  useEffect(() => {
    AOS.init({ duration: 700, once: false, easing: "ease-out-cubic" });
  }, []);

  return (
    <>
      <Header />
      {""}
      {isWork ? (
        <div>
          <h1>Thundra Studios</h1>
          <h2>В РАЗРАБОТКЕ</h2>
          <p>Thundra Studios - Студия создания сайтов. Мы - будущее</p>
          <span>В разработке оффициального сайта...</span>
          <p>
            наши соц. сети: <br />
            ТГК: <a href='https://t.me/thundrastudio'>ТГ</a>
            <br />
            Инстаграмм:{" "}
            <a href=' https://www.instagram.com/thundra_studios?igsh=MWhvOHJla2ZqMGJi'>
              Инста
            </a>
            <br />
            ГитХаб:
            <a
              href='https://github.com/thundrastudios?view_as=member
'
            >
              ГитХаб
            </a>
            <br />
          </p>
        </div>
      ) : (
        <div>
          <Main />

          <Services />

          <About />
          <Pet_project />
          <Contacts />
          <Footer />
        </div>
      )}
    </>
  );
}
