const Button = ({ style, onClick,  label, imageSrc }) => {
    return (
        <button onClick={onClick} className={`action-button row-4 dropdown ${style}`}>
            {imageSrc && <img src={imageSrc} altText={label} />}
            <span className="label">{label}</span>
        </button>
    )
}

export default Button;