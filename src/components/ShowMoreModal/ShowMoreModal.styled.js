import styled, { css } from 'styled-components';


const ShowMoreModalBox = styled.div`
display: block;
max-width:982px;
background: #FFF;
`

const ModalTitle = styled.h3`
color: #101828;
font-size: 24px;
font-weight: 600;
line-height: 1.25; 
margin-bottom:10px;
`
const ModalSubtitle = styled.div`
display:flex;
gap:16px;

color: #101828;
font-size: 16px;
font-weight: 400;
line-height:1.5;
margin-bottom:16px;
`
const RatingWrap = styled.div`
display:flex;
gap:4px;
`
const ModalRating = styled.p`
text-decoration-line: underline;`

const ModalLocation = styled.div`
display:flex;
gap:4px;`

const ModalPrice = styled.div`

color: #101828;

font-size: 24px;
font-weight: 600;
line-height: 1.25;
margin-bottom:24px; 

`

const ModalGallery = styled.div`
display:flex;
gap: 16px;
width: 100%;
font-size: 16px;
margin-bottom:24px;
div{
    border-radius: 10px;
overflow: hidden;
}
img{
    width: 290px;
    height: 310px;
}

`

const ModalDescription = styled.p`
width:902px;
text-align: justify;
color:  #475467;
font-family: Inter;
font-size: 16px;
font-weight: 400;
line-height: 1.5;
margin-bottom:16px;
`


const BtnsWrap = styled.div`
display: flex;
gap: 40px;
margin-bottom:44px;
border-bottom: 1px solid  rgba(16, 24, 40, 0.20);

;
color: #101828;


`
const BtnModal = styled.button`
position: relative;
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 1.2;
padding-bottom:24px;
&:after{
    content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 85px;
        height: 5px;
        background-color: #E44848;
        border-radius: 2px;
        display: ${(props) => (props.isactive === 'true' ? 'block' : 'none')};
        /* ${(props) =>
        props.isactive &&
        css`
        display: block;
      `} */
       
}

`

export {
    ShowMoreModalBox,
    ModalGallery,
    BtnsWrap,
    RatingWrap,
    ModalTitle,
    ModalSubtitle,
    ModalRating,
    ModalLocation,
    ModalPrice,
    ModalDescription,
    BtnModal
}