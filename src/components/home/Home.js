import Header from '../header/Header';
import Footer from '../footer/Footer';
import Tours from '../tours/Tours';
import Hero from '../Hero/Hero';
import './Home.css';
function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <Tours />
            <Footer />
        </div>
    )
}
export default Home;