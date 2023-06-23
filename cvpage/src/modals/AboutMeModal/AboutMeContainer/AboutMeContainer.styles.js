import { styled } from "styled-components"
import { AiOutlineClose } from 'react-icons/ai'

export const AboutMeContainerWrapper = styled.div`
    display: flex;
    position: fixed;
    margin-top: 200px;
    width: 80vw;
    height: 70vh;
    max-width: 900px;
    max-height: 900px;
    background-color: #fff;
    border-radius: 16px;
`

export const AboutMeSpan = styled.span`
    font-size: 24px;
    font-weight: 200;
`

export const CloseModalButton = styled(AiOutlineClose)`
    position: absolute;
    right: 30px;
    top: 30px;
    font-size: 36px;
    color: gray;
    cursor: pointer;
    transition: 0.2s linear;

    &:hover {
        font-size: 42px;
        right: 26px;
        top: 26px;
    }
`

export const LeftSide = styled.div`
    display: flex;
    justify-content: center;
    padding: 32px;
`

export const RightSide = styled.div`
    display: flex;
    padding: 32px;
`