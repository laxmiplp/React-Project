import { Button } from '@mui/material';

const ButtonComponent = (
    { color, variant, disabled, size, fullWidth, children, onClick, type, onSubmit }
) => {
    return (
        <>
            <Button variant={variant} color={color} disabled={disabled} size={size} fullWidth={fullWidth} onClick={onClick} type={type} onSubmit={onSubmit}
            >{children}</Button>

        </>
    )
}
export default ButtonComponent