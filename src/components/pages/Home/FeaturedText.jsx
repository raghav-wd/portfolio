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
      Hi! I'm Raghav
    </S.FeaturedText>
  );
};

//Animation
const animation = (tl, el) => {
  tl.from(el, {
    opacity: 0,
    duration: 1,
    x: 100,
    ease: "elastic",
    delay: 2,
  });
};

export default FeaturedText;
