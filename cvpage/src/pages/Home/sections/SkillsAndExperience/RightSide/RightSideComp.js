import React from 'react'

import { Title, Line, RightSideWrapper, ContentContainer, ContentBox, Date, Specjalization, SpecjalizationBox, Description} from './RightSideComp.styles'

export const RightSideComp = () => {
  return (
    <RightSideWrapper>
      <Title>Work Experience</Title>
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
