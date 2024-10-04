import { observer } from 'mobx-react-lite';
import React, { FC, useState } from 'react';

import '../CreateTask/CreateTask.css'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import ResetTaskType from './Function/ResetTaskType.tsx';
import ResetTask from './Function/ResetTask.tsx';
import ResetPriorityDescr from './Function/ResetPriorityDescr.tsx';

import Button from 'react-bootstrap/esm/Button';
import TaskArrow from './podComponent/Component/taskArrow.tsx';
import TaskType from './podComponent/Component/TaskType.tsx';

const CreateTask:FC = () => {
    // Объявление переменных - Начало
    const [dropDown, setDropDown]                   = useState(false)
    const [dropTaskType, setDropTaskType]           = useState(false)
    const [dropTask, setDropTask]                   = useState(false)
    const [dropPriority, setDropPriority]           = useState(false)
    const [dropPriorityDescr, setDropPriorityDescr] = useState(false)
    const [dropUgency, setDropUrgency]              = useState(false)

    const [selectValue, setSelectValue]      = useState('--')
    const [seletTaskType, setSelectTaskType] = useState('--')
    const [selectTask, setSelectTask]        = useState('--')
    const [priority, setPriority]            = useState('--')
    const [priorityDescr, setPriorityDescr]  = useState('--')
    const [selectUrgency, setSelectUrgency]  = useState('--')

    const [fullRiorityDescr, setFullPriorityDescr]      = useState('')
    const [taskName, setTaskName]                       = useState('')
    const [priorityDescription, setPriorityDescription] = useState('')
    const [urgencyDescription, setUrgencyDescription]   = useState('')
    const [descr, setDescr]                             = useState('')
    // Объявление переменных - Конец

    // Составление реквизитов для передачи пропса - Начало
    const handleChangeDropTaskType1 = (newState: boolean) => {
        setDropTaskType(newState)
    }
    
    const handleChangeDropTask = (newState: boolean) => {
        setDropTask(newState)
    }

    const handleChangeDropPriority = (newState: boolean) => {
        setDropPriorityDescr(newState)
    }
    
    const handleChangeTaskType = (newState: string) => {
        setSelectTaskType(newState)
    }

    const handleChangeTask = (newState: string) => {
        setSelectTask(newState)
    }

    const handleSetPriotity = (newState: string) => {
        setPriorityDescr(newState)
    }

    const handleChangeFullPriorityDescr = (newState: string) => {
        setFullPriorityDescr(newState)
    }

        // ---------------------------- функции для под. компонентов
    const handleChangeDropDown = (newState: boolean) => {
        setDropDown(!newState)
    }

    const handleChangeSelectValue = (newState: string) => {
        setSelectValue(newState)
    }

    const handleChangeDropTaskType = (newState: boolean) => {
        setDropTaskType(!newState)
    }

    const handleChangeSelectTaskType = (newState: string) => {
        setSelectTaskType(newState)
    }

    const interfaceObj = {
        changeDropTaskType: handleChangeDropTaskType1,
        changeDropTask: handleChangeDropTask,
        changeDropPriorityDescr: handleChangeDropPriority,
        changeSelectTaskType: handleChangeTaskType,
        changeSelectTask: handleChangeTask,
        chahgePriorityDescr: handleSetPriotity,
        changeFullPriorityDescr: handleChangeFullPriorityDescr,
        dropTaskType: dropTaskType,
        dropTask: dropTask,
        dropPriorityDescr: dropPriorityDescr,
        selectValue: selectValue,
        selectTaskType: seletTaskType,
        priority: priority,
        priorityDescr: priorityDescr    
    }

    const taskArrowObj = {
        changeDropDown: handleChangeDropDown,
        changeSelectValue: handleChangeSelectValue,
        dropDown: dropDown,
        selectValue: selectValue
    }

    const tasktypeObj = {
        changeDropTaskType: handleChangeDropTaskType,
        changeSelectTaskType: handleChangeSelectTaskType,
        dropTaskType: dropTaskType,
        selectTaskType: seletTaskType,

        interfaceObj: interfaceObj
    }

    // Составление реквизитов для передачи пропса - Конец
    

    return (
        <div className='VR_Container_CreateTask'>

            <div className='VR_SmallContainer_CreateTask'>
                <h3 className='VR_CreateTitle_CreateTask'>Создание задачи</h3>
                

                <div className='VR_SelectBlockHalf_CreateTask'>
                    
                    <TaskArrow  taskArrowObj={taskArrowObj}/>

                    {/* ----------------------------------------------------------------------------- */}

                    {/* <TaskType taskTypeObj={tasktypeObj} /> */}
                </div>

                {/* -------------------------------------------------------------------------------------------- */}                
                    
                <div className='VR_SelectTaskType_CreateTask'>
                    <h5>Выберите тип задачи: </h5>
                    
                    <div className='VR_SelectBlock_CreateTask'>
                        <div className='VR_HeaderSelect_CreateTask'>
                            <div className='VR_FilterSelect_CreateTask' onClick={() => setDropTask(!dropTask)}>
                                <p>{selectTask}</p>
                                <p>{dropTask ? <ArrowDropUpIcon/> : <ArrowDropDownIcon />}</p>
                            </div>
                        </div>

                        <div className={`VR_Filters_CreateTask ${dropTask ? 'VR_ShowFilters_CreateTask' : 'VR_UnShowFilters_CreateTask'}`}>
                            <ResetTask interfaceObj={interfaceObj}  />                            
                        </div>
                    </div>                    
                </div>

                {/* -------------------------------------------------------------------------------------------- */}                                

                <div className="VR_InputTask_CreateTask">
                    <h5>Наименование задачи: </h5>

                    <input
                        type="text"
                        required
                        placeholder='Наименование...'
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                    />
                </div>

                {/* -------------------------------------------------------------------------------------------- */}                
                
                <div className='VR_SelectBlockHalf_CreateTask'>
                    <div className='VR_SelectTaskType_CreateTask'>
                        <h5>Приоритет задачи:</h5>
                    
                        <div className='VR_SelectBlock_CreateTask'>

                            <div className='VR_HeaderSelect_CreateTask'>
                                <div className='VR_FilterSelect_CreateTask' onClick={() => setDropPriority(!dropPriority)}>
                                    <p>{priority}</p>
                                    <p>{dropPriority ? <ArrowDropUpIcon/> : <ArrowDropDownIcon />}</p>
                                </div>
                            </div>

                            <div className={`VR_Filters_CreateTask ${dropPriority ? 'VR_ShowFilters_CreateTask' : 'VR_UnShowFilters_CreateTask'}`}>

                                <div className='VR_Filter_CreateTask' onClick={() => {
                                    setPriority('--')
                                    setDropPriority(!dropPriority)
                                }}>--</div>

                                <div className='VR_Filter_CreateTask' onClick={() => {
                                    setPriority('Низкий')
                                    setDropPriority(!dropPriority)
                                }}>Низкий</div>

                                <div className='VR_Filter_CreateTask' onClick={() => {
                                    setPriority('Средний')
                                    setDropPriority(!dropPriority)
                                }}>Средний</div>

                                <div className='VR_Filter_CreateTask' onClick={() => {
                                    setPriority('Высокий')
                                    setDropPriority(!dropPriority)
                                }}>Высокий</div>

                                <div className='VR_Filter_CreateTask' onClick={() => {
                                    setPriority('Критический')
                                    setDropPriority(!dropPriority)
                                }}>Критический</div>

                            </div>

                        </div>                    
                    </div>

                    <div className='VR_SelectTaskType_CreateTask'>
                        <h5>Пояснение приоритета </h5>
                    
                        <div className='VR_SelectBlock_CreateTask'>
                            <div className='VR_HeaderSelect_CreateTask'>
                                <div className='VR_FilterSelect_CreateTask' onClick={() => setDropPriorityDescr(!dropPriorityDescr)}>
                                    <p>{priorityDescr}</p>
                                    <p>{dropPriorityDescr ? <ArrowDropUpIcon/> : <ArrowDropDownIcon />}</p>
                                </div>
                            </div>

                            <div className={`VR_Filters_CreateTask ${dropPriorityDescr ? 'VR_ShowFilters_CreateTask' : 'VR_UnShowFilters_CreateTask'}`}>
                                <ResetPriorityDescr interfaceObj={interfaceObj} />                           
                            </div>
                        </div>                    
                    </div>
                </div>

                {/* -------------------------------------------------------------------------------------------- */}

                <div className="VR_InputTask_CreateTask">
                    <h5>Опишите влияние:</h5>

                    <textarea
                        required
                        placeholder='Влияние заявки...'
                        value={priorityDescription}
                        onChange={(e) => setPriorityDescription(e.target.value)}
                    ></textarea>
                </div>

                {/* -------------------------------------------------------------------------------------------- */}

                <div className='VR_SelectTaskType_CreateTask'>
                    <h5>Срочность задачи:</h5>
                    
                    <div className='VR_SelectBlock_CreateTask'>

                        <div className='VR_HeaderSelect_CreateTask'>
                            <div className='VR_FilterSelect_CreateTask' onClick={() => setDropUrgency(!dropUgency)}>
                                <p>{selectUrgency}</p>
                                <p>{dropUgency ? <ArrowDropUpIcon/> : <ArrowDropDownIcon />}</p>
                            </div>
                        </div>

                        <div className={`VR_Filters_CreateTask ${dropUgency ? 'VR_ShowFilters_CreateTask' : 'VR_UnShowFilters_CreateTask'}`}>

                            <div className='VR_Filter_CreateTask' onClick={() => {
                                setSelectUrgency('--')
                                setDropUrgency(!dropUgency)
                            }}>--</div>

                            <div className='VR_Filter_CreateTask' onClick={() => {
                                setSelectUrgency('Низкий')
                                setDropUrgency(!dropUgency)
                            }}>Низкая</div>

                            <div className='VR_Filter_CreateTask' onClick={() => {
                                setSelectUrgency('Средний')
                                setDropUrgency(!dropUgency)
                            }}>Средняя</div>

                            <div className='VR_Filter_CreateTask' onClick={() => {
                                setSelectUrgency('Высокий')
                                setDropUrgency(!dropPriority)
                            }}>Высокая</div>

                        </div>

                    </div>                    
                </div>

                {/* -------------------------------------------------------------------------------------------- */}
                
                <div className="VR_InputTask_CreateTask">
                    <h5>Опишите срочность:</h5>

                    <textarea
                        required
                        placeholder='Срочность заявки...'
                        value={urgencyDescription}
                        onChange={(e) => setUrgencyDescription(e.target.value)}
                    ></textarea>
                </div>

                {/* -------------------------------------------------------------------------------------------- */}

                <div className="VR_InputTask_CreateTask">
                    <h5>Опишите срочность:</h5>

                    <input
                        type='text'
                        required
                        placeholder='Срочность заявки...'
                        value={urgencyDescription}
                        onChange={(e) => setUrgencyDescription(e.target.value)}
                    ></input>
                </div>

                {/* -------------------------------------------------------------------------------------------- */}

                <div className="VR_InputTask_CreateTask">
                    <h5>Детальное описание задачи:</h5>

                    <textarea
                        required
                        placeholder='Детальное описание...'
                        value={descr}
                        onChange={(e) => setDescr(e.target.value)}
                    ></textarea>
                </div>
                
                <div className='VR_BtnCreate_CreaetTask'>
                    <Button variant='outline-primary'>Создать</Button>
                </div>
            </div>
        </div>
    );
};

export default observer(CreateTask);