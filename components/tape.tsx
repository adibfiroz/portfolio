import React, { Fragment } from 'react'

const softSkills = [
    "Problem-solving",
    "Attention to detail",
    "Time management",
    "Adaptability",
    "Critical thinking",
    "Team Collaboration",
    "Effective communication",
    "Planning",
    "Agile",
    "Maintainability",
]

const TapeSection = () => {
    return (
        <div className='pt-10 pb-32 overflow-x-clip'>
            <div className='blue-gradient -rotate-3 -mx-1'>
                <div className='flex  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
                    <div className='flex flex-none gap-4 py-3 animate-move-left [animation-duration:30s]'>
                        {[...new Array(2)].fill(0).map((_, index) => (
                            <Fragment key={index}>
                                {softSkills.map((skill) => (
                                    <div key={skill} className='inline-flex gap-4 items-center'>
                                        <span className=' text-stone-800 uppercase font-extrabold text-sm'>{skill}</span>
                                        <img src="img/star-cross.svg" width={16} height={16} className='-rotate-12' alt="" />
                                    </div>
                                ))}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TapeSection