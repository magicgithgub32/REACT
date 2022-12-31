import {useForm} from "react-hook-form"

const Form = () => {
const {handleSubmit, register, formState, watch} = useForm({
    defaultValues: {
        superhero:'',
        superpower:'',
        country:'',
        terms: false,
    },
})

const onSubmit = (values) => {
    console.log('Submit del React-Hook-form', values)
};

const country = watch ('country')
console.log('Country value:', country)

return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="superhero">Nombre del superhéroe: </label>
        <input {...register('superhero', {
            required: {
                value: true,
                message: 'Necesitas un nombre de superhéroe para continuar ⛔️',
            },
            minLength: {
                value: 2,
                message: 'Tu nombre de superhéroe no puede ser menor de dos caracteres'
            }
        })}
        type="text" 
        id="superhero"/>

        {formState.errors.superhero? (
            <p>{formState.errors.superhero.message}</p>
        ) : null}

        <br />
        <label htmlFor="superpower">Introduce tu superpoder: </label>
        <input {...register('superpower')}type="text" id="superpower"/>

        <br />

        <label htmlFor="country">Introduce tu país de residencia: </label>    
        <select {...register ('country')} name="country" id="country">
            <option value="">-</option>
            <option value="spain">Spain</option>
            <option value="other">Other</option>
        </select>
        <br />


        {country === 'spain' ? (
        <>
            <input type="checkbox" id='terms' {...register('terms')}/>
            <label htmlFor="terms">Acepto los términos y condiciones </label>
        </>
        ) : null}   
        
        <br />

        
        <button type='submit' disabled={!formState.isDirty}>Enviar!</button>
      
    </form>

  )
}

export default Form