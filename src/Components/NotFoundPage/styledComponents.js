import styled from 'styled-components'

export const NotFoundPageContainer = styled.div`
  background-color: ${props => props.backgroundcolor};
  min-height: 100vh;
  width: 100%;
  display: flex;
  @media (max-width: 567px) {
    background-color: ${props => props.backgroundcolor};
    max-width: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
export const NotFoundContainer = styled.div`
  background-color: ${props => props.backgroundcolor};
  height: 90vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  @media (max-width: 567px) {
    background-color: ${props => props.backgroundcolor};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`
export const NotFoundImage = styled.img`
  width: 350px;
  height: 200px;
  margin-bottom: 10px;
  align-self: center;
  justify-self: center;
  @media (max-width: 576px) {
    height: 80px;
    width: 200px;
  }
`
export const ChannelName = styled.p`
  font-size: 14px;
  align-self: center;
  justify-self: center;
  @media (max-width: 576px) {
    font-size: 14px;
  }
`
export const FailureHeading = styled.h1`
  font-size: 24px;
  align-self: center;
  justify-self: center;
  @media (max-width: 576px) {
    font-size: 20px;
    margin-right: 10px;
  }
`
