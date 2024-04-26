import { myAxios, privateAxios } from "./Helper"


//create product function
export const createProductapi = async (productData)=>{
    // console.log(productData);
    return privateAxios.post(`/user/${productData.userId}/catagory/${productData.id}/products`,productData).then(response=> response.data)
}

//get all products ?pageNumber=0&pageSize=10&sortBy=prodId
export const loadAllProducts= async (pageNumber,pageSize)=>{
        return myAxios.get(`/products?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=addedDate&sortDir=desc&sortBy=prodId`).then(response =>response.data);
}

//get all products Simple
export const loadAllProductsSimple= async ()=>{
        return myAxios.get(`/all/products`).then(response =>response.data);
}

//get all products by id
export const loadAllProductsById= async (prodId)=>{
        return myAxios.get(`/products/`+prodId).then(response =>response.data);
}
//get product by id 
export const loadproduct=async(prodId)=>{
        return myAxios.get(`/products/`+prodId).then(response=>response.data)
}
// //Create Comments
// export const createComments= async (commment,prodId)=>{
//         return privateAxios.post(`/comments/product/${prodId}`,commment).then(response =>response.data);
// }

//Create Comments by user
export const createCommentsByUser= async (commment,prodId,id)=>{
        return privateAxios.post(`user/${id}/comments/product/${prodId}`,commment).then(response =>response.data);
}

//get all Comments by user
export const loadAllComments= async (id)=>{
        return myAxios.get(`/all/Comments`).then(response =>response.data);
}


//Create Image by user
export const uploadImagePost= async (image,prodId)=>{

        let formData =new FormData()
        formData.append("image",image)



        return privateAxios
        .post(`/product/image/upload/${prodId}`,formData,{
                headers:{
                        'Content-Type':'multipart/form-data'
                }
        })
        .then(response =>response.data);
}


//load all product by category
export function  loadAllProductByCategory (id)
{
        return privateAxios.get( `/category/${id}/products`).then(res=>res.data);
}

//load all product by user 
export function loadAllProductsbyUser (id)
{
        return privateAxios.get(`/user/${id}/products`).then(resp=>resp.data)
}

//Delete product  
export function deleteProductsuser (prodId)
{
        return privateAxios.delete(`/products/${prodId}`).then(resp=>resp.data)
}

//update product
export function updateProduct(product,prodId){
        return privateAxios.put(`/products/${prodId}`,product).then(response=>response.data)
}