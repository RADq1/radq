import { styled } from "styled-components";
import { IoIosArrowUp } from 'react-icons/io';
import { AiOutlineFacebook, AiOutlineLinkedin, AiFillGithub, AiOutlineMail} from 'react-icons/ai';
import { MEDIA_QUERIES } from "../../../../constants/mediaQueries";

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: #4A4848; */
    background-color: #242424;
    padding: 64px;
    color: white;
    gap: 10px;
`

export const BackToTopBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    cursor: pointer;
`

export const ButtonText = styled.span`
    font-family: Montserrat;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 2px;
`

export const ArrowIcon = styled(IoIosArrowUp)`
    font-size: 22px;
`

export const IconsContainer = styled.div`
    display: flex;
    gap: 50px;
    align-items: center;
    margin-bottom: 20px;
`

export const FacebookIcon = styled(AiOutlineFacebook)`
    font-size: 32px;
    cursor: pointer;
`

export const LinkedinIcon = styled(AiOutlineLinkedin)`
    font-size: 32px;
    cursor: pointer;
`

export const GithubIcon = styled(AiFillGithub)`
    font-size: 32px;
    cursor: pointer;
`

export const MailIcon = styled(AiOutlineMail)`
    font-size: 32px;
    cursor: pointer;
`

export const RightsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`

export const DateAndName = styled.span`
    font-size: 10px;
    font-weight: 500;
    font-family: Montserrat;

    ${MEDIA_QUERIES.md} {
        font-size: 14px;
    }
`

export const Rights = styled(DateAndName)`
    font-weight: 300;
`
