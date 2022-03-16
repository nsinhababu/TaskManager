const TableHead = () => {
  return (
    <div className='task__list-head'>
      <div className='task-description'>Task</div>
      <div className='task-description'>Assigned to</div>
      <div className='task-description'>Created On</div>
      <div className='task-description'>Due Date</div>
      <div className='task-description'>Priority</div>
      <div className='task-description'>Actions</div>
    </div>
  );
};
export default TableHead;
