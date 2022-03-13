import { useState, useEffect } from 'react';

import './styles.css';

// Import utils
import { fetchApi } from '../../utils';

// Components
import NavBar from '../NavBar';
import Table from '../Table';

// overview component
const OverView = () => {
  const [userList, setUserList] = useState([]);
  const [taskList, setTaskList] = useState([]);

  // User Api
  useEffect(() => {
    fetchApi({ url: 'listusers', method: 'get', reqObj: null }).then(
      ({ users }) => {
        setUserList(users);
      }
    );
  }, []);

  // task api
  const fetchTaskList = () => {
    fetchApi({ url: 'list', method: 'get', reqObj: null }).then(({ tasks }) =>
      setTaskList(tasks)
    );
  };
  useEffect(() => {
    fetchTaskList();
  }, []);

  return (
    <div className='overview'>
      <NavBar />
      <Table
        fetchTaskList={fetchTaskList}
        taskList={taskList}
        userList={userList}
      />
    </div>
  );
};
export default OverView;
