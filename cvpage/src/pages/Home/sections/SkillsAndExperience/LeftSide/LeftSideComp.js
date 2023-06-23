import React from 'react'

import {LeftSide,
    TSIcon,
    SpringBackgroundCircle, SpringIcon, NodeIcon, MySQLIcon, JiraIcon, GitHubIcon, SourceTreeIcon, ExpressIcon, BitbucketIcon,LeftTopContainer, LineIcon, SkillsSpan, ItemsContainer, ItemBox,ReactIcon,StyledComponentsIcon,  LeftBottomContainer, Title, DescribeBox, DescribeContainer, ColumnTitle, DescribeSkills, DescribeText, IconBox, Image,  } from '../SkillsAndExperience.styles'
import js from "../../../../../img/JS.png"

const frontendText = "I have knowledge in utilizing foundational libraries such as Axios, Redux Toolkit, React-Icons, Styled-Components for styling, React Hook Form, hooks such as useState, useContext, useReducer, etc. Additionally, I am familiar with external libraries like useDebounce and useOnOutsideClick, and I would have no trouble adapting to others."
const backendText = "I possess fundamental knowledge in creating HTTP servers using JavaScript and Java, as well as working with MySQL databases. Moreover, I am capable of utilizing tools such as Spring Boot or Node.js and its specialized library Express.js, for this purpose. I also know how to test REST API in Postman/Swagger UI"
const othersText = "I am adept at working agilely (Agile methodology) using the Jira system. I am proficient in version control systems like GitHub and Bitbucket, utilizing both the terminal and SourceTree program for their management."
export const LeftSideComp = () => {
  return (
    <LeftSide>
        <LeftTopContainer>
          <Title>Skills</Title>
          <DescribeContainer>
            <ColumnTitle>My predispositions</ColumnTitle>
            <DescribeBox>
              <LineIcon/>
              <DescribeText>Mainly Frontend Developer</DescribeText>
            </DescribeBox>
            <DescribeBox>
              <LineIcon/>
              <DescribeText>Fullstack Developer</DescribeText>
            </DescribeBox>
            <DescribeBox>
              <LineIcon/>
              <DescribeText>Node.js | Java Developer</DescribeText>
            </DescribeBox>
            <ColumnTitle>Languages</ColumnTitle>
            <DescribeBox>
              <LineIcon/>
              <DescribeText>Polish - native</DescribeText>
            </DescribeBox>
            <DescribeBox>
              <LineIcon/>
              <DescribeText>English - communicative (B2)</DescribeText>
            </DescribeBox>
          </DescribeContainer>
        </LeftTopContainer>
        <LeftBottomContainer>
        <SkillsSpan>My knowledge in Frontend</SkillsSpan>
          <ItemsContainer>
            <ItemBox>
              <IconBox><Image src={js}/></IconBox>
            </ItemBox>
            <ItemBox>
              <IconBox><ReactIcon/></IconBox>
            </ItemBox>
            <ItemBox>
              <IconBox><StyledComponentsIcon/></IconBox>
            </ItemBox>
            <ItemBox>
              <IconBox><TSIcon/></IconBox>
            </ItemBox>
          </ItemsContainer>
          <DescribeBox>
              <LineIcon/>
              <DescribeSkills>{frontendText}</DescribeSkills>
          </DescribeBox>
          <SkillsSpan>My knowledge in Backend</SkillsSpan>
          <ItemsContainer>
            <ItemBox>
              <IconBox><SpringBackgroundCircle/><SpringIcon/></IconBox>
            </ItemBox>
            <ItemBox>
              <IconBox><NodeIcon/></IconBox>
            </ItemBox>
            <ItemBox>
              <IconBox><ExpressIcon/></IconBox>
            </ItemBox>
            <ItemBox>
              <IconBox><MySQLIcon/></IconBox>
            </ItemBox>
          </ItemsContainer>
          <DescribeBox>
              <LineIcon/>
              <DescribeSkills>{backendText}</DescribeSkills>
          </DescribeBox>
          <SkillsSpan>Others</SkillsSpan>
          <ItemsContainer>
            <ItemBox>
              <IconBox><JiraIcon/></IconBox>
            </ItemBox>
            <ItemBox>
              <IconBox><BitbucketIcon/></IconBox>
            </ItemBox>
            <ItemBox>
              <IconBox><GitHubIcon/></IconBox>
            </ItemBox>
            <ItemBox>
              <IconBox><SourceTreeIcon/></IconBox>
            </ItemBox>
          </ItemsContainer>
          <DescribeBox>
              <LineIcon/>
              <DescribeSkills>{othersText}</DescribeSkills>
          </DescribeBox>
        </LeftBottomContainer>
    </LeftSide>
  )
}
