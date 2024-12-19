import React, { useState } from 'react';
import { Button, Flex, Layout, Menu } from 'antd';
import { ContactsOutlined, HomeOutlined, PhoneOutlined, SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
const { Search } = Input;
const { Header } = Layout;
const items = [
    {
        key: '1',
        icon: <HomeOutlined />,
        label: 'Giới thiệu  ',
    },
    {
        key: '2',
        icon: <ContactsOutlined />,
        label: 'Sản phẩm',
    },
    {
        key: '3',
        icon: <PhoneOutlined />,
        label: 'Ngôn ngữ đã học  ',
    }
];

const Navbar = () => {
    const [size, setSize] = useState('large'); 
    return (
        <Header
        className="w-full navbar ">
            <div className="demo-logo" >
                <img src="/logo.png" style={{ width: "50px", border :"1px soild gray" }} />
                <div>BinhAntt</div>
            </div>
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={items}
                className='flex md:justify-center justify-between '
                style={{
                    flex: 1,
                    minWidth: 0,
                }}
            />
            
            <Button className="text-blue-500 md:flex hidden" type="dashed"  size={size}>
            <PhoneOutlined />
              Liên hệ ngay 
          </Button>

        </Header >
    )
}
export default Navbar