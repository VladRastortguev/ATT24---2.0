import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Homepage from '../Pages/Homepage/Homepage.tsx';
import Loginpage from '../Pages/LoginPage/Loginpage.tsx';
import RepistrationPages from '../Pages/RegistrationPages/RepistrationPages.tsx';
// import Datalore from '../page/Datalore/Datalore';
// import SoglPage from '../page/SoglPage/SoglPage';
// import MyTask from '../page/MyTask/MyTask';


const MainRoutes = () => {
    const PUBLIC_ROUTES = [
        {link: "/", element: <Loginpage />, id: 1},
        {link: "/home", element: <Homepage />, id: 2},
        {link: "/register", element: <RepistrationPages />, id: 3},
        // {link: "/sogl/:ok", element: <SoglPage />, id: 4},
        // {link: "/mytasks", element: <MyTask />, id: 5},
    ];

    return(
        <Routes>
            {PUBLIC_ROUTES.map(item => (
                <Route path={item.link} element={item.element} key={item.id} />
            ))}
        </Routes>
    )
}

export default MainRoutes;