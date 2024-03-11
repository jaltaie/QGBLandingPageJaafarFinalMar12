// import background from "../images/background_image.jpg";
// import title_hero from "../images/vector_smart_object_10.png";

const Hero = () => {
    const heroStyle = {
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
  
    return (
      <div style={heroStyle} className="flex h-[332px]">
        <div className="flex flex-col items-end m-1banner container">
            <img src={title_hero} alt="title HomePage" className="h-[150px]" />
            <p className="mt-10 text-[#343737] text-right max-w-[700px]">
            تنمية وتطوير قدرات العنصر البشري بالأجهزة الحكومية، بتوفير ما يحتاجونه من التدريب لتحقيق الاكتفاء الوظيفي، إضافة إلى المساهمة بإطلاق القدرات الإبداعية والتي تقود إلى بناء قوة عمل وطنية ذات إنتاجية عالية.
            </p>
        </div>
      </div>
    );
  };
  
  export default Hero;