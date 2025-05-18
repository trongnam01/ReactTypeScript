import React, { useEffect, useState } from 'react';


import bg1 from '@/assets/images/menu1.jpg';
import bg2 from '@/assets/images/menu2.jpg';
import bg3 from '@/assets/images/menu3.jpg'
import bg4 from '@/assets/images/menu4.jpg'
import logo from '@/assets/images/logo1.png';
import { NavLink } from 'react-router-dom';
import { Menu, Tooltip } from 'antd';
import { findPathByUrl, MenuItemData, MenuItemProps, RenderedMenuItem } from './type';




function SideBar(props: MenuItemProps) {
    const { dataMenu, collapsed, pathNameLocation } = props

    console.log(pathNameLocation, 'pathNameLocation');

    const renderMenu = (menu: MenuItemData) => {

        let dataMenu = {
            key: menu.id,
            icon: menu.iconCls ? <i className={`${menu.iconCls}`}></i> : '',
            label: menu.url ? (
                <Tooltip title={menu.name}>
                    <NavLink to={menu.url} className="flex items-center">
                        <span >{menu.name}</span>
                    </NavLink>
                </Tooltip>
            ) : (
                <Tooltip title={menu.name}>
                    <span>{menu.name}</span>
                </Tooltip>
            ),
        } as RenderedMenuItem;

        if (menu.children && menu.children.length) {
            dataMenu.children = menu.children.map((e) => renderMenu(e))
        }
        return dataMenu
    }

    return (
        <>

            <div className="flex flex-col h-full">
                <div className="absolute left-0 bottom-0 h-full w-full bg-bottom bg-no-repeat opacity-70 z-1" style={{ backgroundImage: `url(${bg1})` }} />
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
                        defaultOpenKeys={findPathByUrl(dataMenu, 'ds_vuan66') || []}
                        defaultSelectedKeys={findPathByUrl(dataMenu, 'ds_vuan66') || []}
                        items={dataMenu.map((e) => renderMenu(e))}
                    />
                </div>
            </div >
        </>
    );
}

export default SideBar;
