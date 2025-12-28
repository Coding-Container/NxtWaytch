import {Component} from 'react'
import Cookies from 'js-cookie'
import ThemeContext from '../../ThemeContext'
import {
  LoginPageContainer,
  LoginFormContainer,
  WebsiteLogo,
  UsernameContainer,
  InputContainer,
  LabelContainer,
  CheckboxContainer,
  Checkbox,
  CheckboxLabel,
  LoginButton,
} from './styledComponents'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    isInvalidUser: false,
    errorMsg: '',
  }

  onUsernameEnter = e => {
    this.setState({username: e.target.value})
  }

  onPasswordEnter = e => {
    this.setState({password: e.target.value})
  }

  onCheckboxClick = () => {
    this.setState(prev => ({showPassword: !prev.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onFormSubmit = async e => {
    const {username, password} = this.state
    e.preventDefault()
    const apiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {method: 'POST', body: JSON.stringify(userDetails)}
    try {
      const response = await fetch(apiUrl, options)
      const data = await response.json()
      if (response.ok) {
        this.onSubmitSuccess(data.jwt_token)
        this.setState({username: '', password: ''})
      } else {
        this.setState({isInvalidUser: true, errorMsg: data.error_msg})
      }
    } catch (error) {
      console.error('Unable to Verify YOU', error)
      this.setState({isInvalidUser: true, errorMsg: error})
    }
  }

  render() {
    const {
      username,
      password,
      showPassword,
      isInvalidUser,
      errorMsg,
    } = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <LoginPageContainer
              backgroundcolor={darkMode ? '#181818' : '#f9f9f9'}
            >
              <LoginFormContainer onSubmit={this.onFormSubmit}>
                <WebsiteLogo
                  src={
                    darkMode
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <UsernameContainer>
                  <LabelContainer htmlFor="username">USERNAME</LabelContainer>
                  <InputContainer
                    type="text"
                    id="username"
                    onChange={this.onUsernameEnter}
                    value={username}
                  />
                </UsernameContainer>
                <UsernameContainer>
                  <LabelContainer htmlFor="password">PASSWORD</LabelContainer>
                  <InputContainer
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    onChange={this.onPasswordEnter}
                    value={password}
                  />
                </UsernameContainer>
                <CheckboxContainer>
                  <Checkbox
                    id="showpassword"
                    type="checkbox"
                    checked={showPassword}
                    onChange={this.onCheckboxClick}
                  />
                  <CheckboxLabel htmlFor="showpassword">
                    Show Password
                  </CheckboxLabel>
                </CheckboxContainer>
                <LoginButton type="submit">Login</LoginButton>
                {isInvalidUser ? <p>{errorMsg}</p> : ''}
              </LoginFormContainer>
            </LoginPageContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default LoginPage
