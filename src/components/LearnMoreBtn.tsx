import { FC } from "react";
import { twMerge } from "tailwind-merge";
import ArrowRight from "@/assets/arrow-right.svg";

interface LearnMoreBtnProps {
    className?: string
};

export const LearnMoreBtn: FC<LearnMoreBtnProps> = (props: LearnMoreBtnProps) => {
    return (
        <button className={twMerge("btn btn-text gap-1", props.className)}>
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 inline-flex justify-center justify-item" />
        </button>
    );
};

export default LearnMoreBtn;