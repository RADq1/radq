import React from 'react'

import { ContactWrapper, ContactDescribe } from './Contact.styles'
import { TitleBox, Title } from '../SkillsAndExperience/Skills/Skills.styles'


const contactDescribe = "Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est."
export const Contact = () => {

  return (
    <ContactWrapper className="section">
      <TitleBox>
            <Title>CONTACT</Title>
      </TitleBox>
      <ContactDescribe>{contactDescribe}</ContactDescribe>
    </ContactWrapper>
  )
}
