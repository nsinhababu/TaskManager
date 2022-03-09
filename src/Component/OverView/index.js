import { useState, useEffect } from 'react';

// import utils
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

  useEffect(() => {
    const usersList = fetchApi('listusers');
    console.log(
      '🚀 ~ file: index.js ~ line 21 ~ useEffect ~ usersList',
      usersList
    );
  }, []);

  return (
    <>
      <NavBar />
      <NewTask newTaskWindowHandler={newTaskWindowHandler} addTask={addTask} />

      <Table newTaskWindowHandler={newTaskWindowHandler} addTask={addTask} />
    </>
  );
};
export default OverView;
