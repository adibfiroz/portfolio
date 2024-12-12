import React, { Fragment } from 'react'
import { twMerge } from 'tailwind-merge'

const SkillItem = ({
    skillItems,
    className,
    itemWrapperClassname,
}: {
    skillItems: {
        title: string,
        icon: string
    }[]
    className?: string
    itemWrapperClassname?: string
}) => {
    return (
        <div className={twMerge('flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]', className)}>
            <div className={twMerge('flex flex-none gap-6 pr-6 py-0.5', itemWrapperClassname)}>
                {[...new Array(2)].fill(0).map((_, index) => (
                    <Fragment key={index}>
                        {skillItems.map((item) => (
                            <div
                                key={item.title}
                                className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg text-white"
                            >
                                <img src={item.icon} width={30} height={30} alt={item.title} />
                                <span className="font-semibold">{item.title}</span>
                            </div>
                        ))}
                    </Fragment>
                ))}
            </div>
        </div>
    )
}

export default SkillItem