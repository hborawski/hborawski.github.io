import styled from 'styled-components'
import headshot from '../images/headshot.png'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'

const Shadow = (h = 1, v = 1, b = 5, s = 0) => (`
  -webkit-box-shadow: ${h}px ${v}px ${b}px ${s}px rgba(0,0,0,0.75);
  -moz-box-shadow: ${h}px ${v}px ${b}px ${s}px rgba(0,0,0,0.75);
  box-shadow: ${h}px ${v}px ${b}px ${s}px rgba(0,0,0,0.75);
`)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #26333a;
  height: 100%;
  width: 100%;
`

const Card = styled.div`
  color: white;
  font-family: Avenir, sans-serif;
  background-color: #2B3A42;
  border-radius: 8px;
  ${Shadow()};
`

const Stroke = styled.div`
  border-radius: 8px 8px 0px 0px;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, #37ad70, #37ad70, #e0ffee, #62eaa4)
`

const Headshot = styled.img`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  border-radius: ${props => props.size / 2}px;
`

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 10px;
  @media only screen and (min-width: 480px) {
    flex-direction: row;
  }
`

const LogoLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  @media only screen and (min-width: 480px) {
    flex-direction: column;
  }
`

const Name = styled.div`
  font-size: 32px;
  font-weight: 500;
`

const Index = () => (
    <Container>
        <style jsx global>
        {`
        html, body, #__next {
            margin: 0;
            height: 100%;
            width: 100%;
        }
        `}
        </style>
        <Card>
            <Stroke />
            <Row>
                <LogoLink>
                    <Headshot src={headshot} size={121} />
                </LogoLink>
                <LogoLink href='https://github.com/hborawski'>
                    <img src={github} />
                </LogoLink>
                <LogoLink href='https://www.linkedin.com/in/harris-borawski-0b616285/'>
                    <img src={linkedin} />
                </LogoLink>
            </Row>
            <Row>
                <Name>Harris Borawski</Name>
            </Row>
        </Card>
    </Container>
)

export default Index