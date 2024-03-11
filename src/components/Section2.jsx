import React, {useRef, useState} from 'react';

import "./Section2.css";

import fiveStars from "../images/five_star.png";
import {Col, Container, Row} from "react-bootstrap";

import Slider from "react-slick";
import Card from "react-bootstrap/Card";

const Section2 = () => {
    let sliderRef = useRef(null);

    // Define button data with labels and associated cards
    const buttonData = [
        {
            label: 'الاتصال المؤسسي والإعلامي',
            cards: [
                {
                    id: 1,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/7b/7e63f07ef811e89e12afdbb67ea21e/CourseraLogo.jpg",
                    title: 'استراتيجيات الاتصال للعصر الافتراضي',
                    smallImageUrl: fiveStars,
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/communication-strategies-virtual-age?authProvider=cgbqatar&source=search',
                    description: 'ستكون هذه الدورة بمثابة نظرة عامة على العديد من المفاهيم التي يمكن أن يكون كل منها دورة تدريبية خاصة به وهدفنا هو أن نقدم لك الأدوات التي يمكنك ممارستها وإتقانها بنفسك.',
                },
                {
                    id: 2,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/fc/42e1c97ab047488fe59cc4c453cf51/image-5-.jpeg",
                    title: 'مبادئ العلاقات العامة',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/principles-of-public-relations?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'في هذه الدورة، يتعرض المتعلمون لمحة عامة عن مبادئ العلاقات العامة والنظريات ذات الصلة بالممارسة.',
                },
                {
                    id: 3,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/28/508290849411e6a3aadba2bfb17e80/Fotolia_86463531_Subscription_XXL-1200.jpg",
                    title: 'الإدارة بين الثقافات',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/intercultural?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'يستكشف هذا المقرر MOOC جوانب مختلفة من الإدارة بين الثقافات، بما في ذلك الفرق والقيادة وإدارة الموارد البشرية والتسويق والمفاوضات',
                },
                {
                    id: 4,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/8e/6192d98ff642f0b1c80fa183e7dbc4/Slide10.jpg",
                    title: 'منهجيات البحث',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/research-methodologies?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'يركز هذا المقرر على منهجيات البحث.',
                },
                {
                    id: 5,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/6d/f47ba064c611e6b40ae537a55e6713/iStock_24181440_XLARGE_square.jpg",
                    title: 'مقدمة عن مخاطبة الجمهور - باللغة العربية',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/public-speaking-ar?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'تمنحك هذه الدورة التدريبية نموذجًا موثوقًا لإعداد العروض التقديمية الفعالة وتقديمها',
                },
                {
                    id: 6,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/cc/add8e1294b46599a23e519dffa93f4/GIES_Icon_B.png",
                    title: 'مبادئ الإعلام والتسويق الرقمي',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/marketing-channels-ar?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'في هذه الدورة التدريبية، ستتعرف على تأثيرات التقنيات الرقمية على إستراتيجيات وممارسات التواصل التسويقي',
                }
            ]
        },
        {
            label: 'القيادة والإدارة',
            cards: [
                {
                    id: 1,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/2e/47b8d7348c48998a69f0a07b7ad7e9/Logo_Boyd_ConnectedLeadership_2.png",
                    title: 'القيادة المتصلة',
                    smallImageUrl: fiveStars,
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/connected-leadership?authProvider=cgbqatar&source=search',
                    description: 'تم تصميم هذه الدورة لتعظيم قدرتك على إحداث التغيير على مستوى الفرد والفريق والنظام.',
                },
                {
                    id: 2,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/48/cdef7ad117457bb1d2712791bc54e2/shutterstock_1698393829.jpg",
                    title: 'مهارات القيادة',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/leadershipskills?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'توفر هذه الدورة أساسًا لممارسة القيادة وتهدف إلى أخذك في رحلة لاكتشاف الذات.',
                },
                {
                    id: 3,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/0c/9d4ccf300340389a4607b82e9b2b95/MicrosoftTeams-image-88-.png",
                    title: 'مبادئ الإدارة',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/principles-of-management?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'يجب على قادة الفرق والمديرين ورجال الأعمال التوفيق بين مواطنة الفريق والقيادة والأخلاق والاستراتيجية والمشاريع مع عملهم في مجال خبرتهم.',
                },
                {
                    id: 4,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/c5/88e030450e11e7ba8f3d406635ba9d/CS_1200x1200.jpg",
                    title: 'خطة تعاونية',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/corporatestrategy?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'استراتيجية الشركة هي الإستراتيجية التي تستخدمها الشركة للتنافس عبر أعمال متعددة.',
                },
                {
                    id: 5,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/0e/0e73bf925a44e38ad880408a80222e/shutterstock_2127829151.jpg",
                    title: 'أساسيات الإدارة العجاف',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/lean-management-fundamentals?authProvider=cgbqatar&collectionId=05tnc',
                    smallImageUrl: fiveStars,
                    description: 'إذا كنت من المهتمين بإتقان أساسيات الإدارة الرشيقة وامتلاك القدرة على التحكم في برمجتك وتصرفاتك أو كان مجال عملك يتطلب إتقان تلك المهارات وتوظيفها في سياق عملك، فهذه الدورة ستكون مثالية لإغناء خبرتك وتطوير مهاراتك بشكل فعال ومؤثر.',
                },
                {
                    id: 6,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/c2/22de19942e40e594fe5afe7b2f7291/shutterstock_1757465384.jpg",
                    title: 'كيفية بناء منظمة التعلم',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/how-to-build-a-learning-organization?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'إذا كنت من المهتمين بفهم كيفية بناء منظمة متعلمة، أو كان مجال عملك يتطلب توظيف ذلك في سياق عملك، فهذه الدورة ستكون مثالية لإغناء خبرتك وتطوير مهاراتك بشكل فعال ومؤثر.',
                }
            ]
        },
        {
            label: 'ريادة الاعمال والابتكار',
            cards: [
                {
                    id: 1,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/39/592330e82011e7a5ce4de7f262d3c0/5-critical-components-to-advance-a-sustainable-economy-650x650.jpg",
                    title: 'استدامة الشركات. فهم واستغلال الفرصة الاستراتيجية',
                    smallImageUrl: fiveStars,
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/corp-sustainability?authProvider=cgbqatar&source=search',
                    description: 'إن تحقيق تنمية اقتصادية واجتماعية وبيئية متوازنة - كما ورد في خطة الأمم المتحدة للتنمية المستدامة 2030 - يعتبر أحد التحديات الرئيسية التي تواجهها البشرية اليوم.',
                },
                {
                    id: 2,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/f3/8fcde0da4311e5b69a51935a618448/logo.jpg",
                    title: 'ادارة الابتكار',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/innovation-management?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'انطلق في رحلة مدتها تسعة أسابيع عبر مفاهيم إدارة الابتكار، ونظريات توليد الأفكار، والاختيار، وصياغة الإستراتيجية وتنفيذها في هذه الدورة المكثفة المفتوحة على الإنترنت (MOOC) في إدارة الابتكار.',
                },
                {
                    id: 3,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/2c/fdebb0728711e8a431b1fb8caaf072/MOOC-Logo.fw.png",
                    title: 'الابتكار من خلال التصميم: فكر، اصنع، اكسر، كرر',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/innovation-through-design?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'لقد شهد تطور التصميم أنه أصبح نظامًا لم يعد يقتصر على اهتمامات مجال واحد محدد، بل تطور ليصبح طريقًا لحل المشكلات المعقدة وغير الخطية.',
                },
                {
                    id: 4,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/d8/329c306c2611e4bc69f1dbb9888199/MCOF_MOOC_course_logo.jpg",
                    title: 'إدارة شركة المستقبل',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/company-future-management?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'الهدف من الدورة هو تزويدك بإطار شامل لفهم كل من المبادئ التقليدية للإدارة داخل الشركات اليوم بالإضافة إلى المبادئ البديلة التي أصبحت ذات أهمية متزايدة.',
                },
                {
                    id: 5,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/04/fc1d99ff0340089e80e94b9258e8cc/shutterstock_574154995.jpg",
                    title: 'نماذج الابتكار',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/innovation-models-?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'إذا كنت من المهتمين بإتقان استيعاب والتعامل مع نماذج الابتكار، أو كان مجال عملك يتطلب إتقان تلك المهارات وتوظيفها في سياق عملك، فهذه الدورة ستكون مثالية',
                },
                {
                    id: 6,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/fa/e15e80504811e6bcaf7158d37ab7ca/LightBulb.jpg",
                    title: 'صياغة الأفكار المحفِّزة على الابتكار',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/uva-darden-design-thinking-innovation-ar?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'في هذه الدورة، نقدم لكم نظرة عامة حول صياغة الأفكار ونتعامل مع نموذج يحتوي على أربعة أسئلة رئيسية وأدوات عديدة لمساعدتك على فهم أساليب صياغة الأفكار باعتبارها منهجًا لحل المشاكل.',
                }
            ]
        },
        {
            label: 'الصحة',
            cards: [
                {
                    id: 1,
                    imageUrl: "https://coursera.s3.amazonaws.com/topics/humanphysio/large-icon.png",
                    title: 'مقدمة في علم وظائف الأعضاء البشرية',
                    smallImageUrl: fiveStars,
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/physiology?authProvider=cgbqatar&source=search',
                    description: 'استكشف العالم الرائع لعلم وظائف الأعضاء البشرية وتعرف على أجهزة الجسم ووظائفها وكيفية الحفاظ على الصحة.',
                },
                {
                    id: 2,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/04/71a6b0423011e7afe52f33f45e3daf/run-2087056__480.jpg",
                    title: 'علم التمرين',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/science-exercise?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'سيكون لدى المتعلمين الذين يكملون علم التمرين فهمًا فسيولوجيًا محسنًا لكيفية استجابة جسمك للتمرين، وسيكونون قادرين على تحديد السلوكيات والخيارات والبيئات التي تؤثر على صحتك وتدريبك.',
                },
                {
                    id: 3,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/55/8d2e309e6811e3bf47177a6a987fca/Vital-Signs-1.png",
                    title: 'العلامات الحيوية: فهم ما يقوله لنا الجسم',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/vital-signs?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'تقوم العلامات الحيوية – معدل ضربات القلب، وضغط الدم، ودرجة حرارة الجسم، ومعدل التنفس، والألم – بتوصيل معلومات مهمة حول الحالة الفسيولوجية لجسم الإنسان.',
                },
                {
                    id: 4,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/56/e4ffe9d7ae4b7483a877c30592c16b/FirearmSafety_CourseImage.jpg",
                    title: 'علم الوقاية من الإصابات بالأسلحة النارية بين الأطفال والمراهقين',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/science-of-firearm-injury-prevention-children-teens?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'تعد الإصابات بالأسلحة النارية سببًا رئيسيًا للوفاة بين الأطفال والمراهقين.',
                },
                {
                    id: 5,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/0f/4b0a004b1211e7aa5d7f0b94d133cc/PPSY-logo.jpg",
                    title: 'الطب النفسي الإيجابي والصحة العقلية',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/positive-psychiatry?authProvider=cgbqatar&collectionId=1wpr1',
                    smallImageUrl: fiveStars,
                    description: 'في هذه الدورة، سنستكشف جوانب مختلفة من الصحة العقلية الجيدة بالإضافة إلى تقديم نظرة عامة على الأنواع الرئيسية من الاضطرابات النفسية وأسبابها وعلاجاتها وكيفية طلب المساعدة والدعم.',
                },
                {
                    id: 6,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/9a/b2181bbc8843949eb50a174335b2b6/Logo_Saad-74-.jpg",
                    title: 'استخدام الوسائط الرقمية لتعزيز النتائج الصحية',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/digital-media-health-outcomes-ar?authProvider=cgbqatar&collectionId=1wpr1',
                    smallImageUrl: fiveStars,
                    description: 'ستُوفِّر الدورة التدريبية "استخدام الوسائط الرقمية لتعزيز النتائج الصحية" تدريبًا لمتخصصي الاتصالات في مجال الصحة للاستفادة من الرؤى الاجتماعية والسلوكية لتصميم الرسائل الصحية عبر الإنترنت وتنفيذها وتقييمها',
                }
            ]
        },
        {
            label: 'التنمية الذاتية',
            cards: [
                {
                    id: 1,
                    imageUrl: "https://d15cw65ipctsrr.cloudfront.net/3f/c6f890b0e211e5838af79cb4e6f6c7/shutterstock_252604894-Brian-A-Jackson.jpg",
                    title: 'التدريب على الإدارة الذاتية المهنية والتخصص في إصدار الشهادات',
                    smallImageUrl: fiveStars,
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/specializations/career-brand-management?authProvider=cgbqatar&source=search',
                    description: 'تسويق نفسك بشكل احترافي. تعلم كيفية تطوير وإدارة وتوصيل علامة تجارية مهنية قوية قائمة على المهارات في أربع دورات فقط.',
                },
                {
                    id: 2,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/82/8eca90332611e8af6dcf451148b434/pplogosample.jpg",//cardImgTwo,
                    title: 'الاحتراف في عصر التغيير',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/professionalism-in-an-era-of-change?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'نهدف في هذه الدورة إلى تزويدك بنظرة ثاقبة حول كيفية تغيير التطورات المجتمعية والتكنولوجية الأخيرة لعمل المهنيين في مجموعة متنوعة من المجالات المهنية وكيف يؤثر ذلك بدوره على الاحتراف.',
                },
                {
                    id: 3,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/32/71d280dbd711e5a99c292fe2988c4d/Anglin_Sylvia_Rosa-2.jpg",
                    title: 'الشهادة المتقدمة في إدارة الذات المهنية',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/career-fitness?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'تسويق نفسك بشكل احترافي. تعلم كيفية تطوير وإدارة وتوصيل علامة تجارية مهنية قوية قائمة على المهارات في أربع دورات فقط.',
                },
                {
                    id: 4,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/23/e19d80a5aa11e5a894ad7ff73294ef/TfC-CourseLogoCourseraFormat-carre__Temp.png",
                    title: 'كن صانعًا للتغيير، وقم ببناء مهنة ذات هدف وتأثير',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/changemaker?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'تم تصميم هذه الدورة لمساعدة أي شخص يريد أن يكون له تأثير إيجابي على المجتمع، ولكن لا يعرف كيف.',
                },
                {
                    id: 5,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/db/998fa0b27511e5bfec591131c93482/College-Photos-_OCGR_-010_2.jpg",
                    title: 'الإدارة الذاتية المهنية الاستراتيجية',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/strategic-career-self-management?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'ستتعلم في هذه الدورة كيفية التفكير بشكل استراتيجي ومهني في إدارة حياتك المهنية.',
                },
                {
                    id: 6,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/76/1abbbe72954643bd14c858ded781c9/Adapting_Build-your-personal-resilience_2.jpg",
                    title: 'بناء المرونة الشخصية',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/build-personal-resilience?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'ستركز هذه الدورة على طبيعة الضغوطات التي تواجه القادة في بيئات العمل اليوم وكيفية التعامل معها.',
                }
            ]
        },

        {
            label: 'علم البيانات',
            cards: [
                {
                    id: 1,
                    imageUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/0f/7e7a69e7d444ed965200ac45f0bd6e/Final-Data-Science.jpg?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25",
                    title: 'بايثون لعلوم البيانات والذكاء الاصطناعي والتنمية',
                    smallImageUrl: fiveStars,
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/python-for-applied-data-science-ai?authProvider=cgbqatar&source=search',
                    description: 'سوف تتعلم عن أساسيات بايثون وأنواع البيانات المختلفة. سوف تتعرف على هياكل بيانات Python مثل List وTuples، بالإضافة إلى المفاهيم المنطقية مثل الشروط والتفرع.',
                },
                {
                    id: 2,
                    imageUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/16/d602b00a6c11e88d594f951694ab88/Data-Science-Orientation.png?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25",
                    title: 'ما هو علم البيانات؟',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/what-is-datascience?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'هذه الدورة مخصصة للجميع وتعلم مفاهيم مثل كيفية استخدام علماء البيانات للتعلم الآلي والتعلم العميق وكيفية تطبيق الشركات لعلم البيانات في الأعمال التجارية.',
                },
                {
                    id: 3,
                    imageUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/37/6352a069b511e3ae92c39913bb30e0/DataScientistsToolbox.jpg?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25",
                    title: 'مجموعة أدوات عالم البيانات',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/data-scientists-tools-ar?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'هذه الدورة التدريبية تقدم مقدمة حول الأدوات والمفاهيم الرئيسية في مجال علم البيانات، مع تركيز على النواحي النظرية والعملية، وتشمل استخدام أدوات مثل Git، GitHub، R، وRStudio.',
                },
                {
                    id: 4,
                    imageUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/16/d602b00a6c11e88d594f951694ab88/Data-Science-Orientation.png?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25",
                    title: 'أدوات لعلم البيانات',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/open-source-tools-for-data-science?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'سوف تتعرف على مجموعة أدوات عالم البيانات والتي تتضمن: المكتبات والحزم، ومجموعات البيانات، ونماذج التعلم الآلي، والنواة، بالإضافة إلى الأدوات المتنوعة مفتوحة المصدر والتجارية والبيانات الضخمة والأدوات المستندة إلى السحابة',
                },
                {
                    id: 5,
                    imageUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/fc/c1b8dfbac740999b6256aca490de43/Python-Image.jpg?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25",
                    title: 'أسس علم البيانات',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/foundations-of-data-science?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'تطوير المهارات اللازمة للتقدم لأدوار مهنية بيانات أكثر تقدمًا، مثل عالم بيانات مبتدئ أو محلل بيانات متقدم',
                },
                {
                    id: 6,
                    imageUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/16/d602b00a6c11e88d594f951694ab88/Data-Science-Orientation.png?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25",
                    title: 'منهجية علم البيانات',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/data-science-methodology?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'ابدأ بالتعرف على كيفية تشكيل مشكلة العمل/البحث وتعرف على كيفية حصول علماء البيانات على البيانات وإعدادها وتحليلها',
                }
            ]
        },
        {
            label: 'تقنية المعلومات',
            cards: [
                {
                    id: 1,
                    imageUrl: "https://coursera_assets.s3.amazonaws.com/enterprise/ent-external-apis-video-promo-image.jpg",
                    title: 'مقدمة في الحوسبة السحابية',
                    smallImageUrl: fiveStars,
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/introduction-to-cloud?authProvider=cgbqatar&source=search',
                    description: 'ستتعرف في هذه الدورة على الخصائص الأساسية للحوسبة السحابية والتقنيات الناشئة التي تدعمها السحابة.',
                },
                {
                    id: 2,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/a1/4d3f79658647c595a756fba0e715e8/hacker.png",
                    title: 'مقدمة لأدوات الأمن السيبراني والهجمات السيبرانية',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/introduction-cybersecurity-cyber-attacks?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'تمنحك هذه الدورة الخلفية اللازمة لفهم أساسيات الأمن السيبراني.',
                },
                {
                    id: 3,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/8d/d412aa0cbc46cfa2288db971a348a7/ITIL4logo800x800.png",
                    title: 'التحضير لامتحان ITIL 4',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/itil-4-exam-preparation?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'تم تصميم الإعداد للاختبار الأساسي لـ ITIL® 4 لتعريف المتعلمين بالمفاهيم الأساسية والمصطلحات وأفضل الممارسات لإنشاء وتحسين جودة خدمات تكنولوجيا المعلومات عبر مؤسسة تكنولوجيا المعلومات.',
                },
                {
                    id: 4,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/29/6ac823fc7f4f858770d8b4a790112e/Computers-and-Operating-Systems-and-Security-Logo_800x800-01.png",
                    title: 'مقدمة في أجهزة الكمبيوتر وأنظمة التشغيل والأمن',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/introduction-to-computers-and-operating-systems-and-security?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'تشكل هذه الدورة جزءًا من سلسلة الدورات التي توفر نقطة انطلاق جيدة للعمل في مجال الأمن السيبراني.',
                },
                {
                    id: 5,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/c8/e497f0f1ad11e7acdcffe7a1a68190/Course-Logo-1.jpg",
                    title: 'أساسيات الدعم الفني',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/technical-support-fundamentals-ar?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'هذه الدورة الأولى في سلسلة لإعداد متدربين على دور إخصائي دعم تقنية المعلومات للمبتدئين، حيث تقدم نظرة شاملة على مواضيع تقنية المعلومات، مثل أجهزة الكمبيوتر والإنترنت وبرامج الكمبيوتر، مع تحضيرك لبرنامج الشهادة المستقبلي.',
                },
                {
                    id: 6,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/b6/2019201a9e11e5ace08b26adce8cb5/Java.png",
                    title: 'برمجة Java: حل المشكلات باستخدام البرامج',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/java-programming-ar?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'تعلم برمجة Java لتحسين مهارات حل المشكلات وتصميم الخوارزميات، وتطوير برامج للوصول إلى البيانات، مع إنشاء برنامج يحلل ملفات قيمة مفصولة بفاصلة لتحديد شهرة أسماء المواليد في الولايات المتحدة.',
                }
            ]
        },
        {
            label: 'إدارة الاعمال',
            cards: [
                {
                    id: 1,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/b8/295de0bb2d11e6ae5ebd9d9b53d2f6/iStock-518599088.jpg",
                    title: 'مبادئ ستة سيجما',
                    smallImageUrl: fiveStars,
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/six-sigma-principles?authProvider=cgbqatar&collectionId=skill~business-process-management&source=search',
                    description: 'هذه الدورة مخصصة لك إذا كنت تتطلع إلى معرفة المزيد عن Six Sigma أو تحديث معرفتك بالمكونات الأساسية لـ Six Sigma وLean.',
                },
                {
                    id: 2,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/80/18af40014611e8bbe40f17ca17e765/Customer-Centric-IT-Square.png",
                    title: 'استراتيجية تكنولوجيا المعلومات التي تركز على العملاء',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/uva-darden-customer-centric-it-strategy?authProvider=cgbqatar&collectionId=skill~business-process-management&source=search',
                    smallImageUrl: fiveStars,
                    description: 'استخدم Business Model Canvas لتركيز استراتيجية شركتك وتسهيل المشاركة من أصحاب المصلحة',
                },
                {
                    id: 3,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/26/545919d99043269e2d0079d8a4e227/Course-3-logo_cropped.jpg",
                    title: 'التحليلات والبيانات التطبيقية لاتخاذ القرار',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/analytics-data-decisions?authProvider=cgbqatar&collectionId=skill~business-process-management&source=search',
                    smallImageUrl: fiveStars,
                    description: 'تبدأ الدورة بالتركيز على فك الأسباب الجذرية للمشاكل من خلال مجموعة متنوعة من الأدوات قبل تحديد وتقييم الحلول الأفضل.',
                },
                {
                    id: 4,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/0e/824280901911e8a3407b67db6ba33b/industry-2630319_1920.jpg",
                    title: 'مشاريع الانظمة',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/enterprise-systems?authProvider=cgbqatar&collectionId=skill~business-process-management&source=search',
                    smallImageUrl: fiveStars,
                    description: 'تزودك هذه الدورة بفهم لماهية أنظمة المؤسسات (المعروفة أيضًا باسم أنظمة تخطيط موارد المؤسسات، ERPs).',
                },
                {
                    id: 5,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/af/b23aab703b4dafa3056a7723b37c22/Gies-Square-Logo-from-MarCom.jpg",
                    title: 'أسس القيادة اليومية',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/everyday-leadership-foundation-ar?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'تُقدم هذه الدورة أساسيات القيادة اليومية واتخاذ القرارات، وتركّز على أهمية مهارات القيادة لنجاح المنظمة، مع توفير القدرة على تطبيقها بشكل فعّال وتنظيم العمل الجماعي، كجزء من شهادة الماجستير الدولية في إدارة الأعمال iMBA المُقدمة عبر الإنترنت من جامعة إلينوي.',
                },
                {
                    id: 6,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/38/b3e6f9ec4445b78f18dd8bebfc650e/shutterstock_595576169.jpg",
                    title: 'ما هي الإدارة ولماذا نحتاج إليها | What and Why of Management',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/the-what-and-why-of-management?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'تسلط هذه الدورة الضوء على أهمية الإدارة في نجاح المؤسسات وتقديم لمحة تمهيدية حول مفاهيمها الأساسية، مما يجعلها مثالية للراغبين في فهم أساسيات الإدارة وتطبيقها في مجال العمل لتعزيز الكفاءة والفاعلية.',
                }
            ]
        },
        {
            label: 'الإدارة المكتبية',
            cards: [
                {
                    id: 1,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/67/2cc9d6ffb04b269494791755ad875d/shutterstock_1471857863.jpg",
                    title: 'مهارات إدارة المواهب | Talent Management Skills',
                    smallImageUrl: fiveStars,
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/talent-management-skills?authProvider=cgbqatar&source=search',
                    description: 'تتعرض هذه الدورة لأهمية "رأس المال البشري" كعنصر رئيسي في نجاح الشركات، مع التركيز على مهارات إدارة المواهب والإطار التنظيمي لها، وتقديم مبادئ وأفضل الممارسات في هذا المجال',
                },
                {
                    id: 2,
                    imageUrl: "https://d15cw65ipctsrr.cloudfront.net/1a/2bb79d283a447ca12982eebfc8941a/GoogleG_FullColor_192px_768.png",
                    title: 'بدء استخدام تخصص Google Workspace',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/specializations/getting-started-with-google-workspace?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'يزود هذا التدريب الطلاب بالمهارات التي يحتاجونها ليصبحوا منتجين باستخدام Google Workspace.',
                },
                {
                    id: 3,
                    imageUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/8e/ea6b58e1f54001a761b5994580d245/shutterstock_1237494604.jpg?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25",
                    title: 'تقدير تكاليف المنتجات على أساس النشاط',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/professional-certificates/salesforce-sales-operations?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'تشرح الدورة التكاليف المباشرة وغير المباشرة في المنشآت، مع تسليط الضوء على أهمية حساب هذه التكاليف لتحديد أسعار المنتجات، وتقديم طريقتين لحساب التكاليف: التقليدية وحساب التكاليف على أساس الأنشطة (ABC).',
                },
                {
                    id: 4,
                    imageUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/8e/ea6b58e1f54001a761b5994580d245/shutterstock_1237494604.jpg?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25",
                    title: 'برامج الإنتاجية المكتبية وأساسيات Windows',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/office-productivity-software-windows-fundamentals1?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'باعتبارها نظام التشغيل الأكثر استخدامًا في العالم، تعد مهارات Windows أمرًا بالغ الأهمية في مكان العمل اليوم.',
                },
                {
                    id: 5,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/6d/6b4b10b26411e5bfec591131c93482/College-Photos-_OCGR_-005_2.jpg",
                    title: 'تطوير تميزك المهني والتدريب الذاتي',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/career-brand-development-self-coaching-ar?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'في هذه الدورة التدريبية، ستتعلم كيفية تعزيز مهاراتك الوظيفية وتطوير إستراتيجيات إدارة الذات، بما في ذلك تنفيذ استراتيجيات الأعمال، وتقييم مهاراتك بشكل شامل، وإنشاء ملف تعريف للكفاءات، وتطوير أدوات فعالة لبناء المهارات وقياس أداء الوظيفة.',
                },
                {
                    id: 6,
                    imageUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/8e/ea6b58e1f54001a761b5994580d245/shutterstock_1237494604.jpg?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25",
                    title: 'تقدير تكاليف المنتجات على أساس النشاط',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/activity-based-costing?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'تشرح الدورة الفروق بين تكاليف المنشأة الأعمال (تكاليف مباشرة وغير مباشرة)، وتسلط الضوء على أهمية حسابها في تحديد أسعار المنتجات، وتقديم نظرة عامة على مراكز التكلفة وتكلفة الأنشطة (ABC)، مما يجعلها مفيدة لتعزيز مهارات الراغبين في اتقان تقدير تكاليف المنتجات.',
                }
            ]
        },
        {
            label: 'الاقتصاد والمالية',
            cards: [
                {
                    id: 1,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/cc/d29c75169172a7c1b1cdb15bb47b4c/DS_tax.png",
                    title: 'الاقتصاد الجزئي: قوة الأسواق',
                    smallImageUrl: fiveStars,
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/microeconomics-part1?authProvider=cgbqatar&source=search',
                    description: 'تعد هذه الدورة مقدمة لنظرية الاقتصاد الجزئي للأسواق: لماذا نمتلكها، وكيف تعمل، وما الذي تنجزه.',
                },
                {
                    id: 2,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/6f/e2514b11a94e01868350b10d65c8a4/Logo_Financial-Markets.png",
                    title: 'الأسواق المالية',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/financial-markets-global?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'نظرة عامة على الأفكار والأساليب والمؤسسات التي تسمح للمجتمع البشري بإدارة المخاطر وتعزيز المشاريع.',
                },
                {
                    id: 3,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/39/e5acd0346611e5b80461999c2a9a44/financial.jpg",
                    title: 'الأسهم الخاصة ورأس المال الاستثماري',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/private-equity?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'يتناول المقرر تحليل أعمال الأسهم الخاصة ورأس المال الاستثماري.',
                },
                {
                    id: 4,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/7b/8786437a134401b5418555c55278fe/GIES_Icon_B.png",
                    title: 'مقدمة في التمويل: الأساسيات',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/introduction-to-finance-the-basics?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'دورة الأساسيات، سيتم تعريفك بالمفاهيم الأساسية اللازمة لفهم عملية اتخاذ القرار للمدير المالي.',
                },
                {
                    id: 5,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/64/b54121e1844a0fb65db726cf027bef/shutterstock_683387005.jpg",
                    title: 'المبادئ المحاسبية في التقارير والقوائم المالية',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/accounting-standards-in-financial-reports-and-statement?authProvider=cgbqatar&collectionId=nfXiL',
                    smallImageUrl: fiveStars,
                    description: 'ستزودك هذه الدورة باطلاع واسع ودقيق على مجموعة من المحاور المتعلقة بهذا الموضوع، مثل: استعراض الحالات المسموح فيها بمخالفة معايير المحاسبة',
                },
                {
                    id: 6,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/04/ec65a1db2644df9949b5a7a448444e/shutterstock_1790828810.jpg",
                    title: 'إتقان الإدارة المالية | Mastering Financial Management',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/mastering-financial-management?authProvider=cgbqatar&collectionId=nfXiL',
                    smallImageUrl: fiveStars,
                    description: 'حيث ستزودك هذه الدورة باطلاع واسع ودقيق على مجموعة من المحاور المتعلقة بهذا الموضوع، مثل: التعرف على النسب الرئيسية لتحليل السيولة والكفاءة',
                }
            ]
        },

        {
            label: 'الذكاء الاصطناعي',
            cards: [
                {
                    id: 1,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/41/763803169e4d31a5e7611bc928124b/Course-Logo.png",
                    title: 'الذكاء الاصطناعي للجميع',
                    smallImageUrl: fiveStars,
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/ai-for-everyone?authProvider=cgbqatar&source=search',
                    description: 'الذكاء الاصطناعي ليس للمهندسين فقط. إذا كنت تريد أن تصبح مؤسستك أفضل في استخدام الذكاء الاصطناعي، فهذه هي الدورة التدريبية التي يجب أن تخبر الجميع - وخاصة زملائك غير التقنيين - أن يأخذوها.',
                },
                {
                    id: 2,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/63/b72069efbc42a689ccd470cfecafd9/unnamed.png",
                    title: 'مقدمة إلى الذكاء الاصطناعي التوليدي',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/introduction-to-generative-ai?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'هذه دورة تعليمية صغيرة للمستوى التمهيدي تهدف إلى شرح ماهية الذكاء الاصطناعي التوليدي وكيفية استخدامه وكيف يختلف عن أساليب التعلم الآلي التقليدية.',
                },
                {
                    id: 3,
                    imageUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/c5/8d1efd8864419c856f61f067aa5471/shutterstock_1062915260.jpg?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25",
                    title: 'أساسيات الذكاء الاصطناعي والبيانات الضخمة | AI',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/artificial-intelligence-and-big-data-fundamentals?authProvider=cgbqatar&collectionId=yTm1u',
                    smallImageUrl: fiveStars,
                    description: 'هذه الدورة هي دورة تمهيدية؛ فهي تلقي الضوء على أساسيات الموضوع بشكل عام بهدف التعريف به وبمحاوره الأساسية التي يجب الإلمام بها',
                },
                {
                    id: 4,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/f7/9812f978144ce8ac721727bc516cb0/Intro-to-AI-Naimo.jpg",
                    title: 'مقدمة في الذكاء الاصطناعي (AI)',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/introduction-to-ai?authProvider=cgbqatar&collectionId=yTm1u',
                    smallImageUrl: fiveStars,
                    description: 'ستتعلم في هذه الدورة ما هو الذكاء الاصطناعي (AI)، وستستكشف حالات استخدام وتطبيقات الذكاء الاصطناعي، وستفهم مفاهيم ومصطلحات الذكاء الاصطناعي مثل التعلم الآلي والتعلم العميق والشبكات العصبية.',
                },
                {
                    id: 5,
                    imageUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/b2/65f2d3143d48b29c346332efac1118/AI4ESquareLogo.png?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25",
                    title: 'الذكاء الاصطناعي للجميع',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-brnmj-tjryby-8qqdt/learn/ai-for-everyone-ar?authProvider=cgbqatarstaging&source=search',
                    smallImageUrl: fiveStars,
                    description: 'تعتبر هذه الدورة التدريبية مناسبة لجميع أفراد المؤسسة، بما في ذلك غير المتخصصين في التكنولوجيا، لفهم وتطبيق مفاهيم الذكاء الاصطناعي، حيث تشمل المحتوى النواح النظرية والعملية والتعامل مع الجوانب الأخلاقية والمجتمعية لهذا المجال.',
                },
                {
                    id: 6,
                    imageUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/84/2c670670e54117916b15ba98e56d18/ssyt-aadd-wkhtbr-twSyl-jhz-lshbk-ldhky-42-.png?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25",
                    title: 'عمل خطة محتوى بالذكاء الاصطناعي: Canva، ChatGPT، وBlueWillow',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-brnmj-tjryby-8qqdt/learn/creating-a-content-plan-using-artificial-intelligence?authProvider=cgbqatarstaging&source=search',
                    smallImageUrl: fiveStars,
                    description: 'يهدف المشروع إلى تيسير استخدام الذكاء الاصطناعي في إبداع محتوى مبتكر، حيث يستخدم أدوات متنوعة مثل Canva و BlueWillow و ChatGPT لتوليد أفكار وإنشاء صور ومحتوى متناسب، مما يساعد في تحسين الإبداع وتوفير الوقت والجهد للأفراد ذوي الخبرة المتوسطة في كتابة المحتوى والتفاعل مع أدوات الذكاء الاصطناعي.',
                }
            ]
        },
        {
            label: 'التعليم',
            cards: [
                {
                    id: 1,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/aa/3cd760fcab11e6b2b605357676436e/ut-square-logo_1_.jpg",
                    title: 'التدريس الجامعي',
                    smallImageUrl: fiveStars,
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/university-teaching?authProvider=cgbqatar&source=search',
                    description: 'التدريس الجامعي عبارة عن دورة تمهيدية في التدريس والتعلم في التعليم العالي، صممها موظفو مركز تعزيز التدريس والتعلم بجامعة هونغ كونغ.',
                },
                {
                    id: 2,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/cb/3c4030d65011e682d8b14e2f0915fa/shutterstock_226881610.jpg",
                    title: 'كن تفاعليًا: التدريس العملي باستخدام التكنولوجيا',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/getinmooc?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'تم تصميم هذه الدورة لمساعدتك في إنشاء دورات ديناميكية وتفاعلية عبر الإنترنت من خلال استخدام أدوات الوسائط المتعددة وفرص تعاون الطلاب والتقييم التكويني والملاحظات.',
                },
                {
                    id: 3,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/7c/b688204d0211e78ab2675f15822526/BeingATeacher.jpg",
                    title: 'أسس التدريس من أجل التعلم: أن تكون معلمًا',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/being-a-teacher?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'برنامج أسس التدريس من أجل التعلم مخصص لأي شخص يقوم بالتدريس، أو يرغب في التدريس، في أي موضوع وفي أي سياق - سواء كان ذلك في المدرسة أو المنزل أو في مكان العمل.',
                },
                {
                    id: 4,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/bf/e096b4b234426eab389c870f8ef763/UST_1200X1200_300dpi.png",
                    title: 'تعليم الحواس غير المألوفة',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/uncommon-sense-teaching?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'لا تشبه هذه الدورة أي دورة تدريبية أخرى - فهي تنسج رؤى حديثة من علم الأعصاب مع رؤى شخصية من الفصل الدراسي لتوفير أساليب جديدة غير متوقعة ولكنها عملية',
                },
                {
                    id: 5,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/52/6dff15e6f247789eb5dafb9be90cb2/Learning-How-to-Learn-Logo_875X875px.png",
                    title: 'تعّلم كيف تتعلم: أدوات ذهنية قوية لمساعدتك على إتقان موضوعات صعبة',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/learning-how-to-learn-ar?authProvider=cgbqatar&collectionId=hAdZ3',
                    smallImageUrl: fiveStars,
                    description: 'تعلم هذه الدورة كيفية استخدام أساليب فعّالة في التعلم، مقدمة من خبراء في مجالات متنوعة، مع تركيز على استغلال قدرات الدماغ وتقديم تقنيات للتفوق في فهم المواضيع الصعبة وتحقيق التقدم الفعّال',
                },
                {
                    id: 6,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/eb/bde77b80db4b5784c5106f65b2e81e/Learning-How-to-Learn-Logo.png",
                    title: 'تعلم كيفية التعلم: أدوات عقلية قوية لمساعدتك على إتقان المواضيع الصعبة',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/learning-how-to-learn?authProvider=cgbqatar&collectionId=hAdZ3',
                    smallImageUrl: fiveStars,
                    description: 'تتيح لك هذه الدورة الوصول بسهولة إلى تقنيات التعلم التي لا تقدر بثمن والتي يستخدمها خبراء في الفن والموسيقى والأدب والرياضيات والعلوم والرياضة والعديد من التخصصات الأخرى',
                }
            ]
        },
        {
            label: 'الهندسة',
            cards: [
                {
                    id: 1,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/0c/c86be034c211e6baea8955651c7f9f/FundamentalsOfEngineeringExamReview.jpg",
                    title: 'أساسيات مراجعة الامتحانات الهندسية',
                    smallImageUrl: fiveStars,
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/fe-exam?authProvider=cgbqatar&source=search',
                    description: 'الغرض من هذه الدورة هو مراجعة المواد التي يغطيها امتحان أساسيات الهندسة (FE) لتمكين الطالب من اجتيازه.',
                },
                {
                    id: 2,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/d7/60ad90371f11e6a6a20b6ff5b84324/Introduction_EngineeringMechanicsIcon.jpg",
                    title: 'مقدمة في الميكانيكا الهندسية',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/engineering-mechanics-statics?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'تعد هذه الدورة مقدمة لتعلم وتطبيق المبادئ المطلوبة لحل مشاكل الميكانيكا الهندسية.',
                },
                {
                    id: 3,
                    imageUrl: "https://coursera_assets.s3.amazonaws.com/enterprise/ent-external-apis-video-promo-image.jpg",
                    title: 'مقدمة في هندسة البرمجيات',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/introduction-to-software-engineering?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'ستكتسب في هذه الدورة المعرفة الأساسية لتطوير البرمجيات والبرمجة والعديد من الأدوار الوظيفية والمسارات الوظيفية المثيرة التي تقدمها صناعة تكنولوجيا المعلومات.',
                },
                {
                    id: 4,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/42/c288b0a04d11e688655933b8cc527d/comp-600px-2.jpg",
                    title: 'إدارة المشاريع الهندسية: البدء والتخطيط',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/initiating-planning?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'الهدف من الدورة هو تزويدك بالأدوات اللازمة لبدء خطة المشروع، وإدارة كل من أصحاب المصلحة والعلاقات، وتنظيم فريقهم، وتطوير ميثاق المشروع، وبناء حالة عمل للمشروع.',
                },
                {
                    id: 5,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/36/33018f3d3745b79f8ede101591c518/Introduction-to-Data-Engineering-Image.jpg",
                    title: 'مقدمة في هندسة البيانات',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/introduction-to-data-engineering?authProvider=cgbqatar&collectionId=ZWGZp',
                    smallImageUrl: fiveStars,
                    description: 'ستبدأ هذه الدورة بفهم ماهية هندسة البيانات بالإضافة إلى الأدوار التي يلعبها مهندسو البيانات وعلماء البيانات ومحللو البيانات في هذا المجال المثير.',
                },
                {
                    id: 6,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/87/b9af1f64884ec7a9bac226b24ea903/aex_post_secondary_students_1200x1200.jpg",
                    title: 'مقدمة لتصميم الهندسة الميكانيكية والتصنيع باستخدام Fusion 360',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/mechanical-engineering-design-manufacturing?authProvider=cgbqatar&collectionId=ZWGZp',
                    smallImageUrl: fiveStars,
                    description: 'تستكشف هذه الدورة التصميم لسير عمل التصنيع وتوضح كيفية التحقق من صحة النماذج وإنشاء رمز G، وهي لغة البرمجة اللازمة لتوجيه آلة CNC حول كيفية التحرك',
                }
            ]
        },
        {
            label: 'القانون والأنظمة',
            cards: [
                {
                    id: 1,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/22/546e70618340f6a2689e3f83b4f42a/Copyright-v3-01.png",
                    title: 'قانون حقوق الطبع',
                    smallImageUrl: fiveStars,
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/copyright-law?authProvider=cgbqatar&source=search',
                    description: 'تم تصميم هذه الدورة للمحترفين المبدعين - مثل كتاب السيناريو والموسيقيين وصانعي الأفلام الوثائقية أو الفنانين - الذين يرغبون في فهم نطاق وحدود الأعمال التي يمكن أن تتمتع بحماية حقوق الطبع والنشر الأمريكية.',
                },
                {
                    id: 2,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/db/39793028354087a9a4facb21ec4737/Patent-Law_v3-01.png",
                    title: 'قانون برائة الاختراع',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/patents?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'في اقتصادنا الحديث القائم على التكنولوجيا، فإن إنشاء حقوق براءات الاختراع وإنفاذها يمكن أن يؤدي إلى نجاح أو فشل الأعمال.',
                },
                {
                    id: 3,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/1f/dc09a0b90b4ebcb104403fa92228cc/GIES_Icon_B.png",
                    title: 'قانون الشركات التجارية الأول: قانون العقود والتوظيف',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/corporate-commercial-law-part1?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'يتعامل هذا الفصل مع موضوعات قانون الأعمال التي تظهر في اختبار CPA: الوكالة، والعقود، والعلاقات بين المدين والدائن، والتنظيم الحكومي للأعمال، ومنظمات الأعمال.',
                },
                {
                    id: 4,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/b4/064634f662432293a35e3383d43941/GIES_Icon_B.png",
                    title: 'قانون الشركات والقانون التجاري الثاني: أشكال الأعمال والتمويل والتنظيم الحكومي',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/corporate-commercial-law-part2?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'هذه الدورة هي الدورة الثانية في سلسلة مكونة من جزأين حول قانون الشركات والقانون التجاري.',
                },
                {
                    id: 5,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/31/475753c8dd4b49aa004f06c1f1b7d1/shutterstock_758357752.jpg",
                    title: 'مكافحة غسل الأموال | Anti Money Laundering',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/anti-money-laundering?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'تقدم هذه الدورة فهمًا أساسيًا لجريمة غسل الأموال وأهميتها الاقتصادية والاجتماعية. تتناول الاتفاقيات الدولية والقواعد لمكافحة هذه الجريمة. إذا كنت ترغب في تعميق فهمك حول هذا الموضوع أو تحتاج إلى تطبيقه في مجال عملك، فإن هذه الدورة توفر لك المعرفة والمهارات الضرورية لمكافحة غسل الأموال بفعالية.',
                },
                {
                    id: 6,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/7d/c2d362b16b484fa62987dc9fcdaa79/shutterstock_512658082.jpg",
                    title: 'نماذج السلوك التنظيمي | Organizational Behavior Models',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/organizational-behavior-models?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'تفتح هذه الدورة أفقك نحو فهم أساسي لسلوك الأفراد داخل المنظمات وأثرهم على أداء الفرق. تستعرض الدورة نماذج السلوك التنظيمي، وتركز على قيادة التغيير وأدوار فرق العمل. إذا كنت تسعى لتعميق فهمك أو تحسين مهاراتك في هذا المجال، فإن هذه الدورة ستكون فرصة مثالية لتطوير مهاراتك وتعزيز تأثيرك في بيئة العمل.',
                }
            ]
        },
        {
            label: 'الموارد البشرية',
            cards: [
                {
                    id: 1,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/40/6830008d5311e58a7379988e116de4/IMG_0389-1310.jpg",
                    title: 'Recruiting, Hiring, and Onboarding Employees',
                    smallImageUrl: fiveStars,
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/recruiting-hiring-onboarding-employees?authProvider=cgbqatar&collectionId=skill~human-resources&source=search',
                    description: 'At the outset of the course we will explore the importance of linking recruitment goals with overall company strategy',
                },
                {
                    id: 2,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/a2/4523df3088487ca5a2519ab32642ef/HR-Analytics_CourseraGraphics_1200x1200.jpg",
                    title: 'Human Resources Analytics',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/human-resources-analytics?authProvider=cgbqatar&collectionId=skill~human-resources&source=search',
                    smallImageUrl: fiveStars,
                    description: 'This course focuses on identifying effective data sources, developing meaningful metrics, designing long-term measures, and applying results in support of organizational strategy and tactics',
                },
                {
                    id: 3,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/d6/8e59d08d3311e5a52f5f18e8b42513/IMG_3652-2-378.jpg",
                    title: 'Preparing to Manage Human Resources',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/managing-human-resources?authProvider=cgbqatar&collectionId=skill~human-resources&source=search',
                    smallImageUrl: fiveStars,
                    description: 'This course provides a foundation for developing your own approach to skillfully managing employees by illustrating alternative human resource management (HRM) strategies, introducing the importance of the legal context, and thinking about what motivates employees.',
                },
                {
                    id: 4,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/bb/82f07ea1b848d28329148fd1808e10/HR-Diversity_CourseraGraphics_1200x1200.jpg",
                    title: 'Diversity and Inclusion for HR Professionals',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/diversity-and-inclusion-for-hr-professionals?authProvider=cgbqatar&collectionId=skill~human-resources&source=search',
                    smallImageUrl: fiveStars,
                    description: 'In this course we will review the changing landscape of the workplace and discuss the current change drivers that make Diversity and Inclusion an important focus for your organization',
                },
                {
                    id: 5,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/d6/8e59d08d3311e5a52f5f18e8b42513/IMG_3652-2-378.jpg",
                    title: 'التحضير لإدارة الموارد البشرية',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/managing-human-resources-ar?authProvider=cgbqatar&collectionId=hai9O',
                    smallImageUrl: fiveStars,
                    description: 'تقدم هذه الدورة التدريبية أساسيات إدارة الموظفين، مشيرةً إلى الإستراتيجيات البديلة لإدارة الموارد البشرية، وأهمية السياق القانوني وتحفيز الموظفين، وتعتبر خطوة واقعية لتطوير مهارات إدارة الموارد البشرية في مجالات مثل تعيين الموظفين وإدارة الأداء ومكافأة الموظفين.',
                },
                {
                    id: 6,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/ef/4c845dde814b249108e5f96a648082/Logo-image-8-.png",
                    title: 'Managing Employee Performance',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/employee-performance?authProvider=cgbqatar&collectionId=hai9O',
                    smallImageUrl: fiveStars,
                    description: 'we will discuss the skills and key processes you will need to develop your employees to attain department and organizational goals',
                }
            ]
        },
        // Add more objects for each button as needed
    ];

    window.btn = buttonData;


    const settings = {
        className: "center",
        dots: false,
        infinite: false,
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // State to manage the active button and its associated cards
    const [activeButton, setActiveButton] = useState(0);

    return (
        <div className="section2-bg mt-5" id="section2">
            <Container className="section2-header justify-content-center d-flex">
                <div className="text-center mt-auto">
                    <div className="section2-header-title">
                        مجالات التدريب
                    </div>
                </div>
            </Container>
            <Container className="pt-5 pb-5 section2-container justify-content-center">
                <Row>
                    <Col className="col-md-12 m-auto mb-3">
                        <div className="flex flex-col items-center">
                            <section className="grid grid-cols-5 row-gap-2 w-100 section2-tab">
                                {buttonData.map((button, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveButton(index)}
                                        className={
                                            `section2-tab-button ${
                                                activeButton === index ? "active" : ""
                                            }`
                                        }
                                    >
                                        {button.label}
                                    </button>
                                ))}
                            </section>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-12 m-auto">
                        <Slider
                            ref={slider => {
                                sliderRef = slider;
                            }}
                            {...settings}>
                            {activeButton !== null && buttonData[activeButton].cards.map((elem, index) => {
                                return (
                                    <a href={elem.link} key={index} target="_blank" rel="noreferrer">
                                        <Card className="section2-card m-auto shadow-sm flex flex-col justify-between">
                                            <Card.Img variant="top" src={elem.imageUrl}/>
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
                                                    <Col>
                                                        <button className="rounded-b-md font-bold">
                                                            سجل الآن
                                                        </button>
                                                    </Col>
                                                    <Col className="justify-content-end d-flex">
                                                        <img src={elem.smallImageUrl}
                                                             alt={`${elem.title}`}
                                                             className="mb-2 align-self-end"/>
                                                    </Col>
                                                </Row>
                                            </Card.Footer>
                                        </Card>
                                    </a>
                                )
                            })}
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Section2;
