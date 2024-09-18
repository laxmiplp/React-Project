import { Outlet } from "react-router-dom";
import { Box } from '@mui/material';
import Home from "./Home";
const Layout = () => {
    return (
        <>
            <Box style={{ margin: "0px" }}>
                <Home />
                <Box>
                    <Outlet />

                </Box>

            </Box>
        </>
    )
}
export default Layout