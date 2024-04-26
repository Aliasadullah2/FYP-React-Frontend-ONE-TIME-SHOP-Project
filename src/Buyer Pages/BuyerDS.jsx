import React, { useEffect, useState } from 'react'
import { loadAllProducts,loadAllProductsSimple } from '../Services/Product'
import { Col, Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap'
import Product from './Product'
import { toast} from 'react-toastify';
import InfiniteScroll from 'react-infinite-scroll-component';
import CategorySide from './CategorySide';

function BuyerDS() {
  const[productContent,setProductContent]=useState({
    content:[],
    pageNumber:'',
    pageSize: '',
    totalElement: '',
    totalPages: '',
    lastPage: false
  })
  // const[productsimple,setProductSimple]=useState(null)
  const[currentPage,setCurrentPage]=useState(0)

  useEffect(()=>{


    changePage(currentPage)

  },[currentPage])

  const changePage=(pageNumber=0,pageSize=5)=>{
    if(pageNumber>productContent.pageNumber && productContent.lastPage)
    {
      return
    }
    if(pageNumber < productContent.pageNumber && productContent.pageNumber ===0)
    {
      return
    }
    loadAllProducts(pageNumber,pageSize).then(data=>{
      setProductContent({
        content:[...productContent.content,...data.content].reverse(),
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
    <div className='containter-fluid' >
      
      <Row >
       
      
       
      
        <Col md={12} >

          <h1>Product Count ({productContent?.totalElement})</h1>
          <CategorySide/>
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
  dataLength={productContent.content.length} 
  next={chnageInfinitePage}
  hasMore={!productContent.lastPage}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
  
>                 
<div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
  
                  {
                    productContent.content.map(productDto=>(
                      <Product product={productDto} key={productDto.prodId}/>
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

export default BuyerDS