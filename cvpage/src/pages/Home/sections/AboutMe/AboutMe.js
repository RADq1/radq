import React from 'react'
import { AboutMeWrapper, MainTextBox, AboutMeBox, SpecjalizationTextBox, MainContainer, PhotoBox, RightSideContainer, LeftSideContainer, Line, AboutMeText, ImageArrow, ImageArrowText, ImageArrowBox } from './AboutMe.styles'
import img from  "../../../../img/CVimage.png"
import arrowRight from "../../../../img/arrowRight.png"

export const AboutMe = () => {

  const text1 = "Frontend Developer";
  const text2 = "Alumnus of Politechnika Bydgoska"

  const describe = "I am a graduate of Applied Computer Science from Politechnika Bydgoska (Bydgoszcz University of Technology), with a strong passion for computers."

  return (
    <AboutMeWrapper>
        <MainContainer>
            <PhotoBox src={img}/>
            <MainTextBox>Radosław Gackowski</MainTextBox>
            <SpecjalizationTextBox>{text1}</SpecjalizationTextBox>
            <ImageArrowBox>
              <ImageArrow src={arrowRight}/>
              <ImageArrowText>Click me!</ImageArrowText>
            </ImageArrowBox>
            {/* <AboutMeBox>
              <MainTextBox isAboutMe={true}>About me</MainTextBox>
              <AboutMeText>{describe}</AboutMeText>
            </AboutMeBox> */}
        </MainContainer>
    </AboutMeWrapper>
  )
}
