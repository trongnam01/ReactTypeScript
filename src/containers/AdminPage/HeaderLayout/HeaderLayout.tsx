import React, { useEffect, useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { HederProps } from './type';
import { Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import bg1 from '@/assets/images/header.jpg';


function HeaderLayout(props: HederProps) {

    const { handleTonggle, collapsed } = props;

    console.log(collapsed, 'collapsed');

    return (
        <div className="flex h-full w-full relative items-center justify-between">
            <div className="absolute left-0 bottom-0 h-full w-full bg-bottom bg-no-repeat opacity-70 z-1" style={{ backgroundImage: `url(${bg1})` }} />
            <Button
                type="text"

                className='text-white hover:!text-white'
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={handleTonggle}
            />
        </div>
    )
}

export default HeaderLayout;
