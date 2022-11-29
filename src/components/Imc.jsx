import { useState } from "react";
import Form from 'react-bootstrap/Form';

const Imc = () =>{
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0);
    const [rango, setRango] = useState();
    const [color,setColor] = useState()

    const calcular = () =>{
        let resultado = (peso / ((altura/100) **2)).toFixed(2)
        console.log(peso, altura)
        setResultado(resultado)
        if(resultado >= 18.5 && resultado <= 24.9){
            setRango('Peso Normal')
            setColor('normal')
        }
        else if(resultado >= 18.5 && resultado <= 29.9){
            setColor('sobrepeso')
            setRango('Sobrepeso')
        }
        else if(resultado >= 30 && resultado <= 34.9){
            setRango('Obesidad grado I')
            setColor('obs1')
        }
        else if(resultado >= 35 && resultado <= 39.9){
            setRango('Obesidad grado II')
            setColor('obs2')
        }
        else if(resultado >= 40){
            setRango('Obesidad grado III')
            setColor('obs3')
        }
            
    }
    
    const cambioAltura = (e) =>{
        setAltura(parseInt(e.target.value))
        calcular()
    }
    const cambioPeso = (e) =>{
        setPeso(parseInt(e.target.value))
        calcular()
    }
    return(
        <div className="imc-card">
            <div className="imc-progress">
                <Form.Range
                    onChange={cambioPeso}
                    min={20}
                    max={400}
                    step={1}
                    value={peso}
                ></Form.Range>
                <p className="progress-valor">{peso}kg</p>
            </div>
            <div className="imc-progress">
                <Form.Range
                    onChange={cambioAltura}
                    min={100}
                    max={300}
                    step={1}
                    value={altura}
                ></Form.Range>
                <p className="progress-valor">{altura}cm</p>
            </div>
            <br></br>
            <div className="imc-resultado">
                <p>{resultado}</p>
                <h4 className={color}>{rango}</h4>
            </div>
        </div>
    )

}

export default Imc;
