import React from 'react'
import { useState } from 'react'

import { AboutMeWrapper, Title, Description, ReadMoreBox, ReadMore, ArrowIcon } from './AboutMe.styles'

export const AboutMe = () => {

  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida orci sit amet lacus pharetra, non laoreet nisl tincidunt. Curabitur sapien lorem, fringilla sed suscipit in, pretium non elit. Integer sollicitudin vitae libero non mollis. Donec elit turpis, convallis sed odio laoreet, porta lobortis orci. Maecenas porta lacus metus. Ut non imperdiet tellus, eget eleifend enim. Etiam sodales quam a nisl pharetra, vel convallis tellus dictum. Nulla in est congue, semper turpis viverra, rhoncus quam. Donec bibendum et metus at pretium.Nam eu fermentum diam. Fusce vitae luctus libero. Donec tempor viverra turpis, ac tincidunt odio accumsan sit amet. Pellentesque tincidunt mattis elit, nec blandit arcu aliquet id. Curabitur vitae laoreet lectus. Vivamus ullamcorper, nibh nec suscipit volutpat, nisl risus aliquet odio, posuere hendrerit diam ipsum nec est. Ut nec velit vitae dolor ornare suscipit at eget mauris. Curabitur et euismod velit. Sed ac porttitor libero. Integer congue tincidunt enim, at molestie arcu interdum facilisis. Curabitur ultrices vel mi vel suscipit. Nulla ut nisl ut magna sagittis malesuada in non justo. Aliquam eu arcu eu leo molestie eleifend. Fusce vitae ligula at nibh aliquam iaculis. Aliquam posuere nisl eu dignissim tincidunt. Phasellus vitae ex ac dui aliquet euismod id et nibh."

  const [isSectionOpen, setIsSectionOpen] = useState(false);

  const handleToggleSection = () => {
    setIsSectionOpen(!isSectionOpen);
  }

  return (
    <AboutMeWrapper className="section" isSectionOpen={isSectionOpen}>
      <Title>ABOUT ME</Title>
      <Description>{text}</Description>
      <ReadMoreBox onClick={handleToggleSection}>
        {isSectionOpen ? 
        <ReadMore>HIDE SECTION</ReadMore> :
        <ReadMore>READ MORE</ReadMore>
        }
        <ArrowIcon isSectionOpen={isSectionOpen}/>
      </ReadMoreBox>
    </AboutMeWrapper>
  )
}
