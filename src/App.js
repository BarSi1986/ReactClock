import React, { useState, useEffect } from "react";
import './styles.css'
import styled from "styled-components";
import clock from './images/clockFace.png'
import marble from './images/marble-bg.jpg'

const Wrapper = styled.div`
height: 100vh;
overflow: hidden;
a{
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    text-decoration: none;
    color: #000;
    opacity: .4;
}
`

const Clock = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: auto;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 5px 8px -1px grey;
`;

const MiddleDot = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  background: #fff;
  border: 3px solid #000;
  border-radius: 50%;
`;

const ClockFace = styled.img`
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-45%);
`

const App = () => {

  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);

  useEffect(() => {
    setInterval(() => {
      setSeconds(new Date().getSeconds());
      setMinutes(new Date().getMinutes());
      setHours(new Date().getHours());
    }, 1000);
  });

  const secondRotation = 360 * (seconds / 60);
  const minutesRotation = 360 * (minutes / 60);
  const hoursRotation = 720 * (hours / 24);

  const SecondsArrow = styled.div`
          position: absolute;
          top: 2%;
          left: calc(50% - 4px);
          transform-origin: 50% 80%;
          transform: translate(50%, 0%) rotate(${secondRotation}deg);
          width: 4px;
          height: 60%;
          border-radius: 50% 50% 0 0;
          background: red;
          box-shadow: 4px -2px 5px -1px black;
        `;

  const MinutesArrow = styled.div`
          position: absolute;
          top: 5%;
          left: calc(50% - 8px);
          transform-origin: bottom;
          transform: translate(50%, 0) rotate(${minutesRotation}deg);
          width: 8px;
          height: 45%;
          border-radius: 50px 50px 0 0;
          background: #000;
          box-shadow: 5px 2px 5px -2px black;
        `;

  const HoursArrow = styled.div`
          position: absolute;
          top: 22%;
          left: calc(50% - 20px);
          transform-origin: bottom;
          transform: translate(50%, 0) rotate(${hoursRotation}deg);
          width: 20px;
          height: 28%;
          border-radius: 50px 50px 0 0;
          background: #000;
          box-shadow: 8px -2px 5px -5px grey;
        `;

  const Header1 = styled.h1`
        padding-top: 70px;
        font-family: 'Great Vibes', cursive;
        font-weight: 100;
        font-size: 4em;
    `
  const Header2 = styled.h2`
    font-family: 'Great Vibes', cursive;
    font-weight: 100;
    font-size: 2.4em;
    transform: translate(70px, -18px);
`

  return (
    <Wrapper>
      <Header1>React Clock</Header1>
      <Header2>Vintage Style</Header2>
      <Clock>
        <ClockFace src={clock} />
        <HoursArrow />
        <MinutesArrow />
        <SecondsArrow />
        <MiddleDot />
      </Clock>
      <a href="https://www.freepik.com/free-photos-vectors/vintage">Vintage clock vector background created by freepik - www.freepik.com</a>
    </Wrapper>
  );
}

export default App

