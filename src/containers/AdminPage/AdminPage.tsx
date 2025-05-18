import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Flex, Layout, Menu, theme } from 'antd';
import SideBar from './SideBar';
import { PUBLIC_PATH } from '@/utils/constants';
import ContentLayout from './ContentLayout';
import HeaderLayout from './HeaderLayout/HeaderLayout';
import { dataMenu } from './SideBar/type';


const { Header, Sider, Content } = Layout;

function AdminPage() {
    const [collapsed, setCollapsed] = useState(false);
    const pathNameLocation = window.location.pathname;

    const sidebarWidth = collapsed ? 80 : 250; // Độ rộng của sidebar (80 khi collapsed, 250 khi mở)

    console.log(theme, 'theme');


    return (
        <Flex
            gap="middle"
            wrap
            className='h-screen flex'
        >
            <Layout >
                <Sider width={sidebarWidth} className='bg-base' trigger={null} collapsible collapsed={collapsed}>
                    <SideBar dataMenu={dataMenu} collapsed={collapsed} pathNameLocation={pathNameLocation} />
                </Sider>
                <Layout>
                    <Header className="flex px-2 h-[52px] bg-base">
                        <HeaderLayout collapsed={collapsed} handleTonggle={() => setCollapsed(!collapsed)} />
                    </Header>
                    <Content className='text-center min-h-[120px] leading-[120px] text-white bg-[#0958d9]"'>
                        <ContentLayout />
                    </Content>
                </Layout>
            </Layout>
        </Flex>
    );
}

export default AdminPage;
