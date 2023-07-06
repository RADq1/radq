import React from 'react'

import { ContactWrapper, ContactDescribe } from './Contact.styles'
import { TitleBox, Title } from '../SkillsAndExperience/Skills/Skills.styles'
import ContactForm from './ContactForm/ContactForm'


const contactDescribe = "If you are interested in collaboration or have any questions regarding my work, I would be glad to get in touch. I am open to new challenges and exciting projects."
export const Contact = () => {

  return (
    <ContactWrapper className="section">
      <Title>CONTACT</Title>
      <ContactDescribe>{contactDescribe}</ContactDescribe>
      <ContactForm/>
    </ContactWrapper>
  )
}
