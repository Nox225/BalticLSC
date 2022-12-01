import React, { Component } from 'react'

class CockpitApp extends Component {
    constructor(props){
        super(props)
    }

  render() {
    return (
      // {this:props.app.name}
      // {this.props.taskList.map((task, i) => (
      //   {task.taskName}
      // ))}
      <div>
        {this.props.app.unit.name}
        {this.props.app?.taskList?.map((task, i) => (
          <div className='text-gray-600'>{task.parameters.taskName != undefined ? task.parameters.taskName : ''}</div>
          // 
          // <div>taks</div>
        ))}
      </div>
    )
  }
}

export default CockpitApp
