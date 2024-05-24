import React from 'react';
import { EyeIcon } from '@heroicons/react/24/outline';

interface DashCardProps {
    title: string;
    amount: string;
    description: string;
    onView: () => void;
}

export function DashCard({ title, amount, description, onView }: DashCardProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto mb-6 sm:mb-0 sm:w-2/3 md:w-1/2 lg:w-1/3">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg sm:text-xl font-bold">{title}</h3>
                <button
                    onClick={onView}
                    className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700"
                >
                    <EyeIcon className="h-5 w-5" />
                </button>
            </div>
            <div className="text-xl sm:text-2xl font-semibold mb-2">
                {amount}
            </div>
            <p className="text-gray-600 mb-4">
                {description}
            </p>
        </div>
    );
}