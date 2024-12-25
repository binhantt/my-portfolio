import {  GithubOutlined, LinkedinFilled, MailFilled, PhoneFilled } from '@ant-design/icons';

  const ItemProduct = [
    {
        src: "https://i.ibb.co/GVCTQvv/image.png",
      title: "AnatonLandingPage"
    }
  ]
  const ItemFoort =[
    {
      key: 'github',
      label: 'GitHub',
      icon: <GithubOutlined />, 
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
  ]
  export { ItemsFramework , ItemProduct , ItemFoort }