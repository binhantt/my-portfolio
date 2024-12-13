
import { Layout } from "antd"
import {Navbar, Footer} from "./index"
const  MasterLayouts =  ({children}) => {
    return (    
        <Layout style={{margin : 0, }}>
            <Navbar />
                {children}
            <Footer />
        </Layout>
            
    )
}
export default MasterLayouts