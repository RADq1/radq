import React, { useEffect, useState, useContext } from 'react'
import { AboutMeWrapper, Name, MainTextBox, AboutMeBox, SpecjalizationTextBox, MainContainer, PhotoBox, RightSideContainer, LeftSideContainer, Line, AboutMeText, ImageArrow, ImageArrowText, ImageArrowBox, PhotoContainer, BackgroundImage, TriangleBackground, TextContainer, HiText, TextBox, Surname, Specjalization, SpecjalizationEnding, SpecjalizationBox, NameBox } from './Main.styles'
import img from  "../../../../img/CVimage.png"
import arrowRight from "../../../../img/arrowRight.png"
import { ModalContext } from '../../../../context/ModalProvider'

export const Main = () => {

  const [isChanged, setIsChanged] = useState(false);
  const { isModal, setIsModal } = useContext(ModalContext);
  const [counter, setCounter] = useState(0);

  const text1 = "Frontend Developer";
  const text2 = "Alumnus of Politechnika Bydgoska"

  useEffect(() => {
    if(counter === 10 || counter > 10) {
      console.log("end");
      return;
    }
    const timer = setTimeout(() => {
      setIsChanged(!isChanged);
      setCounter(counter + 1);
    }, 4000);
    
    return () => {
      clearTimeout(timer);
    };
  }, [isChanged])

  const handleOpenModal = () => {
    setIsModal(!isModal);
    console.log("ee")
  }

  return (
    <AboutMeWrapper className="section">
      <TriangleBackground/>
      <TextContainer>
        <HiText>Hi, I am</HiText>
        <NameBox>
          <Name>Radosław</Name>
          <Surname>Gackowski</Surname>
        </NameBox>
        <SpecjalizationBox>
          <Specjalization>Front-en</Specjalization>
          <SpecjalizationEnding>d Developer</SpecjalizationEnding>
        </SpecjalizationBox>
      </TextContainer>
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
