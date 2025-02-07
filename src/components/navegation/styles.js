import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
background: #121214;
border-right: 2px solid #70e5ad;
z-index: 1000;
`

export const IconOpenorClose = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
color: #70e5ad;
margin-top: 50px;
z-index:500;
position: relative;
`

export const ContentBtn = styled.div`
display: flex;
flex-direction: column;
padding: 5px;
gap: 10px;
margin-top: 4rem;
`

export const ButtonSide = styled.button`
align-items: center;
display: flex;
height: 30px;
justify-content: center;
color: #434343;
border: none;
background: #70e5ad;
border-radius:3px;
  &:hover{
    background: #4e9f78;
  }
`

export const TextSide = styled.div`
align-items: center;
text-decoration: none;
`

export const NavBar = styled.div`
width: 100%;
height: 3rem;
background: #121214;
position: absolute;
top: 0;
display: flex;
justify-content: center;
border-bottom: 2px solid #70e5ad;
z-index: 1001;
`

export const TextCompany = styled.div`
display: flex;
/* height: 300px; */
font-size: 20px;
font-weight: bold;
color: whitesmoke;
margin-top: 1rem;
font-family: monospace;
`