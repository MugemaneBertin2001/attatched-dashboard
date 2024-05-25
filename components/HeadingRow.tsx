import React from 'react';
import { DownloadIcon} from 'lucide-react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export function HeadingRow({title}:any) {
    return (
        <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">{title}</h2>
            <div className="flex space-x-2">
                <DownloadIcon className="h-6 w-6 text-blue-500" />
                <MoreHorizIcon className="h-6 w-6 text-black" />
            </div>
        </div>
    );
}
