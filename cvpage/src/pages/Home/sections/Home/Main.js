import React, { useEffect, useState, useContext } from 'react'

import { AboutMeWrapper, BackgroundContainer, Name, MainTextBox, AboutMeBox, SpecjalizationTextBox, MainContainer, PhotoBox, RightSideContainer, LeftSideContainer, Line, AboutMeText, ImageArrow, ImageArrowText, ImageArrowBox, PhotoContainer, BackgroundImage, TriangleBackground, TextContainer, HiText, TextBox, Surname, Specjalization, SpecjalizationEnding, SpecjalizationBox, NameBox, Photo } from './Main.styles'
import themeImg from "../../../../img/Theme.png";

export const Main = () => {

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = event => {
    const { clientX, clientY } = event;
    setCursorPosition({ x: clientX, y: clientY });
  };

  return (
    <AboutMeWrapper className="section" onMouseMove={handleMouseMove}>
      <BackgroundContainer src={themeImg}/>
      {/* <TriangleBackground/> */}
      {/* <Photo src={man}/> */}
      {/* <TextContainer>
        <HiText>Hi, I am</HiText>
        <NameBox>
          <Name>Radosław</Name>
          <Surname>Gackowski</Surname>
        </NameBox>
        <SpecjalizationBox>
          <Specjalization>Front-en</Specjalization>
          <SpecjalizationEnding>d Developer</SpecjalizationEnding>
        </SpecjalizationBox>
      </TextContainer> */}
        {/* <MainContainer>
            <PhotoContainer>
              <PhotoBox src={img} onClick={handleOpenModal}/>
            </PhotoContainer>
            <MainTextBox>Radosław Gackowski</MainTextBox>
            {isChanged ?
            <SpecjalizationTextBox>{text1}</SpecjalizationTextBox> :
            <SpecjalizationTextBox isLonger={true}>{text2}</SpecjalizationTextBox>}
            <ImageArrowBox>
              <ImageArrow src={arrowRight}/>
              <ImageArrowText>Learn about me!</ImageArrowText>
            </ImageArrowBox>
        </MainContainer> */}
    </AboutMeWrapper>
  )
}
