import React, { useEffect, useState } from 'react'
import { DropdownItem, DropdownMenu, DropdownToggle, ListGroup, ListGroupItem, UncontrolledDropdown } from 'reactstrap'
import { loadAllCategories } from '../Services/Cetagory'
import { Link } from 'react-router-dom'

function VanderSideCat() {

    const[categories,setCategories]=useState([])
     useEffect(()=>{
        loadAllCategories().then(data=>{
            console.log(data)
            console.log(" Loading data data")
            setCategories([...data])
        }).catch(error=>{
            console.log(error)
        })
     },[])

  return (
    <>
    
    {/* <ListGroup>
        <ListGroupItem tag={Link} to="/mentor/buyer/BuyerDropshipping" action={true} className='border-0' >
            All Product 
        </ListGroupItem>

        {
            categories  && categories.map((cat,index)=>{
                return(
                    <ListGroupItem action={true}  key={index} tag={Link} to={`/mentor/categories/`+cat.id} className='border-0 mt-1' >
                    {
                        cat.categorytitle
                    } 
                    </ListGroupItem>
                )
            })
        }

    </ListGroup> */}

    <UncontrolledDropdown inNavbar>
                <DropdownToggle nav >
                
                Select Your Vender Category 
                <i class="bi bi-caret-down-fill"></i>
                </DropdownToggle>

                <DropdownMenu left >
              <DropdownItem>
                <li>
                      <Link tag={Link} action={true} to="/mentor/buyer/buyervender">All Vender</Link>
                </li>
                  </DropdownItem>
                <DropdownItem divider />

                {
            categories  && categories.map((cat,index)=>{
                return(
                    <DropdownItem action={true}  key={index} tag={Link} to={`/mentor/vender/categories/`+cat.id} className='border-0 mt-1' >
                   <li>
                   {
                        cat.categorytitle
                        
                    } 
                   </li>
                    </DropdownItem>
                    
                )
            })
        }




              
              
               
                
               
              </DropdownMenu>
    </UncontrolledDropdown>

        
    </>
  )
}

export default VanderSideCat