import { GithubOutlined, GoogleOutlined, PhoneOutlined } from "@ant-design/icons"
import { Flex, Menu } from "antd"

const items = [
    {
        key: '1',
        icon: <PhoneOutlined />,
        label: 'Phone',
        title: "0329104253"
    },
    {
        key: '2',
        icon: <GithubOutlined />,
        label: 'Git',
        title: "0329104253"
    },
    {
        key: '3',
        icon: <GoogleOutlined />,

        label: 'Gmail',
        title: "0329104253"
    },
   
]
const Footer = () => {

    return (
        <div className="footer_color">
        <Menu style={{ display: 'flex' }}>
            {items.map(item => (
                <Menu.Item key={item.key}>
                  {item.icon}  {item.label}: {item.title}
                </Menu.Item>
            ))}
        </Menu>
        <div style={{ display: 'flex', justifyContent : "center"}}>
                    Cam on ban da vao trang nay chao tao bt chuc ban 1 ngay vui ve
        </div>
        </div>
    )
}
export default Footer