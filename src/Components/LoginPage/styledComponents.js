import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  background-color: ${props => props.backgroundcolor};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 567px) {
    background-color: ${props => props.backgroundcolor};
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
export const LoginFormContainer = styled.form`
  height: 70vh;
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 1px 1px;
  padding: 10px;
  @media (max-width: 576px) {
    background-color: ${props => props.backgroundcolor};
    height: 400px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -100px;
  }
`
export const WebsiteLogo = styled.img`
  height: 50px;
  width: 180px;
  margin-bottom: 30px;
  @media (max-width: 576px) {
    height: 50px;
    width: 180px;
    margin-bottom: 30px;
  }
`
export const UsernameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 13px;
  margin-right: 10px;
`
export const LabelContainer = styled.label`
  font-size: 16px;
`
export const InputContainer = styled.input`
  height: 30px;
  outline: none;
  width: 20vw;
  font-size: 16px;
  padding: 1px;
  @media (max-width: 576px) {
    height: 30px;
    outline: none;
    width: 220px;
    font-size: 16px;
    padding: 1px;
  }
`
export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: -120px;
  @media (max-width: 576px) {
    display: flex;
    justify-content: flex-start;
    margin-left: -60px;
  }
`
export const Checkbox = styled.input`
  width: 20px;
  margin-right: 20px;
`
export const CheckboxLabel = styled.label`
  font-size: 18px;
  @media (max-width: 576px) {
    font-size: 18px;
  }
`
export const LoginButton = styled.button`
  width: 20vw;
  height: 40px;
  background-color: #3b82f6;
  border-width: 0px;
  color: white;
  font-size: 20px;
  border-radius: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 576px) {
    width: 240px;
    height: 40px;
    background-color: #3b82f6;
    border-width: 0px;
    color: white;
    font-size: 20px;
    border-radius: 8px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`
