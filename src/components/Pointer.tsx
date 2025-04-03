import { MousePointer } from 'lucide-react'
import React from 'react'
import { twMerge } from 'tailwind-merge'


interface Props {
    name: string,
    color?: "red" | "blue"
}


const Pointer: React.FC<Props> = ({ name, color = "blue" }) => {
  return (
     <div className='relative'>
        <MousePointer className='text-white'/>
        <div className='absolute top-full left-full'>
            <div 
                className={twMerge('inline-flex rounded-full font-bold text-sm bg-blue-500 px-2 rounded-tl-none', color === 'red' && 'bg-red-500')}
            >
                {name}
            </div>
        </div>
     </div>
  )
}

export default Pointer
