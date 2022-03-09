import { useState } from 'react';
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

  return (
    <>
      <NavBar />
      <NewTask newTaskWindowHandler={newTaskWindowHandler} addTask={addTask} />

      <Table newTaskWindowHandler={newTaskWindowHandler} addTask={addTask} />
    </>
  );
};
export default OverView;
