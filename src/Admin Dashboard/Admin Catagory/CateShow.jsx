import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {   Card, CardBody, CardText,  Row, Col, Button, Table } from 'reactstrap'
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { getCurrentUserDetail, isLoggedIn } from '../../Auth/AuthIndex';
import { deleteuser } from '../../Services/UserServices';
import { deleteCatuser, loadAllCategories, loadAllSimpleCategories } from '../../Services/Cetagory';
import InfiniteScroll from 'react-infinite-scroll-component';




function CateShow({categoriess={ id:-1, categorytitle:"category Name" } } ) {
    
    const [myuser,setMyUser]=useState(null);
    const [login,setLogin] = useState(null);
    const navigate=useNavigate();
  
    useEffect(()=>{
        setMyUser(getCurrentUserDetail())
        setLogin(isLoggedIn())
        
        
    },[])

   


    function delteUserbyAdmin(categoriess){
      deleteCatuser(categoriess.id).then(resp=>{
          console.log(resp)
          toast.success("Category Deleted Successfully")
        //   navigate('/mentor/seller ');
        //   loadVenderData()
          
            
        }).catch(error=>{
          console.log(error)
          toast.error("Server Error to Delete Category")
        })
      }

      

  return (
    
    <>



     <Table className='table'>
        <thead>
            <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Action</th>
               
            </tr>
        </thead>
        <tbody>
                <tr>
                    
                    <td>{categoriess.categorytitle}</td>

    
                    <td colSpan={2}>
                    {
                 (myuser && myuser.id === myuser.id ? <Button color='danger' className='ms-3'onClick={ ()=>delteUserbyAdmin(categoriess) } >Delete</Button> : '')
            }
            {
                //  (myuser && myuser.id === myuser.id ? <Button tag={Link} to={``} color='warning' className='ms-3'  >Update</Button> : '')
            }
                    </td>
                </tr>
        </tbody>
       
        
       
        
    </Table>
    

    </>
  )
}

export default CateShow