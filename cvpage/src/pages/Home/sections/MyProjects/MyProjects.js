import React, {useState} from 'react'

import { MyProjectsWrapper,ProjectBox, TitleBox, ProjectTitle, ProjectContainer, ProjectDescribe, Prefix, Sufix, DescribeBox, Circle } from './MyProjects.styles'
import { Title } from '../SkillsAndExperience/Skills/Skills.styles';
// import { Mobile } from './Mobile/Mobile';
// import { Computer } from './Computer/Computer';
import PhoneComponent from './Phone/PhoneComponent';
import { Computer } from './Computer/Computer';
import ToggleButton from './ToggleButton/ToggleButton';

const homewise = "https://homewise-7bbe9.web.app/";
const portfolio = "https://radoslaw-gackowski-webdev.web.app/";

const homewiseText2 = " ";
const homewiseText3 = "Notably, the Calendar section showcases a custom-built calendar component"

const portfolioText = "The application is for student diary management, encompassing several noteworthy functionalities."
const portfolioText2 = "One such functionality enables students to share their grade records with chosen companies. Students also have the opportunity to check their thesis defense dates using Google Calendar. "
const portfolioText3 = "Additionally, the application incorporates a grade import feature, facilitating the transfer of academic achievements from a designated university via Microsoft Excel."
const portfolioText4 = "The application encompasses different user roles, including ADMIN, EMPLOYEE, and STUDENT, each with their respective permissions and access levels. Furthermore, password encryption techniques are implemented and JSON Web Tokens were used to enhance the security and privacy of user credentials."

export const MyProjects = () => {

  const [isMobile, setIsMobile] = useState(true);

  return (
    <MyProjectsWrapper className="section">
      <Title isWhite={true}>PROJECTS</Title>
      <ToggleButton isMobile={isMobile} setIsMobile={setIsMobile}/>
      {isMobile ?
      <>
        <ProjectContainer isFirst={true}>
          <PhoneComponent link={homewise}/>
          <ProjectBox>
            <TitleBox>
              <Prefix>The</Prefix>
              <ProjectTitle>HomeWise</ProjectTitle>
              <Sufix>project</Sufix>
            </TitleBox>
            <ProjectDescribe>The application features <ProjectDescribe isOrange={true}>Firebase</ProjectDescribe> authentication, granting users access upon login</ProjectDescribe>
            <ProjectDescribe>The Overview section includes weather information retrieved from the <ProjectDescribe isOrange={true}>WeatherAPI</ProjectDescribe>. Additionally, the Members section displays a table populated with user data retrieved from <ProjectDescribe isOrange={true}>Mockapi</ProjectDescribe>.</ProjectDescribe>
            <ProjectDescribe>{homewiseText3}</ProjectDescribe>
          </ProjectBox>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectBox>
            <TitleBox>
              <Prefix>The</Prefix>
              <ProjectTitle>Engineering</ProjectTitle>
              <Sufix>project</Sufix>
            </TitleBox>
            <ProjectDescribe>{portfolioText}</ProjectDescribe>
            <ProjectDescribe>{portfolioText2}</ProjectDescribe>
            <ProjectDescribe>{portfolioText3}</ProjectDescribe>
            <ProjectDescribe>{portfolioText4}</ProjectDescribe>
          </ProjectBox>
          <PhoneComponent link={portfolio}/>
        </ProjectContainer>
      </> :
      <>
        <ProjectContainer isFirst={true}>
          <Computer link={homewise}/>
          <ProjectBox>
            <TitleBox>
              <Prefix>The</Prefix>
              <ProjectTitle>HomeWise</ProjectTitle>
              <Sufix>project</Sufix>
            </TitleBox>
            <ProjectDescribe>The application features <ProjectDescribe isOrange={true}>Firebase</ProjectDescribe> authentication, granting users access upon login</ProjectDescribe>
            <ProjectDescribe>The Overview section includes weather information retrieved from the <ProjectDescribe isOrange={true}>WeatherAPI</ProjectDescribe>. Additionally, the Members section displays a table populated with user data retrieved from <ProjectDescribe isOrange={true}>Mockapi</ProjectDescribe>.</ProjectDescribe>
            <ProjectDescribe>{homewiseText3}</ProjectDescribe>
          </ProjectBox>
        </ProjectContainer>
        <ProjectContainer>
        <ProjectBox>
          <TitleBox>
            <Prefix>The</Prefix>
            <ProjectTitle>Engineering</ProjectTitle>
            <Sufix>project</Sufix>
          </TitleBox>
            <ProjectDescribe>{portfolioText}</ProjectDescribe>
            <ProjectDescribe>{portfolioText2}</ProjectDescribe>
            <ProjectDescribe>{portfolioText3}</ProjectDescribe>
            <ProjectDescribe>{portfolioText4}</ProjectDescribe>
          </ProjectBox>
          <Computer link={portfolio}/>
        </ProjectContainer>
      </> }
    </MyProjectsWrapper>
  )
}
