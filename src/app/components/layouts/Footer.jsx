import { GithubFilled, LinkedinFilled, MailFilled, PhoneFilled } from '@ant-design/icons';
import { Button, Flex, Menu } from 'antd';
import { Input } from 'antd';
const { TextArea } = Input;
import React, { useState } from 'react';
const items = [
  {
    key: 'github',
    icon: <GithubFilled />,
    label: 'Github',
    href: 'https://github.com/your-github-username',
  },
  {
    key: 'linkedin',
    icon: <LinkedinFilled />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/your-linkedin-username',
  },
  {
    key: 'email',
    icon: <MailFilled />,
    label: 'Email',
    href: 'mailto:your-email@example.com',
  },
  {
    key: 'phone',
    icon: <PhoneFilled />,
    label: 'Phone',
    href: 'tel:+1234567890',
  },
];
const Footer = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [size, setSize] = useState('large');
  return (
   <Flex  className='footer_color' style={{paddingTop: "2rem"}} vertical>
     <Flex className='p_main flex md:flex-row flex-col'   style={{ display: "flex", justifyContent: "space-between", gap: "3rem" }}>
      <Flex vertical gap={1} style={{ display: "flex", alignItems: "center" }}>
        <p className='title-3'> Liên Hệ tui  </p>
        <p className='title-3'>  Dưới đây là 1 số cách liên hệ tới tui </p>
        <p className='title-3'> Cảm ơn các  bạn đã đến xem trang của mình</p>
      
        <Menu
          mode="inline"
          items={items}
          defaultSelectedKeys={['github']}
          defaultOpenKeys={['github']}
          inlineCollapsed={collapsed}
          style={{ width: '100%', maxWidth: '300px', fontWeight : "100" }}
        />
      </Flex>
      <Flex vertical gap={12} className='md:w-1/2 w-full'>
        <Flex vertical gap={2}>
          <label className='title-3' htmlFor="name"> Name</label>
          <Input placeholder="Basic usage" />
        </Flex>
        <Flex vertical gap={2}>
          <label className='title-3' htmlFor="name"> Gmail</label>
          <Input placeholder="Basic usage" />
        </Flex>
        <Flex vertical gap={2}>
          <label className='title-3' htmlFor="name"> Trò chuyện</label>
          <TextArea rows={4} />
        </Flex>
        <div style={{display :"flex" , justifyContent : "center" , alignItems :"center"  }}>
          <Button classNames="md:w-[20%] w-1/2 " style={{ color :"white"}} type="primary" size={size} className='title-3'>
              nói chuyện 
          </Button>
        </div>

      </Flex>
    </Flex>
      <Flex className='title-3' style={{display :"flex" , justifyContent : "center" , alignItems :"center" , }}>
          @ Chào tạm biệt hẹn gặp lại vào 1 ngày nào đó 
      </Flex>
   </Flex>
  )
}
export default Footer

