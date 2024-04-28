import styled from 'styled-components';


const StyledFormBox = styled.div`
width:448px;
height:532px;
padding:24px;
border-radius: 10px;
border: 1px solid rgba(16, 24, 40, 0.20);
color:  #475467;
font-size: 16px;
font-weight: 400;
line-height: 1.5; 
h4{
    color: #101828;

font-size: 20px;
font-weight: 600;
line-height: 1.2; 
margin-bottom: 8px;
}
p{
margin-bottom: 24px;
}`

const Form = styled.form`
width: 100%;
div{
    margin: 0;
}

display: flex;
flex-direction:column;
gap: 24px;
input{
padding: 18px ;
border-radius: 10px;
border-color:transparent;
outline:transparent;
background:#F7F7F7;
.MuiFilledInput-root::after {
  border-bottom: transparent;
}
}
`

export {
    StyledFormBox,
    Form
}