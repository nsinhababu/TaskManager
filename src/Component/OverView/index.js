import { useState, useEffect } from 'react';

import './styles.css';

// Import utils
import { fetchApi } from '../../utils';

// Components
import NewTask from '../NewTask';
import NavBar from '../NavBar';
import Table from '../Table';

const OverView = () => {
  // const [task, setTask] = useState(false);
  const [userList, setUserList] = useState([]);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    fetchApi('listusers').then(({ users }) => {
      setUserList(users);
    });
  }, []);

  // task api
  useEffect(() => {
    fetchApi('list').then(({ tasks }) => setTaskList(tasks));
  }, []);

  return (
    <div className='overview'>
      <NavBar />
      <NewTask userList={userList} />

      <Table taskList={taskList} />
    </div>
  );
};
export default OverView;
