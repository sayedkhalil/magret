import Head from 'next/head';
import NEw from '../layout/new';
import Opnion from '../layout/opnion';
import styles from '../styles/Home.module.css'
import Mazaya from '../layout/s';
import { useState } from "react";
const Servises = () => {
  

  const[b,setb]=useState("scl")
  const[anm,setanm]=useState("item-right")
  const[anm1,setanm1]=useState("item-right1")
  const[scale,setscale]=useState("itscale1")
 
    return (
        < div className="w-100 p-0 m-0 u2">
        <img className="w-100" src="cover.svg" alt=""/>
       
       <div className="mt-1 mb-2 sat3 p-2">
        <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

        </Head>
        <h4 className="col-12 col-lg-3 my-3 title ms-auto">  ماذا نقدم</h4>
<div className="d-block d-lg-none row sat w-100 h-100 rel">
  <div className={`${anm} item-maz1 row`}>
    <img className="col-12" src="w01.svg" alt=""/>
    <h6 className="text-center hitem">تطوير تطبيقات الجوال</h6>    
  </div>
  <div className={`${anm} item-maz2 row`}>
    <img className="col-12" src="w02.svg" alt=""/>
    <h6 className="text-center hitem">تصميم المواقع التعريفية</h6>    
  </div>
  <div className={`${anm} item-maz3 row`}>
    <img className="col-12" src="w05.svg" alt=""/>
    <h6 className="text-center hitem">المواقع والبوابات الرقمية</h6>    
  </div>
  <div className={`${anm1} item-maz4 row`}>
    <img className="col-12" src="w03.svg" alt=""/>
    <h6 className="text-center hitem">تحسين تجربة المستخدم UX&UI</h6>    
  </div>
  <div className={`${anm1} item-maz5 row`}>
    <img className="col-12" src="w04.svg" alt=""/>
    <h6 className="text-center hitem">اختبار وتطوير المشاريع</h6>    
  </div>
  <div className={`${anm1} item-maz6 row`}>
    <img className="col-12" src="w06.svg" alt=""/>
    <h6 className="text-center hitem">حلول المدفوعات الحكومية</h6>    
  </div>
  <div className="est"> </div>
  </div>
  <div className="d-none d-lg-block row sat1 w-100  rel">
  <div className={`${scale} item-mazz1 row`}>
    <img className="col-12" src="w01.svg" alt=""/>
    <h6 className="text-center hitem">تطوير تطبيقات الجوال</h6>    
  </div>
  <div className={`${scale} item-mazz2 row`}>
    <img className="col-12" src="w02.svg" alt=""/>
    <h6 className="text-center hitem">تصميم المواقع التعريفية</h6>    
  </div>
  <div className={`${scale} item-mazz3 row`}>
    <img className="col-12" src="w05.svg" alt=""/>
    <h6 className="text-center hitem">المواقع والبوابات الرقمية</h6>    
  </div>
  <div className={`${scale} item-mazz4 row`}>
    <img className="col-12" src="w03.svg" alt=""/>
    <h6 className="text-center hitem">تحسين تجربة المستخدم UX&UI</h6>    
  </div>
  <div className={`${scale} item-mazz5 row`}>
    <img className="col-12" src="w04.svg" alt=""/>
    <h6 className="text-center hitem">اختبار وتطوير المشاريع</h6>    
  </div>
  <div className={`${scale} item-mazz6 row`}>
    <img className="col-12" src="w06.svg" alt=""/>
    <h6 className="text-center hitem">حلول المدفوعات الحكومية</h6>    
  </div>
  <div className="est1"> </div>
  </div>
</div>
        </div>  
      );
}
 
export default Servises;