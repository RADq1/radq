import { useContext } from 'react'

import { BodyStyles, HomeWrapper } from './Home.styles'
import { AboutMe } from './sections/AboutMe/AboutMe'
import { Contact } from './sections/Contact/Contact'
import { TopBar } from './sections/TopBar/TopBar'
import { MyProjects } from './sections/MyProjects/MyProjects'
import { SkillsAndExperience } from './sections/SkillsAndExperience/SkillsAndExperience'
import { ModalContext } from '../../context/ModalProvider'
import { AboutMeModal } from '../../modals/AboutMeModal/AboutMeModal'
import { Main } from './sections/Home/Main'
import { Footer } from './sections/Footer/Footer'

export const Home = () => {
  const { isModal } = useContext(ModalContext);

  return (
    <BodyStyles>
      {isModal && <AboutMeModal/>}
      <HomeWrapper>
        <TopBar/>
        <Main/>
        <AboutMe/>
        <MyProjects/>
        <SkillsAndExperience/>
        <Contact/>
        <Footer/>
      </HomeWrapper>
    </BodyStyles>
  )
}
