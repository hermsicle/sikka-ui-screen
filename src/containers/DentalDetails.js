import React from 'react'
import data from '../constants/data.json'

const DentalDetails = () => {
  return (
    <div className="dental-details-container">
      <div className="container">
        <p>{data.dentalName}</p>
        <p className="text-gray">{data.address}</p>
      </div>

      <div className="container flex-row">
        <div>
          <p className="text-gray">Speciality</p>
          <p> {data.speciality.type} </p>
        </div>
        <div className="align-right">
          <p className="text-gray">Operatories</p>
          <p> {data.speciality.operatories} </p>
        </div>
      </div>

      <div className="container flex-row">
        <div>
          <p className="text-gray"> Active Patients </p>
          <p> {data.active.activePatients} </p>
        </div>
        <div className="align-right">
          <p className="text-gray"> New Patients Per Month </p>
          <p> {data.active.newPatients} </p>
        </div>
      </div>

      <div className="container flex-row">
        <div>
          <p className="text-gray"> Recall Patients </p>
          <p> {data.recall.recallPatients} </p>
        </div>
        <div className="align-right">
          <p className="text-gray"> Patients w/ Treatment Plans </p>
          <p> {data.recall.treatmentPlans} </p> 
        </div>
      </div>

      <div className="container flex-row">
        <div>
          <p className="text-gray">Dentists</p>
          {data.dentists.map((d) => <p> {d.name} </p> )} 
        </div>
        <div>
          <p className="text-gray">Speciality</p>
          {data.dentists.map((d) => <p> {d.speciality} </p> )} 
        </div>
        <div className="align-right">
          <p className="text-gray">NPI</p>
          {data.dentists.map((d) => <p> {d.NPI} </p> )} 
        </div>
      </div>
      
      <div className="container flex-row">
        <div>
          <p className="text-gray">Hygenists</p>
          {data.hygenists.map((d) => <p> {d.name} </p> )} 
        </div>
        <div>
          <p> `</p>
          {data.hygenists.map((d) => <p> {d.NPI} </p> )} 
        </div>
      </div>

      <div className="container flex-row"> 
        <div>
          <p className="text-gray">Practice Management Software</p>
          <p> {data.software.management} </p>
        </div>
        <div className="align-right">
          <p className="text-gray">Finance Software</p>
          <p> {data.software.finance} </p>
        </div>
      </div>

      <div className="container flex-row">
        <div>
          <p className="text-gray">Sikka Master Customer ID</p>
          <p> {data.customerId} </p>
        </div>
        <div className="align-right">
          <p className="text-gray">Sikka Practice ID</p>
          <p> 1-1 </p>
        </div>
      </div>


    </div>
  )
}

export default DentalDetails