import { styled, css } from "styled-components";
import { MEDIA_QUERIES } from "../../../../constants/mediaQueries";

export const TopBarWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 200%;
    min-height: ${props => (props.isTop ? '3vh' : '4vh')};
    position: fixed;
    top: ${props => (props.hidden ? '-100px' : '0')};
    position: fixed;
    background-color: ${props => (props.isTop ? 'transparent' : 'rgba(0,0,0,0.9)')};
    z-index: 101;
    top: 50px;
    top: ${props => (props.isTop ? '50px' : '24px')};
    left: 68%;
    transform: translate(-50%, -50%);
    display: none;
    opacity: ${props => (props.hidden ? '0' : '1')};

    ${props =>
    props.hidden &&
    css`
      top: -50px;
    `}

    ${MEDIA_QUERIES.lg} {
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
    min-width: 80px;
    /* min-height: 40px; */
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 2px;
    cursor: pointer;
    margin: 2px;
    /* padding: 0px 8px; */
    transition: 0.3s;
    border-radius: 30px;
    color: white;

    &:hover {
        background-color: rgba(255,255,255,0.8);
        color: black;
    }

    ${MEDIA_QUERIES.lg} {
        /* min-height: 40px; */
    }

    ${MEDIA_QUERIES.xl} {
        min-width: 100px;
    }

    ${MEDIA_QUERIES.xxlp} {
        min-width: 140px;
        font-size: 16px;
        /* margin: 16px; */
        /* padding: 16px; */
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