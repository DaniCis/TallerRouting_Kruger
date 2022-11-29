import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Card = ({valor,unidad}) =>{
    return(
        <Container>
            <Row className="card-age">
                <Col>
                    <p className="card-numero">{valor}</p>
                    <p className="card-texto">{unidad}</p>``
                </Col>
            </Row>
        </Container>       
    )
}

export default Card;