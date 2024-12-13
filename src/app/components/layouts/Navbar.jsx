import React from 'react';
import { Flex, Layout, Menu } from 'antd';
import { ContactsOutlined, HomeOutlined, PhoneOutlined, SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
const { Search } = Input;
const { Header } = Layout;
const items = [
    {
        key: '1',
        icon: <HomeOutlined />,
        label: 'Gioi thieu ',
    },
    {
        key: '2',
        icon: <ContactsOutlined />,
        label: 'San pham',
    },
    {
        key: '3',
        icon: <PhoneOutlined />,
        label: 'Lien he',
    }
];

const Navbar = () => {
    return (
        <Header
            style={{
                display: 'flex',
                alignItems: 'center',
                background :"white"
            }}
        >
            <div className="demo-logo" >
                <img src="http://localhost:3000/_next/static/media/Keithston_football_club-removebg-preview.d85d84eb.png" style={{ width: "50px", border :"1px soild gray" }} />
                <div>BinhAntt</div>
            </div>
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={items}
                style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    minWidth: 0,
                }}
            />
                <Input style={{width : "20%"}} addonBefore={<SearchOutlined />} placeholder="Tim kiem6" />
        </Header >
    )
}
export default Navbar