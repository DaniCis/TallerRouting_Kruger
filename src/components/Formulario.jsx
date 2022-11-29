import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Formulario = () =>{
    return(
        <div>
            <h4 className='contact-title'>Ready to connect with me?</h4>
            <div className='contenedor-contact'>
                <Form className='contenedor-form'>
                    <Row>
                        <Col >
                            <h3 className='form-title'>Let’s Connect!</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control type="email" placeholder="Email address" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control as="textarea" type="text" placeholder="Enter text here" />
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit">
                        Get in touch
                    </Button>
                </Form>
            </div>
            
        </div>
    )
}
export default Formulario;