import { useState } from "react";
import Card from "./Card";
import Button from 'react-bootstrap/Button';

const Calculator = () =>{
    const [fechaNacimiento,setFecha] = useState();
    const [day,setDay] = useState(0);
    const [month,setMonth] = useState(0);
    const [year,setYear] = useState(0);

    const obtenerFecha = () =>{
        const fecha = document.querySelector('input[type="date"]')
        setFecha(fecha.value)
    }

    const calcularEdad = () =>{
        const actualYear = new Date().getFullYear()
        const actualmonth = new Date().getMonth() + 1
        const actualDay = new Date().getUTCDate()
        const[bornYear, bornMonth, bornDay] = fechaNacimiento.split("-")

        setYear(actualYear -  bornYear)
        setMonth(actualmonth - bornMonth)
        setDay(actualDay - bornDay)

        //no cumple años todavia
        if(bornMonth > actualmonth || (bornMonth == actualmonth && bornDay > actualDay) )
            setYear(actualYear - bornYear - 1);
        //meses
        if(bornMonth > actualmonth)
            setMonth(actualmonth - bornMonth + 12)//no cumple
        else if(bornMonth == actualmonth){
            if(bornDay > actualDay)
                setMonth(11)// esta a dias de cumplir
            else 
                setMonth(0)//ya cumplio 
        }
        //dias
        if(actualDay - bornDay < 0 ){
            if(actualmonth - bornMonth <= 0)//aun no es el mes de su cumple
                setMonth(actualmonth - bornMonth + 11)    
            else
                setMonth(actualmonth - bornMonth -1)//restarle un mes que no se alcanza a cumplir
            switch(bornMonth){
                case '01': case '03': case '05': case '07':case '08':case '10':case '12':  
                    setDay(actualDay - bornDay + 31)
                    break;
                case '02': 
                    setDay(actualDay - bornDay + 28)
                    break;
                default:
                    setDay(actualDay - bornDay + 30)
            }
        }
    }

    return (
        <div className="contenedorPrincipal">
            <div className="contenedorFecha">
                <input className="input-fecha" type='date' onChange={obtenerFecha} pattern="\d{4}-\d{2}-\d{2}"></input>
                <Button variant="light" onClick={calcularEdad}>Calculate</Button>
            </div>
            <div className="contenedorEdad">
                <Card valor={year} unidad='years' />
                <Card valor={month} unidad= 'months'/>
                <Card valor={day} unidad='days' />
            </div>
        </div>
    )
}

export default Calculator;