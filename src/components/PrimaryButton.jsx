import { Link } from 'react-router-dom'
import '../assets/styles/primaryButton.css'

const PrimaryButton = (props) => {
    const { to, text, className } = props;
    if (to) {
        return (
            <Link to={to} 
                className={`primary-button ${className ? className : ""}`}>
                {text}
            </Link>            
        )
    } else {
        return (
            <button 
                className={`primary-button ${className ? className : ""}`}>
                {text}
            </button>
        )
    }
}

export default PrimaryButton