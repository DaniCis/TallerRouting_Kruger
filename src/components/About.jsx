import foto from "../assets/foto.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = (props) =>{
    return(
        <Container className="contenedor-about">
            <Row>
                <Col xs={0} sm={2} md={3} lg={1}></Col>
                <Col xs={12} sm={10} md={6} lg={5}>
                    <img src={foto} alt="mi foto"/>
                </Col>
                <Col xs={10} sm={12}  lg={6}>
                    <div className="contenedor-des">
                        <h4 className="about-title">{props.name}</h4>
                        <p className="about-des">Hi, I’m a System Engineer. I adapt to both individual and teamwork, always seeking to learn from my mistakes and the skills of those around me. My interests are focused on web development and Frontend programming along with interface design and user experience.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default About;