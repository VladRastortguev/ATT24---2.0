import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useEffect, useState } from 'react';
import { detailsInterface } from './Interface/DetailsTask-interface';
import { Context } from '../../index.tsx';

import '../DetailsTask/DetailsTask.css'
import { oneItilUser } from '../../models/Itil/userModels/oneUserModels';
import UserService from '../../services/UserService.ts';

import AddIcon from '@mui/icons-material/Add';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import PauseIcon from '@mui/icons-material/Pause';
import CachedIcon from '@mui/icons-material/Cached';
import DoneAllIcon from '@mui/icons-material/DoneAll';

import { oneComment } from './Interface/OneComment-interface.ts';
import TaskService from '../../services/TaskService.ts';

import Button from 'react-bootstrap/esm/Button';


const DetailsTask:FC<detailsInterface> = ({ detailsObj }) => {
    const [userName, setUserName] = useState('')

    const [taskName, setTaskName] = useState(detailsObj.item?.taskName)
    const [taskService, setTaskService] = useState(detailsObj.item?.taskService)
    const [taskNumber, setTaskNumber] = useState(detailsObj.item?.taskNumber)
    const [taskPriority, setTaskPriority] = useState(detailsObj.item?.taskPriority)
    const [taskInitiator, setTaskInitiator] = useState(detailsObj.item?.taskInitiator)
    const [taskExecutor, setTaskExecutor] = useState(detailsObj.item?.taskNowExecutor)
    const [taskOrganizationClient, setTaskOrganizationClient] = useState(detailsObj.item?.taskOrganizationClient) 
    const [taskOrganizationExecutor, setTaskOrganizationExecutor] = useState(detailsObj.item?.taskOrganization)
    const [taskDateCreate, setTaskDateCreate] = useState(detailsObj.item?.taskDateCreate)
    const [taskDateCompiliet, setTaskDateCompiliet] = useState(detailsObj.item?.taskDateCompilet)
    const [taskStatus, setTaskStatus] = useState(detailsObj.item?.taskCurrentStage)

    const [taskUUID, setTAskUUID] = useState(detailsObj.item?.taskUID)

    const [commentArr, setCommentArr] = useState<oneComment[]>([])

    const [commentText, setCommentText] = useState('')

    const {store} = useContext(Context)

    const executor = detailsObj.item?.taskNowExecutor;
    const initiator = detailsObj.item?.taskInitiator

    useEffect(() => {
        getUserData()
    }, [])

    useEffect(() => {        
        getTaskComment(String(taskUUID))
    }, [detailsObj.item])

    async function getUserData() {
        store.setLoading(true)

        try {
            const email = String(localStorage.getItem('UserEmail'))

            const res = await UserService.getOneItilUser(email)

            res.data.map((item) => {
                setUserName(item.fullName)
            }) 
        } catch(e) {
            console.log(e)
        } finally {
            store.setLoading(false)
        }
    }

    async function getTaskComment(uuid: string) {
        store.setLoading(true)

        try {
            const res = await TaskService.oneComment(uuid)

            setCommentArr(res.data)
        } catch(e) {
            console.log(e)
        } finally {
            store.setLoading(false)
        }
    }

    function resetCurentStage(currentStage:string) {
        switch(currentStage) {
            case 'Регистрация':
                return (
                    <>
                        <AddIcon color='error' />
                    </>
                )

            case 'Согласование':
                return (
                    <>
                        <AssignmentIndIcon color='inherit' />
                    </>
                )

            case 'В очереди':
                return (
                    <>
                        <PauseIcon htmlColor='#E3E317' />
                    </>
                )

            case 'В работе':
                return (
                    <>
                        <CachedIcon color='info' />
                    </>
                )

            case 'Завершено':
                return (
                    <>
                        <DoneAllIcon color='success' />
                    </>
                )
        }
    }

    function setNormalizeNumber(number:string) {
        let prefics = String(number).substring(0, 2)
        let bodyNumber = String(number).substring(5, 24) 

        let bodyArr = String(bodyNumber).split('')        

        let fullString = ''

        for (let i in bodyArr) {
            if (bodyArr[i] !== '0') {
                fullString = fullString + bodyArr[i]
            }    
        }
        
        number = prefics + '-' + fullString

        return number
    }

    async function setNewCommet() {
        if (!commentText.trim()) {
            alert('Добавьте Ваш комментарий')
            return
        }

        let commentObj = [
            {
                userUUID: localStorage.getItem('UserUID'),
                commentText: commentText
            }
        ]

        try {
            store.setLoading(true)

            const res = TaskService.setComment(commentObj, String(taskUUID))
            
            setTimeout(() => {
                getTaskComment(String(taskUUID))   
            }, 500)

        } catch(e) {
            console.log(e)
        } finally {
            store.setLoading(false)
        }

        setCommentText('')
    }

    return (
        <div className='VR_DetailsContainer_DetailsTask'>
            <div className='VR_rightDetailsBlock_DetailsTask'></div>
        
            <div className='VR_contentContainer_DetailsTask'>                
                <div className='VR_contentPreContainer_DetailsTask'>
                    <div className='VR_closeContainer_DetailsTask' >
                        <div onClick={() => detailsObj.changeDetailsShow?.(false)}>
                            <AddIcon color='error'/>
                        </div>
                    </div>

                    <div className='VR_contentBlock_DetailsTask'>
                        <div className='VR_detialsTitleBlock_DetailsTask'>
                            <h3>Детализация задачи: {setNormalizeNumber(String(taskNumber))}</h3>

                            {resetCurentStage(String(taskStatus))}
                        </div>

                        <div className='VR_taskName_DetailsTask'>
                            <h5>Наименование:</h5>
                            {executor == userName ? (
                                <input 
                                    type='text' 
                                    placeholder='Наименование задачи...'
                                    value={taskName}
                                    onChange={(e) => setTaskName(e.target.value)}/>
                            ) : (
                                <input 
                                    type='text' 
                                    placeholder='Наименование задачи...'
                                    value={taskName}
                                    readOnly/>
                            )}
                        </div>

                        <div className='VR_taskService_DetailsTask'>
                            <h5>Выбранная услуга:</h5>
                            {executor == userName ? (
                                <input 
                                    type="text" 
                                    placeholder='Выбранная услуга...'
                                    value={taskService}
                                    onChange={(e) => setTaskService(e.target.value)}/>
                            ) : (
                                <input 
                                    type="text" 
                                    placeholder='Выбранная услуга...'
                                    value={taskService}
                                    readOnly/>
                            )}
                        </div>

                        <div className='VR_TaskNumber_DetailsTask'>
                            <h5>Номер задачи:</h5>                            
                            {executor == userName ? (
                                <input 
                                    type="text" 
                                    placeholder='Номер задачи...'
                                    value={taskNumber}
                                    onChange={(e) => setTaskNumber(e.target.value)}/>
                            ) : (
                                <input 
                                    type="text" 
                                    placeholder='Номер задачи...'
                                    value={taskNumber}
                                    readOnly/>
                            )}
                        </div>

                        <div className='VR_PriorityTask_DetailsTask'>
                            <h5>Приоритет:</h5>                            
                            {executor == userName ? (
                                <input 
                                    type="text"
                                    placeholder='Приоритет задачи...'
                                    value={taskPriority}
                                    onChange={(e) => setTaskPriority(e.target.value)}/>
                            ) : (
                                <input 
                                    type="text" 
                                    placeholder='Приоритет завяки...'
                                    value={taskPriority}
                                    readOnly/>
                            )}
                        </div>

                        <div className='VR_InitiatorTask_DetailsTask'>
                            <h5>Инициатор:</h5>                            
                            {executor == userName ? (
                                <input 
                                    type="text" 
                                    placeholder='Инициатор...'
                                    value={taskInitiator}
                                    onChange={(e) => setTaskInitiator(e.target.value)}/>
                            ) : (
                                <input 
                                    type="text"
                                    placeholder='Инициатор...'
                                    value={taskInitiator}
                                    readOnly/>
                            )}
                        </div>

                        <div className='VR_ExecutorTask_DetailsTask'>
                            <h5>Исполнитель:</h5>                            
                            {executor == userName ? (
                                <input 
                                    type="text" 
                                    placeholder='Исполнитель...'
                                    value={taskExecutor}
                                    onChange={(e) => setTaskExecutor(e.target.value)}/>
                            ) : (
                                <input 
                                    type="text"
                                    placeholder='Исполнитель...' 
                                    value={taskExecutor}
                                    readOnly/>
                            )}
                        </div>

                        <div className='VR_OrganizationClient_DetailsTask'>
                            <h5>Организация заказчик:</h5>
                            {executor == userName ? (
                                <input 
                                type="text" 
                                placeholder='Организация заказчик...'
                                value={taskOrganizationClient}
                                onChange={(e) => setTaskOrganizationClient(e.target.value)}/>
                            ) : (
                                <input 
                                type="text" 
                                placeholder='Организация заказчик...'
                                value={taskOrganizationClient}
                                readOnly/>
                            )}
                        </div>
                        
                        <div className='VR_OrganizationExecutor_DetailsTask'>
                            <h5>Организация исполнитель:</h5>
                            {executor == userName ? (
                                <input 
                                    type="text" 
                                    placeholder='Организация исполнитель...'
                                    value={taskOrganizationExecutor}
                                    onChange={(e) => setTaskOrganizationExecutor(e.target.value)}/>
                            ) : (
                                <input 
                                    type="text" 
                                    placeholder='Организация исполнитель...'
                                    value={taskOrganizationExecutor}
                                    readOnly/>
                            )}
                        </div>

                        <div className='VR_DateCreateTask_DetailsTask'>
                            <h5>Дата создания задачи:</h5>                                
                            {executor == userName ? (
                                <input 
                                    type="text" 
                                    placeholder='Дата создания...'
                                    value={taskDateCreate}
                                    onChange={(e) => setTaskDateCreate(e.target.value)}/>
                            ) : (
                                <input 
                                    type="text" 
                                    placeholder='Дата создания...'
                                    value={taskDateCreate}
                                    readOnly/>
                            )}
                        </div>

                        <div className='VR_TaskDateCompiliet_DetailsTask'>
                            <h5>Дата завершения:</h5>
                            {executor == userName ? (
                                <input 
                                    type="text" 
                                    placeholder='Дата завершения...'
                                    value={taskDateCompiliet == '01.01.0001 0:00:00' ? '-' : taskDateCompiliet}
                                    onChange={(e) => setTaskDateCompiliet(e.target.value)}/>
                            ) : (
                                <input 
                                    type="text" 
                                    placeholder='Дата завершения...'
                                    value={taskDateCompiliet == '01.01.0001 0:00:00' ? '-' : taskDateCompiliet}
                                    readOnly/>
                            )}
                        </div>

                    </div>

                    <div className='VR_taskComment_DetailsTask'>
                        <div className='VR_CommentTitleBlock_DetailsTask'>
                            <h3>Комментарии к задаче</h3>
                        </div>

                        <div className='VR_CommentContentBlock_DetailsTask'>
                            {commentArr.map((item, index) => (
                                item.commentShow ? (
                                    <></>
                                ) : (
                                    <div className={`VR_oneCommentItem_DetailsTask ${initiator == userName ? 'VR_rightOneCommentItem_DetailsTask' : 'VR_leftOneCommentItem_DetailsTasl'}`}>
                                        <div className={`VR_User_DetailsTask ${initiator == userName ? 'VR_rightUser_DetailsTask' : 'VR_leftUser_DetailsTask'}`}>
                                            <p>{store.cutNameToNormal(item.commentUser)}</p>
                                        </div>

                                        <div className={`VR_commentText_DetailsTask ${initiator == userName ? 'VR_rightText_DetailsTask' : 'Vr_leftText_DetailsTask'}`}>
                                            <p>{store.validationCommentText(item.commentText)}</p>
                                        </div>

                                        <div className={`VR_user_DetailsTask ${initiator == userName ? 'VR_leftDate_DetailsTask' : 'VR_rightDate_DetailsTask'}`}>
                                            <p>{store.cutDateToMormal(item.commentDate)}</p>
                                        </div>                                
                                    </div>
                                )
                            ))}
                        </div>

                        <div className='VR_CreateCommentBlock_DetailsTask'>
                            <div className='VR_CommentArea_DetailsTask'>
                                {executor == userName || initiator == userName ? (
                                    <textarea 
                                        placeholder='Оставьте комментарий...'
                                        value={commentText}
                                        onChange={(e) => setCommentText(e.target.value)}></textarea>
                                ) : (
                                    <textarea 
                                        placeholder='Оставьте комментарий...'
                                        value={commentText}
                                        readOnly
                                        onClick={() => alert(`Комментарий могут оставить только \nИсполнитель или Инициатор`)}/>
                                    )}
                            </div>

                            <div className='VR_SetCommentBtn_DetailsTask'>
                                {executor == userName || initiator == userName ? (
                                    <Button onClick={() => setNewCommet()} variant='outline-primary'>Отправить</Button>
                                ) : (
                                    <Button variant='outline-primary' disabled>Отправить</Button>
                                )}  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(DetailsTask);