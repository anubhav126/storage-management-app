import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
interface FileAnalytics {
    name: string
    count: number
  }

  
  interface User {
    name: string
    email: string
    avatarUrl: string
    storageUsed: number
    storageLimit: number
    fileAnalytics: FileAnalytics[]
  }
    interface AccountDetailsProps {
    user: User
  }
  
  const AccountDetails = () => {
    const router = useRouter();
    const { fullName, email, avatar } = router.query;
  
    const userFullName = fullName || 'Default User';
    const userEmail = email || 'example@example.com';
    const userAvatar = avatar || 'https://avatar.iran.liara.run/public/22'; // Fallback to a default avatar
  
    return (
      <div className="p-6 bg-white shadow-md rounded-lg">
        {/* Header Section */}
        <div className="flex items-center space-x-4 mb-6">
          <img
            src="'https://avatar.iran.liara.run/public/22'"
            alt="User Avatar"
            width={64}
            height={64} 
            className="rounded-full object-cover"
          />
          <div>
            <h2 className="text-2xl font-semibold">{userFullName}</h2>
            <p className="text-gray-500">{userEmail}</p>
          </div>
        </div>
        
        {/* Other sections... */}
      </div>
    );
  };
  
  export default AccountDetails;