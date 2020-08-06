import { useEffect, useCallback } from "react";
import authService from "../../services/authService"
import { useDispatch } from "react-redux";
import { setUserData } from "../../actions/accountActions"

function Auth({ children }) {
    const dispatch = useDispatch();
    const initAuth = useCallback(async () => {
        if (authService.isAuthenticated()) {
            //recuperar os dados novamente do user logado
            await dispatch(setUserData());
        }

    }, [dispatch])


    useEffect(() => {
        initAuth()

    }, [initAuth]);

    return children
}

export default Auth;