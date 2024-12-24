
import {Navbar, Footer} from "./index"
const  MasterLayouts =  ({children}) => {
    // data-aos="zoom-in-up"
    return (    
        <div  style={{margin : 0, }}>
            <Navbar  />
                {children}
            <Footer />
        </div>
            
    )
}
export default MasterLayouts