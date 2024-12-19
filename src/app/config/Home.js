import {  GithubOutlined, LinkedinFilled, MailFilled, PhoneFilled } from '@ant-design/icons';
const ItemsFramework = [
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
      src: "https://media.licdn.com/dms/image/v2/D4E12AQFfe1nZbaWdMw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1698604163003?e=2147483647&v=beta&t=zrcrB8lfoVmZo0LcSLgut3A_4PwE6YFe9EK3iy17L2Y",
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