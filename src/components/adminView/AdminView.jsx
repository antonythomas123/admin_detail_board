import React from 'react'
import './AdminView.css'

function AdminView() {
    return (
        <div className='detail_tab bg-[#FFFFFF] rounded-md'>
            <div className='flex'>
            <div className='w-[80%] h-[70px] flex border-b-black'>
                <div className='w-[70%] h-[100%] flex flex-col justify-center pl-[30px]'>
                    <span className='text-[25px] font-bold'>Event Name</span>
                    <span className='text-[13px]'>Department Name</span>
                </div>
            </div>
            <div className='h-[70px] w-[20%] flex items-center'>
                    <button className='bg-[#2F903E] h-[60%] w-[90%] m-4 rounded-[10px]'>Export to Excel</button>
            </div>

            </div>
            
            {/* Contents */}
            <div className='w-[100%] border-t-8'>
                <table className='m-5'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>College</th>
                            <th>Branch</th>
                            <th>Semester</th>
                            <th>Email</th>
                            <th>Phone No</th>
                            <th>Transaction Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Antony Thomas</td>
                            <td>Vimal Jyothi Engineering College</td>
                            <td>CSE</td>
                            <td>7</td>
                            <td>someone@gmail.com</td>
                            <td>9876543210</td>
                            <td>SBI100200400</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default AdminView