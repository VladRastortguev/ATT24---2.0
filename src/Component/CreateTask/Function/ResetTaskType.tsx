import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { FunctionInterface } from '../Interface/FunctionInterface';

const ResetTaskType:FC<FunctionInterface> = ({ interfaceObj }) => {
    switch (interfaceObj.selectValue) {
        case 'Задачи Тех. Поддержке':
            return (
                <>
                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTaskType?.('--')
                        interfaceObj.changeDropTaskType?.(!interfaceObj.dropTaskType)
                    }}>--</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTaskType?.('Выезды')
                        interfaceObj.changeDropTaskType?.(!interfaceObj.dropTaskType)
                    }}>Выезды</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTaskType?.('Доступы')
                        interfaceObj.changeDropTaskType?.(!interfaceObj.dropTaskType)
                    }}>Доступы</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTaskType?.('Коммуникации')
                        interfaceObj.changeDropTaskType?.(!interfaceObj.dropTaskType)
                    }}>Коммуникации</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTaskType?.('Монтажные работы')
                        interfaceObj.changeDropTaskType?.(!interfaceObj.dropTaskType)
                    }}>Монтажные работы</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTaskType?.('Настройка и обслуживание')
                        interfaceObj.changeDropTaskType?.(!interfaceObj.dropTaskType)
                    }}>Настройка и обслуживание</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTaskType?.('Настройка и обслуживание')
                        interfaceObj.changeDropTaskType?.(!interfaceObj.dropTaskType)
                    }}>Настройка ПО</div>
                </>
            )

        default:
            return (
                <>
                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTaskType?.('--')
                        interfaceObj.changeDropTaskType?.(!interfaceObj.dropTaskType)
                    }}>--</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTaskType?.('Настройка и обслуживание')
                        interfaceObj.changeDropTaskType?.(!interfaceObj.dropTaskType)
                    }}>Выберите направление задачи</div>
                </>
            )
    }
};

export default observer(ResetTaskType);