import styled from 'styled-components'
import { GiSunflower as Sun, GiMoonBats as Moon } from 'react-icons/gi'
import { useContext } from 'react'
import { ThemeContext } from '../../context'

const Toggle = () => {
  const theme = useContext(ThemeContext)

  const handleClick = () => {
    theme.dispatch({ type: 'TOGGLE' })
  }
  return (
    <Container>
      <Sun />
      <Moon />
      <Button
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></Button>
    </Container>
  )
}

export default Toggle

const Container = styled.div`
  width: 50px;
  height: 25px;
  border-radius: 20px;
  border: 1pz solid #999;
  background-color: white;
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Button = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #999;
  position: absolute;
  cursor: pointer;
`
