import styled from "styled-components";
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';

const Card = styled.div`
max-width:888px;
height:358px;
display:flex;
gap: 24px;
padding: 24px;
margin: 0;
`
const ImgCardBox = styled.div`
min-width:290px;
height:310px;
background-color:blue;`

const CardHeader = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
`

const PriceBox = styled.div`
display:flex;
align-items:center;
`

const GradeBox = styled.div`
display:flex;
align-items:center;`

const Grade = styled.div`
display:flex;
align-items:center;
`

const Location = styled.div`
display:flex;
align-items:center;
`

const PropertiesList = styled.ul`
display:flex;
flex-wrap: wrap;
gap:8px;
padding: 0;
`
const PropertiesListItem = styled.li`
max-width: 114px;
height: 44px;
display: flex;
gap:8px;

`
const AvatarWrap = styled(Avatar)`
min-width:20px;`

const CardInfo = styled.p`
display:block`

export {
    Card,
    ImgCardBox,
    CardHeader,
    PriceBox,
    GradeBox,
    Grade,
    Location,
    PropertiesList,
    PropertiesListItem,
    CardInfo,
    AvatarWrap
}