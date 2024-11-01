import Badge from "./badge";

const TabButton = ({ id, activeTab, onClick, label, count }) => {
    return (
        <div className="tab-button" onClick={onClick}>
            <span className={activeTab === id ? 'tab-label-active' : 'tab-label'}>
                {label}
                {count ?
                    <Badge label={count} color="blue" />
                    : <></>
                }
            </span>
            <span className={activeTab === id ? 'tab-indicator-active' : 'tab-indicator'} />
        </div>
    )
}

export default TabButton;