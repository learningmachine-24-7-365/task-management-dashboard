import TabButton from '../ui/tab';
import Strings from '../../strings';
import Button from '../ui/button';

const Tabbar = ({ activeTab, handler }) => {
    return (
        <div className="tabbar">
            <div className="tab-list">
                <TabButton id="tabToDo" activeTab={activeTab} onClick={() => handler('tabToDo')} label={Strings.tabLabel.toDo} count={3} />
                <TabButton id="tabComment" activeTab={activeTab} onClick={() => handler('tabComment')} label={Strings.tabLabel.comment} count={2} />
                <TabButton id="tabActivity" activeTab={activeTab} onClick={() => handler('tabActivity')} label={Strings.tabLabel.activity} />
            </div>
            {/* activetab이 tabToDo일 때만 '할 일 추가' 버튼을 보여준다. */}
            {/* DetailPage에서 넣은 activeTab의 값이 예를 들어 tabToDo일 때만 버튼을 보여주려면 어떻게 해야 할까? */}
            {/* activeTab의 값이 tabToDo일 때만 버튼을 보여주면 되지 않을까? */}
            {activeTab === 'tabToDo' ?
                <Button isActionButton={true} imageSrc="../../assets/images/icon/plus.svg" label="할 일 추가" />
                :
                <></>
            }
        </div>
    );
}

export default Tabbar;