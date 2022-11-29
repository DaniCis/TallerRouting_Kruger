import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () =>{
    return(
        <>
        <Container>
            <Row>
                <Col xs={2} lg={0}></Col>
                <Col xs={8} lg={12}>
                    <footer>
                        <p>© Kruger Corp. 2022. Transforming Enterprises, Boosting Lives.</p>
                    </footer>
                </Col>
                <Col xs={2} lg={0}></Col>
            </Row>
        </Container>
        </>
    )
}
export default Footer;