import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useState } from 'react';

import '../RegistrationPages/RegistrationPages.css'

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import SettingsIcon from '@mui/icons-material/Settings';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import CloseIcon from '@mui/icons-material/Close';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';

import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';

import whiteThemeImg from '../../images/whiteTheme.png'
import darkThemeImg from '../../images/DarkTheme.png'

import { Context } from '../../index.tsx';
import UserService from '../../services/UserService.ts';
import { useNavigate } from 'react-router-dom';


const RepistrationPages:FC = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [confirmShowPassword, setConfirmShowPassword] = useState(false)

    const [showSettingBlock, setShowSettingBlock] = useState(false)

    const [checkEnglishLang, setEnglishLang] = useState(false)
    const [checkRussianLang, setRussianLang] = useState(true)

    const [darkTheme, setDarkTheme] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [styleRegBtn, setStyleRegBtn] = useState(false)

    const { store } = useContext(Context)

    const navigate = useNavigate()

    async function validationPasswordLenght() {
        if (String(password).length < 5) {
            alert('Длина пароля должна составлять не меньше 5 символов!')
            return 2;
        } else {
            return 1;
        }
    }

    async function setLocalUser(email: string) {
        store.setLoading(true)

        try {
            
            const userRes = await UserService.getItilUser()

            userRes.data.map((item) => {
                if (String(item.email) === String(email)) {

                    localStorage.setItem('UserName', item.name)
                    localStorage.setItem('UserUID', item.uid)
                    localStorage.setItem('UserEmail', item.email)
                    
                    store.setLoading(true)
                }

                return <></>
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

                return <></>
            })

            store.setLoading(false)

            return

        } catch (e) {
            alert(e);
        } finally {
            store.setLoading(false)
        }
    }

    async function checkNormalizeReg() {
        const emailRes = await UserService.getAllEmail(email)

        try {
            if (!emailRes.data[0]) {
                alert('К сожалению, вы не зарегистрированны в нашей внутренней системе. \n Обратитесь по номеру +996553030911 и мы обязательно поможем Вам с этим вопросом! \n Обращайтесь пожалуйста в WhatsApp или напишите на почту vrastorguev@altyntulpar.kg')
            } else {
                let validationRegIndex = await validationPasswordLenght()
        
                if (validationRegIndex === 1) {
                    const res = await store.registration(email, password)

                    if (String(res) === '200') { 
                
                        await setLocalUser(email)
                        await setLocalCompany()

                        navigate('/home')
                    } else {
                        alert('Неправильный логин или пароль!')
                    }
                } else if (validationRegIndex === 2) {
                    setPassword('')
                    return
                }                  
            }
        } catch (e) {
            alert(e)
        } finally {
            store.setLoading(false)
        }              
    }

    function validationRepeatPassword() {
        if (password !== confirmPassword) {
            alert('Пароли не совпадают!')
            setStyleRegBtn(false)
        } else {
            setStyleRegBtn(true)
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
        <div className={`VR_AllBlock_Loginpage ${darkTheme ? 'VR_AllBlock_Loginpage_dark' : ''}`}>
            <div className='VR_BlueTriangle_Loginpage'></div>
            
            <div className={`VR_LoginBlock_Registration ${darkTheme ? 'VR_LoginBlock_Registration_dark' : ''}`}>
                <div className='VR_CardLoginItem_Registration'>
                    <h4 className={darkTheme ? 'VR_CardLoginItem_Loginpage_h4_dark' : ''}>{checkEnglishLang ? 'Sign Up' : 'Регистрация'}</h4>
                
                    <div className='VR_NameBlock_Registration'>
                        <label>{checkEnglishLang ? 'Name' : 'Имя'}</label>
                        <input 
                            className={darkTheme ? 'VR_EmailBlock_Loginpage_input_dark' : ''}
                            type="text" 
                            placeholder={checkEnglishLang ? 'Name' : 'Имя'}/>
                    </div>

                    <div className='VR_EmailBlock_Registration'>
                        <label>{checkEnglishLang ? 'Email' : 'Почта'}</label>
                        <input 
                            className={darkTheme ? 'VR_EmailBlock_Loginpage_input_dark' : ''}
                            type="email" 
                            placeholder={checkEnglishLang ? 'Email' : 'Почта'}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                            
                    </div>

                    <div className='VR_PasswordBlock_Registration'>
                        <label>{checkEnglishLang ? 'Password' : 'Пароль'}</label>
                        <input
                            className={darkTheme ? 'VR_EmailBlock_Loginpage_input_dark' : ''}
                            type={showPassword ? 'text' : 'password'} 
                            id='password-field'
                            placeholder={checkEnglishLang ? 'Password' : 'Пароль'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}    
                        />

                        <i
                            data-toggle='#password-field'
                            className='VR_EyeIcon_LoginPage'
                            onClick={() => setShowPassword(!showPassword)}>

                                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </i>                        
                    </div>  

                    <div className='VR_ConfirmPasswordBlock_Registration'>
                        <label>{checkEnglishLang ? 'Confirm Password' : 'Подтвердите пароль'}</label>
                        <input 
                            className={darkTheme ? 'VR_EmailBlock_Loginpage_input_dark' : ''}
                            type={confirmShowPassword ? 'text' : 'password'} 
                            id='confirmPassword-field'
                            placeholder={checkEnglishLang ? 'Confirm password' : 'Подтвердите пароль'}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            onBlur={() => validationRepeatPassword()}/>

                        <i
                            data-toggle='#confirmPassword-field'
                            className='VR_EyeIcon_LoginPage'
                            onClick={() => setConfirmShowPassword(!confirmShowPassword)}>

                                {confirmShowPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </i>
                    </div>

                    {styleRegBtn ? (
                        <div className='VR_ButtonBlock_LoginPage'>
                            <Button variant='outline-primary'
                                onClick={() => checkNormalizeReg()}
                            >{checkEnglishLang ? 'Sing up' : 'Зарегистрироваться'}</Button>
                        </div>
                    ) : (
                        <div className='VR_ButtonBlock_LoginPage'>
                            <Button variant='outline-primary' disabled>{checkEnglishLang ? 'Sing up' : 'Зарегистрироваться'}</Button>
                        </div>
                    )}

                    <div className='VR_RemoteSingUp_LoginPage'>
                        <p>{checkEnglishLang ? "You have an account?" : 'Уже есть аккаунт?'} </p>
                        <a href="/">{checkEnglishLang ? 'Sing in' : 'Войдите'}</a>
                    </div>
                </div> 

                {showSettingBlock ? (
                    <div className='VR_ShowSettingBlock_LoginPage'>
                        <div className='VR_RightSettingBlock'></div>

                        <div className='VR_HeaderCloseBlock_LoginPage'>
                            <h4>{checkEnglishLang ? 'Tools' : 'Инструменты'}</h4>
                            <button onClick={() => setShowSettingBlock(false)}><CloseIcon className='VR_Close_LoginPage'/></button>
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
                                        <img src={whiteThemeImg} alt={checkEnglishLang ? 'White theme' : 'Светлая тема'}/>
                                    </div>

                                    <div className='VR_DarkTheme' onClick={() => setDarkTheme(true)}>
                                        <img src={darkThemeImg}  alt={checkEnglishLang ? 'Dark theme' : 'Темная тема'}/>
                                    </div>

                                    <div className={`VR_ActiveBlock ${darkTheme ? 'VR_ActiveBlock_Dark' : 'VR_ActiveBlock_White'}`}>
                                        <DoneAllIcon className='VR_DoneIcon_LoginPage' sx={{fontSize: 20}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='VR_SettingBlock_LoginPage' onClick={() => setShowSettingBlock(true)}>
                        <SettingsIcon className='VR_Gear_LoginPage'/>
                    </div>
                )}             
            </div>
        </div>
    );
};

export default observer(RepistrationPages);