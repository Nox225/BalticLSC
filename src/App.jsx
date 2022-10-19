import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';

import { Navbar, Sidebar } from './components';
import { Demo, Cockpit, DevShelf, Store, DataShelf, Auth } from './pages';

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
  const [authToken, setAuthToken] = useState(false)
  
  if(!authToken) return <Auth setAuthToken={setAuthToken} form={form} setForm={setForm}/>

  return (
    <div className="relative flex">
      <Sidebar setAuthToken={setAuthToken} />
      <div className="flex-1 flex flex-col background">
        <Navbar username={form.username} />

        <div className="px-6 h-[calc(100vh)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/store" element={<Store />} />
              <Route path="/cockpit" element={<Cockpit />} />
              <Route path="/data-shelf" element={<DataShelf />} />
              <Route path="/dev-shelf" element={<DevShelf />} />
              <Route path="/demo" element={<Demo />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
