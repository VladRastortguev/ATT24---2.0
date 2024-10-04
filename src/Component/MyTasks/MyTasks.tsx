import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useEffect, useState } from 'react';

import '../MyTasks/MyTasks.css'
import '../PersonArea/PersonArea.css'

import { Context }              from '../../index.tsx';

import TaskService              from '../../services/TaskService.ts';

import { lastTask }             from '../../models/Itil/taskModels/lastTask-model';
import { lastTaskInterface }    from '../LastTasks/interface/LastTask-interface.ts';

import FlipCameraAndroidIcon    from '@mui/icons-material/FlipCameraAndroid';
import AddIcon                  from '@mui/icons-material/Add';
import AssignmentIndIcon        from '@mui/icons-material/AssignmentInd';
import PauseIcon                from '@mui/icons-material/Pause';
import CachedIcon               from '@mui/icons-material/Cached';
import DoneAllIcon              from '@mui/icons-material/DoneAll';
import PlaylistAddCheckIcon     from '@mui/icons-material/PlaylistAddCheck';
import CloseIcon                from '@mui/icons-material/Close';  
import Form                     from 'react-bootstrap/Form';

import ViewKanbanIcon           from '@mui/icons-material/ViewKanban';
import FormatListBulletedIcon   from '@mui/icons-material/FormatListBulleted';
import { title } from 'process';


const MyTasks:FC<lastTaskInterface> = ({ lastTaskInterfaceObj }) => {
    const [allTaskArr, setAllTask] = useState<lastTask[]>([])

    const [showSettingBlock, setShowSettingBlock] = useState(false)
    
    const [iCreator, setICreator] = useState(true)
    const [iExecutor, setIExecutor] = useState(false)

    const [viewList, setViewList] = useState(true)
    const [viewKanban, setViewKanban] = useState(false)

    const [boards, setBoards] = useState([
        {id: 1, title: 'Сделать', items: [{id: 1, title: 'Пойти в магазин1'}, {id: 2, title: 'Пойти в магазин2'}, {id: 3, title: 'Пойти в магазин3'}]},
        {id: 2, title: 'Проверить', items: [{id: 4, title: 'Пойти в магазин4'}, {id: 5, title: 'Пойти в магазин5'}, {id: 6, title: 'Пойти в магазин6'}]},
        {id: 3, title: 'Выполнено', items: [{id: 7, title: 'Пойти в магазин7'}, {id: 8, title: 'Пойти в магазин8'}, {id: 9, title: 'Пойти в магазин9'}]}
    ])
    const [currentBoard, setCurrentBoard] = useState<CurrentBoard | null>(null)
    const [currentItem, setCurrentItem] = useState<Item | null>(null)

    const [detailsItem, setDetailsItem] = useState<lastTask>()  

    const { store } = useContext(Context)

    interface Item {
        id: number,
        title: string
    }

    interface CurrentBoard {
        id: number,
        title: string,
        items: Item[]
    }

    useEffect(() => {
        getAllTasks()
    }, [])

    useEffect(() => {
        if (detailsItem) {
            lastTaskInterfaceObj.changeDetailsShow?.(true)
            lastTaskInterfaceObj.changeDetailsObj?.(detailsItem)
        }
    }, [detailsItem])

    async function getAllTasks() {
        store.setLoading(true)

        try {
            const res = await TaskService.allTask()

            const tasks = res.data;

            const checkTasks = tasks.filter(task => task.taskCurrentStage === 'Согласование' && task.taskInitiator === localStorage.getItem('UserName'))
            const doingTasks = tasks.filter(task => task.taskCurrentStage === 'В работе' && task.taskInitiator === localStorage.getItem('UserName'))
            const doneTasks  = tasks.filter(task => task.taskCurrentStage === 'Завершено' && task.taskInitiator === localStorage.getItem('UserName'))

            setBoards([
                {id: 1, title: 'Согласование', items: checkTasks.map(mapTaskToItem)},
                {id: 2, title: 'В процессе', items: doingTasks.map(mapTaskToItem)},
                {id: 3, title: 'Завершено', items: doneTasks.map(mapTaskToItem)}
            ])

            setAllTask(res.data)
        } catch (e) {
            alert(e)
        } finally {
            store.setLoading(false)
        }
    }

    function mapTaskToItem(task) {
        return {
            id: task.taskUID,
            title: `Задача ${setToNormalNumber(task.taskNumber)}: ${String(task.taskName).substring(0, 30)}...`
        }
    }

    function tasksStatus(CurrentStage: string) {
        switch (CurrentStage) {
            case 'Регистрация': 
                return (
                    <>
                        <div className="VR_TaskStatus_MyTasks VR_Pending_TaskStatus">
                            <span>Регистрация</span>
                        </div>
                    </>
                )

            case 'Согласование':
                return (
                    <>
                        <div className="VR_TaskStatus_MyTasks in-progress">
                            <span>Согласование</span>
                        </div>
                    </>
                )

            case 'В очереди':
                return (
                    <>
                        <div className="VR_TaskStatus_MyTasks in-progress">
                            <span>В очереди</span>
                        </div>
                    </>
                )

            case 'В работе':
                return (
                    <>
                        <div className="VR_TaskStatus_MyTasks in-progress">
                            <span>В работе</span>
                        </div>
                    </>
                )

            case 'Завершено':
                return (
                    <>
                        <div className="VR_TaskStatus_MyTasks completed">
                            <span>Завершено</span>
                        </div>
                    </>
                )
        }
    }

    function setToNormalNumber(taskNumber: string) {
        let preficsNumber = String(taskNumber).substring(0, 2)

        let numberBody = String(taskNumber).split('-')[1]

        let numberArr = String(numberBody).split('')

        let tempArr: string[] = []
        let zeroBool = false
        for (let i in numberArr) {
            if (numberArr[i] !== '0') {
                tempArr.push(numberArr[i])
                zeroBool = true
            } else if (zeroBool) {
                tempArr.push(numberArr[i])
                zeroBool = false
            }                        
        }

        let fullNumberStr = ''
        for (let j in tempArr) {
            fullNumberStr = fullNumberStr + tempArr[j]
        }        

        return `${preficsNumber}-${fullNumberStr}`
    }

    document.addEventListener('keydown', (e) => {
        if (e.code == 'Escape' && showSettingBlock) {
            setShowSettingBlock(false)
            return
        }
    })

    function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()

        const target = e.target as HTMLElement

        if (target.classList.contains('VR_KanbanItem_MyTasks')) {
            target.style.boxShadow = '0 2px 3px gray'
        }
    }

    function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
        const target = e.target as HTMLElement;
        
        target.style.boxShadow = 'none'
    }

    function dragStartHandler(e: React.DragEvent<HTMLDivElement>, board: CurrentBoard, item: Item) {
        setCurrentBoard(board)
        setCurrentItem(item)

        e.currentTarget.classList.add('dragging')
    }

    function dragEndHandler(e: React.DragEvent<HTMLDivElement>) {
        // const target = e.target as HTMLElement;

        // target.style.boxShadow = 'none'
    
        e.currentTarget.classList.remove('dragging')
    }

    function dropCardHandler(e: React.DragEvent<HTMLDivElement>, board: CurrentBoard) { 
        const target = e.target as HTMLElement
        
        if (currentBoard && currentItem) {
            board.items.push(currentItem)
            
            const currentIndex = currentBoard.items.indexOf(currentItem)
            currentBoard.items.splice(currentIndex, 1)

            setBoards(boards.map((b) => {
                if (b.id === board.id) {
                    return board
                }

                if (b.id === currentBoard.id) {
                    return currentBoard
                }

                return b
            }))
        }

        target.style.boxShadow = 'none'
        e.currentTarget.classList.remove('dragging')
    }

    function dropHandler(e: React.DragEvent<HTMLDivElement>, board: CurrentBoard, item: Item) {
        e.preventDefault()

        const target = e.target as HTMLElement

        if (currentBoard && currentItem) {

            if (board.id === currentBoard.id && item.id === currentItem.id) {
                return;
            }

            const currentIndex = currentBoard?.items.indexOf(currentItem)
            const dropIndex = board.items.indexOf(item)
            
            const currentItemCopy = [...currentBoard.items]
            currentItemCopy.splice(currentIndex, 1)


            const dropItemsCopy = board.id === currentBoard.id ? [...currentItemCopy] : [...board.items]
            dropItemsCopy.splice(dropIndex + 1, 0, currentItem)

            setBoards(boards.map((b) => {
                if (b.id === board.id) {
                    return {...b, items: dropItemsCopy}
                }

                if (b.id === currentBoard.id) {
                    return {...b, items: currentItemCopy}
                }

                return b
            }))

            setCurrentBoard(null)
            setCurrentItem(null)
        }

        target.style.boxShadow = 'none'
    }

    async function findTaskArrItem(item: Item) {
        const findItem = await allTaskArr.find(task => task.taskUID === String(item.id));
        
        setDetailsItem(findItem)
    }

    if (store.isLoading) {
        return (
            <div className='VR_Container_MyTasks VR_Container_CreateTask VR_ContainerOnLoad_LastTask'>
                {/* <div className='VR_PreSpinnerBlock'> */}
                    <FlipCameraAndroidIcon className='VR_Spinner'/>
                {/* </div>     */}
            </div>
        )
    }

    return (
        <>        
            <div className='VR_Container_CreateTask VR_Container_MyTasks'>
                <div className='VR_PreContainer_PersonArea VR_PreContainer_MyTasks'>
                    <div className='VR_TitleBlock_PersonArea VR_titleBlock_MyTasks'>
                        <h3>Мои задачи</h3>

                        <div className='VR_SettingsContainer_MyTasks' onClick={() => setShowSettingBlock(true)} title='Настройки отображения'>
                            <PlaylistAddCheckIcon className='VR_SettingEl_MyTasks' htmlColor='#484d54'/>
                        </div>
                    </div>

                    {viewList ? (

                        <ul className="VR_taskList_MyTaks">            
                            {iCreator ? (
                                Array.isArray(allTaskArr) ? (
                                    allTaskArr.map((item, index) => {
                                        let userName = localStorage.getItem('UserName')

                                        return(
                                            <>
                                                {item.taskInitiator == userName ? (
                                                    <li className="VR_TaskItem_MyTasks" onClick={() => {
                                                        lastTaskInterfaceObj.changeDetailsShow?.(true)
                                                        lastTaskInterfaceObj.changeDetailsObj?.(item)
                                                    }}>

                                                        <div className="VR_TaskContent_MyTasks">
                                                            <h4>Task {setToNormalNumber(item.taskNumber)}: {item.taskName}</h4>
                                                            <p>Исполнитель: {item.taskNowExecutor}</p>
                                                        </div>
                                            
                                                        {tasksStatus(item.taskCurrentStage)}
                                                    </li>
                                                ) : (
                                                    null
                                                )}
                                            </>
                                        )
                                    })
                                ) : (
                                    null
                                )
                            ) : (null)}

                            {iExecutor ? (
                                Array.isArray(allTaskArr) ? (
                                    allTaskArr.map((item, index) => {
                                        let userName = localStorage.getItem('UserName')
                                    
                                        return (
                                            <>
                                                {item.taskNowExecutor == userName ? (
                                                    <li className="VR_TaskItem_MyTasks" onClick={() => {
                                                        lastTaskInterfaceObj.changeDetailsShow?.(true)
                                                        lastTaskInterfaceObj.changeDetailsObj?.(item)
                                                    }}>

                                                        <div className="VR_TaskContent_MyTasks">
                                                            <h4>Task {setToNormalNumber(item.taskNumber)}: {item.taskName}</h4>
                                                            <p>{item.taskNowExecutor}</p>
                                                        </div>
                                        
                                                        {tasksStatus(item.taskCurrentStage)}
                                                    </li>
                                                ) : (null)}
                                            </>
                                        )
                                    })
                                ) : (null)
                            ) : (null)}

                        </ul>                
                    ) : (null)}


                    {viewKanban ? (
                        <div className='VR_KanbanView_MyTasks'>
                            {boards.map((board, index) => (
                                <div 
                                    className='VR_Board_MyTasks'
                                    onDragOver={(e) => dragOverHandler(e)}
                                    onDrop={(e) => dropCardHandler(e, board)}
                                >
                                    <div className='VR_BoardTitle_MyTasks'>
                                        {board.title}
                                    </div>

                                    {board.items.map((item, index) => (
                                        <div className='VR_KanbanItem_MyTasks'
                                            onDragOver={(e) => dragOverHandler(e)} 
                                            onDragLeave={(e) => dragLeaveHandler(e)}
                                            onDragStart={(e) => dragStartHandler(e, board, item)}
                                            onDragEnd={(e) => dragEndHandler(e)}
                                            onDrop={(e) => dropHandler(e, board, item)}
                                            draggable={true}
                                            onClick={() => {
                                                findTaskArrItem(item)
                                                // setTimeout(() => {
                                                //     lastTaskInterfaceObj.changeDetailsShow?.(true)
                                                //     lastTaskInterfaceObj.changeDetailsObj?.(detailsItem)
                                                // }, 500)
                                            }}>
                                            
                                            <p>{item.title}</p> 
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ) : (null)}


                </div>
            </div>

            {showSettingBlock ? (
                <>
                    <div className='VR_ModalSettingBlock_MyTasks'>
                        <div className='VR_RightSettingBlock_MyTasks'></div>

                        <div className='VR_SettingContainer_MyTasks'>
                                                        
                            <div className='VR_SettingBlockTitle_MyTasks'>
                                <h3>Настройки списка задач</h3>
                                
                                <div className='VR_CloseSettingBlock_MyTasks' onClick={() => setShowSettingBlock(false)}>
                                    <CloseIcon color='error' />
                                </div>
                            </div>

                            <div className='VR_FilterForName_MyTasks'>
                                <h5>Фильтр по типу задач</h5>

                                <div className='VR_SettingList_MyTasks'>
                                    <div className='VR_ICreatorBlock_MyTasks'>
                                        <p>Я иницатор: </p>
                                        <Form>
                                            <Form.Check 
                                                type='switch'
                                                id='custom-switch'
                                                checked={iCreator ? true : false}
                                                onChange={() => {
                                                    setICreator(!iCreator)
                                                    setIExecutor(!iExecutor)
                                                }}/>
                                        </Form>
                                    </div>
                                </div>

                                <div className='VR_SettingList_MyTasks'>
                                    <div className='VR_ICreatorBlock_MyTasks'>
                                        <p>Я исполнитель: </p>
                                        <Form>
                                            <Form.Check 
                                                type='switch'
                                                id='custom-switch'
                                                checked={iExecutor ? true : false}
                                                onChange={() => {
                                                    setICreator(!iCreator)
                                                    setIExecutor(!iExecutor)
                                                }}/>
                                        </Form>
                                    </div>
                                </div>
                            </div>

                            <div className='VR_FilterForUserView_MyTasks'>
                                <h5>Фильтр отображения</h5>
                                
                                <div className='VR_ViewFilterContainer_MyTasks'>
                                    <div 
                                        className={viewList ? 'VR_ChangeListViewAcive_MyTasks' : 'VR_ChangeListView_MyTasks'}
                                        onClick={() => {
                                            setViewList(true)
                                            setViewKanban(false)
                                        }}>
                                    
                                        <FormatListBulletedIcon />
                                    </div>

                                    <div 
                                        className={viewKanban ? 'VR_ChangeKanbanViewActive_MyTasks' : 'VR_ChangeKanbanView_MyTasks'}
                                        onClick={() => {
                                            setViewList(false)
                                            setViewKanban(true)
                                        }}>
                                            
                                        <ViewKanbanIcon />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>                
                </>
                
            ) : (null)}

        </>

    );
};

export default observer(MyTasks);