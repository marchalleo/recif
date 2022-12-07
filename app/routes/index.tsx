import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from "react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Section1 from "~/components/Section1";
import Section2 from "~/components/Section2";
import Section3 from "~/components/Section3";
import Section4 from "~/components/Section4";
import Section5 from "~/components/Section5";
import { storeEmail } from "~/utils/repository.server";

export const action: ActionFunction = async ({ request }) => {
  await new Promise((res) => setTimeout(res, 1000));
  const formData = await request.formData();
  const email = formData.get("email");

  if(!email) return json({
    error: true,
    message: "L'email est requis",
  })

  await storeEmail(email.toString());
  return json({
    subscription: true
  })
};

export default function Index() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, [])

  if (typeof window !== "undefined") {
  var body = document.getElementsByTagName('body')[0];
  body.style.backgroundColor = '#1D4F49';

  window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (scroll < 550) {
        body.style.backgroundColor = '#1D4F49';
    } 
    else if (scroll >= 550 && scroll < 1500) {
        body.style.backgroundColor = '#EDEDED';
    } 
    else if (scroll >= 2220 && scroll < 3630) {
      body.style.backgroundColor = '#E5CCB5';
    }
    else if (scroll >= 3630 && scroll < 4500) {
      body.style.backgroundColor = '#EDEDED';
    } 
    else {
        body.style.backgroundColor = 'white';
    }
  }
}
  return (
    <div>
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Footer/>
    </div>
  );
}
