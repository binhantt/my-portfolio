import { Button, Flex } from "antd";
import MasterLayouts from "../components/layouts/MasterLayouts"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect, useRef } from "react";
import { PhoneOutlined } from "@ant-design/icons";
import { ItemCard } from "../components/base";
import { ItemsFramework, ItemProduct } from "@/app/config";
import { useSelector, useDispatch } from 'react-redux';
import { fetchLearnedDataThunk } from "../redux/features/Learned/LearnedAPI";
const Home = () => {
  const { data, loading, error } = useSelector((state) => state.learned);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLearnedDataThunk());
    if (typeof window !== 'undefined') {
      const element = window.document.getElementById('myElement');
      if (element) {
        element.style.color = 'blue';
      }
    }
  }, [dispatch]);
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true
    });
  }, []);
  const size = useState('large');

  return (

    <MasterLayouts>
      <Flex vertical={true} className="bg_portfolio flex_row_main py-[8vh] " >
        <Flex horizontal className="p_main md:flex-row flex-col-reverse" style={{ width: "100%", display: 'flex', justifyContent: "space-between", paddingBottom: "2rem" }} >
          <Flex horizontal className="flex_row_main">
            <Flex vertical={true} className="" gap={2} style={{ display: 'flex', justifyContent: 'start', }} >
              <div data-aos="fade-down" data-aos-offset="300" className=" md:flex hidden text-white  items-center gap-2">
                <p> Xin Chào Các Bạn </p>
                <span className="w-[20%] h-1 bg-white"> </span>
              </div>
              <Flex className="md:flex  justify-center items-center" vertical style={{ paddingBottom: "1rem" }}>
                <p data-aos="fade-right" className="title-2 md:text-7xl text-2xl "> Trang cá nhân  Bình An </p>
              </Flex>
              <div data-aos="fade-up" className=" md:flex hidden  text-white  items-center gap-2">
                <span className="w-[40%]  h-1 bg-white"> </span>
                <p > Thông tin liên hệ  </p>
                <span className="w-[40%]  h-1 bg-white"> </span>

              </div>
              <div data-aos="zoom-in" className="flex justify-center " horizontal gap="2rem">
                <Button className="px-10 py-5" type="primary" size={size}>
                  <PhoneOutlined />
                  Liên hệ ngay
                </Button>
              </div>
            </Flex>

          </Flex>
          <img data-aos="zoom-in" width={500} src="/logo.png" alt="" />
        </Flex>
      </Flex>

      <Flex vertical={true} className="p_main screen  flex_row_main bg-white boder-List py-10">
        <Flex vertical={true} className="flex w-full justify-center items-center">
          <p data-aos="fade-down" className="title-4"> Đôi nét về tui   </p>
          <Flex horizontal className="gap-10 justify-center  items-center">
            {loading ? (<span class="loader"></span>) : (
              <div  data-aos="fade-down" className="md:w-1/2 w-full flex flex-col justify-center text-black">
                {Object.keys(data).map((key) => (
                  <p className="flex gap-2 "><span className="font-normal ">+</span>{data[key].name}</p>
                ))}
              </div>
            )}
            <Flex className="w-1/2 md:flex hidden justify-end">
              <img data-aos="fade-down" src="/learing.png" alt="" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex vertical={true} className="p_main  flex_row_main bg-white boder-List py-10">
        <Flex vertical={true} className="flex w-full justify-center items-center">
          <p data-aos="fade-down" className="title-4"> Công nghệ đã học    </p>
          <Flex horizontal className="gap-10 justify-center  items-center">
            <Flex vertical={true} className="w-1/2 md:flex hidden">
              <img data-aos="fade-right" src="/Congnghe.png" alt="" />
            </Flex>
            <Flex className="md:w-1/2 w-full flex flex-wrap md:gap-3 gap-2 justify-center">
              {ItemsFramework.map((item, index) => (
                <div data-aos="fade-down" key={index}>
                  <ItemCard src={item.src} title={item.title} />
                </div>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex vertical={true} className=" flex_row_main bg-white boder-List py-10">
        <Flex horizontal  >
          <p data-aos="fade-down" className="title-4">  Sản Phẩm  </p>
        </Flex>
        <div className="flex flex-wrap gap-10 justify-center items-center">
          {ItemProduct.map((item, index) => (
            <div data-aos="zoom-in-down" key={index}>
              <ItemCard src={item.src} title={item.title} />
            </div>
          ))}

        </div>
      </Flex>
    </MasterLayouts>

  )
}

export default Home