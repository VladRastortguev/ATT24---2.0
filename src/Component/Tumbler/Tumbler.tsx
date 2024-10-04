import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';

import '../Tumbler/Tumbler.css'
import { tumblerInterface } from './interface/Tumbler-Interace';

const Tumbler:FC<tumblerInterface> = ({ taskViewInterface }) => {
    return (
        <div className='VR_Container_Tumbler'>
            <ul className='VR_TumblerList_Tumbler'>
                <li 
                    className={`${taskViewInterface.taskView == 'access' ? 'VR_ActiveTumblerLi_Tumbler' : ''}`}
                    onClick={() => taskViewInterface.changeShowTaskView?.('access')}
                >Доступы</li>
                
                <li
                    className={`${taskViewInterface.taskView == 'tehSupport' ? 'VR_ActiveTumblerLi_Tumbler' : ''}`}
                    onClick={() => taskViewInterface.changeShowTaskView?.('tehSupport')}
                >Задачи Тех. Поддержки</li>

                <li
                    className={`${taskViewInterface.taskView == '1c' ? 'VR_ActiveTumblerLi_Tumbler' : ''}`}
                    onClick={() => taskViewInterface.changeShowTaskView?.('1c')}
                >Задачи 1c</li>
            </ul>
        </div>
    );
};

export default observer(Tumbler);