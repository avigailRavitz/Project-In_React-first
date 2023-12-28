import { useEffect } from 'react';
import { useState } from 'react';
import AdminData from '../../store/AdminData';
import {observer} from "mobx-react";
import Store from '../../store/Store';
import AddService from '../addService/AddService';
import './Services.css'

const Services=(observer(()=> {
  // const [service,setService]=useState([]);
  // useEffect(()=>{
  //   handleService()
  // },[])
  // const handleService =()=>{
  //   Store.initService();
  //   setService(AdminData.serviceList)
  // }
  // const enterNew=()=>{
  //   Store.addService(AdminData.services[0]);
  //   Store.addService(AdminData.services[1]);
  // }
//  useEffect(()=>{
//   Store.getService();
//  },[])

    return (
      <>
      <AddService/>
      <div className="services-container">
  <h1>רשימת שירותים</h1>
  <ul>
    {AdminData.services.map(service => (
      <li key={service.id} className="service-item">
        <h2>{service.name}</h2>
        <p>{service.description}</p>
        <p>מחיר: {service.price}</p>
        <p>משך זמן: {service.duration} דקות</p>
      </li>
    ))}
  </ul>
</div>
      </>
    )
  }))

  export default Services
  