import styled from 'styled-components'

export const SavedVideosPageContainer = styled.div`
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
export const SavedVideosContainer = styled.div`
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
export const SavedVideosHeading = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
  align-self: center;
  @media (max-width: 576px) {
    font-size: 20px;
    margin-right: 10px;
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
  height: 35vh;
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
export const ChannelName = styled.p`
  font-size: 14px;
  margin-right: 20px;
  @media (max-width: 576px) {
    font-size: 14px;
  }
`
export const NoVideosImage = styled.img`
  width: 450px;
  height: 300px;
  align-self: center;
  @media (max-width: 576px) {
    align-self: center;
    height: 130px;
    width: 290px;
  }
`
