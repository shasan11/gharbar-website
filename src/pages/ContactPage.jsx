import React from "react";
import Preloader from "../helper/Preloader";
import ColorInit from "../helper/ColorInit";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import BottomFooter from "../components/BottomFooter";
import ShippingOne from "../components/ShippingOne";
import Contact from "../components/Contact";
import ScrollToTop from "react-scroll-to-top";
const ContactPage = () => {
  return (
    <>
      {/* ColorInit */}
      <ColorInit color={true} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#FA6400" />

      {/* Preloader */}
      <Preloader />

      {/* HeaderTwo */}
      <HeaderOne category={true} />

      {/* Breadcrumb */}
      <Breadcrumb title={"Contact"} />

      {/* Contact */}
      <Contact />

      {/* ShippingOne */}
      <ShippingOne />

      {/* FooterTwo */}
      <FooterOne />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default ContactPage;
