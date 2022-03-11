import { useState, useEffect } from 'react';

import './styles.css';

// Import utils
import { fetchApi } from '../../utils';

// Components
import NewTask from '../../Portal/NewTask';
import NavBar from '../NavBar';
import Table from '../Table';

// overview component
const OverView = () => {
  const [userList, setUserList] = useState([]);
  const [taskList, setTaskList] = useState([]);

  // User Api
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
      <Table taskList={taskList} userList={userList} />
    </div>
  );
};
export default OverView;
