import React, { } from 'react';
import { HederProps } from './type';
import { Avatar, Badge, Button, Dropdown, MenuProps, Space, Tooltip } from 'antd';
import { BarsOutlined, DownOutlined, LockOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';

import bg1 from '@/assets/images/header.jpg';
import avatar1 from '@/assets/images/avatar1.jpg';
import useAuthStore from '@/store/globalStore';

const listMenuAccount: MenuProps['items'] = [
    {
        label: 'Phần mềm',
        key: '1',
        icon: <BarsOutlined />,
    },
    {
        label: 'Đổi mật khẩu',
        key: '2',
        icon: <LockOutlined />,
    },
    {
        label: 'Đăng xuất',
        key: '3',
        icon: <LogoutOutlined />,
        danger: true,
    },
];


function HeaderLayout(props: HederProps) {
    const { handleTonggle, collapsed } = props;

    const UserInfo = useAuthStore((state) => state.userInfo);


    const handleMenuClick: MenuProps['onClick'] = (e) => {
        console.log('click', e);
    };
    const menuProps = {
        items: listMenuAccount,
        onClick: handleMenuClick,
    }

    const handleClickEmail = () => {
        console.log('handleClickEmail');
    }


    return (
        <div className="flex h-full w-full relative items-center justify-between px-2 beetween">
            <div className="absolute left-0 bottom-0 h-full w-full bg-bottom bg-no-repeat opacity-70 z-1" style={{ backgroundImage: `url(${bg1})` }} />
            <div>
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={handleTonggle}
                />
            </div>
            <div className='flex h-full items-center z-10'>
                <Space className='flex mr-2 h-full items-center'>
                    <Badge size="small" count={5} offset={[-2, 4]} className='flex h-full items-center'>
                        <Tooltip title="Trao đổi thông tin">
                            <Button
                                onClick={handleClickEmail}
                                type="text"
                                icon={<i className="fa-solid fa-circle-question text-[24px]"></i>}
                            />
                        </Tooltip>
                    </Badge>

                </Space>
                <Space className='flex mr-2 h-full items-center'>
                    <Badge size="small" count={5} offset={[-2, 4]} className='flex h-full items-center'>
                        <Tooltip title="Email">
                            <Button
                                onClick={handleClickEmail}
                                type="text"
                                icon={<i className="fa-solid fa-envelope text-[24px]"></i>}
                            />
                        </Tooltip>
                    </Badge>

                </Space>

                <Space className='mr-2 flex h-full items-center'>
                    <Badge size="small" count={5} offset={[-2, 4]} className='flex h-full items-center'>
                        <Tooltip title="Phản ánh">
                            <Button onClick={handleClickEmail} type="text" icon={<i className="fa-solid fa-comment text-[24px]"></i>} />
                        </Tooltip>
                    </Badge>
                </Space>
                <Space className='mr-2 flex h-full items-center'>
                    <Badge size="small" count={5} offset={[-2, 5]} className='flex h-full items-center'>
                        <Tooltip title="Thông báo">
                            <Button onClick={handleClickEmail} type="text" icon={<i className="fa-solid fa-bell text-[24px]"></i>} />
                        </Tooltip>
                    </Badge>
                </Space>
                <Dropdown menu={menuProps} trigger={['hover']}>
                    <div className='flex h-full items-center cursor-pointer'> {/* Thêm div bao ngoài */}
                        <Avatar src={<img src={avatar1} alt="avatar" />} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                        <span className='mx-2'> {UserInfo?.name}</span>
                        <DownOutlined />
                    </div>
                </Dropdown>
            </div>
        </div>
    )
}

export default HeaderLayout;
