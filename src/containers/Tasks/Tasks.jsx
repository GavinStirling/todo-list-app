import React from 'react'
import "./Tasks.scss"

import AddTask from '../../components/AddTask/AddTask'
import Task from '../../components/Task/Task'

const Tasks = () => {
  return (
    <div className='tasks'>
    <AddTask />
    <Task taskName="ASDF" />
    </div>
  )
}

export default Tasks