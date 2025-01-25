'use client'
import featuredWebinars from "@/data/webinarData";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const UpcomingWebinars = () => {
    return (
        <div className="p-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h1 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
                        FEATURED WEBINARS
                    </h1>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        Enhance Your Musical Journey
                    </p>
                </div>
                <div className="mt-10">
                <HoverEffect items={featuredWebinars.map((webinar,index)=>(
                    {
                        key: index,
                        title:webinar.title,
                        description:webinar.description,
                        link:'/'
                    }
                ))} />
                </div>
                <div className="mt-8 text-center">
                    <Link href={'/'}>
                    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-md font-medium text-white backdrop-blur-3xl">
                        View All Webinars
                        </span>
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UpcomingWebinars;