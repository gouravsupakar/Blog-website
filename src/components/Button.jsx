import React from 'react'

const Button = ({
  children,
  type = 'submit',
  bgColor = 'bg-blue-600',
  textColor = 'text-white',
  className = '',
  ...props
}) => {
  return (
   <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className} hover:bg-blue-900`} {...props}>
    {children}
   </button>
  )
}

export default Button
