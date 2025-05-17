import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Flex, Layout, Menu, theme } from 'antd';
import SideBar from './SideBar/SideBar';
import { dataMenu } from './SideBar/type';
const { Header, Sider, Content } = Layout;


const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
};



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
                <Sider width={sidebarWidth} style={{ backgroundColor: "var(--base-color)" }} trigger={null} collapsible collapsed={collapsed}>
                    <SideBar dataMenu={dataMenu} collapsed={collapsed} pathNameLocation={pathNameLocation} />
                </Sider>
                <Layout>
                    <Header className="bg-white flex items-center justify-between px-4">
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                        />
                    </Header>
                    <Content style={contentStyle}>Content</Content>
                </Layout>
            </Layout>
        </Flex>
    );
}

export default AdminPage;
