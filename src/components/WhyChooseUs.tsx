"use client";
import musicSchoolContent from "../data/musicChooseData";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const WhyChooseUs = () => {

    // console.log(content);
    
    return (
        <div>
            <StickyScroll content={musicSchoolContent}/>
        </div>
    )
}

export default WhyChooseUs;