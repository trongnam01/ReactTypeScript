import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;

function AdminPage() {
    const [collapsed, setCollapsed] = useState(false);

    console.log(theme, 'theme');


    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider trigger={null} collapsible collapsed={collapsed}
                style={{ backgroundColor: "var(--base-color)" }} // Đảm bảo sử dụng biến theme
            >
                <div className="h-32 flex items-center justify-center border-b" >
                    <i className="fa-solid fa-book-open-cover"></i>
                    <span className="text-zinc-50/100">BỘ CÔNG AN</span>
                </div>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    className="menu-sider"
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'nav 1',
                            children: Array.from({ length: 4 }).map((_, j) => {
                                const subKey = 4 + j + 1;
                                return {
                                    key: subKey,
                                    label: `option${subKey}`,
                                };
                            })
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                // style={{
                //     margin: '24px 16px',
                //     padding: 24,
                //     minHeight: 280,
                // }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    );
}

export default AdminPage;
