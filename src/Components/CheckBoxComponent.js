import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const CheckBoxComponent = ({ checked, color, defaultChecked, disabled, onChange, required, size, label }) => {

    return (
        <>
            {/* <FormGroup>
                <FormControlLabel control={<Checkbox checked={checked} onChange={onChange} color={color} required={required} />} label={label} />

            </FormGroup> */}

            <Checkbox checked={checked} onChange={onChange} color={color} required={required} />
        </>
    )
}
export default CheckBoxComponent