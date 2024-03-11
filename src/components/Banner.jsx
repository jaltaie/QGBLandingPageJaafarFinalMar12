import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import banner from "../images/banner.png";
import logo from "../images/logo.png";
import right_logo from "../images/right_logo.png";
import left_logo from "../images/left_logo.png";


class Banner extends Component {

    render() {
        return (
            <>
                <Container fluid className="bg p-0 m-0">
                    <Container className="header pt-3 pb-3">
                        <Container fluid className="">
                            <Row className="justify-content-center">
                                <div className="col-11">
                                    <Row className="justify-content-between">
                                        <div
                                            className="col-lg-6 col-sm-12 mobileLogoCenter">
                                            <img src={right_logo} alt="right logo"
                                                className="w-100 right-logo align-self-start me-auto" />
                                        </div>
                                        <div className="col-lg-6 col-sm-12 mobileLogoCenter">
                                            <img src={left_logo} alt="left logo"
                                                className="w-100 left-logo align-self-end ms-auto" />
                                        </div>
                                    </Row>
                                </div>
                            </Row>
                        </Container>
                    </Container>

                    <Container className="banner-bg">
                        <Container fluid className="">
                            <Row className="justify-content-center p-0">
                                <Col className="banner">
                                    <Row className="justify-content-center banner-menu">
                                        <div className="menu mt-5 text-center">

                                            <nav>

                                                <input type="checkbox" id="menu-toggle" />
                                                <label for="menu-toggle" class="hamburger">☰</label>
                                                <div class="nav-links">
                                                <a href="#section3">مهارات مهنية</a>
                                                <a href="#section2">مجالات التدريب</a>
                                                    <a href="#section1">مهارات تخصصية</a>
                                                    <a href="#section4">اخترنا لكم</a>
                                                    <a href="#section5">جديدنا</a>
                                                   
                                                </div>
                                            </nav>

                                        </div>
                                        <div className="col-12 mt-5">
                                            <img src={logo} alt="banner logo" className="logo mx-auto mt-5" />
                                        </div>
                                    </Row>

                                </Col>
                            </Row>
                        </Container>
                    </Container>
                </Container>
            </>
        )
    }
}

export default Banner;
