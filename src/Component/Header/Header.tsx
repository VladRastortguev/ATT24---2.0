import { observer } from 'mobx-react-lite';
import React, { FC, useContext } from 'react';

import logo from '../../images/АТТ_logo.svg'

import '../Header/Header.css'
import Button from 'react-bootstrap/esm/Button';
import { Context } from '../../index.tsx';
import { useNavigate } from 'react-router-dom';

const Header:FC = () => {

    const { store } = useContext(Context)

    const navigate = useNavigate()

    async function logout() {
        await store.logout()
    }
    
    return (
        <div className='VR_Header_Header'>
            <div className='VR_Container_Header'>

                <ul>
                    <li><a href="/home" className='VR_logo_Header'><img src={logo} alt="" /></a></li>
                    <li><Button onClick={() => {
                        logout()
                        navigate('/register')
                    }} className='VR_GetOut_Header' variant="outline-primary">Выход</Button></li>
                </ul>


            </div>
        </div>
    );
};

export default observer(Header);