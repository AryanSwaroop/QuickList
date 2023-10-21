import React, {useEffect, useState }  from 'react';



export default function dataHandler(){
    const [user,setUser] = useState(false);
    
    useEffect(()=>{
      const getUser = () => {
        fetch("http://backend-portfolio-igy4.onrender.com/auth/login/success",{
          method : "GET",
          credentials: "include",
          headers: {
            "Access-Control-Allow-Origin" : "https://frontend-portfolio-aryan.vercel.app",
            Accept:"application/json",
            'Content-Type':"application/json",
            'Access-Control-Allow-Credentials': true
          },
        }).then(response=>{ 
          console.log(response);
          if (response.status === 200) return response.json(); 
          throw new Error("Authentification Failed")
        }).then(resObject=>{
          console.log(resObject)
          setUser(resObject.user)
        }).catch(err=>{
          console.log(err);
        })
        
      };
      getUser();
    },[]);
    
  return(
    {user}
  )



}