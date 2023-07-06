import {
    DateAndName,
    FacebookIcon,
    FooterWrapper,
    GithubIcon,
    IconsContainer,
    LinkedinIcon,
    MailIcon, 
    Rights} from "./Footer.styles"

export const Footer = () => {

    return (
      <FooterWrapper>
        <IconsContainer>
            <GithubIcon/>
            <LinkedinIcon/>
        </IconsContainer>
        <DateAndName>Radosław Gackowski</DateAndName>
        <Rights>radoslaw.gackowski.contact@gmail.com</Rights>
      </FooterWrapper>
    )
  }