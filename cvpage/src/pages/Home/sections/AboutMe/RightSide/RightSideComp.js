import React from 'react'

import { Line, RightSideWrapper, ContentContainer, ContentBox, Date, Specjalization, SpecjalizationBox, Description} from './RightSideComp.styles'
import { Title } from '../../SkillsAndExperience/Skills/Skills.styles'
import { DescriptionAboutMe } from '../AboutMe.styles'

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida orci sit amet lacus pharetra, non laoreet nisl tincidunt. Curabitur sapien lorem, fringilla sed suscipit in, pretium non elit. Integer sollicitudin vitae libero non mollis. Donec elit turpis, convallis sed odio laoreet, porta lobortis orci. Maecenas porta lacus metus. Ut non imperdiet tellus, eget eleifend enim. Etiam sodales quam a nisl pharetra, vel convallis tellus dictum. Nulla in est congue, semper turpis viverra, rhoncus quam. Donec bibendum et metus at pretium.Nam eu fermentum diam. Fusce vitae luctus libero. Donec tempor viverra turpis, ac tincidunt odio accumsan sit amet. Pellentesque tincidunt mattis elit, nec blandit arcu aliquet id. Curabitur vitae laoreet lectus. Vivamus ullamcorper, nibh nec suscipit volutpat, nisl risus aliquet odio, posuere hendrerit diam ipsum nec est. Ut nec velit vitae dolor ornare suscipit at eget mauris. Curabitur et euismod velit. Sed ac porttitor libero. Integer congue tincidunt enim, at molestie arcu interdum facilisis. Curabitur ultrices vel mi vel suscipit. Nulla ut nisl ut magna sagittis malesuada in non justo. Aliquam eu arcu eu leo molestie eleifend. Fusce vitae ligula at nibh aliquam iaculis. Aliquam posuere nisl eu dignissim tincidunt. Phasellus vitae ex ac dui aliquet euismod id et nibh."

export const RightSideComp = () => {
  return (
    <RightSideWrapper>
        <DescriptionAboutMe>{text}{text}</DescriptionAboutMe>
        <Title>EXPERIENCE</Title>
        <ContentContainer>
          <Line/>
          <ContentBox>
            <Date>present</Date>
            <SpecjalizationBox>
              <Specjalization>Searching for a job</Specjalization>
              <Description>I am eager to pursue a career as a Frontend Developer.</Description>
            </SpecjalizationBox>
          </ContentBox>
          <Line/>
          <ContentBox>
            <Date>2022 - 2023</Date>
            <SpecjalizationBox>
              <Specjalization>Storekeeper</Specjalization>
              <Description>During my studies, I gained experience working as a Storekeeper at keeeper sp. z o.o.</Description>
            </SpecjalizationBox>
          </ContentBox>
          <Line/>
          <ContentBox>
            <Date>2021</Date>
            <SpecjalizationBox>
              <Specjalization>Manual worker</Specjalization>
              <Description>I worked as a student manual laborer at Go Packo Sp. zoo during the summer break.</Description>
            </SpecjalizationBox>
          </ContentBox>
          <Line/>
          <ContentBox>
            <Date>2018 - 2020</Date>
            <SpecjalizationBox>
              <Specjalization>Production worker</Specjalization>
              <Description>During my academic years, I gained practical experience as a Production Assistant at Kreska printing company.</Description>
            </SpecjalizationBox>
          </ContentBox>
          <Line/>
          <ContentBox>
            <Date>2017</Date>
            <SpecjalizationBox>
              <Specjalization>Flyer Distributor</Specjalization>
              <Description>My professional journey began with distributing flyers for SKK Bydgoszcz company.</Description>
            </SpecjalizationBox>
          </ContentBox>
        </ContentContainer>
    </RightSideWrapper>
  )
}
