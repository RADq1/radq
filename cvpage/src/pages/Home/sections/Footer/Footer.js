import { ArrowIcon, 
    BackToTopBox, 
    ButtonText, 
    DateAndName, 
    FacebookIcon, 
    FooterWrapper, 
    GithubIcon, 
    IconsContainer, 
    LinkedinIcon, 
    MailIcon,
    RightsContainer, 
    Rights } from "./Footer.styles"

export const Footer = () => {

    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
      <FooterWrapper>
        <BackToTopBox onClick={handleScrollToTop}>
            <ArrowIcon/>
            <ButtonText>BACK TO TOP</ButtonText>
        </BackToTopBox>
        <IconsContainer>
            <FacebookIcon/>
            <GithubIcon/>
            <MailIcon/>
            <LinkedinIcon/>
        </IconsContainer>
        <RightsContainer>
            <DateAndName>@2023 Radosław Gackowski</DateAndName>
            <Rights>All Rights Reserved.</Rights>
        </RightsContainer>
      </FooterWrapper>
    )
  }