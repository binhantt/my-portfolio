import { Button, Flex, Layout } from "antd";
import MasterLayouts from "../components/layouts/MasterLayouts"
import { DoubleLeftOutlined, DoubleRightOutlined, UserOutlined } from "@ant-design/icons";

const Home = () => {
  
  return (

      <MasterLayouts >
        <Flex   vertical className="bg_portfolio flex_row_main" >
          <Flex horizontal className="p_main"style={{width:"100%",display: 'flex',justifyContent:"space-between",}} >
            <Flex vertical className="flex_row_main">
              <Flex vertical gap={1} style={{display: 'flex',justifyContent: 'start',}} >
              <Button className="title bg-title gioi_hang_boder" type="dashed" size="large" w icon={<UserOutlined />}>
                Chào Mừng đến trang cá nhân
              </Button>
                <p className="title">Tui Tên : Binh An</p>
                <p className="title-1"> Chào mừng bạn đến trang cá nhân của tui </p>
                <p className="title-2 gioi_hang_boder"> Đây là nơi tổng hợp các dự án và ngôn ngữ tui đã làm cùng nhóm và bạn bè tui</p>
                <div  className="list_main" style={{display: 'flex',flexDirection :"column",justifyContent: 'start'}}>
                <p className="title-2">+ thiết kế websit  </p>
                <p className="title-2">+ Lập trình phần mền  </p>
                </div>
                <a className="title" href=""><DoubleRightOutlined />Liên hệ để hỗ trợ<DoubleLeftOutlined />  </a>
              </Flex>
              
            </Flex>
            <img width={300} src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png" alt="" />
          </Flex>
        </Flex>
      </MasterLayouts>

  )
}
export default Home; 