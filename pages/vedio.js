import Head from "next/head";

const Video = () => {
    return ( 
        <div className="mt-1 text-center rel">
        <Head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
  
        </Head>
  
  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
  crossOrigin="anonymous">
  </script>
  <img className="w-100 " src="bgg.png" alt=""/>

  <video width="320" height="240" controls>
  <source src="alsama.mp4" type="video/mp4"/>
 
  Your browser does not support the video tag.
</video>
    

  </div>
     );
}
 
export default Video;