import React, { useState } from 'react';
import { Button, Layout, Menu } from 'antd';
import { ContactsOutlined, HomeOutlined, PhoneOutlined } from '@ant-design/icons';
import { Input } from 'antd';
const { Header } = Layout;

const items = [
    {
        key: '1',
        icon: <HomeOutlined />,
        label: 'Đôi nét về tui',
    },
    {
        key: '2',
        icon: <ContactsOutlined />,
        label: 'Công nghệ đã học',
    },
    {
        key: '3',
        icon: <PhoneOutlined />,
        label: 'Sản Phẩm',
    }
];

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('0');
    const handleTabSwitch = (e) => {
        setActiveTab(e.key);
        scrollToSection(e.key);
    };
    const scrollToSection = (key) => {
        let sectionId;
        switch (key) {
            case '1':
                sectionId = 'gioi_thieu';
                break;
            case '2':
                sectionId = 'cong_nghe';
                break;
            case '3':
                sectionId = 'san_pham';
                break;
            default:
                break;
        }
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    const scrollToContactSection = () => {
        const section = document.getElementById('Lien_he');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (
        <Header className="w-full navbar">
            <div className="demo-logo">
                <img src="/logo.png" style={{ width: "50px", border: "1px solid gray" }} alt="Logo" />
                <div>BinhAntt</div>
            </div>
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['1']} // Set the default selected key to the first tab
                className='flex md:justify-center justify-between'
                style={{
                    flex: 1,
                    minWidth: 0,
                }}
                selectedKeys={[activeTab]} // Reflect the active tab
                onClick={handleTabSwitch} // Add the onClick handler
            >
                {items.map(item => (
                    <Menu.Item key={item.key} icon={item.icon}>
                        {item.label}
                    </Menu.Item>
                ))}
            </Menu>

            <Button
                onClick={scrollToContactSection}
                className="text-blue-500 md:flex hidden" type="dashed" size="large">
                <PhoneOutlined />
                Liên hệ ngay
            </Button>
        </Header>
    )
}

export default Navbar;