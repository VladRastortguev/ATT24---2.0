import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { FunctionInterface } from '../Interface/FunctionInterface';

const ResetPriorityDescr:FC<FunctionInterface> = ({ interfaceObj }) => {
    switch (interfaceObj.priority) {
        case 'Низкий':
            return (
                <>
                    <div className='VR_Filter_CreateTask VR_ProprityDescr_CreateTask' onClick={() => {
                        interfaceObj.chahgePriorityDescr?.('--')
                        interfaceObj.changeFullPriorityDescr?.('--')
                        interfaceObj.changeDropPriorityDescr?.(!interfaceObj.dropPriorityDescr)
                    }}>--</div>

                    <div className='VR_Filter_CreateTask VR_ProprityDescr_CreateTask' onClick={() => {
                        interfaceObj.chahgePriorityDescr?.('Незначительные проблемы')
                        interfaceObj.changeFullPriorityDescr?.('Незначительные проблемы')
                        interfaceObj.changeDropPriorityDescr?.(!interfaceObj.dropPriorityDescr)
                    }}>Незначительные проблемы</div>

                    <div className='VR_Filter_CreateTask VR_ProprityDescr_CreateTask' onClick={() => {
                        interfaceObj.chahgePriorityDescr?.('Нет непосредственной...')
                        interfaceObj.changeFullPriorityDescr?.('Нет непосредственной угрозы функциональности')
                        interfaceObj.changeDropPriorityDescr?.(!interfaceObj.dropPriorityDescr)
                    }}>Нет непосредственной угрозы функциональности</div>
                </>
            )
        case 'Средний':
            return (
                <>
                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.chahgePriorityDescr?.('--')
                        interfaceObj.changeFullPriorityDescr?.('--')
                        interfaceObj.changeDropPriorityDescr?.(!interfaceObj.dropPriorityDescr)
                    }}>--</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.chahgePriorityDescr?.('Частичное снижение...')
                        interfaceObj.changeFullPriorityDescr?.('Частичное снижение функциональности')
                        interfaceObj.changeDropPriorityDescr?.(!interfaceObj.dropPriorityDescr)
                    }}>Частичное снижение функциональности</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.chahgePriorityDescr?.('Проблема имеет време...')
                        interfaceObj.changeFullPriorityDescr?.('Проблема имеет временное решение')
                        interfaceObj.changeDropPriorityDescr?.(!interfaceObj.dropPriorityDescr)
                    }}>Проблема имеет временное решение</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.chahgePriorityDescr?.('Проблема не имеет вр...')
                        interfaceObj.changeFullPriorityDescr?.('Проблема не имеет временного решения')
                        interfaceObj.changeDropPriorityDescr?.(!interfaceObj.dropPriorityDescr)
                    }}>Проблема не имеет временного решения</div>    
                </>
            )

        case 'Высокий':
            return (
                <>
                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.chahgePriorityDescr?.('--')
                        interfaceObj.changeFullPriorityDescr?.('--')
                        interfaceObj.changeDropPriorityDescr?.(!interfaceObj.dropPriorityDescr)
                    }}>--</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.chahgePriorityDescr?.('Значительное сниже...')
                        interfaceObj.changeFullPriorityDescr?.('Значительное снижение функциональности')
                        interfaceObj.changeDropPriorityDescr?.(!interfaceObj.dropPriorityDescr)
                    }}>Значительное снижение функциональности</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.chahgePriorityDescr?.('Проблема затрагивает...')
                        interfaceObj.changeFullPriorityDescr?.('Проблема затрагивает ограниченное количество пользователей')
                        interfaceObj.changeDropPriorityDescr?.(!interfaceObj.dropPriorityDescr)
                    }}>Проблема затрагивает ограниченное количество пользователей</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.chahgePriorityDescr?.('Проблема не влия...')
                        interfaceObj.changeFullPriorityDescr?.('Проблема не влияет на работу большого количества пользователей')
                        interfaceObj.changeDropPriorityDescr?.(!interfaceObj.dropPriorityDescr)
                    }}>Проблема не влияет на работу большого количества пользователей</div>
                </>
            )

        case 'Критический':
            return (
                <>
                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.chahgePriorityDescr?.('--')
                        interfaceObj.changeFullPriorityDescr?.('--')
                        interfaceObj.changeDropPriorityDescr?.(!interfaceObj.dropPriorityDescr)
                    }}>--</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.chahgePriorityDescr?.('Полная потеря функци...')
                        interfaceObj.changeFullPriorityDescr?.('Полная потеря функциональности продукта')
                        interfaceObj.changeDropPriorityDescr?.(!interfaceObj.dropPriorityDescr)
                    }}>Полная потеря функциональности продукта</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.chahgePriorityDescr?.('Проблема затрагивает...')
                        interfaceObj.changeFullPriorityDescr?.('Проблема затрагивает большое количество пользователей')
                        interfaceObj.changeDropPriorityDescr?.(!interfaceObj.dropPriorityDescr)
                    }}>Проблема затрагивает большое количество пользователей</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.chahgePriorityDescr?.('Проблема не влияет...')
                        interfaceObj.changeFullPriorityDescr?.('Проблема не влияет на работу большого количества пользователей')                    
                        interfaceObj.changeDropPriorityDescr?.(!interfaceObj.dropPriorityDescr)
                    }}>Проблема не влияет на работу большого количества пользователей</div>
                </>
            )

        default:
            return (
                <>
                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.chahgePriorityDescr?.('--')
                        interfaceObj.changeFullPriorityDescr?.('--')
                        interfaceObj.changeDropPriorityDescr?.(!interfaceObj.dropPriorityDescr)
                    }}>--</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.chahgePriorityDescr?.('Выберите значение при...')
                        interfaceObj.changeFullPriorityDescr?.('Выберите значение приоритета')
                        interfaceObj.changeDropPriorityDescr?.(!interfaceObj.dropPriorityDescr)
                    }}>Выберите значение приоритета</div>
                </>
            )
    }
};

export default observer(ResetPriorityDescr);