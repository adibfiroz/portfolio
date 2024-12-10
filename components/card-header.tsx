import React from 'react'
import { twMerge } from 'tailwind-merge';

const CardHeader = ({
    title,
    desc,
    className,
}: {
    title: string;
    desc: string;
    className?: string
}) => {
    return (
        <div className={twMerge("flex flex-col", className)}>
            <div className="inline-flex items-center gap-2">
                <img src="img/sparkle.png" width={20} height={20} alt="" />
                <h3 className=" text-3xl">{title}</h3>
            </div>
            <p className="text-sm lg:text-base max-w-xs text-white/60 mt-2">
                {desc}
            </p>
        </div>
    )
}

export default CardHeader