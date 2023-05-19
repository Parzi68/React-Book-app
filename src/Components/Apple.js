import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export const Apple = () => {

    const Navigate = useNavigate()

    const onHomebtnClick = () => { 
        Navigate("/");
    };
    return(
        <div>
        <div>Apple 🍎</div>

        <Button onClick={onHomebtnClick}>Go to Home Page</Button>
        </div>
    )
};

