import { styled } from "styled-components";
import { AiOutlineLine, AiFillGithub } from 'react-icons/ai'
import { FaReact, FaJira } from 'react-icons/fa'
import { SiStyledcomponents, SiTypescript, SiSpringboot, SiExpress, SiSourcetree } from 'react-icons/si'
import { DiNodejsSmall } from 'react-icons/di'
// import { GrMysql } from 'react-icons/gr'
import { TbBrandMysql } from 'react-icons/tb';
import { IoLogoBitbucket } from 'react-icons/io';
import { MEDIA_QUERIES } from "../../../../constants/mediaQueries";

export const SkillsAndExperienceWrapper = styled.div`
    display: flex;
    padding: 64px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    background-color: #FFE175;

    ${MEDIA_QUERIES.xxlp} {
        gap: 200px;
        flex-direction: row;
    }
`

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-self: flex-start;
`

export const LeftTopContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const LeftBottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const SkillsContainer = styled.div`
    display: flex;
`

export const Title = styled.span`
    font-size: 48px;
    font-weight: 400;
`

export const DescribeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 32px 0;
`

export const DescribeBox = styled.div`
    display: flex;
    gap: 20px;
`

export const ColumnTitle = styled.span`
    font-size: 20px;
`

export const DescribeText = styled.span`
    width: 400px;
`

export const DescribeSkills = styled.span`
    max-width: 280px;
`

export const LineIcon = styled(AiOutlineLine)`
    color: rgba(0,0,0,0.7);
`

export const SkillsSpan = styled.span`
    font-size: 24px;
`

export const ItemsContainer = styled.div`
    display: flex;
    gap: 30px;
`

export const ItemBox = styled.div`

`

export const IconBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: rgb(0,0,0, 0.9);
    border-radius: 50%;
`

export const Image = styled.img`
    width: 28px;
    height: 28px;
`

export const ReactIcon = styled(FaReact)`
    width: 28px;
    height: 28px;
    color: lightblue;
`

export const StyledComponentsIcon = styled(SiStyledcomponents)`
    width: 32px;
    height: 32px;
    color: orange;
`

export const TSIcon = styled(SiTypescript)`
    width: 28px;
    height: 28px;
    color: lightblue;
    border-radius: 4px;
`

export const SpringBackgroundCircle = styled.div`
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #fff;
`

export const SpringIcon = styled(SiSpringboot)`
    width: 28px;
    height: 28px;
    color: green;
    z-index: 2;
`

export const NodeIcon = styled(DiNodejsSmall)`
    width: 32px;
    height: 32px;
    color: green;
`

export const MySQLIcon = styled(TbBrandMysql)`
    width: 32px;
    height: 32px;
    color: #00758F;
`

export const ExpressIcon = styled(SiExpress)`
    width: 28px;
    height: 28px;
    color: white;
`

export const JiraIcon = styled(FaJira)`
    width: 28px;
    height: 28px;
    color: #0052CC;
`

export const BitbucketIcon = styled(IoLogoBitbucket)`
    width: 28px;
    height: 28px;
    color: #2684FF;
`

export const GitHubIcon = styled(AiFillGithub)`
    width: 32px;
    height: 32px;
    color: darkgray;
`

export const SourceTreeIcon = styled(SiSourcetree)`
    width: 28px;
    height: 28px;
    color: #2684FF;;
`