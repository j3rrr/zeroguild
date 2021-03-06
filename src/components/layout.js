import React from 'react'
//import {Link} from 'gatsby'
import '../styles/index.scss'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
//import layoutStyles from './layout.module.scss'
import SimpleReactLightbox from "simple-react-lightbox";

const Layout = (props) => {
    //const whTooltips = {colorLinks: true, iconizeLinks: true, renameLinks: true};
    return (
        
        // 
        <div className="grid-wrapper">
            <SimpleReactLightbox>
                {/* <BigTop /> */}
                <Navbar />
                <Sidebar />
                <div className="content">
                    {props.children}    
                </div>
                <Footer />
            </SimpleReactLightbox>
        </div>
      
    )
}

export default Layout

        // <div className={layoutStyles.container}>
        //     <div className={layoutStyles.content}>
        //         <Header />
        //         {props.children}
        //     </div>            
        //     <Footer />
        // </div>