import React from "react";
import "./Section4.css";
import {Col, Container, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import fiveStars from "../images/five_star.png";

const Section4 = () => {
  const card_info_line_1 = [
    {
      img: "https://coursera-course-photos.s3.amazonaws.com/62/36b5b68e1c469a8fcde93a982629a6/PowerPoint-01.png",
      title: "اعمل بشكل أكثر ذكاءً مع Microsoft PowerPoint",
      subT: "",
      desc: "هذه الدورة مخصصة للمتعلمين الذين لديهم بعض الخبرة في استخدام Microsoft Windows، والذين يسعون إلى بناء مهارات العرض التقديمي باستخدام Microsoft PowerPoint",
      btn_text: "اقرأ المزيد",
      smallImageUrl: fiveStars,
      link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/microsoft-powerpoint-work-smarter?authProvider=cgbqatar',
    },
    {
      img: "https://coursera-course-photos.s3.amazonaws.com/40/8dbf10ac1911e68f5119007c0cf554/GettyImages-547015901-Thumbnail.jpg",
      title: "استراتيجية تسويق المحتوى",
      subT: "",
      desc: "في هذه الدورة، ستتعلم الاستراتيجيات الأساسية التي يستخدمها مسوقو المحتوى لاكتساب العملاء والاحتفاظ بهم بشكل مربح",
      btn_text: "اقرأ المزيد",
      smallImageUrl: fiveStars,
      link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/content-marketing?authProvider=cgbqatar',
    },
  ]
  const card_info_line_2 = [
    {
      img: "https://coursera-course-photos.s3.amazonaws.com/3f/12474d620f49b1ac45032b13b00f37/gww_wordsandwordorder_V1.jpg",
      title: "الكتابة والتحرير: اختيار الكلمات وترتيب الكلمات",
      subT: "",
      desc: "ستعلمك هذه الدورة كيفية استخدام كلماتك المكتوبة لتصبح أكثر إقناعًا. ستتعلم طرقًا إبداعية لاستخدام بناء الجملة، وتقنيات فعالة لسرد القصص، وطريقة ذكية لترتيب سلسلة معقدة من المعلومات.",
      btn_text: "اقرأ المزيد",
      smallImageUrl: fiveStars,
      link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/writing-editing-words?authProvider=cgbqatar&source=search',
    },
    {
      img: "https://coursera-course-photos.s3.amazonaws.com/9e/99993ca1e24d5094be9adf2277c568/Collaborate-Effectively.jpg",
      title: "التعاون بفعالية لتحقيق النجاح المهني",
      subT: "",
      desc: "ستساعدك هذه الدورة القصيرة على تطوير المهارات الأساسية الأساسية لتحسين طريقة تعاونك مع فريقك والآخرين في شركتك وشركاء العمل والعملاء.",
      btn_text: "اقرأ المزيد",
      smallImageUrl: fiveStars,
      link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/collaborate-effectively?authProvider=cgbqatar&source=search',
    },
  ];
  return (
      <div className="section4-bg" id="section4">
        
        <Container className="section4-container">
        <Row>
          <Col className="col-md-12 col-xs-12">
            <Card className="section4-middle-card p-3 shadow-lg">
              <Card.Body className="justify-content-center d-flex">
                <Card.Text className="text-center mt-auto mb-auto bFont">
                  اخترنا لكم من الدورات
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-around mt25">
            {
              card_info_line_1.map((elem, index) => {
                return (
                    <div className="col-lg-3 col-md-6 col-sx-12" key={index}>
                      <a href={elem.link} target="_blank" rel="noreferrer">
                        <Card className="section4-card shadow-sm flex flex-col justify-between">
                          <Card.Img variant="top" src={elem.img}/>
                          <Card.Body className="text-start">
                            <Card.Title>
                              {elem.title}
                            </Card.Title>
                            <Card.Text className="align-items-end">
                              {elem.desc}
                            </Card.Text>
                          </Card.Body>
                          <Card.Footer>
                            <Row className="justify-content-between d-flex">
                              <Col className="justify-content-start d-flex">
                                <img src={elem.smallImageUrl}
                                     alt={`${elem.title}`}
                                     className="mb-2 align-self-end"/>
                              </Col>
                              <Col className="justify-content-end d-flex">
                                <button className="font-bold align-self-end">
                                  سجل الآن
                                </button>
                              </Col>
                            </Row>
                          </Card.Footer>
                        </Card>
                      </a>
                    </div>
                )
              })
            }
   
            {
              card_info_line_2.map((elem, index) => {
                return (
                    <div className="col-lg-3 col-md-6 col-sx-12" key={index}>
                      <a href={elem.link} target="_blank" rel="noreferrer">
                        <Card className="section4-card shadow-sm flex flex-col justify-between">
                          <Card.Img variant="top" src={elem.img}/>
                          <Card.Body className="text-start">
                            <Card.Title>
                              {elem.title}
                            </Card.Title>
                            <Card.Text className="align-items-end">
                              {elem.desc}
                            </Card.Text>
                          </Card.Body>
                          <Card.Footer>
                            <Row className="justify-content-between d-flex">
                              <Col className="justify-content-start d-flex">
                                <img src={elem.smallImageUrl}
                                     alt={`${elem.title}`}
                                     className="mb-2 align-self-end"/>
                              </Col>
                              <Col className="justify-content-end d-flex">
                                <button className="font-bold align-self-end">
                                  سجل الآن
                                </button>
                              </Col>
                            </Row>
                          </Card.Footer>
                        </Card>
                      </a>
                    </div>
                )
              })
            }
          </Row>
        </Container>
      </div>
  );
};

export default Section4;
