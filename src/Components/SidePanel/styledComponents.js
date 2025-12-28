import styled from 'styled-components'

export const SidePanelContainer = styled.div`
  height: 86vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 576px) {
    height: 120px;
    width: 360px;
    padding: 5px;
  }
`
export const SidePanelItemsContainer = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 576px) {
    height: 60px;
    display: none;
  }
`
export const SidePanelNavContainer = styled.div`
  width: 100%;
  padding: 20px;
  @media (max-width: 576px) {
    height: 10px;
    width: 1200px;
    display: none;
  }
`
export const SidePanelImage = styled.img`
  width: 150px;
  height: 50px;
  margin-bottom: 10px;
  @media (max-width: 576px) {
    height: 30px;
    width: 120px;
  }
`
export const SidePanelLinksContainer = styled.div`
  width: 100%;
  height: 35vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 576px) {
    height: 10px;
    width: 500px;
  }
`
export const Description = styled.p`
  font-size: 16px;
  margin-top: 15px;
  margin-left: 10px;
  @media (max-width: 576px) {
    height: 10px;
    width: 500px;
  }
`
export const Mobile = styled.p`
  font-size: 16px;
  margin-top: 10px;
  margin-left: 10px;
  @media (max-width: 576px) {
    height: 10px;
    width: 500px;
  }
`
export const ContactUsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: -60px;
  @media (max-width: 576px) {
    height: 10px;
    width: 500px;
  }
`
export const ContactUsLogo = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 5px;
  @media (max-width: 576px) {
    height: 30px;
    width: 120px;
  }
`
export const ContactHeading = styled.h1`
  font-size: 26px;
  margin-left: 20px;
  @media (max-width: 576px) {
    height: 10px;
    width: 500px;
    display: none;
  }
`
export const ContactDescription = styled.p`
  font-size: 16px;
  @media (max-width: 576px) {
    height: 10px;
    width: 500px;
  }
`
export const NavbarContainer = styled.nav`
  @media (min-width: 1200px) {
    display: none;
  }
  @media (max-width: 576px) {
    background-color: ${props => props.backgroundcolor};
    height: 60px;
    width: 360px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`
export const NavbarImage = styled.img`
  @media (max-width: 576px) {
    background-color: ${props => props.backgroundcolor};
    height: 40px;
    width: 160px;
  }
`
export const NavbarButton = styled.button`
  @media (max-width: 576px) {
    background-color: ${props => props.backgroundcolor};
    height: 40px;
    width: 60px;
    margin-right: 5px;
    border-width: 1px;
    margin-top: 10px;
    background-color: transparent;
    border-radius: 10px;
    color: ${props => props.color};
  }
`
export const NavItemsLinks = styled.div`
  margin-top: 120px;
  height: 180px;
  width: 200px;
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
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: -360px;
`
export const LogoutPopup = styled.div`
  margin-top: 120px;
  height: 180px;
  width: 200px;
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
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -360px;
`
