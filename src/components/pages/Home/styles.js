import styled, { css, keyframes } from "styled-components";

export const FeaturedText = styled.div`
  font-size: 28px;
  position: fixed;
  left: 50%;
  top: -70px;
  width: 280px;
  transform: translateX(-120px);
  font-weight: 800;
  /* opacity: 0; */
`;

export const LastText = styled.div`
  /* position: absolute;
  top: 0; */
`;

export const Content = styled.div`
  position: absolute;
  top: 30%;
  left: 10%;
`;

const expand = keyframes`
to{
  opacity: 1;
  transform: translate3d(0, 0.2 em, 0);
  transform: scale(1);
}
`;

export const Name = styled.p`
  font-size: 48px;
  font-weight: bold;
  display: inline-block;
  position: relative;
  padding: 0.2em 0;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: #505050;
    opacity: 0;
    transition: opacity 300ms, transform 600ms;
  }
  &::after {
    opacity: 1;
    transform: scale(0);
    transform-origin: center;
    animation: ${expand} 0.6s forwards;
  }
`;
