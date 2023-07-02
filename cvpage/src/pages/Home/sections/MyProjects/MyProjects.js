import React from 'react'

import { MyProjectsWrapper, Information } from './MyProjects.styles'
import { TitleBox, Title } from '../SkillsAndExperience/Skills/Skills.styles';
import { Mobile } from './Mobile/Mobile';
import { Computer } from './Computer/Computer';

export const MyProjects = () => {
  return (
    <MyProjectsWrapper className="section">
      <TitleBox isWhite={true}>
        <Title isWhite={true}>PROJECTS</Title>
      </TitleBox>
      <Mobile/>
      <Computer/>
      <Information>This portfolio project has also been developed utilizing the React</Information>
    </MyProjectsWrapper>
  )
}
