import { FC, ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

export type ButtonTypes = {
    label: string,
    onClick: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button:FC<ButtonTypes> = ({label, onClick, className, ...rest}) => {
    return (
        <button 
            onClick={onClick} 
            className={clsx('button', className)}
            {...rest}
        >
            {label}
        </button>
    )
}