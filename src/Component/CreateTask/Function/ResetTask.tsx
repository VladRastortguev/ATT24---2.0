import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { FunctionInterface } from '../Interface/FunctionInterface';

const ResetTask:FC<FunctionInterface> = ({ interfaceObj }) => {
    switch (interfaceObj.selectTaskType) {
        case 'Выезды':
            return (
                <>
                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('--')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>--</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Выезд Алтын Тулпар')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Выезд Алтын Тулпар</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Выезд Бакр')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Выезд Бакр</div>
                
                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Выезд в Сервис')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Выезд в Сервис</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Выезд Другое')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Выезд Другое</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Выезд Завод ТМ')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Выезд Завод ТМ</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Выезд Киа')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Выезд Киа</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Выезд Лкв')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Выезд Лкв</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Выезд ТС')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Выезд ТС</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Выезд Тойота')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Выезд Тойота</div>
                    
                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Выезд Хавал')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Выезд Хавал</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Выезд Эстокада')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Выезд Эстокада</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Выезд Geely')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Выезд Geely</div>
                </>
            )

        case 'Доступы':
            return (
                <>
                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('--')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>--</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Блокировка карты доступа уволенного сотрудника')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Блокировка карты доступа уволенного сотрудника</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Блокировка почты уволенного сотрудника')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Блокировка почты уволенного сотрудника</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Настройки прав доступа в общие папки')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Настройки прав доступа в общие папки</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Подготовка электронных карт доступа')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Подготовка электронных карт доступа</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Создание кода отпечатков пальцев')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Создание кода отпечатков пальцев</div>
                </>
            )

        case 'Коммуникации':
            return (
                <>
                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('--')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>--</div>
                    
                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Настройка почты на рабочий компьюте')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Настройка почты на рабочий компьюте</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Настройка почты на телефон')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Настройка почты на телефон</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Сбой в работе электронной почты')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Сбой в работе электронной почты</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Создание аккаунтов microsoft zoom и др')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Создание аккаунтов microsoft zoom и др</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Создание почты')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Создание почты</div>
                </>
            )

        case 'Монтажные работы':
            return (
                <>
                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('--')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>--</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Монтаж кабеля интернета для рабочега места')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Монтаж кабеля интернета для рабочега места</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Монтаж камер видеонаблюдения')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Монтаж камер видеонаблюдения</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Монтаж системы контроля доступа')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Монтаж системы контроля доступа</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Монтаж системы контроля учета рабочего времени')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Монтаж системы контроля учета рабочего времени</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Монтаж точки WiFi')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Монтаж точки WiFi</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Перенос компьютерного оборудования')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Перенос компьютерного оборудования</div>
                </>
            )

        case 'Настройка и обслуживание':
            return (
                <>
                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('--')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>--</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Настройка МФУ')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Настройка МФУ</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Настройка оргтехники')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Настройка оргтехники</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Настройка принтера')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Настройка принтера</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Настройка сканера')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Настройка сканера</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Подготовка АРМ нового сотрудника')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Подготовка АРМ нового сотрудника</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Подключение переферийных устройств')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Подключение переферийных устройств</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Профилактика компьютера')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Профилактика компьютера</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Профилактика оргтехники')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Профилактика оргтехники</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Сбой в работе wifi')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Сбой в работе wifi</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Сбой в работе оргтехники')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Сбой в работе оргтехники</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Заправка картриджей')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Заправка картриджей</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Закупка оргтехники')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Закупка оргтехники</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Ремонт оргтехники')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Ремонт оргтехники</div>    
                </>
            )

        case 'Настройка ПО':
            return (
                <>
                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('--')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>--</div> 

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Активация операционной системы')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Активация операционной системы</div> 

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Активация/установка офисного пакета MS Office')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Активация/установка офисного пакета MS Office</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Настройка камер на личный телефон')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Настройка камер на личный телефон</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Настройка камер на рабочий компьютер')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Настройка удаленного доступа (VPN)</div> 

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Настройка удаленного доступа (VPN)')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Настройка удаленного доступа (VPN)</div> 

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Установка операционной системы')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Установка операционной системы</div> 

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Установка программного обеспечения')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Установка программного обеспечения</div> 
                </>
            )
        
        default:
            return (
                <>
                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('--')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>--</div>

                    <div className='VR_Filter_CreateTask' onClick={() => {
                        interfaceObj.changeSelectTask?.('Выберите тип задачи')
                        interfaceObj.changeDropTask?.(!interfaceObj.dropTask)
                    }}>Выберите тип задачи</div>
                </>
            )
    }    
};

export default observer(ResetTask);