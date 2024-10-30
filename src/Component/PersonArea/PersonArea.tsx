import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useEffect, useState } from 'react';
import { Context } from '../../index.tsx';
import UserService from '../../services/UserService.ts';
import { oneItilUser } from '../../models/Itil/userModels/oneUserModels.ts';

import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';

import '../PersonArea/PersonArea.css'

const PersonArea:FC = () => {    
    const [fullName, setFullName] = useState('')

    const [userName, setUserName] = useState('')
    const [userSecondName, setUserSecondName] = useState('')
    const [userSurname, setUserSurname] = useState('')
    
    const [userEmail, setUserEmail] = useState('')
    const [userPhone, setUserPhone] = useState('')

    const [userOrganization, setUserOrganization] = useState('')
    const [userSubdivision, setUserSubdivizion] = useState('')
    const [userJobTitle, setUserJobTitle] = useState('')

    const { store } = useContext(Context)

    useEffect(() => {
        getUserData()
    }, [])

    async function getUserData() {
        store.setLoading(true)

        try {
            const email = String(localStorage.getItem('UserEmail'))

            const res = await UserService.getOneItilUser(email)

            res.data.map((item, index) => {
                setFullName(item.fullName)
                
                setUserName(item.name)
                setUserSecondName(item.secondName)
                setUserSurname(item.surname)

                setUserEmail(item.email)
                setUserPhone(item.phoneNumber)

                setUserOrganization(item.organization)
                setUserSubdivizion(item.subdivision)
                setUserJobTitle(item.jobTitle)
            })
        } catch(e) {
            console.log(e)
        } finally {
            store.setLoading(false)
        }
    }

    if (store.isLoading) {
        return (
            <div className='VR_Container_CreateTask VR_ContainerOnLoad_CreateTask'>
                {/* <div className='VR_PreSpinnerBlock'> */}
                    <FlipCameraAndroidIcon className='VR_Spinner'/>
                {/* </div>     */}
            </div>
        )
    }

    return (
        <div className='VR_Container_CreateTask'>
            
            <div className='VR_PreContainer_PersonArea'>
                <div className='VR_TitleBlock_PersonArea'>
                    <h3>Личный кабинет</h3>
                </div>

                <div className='VR_userDataBlock_PersonArea'>

                    <div className='VR_userInfoBlock_PersonArea'>

                        <div className="VR_dataContainer_PersonArea">
                            <h4>Информация о пользователе</h4>

                            <div className='VR_fullName_PersonArea'>
                                <h5>Полное имя:</h5>
                                <input 
                                    type="text" 
                                    placeholder='Ваше полное имя...'
                                    value={fullName}
                                    readOnly/>
                            </div>

                            <div className='VR_fullNameConstructor_PersonArea'>
                                <div className='VR_userName_PersonArea'>
                                    <h5>Имя:</h5>
                                    <input 
                                        type="text" 
                                        placeholder='Ваше имя...'
                                        value={userName}
                                        onChange={(e) => {
                                            setUserName(e.target.value)
                                            setFullName(userSecondName + ' ' + e.target.value + ' ' + userSurname)
                                        }}/>
                                </div>

                                <div className='VR_userSecondName_PersonArea'>
                                    <h5>Фамилия:</h5>
                                    <input 
                                        type="text" 
                                        placeholder='Ваша фамилия...'
                                        value={userSecondName}
                                        onChange={(e) => {
                                            setUserSecondName(e.target.value)
                                            setFullName(e.target.value + ' ' + userName + ' ' + userSurname)
                                        }}/>
                                </div>

                                <div className='VR_surname_PersonArea'>
                                    <h5>Отчетсво:</h5>
                                    <input 
                                        type="text" 
                                        placeholder='Ваше отчетсво...'
                                        value={userSurname}
                                        onChange={(e) => {
                                            setUserSurname(e.target.value)
                                            setFullName(userSecondName + ' ' + userName + ' ' + e.target.value)
                                        }}/>
                                </div>
                            </div>
                        
                        </div>
                    </div>



                    <div className='VR_feedBackBlock_PersonArea'>                        
                        <div className='VR_feedbackContainer_PersonArea'>
                             
                            <h4>Обратная связь</h4>

                            <div className='VR_emailBlock_PersonArea'>
                                <h5>Корпоративная почта:</h5>
                                <input 
                                    type="text" 
                                    placeholder='Ваша почта...'
                                    value={userEmail}
                                    onChange={(e) => setUserEmail(e.target.value)}/>
                            </div>

                            <div className='VR_phoneBlock_PersonArea'>
                                <h5>Номер телефона:</h5>
                                <input 
                                    type="text" 
                                    placeholder='Ваш номер телефона'
                                    value={userPhone}
                                    onChange={(e) => setUserPhone(e.target.value)}/>
                            </div>

                        </div>
                    </div>
                    
                    <div className='VR_jobLifeBlock_PersonArea'>
                        <div className='VR_jobLifeContainer_PersonArea'>
                            
                            <h4>Корпоративная информация</h4>
                            
                            <div className='VR_userOrganizationBlock_PersonArea'>
                                <h5>Организация:</h5>
                                <input 
                                    type="text" 
                                    placeholder='ВашаОрганизация...'
                                    value={userOrganization}
                                    onChange={(e) => setUserOrganization(e.target.value)}/>
                            </div>

                            <div className='VR_userSubdivisionBlock_PersonArea'>
                                <h5>Подразделение:</h5>
                                <input 
                                    type="text" 
                                    placeholder='Ваше подразделение...'
                                    value={userSubdivision}
                                    onChange={(e) => setUserSubdivizion}/>
                            </div>

                            <div className='VR_userJobTitleBlock_PersonArea'>
                                <h5>Должность:</h5>
                                <input 
                                    type="text" 
                                    placeholder='Ваша должность...'
                                    value={userJobTitle}
                                    onChange={(e) => setUserJobTitle}/>
                            </div>
                        
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default observer(PersonArea);