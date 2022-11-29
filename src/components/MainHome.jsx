import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MainHome = ( ) =>{
    return(
        <Container className="main-home">
            <Row>
                <Col>
                    <h3 className="main-title">Welcome to my Playground</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="main-description">Hi Everyone!, my name is Daniela Cisneros and this is my playground, check some of my projects. If you like what you see don’t hesitate to contact me, I’ll be glad to help you</p>
                </Col>
            </Row>
        </Container>
    )

}
export default MainHome;