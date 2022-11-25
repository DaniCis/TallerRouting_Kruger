import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Imc from "../components/Imc";

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