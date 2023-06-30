import { styled, css } from "styled-components";
import { MEDIA_QUERIES } from "../../../../constants/mediaQueries";

export const TopBarWrapper = styled.div`
    display: flex;
    justify-content: center;
    max-height: 2vh;
    /* position: sticky; */
    top: ${props => (props.hidden ? '-100px' : '0')};
    position: fixed;
    background-color: transparent;
    z-index: 100;
    top: 50px;
    left: 68%;
    transform: translate(-50%, -50%);
    display: none;
    /* opacity: ${props => (props.hidden ? '0' : '1')}; */
    transition: top 0.3s ease;

    ${props =>
    props.hidden &&
    css`
      top: -50px;
    `}

    ${MEDIA_QUERIES.md} {
        display: flex;
    }

    ${MEDIA_QUERIES.xxl} {
        left: 68%;
    }

    ${MEDIA_QUERIES.xxlp} {
        left: 68%;
    }

    ${MEDIA_QUERIES.xxlpp} {
        left: 68%;
    }
`;


export const NavigationButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100px;
    min-height: 30px;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    margin: 8px;
    transition: 0.3s;
    border-radius: 30px;
    color: white;

    &:hover {
        background-color: rgba(255,255,255,0.8);
        color: black;
    }

    ${MEDIA_QUERIES.xxl} {
        min-width: 140px;
        min-height: 50px;
        font-size: 16px;
    }

`

export const SlideOutTopBarButton = styled.div`
    display: none;
    height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: transparent;
    transition: top 0.3s ease;

    &:hover {
        top: -50px;
    }

    ${MEDIA_QUERIES.md} {
        display: flex;
    }
`