import React, { useState } from 'react';
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

const initialRoles = [
  { id: 1, name: 'Admin', description: 'Has access to all administrative features, including user and role management.' },
  { id: 2, name: 'Moderator', description: 'Can manage content, such as approving photos and handling reported content.' },
  { id: 3, name: 'Member', description: 'Standard user account with abilities to upload photos and interact with the community.' },
];

function Roles() {
  const [roles, setRoles] = useState(initialRoles); // eslint-disable-line no-unused-vars

  return (
    <div>
      <header className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-btn">
            Role Management
          </h1>
          <p className="text-lg text-text/70 mt-2">Define and manage user roles and permissions.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-3 rounded-lg bg-btn hover:bg-btn-hover text-white font-semibold transition-colors">
          <PlusIcon className="w-6 h-6" />
          Add New Role
        </button>
      </header>
      
      <div className="bg-black/20 p-6 rounded-2xl border border-white/20">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/20">
              <th className="p-4">Role Name</th>
              <th className="p-4">Description</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map(role => (
              <tr key={role.id} className="border-b border-white/10">
                <td className="p-4 font-semibold">{role.name}</td>
                <td className="p-4 text-text/80">{role.description}</td>
                <td className="p-4 text-right">
                  <button className="p-2 text-blue-400 hover:text-blue-300"><PencilIcon className="w-5 h-5" /></button>
                  <button className="p-2 text-red-500 hover:text-red-400"><TrashIcon className="w-5 h-5" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Roles; 