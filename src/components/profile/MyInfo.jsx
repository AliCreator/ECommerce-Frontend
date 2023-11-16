import React from 'react'

const MyInfo = ({user}) => {
  return (
    <div className='flex flex-col gap-4'>
        <h2 className="text-2xl font-bold">My Info</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <h3 className="text-gray-400">Name</h3>
            <h3 className="font-semibold">{user?.firstName}</h3>
          </div>
          <div className="flex items-center gap-3">
            <h3 className="text-gray-400">Last Name</h3>
            <h3 className="font-semibold">{user?.lastName}</h3>
          </div>
          <div className="flex items-center gap-3">
            <h3 className="text-gray-400">Email</h3>
            <h3 className="font-semibold">{user?.email}</h3>
          </div>
          <div className="flex items-center gap-3">
            <h3 className="text-gray-400">Role</h3>
            <h3 className="font-semibold text-gray-500 hover:disabled:">
              {user?.role}
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <h3 className="text-gray-400">User since</h3>
            <h3 className="font-semibold text-gray-500 hover:disabled:">
              {user?.createdAt.toLocaleString()}
            </h3>
          </div>
        </div>
    </div>
  )
}

export default MyInfo