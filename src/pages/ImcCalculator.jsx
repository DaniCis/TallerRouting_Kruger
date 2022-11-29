import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Imc from "../components/Imc";
import "../assets/css/imc.css"

const ImcCalculator = () => {
    return(
        <>
            <Navigation />
            <div className="contenedor-imc">
                <Imc />
            </div>
            <Footer />
        </>
    )
}

export default ImcCalculator;