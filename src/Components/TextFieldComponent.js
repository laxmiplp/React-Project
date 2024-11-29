import { TextField } from '@mui/material';


const TextFieldComponent = ({ id, type, variant, value, size, required, onChange, placeholder, name, fullWidth, disabled, color, autoComplete, label }) => {
    return (
        <>
            <TextField
                required={required}
                id={id}
                label={label}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                name={name}
                fullWidth={fullWidth}
            />
        </>
    )
}
export default TextFieldComponent