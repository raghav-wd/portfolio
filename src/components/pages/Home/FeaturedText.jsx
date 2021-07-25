/* eslint-disable react/no-unescaped-entities */
import * as S from "./styles";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const FeaturedText = () => {
  //initialize useRef
  let featuredText = useRef(null);

  //start animation only when dom components are mounted.
  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0 });
    animation(tl, featuredText);
  }, []);

  //Component to be animated
  return (
    <S.FeaturedText ref={(el) => (featuredText = el)} className="tl">
      <div>Hi! I'm Raghav</div>
      <div>Nice to meet ya</div>
      <S.LastText>Our Skills Connect</S.LastText>
    </S.FeaturedText>
  );
};

//Animation
const animation = (tl, el) => {
  tl.from(el.childNodes[0], {
    opacity: 0,
    duration: 1,
    x: 100,
    ease: "elastic",
    delay: 2,
  });
  tl.from(el.childNodes[1], {
    opacity: 0,
    duration: 1,
    y: -10,
    ease: "elastic",
  });
  tl.to(el.childNodes[1], {
    opacity: 0,
    duration: 0.2,
    y: -10,
    delay: 1,
  });
  tl.to(el.childNodes[0], {
    opacity: 0,
    duration: 0.2,
    x: -100,
  });
  tl.from(el.childNodes[2], {
    opacity: 0,
    duration: 0.3,
    x: -100,
    delay: 2,
  });
};

export default FeaturedText;
