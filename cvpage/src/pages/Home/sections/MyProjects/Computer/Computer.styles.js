import { styled } from "styled-components";
import { MEDIA_QUERIES } from "../../../../../constants/mediaQueries";

export const ComputerWrapper = styled.div`
    display: none;
    color: white;
    ${MEDIA_QUERIES.md} {
        display: flex;
    }
`