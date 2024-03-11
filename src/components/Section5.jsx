import React from "react";
import "./Section5.css";
import {Col, Container, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import fiveStars from "../images/five_star.png";

const Section5 = () => {

    const card_info_line_1 = [
        {
            id: 1,
            imageUrl: "https://d15cw65ipctsrr.cloudfront.net/4b/bca2a4dc43408497819f5b976e14e9/302050841.jpeg",
            title: 'الشهادة المهنية لمستشار تكنولوجيا السحابة من AWS',
            smallImageUrl: fiveStars,
            link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/professional-certificates/aws-cloud-technology-consultant?authProvider=cgbqatar',
            description: 'ابدأ حياتك المهنية كمستشار في مجال التكنولوجيا السحابية. ستتعلم في هذا البرنامج المهارات المطلوبة لتقديم المشورة للعملاء بشأن استخدام التكنولوجيا السحابية لتحقيق أهداف العمل. لا يشترط الدرجة العلمية أو الخبرة',
        },
        {
            id: 2,
            imageUrl: "https://d15cw65ipctsrr.cloudfront.net/8c/e0f2fd124b441fa8d9aa68fdab2167/Marketing-Image.png",
            title: 'الشهادة المهنية لمحلل بيانات Microsoft Power BI',
            smallImageUrl: fiveStars,
            link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/professional-certificates/microsoft-power-bi-data-analyst?authProvider=cgbqatar',
            description: 'ابدأ حياتك المهنية كمحلل Power BI. تعلم مهارات ذكاء الأعمال المطلوبة والتي ستجعلك جاهزًا للعمل في أقل من 5 أشهر. لا توجد خبرة سابقة مطلوبة للبدء.',
        },
        {
            id: 3,
            imageUrl: "https://coursera-course-photos.s3.amazonaws.com/48/cdef7ad117457bb1d2712791bc54e2/shutterstock_1698393829.jpg",
            title: 'مهارات القيادة',
            smallImageUrl: fiveStars,
            link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/leadershipskills?authProvider=cgbqatar',
            description: 'توفر هذه الدورة أساسًا لممارسة القيادة وتهدف إلى أخذك في رحلة لاكتشاف الذات.',
        },
    ];
    const card_info_line_2 = [
        {
            id: 4,
            imageUrl: "https://coursera-course-photos.s3.amazonaws.com/5f/0794988ad64cc5adbb661c767e891f/Go-Beyond-the-Numbers-Translate-Data-into-Insights.png",
            title: 'تجاوز الأرقام: ترجمة البيانات إلى رؤى',
            smallImageUrl: fiveStars,
            link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/go-beyond-the-numbers-translate-data-into-insight?authProvider=cgbqatar',
            description: 'ستتعلم في هذه الدورة كيفية العثور على القصة ضمن البيانات وسرد تلك القصة بطريقة مقنعة',
        },
        {
            id: 5,
            imageUrl: "https://d15cw65ipctsrr.cloudfront.net/8c/b75571d8ad4d24bddff436beab0bad/DL_Square_Banner_Coursera_800x800.png",
            title: 'الرياضيات للتعلم الآلي وتخصص علوم البيانات',
            smallImageUrl: fiveStars,
            link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/specializations/mathematics-for-machine-learning-and-data-science?authProvider=cgbqatar',
            description: 'الرياضيات للتعلم الآلي وعلوم البيانات هو تخصص مناسب للمبتدئين حيث ستتعلم مجموعة أدوات الرياضيات الأساسية للتعلم الآلي: حساب التفاضل والتكامل والجبر الخطي والإحصاء والاحتمالات.',
        },
        {
            id: 6,
            imageUrl: "https://d15cw65ipctsrr.cloudfront.net/df/ccc92936344beb9c95b5cfedd08c69/Program_Logo_5.png",
            title: 'الشهادة المهنية لمساعد الموارد البشرية HRCI',
            smallImageUrl: fiveStars,
            link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/professional-certificates/hrci-human-resource-associate?authProvider=cgbqatarw354',
            description: 'ابدأ مسيرتك المهنية في مجال الموارد البشرية. ستتعلم في هذا البرنامج المهارات المطلوبة للعمل كمساعد للموارد البشرية. لا حاجة إلى درجة علمية أو خبرة سابقة.',
        }
    ];
  return (
      <div className="section5-bg mb-5 pb-5" id="section5">
          <Container className="section5-header justify-content-center d-flex">
              <div className="text-center mt-auto mb-auto">
                  <div className="section5-header-title">
                      جديدنا من الدورات
                  </div>
                  <div className="section5-header-subtitle">
                      تزويد الموظفين بأحدث المهارات التي تساهم في تعزيز الكفاءة
                      والابتكار في الأداء الوظيفي.
                  </div>
              </div>
          </Container>
          <div className="subsection5-bg">
              <Container className="section5-container">
                  <Row>
                      {
                          card_info_line_1.map((elem, index) => {
                              return (
                                  <div className="col-lg-4 col-md-6 col-sx-12" key={index}>
                                      <a href={elem.link} target="_blank" rel="noreferrer">
                                          <Card className="section5-card mb-4 shadow-sm flex flex-col justify-between">
                                              <Card.Img variant="top" src={elem.imageUrl} className="shadow-lg"/>
                                              <Card.Body className="text-start">
                                                  <Card.Title>
                                                      {elem.title}
                                                  </Card.Title>
                                                  <Card.Text className="align-items-end">
                                                      {elem.description}
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
                  <Row>
                      {
                          card_info_line_2.map((elem, index) => {
                              return (
                                  <div className="col-lg-4 col-md-6 col-sx-12" key={index}>
                                      <a href={elem.link} target="_blank" rel="noreferrer">
                                          <Card className="section5-card shadow-sm flex flex-col justify-between">
                                              <Card.Img variant="top" src={elem.imageUrl} className="shadow-lg"/>
                                              <Card.Body className="text-start">
                                                  <Card.Title>
                                                      {elem.title}
                                                  </Card.Title>
                                                  <Card.Text className="align-items-end">
                                                      {elem.description}
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
      </div>
  );
};

export default Section5;
