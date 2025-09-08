import React from 'react'

const Textarea = ({id, required}) => {
    return (
        <textarea
            id={id}
            className="form-control inset-0 neu-dent dark:neu-dent bg-transparent w-full"
            required={required}
        />
    )
}

export default Textarea