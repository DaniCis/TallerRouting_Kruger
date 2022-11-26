import foto from "../assets/foto.png"

const About = (props) =>{
    return(
        <div className="contenedor-about">
            <img src={foto} alt="mi foto"/>
            <div className="contenedor-des">
                <h4 className="about-title">{props.name}</h4>
                <p className="about-des">Hi, I’m a System Engineer. I adapt to both individual and teamwork, always seeking to learn from my mistakes and the skills of those around me. My interests are focused on web development and Frontend programming along with interface design and user experience.</p>
            </div>
        </div>
    )
}
export default About;