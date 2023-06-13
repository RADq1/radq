import { styled } from "styled-components";

export const TopBarWrapper = styled.div`
    display: flex;
    justify-content: center;
    min-height: 2vh;
    position: sticky;
    background-color: transparent;
    z-index: 1;
    top: 0;
`

export const NavigationButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 200px;
    min-height: 60px;
    font-size: 16px;
    font-weight: 300;
    cursor: pointer;
    margin: 16px;
    transition: 0.3s;
    border-radius: 10px;
    &:hover {
        background-color: black;
        color: white;
    }
`