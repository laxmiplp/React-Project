import { Typography } from '@mui/material';


const TypographyComponent = ({ variant, children, gutterBottom, color }) => {
    return (
        <>
            <Typography variant={variant} gutterBottom={gutterBottom} color={color}>
                {children}
            </Typography></>
    )
}
export default TypographyComponent