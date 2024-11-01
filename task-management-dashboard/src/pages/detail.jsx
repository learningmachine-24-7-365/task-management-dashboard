import { useState, useEffect } from 'react';
import Toolbar from '../components/containers/toolbar';
import PageInfoRow from '../components/item/page-info-row';
import Tabbar from '../components/containers/tabbar';
import TabActivity from '../components/fragments/tab-activity';
import TabToDo from '../components/fragments/tab-to-do';
import TabComment from '../components/fragments/tab-comment';
import CommentBar from '../components/containers/comment';

const DetailPage = () => {
  const [task, setTask] = useState(null);
  const [activeTab, setActiveTab] = useState('tabToDo');

  useEffect(() => {
    // json 파일은 src가 아닌, public 파일에 위치시켜야 브라우저에서 로딩할 수 있음. 
    // public 디렉토리에 있는 파일은 root 패스에 있는 걸로 여겨짐. 
    // 즉, public 디렉토리에 있는 파일은 앞에 'public/'을 붙이지 않아도 됨.

    fetch('/task-data.json')
      .then((response) => response.json())
      .then((data) => setTask(data.task))
      .catch((error) => console.error(error));
  }, [])

  // 로딩화면 디자인할 것
  if (!task) return <div>Loading</div>

  return (
    <div className="wrapper">
      <Toolbar />
      <div className="content-area">
        <h1 className="page-title">
          {task.title}
        </h1>
        
        <div className="page-info-area">
          {task.taskInfo.map((taskInfo) => 
            <PageInfoRow type={taskInfo.type} key={taskInfo.key} icon={taskInfo.icon} label={taskInfo.label} value={taskInfo.value} />
          )}
        </div>
        {/* activeTab prop의 값은 최초로 tabToDo다. */}
        {/* 탭을 눌렀을 때의 이벤트는 handler prop에서 받고 있다. */}
        {/* activeTab의 값은 Tabbar로 흘러 들어간 뒤, TabButton 컴포넌트로 흘러 들어가 id에 따라 스타일을 달리하는 방식으로 처리된다. */}
        {/* handler의 콜백함수는 setActiveTab으로, 똑같이 Tabbar로 흘러 들어간 다음, 'tabToDo', 'tabActivity' 등으로 값이 바뀌게 하는 것이다. */}
        {/* 그러면, tabbar.jsx에서 activeTab이 tabToDo일 때만 버튼을 보여주면 되지 않을까?  */}
        <Tabbar activeTab={activeTab} handler={setActiveTab} />
        <div className="tab-content">
          {activeTab === 'tabToDo' && <TabToDo />}
          {activeTab === 'tabComment' && <TabComment />}
          {activeTab === 'tabActivity' && <TabActivity />}
        </div>
      </div>
      {activeTab === 'tabComment' ? 
        <CommentBar />
        :
        <></>
      }
    </div>
  )
}
  
export default DetailPage