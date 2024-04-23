import styled from 'styled-components';

const ShowMoreModalBox = styled.div`
display: block;
width:982px;
height:720px;`

const ModalGallery = styled.div`
display:flex;
width: 100%;
font-size: 16px;
img{
    width: 290px;
    height: 310px;
}

`
const RatingWrap = styled.div`
display:flex;
gap:4px;
`
const BtnsWrap = styled.div`
display: flex;
gap: 40px;
padding-bottom:24px;
margin-bottom:44px;
border-bottom: 1px solid #101828;
color: #101828;
button{
    font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 1.2;
}

`

export {
    ShowMoreModalBox,
    ModalGallery,
    BtnsWrap,
    RatingWrap
}