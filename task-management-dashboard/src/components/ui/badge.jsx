const Badge = ({ isStatus, label, color }) => {
    if (isStatus) {
        return (
            <span className="badge row-4" style={{color: `var(--${color}-500)`, backgroundColor: `var(--${color}-100)`}}>
                <span className="badge-indicator" style={{backgroundColor: `var(--${color}-500)`}} />
                {label}
            </span>
        );
    }
    return (
        color ?
        <span className="badge" style={{color: `var(--${color}-500)`, backgroundColor: `var(--${color}-100)`}}>
            {label}
        </span> :
        <span className="badge">
            {label}
        </span>
    );

    
}

export default Badge;