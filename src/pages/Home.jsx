import Header from '../components/Header/Header'
import Banner from '../components/FullBanner/Banner'
import Showcase from '../components/Showcase/Showcase'
import NewSletter from '../components/Newsletter/Newsletter'
import Footer from '../components/Footer/Footer'
import '../style/main.scss'
export default function Home(){
    return(
        <main className="main">
                <Header />
                <Banner screen={window.innerWidth >= 991 ? 'desktop' : 'mobile' }/>
            <div className="main__container">
                <Showcase />
            </div>
            <NewSletter />
            <Footer />
        </main>
    )
}