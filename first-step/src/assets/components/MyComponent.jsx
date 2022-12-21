import React from 'react';

//1.MyComponent se define en una función
const MyComponent = () => {
    //2.Memoria de datos
    const [value, setValue] = React.useState('Rubén');
    //3.MyComponent retorna un elemento de React
    return (
        <div>
        <h1>Hola, caracola</h1>
        </div>
    )
}

export default MyComponent;