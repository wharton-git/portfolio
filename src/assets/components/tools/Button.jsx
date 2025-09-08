import React from 'react'

const Button = ({ children, className }) => {
    return (
        <div className={`neu-protrude dark:neu-protrude w-max cursor-pointer ` + className}>
            {children}
        </div>
    )
}

export default Button