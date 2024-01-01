import { useContext } from "react";
import { LogInContext } from "../Contexts/LogInContextProvider";


const useLogInData = () => {
    return useContext(LogInContext);
}

export default useLogInData;