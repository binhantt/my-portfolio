import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { ContactsOutlined, HomeOutlined, ProductOutlined, } from '@ant-design/icons';
const { Header } = Layout;
import { ButtonLienHe } from '../base';

const Navbar = () => {
    const MenuNabar = () => {
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
                icon: <ProductOutlined />,
                label: 'Sản Phẩm',
            }
        ];
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
        return (
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['1']}
                className='flex md:justify-center justify-between'
                style={{
                    flex: 1,
                    minWidth: 0,
                }}
                selectedKeys={[activeTab]}
                onClick={handleTabSwitch}
                items={items}
            />
        );
    };
    return (
        <Header className="w-full navbar">
            <div class="demo-logo">
                <img src="/logo.png" style={{ width: "50px", border: "1px solid gray" }} alt="Logo" />
                <div>BinhAntt</div>
            </div>
            <MenuNabar />
            <ButtonLienHe id_lien_he={"Lien_he"} type_lie_he={"dashed"} className_lien_he={"text-blue-500 md:flex hidden"} size_lien_he={"large"} />
        </Header>
    );
};

export default Navbar;