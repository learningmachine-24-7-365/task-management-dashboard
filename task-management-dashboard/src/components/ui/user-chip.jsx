const UserChip = ({ profile, label }) => {
    return (
        <div className="user-chip row-4">
            <img className="profile" src={profile} altText={label} />
            {label}
        </div>
    );
}

export default UserChip;