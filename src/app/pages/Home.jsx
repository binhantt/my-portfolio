import { Button, Flex } from "antd";
import MasterLayouts from "../components/layouts/MasterLayouts"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from "react";
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
  }, [dispatch]);
  // const renderContent = () => {
  //   if (loading) return <div>Loading...</div>;
  //   if (error) return <div>Error loading data</div>;
  //   if (!data || data.length === 0) return <div>No data available</div>;
    useEffect(() => {
      AOS.init({
        duration: 1200,
        once: true
      });
    }, []);
    const size = useState('large');
   console.log(data)

    return (
    
      <MasterLayouts>
          <div>
        {Object.keys(data).map((key) => (
          <div key={key} className="border p-4 rounded shadow-md">
            <h3 className="font-bold">{key}</h3>
            <p>{JSON.stringify(data[key])}</p>
          </div>
        ))}
      </div>

      <Flex vertical className="bg_portfolio flex_row_main py-[8vh] " >
          <Flex horizontal className="p_main md:flex-row flex-col-reverse" style={{ width: "100%", display: 'flex', justifyContent: "space-between", paddingBottom: "2rem" }} >
            <Flex horizontal className="flex_row_main">
              <Flex vertical className="" gap={2} style={{ display: 'flex', justifyContent: 'start', }} >
                <div   data-aos="fade-down"   data-aos-offset="300" className=" md:flex hidden text-white  items-center gap-2">
                  <p> Xin Chào Các Bạn </p>
                  <span className="w-[20%] h-1 bg-white"> </span>
                </div>
                <Flex className="md:flex  justify-center items-center" vertical style={{ paddingBottom: "1rem" }}>
                  <p  data-aos="fade-right" className="title-2 md:text-7xl text-2xl "> Trang cá nhân  Bình An </p>
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

        <Flex  vertical className="p_main screen  flex_row_main bg-white boder-List py-10">
          <Flex vertical className="flex w-full justify-center items-center">
            <p data-aos="fade-down" className="title-4"> Đôi nét về tui   </p>
            <Flex horizontal className="gap-10 justify-center  items-center">
              <div  data-aos="fade-down" className="md:w-1/2 w-full flex flex-col justify-center text-black">
                <p   className="flex gap-2 "><span className="font-normal ">+</span>Bình An, sinh năm 2003, là một frontend developer đầy nhiệt huyết đến từ Long An. Với niềm đam mê công nghệ và tinh thần học hỏi không ngừng, Bình An đã không ngừng trau dồi kỹ năng để trở thành một lập trình viên xuất sắc. Công việc chính của Bình An xoay quanh việc xây dựng giao diện người dùng (UI) hiện đại, thân thiện và tối ưu hóa trải nghiệm người dùng (UX) trên các trang web và ứng dụng</p>
                <p className="flex gap-2 "><span className="font-normal ">+</span>Là một người yêu thích sự sáng tạo và chi tiết, Bình An luôn chú trọng vào việc hoàn thiện sản phẩm đến từng pixel. Các công nghệ mà Bình An thường sử dụng bao gồm HTML, CSS, JavaScript, cùng với các framework phổ biến như Vue.js và React. Sự am hiểu về thiết kế responsive giúp Bình An tạo ra các sản phẩm tương thích trên nhiều thiết bị khác nhau, từ máy tính đến điện thoại di động.</p>
                <p className="flex gap-2 "><span className="font-normal ">+</span>Bên cạnh công việc, Bình An còn dành thời gian nghiên cứu các xu hướng công nghệ mới, như phát triển ứng dụng di động, AI, và các giải pháp tối ưu hóa hiệu suất. Bình An luôn tâm niệm rằng việc học hỏi không bao giờ ngừng, đặc biệt trong lĩnh vực công nghệ luôn thay đổi không ngừng.</p>
                <p className="flex gap-2 "><span className="font-normal ">+</span>Ngoài đam mê với code, Bình An còn yêu thích những khoảnh khắc thư giãn như ăn uống, ngủ nghỉ và dành thời gian cho gia đình, bạn bè. Với mục tiêu vươn xa trong sự nghiệp, Bình An không ngừng nỗ lực để cải thiện bản thân, hy vọng một ngày không xa sẽ đạt được vị trí cao hơn trong công việc và để lại dấu ấn riêng trong lĩnh vực công nghệ.</p>
              </div>
              <Flex   className="w-1/2 md:flex hidden justify-end">
                <img  data-aos="fade-down" src="/learing.png" alt="" />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex vertical className="p_main  flex_row_main bg-white boder-List py-10">
          <Flex vertical className="flex w-full justify-center items-center">
            <p data-aos="fade-down" className="title-4"> Công nghệ đã học    </p>
            <Flex horizontal className="gap-10 justify-center  items-center">
              <Flex vertical className="w-1/2 md:flex hidden">
                <img  data-aos="fade-right" src="/Congnghe.png" alt="" />
              </Flex>
              <Flex className="md:w-1/2 w-full flex flex-wrap md:gap-3 gap-2 justify-center">
              {ItemsFramework.map((item, index) => (
              <div  data-aos="fade-down" key={index}>
                <ItemCard src={item.src} title={item.title} />
              </div>
            ))}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex vertical className=" flex_row_main bg-white boder-List py-10">
          <Flex horizontal  >
            <p data-aos="fade-down"  className="title-4">  Sản Phẩm  </p>
          </Flex>
          <div  className="flex flex-wrap gap-10 justify-center items-center">
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