import { observer } from 'mobx-react-lite';
import React, { FC, useState } from 'react';
import { AccessInterface } from '../Interface/Access';

import '../Access/Access.css'
// import '../../../CreateTask/CreateTask.css'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Access:FC<AccessInterface> = ({ AccessObj }) => {
    const [droptask, setDropTask] = useState(false)
    const [dropTaskService, setDropTaskService] = useState(false)
    const [selectUserArrowA, setSelectUserArrowA] = useState('--')
    const [selectTaskServiceA, setSelectTaskServiceA] = useState('--')

    return (
        <>        
            <h3 className='VR_ComponentTitle_AccessBlock'>Создание запроса на доступ</h3>

            {/* --------------------------------------------------------------------------------------------------- */}
            <div className='VR_TaskNameBlock_CreateTask VR_DecorationBlock_CreateTaskPodComponent'>
                <h5>Наименование:</h5>
                <input 
                    type="text" 
                    placeholder='Наименование'
                    value={AccessObj.taskName}
                    onChange={(e) => AccessObj.changeAccessTaskName?.(e.target.value)}/>
            </div>
            {/* --------------------------------------------------------------------------------------------------- */}

            {/* --------------------------------------------------------------------------------------------------- */}
            <div className='VR_TaskOrganization_CreateTask VR_DecorationBlock_CreateTaskPodComponent'>
                <h5>Услуга:</h5>

                <div className='VR_SelectBlock_CreateTask'>
                    <div className='VR_HeaderSelect_CreateTask'>
                        <div className='VR_FilterSelect_CreateTask' onClick={() => {
                            setDropTaskService(!dropTaskService)
                            setDropTask(false)
                        }}>
                            <p>{selectTaskServiceA}</p>
                            <p>{dropTaskService ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</p>
                        </div>
                    </div>

                    <div className={`VR_Filters_CreateTask ${dropTaskService ? 'VR_ShowFilters_CreateTask' : 'VR_unShowFilters_CreateTask'}`}>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            AccessObj.changeAccessTaskService?.('--')
                            setSelectTaskServiceA('--')
                            setDropTaskService(!dropTaskService)
                        }}>--</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            AccessObj.changeAccessTaskService?.('Создание кода отпечатков пальцев')
                            setSelectTaskServiceA('Создание кода отпечатков пальцев')
                            setDropTaskService(!dropTaskService)
                        }}>Создание кода отпечатков пальцев</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            AccessObj.changeAccessTaskService?.('Подготовка электронных карт доступа')
                            setSelectTaskServiceA('Подготовка электронных карт доступа')
                            setDropTaskService(!dropTaskService)
                        }}>Подготовка электронных карт доступа</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            AccessObj.changeAccessTaskService?.('Настройки прав доступа в общие папки')
                            setSelectTaskServiceA('Настройки прав доступа в общие папки')
                            setDropTaskService(!dropTaskService)
                        }}>Настройки прав доступа в общие папки</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            AccessObj.changeAccessTaskService?.('Блокировка почты уволенного сотрудника')
                            setSelectTaskServiceA('Блокировка почты уволенного сотрудника')
                            setDropTaskService(!dropTaskService)
                        }}>Блокировка почты уволенного сотрудника</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            AccessObj.changeAccessTaskService?.('Блокировка карты доступа уволенного сотрудника')
                            setSelectTaskServiceA('Блокировка карты доступа уволенного сотрудника')
                            setDropTaskService(!dropTaskService)
                        }}>Блокировка карты доступа уволенного сотрудника</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            AccessObj.changeAccessTaskService?.('Установка 1с')
                            setSelectTaskServiceA('Установка 1с')
                            setDropTaskService(!dropTaskService)
                        }}>Установка 1с</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            AccessObj.changeAccessTaskService?.('Создание учетной записи ЗУП')
                            setSelectTaskServiceA('Создание учетной записи ЗУП')
                            setDropTaskService(!dropTaskService)
                        }}>Создание учетной записи ЗУП</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            AccessObj.changeAccessTaskService?.('Создание учетной записи АА6')
                            setSelectTaskServiceA('Создание учетной записи АА6')
                            setDropTaskService(!dropTaskService)
                        }}>Создание учетной записи АА6</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            AccessObj.changeAccessTaskService?.('Создание учетной записи АА4')
                            setSelectTaskServiceA('Создание учетной записи АА4')
                            setDropTaskService(!dropTaskService)
                        }}>Создание учетной записи АА4</div>

                    </div>
                </div>
            </div>
            {/* --------------------------------------------------------------------------------------------------- */}

            {/* --------------------------------------------------------------------------------------------------- */}
            <div className='VR_accessUserName_CreateTask VR_DecorationBlock_CreateTaskPodComponent'>
                <h5>Имя сотрудника для предоставления доступа:</h5>
                <input 
                    type="text"
                    placeholder='Имя сотрудника...' 
                    value={AccessObj.accessUser}
                    onChange={(e) => AccessObj.changeAccessUser?.(e.target.value)}/>
            </div>
            {/* --------------------------------------------------------------------------------------------------- */}

            {/* --------------------------------------------------------------------------------------------------- */}
            <div className='VR_subdivisionUser_CreateTask VR_DecorationBlock_CreateTaskPodComponent'>
                <h5>Подразделение сотрудника:</h5>
                <input 
                    type="text" 
                    placeholder='Подразделение сотрудника...'
                    value={AccessObj.subdivisionUser}
                    onChange={(e) => AccessObj.changeSubdivisionUser?.(e.target.value)}/>
            </div>
            {/* --------------------------------------------------------------------------------------------------- */}

            {/* --------------------------------------------------------------------------------------------------- */}
            <div className='VR_userEmail_CreateTask VR_DecorationBlock_CreateTaskPodComponent'>
                <h5>Почта пользователя</h5>
                <input 
                    type="text" 
                    placeholder='Почта пользователя...'
                    value={AccessObj.userEmail}
                    onChange={(e) => AccessObj.changeUserEmail?.(e.target.value)}/>
            </div>
            {/* --------------------------------------------------------------------------------------------------- */}

            {/* --------------------------------------------------------------------------------------------------- */}
            <div className='VR_userArrow_CreateTask VR_DecorationBlock_CreateTaskPodComponent'>
                <h5>Направление пользователя</h5>
            
                <div className='VR_SelectBlock_CreateTask'>
                    <div className='VR_HeaderSelect_CreateTask'>
                        <div className='VR_FilterSelect_CreateTask' onClick={() => {
                            setDropTask(!droptask)
                            setDropTaskService(false)
                        }}>
                            
                            <p>{selectUserArrowA}</p>
                            <p>{droptask ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</p>
                        </div>
                    </div>

                    <div className={`VR_Filters_CreateTask ${droptask ? 'VR_ShowFilters_CreateTask' : 'VR_unShowFilters_CreateTask'}`}>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            AccessObj.changeUserArrow?.('--')
                            setSelectUserArrowA('--')
                            setDropTask(!droptask)
                        }}>--</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            AccessObj.changeUserArrow?.('CR')
                            setSelectUserArrowA('CR')
                            setDropTask(!droptask)
                        }}>CR</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            AccessObj.changeUserArrow?.('HR')
                            setSelectUserArrowA('HR')
                            setDropTask(!droptask)
                        }}>HR</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            AccessObj.changeUserArrow?.('Контакт Центр')
                            setSelectUserArrowA('Контакт Центр')
                            setDropTask(!droptask)
                        }}>Контакт Центр</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            AccessObj.changeUserArrow?.('КСО')
                            setSelectUserArrowA('КСО')
                            setDropTask(!droptask)
                        }}>КСО</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            AccessObj.changeUserArrow?.('ППО')
                            setSelectUserArrowA('ППО')
                            setDropTask(!droptask)
                        }}>ППО</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            AccessObj.changeUserArrow?.('Продажи')
                            setSelectUserArrowA('Продажи')
                            setDropTask(!droptask)
                        }}>Продажи</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            AccessObj.changeUserArrow?.('Финансовый департамент')
                            setSelectUserArrowA('Финансовый департамент')
                            setDropTask(!droptask)
                        }}>Финансовый департамент</div>

                    </div>
                </div>
            </div>
            {/* --------------------------------------------------------------------------------------------------- */}

            {/* --------------------------------------------------------------------------------------------------- */}
            <div className='VR_userStatus_TaskService VR_DecorationBlock_CreateTaskPodComponent'>
                <h5>Должность пользователя:</h5>
                <input 
                    type="text" 
                    placeholder='Должность пользователя...'
                    value={AccessObj.userStatus}
                    onChange={(e) => AccessObj.changeUserStatus?.(e.target.value)}/>
            </div>
            {/* --------------------------------------------------------------------------------------------------- */}

            {/* --------------------------------------------------------------------------------------------------- */}
            <div className='VR_detailsAccess_CreateTask VR_DecorationBlock_CreateTaskPodComponent'>
                <h5>Детальное описание</h5>
                <textarea 
                    rows={4}
                    placeholder='Детальное описание...'
                    value={AccessObj.detailsAscces}
                    onChange={(e) => AccessObj.changeDetailsAscces?.(e.target.value)}
                ></textarea>
            </div>
            {/* --------------------------------------------------------------------------------------------------- */}
        </>
    );
};

export default observer(Access);