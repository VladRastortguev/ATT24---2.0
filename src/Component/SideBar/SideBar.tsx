import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';

import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PersonIcon from '@mui/icons-material/Person';
import AdjustIcon from '@mui/icons-material/Adjust';

import '../SideBar/SideBar.css'
import { SideBarInterface } from '../ComponentInterface/SideBarInterface/SideBarInterface';

const SideBar:FC<SideBarInterface> = ({ InterfaceObj }) => {
    


    return (
        <div className='VR_Container_SideBar'>
            <div className='VR_TitelBlock_SideBar'>
                <h4>Разделы</h4>
            </div>

            <div className='VR_SectionList_SideBar'>
                <ul>
                    <li onClick={() => InterfaceObj.changePageView?.('CreateTask')}>
                        <PlaylistAddIcon />
                        <a>Создание задач</a>
                    </li>

                    <li onClick={() => InterfaceObj.changePageView?.('PersonArea')}>
                        <PersonIcon />
                        <a>Личный кабинет</a>
                    </li>

                    <li onClick={() => InterfaceObj.changePageView?.('MyTasks')}>
                        <AdjustIcon />
                        <a>Треккер задач</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default observer(SideBar);