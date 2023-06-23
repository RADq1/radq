import React from 'react'

import grades from "../../../../img/MainLogoINZ.png";
import homewise from "../../../../img/homewise.png";
import { ButtonCircle, Image, ProjectBox, MyProjectsContainer, MyProjectsWrapper, Project, ProjectContainer, Title, TitleOfProject, ArrowIcon, Description, InProgress, Information, ButtonCircleA } from './MyProjects.styles'

export const MyProjects = () => {
  return (
    <MyProjectsWrapper className="section">
      <Title>My Projects</Title>
      <MyProjectsContainer>
        <ProjectContainer>
          <ProjectBox>
            <TitleOfProject>Student E-Index</TitleOfProject>
            <ButtonCircle>
              <ArrowIcon/>
            </ButtonCircle>
          </ProjectBox>
          <Description>React (Javascript) + Node.js + MySQL</Description>
          <Project>
            <Image src={grades}/>
          </Project>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectBox>
            <TitleOfProject>HomeWise</TitleOfProject>
            <ButtonCircleA href='https://homewise-7bbe9.web.app/'>
              <ArrowIcon/>
            </ButtonCircleA>
          </ProjectBox>
          <Description>React (Javascript) + Firebase</Description>
          <Project>
            <Image src={homewise}/>
          </Project>
        </ProjectContainer>
        <ProjectContainer>
            <ProjectBox>
              <TitleOfProject>Chat App?</TitleOfProject>
              <ButtonCircle isBlocked={true}>
                <ArrowIcon/>
              </ButtonCircle>
            </ProjectBox>
            <Description>React (TypeScript) + Node.js</Description>
            <Project>
              <InProgress>In progress...</InProgress>
            </Project>
        </ProjectContainer>
      </MyProjectsContainer>
      {/* <MyProjectsContainer isSecond={true}>
        <ProjectContainer isInvisible={true}>
          <Project/>
        </ProjectContainer>
        <ProjectContainer isInvisible={true}>
          <Project/>
        </ProjectContainer>
        <ProjectContainer isInvisible={true}>
          <Project/>
        </ProjectContainer>
      </MyProjectsContainer> */}
      <Information>This portfolio project has also been developed utilizing the React</Information>
    </MyProjectsWrapper>
  )
}
