import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { taskType } from '../Interface/taskType-interface';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ResetTaskType from '../../Function/ResetTaskType';

const TaskType:FC<taskType> = ({ taskTypeObj }) => {
    return (
        <>
            <div className='VR_SelectTaskType_CreateTask'>
                        <h5>Выберите тип задачи: </h5>
                    
                        <div className='VR_SelectBlock_CreateTask'>
                            <div className='VR_HeaderSelect_CreateTask'>
                                <div className='VR_FilterSelect_CreateTask' onClick={() => taskTypeObj.changeDropTaskType?.(!taskTypeObj.dropTaskType)}>
                                    <p>{taskTypeObj.selectTaskType}</p>
                                    <p>{taskTypeObj.dropTaskType ? <ArrowDropUpIcon/> : <ArrowDropDownIcon />}</p>
                                </div>
                            </div>

                            <div className={`VR_Filters_CreateTask ${taskTypeObj.dropTaskType ? 'VR_ShowFilters_CreateTask' : 'VR_UnShowFilters_CreateTask'}`}>
                            </div>
                        </div>                    
                    </div>
        </>
    );
};

export default observer(TaskType);