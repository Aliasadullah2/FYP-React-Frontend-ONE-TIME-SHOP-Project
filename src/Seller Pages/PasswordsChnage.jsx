import React from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useState } from 'react'
import { getCurrentUserDetail } from '../Auth/AuthIndex'
import { toast } from 'react-toastify'
import { Label } from 'reactstrap'
import { Button } from 'react-bootstrap'
import { changepassworduser } from '../Services/UserServices'

function PasswordsChnage() {
    const {id}=useParams()
    const navigate=useNavigate();
    const [passwordReq,setPasswordReq]=useState({
        oldPassword:'',
        newpassword:''
    })
    const [userId,setUserId]=useState([])
    useEffect(() => {
  setUserId(getCurrentUserDetail().id);

  // changepassworduser(userId, passwordReq)
  //   .then(data => {
  //     setPasswordReq(data); // Set the passwordReq state with the response data
  //     console.log(data);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //     toast.error();
  //   });
}, []);


    

    const passswordupdate = event => {
        event.preventDefault();
      
        if (passwordReq.oldPassword.trim() === "") {
          toast.warning("Fill the Old Password");
          return;
        }
      
        if (passwordReq.newpassword.trim() === "") {
          toast.warning("Fill the New Password");
          return;
        }
      
        // Make sure to update the state with the new password
        setPasswordReq(prevState => ({
          ...prevState,
          oldPassword: passwordReq.oldPassword,
          newpassword: passwordReq.newpassword
        }));
        
        changepassworduser(userId, passwordReq)
          .then(data => {
            console.log(data);
            if(id!==userId){
              navigate('/mentor/buyer/Settings ');
              toast.error("User Not Found");
              return
            }else{
            toast.success("Password Updated Successfully");
            setPasswordReq({
              oldPassword:'',
              newpassword:''
            })
            navigate('/mentor/buyer/Settings ');
          }
          })
          .catch(error => {
            console.log(error);
            toast.error("Password Updated Sever Error");
          });
      };
      

    const handleChange=(event)=>{
        
        setPasswordReq({...passwordReq,[event.target.name]:event.target.value})
       
    } 
  return (
    <div>
        <form className=" rounded bg-white shadow p-5" onSubmit={passswordupdate}>
                <h3 className="text-dark fw-bolder fs-4 mb-4">Update Password </h3>

                <div className="form-floating mb-3">
                     <input 
                     type="password" 
                     className="form-control name" 
                     id="oldPassword" 
                     name='oldPassword'
                     placeholder="Old Password" 
                     required
                      onChange={(event)=>handleChange(event,'oldPassword')}
                      value={passwordReq.oldPassword}
                     
                     />
                    <label htmlFor="oldPassword">Old Passwords</label>
                </div>
                    <div className="form-floating mb-3">
                     <input 
                     type="password" 
                     className="form-control name" 
                     id="newpassword" 
                     name='newpassword'
                     placeholder="New Password" 
                     required
                      onChange={(event)=>handleChange(event,'newpassword')}
                      value={passwordReq.newpassword}
                      
                     />
                    <label htmlFor="newpassword"> New Password</label>
                </div>
                    

                  
                    {/* {JSON.stringify(passwordReq)} */}

                <Button type="submit" color='warning' className="btn  submit_btn w-100 my-4">Update Password</Button>
                  
                </form>
    </div>
  )
}

export default PasswordsChnage