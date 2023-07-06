import { styled, keyframes, css } from "styled-components";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdOutlineError } from 'react-icons/md';

import { MEDIA_QUERIES } from "../../../../../constants/mediaQueries";

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    font-family: Montserrat;
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Title = styled.span`
    color: #8B8B8B;
    font-weight: 500;
    font-size: 14px;
`

export const Input = styled.input`
    border: ${props => props.isError ? "2px solid red" : "2px solid gray"};
    min-width: 300px;
    max-width: 300px;
    padding: 16px;
    font-size: 16px;
    font-family: Montserrat;
    transition: border-color 0.3s;
    box-shadow: ${props => props.isError ? "0 0 5px red" : "none"};

    &:focus {
        border-color: ${props => props.isError ? "red" : "#FF8A00"};
        outline: none;
        box-shadow: ${props => props.isError ? "0 0 5px red" : "0 0 5px #FF8A00"};
    }

    &::placeholder {
        color: gray;
    }

    &:hover:not(:focus) {
        border-color: ${props => props.isError ? "red" : "lightgray"};
    }

    ${MEDIA_QUERIES.md} {
        min-width: 500px;
        max-width: 500px;
    }
`

export const TextArea = styled.textarea`
    resize: none;
    border: ${props => props.isError ? "2px solid red" : "2px solid gray"};
    min-width: 300px;
    max-width: 300px;
    min-height: 200px;
    padding: 16px;
    font-size: 16px;
    font-family: Montserrat;
    transition: border-color 0.3s;
    box-shadow: ${props => props.isError ? "0 0 5px red" : "none"};

    //dodgerblue

    &:focus {
        border-color: ${props => props.isError ? "red" : "#FF8A00"};
        outline: none;
        box-shadow: ${props => props.isError ? "0 0 5px red" : "0 0 5px #FF8A00"};
    }

    &::placeholder {
        color: gray;
    }

    &:hover:not(:focus) {
        border-color: ${props => props.isError ? "red" : "#D3D3D3"};
    }

    ${MEDIA_QUERIES.md} {
        min-width: 500px;
        max-width: 500px;
    }
`

const slideGradient = keyframes`
    0% {
        left: -100%;
        background-position: 0% 50%;
    }
    100% {
        left: 100%;
        background-position: 100% 50%;
    }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Submit = styled.button`
  font-size: 16px;
  font-weight: 600;
  margin-top: 100px;
  width: 138px;
  align-self: center;
  font-family: Montserrat;
  letter-spacing: 2px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: 0.3s;
  opacity: ${({ isSubmitted }) => (isSubmitted ? '0' : '1')};
  pointer-events: ${({ isSubmitted }) => (isSubmitted ? 'none' : 'auto')};

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, #ff00cc, #3333ff);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s;
  }

  ${({ isClicked }) =>
    isClicked &&
    css`
      animation: ${fadeOut} 0.5s ease-in forwards;
    `}

  &:hover::after {
    transform: scaleX(1);
    animation: ${({ isSubmitted, isClicked }) =>
      isSubmitted || isClicked
        ? 'none'
        : css`${slideGradient} 0.7s linear infinite`};
  }
`;

export const AfterSubmitIcon = styled(AiFillCheckCircle)`
  font-size: 48px;
  fill: green;
  align-self: center;
  opacity: 0;
  transform: scale(0);
  transition: opacity 0.5s, transform 0.5s;
  animation: ${({ isSubmitted }) =>
    isSubmitted ? css`${fadeIn} 0.5s 0.5s forwards` : 'none'};
`;

export const ErrorIcon = styled(MdOutlineError)`
  font-size: 48px;
  fill: red;
  align-self: center;
  opacity: 0;
  transform: scale(0);
  transition: opacity 0.5s, transform 0.5s;
  animation: ${({ isSubmitted }) =>
    isSubmitted ? css`${fadeIn} 0.5s 0.5s forwards` : 'none'};
`;

export const ErrorBox = styled.div`
    display: flex;
    align-items: center;
    align-self: center;
    margin-top: 100px;
    min-height: 40px;
    gap: 20px;
    position: relative;
`

export const ErrorText = styled.span`
    font-size: 14px;
    font-family: Montserrat;
    opacity: 0;
    transform: scale(0);
    transition: opacity 0.5s, transform 0.5s;
    animation: ${({ isSubmitted }) =>
    isSubmitted ? css`${fadeIn} 0.5s 0.5s forwards` : 'none'};
`

export const TryAgain = styled(ErrorText)`
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 700;
    font-size: 12px;
    cursor: pointer;
`

export const InfoBox = styled(ErrorBox)``
export const Info = styled(ErrorText)``

