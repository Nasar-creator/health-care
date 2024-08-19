import {Col,Row,Container} from 'react-bootstrap';


const Footer = () => {
  return (
    <footer>
        <Container className='foot'>
            <Col>
            <Row>
                <h4>Absract</h4>
                <ul>
                    <li>Branches</li>
                </ul>
                </Row>
                </Col>
            <Col>
            <Row>
                <h4>Resources</h4>
                <ul>
                    <li>
                        Blog
                    </li>
                    <li>
                        Help center
                    </li>
                    <li>
                        Release Note
                    </li>
                    <li>
                        Status
                    </li>
                </ul>
                </Row>
                </Col>
            <Col>
            <Row>
                <h4>Community</h4>
                <ul>
                    <li>
                        Twitter
                    </li>
                    <li>
                        LinkedIn
                    </li>
                    <li>
                        Facebook
                    </li>
                    <li>
                        
                    Dribbie
                    </li>
                    <li>
                        
                    Podcast
                    </li>
                </ul>
                </Row>
                </Col>
                <Col>
            <Row>
                <h4>Company</h4>
                <ul>
                    <li>
                        About Us
                    </li>
                    <li>
                        Careers
                    </li>
                    <li>
                        Legal
                    </li>
                    
                </ul>
                <h5>Contact Us</h5>
                <ul>
                    <li>info@abstract.com</li>
                </ul>
                </Row>
                </Col>
                <Col className='Last-foot'>
                <Row>
                    <ul>
                        <li>
                    &copy; Copyright 2024</li>
                    <li>Abstract Studio Design. Inc</li>
                    <li>All rights reserved</li>
                    </ul>
                </Row>
                </Col>
                
        </Container>
    </footer>
  )
}

export default Footer