import Badge from '../ui/badge'
import UserChip from '../ui/user-chip'

const PageInfoRow = ({ type, icon, label, value }) => {
    switch(type) {
        case "status":
            return (
                <div className="page-info-row row-4">
                    <div className="page-info-record row-4">
                        <img className="page-info-icon" src={icon} />
                        <span className="label">{label}</span>
                    </div>
                    <div className="page-info-value">
                        <span className="status">{value}</span>
                    </div>
                </div>
            );
        case "priority":
            return (
                <div className="page-info-row row-4">
                    <div className="page-info-record row-4">
                        <img className="page-info-icon" src={icon} />
                        <span className="label">{label}</span>
                    </div>
                    <div className="page-info-value">
                        <Badge isStatus={true} label={value.label} color={value.color} />
                    </div>
                </div>
            );
        case "tag":
            return (
                <div className="page-info-row row-4">
                    <div className="page-info-record row-4">
                        <img className="page-info-icon" src={icon} />
                        <span className="label">{label}</span>
                    </div>
                    <div className="page-info-value">
                        {value.map((tag) => 
                            <Badge isStatus={false} label={tag} />
                        )}
                    </div>
                </div>
            );
        case "user":
            return (
                <div className="page-info-row row-4">
                    <div className="page-info-record row-4">
                        <img className="page-info-icon" src={icon} />
                        <span className="label">{label}</span>
                    </div>
                    <div className="page-info-value">
                        {value.map((user) => 
                            <UserChip profile={user.profile} label={user.label} />
                        )}
                    </div>
                </div>
            )
        default:
            return (
                <div className="page-info-row row-4">
                    <div className="page-info-record row-4">
                        <img className="page-info-icon" src={icon} />
                        <span className="label">{label}</span>
                    </div>
                    <div className="page-info-value">
                        <span className="task-value">{value}</span>
                    </div>
                </div>
            );
    }
    
}

export default PageInfoRow;