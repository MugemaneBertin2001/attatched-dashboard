/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import SidebarItem from './SidebarItem';
import { ChevronRightIcon, InformationCircleIcon, BuildingOffice2Icon, HomeIcon, ChartBarIcon, DocumentTextIcon, BellIcon } from '@heroicons/react/24/outline';
import { MailIcon } from 'lucide-react';
import Analytics from './Analytics';

export function CompanyHeading() {
    return (
        <div className="flex flex-col items-center mx-auto h-full w-[80%]">
            <div className="flex flex-col p-4 rounded-lg shadow-md text-white w-[100%]">
                <SidebarItem Icon={BuildingOffice2Icon} text="Draltdash" />
            </div>
            <div className="md:space-y-2 md:text-md w-full">
            <SidebarItem Icon={HomeIcon} text="Dashboard" button={<ChevronRightIcon className="h-5 w-5" />}>
            </SidebarItem>
            <SidebarItem Icon={ChartBarIcon} text="Key Metrics" button={<ChevronRightIcon className="h-5 w-5" />}>
            </SidebarItem>
            <SidebarItem Icon={ChartBarIcon} text="Analytics" >
            <Analytics />
            </SidebarItem>
            <SidebarItem Icon={DocumentTextIcon} text="Documents" button={<ChevronRightIcon className="h-5 w-5" />}>
            </SidebarItem>
            <SidebarItem Icon={BellIcon} text="Notifications" button={<ChevronRightIcon className="h-5 w-5" />}>
            </SidebarItem>
            <SidebarItem Icon={InformationCircleIcon} text="About" button={<ChevronRightIcon className="h-5 w-5" />}>
            </SidebarItem>
            <SidebarItem Icon={MailIcon} text="Contact" button={<ChevronRightIcon className="h-5 w-5" />}>
            </SidebarItem>
        </div>
        </div>
    );
}


const notification = () => {
    return (
        <div className='rounded-full text-white bg-blue-900 p-2'>
            25
        </div>
    );
};


