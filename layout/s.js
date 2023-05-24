import Head from "next/head";
import ProdItem from "./proditem";
import { useState } from "react";
const Mazaya = () => {
  const[b,setb]=useState("scl")
  const[anm,setanm]=useState("item-left")
  const[anm1,setanm1]=useState("item-left1")
  const[scale,setscale]=useState("itscale")
  
  document.addEventListener("scroll",()=>{if(document.documentElement.scrollTop>400){
   setanm("item-right")
   setanm1("item-right1")
   setscale("itscale1")
  }})
    
    return (  
        <div className="mt-1 mb-2 sat p-2">
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
    );
}
 
export default Mazaya;