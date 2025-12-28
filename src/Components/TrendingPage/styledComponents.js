import styled from 'styled-components'

export const HomePageContainer = styled.div`
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
export const HomeContainer = styled.div`
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
export const PopupContainer = styled.div`
  background-image: url(https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png);
  background-size: cover;
  min-height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media (max-width: 567px) {
    background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    background-size: cover;
    height: 220px;
    width: 359px;
    display: flex;
    flex-direction: column;
    padding: 8px;
    margin-top: -60px;
  }
`
export const PopupBannerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 567px) {
    height: 40px;
    width: 360px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const WebLogo = styled.img`
  width: 150px;
  height: 50px;
  margin-bottom: 10px;
  @media (max-width: 576px) {
    height: 30px;
    width: 120px;
  }
`
export const CloseButton = styled.button`
  height: 30px;
  width: 40px;
  margin-right: 20px;
  @media (max-width: 576px) {
    height: 30px;
    width: 30px;
    margin-right: 15px;
  }
`
export const VideosContainer = styled.div`
  background-color: ${props => props.backgroundcolor};
  min-height: 100vh;
  height: 300vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  // background-color:grey;
  padding-top: 30px;
  padding-left: 30px;
  @media (max-width: 567px) {
    background-color: ${props => props.backgroundcolor};
    min-height: 900px;
    height: auto;
    width: 360px;
    display: flex;
    flex-direction: column;
    // background-color:grey;
    margin-top: -60px;
  }
`
export const InputContainer = styled.input`
  width: 20vw;
  height: 30px;
  outline: none;
  margin-bottom: 30px;
  @media (max-width: 567px) {
    width: 200px;
    height: 30px;
    outline: none;
    margin-bottom: 50px;
  }
`
export const VideosListContainer = styled.ul`
  list-style-type: none;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding-left: 0px;
  @media (max-width: 567px) {
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
`
export const ListItem = styled.li`
  list-style-type: none;
  height: 55vh;
  width: 330px;
  display: flex;
  flex-direction: column;
  @media (max-width: 567px) {
    // background-color:red;
    height: 300px;
    width: 350px;
    display: flex;
    margin-left: -30px;
    padding-top: 10px;
  }
`
export const VideoThumnail = styled.img`
  width: 330px;
  height: 200px;
  margin-bottom: 10px;
  @media (max-width: 576px) {
    align-self: center;
    height: 130px;
    width: 290px;
  }
`
export const ChannelDetailsContainer = styled.div`
  display: flex;
  @media (max-width: 576px) {
    display: flex;
    width: 360px;
    padding-left: 25px;
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
export const ChannelName = styled.p`
  font-size: 14px;
  margin-right: 20px;
  @media (max-width: 576px) {
    font-size: 14px;
  }
`
export const LikeAndPublish = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  @media (max-width: 576px) {
    width: 170px;
    display: flex;
    justify-content: space-between;
  }
`
export const ReactLoader = styled.div`
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
  font-size: 40px;
  margin-bottom: 20px;
  @media (max-width: 576px) {
    font-size: 20px;
    margin-right: 10px;
  }
`
