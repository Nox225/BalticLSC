import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const AppDetails = ({ token }) => {
    const { uid } = useParams()
    const [details, setDetails] = useState({})
    // console.log(uid)

    useEffect(() => {
      axios.get(`https://balticlsc.iem.pw.edu.pl/backend/app`, {
      params: {
        'appUid': `${uid}`
      },
      headers: {
          'accept': '*/*',
          'Authorization': `Bearer ${token}`
      }
      }).then(res => {
        console.log(res.data.data)
        setDetails(res.data.data)
      })
    }, [])

    return (
      <>
        <div className=' bg-white p-6 my-2 items-center mx-4 shadow-md rounded-md'>
          <div className='flex flex-row'>
            <img className='sm:w-[100px] sm:h-[100px] w-[80px] h-[80px] my-auto' src={details.icon} alt='App-icon' />
            <div className='ml-4'>
              <h2 className='text-2xl'>{details.name}</h2>
              <p className='text-gray-600'>{`Updated on ${details?.releases?.at(-1).date.slice(0, 10)}`}</p>
              <p className='text-gray-600'>{details.longDescription ? details.longDescription : details.shortDescription}</p>
            </div>
          </div>
        </div>

        <div className='p-2 rounded-md shadow-md bg-white mx-4 my-4'>
          <h1 className='text-xl text-[rgb(76,113,220)] mb-1 ml-2'>Releases</h1>
          <table className='bg-white items-center w-full table table-bordered'>
            <tr className='border'>
              <th>Version Name</th>
              <th>Release Date</th>
              <th>Description</th>
              <th>OpenSource</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
            {details?.releases?.map((release, i) => (
              <tr key={i} className='text-center border'>
                <td>{release.version}</td>
                <td>{release.date.slice(0, 10)}</td>
                <td>{release.shortDescription ? release.shortDescription : '-'}</td>
                <td>{release.openSource ? 'Yes' : 'No'}</td>
                <td>{release.status === 0 ? 'Created' : 'Approved'}</td>
                <td>-</td>
              </tr>
            ))}
          </table>
        </div>
      </>
    ) 
}

export default AppDetails