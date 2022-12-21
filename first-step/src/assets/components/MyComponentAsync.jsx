import React from 'react'

const MyComponentAsync = () => {

    const [name, setName] = React.useState('Rubén');

    React.useEffect(() => {
        console.log(name);
        setName('Judit');
        console.log(name);
    }, []);
  
    return (
    <div>Hello, my name is {name}</div>
  )
}

export default MyComponentAsync