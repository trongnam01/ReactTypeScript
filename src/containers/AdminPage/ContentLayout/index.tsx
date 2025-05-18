import React from 'react';
import { Outlet } from 'react-router-dom';


function ContentLayout() {
    return (
        <div className="flex flex-col h-full shadow-sd-b rounded-md ">
            <Outlet />
        </div>
    )
}

export default ContentLayout;
