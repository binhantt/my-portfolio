import { Button, Card, Col, Flex, Layout, Row } from "antd";
import MasterLayouts from "../components/layouts/MasterLayouts"
import { useState } from "react";
import { BookOutlined, DoubleLeftOutlined, DoubleRightOutlined, WechatWorkOutlined } from "@ant-design/icons";
import {ItemCard} from "../components/base";
const items = [
  {
    src: "https://static-00.iconduck.com/assets.00/html-5-icon-224x256-1b5ud2sy.png",
    title: "HTML"
  },
  {
    src: "https://static-00.iconduck.com/assets.00/php-icon-2048x2048-zjxns1zh.png",
    title: "PhP"
  },
  
  {
    src: "https://cdn.iconscout.com/icon/free/png-256/free-css3-logo-icon-download-in-svg-png-gif-file-formats--css-wordmark-programming-langugae-language-pack-logos-icons-1175238.png",
    title: "Css"
  }, 
  {
    src: "https://static-00.iconduck.com/assets.00/vuejs-original-wordmark-icon-1736x2048-4z2z3y92.png",
    title: "Vue"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207",
    title: "React"
  },
  {
    src: "https://cdn.iconscout.com/icon/free/png-256/free-mysql-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945040.png?f=webp&w=256",
    title: "Mysql"
  },
  {
    src: "https://static-00.iconduck.com/assets.00/laravel-icon-995x1024-dk77ahh4.png",
    title: "Laravel"
  },
]
const itemproduct = [
  {
      src: "https://i.ibb.co/GVCTQvv/image.png",
    title: "AnatonLandingPage"
  }
]
const Home = () => {
  const [size, setSize] = useState('large');
  return (

    <MasterLayouts  >
      <Flex vertical className="bg_portfolio flex_row_main " >
        <Flex horizontal className="p_main" style={{ width: "100%", display: 'flex', justifyContent: "space-between", paddingBottom: "2rem" }} >
          <Flex vertical className="flex_row_main">
            <Flex vertical gap={2} style={{ display: 'flex', justifyContent: 'start', }} >
              <Flex vertical style={{ paddingBottom: "1rem" }}>
                <p className="title-2">Xin Chào Mọi người </p>
                <p className="title-1 ">
                  Tui tên Bình An, sinh năm 2003, là một frontend developer đầy nhiệt huyết đến từ Long An. Với niềm đam mê công nghệ và tinh thần học hỏi không ngừng, Bình An đã không ngừng trau dồi kỹ năng để trở thành một lập trình viên xuất sắc. Công việc chính của Bình An xoay quanh việc xây dựng giao diện người dùng (UI) hiện đại, thân thiện và tối ưu hóa trải nghiệm người dùng (UX) trên các trang web và ứng dụng.
                </p>
                <p className="title-1 ">
                  Là một người yêu thích sự sáng tạo và chi tiết, Bình An luôn chú trọng vào việc hoàn thiện sản phẩm đến từng pixel. Các công nghệ mà Bình An thường sử dụng bao gồm HTML, CSS, JavaScript, cùng với các framework phổ biến như Vue.js và React. Sự am hiểu về thiết kế responsive giúp Bình An tạo ra các sản phẩm tương thích trên nhiều thiết bị khác nhau, từ máy tính đến điện thoại di động.
                </p>
                <p className="title-1 ">
                  Bên cạnh công việc, Bình An còn dành thời gian nghiên cứu các xu hướng công nghệ mới, như phát triển ứng dụng di động, AI, và các giải pháp tối ưu hóa hiệu suất. Bình An luôn tâm niệm rằng việc học hỏi không bao giờ ngừng, đặc biệt trong lĩnh vực công nghệ luôn thay đổi không ngừng.
                </p>
              </Flex>
              <Flex horizontal gap="2rem">
                <Button type="primary" gap="2rem" size={size}><DoubleRightOutlined /> Liên Hệ  <DoubleLeftOutlined /></Button>
                <Button type="primary" size={size}> <BookOutlined /> Xem Sản Phẩn </Button>
                <Button type="primary" size={size}><WechatWorkOutlined />  Ngôn ngữ đã học  </Button>
              </Flex>
            </Flex>

          </Flex>
          <img width={300} src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png" alt="" />
        </Flex>
      </Flex>
      <Flex vertical className=" flex_row_main bg-white boder-List" >
        <Flex horizontal className="">
          <p className="title-4"> Công nghệ  </p>
        </Flex>
        <Row className="list_main"  gutter={[8,8]}>
          {items.map((item, index) => (
            <Col  key={index}>
              <ItemCard src={item.src} title={item.title} />
            </Col>
          ))}

        </Row>
      </Flex>
      <Flex vertical className=" flex_row_main bg-white boder-List">
        <Flex horizontal className="">
          <p className="title-4">  Sản Phẩm  </p>
        </Flex>
        <Row className="list_main "  gutter={[8,8]} >
          {itemproduct.map((item, index) => (
            <Col   key={index}>
              <ItemCard style={{padding :"0"}} src={item.src}  title={item.title} />
            </Col>
          ))}

        </Row>
      </Flex>
    </MasterLayouts>

  )
}
export default Home; 