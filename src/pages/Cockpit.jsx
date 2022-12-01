import React, { Component } from 'react'
import axios from 'axios'
import { CockpitApp } from '../components'

class Cockpit extends Component {
    constructor(props){
        super(props)
        this.state = {
          apps : [],
          tasks : []
        }
    }

    componentDidMount() {
      let apps = []
      let tasks = []

      axios.post('https://balticlsc.iem.pw.edu.pl/backend/task/list',
      '{}',
      {
          headers: {
              'accept': '*/*',
              'Content-Type': 'application/json-patch+json',
              'Authorization': `Bearer ${this.props.token}`
          }
      }
      ).then(res => {
        // console.log(res)
        this.setState({tasks : res.data.data})
        // console.log(this.state.tasks)
        tasks = res.data.data
      })
             
      axios.get('https://balticlsc.iem.pw.edu.pl/backend/app/shelf', {
            headers: {
                'accept': '*/*',
                'Authorization': `Bearer ${this.props.token}`,
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(res => {
            apps = res.data.data

            this.setState({apps : mergeAppsWithTasks()})
            console.log(this.state.apps)
          })
        
      function mergeAppsWithTasks(){
        for(let i=0; i<apps.length; i++){
          const task = {
            taskList: []
          }
          Object.assign(apps[i], task)
          for(let j=0; j<tasks.length; j++){
            if(apps[i].uid === tasks[j].releaseUid){
              apps[i].taskList.push(tasks[j])
            }
          }
        }
        return apps
      }
    }

  render() {
    return (
      <div>
        {this.state.apps.map((app, i) => (
          <CockpitApp key={i} app={app} />
          // <div key={i}>
          //   <h2>{app.unit.name}</h2>
            
          //   {app.taskList[0]?.parameters?.taskName != undefined ? app.taskList[0].parameters.taskName : ''}
          //   {app.taskList[1]?.parameters?.taskName != undefined ? app.taskList[1].parameters.taskName : ''}
          // </div>
        ))}
        {/* <button onClick={(e) => this.mergeAppsWithTasks(e)}>Fetch</button> */}
      </div>
      
    )
  }
}

export default Cockpit
