import Image from "next/image";
import slidesdata from "@/components/home/slidesdata";

const SlideItem = ({ index }) => {
    const item = slidesdata[index];

    return (
        <div className="md:flex space-x-6">
            <div className="homepageSlideTextSection">
                {item.mainText}
                <a href="/services" className="btn btn-lg bg-navy white bounce">
                    Read more <i className="fas fa-arrow-alt-circle-right"></i>
                </a>
            </div>
            <div className="homepageSlideImgSection">
                <Image src={item.imageUrl} alt="slide-img" width={400} height={300} />
            </div>
        </div>
    );
};

export default SlideItem;
