import React from 'react'
import Header from './Header'
import Footer from './Footer'

function MainLayout(props: any) {
    return (
        <React.Fragment>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default MainLayout