import { useState, useEffect } from 'react';

// Import utils
import { fetchApi } from '../../utils';

// Components
import NewTask from '../NewTask';
import NavBar from '../NavBar';
import Table from '../Table';

const OverView = () => {
  let [addTask, setAddTask] = useState(false);

  const newTaskWindowHandler = () => {
    setAddTask(!addTask);
    console.log(addTask);
  };
  let [userList, setUserList] = useState([]);

  useEffect(() => {
    fetchApi('listusers').then(({ users }) => {
      setUserList(users);
    });
  }, []);
  // console.log(userList);

  return (
    <>
      <NavBar />
      <NewTask
        userList={userList}
        newTaskWindowHandler={newTaskWindowHandler}
        addTask={addTask}
      />

      <Table newTaskWindowHandler={newTaskWindowHandler} addTask={addTask} />
    </>
  );
};
export default OverView;
