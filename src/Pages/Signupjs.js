import React, {  useState } from 'react'
import { Container, Button, Col} from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import logo from "../Assets/logo.png";
import "../Styles/SignStyle.css"
import {register} from "../Services/UserServices"
import {  toast } from 'react-toastify';


function Signupjs() {
    const navigate=useNavigate();
    const [data,setData]=useState({
        name:'',
        email:'',
        password:'',
        phonenumber:'',
       
    })

    const[error,setError]=useState({
        errors:{},
        isError:false
    })

   
    
    const handleChange=(event,props)=>{
        
        setData({...data,[props]:event.target.value})
       
    }

    // useEffect(()=>{
    //     console.log(data);
    // },[data])

    // const submitFrom=(event)=>{
    //     event.preventDefault()
    //     onSubmit={submitFrom}
        
    // }

    //submit the from
    const submitFrom=(event)=>{
        event.preventDefault();

        if(error.isError){
            toast.error("User is Already is Registered");
            setError({ ...error,isError:false})
            return;
        }
        
        


        //data validate
        
        //api call server  for sending data
        // BASE_URL/api/v1/auth/register
        register(data).then((resp)=>{
            console.log(resp);
            console.log("Success Log");
            toast.success("User Registered Successfully User Id!!"+resp.id);
            setData({
                name:'',
                email:'',
                password:'',
                phonenumber:'',
                shopName:''
            })
            navigate('/Sigin')
        }).catch((error)=>{
            
            console.log(error)
            console.log("error log")
            setError({
                errors:error,
                isError:true
            })
          

        });

    };

  





  return (
    <>
    <section className="wrapper">
            <Container className="container ">
                
               
                
                
                <Col sm={{span: 8, offset: 2}} lg={{span: 6, offset: 3}} xl={{span: 6, offset: 3}} className=" text-center">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <form className=" rounded bg-white shadow p-5" onSubmit={submitFrom}>
                <h3 className="text-dark fw-bolder fs-4 mb-4">Create an Account</h3>
                <div className="fw-normal text-muted mb-4">
                    Already have an Account <Link to="/sigin" className="text-primary fw-bold text-decoration-none">Login</Link>
                </div>
{/* 
                <div className="text-center text-muted text-uppercase mb-2">or</div>
                <a href="/" className="btn btn-light login_with w-100 mb-4">
                    <img src={g} alt="" className="img-fluid me-3"/>Login with Google</a> */}
{/* 
                <div className="form-floating mb-3">
                     <input type="text" className="form-control" id="floatingFirstName" placeholder="First Name" required/>
                        <label htmlFor="floatingFirstName">First Name</label>
                </div>
                
                <div className="form-floating mb-3">
                     <input type="text" className="form-control" id="floatingFirstLast" placeholder="Last Name" required/>
                        <label htmlFor="floatingFirstLast">Last Name</label>
                </div>
                 */}
{/* 
                <div className="form-floating mb-3">
                     <input 
                     type="name" 
                     className="form-control name" 
                     id="shopName" 
                     placeholder="Shop Name" 
                     required
                     onChange={(e)=>handleChange(e,'shopName')}
                     value={data.shopName}
                     invalid={error.errors?.response?.data?.shopName ?true:false}
                     />
                    <label htmlFor="shopName">Shop Name</label>
                   
                    
                </div>
                    {error.errors?.response?.data?.shopName} */}

                <div className="form-floating mb-3">
                     <input 
                     type="name" 
                     className="form-control name" 
                     id="name" 
                     placeholder="Name" 
                     required
                     onChange={(e)=>handleChange(e,'name')}
                     value={data.name}
                     invalid={error.errors?.response?.data?.name ?true:false}
                     />
                    <label htmlFor="name">Name</label>
                   
                    
                </div>
                    {error.errors?.response?.data?.name}
                    
              
                <div className="form-floating mb-3">
                     <input type="email"
                      className="form-control email" 
                      id="email"  
                      onChange={(e)=>handleChange(e,'email')} 
                      value={data.email} 
                      placeholder="name@example.com" 
                      required
                      invalid={error.errors?.response?.data?.email ?true:false}
                      />
                    <label htmlFor="email">Email address</label>
                </div>
                
                    {error.errors?.response?.data?.email}
                   
                <div className="form-floating mb-3">
                    <input type="password" 
                    className="form-control passward" 
                    id="password" 
                    onChange={(e)=>handleChange(e,'password')} 
                    value={data.password} 
                    placeholder="Password" 
                    required/>
                     <label htmlFor="password">Password</label>
                </div>
                <span className="password-info mt-2">Use 8 or more Characters with a  mix of Letter, number & Symbols.</span>
                {error.errors?.response?.data?.password}


                <div className="form-floating mb-3">
                    <input type="name" 
                    className="form-control phonenumber" 
                    id="phonenumber" 
                    onChange={(e)=>handleChange(e,'phonenumber')} 
                    value={data.phonenumber} 
                    placeholder="Phone Number" 
                    required
                    invalid={error.errors?.response?.data?.phonenumber ?true:false}
                    />
                     <label htmlFor="phonenumber">Phone Number</label>
                </div>
               
                    {error.errors?.response?.data?.phonenumber }
                    

                <div className="form-check d-flex align-items-center">
                     <input className="form-check-input" type="checkbox" id="gridCheck" required/>
                    <label className="form-check-label ms-2" htmlFor="gridCheck" >
                    I Agree <Link to="/">Terms and Conditions</Link>.
                     </label>
                    </div>
                
                <Button type="submit" className="btn  submit_btn w-100 my-4">Register</Button>
                {/* { JSON.stringify(data) } */}
                </form>

                
                </Col>
            </Container>
        </section>
        </>
  )
}

export default Signupjs