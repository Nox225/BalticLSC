import { useEffect, useState } from 'react'
import axios from 'axios'
import { AppCard } from '../components'

const Store = ({ token, setToken, searchTerm }) => {

    const [appShelf, setAppShelf] = useState([])

    useEffect(() => {
        axios.post("https://balticlsc.iem.pw.edu.pl/backend/Login", 
            {"userName": "demo", "password": "BalticDemo"}, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }})
          .then(res => {
            console.log(res.data.data.token);
            setToken(res.data.data.token)
          }) 
        axios.post('https://balticlsc.iem.pw.edu.pl/backend/app/list', {"onlyApps": "true","onlyLastRelease": "false"}, {
            headers: {
                'accept': '*/*',
                'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(res => {
            console.log(res.data.data)
            setAppShelf(res.data.data)
        })
    }, [])


    return (
        <div className='flex flex-row flex-wrap justify-center'>
            {appShelf.map((item) => {
                if(!item.name.includes('Agris Test') &&
                   !item.name.includes('Added new app') &&
                   !item.name.includes('Demo') &&
                   !item.name.includes('My new demo mobile application') &&
                   !item.name.includes('Test') &&
                   !item.name.includes('ljkl') &&
                   !item.name.includes('demo') &&
                   item.uid != "73ed8959-84c8-4ee0-a4a6-fa6ca64c89a3")
                    return (
                        <AppCard key={item.uid} app={item} searchTerm={searchTerm} />
                    )
            })}
        </div>
    )
}

export default Store;
