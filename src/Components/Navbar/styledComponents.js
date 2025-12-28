import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  height: 11vh;
  width: 80vw;
  margin-bottom: 30px;
  background-color: ${props => props.backgroundcolor};
  display: flex;
  @media (max-width: 576px) {
    display: none;
  }
`
export const PopupContainer = styled.div`
  height: 40px;
  width: 100%;
  margin-top: 5px;
  display: flex;
  justify-content: flex-end;
`
export const NavIcons = styled.button`
  height: 40px;
  width: 60px;
  border-width: 0px;
  background-color: transparent;
`
export const NavProfileImage = styled.img`
  height: 50px;
  width: 50px;
`
export const NavLogout = styled.button`
  height: 40px;
  width: 60px;
  border-width: 0px;
  background-color: blue;
  border-radius: 8px;
  font-family: 'Bree Serif';
  margin-left: 15px;
  margin-top: 5px;
  margin-right: 30px;
`
export const PopupDescription = styled.p`
  font-size: 18px;
  color: #07f7ef;
`
export const PopupPage = styled.div`
  height: 25vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  background-color: grey;
  justify-content: center;
  align-items: center;
`
export const PopupButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`
export const PopupButtons = styled.button`
  height: 40px;
  width: 60px;
  border-width: 0px;
  background-image: linear-gradient(
    to left,
    #ed9c87,
    #ede087,
    #c1ed87,
    #a4ebc9,
    #a4d1eb,
    #d9a4eb,
    #dea6c0
  );
  border-width: 0px;
  border-radius: 8px;
  color: #1037e3;
  font-family: 'Bree Serif';
`
