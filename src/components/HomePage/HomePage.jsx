import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import headImg from '../../img/Saly-10.png'

import {BiLogIn} from 'react-icons/bi'
import {FaUserEdit} from 'react-icons/fa'

const HomePage = () => {

    return(
        <div style={{marginTop: 200}}>
            
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col lg={8}>
                        <div className="homePage__text">
                            <h1>PageBuilder</h1>
                            <h2><span>PageBuilder</span> - no code landing page constructor</h2>
                            
                            <div className="homePage__buttonGroup">
                                <Link className="homePage__buttonGroup__btn" to={'./reg'}>Registration {<FaUserEdit />}</Link>
                                <Link className="homePage__buttonGroup__btn" to={'./app'}>Sign in {<BiLogIn/>}</Link>
                            </div>
                        </div>
                        <div className="homePage__img">
                            <img src={headImg} alt="img" />
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default HomePage;