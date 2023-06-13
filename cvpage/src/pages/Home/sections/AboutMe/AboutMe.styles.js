import { styled } from "styled-components";
import { MEDIA_QUERIES } from "../../../../constants/mediaQueries";

export const AboutMeWrapper = styled.div`
    display: flex;
    justify-content: center;
    min-height: 98vh;
    padding: 16px 16px 32px 16px;
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
    width: 50%;
`

export const LeftSideContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
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
    font-size: 16px;
    font-family: 'Pacifico', cursive;
    right: 90px;
    top: 336px;
`

export const MainTextBox = styled.span`
    margin-top: 240px;
    font-size: ${props => props.isAboutMe ? "32px" : "48px"};
    font-weight: ${props => props.isAboutMe ? "200" : "100"};
`

export const SpecjalizationTextBox = styled.span`
    max-width: 340px;
    font-size: ${props => props.isAboutMe ? "32px" : "38px"};
    font-weight: ${props => props.isAboutMe ? "200" : "100"};

    overflow: hidden;
    animation: writeAnim 2500ms linear;
    white-space: nowrap;

    @keyframes writeAnim {
            0% {
                width: 0;
            }

            90% {
                width: 100%;
            }

            100% {
                width: 100%;
            }
        }
`

export const PhotoBox = styled.img`
    /* min-width: 400px;
    min-height: 400px; */
    max-width: 400px;
    max-height: 400px;
    border-radius: 100px;
    /* border: 1px solid black; */
    margin-bottom: 40px;
    cursor: pointer;

    transition: 300ms linear;
    position: absolute;
    top: 200px;

    &:hover {
        max-width: 440px;
        max-height: 440px;
    }
`