import { useField } from 'formik';

const MyTextInput = ({ children , label , type , ...props}) => {


    const [field, meta] = useField(props);

    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input {...field} {...props} />
            { meta.touched && meta.error ? <span>{meta.error}</span> : null }
        </div>  
    )
}


export default MyTextInput;