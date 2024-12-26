import { PhoneOutlined } from "@ant-design/icons";
import { Button } from "antd";

const ButtonLienHe = ({ className_lien_he, type_lie_he, id_lien_he  ,size_lien_he}) => {
    const scrollToContactSection = () => {
        const section = document.getElementById(id_lien_he);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (
        <Button
                onClick={scrollToContactSection}
                className={className_lien_he} type={type_lie_he} size={size_lien_he}>
                <PhoneOutlined />
                Liên hệ ngay
            </Button>
    )
}
export default  ButtonLienHe