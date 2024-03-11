import React from "react";
import "./Courses.css";
import {FaStar} from "react-icons/fa6";

const Courses = () => {
    const cardinfo = [
        {
            img: "https://coursera-course-photos.s3.amazonaws.com/5f/0794988ad64cc5adbb661c767e891f/Go-Beyond-the-Numbers-Translate-Data-into-Insights.png",
            subT: "",
            title: "Go Beyond the Numbers: Translate Data into Insights",
            desc: "In this course, you’ll learn how to find the story within data and tell that story in a compelling way",
            btn_text: "اقرأ المزيد",
            link: "https://www.coursera.org/programs/m-hd-ldr-l-m-brnmj-tjryby-8qqdt/learn/go-beyond-the-numbers-translate-data-into-insight?authProvider=cgbqatarstaging",
        },
        {
            img: "https://coursera-course-photos.s3.amazonaws.com/62/36b5b68e1c469a8fcde93a982629a6/PowerPoint-01.png",
            subT: "",
            title: "Work Smarter with Microsoft PowerPoint",
            desc: "This course is intended for learners with some experience using Microsoft Windows, who are seeking to build presentation skills with Microsoft PowerPoint",
            btn_text: "اقرأ المزيد",
            link: "https://www.coursera.org/programs/m-hd-ldr-l-m-brnmj-tjryby-8qqdt/learn/microsoft-powerpoint-work-smarter?authProvider=cgbqatarstaging",
        },
        {
            img: "https://coursera-course-photos.s3.amazonaws.com/c6/8163dac7d74214a1a3c64e0e0964c0/Course-3.png",
            subT: "",
            title: "Extract, Transform and Load Data in Power BI",
            desc: "In this course, you will learn the process of Extract, Transform and Load or ETL. You will identify how to collect data from and configure multiple sources in Power BI and prepare and clean data using Power Query",
            btn_text: "اقرأ المزيد",
            link: "https://www.coursera.org/programs/m-hd-ldr-l-m-brnmj-tjryby-8qqdt/learn/extract-transform-and-load-data-in-power-bi?authProvider=cgbqatarstaging",
        },
        {
            img: "https://coursera-course-photos.s3.amazonaws.com/40/8dbf10ac1911e68f5119007c0cf554/GettyImages-547015901-Thumbnail.jpg",
            subT: "",
            title: "The Strategy of Content Marketing",
            desc: "In this course, you will learn the core strategies content marketers use to acquire and retain customers profitably",
            btn_text: "اقرأ المزيد",
        },
        {
            img: "https://coursera-course-photos.s3.amazonaws.com/3f/12474d620f49b1ac45032b13b00f37/gww_wordsandwordorder_V1.jpg",
            subT: "",
            title: "Writing and Editing: Word Choice and Word Order",
            desc: "This course will teach you how to use your written words to become more persuasive. You’ll learn creative ways to use syntax, effective techniques for telling stories, and a clever method for arranging a complex series of information",
            btn_text: "اقرأ المزيد",
            link: "https://www.coursera.org/programs/m-hd-ldr-l-m-brnmj-tjryby-8qqdt/learn/content-marketing?authProvider=cgbqatarstaging",
        },
        {
            img: "https://coursera-course-photos.s3.amazonaws.com/9e/99993ca1e24d5094be9adf2277c568/Collaborate-Effectively.jpg",
            subT: "",
            title: "Collaborate Effectively for Professional Success",
            desc: "This short course will help you develop the foundational soft skills to enhance the way you collaborate with your team, others in your company, business partners, and clients",
            btn_text: "اقرأ المزيد",
            link: "https://www.coursera.org/programs/m-hd-ldr-l-m-brnmj-tjryby-8qqdt/learn/collaborate-effectively?authProvider=cgbqatarstaging&source=search",
        },
    ];

    return (
        <div className="relative z-10 py-24 c__bg__img">
            <div className="flex  justify-around space-x-4">
                <img className="relative z-10 hidden md:block h-[599px]"
                     src="https://jaltaie.github.io/qcsd4/images/boxes_left.png"
                     alt=""
                />
                <div className="flex flex-col md:flex-row justify-between space-x-6">

                    <div className="grid grid-cols-3 gap-8 mt-8">
                    {cardinfo.map((item, index) => (
                        <div key={index} className="course__box flex flex-col justify-between shadow-md">
                            <img className="h-[154px]" src={item.img} alt=""/>
                            <div className="px-[15px] pb-[14px] h-[285px]">
                                <div className="flex items-center justify-end">
                                    <p className="text-right mb-2 mt-4">{item.title}</p>
                                    <div className="bg-primary w-2 h-2 ml-2 mt-1"></div>
                                </div>
                                <div className="border__bottom mb-2"></div>
                                <h1 className="text-right text-2xl font-black text-black mb-2 mt-2">
                                    {item.subT}
                                </h1>
                                <p className="text-right mb-8 h-[100px]">{item.desc}</p>

                            </div>
                            <div className="py-4 bg-[#eef0ef] px-[15px]">
                                <div className="flex space-x-2">
                                    <FaStar className="text-[#fdc02d]"/>
                                    <FaStar className="text-[#fdc02d]"/>
                                    <FaStar className="text-[#fdc02d]"/>
                                    <FaStar className="text-[#fdc02d]"/>
                                    <FaStar className="text-[#fdc02d]"/>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
                <img className="relative z-10 hidden md:block h-[599px]"
                     src="https://jaltaie.github.io/qcsd4/images/boxes_right.png"
                     alt=""
                />
            </div>
        </div>
    );
};

export default Courses;
