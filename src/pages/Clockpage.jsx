import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Clock from "../components/Clock"
import "../assets/css/clock.css"

const ImcCalculator = () => {
    return(
        <>
            <Navigation />
            <div className="contenedor-reloj">
                <Clock/>
            </div>
            <Footer />
        </>
    )
}

export default ImcCalculator;