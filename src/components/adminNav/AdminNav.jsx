import React from 'react';
import AdminLogo from '../../assets/admin.svg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function AdminNav() {
  return (
    <div className='bg-[#FFFFFF] w-[100%] h-[70px] flex'>
        <div className='w-[85%] h-[100%] flex items-center pl-[3%]'>
            <span>Hello Admin</span>
        </div>
        <div className='w-[15%] h-[100%] flex items-center justify-end border-l-neutral-900'>
            <span className='p-4'>Admin</span>
            <img src={AdminLogo} alt="logo" className='h-[80%]'/>
            <span className='p-2 mr-3'><ExpandMoreIcon/></span>
        </div>
    </div>
  )
}

export default AdminNav