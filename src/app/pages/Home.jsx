import { Button, Col, Flex } from "antd";
import MasterLayouts from "../components/layouts/MasterLayouts"
import { useState } from "react";
import { BookOutlined, PhoneOutlined } from "@ant-design/icons";
import { ItemCard } from "../components/base";
import { ItemsFramework, ItemProduct } from "@/app/config";
const Home = () => {
  const size = useState('large');
  return (

    <MasterLayouts  >
      <Flex vertical className="bg_portfolio flex_row_main " >
        <Flex horizontal className="p_main md:flex-row flex-col-reverse" style={{ width: "100%", display: 'flex', justifyContent: "space-between", paddingBottom: "2rem" }} >
          <Flex horizontal className="flex_row_main">
            <Flex vertical className="" gap={2} style={{ display: 'flex', justifyContent: 'start', }} >
              <Flex className=" md:flex hidden text-white  items-center gap-2">
                <p> Xin Chào Các Bạn </p>
                <span className="w-[20%] h-1 bg-white"> </span>
              </Flex>
              <Flex className="md:flex  justify-center items-center" vertical style={{ paddingBottom: "1rem" }}>

                <p className="title-2 md:text-7xl text-2xl "> Trang cá nhân  Bình An </p>

              </Flex>
              <Flex className=" md:flex hidden  text-white  items-center gap-2">
                <span className="w-[40%]  h-1 bg-white"> </span>
                <p > Thông tin liên hệ  </p>
                <span className="w-[40%]  h-1 bg-white"> </span>

              </Flex>
              <Flex className="flex justify-center " horizontal gap="2rem">
              <Button className="px-10 py-5" type="primary" size={size}>
            <PhoneOutlined />
              Liên hệ ngay 
          </Button>
              </Flex>
            </Flex>
  
          </Flex>
          <img width={500} src="/user.png" alt="" />
        </Flex>
      </Flex>
      <Flex vertical className=" flex_row_main bg-white boder-List py-10" > 
        <Flex horizontal className="">
          <p className="title-4"> Công nghệ  </p>
        </Flex>
        <Flex className="flex flex-wrap	 gap-10 justify-center  ">
          {ItemsFramework.map((item, index) => (
            <div  key={index}>
              <ItemCard  src={item.src} title={item.title} />
            </div>
          ))}

        </Flex>
      </Flex>
      <Flex vertical className=" flex_row_main bg-white boder-List py-10">
        <Flex horizontal  >
          <p className="title-4">  Sản Phẩm  </p>
        </Flex>
        <Flex className="flex flex-wrap	 gap-10 justify-center items-center">
          {ItemProduct.map((item, index) => (
            <div  key={index}>
              <ItemCard  src={item.src} title={item.title} />
            </div>
          ))}

        </Flex>
      </Flex>
    </MasterLayouts>

  )
}
export default Home; 