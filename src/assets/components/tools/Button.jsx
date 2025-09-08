import { Link } from 'react-router-dom'

const Button = ({ children, className }) => {
    return (
        <Link to="/contacts" className={`neu-protrude dark:neu-protrude w-max p-2 cursor-pointer ` + className}>
            {children}
        </Link>
    )
}

export default Button