import ActionButton from '../ui/action-button';

const Toolbar = ({ titleText }) => {
    return (
        <div className="toolbar">
            <div className="row-8">
                <ActionButton imageSrc="../../assets/images/icon/caret-left.svg" />
                {titleText && <h3 className="toolbar-title">{titleText}</h3>}
            </div>
            <div className="row-4">
                <ActionButton imageSrc="../../assets/images/icon/star.svg" />
                <ActionButton imageSrc="../../assets/images/icon/share.svg" />
                <ActionButton isDropdown={true} label="3" imageSrc="../../assets/images/icon/paperclip.svg" />
            </div>
        </div>
    );
}

export default Toolbar;