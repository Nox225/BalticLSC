import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  app: any;
  searchTerm: string;
}

const AppCard = ({ app, searchTerm }: Props) => {
  if(app.name.toLowerCase().includes(searchTerm)){
    return (
      <div>
          <div className='flex flex-row p-4 bg-white shadow-md w-[500px] gap-4 m-2 rounded-md'>
              <img className='w-[100px] h-[100px]' src={app.icon} alt={app.name} />
              <div>
                  <Link className='text-[20px] text-[rgb(76,113,220)] hover:text-[rgb(28,58,148)]' to={`/app/${app.uid}`}>{app.name}</Link>
                  <p >{app.shortDescription}</p>
              </div>
          </div>
      </div>
    )
  }
}

export default AppCard