import { Outlet } from "react-router-dom";
import { Box } from '@mui/material';
// import Home from "./Home";
import Login from "./LoginPages/Login";
import FormSubmission from "./FormSubmission";
import CreditCard from "./CreditCard";
const Layout = () => {
    return (
        <>
            <Box style={{ margin: "0px" }}>
                {/* <Home /> */}
                {/* <Login /> */}
                <Box >
                    <FormSubmission />

                </Box>
                <Box>
                    <Outlet />

                </Box>

            </Box>
        </>
    )
}
export default Layout