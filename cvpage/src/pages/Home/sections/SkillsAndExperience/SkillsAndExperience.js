import React from 'react'

import { SkillsAndExperienceWrapper} from './SkillsAndExperience.styles'
import { LeftSideComp } from './LeftSide/LeftSideComp';
import { RightSideComp } from './RightSide/RightSideComp';

export const SkillsAndExperience = () => {
  return (
    <SkillsAndExperienceWrapper className="section">
      <LeftSideComp/>
      <RightSideComp/>
    </SkillsAndExperienceWrapper>
  )
}
