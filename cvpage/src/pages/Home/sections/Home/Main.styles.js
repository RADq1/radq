import { styled } from "styled-components";
import { MEDIA_QUERIES } from "../../../../constants/mediaQueries";

export const AboutMeWrapper = styled.div`
    display: flex;
    justify-content: center;
    min-height: 92vh;
    /* max-height: 100vh; */
    padding: 16px 16px 32px 16px;
    padding: 64px;
    overflow: hidden;
    position: relative;
`

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
    width: 80%;
    position: relative;
`

export const RightSideContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
`

export const LeftSideContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Line = styled.div`
    width: 1px;
    height: 50%;
    background-color: transparent;
    box-shadow: 5px 5px 2px gray;
`

export const AboutMeBox = styled.div`
    padding-top: 200px;
    width: 450px;
    display: flex;
    text-align: center;
    flex-direction: column;
`

export const AboutMeText = styled.span`
    max-width: 800px;
    font-weight: 100;
    font-size: 20px;
`

export const ImageArrowBox = styled.div`
    position: absolute;
    top: 10%;
    width: 200px;

    ${MEDIA_QUERIES.us} {
        display: none;
    }

    ${MEDIA_QUERIES.wm} {
        display: block;
        right: -15%;
    }

    ${MEDIA_QUERIES.lg} {
        right: -10%;
    }

    ${MEDIA_QUERIES.xl} {
        right: -5%;
    }

    ${MEDIA_QUERIES.xxl} {
        right: 15%;
    }
`

export const ImageArrow = styled.img`
    position: absolute;
    max-width: 180px;
    transform: rotate(180deg);
    right: 50px;
    top: 300px;
`

export const ImageArrowText = styled.span`
    position: absolute;
    font-size: 14px;
    font-family: 'Pacifico', cursive;
    right: 90px;
    top: 336px;
`

export const MainTextBox = styled.span`
    margin-top: 60px;
    display: flex;
    justify-content: center;
    width: 400px;
    font-size: ${props => props.isAboutMe ? "22px" : "36px"};
    font-weight: 200;
    margin-bottom: 10px;

    ${MEDIA_QUERIES.md} {
        margin-top: 40px;
        margin-bottom: 0px;
        width: 600px;
        font-weight: ${props => props.isAboutMe ? "200" : "100"};
        font-size: ${props => props.isAboutMe ? "32px" : "58px"};
    }
`

export const SpecjalizationTextBox = styled.span`
    max-width: ${props => props.isLonger ? "390px" : "240px"};
    font-size: 22px;

    overflow: hidden;
    animation: writeAnim 4000ms linear;
    animation-iteration-count: 11;
    white-space: nowrap;
    font-weight: ${props => props.isAboutMe ? "200" : "100"};


    ${MEDIA_QUERIES.md} {
        max-width: ${props => props.isLonger ? "590px" : "340px"};
        font-size: ${props => props.isAboutMe ? "32px" : "38px"};
    }

    @keyframes writeAnim {
            0% {
                width: 0;
            }

            100% {
                width: 100%;
            }
        }
`

export const PhotoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* min-height: 200px;
    min-width: 200px; */
    max-width: 200px;
    max-height: 200px;

    ${ MEDIA_QUERIES.md } {
        min-height: 500px;
        min-width: 500px;
        max-width: 500px;
        max-height: 500px;
    }
`

export const PhotoBox = styled.img`
    border-radius: 100px;
    cursor: pointer;
    transition: 300ms linear;

    max-width: 280px;
    max-height: 280px;

    &:hover {
        max-width: 300px;
        max-height: 300px;
    }

    ${MEDIA_QUERIES.md} {
    max-width: 400px;
    max-height: 400px;
    &:hover {
        max-width: 440px;
        max-height: 440px;
    }
    }
`

export const Photo = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
    /* width: 200px;
    height: 200px; */
    z-index: 100;
`

export const TriangleBackground = styled.div`
    position: absolute;
    transform: translate(-50%,-50%);
    height: 50%;
    border-left: 1500px solid transparent;
    border-right: 1500px solid transparent;
    border-bottom: 3000px solid #FF8A00;

    ${MEDIA_QUERIES.sm} {
        left: 1080px;
    }

    ${MEDIA_QUERIES.lg} {
        left: 1000px;
    }

    ${MEDIA_QUERIES.xl} {
        left: 1150px;
    }

    ${MEDIA_QUERIES.xxl} {
        left: 1780px;
    }
`

export const TextContainer = styled.div`
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: flex-start;
    align-items: flex-start; */
    position: absolute;
    /* transform: translate(-50%,-50%); */
    /* top: 40%;
    left: 38%; */
    top: 500px;
    left: 555px;
`

export const HiText = styled.span`
    font-size: 80px;
    font-weight: 500;
    color: black;
`

export const Name = styled.span`
    font-size: 80px;
    font-weight: 300;
    color: black;
`

export const Surname = styled(Name)`
    color: white;
`

export const Specjalization = styled.span`
    line-height: 1.4;
    letter-spacing: 15px;
    font-size: 36px;
    font-weight: 700;
    color: black;
`

export const SpecjalizationEnding = styled(Specjalization)`
    color: white;
`

export const NameBox = styled.div`
    display: flex;
    gap: 20px;
`

export const SpecjalizationBox = styled.div`
    display: flex;
    gap: 0px;
    margin-left: 15px;
    align-items: center;
    justify-content: center;
`
