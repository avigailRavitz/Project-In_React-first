import { Link, Outlet } from "react-router-dom";
import AdminDetails from "../adminDetails/AdminDetails";


function AdminPage() {

    return(
        <>
        <AdminDetails/> 
        
        <br/>
        <Link to="./meeting">Meeting</Link>
        <br/>
        <br/>
         <Link to="./services" > services</Link>
     <br/>
       
 
         <Outlet/>
   </>
    )

}
console.log("adminpage")
export default AdminPage
