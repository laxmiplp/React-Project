import ButtonComponent from "../../Components/ButtonComponent"
import AutoCompleteComponent from "../../Components/AutoCompleteComponent"
import CheckBoxComponent from "../../Components/CheckBoxComponent"
import TextFieldComponent from "../../Components/TextFieldComponent"
import SelectComponent from "../../Components/SelectComponent"
import TypographyComponent from "../../Components/TypographyComponent"
import RadioButtonComponent from "../../Components/RadioButtonComponent"
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom"
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useState } from "react"

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '', checkbox: '' })
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {
        console.log('Form Data:', formData);
        return (
            <>
                {formData}
            </>
        )
    }



    return (
        <>
            {/* <TextFieldComponent />
            <RadioButtonComponent />
            <AutoCompleteComponent />
            <CheckBoxComponent />
            <SelectComponent />
            <ButtonComponent variant="contained" color="primary" children="Click here!" /> */}

            <Container>
                <Box sx={{ marginTop: '100px', marginBottom: '100px' }}>
                    <Grid container spacing={4}>
                        <Grid size={{ md: 6 }} sx={{ paddingTop: '100px', paddingBottom: '100px' }}>
                            <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} height={100}>
                                <TypographyComponent variant={"h3"} children={"Welcome to Login Page"} />

                            </Stack>
                        </Grid>
                        <Grid size={{ md: 6 }}>
                            <Card sx={{ padding: '30px' }}>
                                <Box mb={3}>
                                    <TypographyComponent variant={"h4"} children={"Signin"} />
                                </Box>
                                <FormControl fullWidth={true} onSubmit={handleSubmit}>
                                    <Box mb={2}>
                                        <FormLabel component="legend" sx={{ paddingBottom: '3px' }}>Email:</FormLabel>
                                        <TextFieldComponent type={"email"} fullWidth={true} onChange={handleInputChange} value={formData.email} />
                                    </Box>
                                    <Box mb={2}>
                                        <Stack width={"100"} direction={"row"} justifyContent={"space-between"} alignItems={"center"} sx={{
                                            paddingBottom: '12px'
                                        }}>
                                            <FormLabel component="legend">Password:</FormLabel>
                                            <Link to="/" style={{ color: 'black' }}>Forgot Password?</Link>
                                        </Stack>
                                        <TextFieldComponent type={"password"} fullWidth={true} onChange={handleInputChange} value={formData.password} />
                                    </Box>
                                    <FormControlLabel control={<CheckBoxComponent required />} label={"Remember me"} />
                                    <Box mt={5} mb={2}>
                                        <ButtonComponent variant="contained" color="primary" children="Sign in" fullWidth={true} />
                                    </Box>
                                    <Stack width={"100"} direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={2} >
                                        <TypographyComponent component={"p"} children={"Don't have an account?"} />
                                        <Link to="/" sx={{ color: 'black' }}>Sign up</Link>
                                    </Stack>

                                </FormControl>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}
export default Login