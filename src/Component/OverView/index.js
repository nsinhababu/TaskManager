import { useState, useEffect } from 'react';

import './styles.css';

// Import utils
import { fetchApi, mutateAPI } from '../../utils';

// Components.
import NavBar from '../NavBar';
import Table from '../Table';

// overview component
const OverView = () => {
  const [userList, setUserList] = useState([]);
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState({});
  const [showDelete, setShowDelete] = useState(false);

  const fetchTasks = () => {
    fetchApi({ url: 'list', method: 'get', reqObj: null }).then(({ tasks }) =>
      setTaskList(tasks)
    );
  };

  // User Api
  useEffect(() => {
    fetchApi({ url: 'listusers', method: 'get', reqObj: null }).then(
      ({ users }) => {
        setUserList(users);
      }
    );
  }, []);

  const handleDelete = (e) => {
    const formData = new FormData();
    formData.append('taskid', `${task.id}`);

    mutateAPI({ url: `delete`, formData }).then((res) => {
      if (res.status === 'success') {
        fetchTasks();
        setShowDelete(!showDelete);
      }
      if (res.status === 'error') {
        console.log('Show Toast for delete failed!');
      }
    });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className='overview'>
      <NavBar />
      <Table
        fetchTaskList={fetchTasks}
        taskList={taskList}
        userList={userList}
        handleDelete={handleDelete}
        task={task}
        setTask={setTask}
        showDelete={showDelete}
        setShowDelete={setShowDelete}
      />
    </div>
  );
};
export default OverView;
