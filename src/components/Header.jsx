import left_logo from '../images/left_logo.png';
import right_logo from '../images/right_logo.png';
import {Container, Row} from "react-bootstrap";
import {Component} from "react";


class Header extends Component {

    render() {
        return (
            <div className="header pt-3 pb-3">
                <Container fluid className="">
                    <Row className="justify-content-center">
                        <div className="col-11">
                            <Row className="justify-content-between">
                                <div
                                    className="col-7 col-xxl-4 col-xl-5 col-lg-6 col-md-7 col-sm-7 d-flex justify-content-end">
                                    <img src={right_logo} alt="right logo"
                                         className="w-100 right-logo align-self-start me-auto"/>
                                </div>
                                <div className="col-4">
                                    <img src={left_logo} alt="left logo"
                                         className="w-100 left-logo align-self-end ms-auto"/>
                                </div>
                            </Row>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Header;