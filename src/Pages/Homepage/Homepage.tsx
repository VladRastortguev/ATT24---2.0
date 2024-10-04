import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useEffect, useState } from 'react';

import '../Homepage/Homepage.css'
import Header from '../../Component/Header/Header.tsx';
import { Context } from '../../index.tsx';
import RepistrationPages from '../RegistrationPages/RepistrationPages.tsx';
import SideBar from '../../Component/SideBar/SideBar.tsx';
import CreateTask from '../../Component/CreateTask2/CreateTask.tsx';
import PersonArea from '../../Component/PersonArea/PersonArea.tsx';
import LastTasks from '../../Component/LastTasks/LastTasks.tsx';
import { lastTask } from '../../models/Itil/taskModels/lastTask-model.ts';
import DetailsTask from '../../Component/DetailsTask/DetailsTask.tsx';
import Tumbler from '../../Component/Tumbler/Tumbler.tsx';
import MyTasks from '../../Component/MyTasks/MyTasks.tsx';

const Homepage:FC = ()  => {
    // Объявление пременных - Начало
    const [pageView, setPageView] = useState('CreateTask')
    const [showDetails, setShowDetails] = useState(false)
    const [detailsObj, setDetailsObj] = useState<lastTask>()
    const [taskView, setTaskView] = useState('access')

    const { store } = useContext(Context)
    // Объявление переменных - Конец

    // ---------------------------------------------------------------------------------------

    // Вызовы функций с сервера - Начало
    useEffect(() => {
        const fetchData = async () => {
            try {
                await store.checkAuth()
            } catch(e) {
                alert(e)
            }
        }

        fetchData()
    }, [])
    // Вызовы функций с сервера - Конец

    // ---------------------------------------------------------------------------------------

    // Формирование функций и объектов для пропса - Начало
    const handleChangePageView = (newState: string) => {
        setPageView(newState)
    }

    const handleChangeShowDetails = (newState: boolean) => {
        setShowDetails(newState)
    }

    const handleChangeDetailsObj = (newState: lastTask) => {
        setDetailsObj(newState)
    }

    const handleChangeTaskView = (newState: string) => {
        setTaskView(newState)
    }

    const interfaceObj = {
        changePageView: handleChangePageView
    }

    const lastTaskInterfaceObj = {
        changeDetailsShow: handleChangeShowDetails,
        changeDetailsObj: handleChangeDetailsObj,
        checkRewiew: showDetails ? false : true    
    }

    const detailsObjInterface = {
        item: detailsObj,
        changeDetailsShow: handleChangeShowDetails,
    }

    const taskViewInterface = {
        changeShowTaskView: handleChangeTaskView,
        taskView
    }


    // Формирование функций и объектов для пропса - Конец

    // ---------------------------------------------------------------------------------------

    //Формирование динамических компонентов - Начало    
    const DynamicComponent = ({ componentName }) => {
        switch (componentName) {
            case 'CreateTask':
                return (
                    <>
                        <CreateTask taskViewInterface={taskViewInterface}/>

                        <div className='VR_LastTaskTumbler_Homepage'>
                            <LastTasks lastTaskInterfaceObj={lastTaskInterfaceObj}/>
                            <Tumbler taskViewInterface={taskViewInterface}/>                            
                        </div>                    
                    </>
                ) 
            case 'PersonArea':
                return (
                    <>
                        <PersonArea />
                        <LastTasks lastTaskInterfaceObj={lastTaskInterfaceObj}/>
                    </>
                ) 

            case 'MyTasks':
                return (
                    <>
                        <MyTasks lastTaskInterfaceObj={lastTaskInterfaceObj} />
                    </>
                )
                
        }
    }
    //Формирование динамических компонентов - Конец

    // ---------------------------------------------------------------------------------------

    //HTML код - Начало
    if (!store.isAuth) {
        return (
            <RepistrationPages />
        )
    }

    return (
        <>
            <Header />

            <div className='VR_Container_Homepage'>
                <SideBar InterfaceObj={interfaceObj} />
                <DynamicComponent componentName={pageView} />                
            </div>
            
            {showDetails ? (
                <DetailsTask detailsObj={detailsObjInterface}/>
            ) : (
                <></>
            )}

        </>
    );

    //HTML код - Конец
};

export default observer(Homepage);