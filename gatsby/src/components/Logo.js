import React from 'react';
import styled from 'styled-components';
import stripes from '../assets/images/stripes.svg';

const LogoStyles = styled.div`
  /* This value controls the entire size of the logo*/
  font-family: AtlasRegular;
  font-size: 6px;
  font-size: clamp(1px, 0.65vw, 8px);
  width: 55em;
  height: 30em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  margin: 0;
  --borderSize: 1em;
  background: white url(${stripes});
  background-size: 150em;
  border: var(--borderSize) solid white;
  display: flex;
  .inner {
    margin: var(--borderSize);
    flex: 1;
    background: white;
    display: grid;
    grid-template-rows: 20% 1fr 1fr;
    align-content: center;
  }
  .est {
    font-family: GatsbyflfBold;
    color: var(--black);
    font-size: 2.8em;
    align-self: center;
  }
  h1 {
    display: grid;
    color: var(--gold);
    grid-template-rows: 8fr 2fr;
    align-items: center;
    margin: 0;
    grid-row: 2 / span 2;
    ${'' /* grid-gap: 2em; */}
    transform: translateY(-0.7em);
  }

  .pizza {
    font-size: 3.8em;
    color: #555555;
    font-family: GatsbyflfBold;
    letter-spacing: 0.2em;
    transform: translateY(-0.15em);
  }
  .gatsbys {
    transform: scale(1);
    color: var(--gold);
    display: block;
    text-shadow: 0.18em 0.18em 0 rgba(0, 0, 0, 0.05);
    perspective: 140px;
  }
  .letter {
    font-size: 3.5em;
    color: var(--black);
    --scale: 1;
    --rotate: -10deg;
    --translateX: 0;
    --translateY: 0;
    --rotateX: 0deg;
    transform: scale(var(--scale)) rotate(var(--rotate))
      translateX(var(--translateX)) translateY(var(--translateY))
      rotateX(var(--rotateX));
    display: inline-block;
    line-height: 1;
    transition: transform 0.3s;
    &.G {
      --translateX: -0.05;
    }
    &.a {
      --rotate: 2deg;
      --scale: 0.9;
      --translateX: 0.05em;
      --translateY: -0.05em;
    }
    &.t {
      --scale: 1;
      --translateY: -0.1em;
      --translateX: 0.1em;
    }
    &.s {
      --rotate: 3deg;
      --scale: 0.8;
      --translateX: 0.1em;
      --translateY: 0.23em;
    }
    &.b {
      --rotate: -12deg;
      --scale: 1;
      --translateX: 0.06em;
    }
    &.y {
      --rotate: 3deg;
      --scale: 0.8;
      --translateX: 0.1em;
      --translateY: 0.23em;
    }
    &.apos {
      --translateX: 0.1em;
    }
    &.s {
      --rotate: 12deg;
      --scale: 0.8;
      --translateY: -0.14em;
    }
  }
`;

export default function Logo() {
  return (
    <LogoStyles className="logo">
      <div className="inner">
        <span className="est">EST 1925</span>
        <h1>
          <span className="gatsbys">
            <span className="letter g">G</span>
            <span className="letter a">a</span>
            <span className="letter t">t</span>
            <span className="letter s">s</span>
            <span className="letter b">b</span>
            <span className="letter y">y</span>
            <span className="letter apos">'</span>
            <span className="letter s">s</span>
          </span>
          <span className="pizza">Pizza</span>
        </h1>
      </div>
    </LogoStyles>
  );
}
