import React from "react";
import "./Footer.css";
import footer_phone from "../images/footer-phone.png";
import footer_email from "../images/footer-email.png";
import footer_mobile from "../images/footer-mobile.png";
import youtube from "../images/youtube.png";
import facebook from "../images/facebook.png";
import google from "../images/google+.png";
import x from "../images/x.png";
import snapchat from "../images/snapchat.png";
import linked from "../images/linked.png";
import insta from "../images/insta.png";
import behance from "../images/behance.png";
import up from "../images/up.png";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer__bg">
      <div className="btn_up">
        <a href="#section1">
          <img src={up} alt="up btn" />
        </a>
      </div>
      <Container fluid>
        <Row>
          <Col className="banner-rectangle"></Col>
        </Row>
      </Container>
      <div className="relative overflow-hidden">
        <div className="footer-top-section">
          <Container>
            <Row className="justify-content-between mt-5">
              <div className="col-lg-6 col-sm-12">
                <div className="footer-title footer-title-1">
                  للتـواصل
                  <div></div>
                </div>
                <Row className="mt-4 pb-4 ps-4">
                  <Col className="footer-phone">
                   الهاتف الارضي: 0097440280600<img src={footer_phone}></img>
                  </Col>
                </Row>
                <Row className="pb-4 ps-4">
                  <Col className="footer-email">
                    البريد الإلكتروني: training@cgb.gov.qa<img src={footer_email}></img>
                  </Col>
                </Row>
                {/* <Row className="pb-4 ps-4">
                  <Col className="footer-mobile">
                    الهاتف الخلوي: <img src={footer_mobile}></img>
                  </Col>
                </Row> */}
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="footer-title footer-title-2">
                  تــابعنا
                  <div></div>
                </div>
                <Row className="mt-4 pb-4">
                <Col className="col-lg-1 col-sm-2 social-x">
                <a href="https://twitter.com/cgbqatar"><img src={x}></img></a> 
                {/* Jaafar Altaie. Code modified 11/03/2024 */}
                    {/* <img src={x}></img> */}
                  </Col>
                  <Col className="col-lg-1 col-sm-2 social-insta">
                  <a href="https://instagram.com/cgbqatar"><img src={insta}></img></a> 
                  {/* Jaafar Altaie. Code modified 11/03/2024 */}
                    {/* <img src={insta}></img> */}
                  </Col>

                  <Col className="col-lg-1 col-sm-2 social-snapchat">
                  <a href="https://www.snapchat.com/add/cgbqatar"><img src={snapchat}></img></a> 
                  {/* Jaafar Altaie. Code modified 11/03/2024 */}
                    {/* <img src={snapchat}></img> */}

                  </Col>

                  <Col className="col-lg-1 col-sm-2 social-youtube">
                  <a href="https://www.youtube.com/@cgbqatar"><img src={youtube}></img></a> 
                  {/* Jaafar Altaie. Code modified 11/03/2024 */}
                    {/* <img src={youtube}></img> */}
                  </Col>
      
                  <Col className="col-lg-1 col-sm-2 social-linked">
                  <a href="https://twitter.com/cgbqatar"><img src={linked}></img></a> 
                  {/* Jaafar Altaie. Code modified 11/03/2024 */}
                    {/* <img src={linked}></img> */}
                  </Col>
     
            
                </Row>

              </div>
            </Row>
          </Container>
        </div>
        <div className="relative z-w-full bg-black text-center py-4 font-medium footer-copyrights">
          جميع الحقوق محفوظة © ديوان الخدمة المدنية والتطوير الحكومي / مع 2024
        </div>
      </div>
    </div>
  );
};

export default Footer;
