
import {Navbar, Footer} from "./index"
const  MasterLayouts =  ({children}) => {
    return (    
        <div>
            <Navbar />
                {children}
            <Footer />
        </div>
            
    )
}
export default MasterLayouts