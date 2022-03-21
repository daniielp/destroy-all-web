import Header from '../shared/Header'
import Footer from '../shared/Footer'
import { Container } from '@mui/material'

function MainLayout(props: any) {
    return (
        <>
            <Header />
            <main>
                <Container>
                    {props.children}
                </Container>
            </main>
            <Footer />
        </>
    )
}

export default MainLayout