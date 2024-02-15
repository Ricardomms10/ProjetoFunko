'use client'

import styles from "../Styles/page.module.css";
import Principal from "@/components/Principal";
import Footer from "@/components/Footer";
import CarroselBtn from "@/components/CarroselBtn/CarroselBtn";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <CarroselBtn />
      <Principal />
      <Footer />
    </>
  );
}
