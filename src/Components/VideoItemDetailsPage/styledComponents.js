import styled from 'styled-components'

export const VideoDetailsPage = styled.div`
  background-color: ${props => props.backgroundcolor};
  min-height: 120vh;
  height: auto;
  width: 100%;
  display: flex;
  @media (max-width: 567px) {
    background-color: ${props => props.backgroundcolor};
    width: 360px;
    display: flex;
    flex-direction: column;
  }
`
export const VideoDetailsContainer = styled.div`
  background-color: ${props => props.backgroundcolor};
  height: 90vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  @media (max-width: 567px) {
    background-color: ${props => props.backgroundcolor};
    width: 360px;
    display: flex;
    flex-direction: column;
  }
`

export const VideoContainer = styled.div`
  height: 90vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 576px) {
    height: 100px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const Video = styled.div`
  height: 100%;
  width: 100%;
  @media (max-width: 576px) {
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export const VideoTitle = styled.h1`
  font-size: 24px;
  @media (max-width: 576px) {
    font-size: 20px;
    margin-right: 10px;
  }
`
export const RetryButton = styled.button`
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
export const FailureHeading = styled.h1`
  font-size: 24px;
  @media (max-width: 576px) {
    font-size: 20px;
    margin-right: 10px;
  }
`
export const ChannelName = styled.p`
  font-size: 15px;
  @media (max-width: 576px) {
    font-size: 14px;
  }
`
export const VideoItemsContainer = styled.div`
  width: 50%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 576px) {
    width: 350px;
    height: 50px;
    margin-left: -10px;
    padding-left: 10px;
    align-items: center;
    justify-content: space-between;
  }
`
export const FeaturesButton = styled.button`
  width: 20%;
  height: 5vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-width: 0px;
  background-color: transparent;
  @media (max-width: 576px) {
    display: flex;
    width: 68px;
    height: 30px;
    justify-content: space-between;
    align-items: center;
    border-width: 0px;
    margin-top: -12px;
  }
`

export const Likes = styled.p`
    margin-top:10px;
    font-size:15px;
    margin-left:-20px;
    @media (max-width:576px){
      font-size:14px;
      margin-top:10px
      margin-left:-60px;
    }
`
export const ChannelDetailsContainer = styled.div`
  display: flex;
  @media (max-width: 576px) {
    display: flex;
    width: 360px;
    padding-left: -25px;
  }
`
export const ChannelLogo = styled.img`
  width: 40px;
  height: 40px;
  @media (max-width: 576px) {
    height: 30px;
    width: 30px;
    margin-right: 5px;
  }
`
export const ChannelNameDetails = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 576px) {
    display: flex;
  }
`
