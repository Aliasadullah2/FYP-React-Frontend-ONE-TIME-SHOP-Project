import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap'
import { toast} from 'react-toastify';
import InfiniteScroll from 'react-infinite-scroll-component';
import { loadAllProducts } from '../../Services/Product';
import { loadAllReport } from '../../Services/Reports';
import AdminRepP from './AdminRepP';


function AdminRepots() {
  const[reportContent,setReportContent]=useState({
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
    if(pageNumber>reportContent.pageNumber && reportContent.lastPage)
    {
      return
    }
    if(pageNumber < reportContent.pageNumber && reportContent.pageNumber ===0)
    {
      return
    }
    loadAllReport(pageNumber,pageSize).then(data=>{
      setReportContent({
        content:[...reportContent.content,...data.content].reverse(),
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
      toast.error("Error is loading product")
      
    })
  }

  const chnageInfinitePage=()=>{
      console.log("Page Chnage")
      setCurrentPage((changePage)=>changePage+1)
  }

  return (
    <>
    <div className='containter-fluid' style={{marginLeft:'300px'}}>
      
      <Row >
       
      
       
      
        <Col md={9} >

          <h1>Report Count ({reportContent?.totalElement})</h1>
          {/* <CategorySide/> */}
          {/* {
                      productsimple.map(productDto=>(
                        <Product product={productDto}/>
                      ))
                    } */}

                      {/* {
                      productsimple?.map(productDto=>(
                        <Product product={productDto} key={productDto.prodId}/>
                      ))
                    } */}

<InfiniteScroll
  dataLength={reportContent.content.length} 
  next={chnageInfinitePage}
  hasMore={!reportContent.lastPage}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
  
>                 
<div style={{display:'flex',flexWrap:'wrap',margin:'0px',justifyContent:'center'}}>
  
                  {
                    reportContent.content.map(reportDto=>(
                      <AdminRepP report={reportDto} key={reportDto.repId}/>
                      ))
                    }
  
                    </div>
</InfiniteScroll>


                    

                    {/* <Pagination aria-label="Page navigation example">
  
  <PaginationItem onClick={()=>changePage(productContent.pageNumber-1)} disabled={productContent.pageNumber===0}>
    <PaginationLink
      
      previous
    >Previous</PaginationLink>
    
  </PaginationItem>

      {
        [...Array(productContent.totalPages)].map((item,index)=>(
              <PaginationItem onClick={()=>changePage(index)} key={index} active={index===productContent.pageNumber}>
            <PaginationLink>
              {
              index+1
              }
            </PaginationLink>
            </PaginationItem>
        ))
      }

                    
  <PaginationItem onClick={()=>changePage(productContent.pageNumber+1)} disabled={productContent.lastPage}>
    <PaginationLink
      
      next
    >
    Next</PaginationLink>
  </PaginationItem>
  
</Pagination> */}
        </Col>
      </Row>
    </div>
    </>
  )
}

export default AdminRepots