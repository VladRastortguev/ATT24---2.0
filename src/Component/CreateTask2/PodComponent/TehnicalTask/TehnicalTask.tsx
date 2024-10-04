import { observer } from 'mobx-react-lite';
import React, { FC, useState } from 'react';
import { TehnicalInterface } from '../Interface/Tehnical';

import '../TehnicalTask/TehnicalTask.css'
import '../Access/Access.css'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const TehnicalTask:FC<TehnicalInterface> = ({ TeinicalObj }) => {

    const [dropTaskArrow, setDropTaskArrow] = useState(false)
    const [dropTaskService, setDropTaskService] = useState(false)
    const [dropPriority, setDropPriority] = useState(false)
    const [dropPriorityDescr, setDropPriorityDescr] = useState(false)
    const [dropUrgency, setDropUrgency] = useState(false)

    const [selectTaskArrowT, setSelectTaskArrowT] = useState('')
    const [selectTaskServiceT, setSelectTaskServiceT] = useState('')
    const [selectPriorityT, setSelectPriorityT] = useState('')
    const [selectPriorityDescrT, setSelectPriorityDescrT] = useState('')
    const [selectUrgencyT, setSelectUrgencyT] = useState('')

    function resetTaskList(taskArrow: string) {
        switch (taskArrow) {            
            case 'Коммуникации':
                return (
                    <>                    
                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('--')
                            setSelectTaskServiceT('--')
                            setDropTaskService(!dropTaskService)
                        }}>--</div> 

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('Настройка почты на рабочий компьютер')
                            setSelectTaskServiceT('Настройка почты на рабочий компьютер')
                            setDropTaskService(!dropTaskService)
                        }}>Настройка почты на рабочий компьютер</div> 

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('Настройка почты на телефон')
                            setSelectTaskServiceT('Настройка почты на телефон')
                            setDropTaskService(!dropTaskService)
                        }}>Настройка почты на телефон</div> 

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('Сбой в работе электронной почты')
                            setSelectTaskServiceT('Сбой в работе электронной почты')
                            setDropTaskService(!dropTaskService)
                        }}>Сбой в работе электронной почты</div> 

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('Создание аккаунтов microsoft zoom и др')
                            setSelectTaskServiceT('Создание аккаунтов microsoft zoom и др')
                            setDropTaskService(!dropTaskService)
                        }}>Создание аккаунтов microsoft zoom и др</div> 

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('Создание почты')
                            setSelectTaskServiceT('Создание почты')
                            setDropTaskService(!dropTaskService)
                        }}>Создание почты</div>  
                    </>
                )

            case 'Монтажные работы': 
                return (
                    <>                    
                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('--')
                            setSelectTaskServiceT('--')
                            setDropTaskService(!dropTaskService)
                        }}>--</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('Монтаж кабеля интернета для рабочего места')
                            setSelectTaskServiceT('Монтаж кабеля интернета для рабочего места')
                            setDropTaskService(!dropTaskService)
                        }}>Монтаж кабеля интернета для рабочего места</div>
                        
                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('Монтаж камер видеонаблюдения')
                            setSelectTaskServiceT('Монтаж камер видеонаблюдения')
                            setDropTaskService(!dropTaskService)
                        }}>Монтаж камер видеонаблюдения</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('Монтаж системы контроля доступа')
                            setSelectTaskServiceT('Монтаж системы контроля доступа')
                            setDropTaskService(!dropTaskService)
                        }}>Монтаж системы контроля доступа</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('Монтаж системы контроля учета рабочего времени')
                            setSelectTaskServiceT('Монтаж системы контроля учета рабочего времени')
                            setDropTaskService(!dropTaskService)
                        }}>Монтаж системы контроля учета рабочего времени</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('Монтаж точки WiFi')
                            setSelectTaskServiceT('Монтаж точки WiFi')
                            setDropTaskService(!dropTaskService)
                        }}>Монтаж точки WiFi</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('Перенос компьютерного оборудования')
                            setSelectTaskServiceT('Перенос компьютерного оборудования')
                            setDropTaskService(!dropTaskService)
                        }}>Перенос компьютерного оборудования</div>
                    </>
                )

            case 'Настройка и обслуживание':
                return (
                    <>
                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('--')
                            setSelectTaskServiceT('--')
                            setDropTaskService(!dropTaskService)
                        }}>--</div>  

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('Настройка МФУ')
                            setSelectTaskServiceT('Настройка МФУ')
                            setDropTaskService(!dropTaskService)
                        }}>Настройка МФУ</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('Настройка оргтехники')
                            setSelectTaskServiceT('Настройка оргтехники')
                            setDropTaskService(!dropTaskService)
                        }}>Настройка оргтехники</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('Настройка принтера')
                            setSelectTaskServiceT('Настройка принтера')
                            setDropTaskService(!dropTaskService)
                        }}>Настройка принтера</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('Настройка сканера')
                            setSelectTaskServiceT('Настройка сканера')
                            setDropTaskService(!dropTaskService)
                        }}>Настройка сканера</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('Подготовка АРМ нового сотрудника')
                            setSelectTaskServiceT('Подготовка рабочего места нового сотрудника')
                            setDropTaskService(!dropTaskService)
                        }}>Подготовка рабочего места нового сотрудника</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('Подключение переферийных устройств')
                            setSelectTaskServiceT('Подключение переферийных устройств')
                            setDropTaskService(!dropTaskService)
                        }}>Подключение переферийных устройств</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('Профилактика компьютера')
                            setSelectTaskServiceT('Профилактика компьютера')
                            setDropTaskService(!dropTaskService)
                        }}>Профилактика компьютера</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('Профилактика оргтехники')
                            setSelectTaskServiceT('Профилактика оргтехники')
                            setDropTaskService(!dropTaskService)
                        }}>Профилактика оргтехники</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('Сбой в работе wifi')
                            setSelectTaskServiceT('Сбой в работе wifi')
                            setDropTaskService(!dropTaskService)
                        }}>Сбой в работе wifi</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('Сбой в работе оргтехники')
                            setSelectTaskServiceT('Сбой в работе оргтехники')
                            setDropTaskService(!dropTaskService)
                        }}>Сбой в работе оргтехники</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('Заправка картриджей')
                            setSelectTaskServiceT('Заправка картриджей')
                            setDropTaskService(!dropTaskService)
                        }}>Заправка картриджей</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('Закупка оргтехники')
                            setSelectTaskServiceT('Закупка оргтехники')
                            setDropTaskService(!dropTaskService)
                        }}>Закупка оргтехники</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('Ремонт оргтехники')
                            setSelectTaskServiceT('Ремонт оргтехники')
                            setDropTaskService(!dropTaskService)
                        }}>Ремонт оргтехники</div>                      
                    </>
                )

            case 'Настройка ПО':
                return (
                    <>                    
                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('--')
                            setSelectTaskServiceT('--')
                            setDropTaskService(!dropTaskService)
                        }}>--</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('Активация операционной системы')
                            setSelectTaskServiceT('Активация операционной системы')
                            setDropTaskService(!dropTaskService)
                        }}>Активация операционной системы</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('Активация/установка офисного пакета MS Office')
                            setSelectTaskServiceT('Активация/установка офисного пакета MS Office')
                            setDropTaskService(!dropTaskService)
                        }}>Активация/установка офисного пакета MS Office</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('Настройка камер на личный телефон')
                            setSelectTaskServiceT('Настройка камер на личный телефон')
                            setDropTaskService(!dropTaskService)
                        }}>Настройка камер на личный телефон</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('Настройка камер на рабочий компьютер')
                            setSelectTaskServiceT('Настройка камер на рабочий компьютер')
                            setDropTaskService(!dropTaskService)
                        }}>Настройка камер на рабочий компьютер</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('Настройка удаленного доступа (VPN)')
                            setSelectTaskServiceT('Настройка удаленного доступа (VPN)')
                            setDropTaskService(!dropTaskService)
                        }}>Настройка удаленного доступа (VPN)</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('Установка операционной системы')
                            setSelectTaskServiceT('Установка операционной системы')
                            setDropTaskService(!dropTaskService)
                        }}>Установка операционной системы</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('Установка программного обеспечения')
                            setSelectTaskServiceT('Установка программного обеспечения')
                            setDropTaskService(!dropTaskService)
                        }}>Установка программного обеспечения</div>  
                    </>
                )

            default:
                return (
                    <>
                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskService?.('--')
                            setSelectTaskServiceT('--')
                            setDropTaskService(!dropTaskService)
                        }}>--</div>
                    </>
                )
        }
    }

    function resetTaskPriority(taskPriority: string) {
        switch (taskPriority) {
            case 'Низкий':
                return (
                    <>
                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changePriorityDescr?.('--')
                            setSelectPriorityDescrT('--')
                            setDropPriorityDescr(!dropPriorityDescr)
                        }}>--</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changePriorityDescr?.('Незначительные проблемы')
                            setSelectPriorityDescrT('Незначительные проблемы')
                            setDropPriorityDescr(!dropPriorityDescr)
                        }}>Незначительные проблемы</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changePriorityDescr?.('Нет непосредственной угрозы функциональности')
                            setSelectPriorityDescrT('Нет непосредственной угрозы функциональности')
                            setDropPriorityDescr(!dropPriorityDescr)
                        }}>Нет непосредственной угрозы функциональности</div>                         
                    </>
                )

            case 'Средний':
                return (
                    <>                    
                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changePriorityDescr?.('--')
                            setSelectPriorityDescrT('--')
                            setDropPriorityDescr(!dropPriorityDescr)
                        }}>--</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changePriorityDescr?.('Частичное снижение функциональности')
                            setSelectPriorityDescrT('Частичное снижение функциональности')
                            setDropPriorityDescr(!dropPriorityDescr)
                        }}>Частичное снижение функциональности</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changePriorityDescr?.('Проблема имеет временное решение')
                            setSelectPriorityDescrT('Проблема имеет временное решение')
                            setDropPriorityDescr(!dropPriorityDescr)
                        }}>Проблема имеет временное решение</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changePriorityDescr?.('Проблема не имеет временного решения')
                            setSelectPriorityDescrT('Проблема не имеет временного решения')
                            setDropPriorityDescr(!dropPriorityDescr)
                        }}>Проблема не имеет временного решения</div>
                    </>
                )

            case 'Высокий':
                return (
                    <>
                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changePriorityDescr?.('--')
                            setSelectPriorityDescrT('--')
                            setDropPriorityDescr(!dropPriorityDescr)
                        }}>--</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changePriorityDescr?.('Значительное снижение функциональности')
                            setSelectPriorityDescrT('Значительное снижение функциональности')
                            setDropPriorityDescr(!dropPriorityDescr)
                        }}>Значительное снижение функциональности</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changePriorityDescr?.('Проблема затрагивает ограниченное количество пользователей')
                            setSelectPriorityDescrT('Проблема затрагивает ограниченное количество пользователей')
                            setDropPriorityDescr(!dropPriorityDescr)
                        }}>Проблема затрагивает ограниченное количество пользователей</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changePriorityDescr?.('Проблема не влияет на работу большого количества пользователей')
                            setSelectPriorityDescrT('Проблема не влияет на работу большого количества пользователей')
                            setDropPriorityDescr(!dropPriorityDescr)
                        }}>Проблема не влияет на работу большого количества пользователей</div>
                    </>
                )

            case 'Критический':
                return (
                    <>
                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changePriorityDescr?.('--')
                            setSelectPriorityDescrT('--')
                            setDropPriorityDescr(!dropPriorityDescr)
                        }}>--</div>
                    
                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changePriorityDescr?.('Полная потеря функциональности продукта')
                            setSelectPriorityDescrT('Полная потеря функциональности продукта')
                            setDropPriorityDescr(!dropPriorityDescr)
                        }}>Полная потеря функциональности продукта</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changePriorityDescr?.('Проблема затрагивает большое количество пользователей')
                            setSelectPriorityDescrT('Проблема затрагивает большое количество пользователей')
                            setDropPriorityDescr(!dropPriorityDescr)
                        }}>Проблема затрагивает большое количество пользователей</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changePriorityDescr?.('Проблема не влияет на работу большого количества пользователей')
                            setSelectPriorityDescrT('Проблема не влияет на работу большого количества пользователей')
                            setDropPriorityDescr(!dropPriorityDescr)
                        }}>Проблема не влияет на работу большого количества пользователей</div>
                    </>
                )

            default:
                return (
                    <>
                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changePriorityDescr?.('--')
                            setSelectPriorityDescrT('--')
                            setDropPriorityDescr(!dropPriorityDescr)
                        }}>--</div>
                    </>
                )
        }
    }

    return (
        <>
            <h3 className='VR_ComponentTitle_TehnicalTask'>Создание запроса на обслуживание</h3>

            <div className='VR_TaskName_TehnicalTask VR_decotaionBlock_TehnicalTask'>
                <h5>Наименование:</h5>
                <input 
                    type="text" 
                    placeholder='Наименование...'
                    value={TeinicalObj.taskName}
                    onChange={(e) => TeinicalObj.changeTaskName?.(e.target.value)}/>
            </div>

            <div className='VR_taskArrow_TehnicalTask VR_decotaionBlock_TehnicalTask'>
                <h5>Направление задачи:</h5>                

                <div className='VR_SelectBlock_CreateTask'>
                    <div className='VR_HeaderSelect_CreateTask'>
                        <div className='VR_FilterSelect_CreateTask' onClick={() => {
                            setDropTaskArrow(!dropTaskArrow)
                            setDropTaskService(false)
                            setDropPriority(false)
                            setDropPriorityDescr(false)
                            setDropUrgency(false)
                        }}>
                            
                            <p>{selectTaskArrowT}</p>
                            <p>{dropTaskArrow ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</p>
                        </div>
                    </div>

                    <div className={`VR_Filters_CreateTask ${dropTaskArrow ? 'VR_ShowFilters_CreateTask' : 'VR_unShowFilters_CreateTask'}`}>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskArrow?.('--')
                            setSelectTaskArrowT('--')
                            setDropTaskArrow(!dropTaskArrow)
                            setSelectTaskServiceT('--')
                        }}>--</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskArrow?.('Коммуникации')
                            setSelectTaskArrowT('Коммуникации')
                            setDropTaskArrow(!dropTaskArrow)
                            setSelectTaskServiceT('--')
                        }}>Коммуникации</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskArrow?.('Монтажные работы')
                            setSelectTaskArrowT('Монтажные работы')
                            setDropTaskArrow(!dropTaskArrow)
                            setSelectTaskServiceT('--')
                        }}>Монтажные работы</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskArrow?.('Настройка и обслуживание')
                            setSelectTaskArrowT('Настройка и обслуживание')
                            setDropTaskArrow(!dropTaskArrow)
                            setSelectTaskServiceT('--')
                        }}>Настройка и обслуживание</div> 

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            TeinicalObj.changeTaskArrow?.('Настройка ПО')
                            setSelectTaskArrowT('Настройка ПО')
                            setDropTaskArrow(!dropTaskArrow)
                            setSelectTaskServiceT('--')
                        }}>Настройка ПО</div>    

                    </div>
                </div>

            </div>

            <div className='VR_TaskList_TehnikalTask VR_decotaionBlock_TehnicalTask'>
                <h5>Задача:</h5>

                <div className='VR_SelectBlock_CreateTask'>
                    <div className='VR_HeaderSelect_CreateTask'>
                        <div className='VR_FilterSelect_CreateTask' onClick={() => {
                            setDropTaskArrow(false)
                            setDropTaskService(!dropTaskService)
                            setDropPriority(false)
                            setDropPriorityDescr(false)
                            setDropUrgency(false)
                        }}>
                            
                            <p>{selectTaskServiceT}</p>
                            <p>{dropTaskService ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</p>
                        </div>
                    </div>

                    <div className={`VR_Filters_CreateTask ${dropTaskService ? 'VR_ShowFilters_CreateTask' : 'VR_unShowFilters_CreateTask'}`}>                           
                        {resetTaskList(selectTaskArrowT)}
                    </div>
                </div>
            
            </div>

            {String(selectTaskServiceT).split(' ')[0] == "Монтаж" || String(selectTaskServiceT).split(' ')[0] == "Перенос" ? (
                <div className='VR_TaskLocation_TehnikalTask VR_decotaionBlock_TehnicalTask'>
                    <h5>На территории:</h5>
                    <input 
                        type="text" 
                        placeholder='На территории...'
                        value={TeinicalObj.taskLocation}
                        onChange={(e) => {
                            TeinicalObj.changeTaskLocation?.(e.target.value)
                            TeinicalObj.changeMailUser?.('')
                            TeinicalObj.changeUserOrganization?.('')
                            TeinicalObj.changeDateError?.('')
                            TeinicalObj.changeErrorCause?.('')
                            TeinicalObj.changeErrorResponsible?.('')
                            TeinicalObj.changeAccountUser?.('')
                            TeinicalObj.changeAccountList?.('')
                            TeinicalObj.changeAccountOrganization?.('')
                            TeinicalObj.changeTehnicalElement?.('')
                        }}/>
                </div>
            ) : (
                null
            )}

            {selectTaskServiceT == "Создание почты" ? (
                <>
                    <div className='VR_MailUser_TehnicalTask VR_decotaionBlock_TehnicalTask'>
                        <h5>Имя пользователя для почты:</h5>
                        <input 
                            type="text" 
                            placeholder='Пользователь почты...'
                            value={TeinicalObj.mailUser}
                            onChange={(e) => {
                                TeinicalObj.changeTaskLocation?.('')
                                TeinicalObj.changeMailUser?.(e.target.value)
                                TeinicalObj.changeDateError?.('')
                                TeinicalObj.changeErrorCause?.('')
                                TeinicalObj.changeErrorResponsible?.('')
                                TeinicalObj.changeAccountUser?.('')
                                TeinicalObj.changeAccountList?.('')
                                TeinicalObj.changeAccountOrganization?.('')
                                TeinicalObj.changeTehnicalElement?.('')
                            }}/>
                    </div>

                    <div className='VR_MailOrganization_TehnicalTask VR_decotaionBlock_TehnicalTask'>
                        <h5>Организация пользователя для почты:</h5>
                        <input 
                            type="text" 
                            placeholder='Организация пользователя...'
                            value={TeinicalObj.userOrganization}
                            onChange={(e) => {
                                TeinicalObj.changeTaskLocation?.('')
                                TeinicalObj.changeUserOrganization?.(e.target.value)
                                TeinicalObj.changeDateError?.('')
                                TeinicalObj.changeErrorCause?.('')
                                TeinicalObj.changeErrorResponsible?.('')
                                TeinicalObj.changeAccountUser?.('')
                                TeinicalObj.changeAccountList?.('')
                                TeinicalObj.changeAccountOrganization?.('')
                                TeinicalObj.changeTehnicalElement?.('')    
                            }}/>
                    </div>
                </>
            ) : (
                null
            )}

            {String(selectTaskServiceT).split(' ')[0] == 'Сбой' ? (
                <>
                    <div className='VR_dateError_TehnicalTask VR_decotaionBlock_TehnicalTask'>
                        <h5>Как давно случился сбой?</h5>
                        <input 
                            type="text" 
                            placeholder='Время сбой...'
                            value={TeinicalObj.dateError}
                            onChange={(e) => {
                                TeinicalObj.changeTaskLocation?.('')
                                TeinicalObj.changeMailUser?.('')
                                TeinicalObj.changeUserOrganization?.('')
                                TeinicalObj.changeDateError?.(e.target.value)
                                TeinicalObj.changeAccountUser?.('')
                                TeinicalObj.changeAccountList?.('')
                                TeinicalObj.changeAccountOrganization?.('')
                                TeinicalObj.changeTehnicalElement?.('')
                            }}/>
                    </div>

                    <div className='VR_ErrorCause_TrhnicalTask VR_decotaionBlock_TehnicalTask'>
                        <h5>Причина сбоя:</h5>
                        <input 
                            type="text" 
                            placeholder='Причина сбоя...'
                            value={TeinicalObj.errorCause}
                            onChange={(e) => {
                                TeinicalObj.changeTaskLocation?.('')
                                TeinicalObj.changeMailUser?.('')
                                TeinicalObj.changeUserOrganization?.('')
                                TeinicalObj.changeErrorCause?.(e.target.value)
                                TeinicalObj.changeAccountUser?.('')
                                TeinicalObj.changeAccountList?.('')
                                TeinicalObj.changeAccountOrganization?.('')
                                TeinicalObj.changeTehnicalElement?.('')
                            }}/>
                    </div>

                    <div className='VR_ErrorResponsible_TehnicalTask VR_decotaionBlock_TehnicalTask'>
                        <h5>Ближайший ответственный:</h5>
                        <input 
                            type="text" 
                            placeholder='Ответственный...'
                            value={TeinicalObj.errorResponsible}
                            onChange={(e) => {
                                TeinicalObj.changeTaskLocation?.('')
                                TeinicalObj.changeMailUser?.('')
                                TeinicalObj.changeUserOrganization?.('')
                                TeinicalObj.changeErrorResponsible?.(e.target.value)
                                TeinicalObj.changeAccountUser?.('')
                                TeinicalObj.changeAccountList?.('')
                                TeinicalObj.changeAccountOrganization?.('')
                                TeinicalObj.changeTehnicalElement?.('')
                            }}/>
                    </div>
                </>
            ) : (
                null
            )}

            {String(selectTaskServiceT).split(' ')[0] == "Создание" && String(selectTaskServiceT).split(' ')[1] !== 'почты' ? (
                <>
                    <div className='VR_AccountUser_TehnicalTask VR_decotaionBlock_TehnicalTask'>
                        <h5>Имя пользователя для создания аккаунта:</h5>
                        <input 
                            type="text" 
                            placeholder='Имя пользователя...'
                            value={TeinicalObj.accountUser}
                            onChange={(e) => {
                                TeinicalObj.changeTaskLocation?.('')
                                TeinicalObj.changeMailUser?.('')
                                TeinicalObj.changeUserOrganization?.('')
                                TeinicalObj.changeDateError?.('')
                                TeinicalObj.changeErrorCause?.('')
                                TeinicalObj.changeErrorResponsible?.('')
                                TeinicalObj.changeAccountUser?.(e.target.value)
                                TeinicalObj.changeTehnicalElement?.('')
                            }}/>
                    </div>

                    <div className='VR_AccountList_TehnicalTask VR_decotaionBlock_TehnicalTask'>
                        <h5>Какие аккаунты требуются:</h5>
                        <textarea
                            placeholder='Необходимые аккаунты...'
                            value={TeinicalObj.accountList}
                            onChange={(e) => {
                                TeinicalObj.changeTaskLocation?.('')
                                TeinicalObj.changeMailUser?.('')
                                TeinicalObj.changeUserOrganization?.('')
                                TeinicalObj.changeDateError?.('')
                                TeinicalObj.changeErrorCause?.('')
                                TeinicalObj.changeErrorResponsible?.('')
                                TeinicalObj.changeAccountList?.(e.target.value)
                                TeinicalObj.changeTehnicalElement?.('')
                            }}
                        ></textarea>
                    </div>

                    <div className='VR_AccountOrganization_TehnicalTask VR_decotaionBlock_TehnicalTask'>
                        <h5>Организация для создания аккаунтов:</h5>
                        <input 
                            type="text" 
                            placeholder='Организация для создания аккаунтов...'
                            value={TeinicalObj.accountOrganization}
                            onChange={(e) => {
                                TeinicalObj.changeTaskLocation?.('')
                                TeinicalObj.changeMailUser?.('')
                                TeinicalObj.changeUserOrganization?.('')
                                TeinicalObj.changeDateError?.('')
                                TeinicalObj.changeErrorCause?.('')
                                TeinicalObj.changeErrorResponsible?.('')                            
                                TeinicalObj.changeAccountOrganization?.(e.target.value)
                                TeinicalObj.changeTehnicalElement?.('')
                            }}/>
                    </div>
                </>
            ) : (
                null
            )}

            {String(selectTaskServiceT).split(' ')[1] == "оргтехники" || String(selectTaskServiceT).split(' ')[3] == "оргтехники" ? (
                <>
                    <div className='VR_TehnicalType_TehnicalTask VR_decotaionBlock_TehnicalTask'>
                        <h5>Оргтехника:</h5>
                        <input 
                            type="text" 
                            placeholder='Техника...'
                            value={TeinicalObj.tehnicalElement}
                            onChange={(e) => {
                                TeinicalObj.changeTaskLocation?.('')
                                TeinicalObj.changeMailUser?.('')
                                TeinicalObj.changeUserOrganization?.('')
                                TeinicalObj.changeDateError?.('')
                                TeinicalObj.changeErrorCause?.('')
                                TeinicalObj.changeErrorResponsible?.('')
                                TeinicalObj.changeAccountUser?.('')
                                TeinicalObj.changeAccountList?.('')
                                TeinicalObj.changeAccountOrganization?.('')
                                TeinicalObj.changeTehnicalElement?.(e.target.value)
                            }}/>
                    </div>
                </>
            ) : (
                null
            )}

            {selectTaskArrowT == 'Настройка и обслуживание' ? (
                <>
                    <div className='VR_TaskPriority_TehnicalTask VR_decotaionBlock_TehnicalTask'>
                        <h5>Приоритет Вашей задачи:</h5>

                        <div className='VR_SelectBlock_CreateTask'>
                            <div className='VR_HeaderSelect_CreateTask'>
                                <div className='VR_FilterSelect_CreateTask' onClick={() => {
                                    setDropTaskArrow(false)
                                    setDropTaskService(false)
                                    setDropPriority(!dropPriority)
                                    setDropPriorityDescr(false)
                                    setDropUrgency(false)
                                }}>
                            
                                    <p>{selectPriorityT}</p>
                                    <p>{dropPriority ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</p>
                                </div>
                            </div>

                            <div className={`VR_Filters_CreateTask ${dropPriority ? 'VR_ShowFilters_CreateTask' : 'VR_unShowFilters_CreateTask'}`}>

                                <div className='VR_Filter_CreateTask' onClick={() => {
                                    TeinicalObj.changeTaskPriority?.('--')
                                    setSelectPriorityT('--')
                                    setDropPriority(!dropPriority)
                                    setSelectPriorityDescrT('--')
                                }}>--</div> 

                                <div className='VR_Filter_CreateTask' onClick={() => {
                                    TeinicalObj.changeTaskPriority?.('Низкий')
                                    setSelectPriorityT('Низкий')
                                    setDropPriority(!dropPriority)
                                    setSelectPriorityDescrT('--')
                                }}>Низкий</div> 

                                <div className='VR_Filter_CreateTask' onClick={() => {
                                    TeinicalObj.changeTaskPriority?.('Средний')
                                    setSelectPriorityT('Средний')
                                    setDropPriority(!dropPriority)
                                    setSelectPriorityDescrT('--')
                                }}>Средний</div> 

                                <div className='VR_Filter_CreateTask' onClick={() => {
                                    TeinicalObj.changeTaskPriority?.('Высокий')
                                    setSelectPriorityT('Высокий')
                                    setDropPriority(!dropPriority)
                                    setSelectPriorityDescrT('--')
                                }}>Высокий</div> 

                                <div className='VR_Filter_CreateTask' onClick={() => {
                                    TeinicalObj.changeTaskPriority?.('Критический')
                                    setSelectPriorityT('Критический')
                                    setDropPriority(!dropPriority)
                                    setSelectPriorityDescrT('--')
                                }}>Критический</div>                        

                            </div>
                        </div>

                    </div>

                    <div className='VR_PriorityDescr_TehnicalTask VR_decotaionBlock_TehnicalTask'>
                        <h5>Пояснение приоритета:</h5>

                        <div className='VR_SelectBlock_CreateTask'>
                            <div className='VR_HeaderSelect_CreateTask'>
                                <div className='VR_FilterSelect_CreateTask' onClick={() => {
                                    setDropTaskArrow(false)
                                    setDropTaskService(false)
                                    setDropPriority(false)
                                    setDropPriorityDescr(!dropPriorityDescr)
                                    setDropUrgency(false)
                                }}>
                            
                                    <p>{selectPriorityDescrT}</p>
                                    <p>{dropPriorityDescr ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</p>
                                </div>
                            </div>

                            <div className={`VR_Filters_CreateTask ${dropPriorityDescr ? 'VR_ShowFilters_CreateTask' : 'VR_unShowFilters_CreateTask'}`}>                                                       
                                {resetTaskPriority(selectPriorityT)}                                
                            </div>
                        </div>

                    </div>

                    <div className='VR_TaskUrgency_TehnicalTask VR_decotaionBlock_TehnicalTask'>
                        <h5>Срочность Вашей задачи:</h5>

                        <div className='VR_SelectBlock_CreateTask'>
                            <div className='VR_HeaderSelect_CreateTask'>
                                <div className='VR_FilterSelect_CreateTask' onClick={() => {
                                    setDropTaskArrow(false)
                                    setDropTaskService(false)
                                    setDropPriority(false)
                                    setDropPriorityDescr(false)
                                    setDropUrgency(!dropUrgency)
                                }}>
                            
                                    <p>{selectUrgencyT}</p>
                                    <p>{dropUrgency ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</p>
                                </div>
                            </div>

                            <div className={`VR_Filters_CreateTask ${dropUrgency ? 'VR_ShowFilters_CreateTask' : 'VR_unShowFilters_CreateTask'}`}>

                                <div className='VR_Filter_CreateTask' onClick={() => {
                                    TeinicalObj.changeTaskUrguncy?.('--')
                                    setSelectUrgencyT('--')
                                    setDropUrgency(!dropUrgency)
                                }}>--</div> 

                                <div className='VR_Filter_CreateTask' onClick={() => {
                                    TeinicalObj.changeTaskUrguncy?.('Низкая')
                                    setSelectUrgencyT('Низкая')
                                    setDropUrgency(!dropUrgency)
                                }}>Низкая</div> 

                                <div className='VR_Filter_CreateTask' onClick={() => {
                                    TeinicalObj.changeTaskUrguncy?.('Средняя')
                                    setSelectUrgencyT('Средняя')
                                    setDropUrgency(!dropUrgency)
                                }}>Средняя</div> 

                                <div className='VR_Filter_CreateTask' onClick={() => {
                                    TeinicalObj.changeTaskUrguncy?.('Высокая')
                                    setSelectUrgencyT('Высокая')
                                    setDropUrgency(!dropUrgency)
                                }}>Высокая</div> 

                            </div>
                        </div>
                        
                    </div>

                    <div className='VR_UrgencyDescr_TehnicalTask VR_decotaionBlock_TehnicalTask'>
                        <h5>Опишите срочность Вашей задачи:</h5>
                        <textarea 
                            placeholder='Подробнее о срочности...'
                            value={TeinicalObj.urgencyDescr}
                            onChange={(e) => TeinicalObj.changeUrgencyDescr?.(e.target.value)}
                        ></textarea>
                    </div>                
                </>
                
            ) : (
                null
            )}

            <div className='VR_DetailsTask_TehnicalTask VR_decotaionBlock_TehnicalTask'>
                <h5>Детальное описание:</h5>
                <textarea 
                    placeholder='Детальное описание...'
                    value={TeinicalObj.detailsTask}
                    onChange={(e) => TeinicalObj.changeDetailsTask?.(e.target.value)}
                ></textarea>
            </div>
        </>
    );
};

export default observer(TehnicalTask);