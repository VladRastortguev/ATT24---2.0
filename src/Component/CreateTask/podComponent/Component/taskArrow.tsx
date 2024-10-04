import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { taskArrowInterface } from '../Interface/taskArrow-interface';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const taskArrow:FC<taskArrowInterface> = ( {taskArrowObj} ) => {
    return (
        <>
            <div className='VR_SelectTaskType_CreateTask'>
                <h5>Выберите направление задачи: </h5>
                    
                <div className='VR_SelectBlock_CreateTask'>
                    <div className='VR_HeaderSelect_CreateTask'>
                        <div className='VR_FilterSelect_CreateTask' onClick={() => taskArrowObj.changeDropDown?.(taskArrowObj.dropDown)}>
                            <p>{taskArrowObj.selectValue}</p>
                            <p>{taskArrowObj.dropDown ? <ArrowDropUpIcon/> : <ArrowDropDownIcon />}</p>
                        </div>
                    </div>

                    <div className={`VR_Filters_CreateTask ${taskArrowObj.dropDown ? 'VR_ShowFilters_CreateTask' : 'VR_UnShowFilters_CreateTask'}`}>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            taskArrowObj.changeSelectValue?.('--')
                            taskArrowObj.changeDropDown?.(!taskArrowObj.dropDown)
                        }}>--</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            taskArrowObj.changeSelectValue?.('Задачи Тех. Поддержке')
                            taskArrowObj.changeDropDown?.(!taskArrowObj.dropDown)
                        }}>Задачи Тех. Поддержке</div>

                        <div className='VR_Filter_CreateTask' onClick={() => {
                            taskArrowObj.changeSelectValue?.('Задачи Тех. Поддержке')
                            taskArrowObj.changeDropDown?.(!taskArrowObj.dropDown)
                        }}>Задачи 1с</div>
                    </div>
                </div>                    
            </div>   
        </>
    );
};

export default observer(taskArrow);