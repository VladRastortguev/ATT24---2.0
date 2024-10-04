import { observer } from 'mobx-react-lite';
import React, { FC, useState } from 'react';
import { task1cInterface } from '../Interface/Task1c';

import '../Access/Access.css'
import '../TehnicalTask/TehnicalTask.css'
import '../1c/Task1c.css'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Task1c:FC<task1cInterface> = ({task1cObj}) => {
    const [dropTaskService1c, setDropTaskService1c] = useState(false)
    const [dropTaskPriority1c, setDropTaskPriority1c] = useState(false)
    const [dropPriorityDescr1c, setDropPriorityDescr1c] = useState(false)
    const [dropUrgency, setDropUrgency] = useState(false)
    
    const [selectTaskService1c, setSelectTaskService1c] = useState('')
    const [selectPriority1c, setSelectPriority1c] = useState('')
    const [selectPriorityDescr1c, setSelectPriorityDescr1c] = useState('')
    const [selectUrgency, setSelectUrgency] = useState('')

    function resetTaskPriority(taskPriority: string) {
        switch (taskPriority) {
            case 'Низкий':
                return (
                    <>
                        <div className='VR_Filter_CreateTask' onClick={() => {
                            task1cObj.changePriorityDescr?.('--')
                            setSelectPriorityDescr1c('--')
                            setDropPriorityDescr1c(!dropPriorityDescr1c)
                        }}>--</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            task1cObj.changePriorityDescr?.('Незначительные проблемы')
                            setSelectPriorityDescr1c('Незначительные проблемы')
                            setDropPriorityDescr1c(!dropPriorityDescr1c)
                        }}>Незначительные проблемы</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            task1cObj.changePriorityDescr?.('Нет непосредственной угрозы функциональности')
                            setSelectPriorityDescr1c('Нет непосредственной угрозы функциональности')
                            setDropPriorityDescr1c(!dropPriorityDescr1c)
                        }}>Нет непосредственной угрозы функциональности</div>                    
                    </>
                )

            case 'Средний':
                return (
                    <>
                        <div className='VR_Filter_CreateTask' onClick={() => {
                            task1cObj.changePriorityDescr?.('--')
                            setSelectPriorityDescr1c('--')
                            setDropPriorityDescr1c(!dropPriorityDescr1c)
                        }}>--</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            task1cObj.changePriorityDescr?.('Частичное снижение функциональности')
                            setSelectPriorityDescr1c('Частичное снижение функциональности')
                            setDropPriorityDescr1c(!dropPriorityDescr1c)
                        }}>Частичное снижение функциональности</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            task1cObj.changePriorityDescr?.('Проблема имеет временное решение')
                            setSelectPriorityDescr1c('Проблема имеет временное решение')
                            setDropPriorityDescr1c(!dropPriorityDescr1c)
                        }}>Проблема имеет временное решение</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            task1cObj.changePriorityDescr?.('Проблема не имеет временного решения')
                            setSelectPriorityDescr1c('Проблема не имеет временного решения')
                            setDropPriorityDescr1c(!dropPriorityDescr1c)
                        }}>Проблема не имеет временного решения</div>
                    </>
                )

            case 'Высокий':
                return (
                    <>
                        <div className='VR_Filter_CreateTask' onClick={() => {
                            task1cObj.changePriorityDescr?.('--')
                            setSelectPriorityDescr1c('--')
                            setDropPriorityDescr1c(!dropPriorityDescr1c)
                        }}>--</div>                        

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            task1cObj.changePriorityDescr?.('Значительное снижение функциональности')
                            setSelectPriorityDescr1c('Значительное снижение функциональности')
                            setDropPriorityDescr1c(!dropPriorityDescr1c)
                        }}>Значительное снижение функциональности</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            task1cObj.changePriorityDescr?.('Проблема затрагивает ограниченное количество пользователей')
                            setSelectPriorityDescr1c('Проблема затрагивает ограниченное количество пользователей')
                            setDropPriorityDescr1c(!dropPriorityDescr1c)
                        }}>Проблема затрагивает ограниченное количество пользователей</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            task1cObj.changePriorityDescr?.('Проблема не влияет на работу большого количества пользователей')
                            setSelectPriorityDescr1c('Проблема не влияет на работу большого количества пользователей')
                            setDropPriorityDescr1c(!dropPriorityDescr1c)
                        }}>Проблема не влияет на работу большого количества пользователей</div>
                    </>
                )

            case 'Критический':
                return (
                    <>
                        <div className='VR_Filter_CreateTask' onClick={() => {
                            task1cObj.changePriorityDescr?.('--')
                            setSelectPriorityDescr1c('--')
                            setDropPriorityDescr1c(!dropPriorityDescr1c)
                        }}>--</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            task1cObj.changePriorityDescr?.('Полная потеря функциональности продукта')
                            setSelectPriorityDescr1c('Полная потеря функциональности продукта')
                            setDropPriorityDescr1c(!dropPriorityDescr1c)
                        }}>Полная потеря функциональности продукта</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            task1cObj.changePriorityDescr?.('Проблема затрагивает большое количество пользователей')
                            setSelectPriorityDescr1c('Проблема затрагивает большое количество пользователей')
                            setDropPriorityDescr1c(!dropPriorityDescr1c)
                        }}>Проблема затрагивает большое количество пользователей</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            task1cObj.changePriorityDescr?.('Проблема не влияет на работу большого количества пользователей')
                            setSelectPriorityDescr1c('Проблема не влияет на работу большого количества пользователей')
                            setDropPriorityDescr1c(!dropPriorityDescr1c)
                        }}>Проблема не влияет на работу большого количества пользователей</div>
                    </>
                )

            default:
                return (
                    <>
                        <div className='VR_Filter_CreateTask' onClick={() => {
                            task1cObj.changePriorityDescr?.('--')
                            setSelectPriorityDescr1c('--')
                            setDropPriorityDescr1c(!dropPriorityDescr1c)
                        }}>--</div>
                    </>
                )
        }
    }

    return (
        <>
            <h3 className='VR_ComponentTitle_AccessBlock'>Создание задачи 1с</h3>

            <div className='VR_TaskNameBlock_CreateTask VR_DecorationBlock_CreateTaskPodComponent'>
                <h5>Наименование:</h5>
                <input 
                    type="text" 
                    placeholder='Наименование'
                    value={task1cObj.taskName}
                    onChange={(e) => task1cObj.changeTaskName?.(e.target.value)}/>
            </div>      

            <div className='VR_TaskPriority_TehnicalTask VR_decotaionBlock_TehnicalTask'>
                <h5>Услуга:</h5>

                <div className='VR_SelectBlock_CreateTask'>
                    <div className='VR_HeaderSelect_CreateTask'>
                        <div className='VR_FilterSelect_CreateTask' onClick={() => {
                            setDropTaskService1c(!dropTaskService1c)
                            setDropTaskPriority1c(false)
                            setDropPriorityDescr1c(false)
                            setDropUrgency(false)
                        }}>
                            
                            <p>{selectTaskService1c}</p>
                            <p>{dropTaskService1c ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</p>
                        </div>
                    </div>

                    <div className={`VR_Filters_CreateTask ${dropTaskService1c ? 'VR_ShowFilters_CreateTask' : 'VR_unShowFilters_CreateTask'}`}>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            task1cObj.changeTaskService?.('--')
                            setSelectTaskService1c('--')
                            setDropTaskService1c(!dropTaskService1c)
                        }}>--</div> 

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            task1cObj.changeTaskService?.('Доработка систем 1С')
                            setSelectTaskService1c('Доработка систем 1С')
                            setDropTaskService1c(!dropTaskService1c)
                        }}>Доработка систем 1С</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            task1cObj.changeTaskService?.('Корректировка прав для сотрудника в 1С')
                            setSelectTaskService1c('Корректировка прав для сотрудника в 1С')
                            setDropTaskService1c(!dropTaskService1c)
                        }}>Корректировка прав для сотрудника в 1С</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            task1cObj.changeTaskService?.('Сбой при подключении к 1С')
                            setSelectTaskService1c('Сбой при подключении к 1С')
                            setDropTaskService1c(!dropTaskService1c)
                        }}>Сбой при подключении к 1С</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            task1cObj.changeTaskService?.('Сброс/установка пароля 1С')
                            setSelectTaskService1c('Сброс/установка пароля 1С')
                            setDropTaskService1c(!dropTaskService1c)
                        }}>Сброс/установка пароля 1С</div> 

                    </div>
                </div>
            </div>

            <div className='VR_TaskNameBlock_CreateTask VR_DecorationBlock_CreateTaskPodComponent'>
                <h5>База для изменений:</h5>
                <input 
                    type="text" 
                    placeholder='База...'
                    value={task1cObj.baseChange}
                    onChange={(e) => task1cObj.changeBaseChange?.(e.target.value)}/>
            </div>  

            <div className='VR_TaskPriority_TehnicalTask VR_decotaionBlock_TehnicalTask'>
                <h5>Приоритет Вашей задачи:</h5>

                <div className='VR_SelectBlock_CreateTask'>
                    <div className='VR_HeaderSelect_CreateTask'>
                        <div className='VR_FilterSelect_CreateTask' onClick={() => {
                            setDropTaskService1c(false)
                            setDropTaskPriority1c(!dropTaskPriority1c)
                            setDropPriorityDescr1c(false)
                            setDropUrgency(false)
                        }}>
                            
                            <p>{selectPriority1c}</p>
                            <p>{dropTaskPriority1c ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</p>
                        </div>
                    </div>

                    <div className={`VR_Filters_CreateTask ${dropTaskPriority1c ? 'VR_ShowFilters_CreateTask' : 'VR_unShowFilters_CreateTask'}`}>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            task1cObj.changeTaskPriority?.('--')
                            setSelectPriority1c('--')
                            setDropTaskPriority1c(!dropTaskPriority1c)
                            setSelectPriorityDescr1c('--')
                        }}>--</div> 

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            task1cObj.changeTaskPriority?.('Низкий')
                            setSelectPriority1c('Низкий')
                            setDropTaskPriority1c(!dropTaskPriority1c)
                            setSelectPriorityDescr1c('--')
                        }}>Низкий</div> 

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            task1cObj.changeTaskPriority?.('Средний')
                            setSelectPriority1c('Средний')
                            setDropPriorityDescr1c(!dropTaskPriority1c)
                            setSelectPriorityDescr1c('--')
                        }}>Средний</div> 

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            task1cObj.changeTaskPriority?.('Высокий')
                            setSelectPriority1c('Высокий')
                            setDropTaskPriority1c(!dropTaskPriority1c)
                            setSelectPriorityDescr1c('--')
                        }}>Высокий</div> 

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            task1cObj.changeTaskPriority?.('Критический')
                            setSelectPriority1c('Критический')
                            setDropTaskPriority1c(!dropTaskPriority1c)
                            setSelectPriorityDescr1c('--')
                        }}>Критический</div>                        

                    </div>
                </div>
            </div>

            <div className='VR_PriorityDescr_TehnicalTask VR_decotaionBlock_TehnicalTask'>
                <h5>Пояснение приоритета:</h5>

                <div className='VR_SelectBlock_CreateTask'>
                    <div className='VR_HeaderSelect_CreateTask'>
                        <div className='VR_FilterSelect_CreateTask' onClick={() => {
                            setDropTaskService1c(false)
                            setDropTaskPriority1c(false)
                            setDropPriorityDescr1c(!dropPriorityDescr1c)
                            setDropUrgency(false)
                        }}>
                            
                            <p>{selectPriorityDescr1c}</p>
                            <p>{dropPriorityDescr1c ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</p>
                        </div>
                    </div>

                    <div className={`VR_Filters_CreateTask ${dropPriorityDescr1c ? 'VR_ShowFilters_CreateTask' : 'VR_unShowFilters_CreateTask'}`}>                                                       
                        {resetTaskPriority(selectPriority1c)}                                
                    </div>
                </div>
            </div>

            <div className='VR_TaskUrgency_TehnicalTask VR_decotaionBlock_TehnicalTask'>
                <h5>Срочность Вашей задачи:</h5>

                <div className='VR_SelectBlock_CreateTask'>
                    <div className='VR_HeaderSelect_CreateTask'>
                        <div className='VR_FilterSelect_CreateTask' onClick={() => {
                            setDropTaskService1c(false)
                            setDropTaskPriority1c(false)
                            setDropPriorityDescr1c(false)
                            setDropUrgency(!dropUrgency)
                        }}>
                            
                            <p>{selectUrgency}</p>
                            <p>{dropUrgency ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</p>
                        </div>
                    </div>

                    <div className={`VR_Filters_CreateTask ${dropUrgency ? 'VR_ShowFilters_CreateTask' : 'VR_unShowFilters_CreateTask'}`}>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            task1cObj.changeTaskUrguncy?.('--')
                            setSelectUrgency('--')
                            setDropUrgency(!dropUrgency)
                        }}>--</div> 

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            task1cObj.changeTaskUrguncy?.('Низкая')
                            setSelectUrgency('Низкая')
                            setDropUrgency(!dropUrgency)
                        }}>Низкая</div> 

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            task1cObj.changeTaskUrguncy?.('Средняя')
                            setSelectUrgency('Средняя')
                            setDropUrgency(!dropUrgency)
                        }}>Средняя</div> 

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            task1cObj.changeTaskUrguncy?.('Высокая')
                            setSelectUrgency('Высокая')
                            setDropUrgency(!dropUrgency)
                        }}>Высокая</div> 

                    </div>
                </div>                        
            </div>

            <div className='VR_DetailsTask_TehnicalTask VR_decotaionBlock_TehnicalTask'>
                <h5>Опишите срочность вашей задачи:</h5>
                <textarea 
                    placeholder='Описание срочности...'
                    value={task1cObj.urgencyDescr}
                    onChange={(e) => task1cObj.changeUrgencyDescr?.(e.target.value)}
                ></textarea>
            </div>

            <div className='VR_DetailsTask_TehnicalTask VR_decotaionBlock_TehnicalTask'>
                <h5>Детальное описание:</h5>
                <textarea 
                    placeholder='Детальное описание...'
                    value={task1cObj.detailsTask}
                    onChange={(e) => task1cObj.changeDetailsTask?.(e.target.value)}
                ></textarea>
            </div>
        </> 
    );
};

export default observer(Task1c);