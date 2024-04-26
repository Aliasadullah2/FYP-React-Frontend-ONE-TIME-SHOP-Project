import React, { useEffect, useState } from 'react'

import { Col, Row } from 'reactstrap'
// import Product from './Product'
import { toast} from 'react-toastify';
import InfiniteScroll from 'react-infinite-scroll-component';

// import { getallvender } from '../Services/UserServices';

import { loadAllVenders } from '../../Services/Vender';
import AdminVenUseR from './AdminVenUseR';


function AdminVenS() {
  const[vander,setVender]=useState({
    content:[],
    pageNumber:'',
    pageSize: '',
    totalElement: '',
    totalPages: '',
    lastPage: false
  })
  
  
  const[currentPage,setCurrentPage]=useState(0)

  useEffect(()=>{


    changePage(currentPage)

  },[currentPage])

  const changePage=(pageNumber=0,pageSize=5)=>{
    if(pageNumber>vander.pageNumber && vander.lastPage)
    {
      return
    }
    if(pageNumber < vander.pageNumber && vander.pageNumber ===0)
    {
      return
    }
    loadAllVenders(pageNumber,pageSize).then(data=>{
      setVender({
        content:[...vander.content,...data.content],
        pageNumber:data.pageNumber,
        pageSize: data.pageSize,
        totalElement: data.totalElement,
        totalPages: data.totalElement,
        lastPage: data.lastPage
      })
      // window.scroll(0,0)
      console.log(data)
    }).catch(error=>{
      console.log(error)
      toast.error("Error is loading Vender")
      
    })
  }

  const chnageInfinitePage=()=>{
      console.log("Page Chnage")
      setCurrentPage((changePage)=>changePage+1)
  }

  return (
    <>
    <div className='containter-fluid' style={{marginLeft:'150px'}}>
      
      <Row>
        <Col md={3}>
        {/* <CategorySide/> */}
        </Col>
      
       
      
        <Col md={9} >
          <h1>Vender Count ({vander.totalElement})</h1>
          

<InfiniteScroll
  dataLength={vander.content.length} 
  next={chnageInfinitePage}
  hasMore={!vander.lastPage}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
  
>
              

{
       vander.content.map((vander,index)=>{
         return(
           <AdminVenUseR vander={vander} key={index} />
         )
       })
     }
                    
  
</InfiniteScroll>


                    

                    
        </Col>
      </Row>
    </div>
    </>
  )
}

export default AdminVenS