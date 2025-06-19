import React from 'react';
import './Section.css';
import { UserCard } from '../UserCard/UserCard'

import carroImg from'../../assets/car.png';
import motoImg from'../../assets/motorbike.png';
import camionImg from'../../assets/transport.png';

const vehicles =[
    {
        id:1,
        name: 'carro',
        description:'Automóvil de 4 ruedas',
        image: carroImg
    },
    {
        id:2,
        name: 'moto',
        description:'Motocicleta de 2 ruedas',
        image: motoImg
    },
    {
        id:3,
        name: 'camion',
        description:'Vehículo de carga',
        image: camionImg
    }
];
export const Section = () => {
    const handleClick=(name)=>{
        alert(`Esta conectado a ${name}`)
    }

return (

    <section>
        {
            vehicles.map((vehicle) => (
                <UserCard key={vehicle.id} user={vehicle} />
            ))
            

                    
            
    } 

    </section>
    

                
    )

}


