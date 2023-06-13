import React from 'react'
import { HomeWrapper } from './Home.styles'
import { AboutMe } from './sections/AboutMe/AboutMe'
import { Contact } from './sections/Contact/Contact'
import { TopBar } from './sections/TopBar/TopBar'
import { SkillsAndExperienceWrapper } from './sections/SkillsAndExperience/SkillsAndExperience.styles'
import { MyProjects } from './sections/MyProjects/MyProjects'

export const Home = () => {
  return (
    <HomeWrapper>
      <TopBar/>
      <AboutMe/>
      <SkillsAndExperienceWrapper/>
      <MyProjects/>
      <Contact/>
    </HomeWrapper>
  )
}
