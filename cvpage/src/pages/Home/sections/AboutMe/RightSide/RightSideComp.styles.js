import { styled } from "styled-components";
import { MEDIA_QUERIES } from "../../../../../constants/mediaQueries";

export const RightSideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* overflow: hidden; */
`

export const Title = styled.span`
    font-size: 48px;
    font-weight: 400;
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContentBox = styled.div`
    display: flex;
    gap: 20px;
    padding: 24px 0px;
`

export const Date = styled.span`
    display: flex;
    width: 120px;
    font-size: 16px;
    font-weight: 500;
    flex-wrap: wrap;
`

export const SpecjalizationBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Specjalization = styled.span`
    font-size: 18px;
    font-weight: 500;
`

export const Description = styled.span`
    font-size: 16px;
    max-width: 200px;
    font-weight: 400;

    ${MEDIA_QUERIES.md} {
        max-width: 300px;
    }

    ${MEDIA_QUERIES.lg} {
        max-width: 400px;
    }
`

export const Line = styled.div`
    width: 100%;
    background-color: rgba(255,255,255,0);
    height: 1px;
    box-shadow: 1px 1px 1px rgba(255,255,255,0.8);
    border-radius: 2px;

    ${MEDIA_QUERIES.md} {
        width: 600px;
    }

    ${MEDIA_QUERIES} {
        width: 900px;
    }
`