import { styled } from "styled-components";
import {BsArrowUpRight} from 'react-icons/bs'

import { MEDIA_QUERIES } from "../../../../constants/mediaQueries";

export const MyProjectsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    /* min-height: 100vh; */
    /* background-color: rgb(252,218, 105); */
    background-color: #78aaff;
    padding: 64px;
`

export const Information = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 20px;
    font-weight: 300;
    padding-top: 32px;
`

export const Line = styled.div`
    width: 100px;
    background-color: rgba(0,0,0,0);
    height: 1px;
    box-shadow: 1px 1px 1px rgba(0,0,0,0.8);
    border-radius: 2px;
`

export const Title = styled.span`
    display: flex;
    justify-content: center;
    font-size: 42px;
    font-weight: 300;
`

export const MyProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: ${props => props.isSecond ? "0px" : "32px 0px"};
    gap: 30px;

    ${MEDIA_QUERIES.md} {
        flex-direction: row;
        gap: 50px;
    }
`

export const ProjectContainer = styled.div`
    display: ${props => props.isInvisible ? "none" : "flex"};
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    
    ${MEDIA_QUERIES.md} {
        display: flex;
        opacity: ${props => props.isInvisible ? "0" : "1"};
    }
`

export const ProjectBox = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const Project = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    max-width: 300px;
    max-height: 300px;
    background-color: rgba(0,0,0,0.1);
    border-radius: 8px;
`

export const Image = styled.img`
    max-width: 300px;
    max-height: 200px;
`

export const TitleOfProject = styled.span`
    font-size: 22px;
    font-weight: 300;
`

export const InProgress = styled.span`
    font-size: 32px;
    font-weight: 200;
`

export const Description = styled.span`
    font-size: 16px;
    font-weight: 300;
`

export const ButtonCircle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 36px;
    min-height: 36px;
    border-radius: 50%;
    background-color: #ffff99;
    opacity: ${props => props.isBlocked ? "0.5" : "1"};
    cursor: pointer;
`

export const ButtonCircleA = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 36px;
    min-height: 36px;
    border-radius: 50%;
    background-color: #ffff99;
    opacity: ${props => props.isBlocked ? "0.5" : "1"};
    cursor: pointer;
`

export const ArrowIcon = styled(BsArrowUpRight)`
    color: black;
`