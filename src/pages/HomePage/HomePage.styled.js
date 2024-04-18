import styled from "styled-components";
import { NavLink } from "react-router-dom";

import camper from "../../images/istockphoto-902706798-1024x1024.jpg"


export const Home = styled.div`
display: block;
width: 100%;
height: 660px;
background-color:ivory;
background-image: url(${camper})
`
export const NavLinkSign = styled(NavLink)`
padding: 8px 16px;
border-radius: 4px;
text-decoration: none;
color: white;
font-weight: 500;
font-size: 24px;
background-color: rgba(228, 72, 72, 0.5);;
margin: 0 auto;

text-transform: uppercase;
display:flex;
width: 30%;
justify-content: center;
align-items:center;
gap:10px`
