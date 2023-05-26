import { db, storage } from "../firebase";
import { collection, addDoc ,getDocs,doc,Timestamp,deleteDoc , setDoc,getDoc, query, where} from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import About from "../layout/about";
import { async } from "@firebase/util";
import styles from '../styles/Home.module.css'
import { useEffect, useState } from "react";
import Head from "next/head";
const Aboute = () => {
  const[a,seta]=useState("mobi2")
  const[b,setb]=useState("btnnone")
  const[c,setc]=useState("btnnone")
document.addEventListener("scroll",()=>{if(document.documentElement.scrollTop==0){
  seta("mobi2")
}else{
  seta("anm")
}})
setTimeout(()=>(setb("btnbl")),1000)
setTimeout(()=>(setc("btnbl")),2000)

    return (
      <div className="mt-1 rel">
      <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

      </Head>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
crossOrigin="anonymous">
</script>
<div className="searsh m-auto">

</div>
<div className="d-none rel d-lg-block">

<a className={`btn otlb1 ${b}`} href="/otlob">اطلب الخدمة الآن </a>
<a className={` otlb2 ${c}`} href="/vedio">مشاهدة الفيديو التعريفي </a>

<div class="typing-demo1">




 
 
  </div>
<img className="desd" src="bac01.png" alt=""/>
{/* <Carousel  infiniteLoop="true"	showThumbs={false}>
             
             { props.data.map((item) => (
        <div key={item}>
        <img src={item} alt="فرسان الإنشاءات"/>
        </div>
       ))}
         </Carousel> */}
</div>

<div className="d-block mobn d-lg-none">
<a className={`btn otlb ${b}`} href="/otlob">اطلب الخدمة الآن </a>
<a className={` otlb2 ${c}`} href="/vedio">مشاهدة الفيديو التعريفي </a>

<div class="typing-demo">




 
 
  </div>
<img className="mobi1" src="bac02.png" alt=""/>
{/* <img className={a} src="jpg.svg" alt=""/> */}
<img className="hei" src="hei.svg" alt=""/>
<img className="kg3" src="kg3.svg" alt=""/>
</div>

</div>

    );
}

export default Aboute;