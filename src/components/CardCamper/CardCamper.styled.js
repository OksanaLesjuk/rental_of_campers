import styled from "styled-components";
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
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
width:290px;
height:310px;
background-color:blue;
overflow: hidden;
img{
  width: 100%;
    height: 100%;
  object-fit: cover;
}
`

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
padding: 12px 18px;
align-items: center;
height: 44px;
display: flex;
gap:8px;
border-radius: 100px;
background: #F2F4F7;
mix-blend-mode: multiply;

`

const AvatarWrap = styled(ListItemAvatar)`
min-width:20px;
`
const AvatarSt = styled(Avatar)`
width: 20px;
height: 20px;
background-color:transparent;
fill:darkgray;
`

const CardInfo = styled.p`
display:block;
max-width: 525px;
white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;`

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
  AvatarWrap,
  AvatarSt
}