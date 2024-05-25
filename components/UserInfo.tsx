import React from 'react';
import { ArrowRightIcon, UserCircleIcon } from '@heroicons/react/24/outline';

interface UserInfoProps {
    userImage?: string;
    fullName: string;
    email: string;
    onProfileClick?: () => void;
}

const UserInfo: React.FC<UserInfoProps> = ({ userImage, fullName, email, onProfileClick }) => {
    return (
        <div className="flex flex-col p-4 bg-[#3E3759] rounded-lg shadow-md text-white  w-[80%] mx-auto">
            <div className="flex items-center mb-4">
                <div className="relative flex flex-row items-center space-x-10">
                    {userImage ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={userImage}
                            alt={`${fullName}'s profile`}
                            className="w-24 h-24 rounded-full"
                        />
                    ) : (
                        <UserCircleIcon className="w-12 h-12 rounded-full" />
                    )}
                    {onProfileClick && (
                        <button
                            onClick={onProfileClick}
                            className="rounded-full p-2 bg-[#3E3759] text-white hover:cursor-pointer"
                        >
                            <ArrowRightIcon className="w-6" />
                        </button>
                    )}
                </div>
            </div>
            <div className="mb-2">
                <h4 className="text-large text-10">{fullName}</h4>
            </div>
            <div>
                <p className="text-sm">{email}</p>
            </div>
        </div>
    );
};

export default UserInfo;
