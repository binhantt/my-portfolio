
import {Navbar, Footer} from "./index"
const  MasterLayouts =  ({children}) => {
    return (    
        <div data-aos="zoom-in-up" style={{margin : 0, }}>
            <Navbar  />
                {children}
            <Footer />
        </div>
            
    )
}
export default MasterLayouts