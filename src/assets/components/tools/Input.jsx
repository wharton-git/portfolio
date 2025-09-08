import React from 'react'

const Input = ({ type, id, required }) => {
    return (
        <input
            type={type}
            id={id}
            className="form-control inset-0 neu-dent dark:neu-dent bg-transparent w-full"
            required={required}
        />
    )
}

export default Input
