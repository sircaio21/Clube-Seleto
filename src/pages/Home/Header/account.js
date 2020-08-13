import React, { useState, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Avatar } from '@material-ui/core';
import { useNavigate } from "react-router-dom"
import { Menu } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { signOut } from "../../../actions/accountActions"
import { Link } from "react-router-dom";

function Account() {
    const account = useSelector((state) => state.account)
    const [isOpen, setOpen] = useState(false);
    const ref = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuthenticated = account.user;

    const handleOpen = () => {
        setOpen(true);
        console.log(ref)
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleSignOut = () => {
        handleClose();
        dispatch(signOut());
        navigate("/signin")
    };

    return (
        <>
            <Avatar
                ref={ref}
                onClick={handleOpen}
                alt="Avatar"
                src={account.user && account.user.avatar}
            />
            {isAuthenticated ? (<Menu
                anchorEl={ref.current}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                open={isOpen}
                onClose={handleClose}
                getContentAnchorEl={null}
            >
                <MenuItem onClick={() => navigate(`/${account.user?.username}`)}>Meu Perfil</MenuItem>
                <MenuItem>Meus posts</MenuItem>
                <MenuItem>Minhas conexões</MenuItem>
                <MenuItem onClick={handleSignOut}>Sair</MenuItem>

            </Menu>) : (
                    <Menu
                        anchorEl={ref.current}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                        }}
                        open={isOpen}
                        onClose={handleClose}
                        getContentAnchorEl={null}
                    >
                        <MenuItem onClick={() => navigate("/signup")}>
                            Cadastrar-se
                            </MenuItem>
                        <MenuItem onClick={() => navigate("/signin")}>
                            Entrar
                        </MenuItem>
                    </Menu>)
            }

        </>
    );
}

export default Account;