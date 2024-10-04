import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useEffect, useState } from 'react';

import '../CreateTask2/CreateTask.css'
import { Context } from '../../index.tsx';
import TaskService from '../../services/TaskService.ts';

import Button from 'react-bootstrap/esm/Button';
import { tumblerInterface } from '../Tumbler/interface/Tumbler-Interace.ts';
import Access from './PodComponent/Access/Access.tsx';
import TehnicalTask from './PodComponent/TehnicalTask/TehnicalTask.tsx';
import Task1c from './PodComponent/1c/Task1c.tsx';

const CreateTask:FC<tumblerInterface> = ({taskViewInterface}) => {
    const [taskName, setTaskName] = useState('')
    const [taskService, setTaskService] = useState('')

    const [accesUser, setAsccesUser] = useState('')
    const [subdivisionUser, setSubdivisionUser] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userArrow, setUserArrow] = useState('')
    const [userStatus, setUserStatus] = useState('')
    const [detailsAscces, setDetailsAccess] = useState('')

    const [taskArrow, setTaskArrow] = useState('')
    const [taskLocation, setTaskLocation] = useState('')
    const [mailUser, setMailUser] = useState('')
    const [userOrganization, setUserOrganization] = useState('')
    const [dateError, setDateError] = useState('')
    const [errorCause, setErrorCause] = useState('')
    const [errorResponsible, setErrorResponsible] = useState('')
    const [accountUser, setAccountUser] = useState('')    
    const [accountList, setAccountList] = useState('')    
    const [accountOrganization, setAccountOrganization] = useState('')    
    const [tehnicalElement, setTehnicalElement] = useState('')    
    const [taskPriority, setTaskPriority] = useState('')    
    const [priorityDescr, setPriorityDescr] = useState('')    
    const [taskUrgency, setTaskUrgency] = useState('')  
    const [urgencyDescr, setUrgencyDescr] = useState('')    
    const [detailsTask, setDetailsTask] = useState('')

    const [baseChange, setBaseChange] = useState('')

    const [screenShotFile, setScreenShotFile] = useState<File | null>(null)
    const [fileName, setFileName] = useState('')
    const [base64Str, setBase64Str] = useState('')

    const { store } = useContext(Context)


    const DynamicComponent = (componentName: string) => {
        switch (componentName) {
            case 'access':
                return (
                    <>
                        <div className='VR_SmallContainer_CreateTask2'>
                            <Access AccessObj={AccessObj}/>
                            <div className='VR_BtnContainer_CreaetTask'>
                                <Button className='VR_AccessBtn_CreateTask' variant='outline-primary' onClick={() => setTask()}>Создать</Button>                                
                            </div>   
                        </div>
                    </>
                )        

            case 'tehSupport': 
                return (
                    <>
                        <div className='VR_SmallContainer_CreateTask2'>
                            <TehnicalTask TeinicalObj={TeinicalObj} />
                            <div className='VR_BtnContainer_CreaetTask'>                               
                                <div className="form-container">
                                    <h6 className='VR_FileLabelTitle_CreateTask'>Выберите файл:</h6>
                                    <div className="file-input-container">
                                        <input type="file" id="file" accept='.png, .xlsx, .xls, .pdf, .docx' onChange={(e) => {
                                            handleChangeFileName(e) 
                                            handleChangeFile(e)                                           
                                        }} />
      
                                        <label htmlFor="file" className="file-input-label">Выберите файл</label>
      
                                        <span className="file-name">{fileName == '' ? 'Файл не выбран' : fileName}</span>
                                    </div>
                                </div>
                               
                                <Button variant='outline-primary' onClick={() => setTTask()}>Создать</Button>
                            </div>
                        </div>
                    </>
                )
            
            case '1c':
                return(
                    <>
                        <div className='VR_SmallContainer_CreateTask2'>
                            <Task1c task1cObj={task1cObj}/>


                            <div className='VR_BtnContainer_CreaetTask'>                               
                                <div className="form-container">
                                    <h6 className='VR_FileLabelTitle_CreateTask'>Выберите файл:</h6>
                                    <div className="file-input-container">
                                        <input type="file" id="file" accept='.png, .xlsx, .xls, .pdf, .docx' onChange={(e) => {
                                            handleChangeFileName(e)
                                            handleChangeFile(e)
                                        }}/>
      
                                        <label htmlFor="file" className="file-input-label">Выберите файл</label>
      
                                        <span className="file-name">{fileName == '' ? 'Файл не выбран' : fileName}</span>
                                    </div>
                                </div>
                               
                                <Button variant='outline-primary' onClick={() => set1cTask()}>Создать</Button>
                            </div>
                        </div>
                    </>
                )
        }
    }

    async function handleChangeFileName(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files) {

            let fileName = event.target.files[0].name;
            let filePng:string = String(fileName).split('.')[1]
            
            if (filePng !== 'png' && filePng !== 'xlsx' && filePng !== 'xls'&& filePng !== 'pdf' && filePng !== 'docx') {
                alert('Выберите только файл с расширениями "png", ".xlsx", ".xls", ".pdf", ".docx"')  
                event.target.value = ""              
                return
            } 
            
            setFileName(event.target.files[0].name)
        }
    }

    async function handleChangeFile(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files) {
            setScreenShotFile(event.target.files[0])
        }
    }

    async function setTask() {
        if (!taskName.trim()        ||
            !taskService.trim()     ||
            !accesUser.trim()       ||
            !subdivisionUser.trim() ||
            !userEmail.trim()       ||
            !userArrow.trim()       ||
            !userStatus.trim()      ||
            !detailsAscces.trim()) {

            alert('Заполните все поля')
            return
        }

        let obj = [
            {
                'taskName': taskName,
                'taskService': taskService,
                'initiator': localStorage.getItem('UserUID'),
                'aceessUser': accesUser,
                'subdivisionUser': subdivisionUser,
                'userEmail': userEmail,
                'userArrow': userArrow,
                'userStatus': userStatus,
                'detailsAccess': detailsAscces
            }
        ]        

        // store.setLoading(true)
        try {
            const res = await TaskService.setNewTask(obj, 'access')
        } catch(e) {
            alert(e)
        } finally {
            // store.setLoading(false)
        }

        setTaskName('')
        setTaskService('')
        setAsccesUser('')
        setSubdivisionUser('')
        setUserEmail('')
        setUserArrow('')
        setUserStatus('')
        setDetailsAccess('')
    }

    useEffect(() => {
        if (screenShotFile) {
            const reader = new FileReader()
            reader.onload = () => {
                setBase64Str(reader.result as string)              
            }   

            reader.readAsDataURL(screenShotFile)
        }
    }, [screenShotFile])

    async function setTTask() {
        if (
            !taskName.trim()            ||
            !taskService.trim()         ||
            !taskArrow.trim()           ||
            !detailsTask.trim()
        ) { 
            console.log(taskService);           
            alert("Заполните все поля!")
            
            return
        }        

        

        let obj = [
            {
                "taskName":             taskName,
                "taskService":          taskService,
                "taskArrow":            taskArrow,
                "taskLocation":         taskLocation,
                "mailUser":             mailUser,
                "userOrganization":     userOrganization,
                "dateError":            dateError,
                "errorCause":           errorCause,
                "errorResponsible":     errorResponsible,
                "accountUser":          accountUser,
                "accountList":          accountList,
                "accountOrganization":  accountOrganization,
                "tehnicalElement":      tehnicalElement,
                "taskPriority":         taskPriority,
                "priorityDescr":        priorityDescr,
                "taskUrgency":          taskUrgency,
                "urgencyDescr":         urgencyDescr,
                "detailsTask":          detailsTask,
                "initiator":            String(localStorage.getItem('UserUID')),
                "file":                 base64Str
            }
        ]

        console.log(obj);
        

        try {
            const res = await TaskService.setNewTask(obj, 'tehsupport')
        } catch(e) {
            alert(e)
        }        

        changeAccessTaskName    ('')
        changeAccessTaskService ('--')
        changeTaskArrow         ('--')
        setTaskLocation         ('')
        setMailUser             ('')    
        setUserOrganization     ('')
        setDateError            ('')
        setErrorCause           ('')
        setErrorResponsible     ('')
        setAccountUser          ('')
        setAccountList          ('')
        setAccountOrganization  ('')
        setTehnicalElement      ('')
        setTaskPriority         ('')
        setPriorityDescr        ('')        
        setTaskUrgency          ('')
        setUrgencyDescr         ('')
        setDetailsTask          ('')
    
        alert('Задача успешно создана!')
    }

    async function set1cTask() {
        if (
            !taskName.trim() ||
            !taskService.trim() ||
            !detailsTask.trim()
        ) {
            alert('Заполните все поля!')
            return
        }

        let obj = [
            {
                "taskName":             taskName,
                "taskService":          taskService,
                "baseChange":           baseChange,
                "taskPriority":         taskPriority,
                "priorityDescr":        priorityDescr,
                "taskUrgency":          taskUrgency,
                "urgencyDescr":         urgencyDescr,
                "detailsTask":          detailsTask,
                "initiator":            String(localStorage.getItem('UserUID')),
                "file":                 base64Str
            }
        ]

        try {
            const res = await TaskService.setNewTask(obj, '1c')
        } catch(e) {
            console.log(e);            
        }

        setTaskName('')
        setTaskService('')
        setBaseChange('')
        setTaskPriority('')
        setPriorityDescr('')
        setTaskUrgency('')
        setUrgencyDescr('')
        setDetailsTask('')
        setBase64Str('')
        setScreenShotFile(null)

        alert('Задача успешно создана!')
    }

    const changeAccessTaskName = (newState: string) => {
        setTaskName(newState)
    }

    const changeAccessTaskService = (newState: string) => {
        setTaskService(newState)
    }

    const changeAccessUser = (newState: string) => {
        setAsccesUser(newState)
    }

    const changeSubdivisionUser = (newState: string) => {
        setSubdivisionUser(newState)
    }

    const changeUserEmail = (newState: string) => {
        setUserEmail(newState)
    }

    const changeUserArrow = (newState: string) => {
        setUserArrow(newState)
    }

    const changeUserStatus = (newState: string) => {
        setUserStatus(newState)
    }

    const changeDetailsAscces = (newState: string) => {
        setDetailsAccess(newState)
    }

    const changeTaskArrow = (newState: string) => {
        setTaskArrow(newState)
    }

    const changeTaskLocation = (newState: string) => {
        setTaskLocation(newState)
    }

    const changeMailUser = (newState: string) => {
        setMailUser(newState)
    }

    const changeUserOrganization = (newState: string) => {
        setUserOrganization(newState)
    }

    const changeDateError = (newState: string) => {
        setDateError(newState)
    }

    const changeErrorCause = (newState: string) => {
        setErrorCause(newState)
    }

    const changeErrorResponsible = (newState: string) => {
        setErrorResponsible(newState)
    }

    const changeAccountUser = (newState: string) => {
        setAccountUser(newState)
    }

    const changeAccountList = (newState: string) => {
        setAccountList(newState)
    }

    const changeAccountOrganization = (newState: string) => {
        setAccountOrganization(newState)
    }

    const changeTehnicalElement = (newState: string) => {
        setTehnicalElement(newState)
    }

    const changeTaskPriority = (newState: string) => {
        setTaskPriority(newState)
    }

    const changePriorityDescr = (newState: string) => {
        setPriorityDescr(newState)
    }

    const changeTaskUrguncy = (newState: string) => {
        setTaskUrgency(newState)
    }

    const changeUrgencyDescr = (newState: string) => {
        setUrgencyDescr(newState)
    }

    const changeDetailsTask = (newState: string) => {
        setDetailsTask(newState)
    }

    const changeBaseChange = (newState: string) => {
        setBaseChange(newState)
    }

    const AccessObj = {
        taskName: taskName,
        changeAccessTaskName: changeAccessTaskName,

        taskService: taskService,
        changeAccessTaskService: changeAccessTaskService,
        
        accessUser: accesUser,
        changeAccessUser: changeAccessUser,
        
        subdivisionUser: subdivisionUser,
        changeSubdivisionUser: changeSubdivisionUser,
        
        userEmail: userEmail,
        changeUserEmail: changeUserEmail,
        
        userArrow: userArrow,
        changeUserArrow: changeUserArrow,
        
        userStatus: userStatus,
        changeUserStatus: changeUserStatus,
        
        detailsAscces: detailsAscces,
        changeDetailsAscces: changeDetailsAscces
    }

    const TeinicalObj = {
        taskName: taskName,
        changeTaskName: changeAccessTaskName,

        taskArrow: taskArrow,
        changeTaskArrow: changeTaskArrow,

        taskService: taskService,
        changeTaskService: changeAccessTaskService,

        taskLocation: taskLocation,
        changeTaskLocation: changeTaskLocation,

        mailUser: mailUser,
        changeMailUser: changeMailUser,

        userOrganization: userOrganization,
        changeUserOrganization: changeUserOrganization,

        dateError: dateError,
        changeDateError: changeDateError,

        errorCause: errorCause,
        changeErrorCause: changeErrorCause,

        errorResponsible: errorResponsible,
        changeErrorResponsible: changeErrorResponsible,

        accountUser: accountUser,
        changeAccountUser: changeAccountUser,

        accountList: accountList,
        changeAccountList: changeAccountList,

        accountOrganization: accountOrganization,
        changeAccountOrganization: changeAccountOrganization,

        tehnicalElement: tehnicalElement,
        changeTehnicalElement: changeTehnicalElement,

        taskPriority: taskPriority,
        changeTaskPriority: changeTaskPriority,

        priorityDescr: priorityDescr,
        changePriorityDescr: changePriorityDescr,

        taskUrgency: taskUrgency,
        changeTaskUrguncy: changeTaskUrguncy,

        urgencyDescr: urgencyDescr,
        changeUrgencyDescr: changeUrgencyDescr,

        detailsTask: detailsTask,
        changeDetailsTask: changeDetailsTask
    }

    const task1cObj = {
        taskName: taskName,
        changeTaskName: changeAccessTaskName,

        taskService: taskService,
        changeTaskService: changeAccessTaskService,

        baseChange: baseChange,
        changeBaseChange: changeBaseChange,

        taskPriority: taskPriority,
        changeTaskPriority: changeTaskPriority,

        priorityDescr: priorityDescr,
        changePriorityDescr: changePriorityDescr,

        taskUrgency: taskUrgency,
        changeTaskUrguncy: changeTaskUrguncy,

        urgencyDescr: urgencyDescr,
        changeUrgencyDescr: changeUrgencyDescr,

        detailsTask: detailsTask,
        changeDetailsTask: changeDetailsTask
    }

    return (
        <div className='VR_Container_CreateTask'>
            {DynamicComponent(taskViewInterface.taskView)}
        </div>
    );
};

export default observer(CreateTask);