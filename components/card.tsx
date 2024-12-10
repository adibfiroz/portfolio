import React, { ComponentPropsWithRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Card = ({
    className,
    children,
    ...other
}: ComponentPropsWithRef<"div">) => {
    return (
        <div
            className={twMerge("bg-gray-800 rounded-3xl overflow-hidden relative z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none p-6", className)}
            {...other}
        >
            <div className=' absolute inset-0 -z-10 opacity-5'
                style={{
                    backgroundImage: `url('img/grain.jpg')`
                }}
            ></div>
            {children}
        </div>
    )
}

export default Card