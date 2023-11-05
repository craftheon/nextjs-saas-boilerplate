import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'primary' | 'second' | 'default'
  size?: 'lg' | 'sm' | 'default'
}

const Button: React.FC<ButtonProps> = function ({
  theme = 'default',
  size = 'default',
  className = '',
  children,
  ...rest
}) {
  // size different
  const sizeMap = {
    lg: 'px-6 py-3.5',
    sm: 'px-3 py-1.5 text-sm',
    default: 'px-4 py-2'
  }
  // color different
  const themeMap = {
    primary: 'text-white bg-primary-600 hover:bg-primary-700 active:shadow-lg',
    second: 'text-gray-700 border hover:border-primary-600 active:shadow-lg',
    default: 'text-primary-600 bg-primary-50 hover:bg-primary-100 active:bg-primary-200',
  }
  return (
    <button className={`${sizeMap[size]} ${themeMap[theme]} rounded-lg duration-150 ${className}`} {...rest}>{children}</button>
  )
}

export default Button
