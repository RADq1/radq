import React, {useState} from 'react'

import { MyProjectsWrapper, Information, ProjectContainer, ProjectDescribe, Bgc } from './MyProjects.styles'
import { TitleBox, Title } from '../SkillsAndExperience/Skills/Skills.styles';
// import { Mobile } from './Mobile/Mobile';
// import { Computer } from './Computer/Computer';
import PhoneComponent from './Phone/PhoneComponent';
import { Computer } from './Computer/Computer';
import ToggleButton from './ToggleButton/ToggleButton';

const homewise = "https://homewise-7bbe9.web.app/";
const portfolio = "https://radoslaw-gackowski-webdev.web.app/";

const homewiseText = "The HomeWise application aims to learning of fundamental libraries and modernsolutions. Currently under development, the application features Firebase authentication, granting users access to the Overview section upon login. The Overview section includes weather information retrieved from the WeatherAPI, as well as a Voltage section where data will be fetched from the backend. Additionally, the Members section displays a table populated with user data retrieved from mockapi. Notably, the Calendar section showcases a custom-built calendar component, developed without relying on any auxiliary libraries."
const portfolioText = "Engineering Final Project Submission is an application for student diary management, encompassing several noteworthy functionalities. One such functionality enables students to share their grade records with chosen companies. Additionally, the application incorporates a grade import feature, facilitating the transfer of academic achievements from a designated university via Microsoft Excel. The application encompasses different user roles, including ADMIN, EMPLOYEE, and STUDENT, each with their respective permissions and access levels. Robust authorization mechanisms ensure that only authorized individuals can access and modify sensitive data. Furthermore, password encryption techniques are implemented to enhance the security and privacy of user credentials."

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
          <ProjectDescribe>{homewiseText}</ProjectDescribe>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectDescribe>{portfolioText}</ProjectDescribe>
          <PhoneComponent link={homewise}/>
        </ProjectContainer>
      </> :
      <>
        <ProjectContainer isFirst={true}>
          <Computer link={homewise}/>
          <ProjectDescribe>{homewiseText}</ProjectDescribe>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectDescribe>{portfolioText}</ProjectDescribe>
          <Computer link={homewise}/>
        </ProjectContainer>
      </> }
      
     
      {/* <Information>This portfolio project has also been developed utilizing the React</Information> */}
    </MyProjectsWrapper>
  )
}
