import {observer} from "mobx-react"
import Store from '../../store/Store'
import Login from '../login/Login'
import AdminPage from'../adminPage/AdminPage'
import AdminData from "../../store/AdminData"
import AdminDetails from "../adminDetails/AdminDetails"
import EditAdminDetails from "../editAdminDetails/EditAdminDetails"
import { useEffect } from "react"
    const Admin =(observer(()=>{
        useEffect(()=>{
            Store.addService(AdminData.services[0])
            Store.addService(AdminData.services[1])
            Store.getService();
        })
        return (
            <>
                <h1>Admin</h1>
                
                  {!AdminData.isLogin&&<Login/>}
                  {AdminData.isLogin&&!AdminData.sendToEdit&&<AdminPage/>}
                  {AdminData.sendToEdit&&<EditAdminDetails/>}
  
            </>
        )
    }))
    



    export default Admin

