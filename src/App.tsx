import React from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';

import { Navbar, Sidebar, CockpitApp } from './components';
import { Demo, Cockpit, DevShelf, Store, DataShelf, Auth, AppDetails } from './pages';

const App = () => {
    const initialState = {
      fullName: '',
      username: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
      avatarURL: ''
  }

  const [form, setForm] = useState(initialState)
  const [authToken, setAuthToken] = useState(true)
  const [token, setToken] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  
  if(!authToken) return <Auth setAuthToken={setAuthToken} form={form} setForm={setForm}/>

  return (
    <div className="relative flex">
      <Sidebar setAuthToken={setAuthToken} />
      <div className="flex-1 flex flex-col background">
        <Navbar username={form.username} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="px-6 h-[calc(100vh)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/store" element={<Store token={token} setToken={setToken} searchTerm={searchTerm} />} />
              <Route path="/cockpit" element={<Cockpit token={token} />} />
              <Route path="/data-shelf" element={<DataShelf />} />
              <Route path="/dev-shelf" element={<DevShelf />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/app/:uid" element={<AppDetails token={token} />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
