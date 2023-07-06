import React from 'react'

import { SkillsAndExperienceWrapper} from './SkillsAndExperience.styles'
import { Skills } from './Skills/Skills';
import { RightSideComp } from '../AboutMe/RightSide/RightSideComp';

export const SkillsAndExperience = () => {
  return (
    <SkillsAndExperienceWrapper className="section">
      <Skills/>
      {/* <RightSideComp/> */}
    </SkillsAndExperienceWrapper>
  )
}
