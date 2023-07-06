import React from 'react'
import { useState } from 'react'

import { AboutMeWrapper, Title, DescriptionAboutMe, ReadMoreBox, ReadMore, ArrowIcon } from './AboutMe.styles'
import { RightSideComp } from './RightSide/RightSideComp'
import { ContentContainer, Description, Line, ContentBox, Date, Specjalization, SpecjalizationBox } from './RightSide/RightSideComp.styles'
import { TitleBox } from '../SkillsAndExperience/Skills/Skills.styles'
export const AboutMe = () => {

  const text = "I am Radosław Gackowski, my first hobby has always been computer science and I started my journey with computers when i was 6 years old. First of all i learned how to play games, next when i grew up I started to create some servers in games like Counter-Strike (casual and with modes like Zombie Mod, CoD MoD, BaseBuilder) and Minecraft (Survival, Hunger Games), so i have a little experience with modyfing scripts for these games in C# and Java programming languages. I graduated from Politechnika Bydgoska with Bachelor of Engineering Degree, i studied applied computer science. I've been learning JavaScript, React for at least 1 year. I had finished a graduation project with these technologies and now I'm still learning new libraries for React. "
  // const text2 = "I am a graduate of Applied Computer Science from Politechnika Bydgoska (Bydgoszcz University of Technology), with a strong passion for computers. During my engineering thesis, I developed an innovative electronic student index application using React and Node.js. This project allowed me to showcase my skills in front-end development andserver-side programming"
  const [isSectionOpen, setIsSectionOpen] = useState(false);

  const handleToggleSection = () => {
    setIsSectionOpen(!isSectionOpen);
  }

  return (
    <AboutMeWrapper className="section" isSectionOpen={isSectionOpen}>
      <Title>ABOUT ME</Title>
      {/* <RightSideComp/> */}
      <DescriptionAboutMe>{text}</DescriptionAboutMe>
      {/* <DescriptionAboutMe>{text2}</DescriptionAboutMe> */}
        <Title>EXPERIENCE</Title>
        <ContentContainer>
          <Line/>
          <ContentBox>
            <Date>present</Date>
            <SpecjalizationBox>
              <Specjalization>Searching for a job</Specjalization>
              <Description>I am eager to pursue a career as a Frontend Developer.</Description>
            </SpecjalizationBox>
          </ContentBox>
          <Line/>
          <ContentBox>
            <Date>2022 - 2023</Date>
            <SpecjalizationBox>
              <Specjalization>Storekeeper</Specjalization>
              <Description>During my studies, I gained experience working as a Storekeeper at keeeper sp. z o.o.</Description>
            </SpecjalizationBox>
          </ContentBox>
          <Line/>
          <ContentBox>
            <Date>2021</Date>
            <SpecjalizationBox>
              <Specjalization>Manual worker</Specjalization>
              <Description>I worked as a student manual laborer at Go Packo Sp. zoo during the summer break.</Description>
            </SpecjalizationBox>
          </ContentBox>
          <Line/>
          <ContentBox>
            <Date>2018 - 2020</Date>
            <SpecjalizationBox>
              <Specjalization>Production worker</Specjalization>
              <Description>During my academic years, I gained practical experience as a Production Assistant at Kreska printing company.</Description>
            </SpecjalizationBox>
          </ContentBox>
          <Line/>
          <ContentBox>
            <Date>2017</Date>
            <SpecjalizationBox>
              <Specjalization>Flyer Distributor</Specjalization>
              <Description>My professional journey began with distributing flyers for SKK Bydgoszcz company.</Description>
            </SpecjalizationBox>
          </ContentBox>
        </ContentContainer>
      <ReadMoreBox onClick={handleToggleSection}>
        {isSectionOpen ?
        <ReadMore>HIDE SECTION</ReadMore> :
        <ReadMore>READ MORE</ReadMore>
        }
        <ArrowIcon isSectionOpen={isSectionOpen}/>
      </ReadMoreBox>
    </AboutMeWrapper>
  )
}
