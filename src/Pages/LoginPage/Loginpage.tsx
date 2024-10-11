import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useState } from 'react';

import whiteThemeImg from '../../images/whiteTheme.png'
import darkThemeImg  from '../../images/DarkTheme.png'

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';  
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';

import ButtonR from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import DoneAllIcon from '@mui/icons-material/DoneAll';

import '../LoginPage/Loginpage.css'
import '../../style.css'

import { useNavigate } from 'react-router-dom';
import { Context } from '../../index.tsx';
import UserService from '../../services/UserService.ts';
import AuthService from '../../services/AuthService.ts';


const Loginpage:FC = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [goPasswordShowPassword, setGoPasswordShowPassword] = useState(false)
    const [goPasswordShowAccessPassword, setGoPasswordShowAccessPassword] = useState(false)
    
    const [showSettingBlock, setShowSettingBloxk] = useState(false)
    
    const [checkEnglishLang, setEnglishLang] = useState(false)
    const [checkRussianLang, setRussianLang] = useState(true)
    
    const [darkTheme, setDarkTheme] = useState(false)

    const [showGoPassword, setShowGoPassword] = useState(false)

    const [goPasswordStyleBtn, setGoPasswordStyleBtn] = useState(false)

    const [email, setEmail]       = useState('')
    const [password, setPassword] = useState('')

    const [goPasswordName, setGoPasswordName]   = useState('')
    const [goPasswordEmail, setGoPasswordEmail] = useState('')
    const [goPasswordNewPassword, setGoPasswordNewPassword] = useState('')    
    const [goPasswordAccessPassword, setGoPasswordAccessPassword] = useState('')

    const navigate = useNavigate()
    
    const { store } = useContext(Context)

    async function setLocalUser(email: string) {
        store.setLoading(true)

        try {
            
            const userRes = await UserService.getItilUser()

            userRes.data.map((item) => {
                if (String(item.email) == String(email)) {
                    localStorage.setItem('UserName', item.name)
                    localStorage.setItem('UserUID', item.uid)
                    localStorage.setItem('UserEmail', item.email)
                    
                    store.setLoading(true)

                    return
                }
            })

        } catch (e) {
            alert(e);            
        } finally {
            store.setLoading(false)
        }
    }

    async function setLocalCompany() {
        store.setLoading(true)

        try {

            const companyRes = await UserService.getCompanyItil()
            
            companyRes.data.map((item) => {
                localStorage.setItem('company', item.company)
            })

            store.setLoading(false)

            return

        } catch (e) {
            alert(e);
        } finally {
            store.setLoading(false)
        }
    }

    async function checkNormalizeAuth() {
        store.setLoading(true)

        const res = await store.login(email, password)

        if (String(res) == '200') {
            await setLocalUser(email)
            await setLocalCompany()

            navigate('/home')
            store.setLoading(false)

            return
        } else {
            alert(checkEnglishLang ? 'Incorrect login or password!' : 'Не правильный логин или пароль!')
            store.setLoading(false)
            
            return
        }
    }

    async function sendResetPassword() {
        if (
            !goPasswordEmail.trim() ||
            !goPasswordNewPassword.trim() ||
            !goPasswordAccessPassword.trim()
        ) {            
            alert('Заполните все поля!')
            return
        }
        
        store.setLoading(true)
        try {
            const res = AuthService.setNewPassword(goPasswordEmail, goPasswordNewPassword)

            console.log(res);            
        } catch(e) {
            alert(e)
        } finally {
            store.setLoading(false)
        }

        setShowGoPassword(false)
    }

    function validationRepeatPassword() {
        if (goPasswordNewPassword !== goPasswordAccessPassword) {
            alert('Пароли не совпадают!')
            setGoPasswordStyleBtn(false)
        } else {
            setGoPasswordStyleBtn(true)
        }
    }


    if (store.isLoading) {
        return (
            <> 
                <div className='VR_PreSpinnerBlock'>
                    <FlipCameraAndroidIcon className='VR_Spinner'/>
                </div>
            </>
        )
    }

    return (
        <div className={`VR_AllBlock_Loginpage ${darkTheme ? 'VR_AllBlock_Loginpage_dark': ''}`}>
            <div className='VR_BlueTriangle_Loginpage'></div>

            <div className={`VR_LoginBlock_Loginpage ${darkTheme ? 'VR_LoginBlock_Loginpage_dark' : ''}`}>
                <div className='VR_CardLoginItem_Loginpage'>
                    <h4 className={`${darkTheme ? 'VR_CardLoginItem_Loginpage_h4_dark' : ''}`}>{checkEnglishLang ? 'Login' : 'Вход'}</h4>

                    <div className='VR_EmailBlock_Loginpage'>
                        <label>{checkEnglishLang ? 'Your email:' : 'Ваша почта:'}</label>
                        <input
                            className={`${darkTheme ? 'VR_EmailBlock_Loginpage_input_dark' : ''}`} 
                            type="email" 
                            name='email' 
                            placeholder={checkEnglishLang ? 'Your email' : 'Ваша почта'}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className='VR_PasswordBlock_Loginpage'>
                        <label>{checkEnglishLang ? 'Your password:' : 'Ваш пароль:'}</label>
                        <input
                            className={darkTheme ? 'VR_PasswordBlock_Loginpage_input_dark' : ''} 
                            id='password-field' 
                            type={showPassword ? 'text' : 'password'} 
                            placeholder={checkEnglishLang ? 'Your password' : 'Ваш пароль'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                        
                        <i 
                            data-toggle='#password-field' 
                            className='VR_EyeIcon_LoginPage'
                            onClick={() => setShowPassword(!showPassword)}>
                            
                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon/>}
                        </i>
                    </div>

                    <div className='VR_ButtonBlock_LoginPage'>
                        <ButtonR 
                            variant="outline-primary"
                            onClick={() => checkNormalizeAuth()}
                            
                            >{checkEnglishLang ? 'Login' : 'Вход'}</ButtonR>
                    </div>

                    <div className='VR_RemoteSingUp_LoginPage'>
                        <p>{checkEnglishLang ? "Don't have an account? " : 'Нет аккаунта? '} </p>
                        <a href="/register">{checkEnglishLang ? 'Sing up' : ' Зарегестрируйтесь'}</a>
                    </div>

                    <div className='VR_GoPassword_LoginPage'>
                        <a onClick={() => setShowGoPassword(true)}>{checkEnglishLang ? "Forgot your password?" : "Забыли пароль?"}</a>
                    </div>
                </div>

                {showGoPassword ? (
                    <>
                        <div className='VR_GoPasswordContainer_LoginPage'>
                            <div className='VR_GoPasswordDarkBlock_LoginPage'>

                            </div>

                            <div className='VR_GoPasswordWhiteBlock_LoginPage'>

                                <div className='VR_GoPasswordTitleBlock_LoginPage'>
                                    <h5>{checkEnglishLang ? 'Password recovery' : 'Восстановление пароля'}</h5>
                                    
                                    <div className='VR_GoPasswordClose_LoginPage' onClick={() => setShowGoPassword(false)}>
                                        <CloseIcon color='error' />
                                    </div>
                                </div>
                                
                                <div className='VR_GoPasswordFormContainer_LoginPage'>
                                    <div className='VR_GoPasswordInputBlock'>
                                        {/* <div className='VR_GoPasswordNameInput_LoginPage'>
                                            <h6>{checkEnglishLang ? 'Your name:' : 'Ваше имя:'}</h6>
                                            <input 
                                                type="text" 
                                                placeholder={checkEnglishLang ? 'Name...' : 'Имя...'}
                                                value={goPasswordName}
                                                onChange={(e) => setGoPasswordName(e.target.value)}/>
                                        </div> */}

                                        <div className='VR_GoPasswordEmailInput_LoginPage'>
                                            <h6>{checkEnglishLang ? 'Your email:' : 'Ваша почта:'}</h6>
                                            <input 
                                                type="text" 
                                                placeholder={checkEnglishLang ? 'Email...' : 'Почта...'} 
                                                value={goPasswordEmail}
                                                onChange={(e) => setGoPasswordEmail(e.target.value)}/>
                                        </div>        

                                        <div className='VR_GoPasswordPasswordInput_LoginPage'>
                                            <h6>{checkEnglishLang ? 'New password:' : 'Новый пароль:'}</h6>
                                            <input type={goPasswordShowPassword ? 'text' : 'password'} 
                                                placeholder={checkEnglishLang ? 'Password...' : 'Пароль...'}
                                                value={goPasswordNewPassword}
                                                onChange={(e) => setGoPasswordNewPassword(e.target.value)}
                                                id='newPassword-field'/>

                                            <i 
                                                data-toggle='#newPassword-field' 
                                                className='VR_EyeIcon_LoginPage'
                                                onClick={() => setGoPasswordShowPassword(!goPasswordShowPassword)}>
                            
                                                {goPasswordShowPassword ? <VisibilityOffIcon /> : <VisibilityIcon/>}
                                            </i>
                                        </div>

                                        <div className='VR_GoPasswordAcceessPassword_LoginPage'>
                                            <h6>{checkEnglishLang ? 'Access password:' : 'Подтвердите пароль:'}</h6>
                                            <input type={goPasswordShowAccessPassword ? 'text' : 'password'} 
                                                placeholder={checkEnglishLang ? 'Access password...' : 'Подтвержденный пароль...'}
                                                value={goPasswordAccessPassword}
                                                onChange={(e) => setGoPasswordAccessPassword(e.target.value)}
                                                id='accessPassword-field'
                                                onBlur={() => validationRepeatPassword()}/>

                                            <i 
                                                data-toggle='#accessPassword-field' 
                                                className='VR_EyeIcon_LoginPage'
                                                onClick={() => setGoPasswordShowAccessPassword(!goPasswordShowAccessPassword)}>
                            
                                                {goPasswordShowAccessPassword ? <VisibilityOffIcon /> : <VisibilityIcon/>}
                                            </i>
                                        </div>                        
                                    </div>

                                    {goPasswordStyleBtn ? (
                                        <div className='VR_GoPasswordBtnSend_LoginPage'>
                                            <ButtonR variant='outline-primary' onClick={() => sendResetPassword()}>{checkEnglishLang ? 'Send' : 'Отправить'}</ButtonR>
                                        </div>
                                    ) : (
                                        <div className='VR_GoPasswordBtnSend_LoginPage'>
                                            <ButtonR disabled variant='outline-primary'>{checkEnglishLang ? 'Send' : 'Отправить'}</ButtonR>
                                        </div>
                                    )}

                                </div>

                            </div>
                        </div>
                    </>
                ) : (null)}

                {showSettingBlock ? (
                    <div className='VR_ShowSettingBlock_LoginPage'>
                        <div className='VR_RightSettingBlock'></div>

                        <div className='VR_HeaderCloseBlock_LoginPage'>
                            <h4>{checkEnglishLang ? 'Tools' : 'Инструменты'}</h4>
                            <button onClick={() => setShowSettingBloxk(false)}><CloseIcon className='VR_Close_LoginPage'/></button>
                        </div>

                        <div className='VR_MainSettingsBlock_LoginPage'>
                            <div className='VR_ChangeLanguage_LoginPage'>
                                <h6>{checkEnglishLang ? 'Select language' : 'Выберите язык'}</h6>
                                <Form>
                                    <Form.Check
                                        type='switch'
                                        
                                        id='custom-switch'
                                        label={checkEnglishLang ? 'English' : 'Английский'}
                                        checked={checkEnglishLang? true : false}
                                        onChange={() => {
                                            setEnglishLang(true)
                                            setRussianLang(false)
                                        }}/>
                                    <Form.Check
                                        type='switch'
                                        id='custom-switch'
                                        checked={checkRussianLang ? true : false}
                                        label={checkRussianLang ? 'Русский': 'Russian'} 
                                        onChange={() => {
                                            setRussianLang(!checkRussianLang)
                                            setEnglishLang(!checkEnglishLang)
                                        }}/>                                    
                                </Form>
                            </div>

                            <div className='VR_ChangeDarkTheme_LoginPage'>
                                <div className='VR_HeaderChangeTheme_LoginPage'>
                                    <div className={`VR_WhiteTheme ${darkTheme ? '' : 'WhiteThemeActive'}`} onClick={() => setDarkTheme(false)}>
                                        <img src={whiteThemeImg} />
                                    </div>

                                    <div className='VR_DarkTheme' onClick={() => setDarkTheme(true)}>
                                        <img src={darkThemeImg}  />
                                    </div>

                                    <div className={`VR_ActiveBlock ${darkTheme ? 'VR_ActiveBlock_Dark' : 'VR_ActiveBlock_White'}`}>
                                        <DoneAllIcon className='VR_DoneIcon_LoginPage' sx={{fontSize: 20}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    showGoPassword ? (null) : (
                        <div className='VR_SettingBlock_LoginPage' onClick={() => setShowSettingBloxk(true)}>
                            <SettingsIcon className='VR_Gear_LoginPage'/>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default observer(Loginpage);