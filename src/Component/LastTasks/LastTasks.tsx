import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useEffect, useState } from 'react';
import { Context } from '../../index.tsx';
import TaskService from '../../services/TaskService.ts';

import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import AddIcon from '@mui/icons-material/Add';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import PauseIcon from '@mui/icons-material/Pause';
import CachedIcon from '@mui/icons-material/Cached';
import DoneAllIcon from '@mui/icons-material/DoneAll';

import '../LastTasks/LastTask.css'
import { lastTaskInterface } from './interface/LastTask-interface.ts';
import { lastTask } from '../../models/Itil/taskModels/lastTask-model.ts';

const LastTasks:FC<lastTaskInterface> = ({ lastTaskInterfaceObj }) => {
    const [lastTask, setLastTask] = useState<lastTask[]>([])

    const [clueIcon, setClueIcon] = useState(false)
    const [clueIndex, setClueIndex] = useState('0')

    const { store } = useContext(Context)

    useEffect(() => {
        getLastTask()

        if (lastTaskInterfaceObj.checkRewiew) {
            const intervalID = setInterval(getLastTask, 2 * 60 * 1000)

            return () => clearInterval(intervalID)
        }

    }, [])
    
    async function getLastTask() {
        store.setLoading(true)

        try {
            const res = await TaskService.lastTask()

            setLastTask(res.data)
        } catch(e) {
            console.log(e)
        } finally {
            store.setLoading(false)
        }
    }

    function taskStatus(currentStage: string) {
        switch (currentStage) {
            case 'Регистрация': {
                return (
                    <>
                        <AddIcon color='error'/>
                    </>
                )
            }

            case 'Согласование': {
                return (
                    <>
                        <AssignmentIndIcon color='inherit'/>
                    </>
                )
            }        

            case 'В очереди': {
                return (
                    <>
                        <PauseIcon htmlColor='#E3E317'/>
                    </>
                )
            }

            case 'В работе': {
                return (
                    <>
                        <CachedIcon color='info' />
                    </>
                )
            }

            case 'Завершено': {
                return (
                    <>
                        <DoneAllIcon color='success'/>  
                    </>
                )
            }
        }
    }
    
    if (store.isLoading) {
        return (
            <div className='VR_Container_LastTask VR_ContainerOnLoad_LastTask'>
                {/* <div className='VR_PreSpinnerBlock'> */}
                    <FlipCameraAndroidIcon className='VR_Spinner'/>
                {/* </div>     */}
            </div>
        )
    }

    return (
        <div className='VR_Container_LastTask'>
            <div className='VR_TitleBlock_LastTask'>
                <h4>Активность</h4>    
            </div>

            <div className='VR_TaskBlock_LastTask'>
                <ul className='VR_TaskList_LastTask'>
                    {lastTask.map((item, index) => (
                        <li 
                            className='VR_HeadList_LastTask' 
                            key={`listHeadElement-${index}`}
                            onClick={() => {
                                lastTaskInterfaceObj.changeDetailsShow?.(true)
                                lastTaskInterfaceObj.changeDetailsObj?.(item)
                            }}>

                            <div className='VR_ListContainer_LastTask'>
                                <ul className='VR_TempList_LastTask' key={`taskList-${index}`}>
                                    <li key={`taskName-${index}`}><h4>{`${String(item.taskName).slice(0, 20)}...`}</h4></li>
                                
                                    <div className='VR_InitExec_LastTask' key={`initExec-${index}`}>
                                        <li key={`taskInit-${index}`}>Инициатор: {store.cutNameToNormal(item.taskInitiator)}</li>
                                        <li key={`taskExecute-${index}`}>Исполнитель: {store.cutNameToNormal(item.taskNowExecutor)}</li>
                                    </div>
                                
                                    <li className='VR_statusIcon_LastTask' key={`taskStatus-${index}`}>
                                        <div onMouseEnter={() => {
                                            setClueIcon(true)
                                            setClueIndex(`${index + 1}`)
                                        }} onMouseLeave={() => {
                                            setClueIcon(false)
                                            setClueIndex(`0${index + 1}`)
                                        }}>
                                            {taskStatus(item.taskCurrentStage)}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        
                        </li>
                    ))}
                </ul>

                <div className={`VR_showClueList_LastTask VR_showClueList${clueIndex}_LastTask`} 
                    onMouseEnter={() => {
                        setClueIcon(true)
                        setClueIndex(clueIndex)
                    }}  onMouseLeave={() => {
                        setClueIcon(false)
                        setClueIndex(`0 ${clueIndex}`)  
                    }}>
                    
                    <ul className='VR_clueIconList_LastTask'>
                        <li><p>Регистрация:</p> <AddIcon color='error'/> </li>
                        <li><p>Согласование:</p> <AssignmentIndIcon color='inherit' /> </li>
                        <li><p>В очереди:</p> <PauseIcon htmlColor='#E3E317' /> </li>
                        <li><p>В работе:</p> <CachedIcon color='info' /> </li>
                        <li><p>Завершено:</p> <DoneAllIcon color='success' /> </li>
                    </ul>
                </div>    

            </div>

        </div>
    );
};

export default observer(LastTasks);