import styled from "styled-components";

const FeaturesBox = styled.div`
display:flex;
gap: 24px;

`

const FeatureBox = styled.div`
width: 430px;`

const Characteristics = styled.ul`
display:flex;
flex-wrap:wrap;
gap:8px;
margin-bottom:44px;`

const Characteristic = styled.li`
display:flex;
gap:8px;
border-radius: 100px;
background: #F2F4F7;
mix-blend-mode: multiply;
display: flex;
padding: 12px 18px;
align-items: center;`



const SvgFeatures = styled.svg`
  display: inline-block; /* забезпечує правильне позиціонування SVG */
  width:20px; 
  height: 20px; 
  padding: 0;
 
 
  
`;

const LiWrapBottom = styled.li`
display:flex;
justify-content:space-between;`

const TitleDetails = styled.h4`
color: #101828;
font-size: 20px;
font-weight: 600;
line-height:1.2;
margin-bottom:48px; `

const UlDetails = styled.ul`
color: #101828;
text-align: center;
font-size: 18px;
font-weight: 500;
display:flex;
flex-direction:column;
gap:14px;`


export {
    FeaturesBox,
    FeatureBox,
    Characteristics,
    Characteristic,
    SvgFeatures,
    LiWrapBottom,
    TitleDetails,
    UlDetails
}