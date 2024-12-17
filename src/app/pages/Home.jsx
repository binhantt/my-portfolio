import { Button,Col, Flex, Row } from "antd";
import MasterLayouts from "../components/layouts/MasterLayouts"
import { useState } from "react";
import { BookOutlined, DoubleLeftOutlined, DoubleRightOutlined, WechatWorkOutlined } from "@ant-design/icons";
import {ItemCard} from "../components/base";
import { ItemsFramework, ItemProduct } from "@/config";
const Home = () => {
  const size = useState('large');
  return (

    <MasterLayouts  >
      <Flex vertical className="bg_portfolio flex_row_main " >
        <Flex horizontal className="p_main md:flex-row flex-col-reverse" style={{ width: "100%", display: 'flex', justifyContent: "space-between", paddingBottom: "2rem" }} >
          <Flex vertical className="flex_row_main">
            <Flex vertical gap={2} style={{ display: 'flex', justifyContent: 'start', }} >
              <Flex className="md:flex  justify-center items-center" vertical style={{ paddingBottom: "1rem" }}>
                <p className="title-2 md:text-5xl text-2xl ">Xin Chào Mọi người </p>
                 <p className="title-1 md:flex hidden  ">
                  Tui tên Bình An, sinh năm 2003, là một frontend developer đầy nhiệt huyết đến từ Long An. Với niềm đam mê công nghệ và tinh thần học hỏi không ngừng, Bình An đã không ngừng trau dồi kỹ năng để trở thành một lập trình viên xuất sắc. Công việc chính của Bình An xoay quanh việc xây dựng giao diện người dùng (UI) hiện đại, thân thiện và tối ưu hóa trải nghiệm người dùng (UX) trên các trang web và ứng dụng.
                </p>
                <p className="title-1 md:flex hidden">
                  Là một người yêu thích sự sáng tạo và chi tiết, Bình An luôn chú trọng vào việc hoàn thiện sản phẩm đến từng pixel. Các công nghệ mà Bình An thường sử dụng bao gồm HTML, CSS, JavaScript, cùng với các framework phổ biến như Vue.js và React. Sự am hiểu về thiết kế responsive giúp Bình An tạo ra các sản phẩm tương thích trên nhiều thiết bị khác nhau, từ máy tính đến điện thoại di động.
                </p>
                <p className="title-1 md:flex hidden">
                  Bên cạnh công việc, Bình An còn dành thời gian nghiên cứu các xu hướng công nghệ mới, như phát triển ứng dụng di động, AI, và các giải pháp tối ưu hóa hiệu suất. Bình An luôn tâm niệm rằng việc học hỏi không bao giờ ngừng, đặc biệt trong lĩnh vực công nghệ luôn thay đổi không ngừng.
                </p>
              </Flex>
              <Flex className="flex md:flex-row flex-col-reverse " horizontal gap="2rem">
                <Button type="primary" gap="2rem" size={size}><DoubleRightOutlined /> Liên Hệ  <DoubleLeftOutlined /></Button>
                <Button type="primary" size={size}> <BookOutlined /> Xem Sản Phẩn </Button>
                <Button type="primary" size={size}><WechatWorkOutlined />  Ngôn ngữ đã học  </Button>
              </Flex>
            </Flex>

          </Flex>
          <img width={300} src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png" alt="" />
        </Flex>
      </Flex>
      {/* <Flex vertical className=" flex_row_main bg-white boder-List" > 
        <Flex horizontal className="">
          <p className="title-4"> Công nghệ  </p>
        </Flex>
        <Row className="list_main"  gutter={[8,8]}>
          {ItemsFramework.map((item, index) => (
            <Col  key={index}>
              <ItemCard src={item.src} title={item.title} />
            </Col>
          ))}

        </Row>
      </Flex>
      <Flex vertical className=" flex_row_main bg-white boder-List">
        <Flex horizontal  >
          <p className="title-4">  Sản Phẩm  </p>
        </Flex>
        <Row className="list_main"  gutter={[8,8]} >
          {ItemProduct.map((item, index) => (
            <Col key={index}>
              <ItemCard style={{padding :"0"}} src={item.src}  title={item.title} />
            </Col>
          ))}

        </Row>
      </Flex> */}
    </MasterLayouts>

  )
}
export default Home; 