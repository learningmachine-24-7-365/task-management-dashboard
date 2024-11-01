const ActionButton = ({ onClick, imageSrc, altText, isDropdown, label }) => {
    return (
        <>
            {isDropdown ? 
                <button onClick={onClick} className="action-button row-4 dropdown">
                    {imageSrc && <img src={imageSrc} altText={altText} />}
                    <span className="label">{label}</span>
                    <img src="../../assets/images/icon/caret-down-16px.svg" />
                </button>
                :
                <button onClick={onClick} className="action-button row-4">
                    {imageSrc && <img src={imageSrc} altText={altText} />}
                </button>
            }
        </>
    );
}

export default ActionButton;