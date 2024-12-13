import { FacebookOutlined, GithubOutlined, GooglePlusOutlined, PhoneOutlined } from "@ant-design/icons";
import { Col, Flex, Menu, Row } from "antd"
import { Content } from "antd/es/layout/layout"


const items = [
    {
        key: '1',
        icon: <GithubOutlined />,
        label: 'Github',

    },
    {
        key: '2',
        icon: <FacebookOutlined />,
        label: 'Facebook',
    },
    {
        key: '3',
         icon:<GooglePlusOutlined />,
        label: 'Goole ',
    },
    {
        key: '4',
        icon: <PhoneOutlined />,
        label: 'Zalo',
    }
];

const Footer = () => {
    const onClick = (e) => {
        console.log('click', e);
      };
    return (
        <Content
        style={{
            display: 'flex',
            alignItems: 'center',
            background: "white",
            justifyContent: "space-evenly",
            padding: '20px'
        }}
    >
        <Row gutter={[16, 16]} style={{ width: '100%' }}>
            {/* Logo Section */}
            <Col xs={24} sm={24} md={8} style={{ textAlign: 'center' }}>
                <img 
                    src="http://localhost:3000/_next/static/media/Keithston_football_club-removebg-preview.d85d84eb.png" 
                    alt="Keithston Football Club Logo"
                    style={{ width: "300px" }} 
                />
            </Col>

            {/* Info Section */}
            <Col xs={24} sm={24} md={8}>    
                <p> Nhà Phát triển : Đỗ Bình An </p>
                <p> Năm sinh  : 17/04/2003 </p>
                <p>Nơi sinh   : Tiền Giang   </p>

            </Col>

            {/* Menu Section */}
            <Col xs={24} sm={24} md={8}>
                <Menu
                    onClick={onClick}
                    style={{
                        width: 300,
                    }}
                    mode="vertical"
                    items={items}
                />
            </Col>
        </Row>
    </Content>
    )
}
export default Footer

