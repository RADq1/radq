import { MyProjectsContainer, ProjectContainer, ProjectBox, Image, InProgress, ButtonCircleA, TitleOfProject, ButtonCircle, ArrowIcon, Description, Project } from "./Mobile.styles"
import grades from "../../../../../img/MainLogoINZ.png";
import homewise from "../../../../../img/homewise.png";

export const Mobile = () => {
    return (
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
              <TitleOfProject>Chat App</TitleOfProject>
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
    )
  }