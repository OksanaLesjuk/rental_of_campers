import styled from "styled-components";
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Button, ListItemText } from "@mui/material";

const Card = styled.li`
max-width:888px;

display:flex;
gap: 24px;
padding: 24px;
margin: 0;
border-radius: 20px;
border: 1px solid rgba(16, 24, 40, 0.20);

background: #FFF;

overflow: hidden;
color: #475467;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.5;

`
const ImgCardBox = styled.div`
min-width:290px;
height:310px;

overflow: hidden;
border-radius: 10px;
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
color: #101828;
font-size: 24px;
font-weight: 600;
line-height:1.25;
margin-bottom: 8px;
h3{
  font-size: inherit;
font-weight: inherit;
line-height:1.25;
}

`

const PriceBox = styled.div`
display:flex;
align-items:center;
`

const GradeBox = styled.div`
display:flex;
align-items:center;
gap: 16px;
margin-bottom: 24px;`

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
margin-bottom:24px;
`
const PropertiesListItem = styled.li`

padding: 12px 18px;
align-items: center;
max-height: 44px;
display: flex;
gap:8px;
border-radius: 100px;
background: #F2F4F7;
mix-blend-mode: multiply;
color: #101828;
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
const CustomListText = styled(ListItemText)`


font-weight: 500;

&&
{
  margin-top:0;
  margin-bottom:0;
  span{
    line-height: 0.5;

  }
}
`


const CardInfo = styled.p`
display:block;
max-width: 525px;
white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom:24px;`

const CardBtn = styled(Button)`
&&{
  padding: 16px 40px;
  border-radius: 200px;
background: #E44848;
font-size: 16px;
text-transform:none;
}
 `

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
  AvatarSt,
  CustomListText,
  CardBtn
}