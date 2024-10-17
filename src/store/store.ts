import { makeAutoObservable, makeObservable } from "mobx";
import { IUser } from "../models/IUser";
import AuthService from "../services/AuthService.ts";
import axios from "axios";
import { AuthResponce } from "../models/response/AuthResponse";
import { API_URL } from "../http/index.ts";
import { oneItilUser } from "../models/Itil/userModels/oneUserModels.ts";
import UserService from "../services/UserService.ts";
// import { itilEmail } from "../models/itil/itilAllEmailModels";
// import UserService from "../services/UserService";
// import { TaskItemResponse } from "../models/response/TaskItemResponse";

export default class Store {
    user = {} as IUser;
    // itilUser = {} as oneItilUser;
    isAuth = false;
    isLoading = false;
    aa6Success = false;
    isTaskLoading = false;
    
    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }
    
    // setItilUser(user: oneItilUser) {
    //     this.itilUser = user
    // }

    setLoading(bool: boolean) {
        this.isLoading = bool;
    }

    setTaskLoading(bool: boolean) {
        this.isTaskLoading = bool
    }

    setAa6Success(bool: boolean) {
        this.aa6Success = bool
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);
            const itilRes = await UserService.getOneItilUser(email);

            console.log(response);

            localStorage.setItem('token', response.data.accesToken);

            this.setAuth(true);
            this.setUser(response.data.user);

            return response.status
        } catch (e) {
            console.log(e);
        }   
    }

    async registration(email: string, password: string) {
        try {
            const response = await AuthService.registration(email, password);
            console.log(response);
            this.setAuth(true);
            this.setUser(response.data.user);

            return response.status
        } catch (e) {
            console.log(e);
        }   
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            
            localStorage.removeItem('token');
            localStorage.removeItem('admin');

            this.setAuth(false);
            this.setUser({} as IUser);
        } catch (e) {
            console.log(e);
        }   
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await axios.get<AuthResponce>(`${API_URL}/refresh`, {withCredentials: true})
            // console.log(response);
            localStorage.setItem('token', response.data.accesToken);
            localStorage.setItem('admin', String(this.user.admin))
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch(e) {
            console.log(e);
        } finally {
            this.setLoading(false);
        }
    }

    cutNameToNormal(name:string) {

        if (name != '') {
            let firstName = `${String(name).split(' ')[0]} `
            let secondName = `${String(String(name).split(' ')[1]).substring(0, 1)}. `
            let thirdName = `${String(String(name).split(' ')[2]).substring(0, 1)}.`        

            let fullName = ''

            if (thirdName == 'u.') {
                fullName = firstName + secondName
            } else {
                fullName = firstName + secondName + thirdName
            }

            return fullName
        } else {
            return 'Регистрация'
        }
    }

    cutDateToMormal(date: string) {
        let yearMonthDay = String(date).split('T')[0]
        
        let month = String(yearMonthDay).split('-')[1]
        let day = String(yearMonthDay).split('-')[2]

        let monthDay = `${month}-${day}`

        let fullTime = String(date).split('T')[1]
        
        let hour = String(fullTime).split(':')[0]
        let minuts = String(fullTime).split(':')[1]

        let time = `${hour}:${minuts}`

        let normalTime = `${time} ${monthDay}`

        return normalTime
    }

    validationCommentText(text: string) {
        let textArr = String(text).split(' ')
        let normalizeArr: string[] = []

        for (let i in textArr) {
            if (textArr[i].length > 30) {
                
                let indexStringLenght = Math.ceil(Number(textArr[i].length) / 30)

                for (let j = 0; j < indexStringLenght; j++) {
                    let oneNormalString = String(textArr[i]).substring(j * 30, j * 30 + 30)
                    
                    normalizeArr.push(`${oneNormalString} `)
                }                
            } else {
                normalizeArr.push(`${textArr[i]} `)
            }
        }

        let normalizeString = ''
        for (let i in normalizeArr) {
            normalizeString = normalizeString + String(normalizeArr[i])
        }
        
        return normalizeString
    }

    // async checkAa6Success(email: string) {
    //     this.setLoading(true)

    //     try {
    //         const response = await UserService.getAA6Users(email)

    //         console.log(response);            

    //         if (response.data[0]) {
    //             this.setAa6Success(true)
    //             // console.log(true);                
    //         } 
    //     } catch (e) {
    //         console.log(e);            
    //     } finally {
    //         this.setLoading(false)
    //     }
    // }
}