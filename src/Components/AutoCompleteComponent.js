import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const AutoCompleteComponent = ({ onClose, onInputChange, onChange, options, renderInput, autoComplete, disablePortal, disabled, size }) => {

    const states = [{ id: 0, label: "Andhra Pradesh", region: "South" }, { id: 1, label: "Orissa", region: "East" }, { id: 2, label: "Delhi", region: "North" }, { id: 3, label: "West Bengal", region: "West" }]
    return (
        <>
            <Autocomplete
                disablePortal={disablePortal}
                options={states}
                onClose={onClose}
                onChange={onChange}
                onInputChange={onInputChange}
                disabled={disabled}
                size={size}
                autoComplete={autoComplete}
                renderInput={(params) => <TextField {...params} label="State" />}
            />
        </>
    )
}
export default AutoCompleteComponent