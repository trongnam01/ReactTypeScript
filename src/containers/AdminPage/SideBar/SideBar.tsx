import React, { useEffect, useRef, useState } from 'react';
import { MenuItemData, MenuItemProps, RenderedMenuItem } from './type';


import bg1 from '@/assets/images/menu1.jpg';
import bg2 from '@/assets/images/menu2.jpg';
import bg3 from '@/assets/images/menu3.jpg'
import bg4 from '@/assets/images/menu4.jpg'
import logo from '@/assets/images/logo1.png';
import { NavLink } from 'react-router-dom';
import { Menu, MenuProps, Tooltip } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { log } from 'node:console';


function SideBar(props: MenuItemProps) {
    const { dataMenu, collapsed, pathNameLocation } = props

    const [openKeys, setOpenKeys] = useState<string[]>([]);

    useEffect(() => {
        setOpenKeys(['7f000001-4586-15ec-8951-86e4147f1216'])
    }, [pathNameLocation]);

    const renderMenu = (menu: MenuItemData) => {

        let dataMenu = {
            key: menu.id,
            icon: menu.iconCls ? <i className={`${menu.iconCls}`}></i> : '',
            label: (
                <Tooltip title={menu.name}>
                    {menu.name}
                </Tooltip>
            ),
        } as RenderedMenuItem;

        if (menu.children && menu.children.length) {
            dataMenu.children = menu.children.map((e) => renderMenu(e))
        }
        return dataMenu
    }
    console.log('openKeys', openKeys, openKeys.length);


    const onOpenChange = (keys: string[]) => {
        console.log('keys', keys);
        setOpenKeys(keys);
    };

    return (
        <>

            <div className="flex flex-col h-full">
                {/* Logo và tiêu đề */}
                <div className='content border-b border-stone-50'>
                    <div className="flex relative items-center">
                        <img src={logo} className="mx-4 my-1 w-[50px] h-[50px]" />
                        <div>
                            {
                                !collapsed && (
                                    <label
                                        className={`text-stone-50 absolute top-1/2 transform -translate-y-1/2 text-lg font-bold transition-all duration-500 ease-in-out ${collapsed ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'
                                            }`}
                                    >
                                        BỘ CÔNG AN
                                    </label>
                                )
                            }

                        </div>
                    </div>
                </div>

                {/* Menu với scroll */}
                <div className="flex-1 overflow-y-auto max-h-[calc(100vh-70px)]">
                    <Menu
                        className='menu-sider'
                        mode="inline"
                        openKeys={openKeys}
                        onOpenChange={onOpenChange}
                        items={dataMenu.map((e) => renderMenu(e))}
                    />
                </div>
            </div >
        </>
    );
}

export default SideBar;
