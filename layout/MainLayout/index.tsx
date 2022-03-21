import React from 'react'
import Header from './Header'
import Footer from './Footer'

function MainLayout(props: any) {
    return (
        <React.Fragment>
            <Header />
            <div id="main-content">
                {props.children}
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default MainLayout