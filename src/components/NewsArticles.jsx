import React from "react";

// import twoStars from "../images/vector_smart_object.png";
// import zeroStars from "../images/vector_smart_object_2.png";
// import oneStars from "../images/vector_smart_object_3.png";
// import fourStars from "../images/vector_smart_object_6.png";
// import fiveStars from "../images/rating.png";
// import threeStars from "../images/vector_smart_object_5.png";

// import bgTexture from "../images/bg_texture2.png"


const NewsArticles = () => {

    const bgTextureStyle = {
        backgroundImage: `url(${bgTexture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const cardsData = [
        {
            id: 1,
            imageUrl: "https://d15cw65ipctsrr.cloudfront.net/4b/bca2a4dc43408497819f5b976e14e9/302050841.jpeg",
            title: 'AWS Cloud Technology Consultant Professional Certificate',
            smallImageUrl: fiveStars,
            link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/professional-certificates/aws-cloud-technology-consultant?authProvider=cgbqatar',
            description: 'Start a career as a Cloud Technology Consultant . In this program, you’ll learn in-demand skills to advise clients on the use of cloud technology to meet business objectives. No degree or experience required',
        },
        {
            id: 2,
            imageUrl: "https://d15cw65ipctsrr.cloudfront.net/8c/e0f2fd124b441fa8d9aa68fdab2167/Marketing-Image.png",
            title: 'Microsoft Power BI Data Analyst Professional Certificate',
            smallImageUrl: fiveStars,
            link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/professional-certificates/microsoft-power-bi-data-analyst?authProvider=cgbqatar',
            description: 'Launch your career as a Power BI analyst. Learn the in-demand business intelligence skills that will have you job-ready in less than 5 months. No prior experience required to get started.',
        },
        {
            id: 3,
            imageUrl: "https://coursera-course-photos.s3.amazonaws.com/48/cdef7ad117457bb1d2712791bc54e2/shutterstock_1698393829.jpg",
            title: 'Leadership Skills',
            smallImageUrl: fiveStars,
            link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/leadershipskills?authProvider=cgbqatar',
            description: 'This course provides a foundation for leadership practice and aims to take you on a journey of self-discovery. ',
        },
        {
            id: 4,
            imageUrl: "https://coursera-course-photos.s3.amazonaws.com/99/822afcb77f4e8dadd2ea897dedf267/Logo_Santos_SWBT.png",
            title: 'The Science of Well-Being for Teens',
            smallImageUrl: fiveStars,
            link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/the-science-of-well-being-for-teens?authProvider=cgbqatar',
            description: 'In this course, you will explore what the field of psychology teaches us about how to be happier, how to feel less stressed, and how to thrive in high school and beyond. ',
        },
        {
            id: 5,
            imageUrl: "https://d15cw65ipctsrr.cloudfront.net/8c/b75571d8ad4d24bddff436beab0bad/DL_Square_Banner_Coursera_800x800.png",
            title: 'Mathematics for Machine Learning and Data Science Specialization',
            smallImageUrl: fiveStars,
            link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/specializations/mathematics-for-machine-learning-and-data-science?authProvider=cgbqatar',
            description: 'Mathematics for Machine Learning and Data Science is a beginner-friendly Specialization where you’ll learn the fundamental mathematics toolkit of machine learning: calculus, linear algebra, statistics, and probability.',
        },
        {
            id: 6,
            imageUrl: "https://d15cw65ipctsrr.cloudfront.net/df/ccc92936344beb9c95b5cfedd08c69/Program_Logo_5.png",
            title: 'HRCI Human Resource Associate Professional Certificate',
            smallImageUrl: fiveStars,
            link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/professional-certificates/hrci-human-resource-associate?authProvider=cgbqatar',
            description: 'Launch your career in Human Resources. In this program, you’ll learn in-demand skills for a career as an Human Resource Associate. No degree or prior experience needed.',
        }
    ];

    return (
        <div style={bgTextureStyle} className="flex mb-16 flex-col" id="new">
            <div className="flex flex-col items-center p-5 bg-[#3EAF98]">
                <h3 className="text-white text-6xl font-bold">جديدنا من الدورات</h3>
                <h4 className="mt-5 text-3xl font-extralight">تزويد الموظفين بأحدث المهارات التي تساهم في تعزيز الكفاءة
                    والابتكار في الأداء الوظيفي.</h4>
            </div>

            {/* Cards Section */}
            <div className="flex justify-around">
                <img className="relative max-h-[600px] z-10 hidden md:block"
                     src="https://jaltaie.github.io/qcsd4/images/boxes_left.png"
                     alt=""
                />
                <div className="mt-20 flex flex-col items-center">
                    <div className="grid grid-cols-3 gap-8 mt-8">
                        {cardsData.map((card) => (
                            <div
                                key={card.id}
                                className="bg-white rounded-md shadow-md h-[465px] w-[317px] flex flex-col justify-between"
                            >
                                <img
                                    src={card.imageUrl}
                                    alt={`${card.title}`}
                                    className="w-full object-cover rounded-t-md h-[154px]"
                                />
                                <div className="p-4 align-item-top h-[260px]">
                                    <h4 className="text-end text-xl font-semibold mb-2">{card.title}</h4>
                                    <div className="flex justify-end">
                                        <img
                                            src={card.smallImageUrl}
                                            alt={`${card.title}`}
                                            className="h-[15px] mb-2"
                                        />
                                    </div>
                                    <p className="text-end text-gray-700">{card.description}</p>
                                </div>
                                <a  href="javascript:;"  // {card.link}
                                    className="flex justify-end bg-[#F9F9F9] text-[#59BCAA] p-3 rounded-b-md font-bold">
                                    سجل الآن
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <img className="relative max-h-[600px] z-10 hidden md:block"
                     src="https://jaltaie.github.io/qcsd4/images/boxes_left.png"
                     alt=""
                />
            </div>
        </div>
    );
};
export default NewsArticles;