import { myAxios, privateAxios } from "./Helper"

//create Vender function
export const createVenderapi = async (venderData)=>{
    // console.log(productData);
    return privateAxios.post(`vender/user/${venderData.userId}/catagory/${venderData.id}/venders`,venderData).then(response=> response.data)
}


//Upload Image 
export const uploadImageVender= async (image,venId)=>{

    let formData =new FormData()
    formData.append("image",image)



    return privateAxios
    .post(`/vender/vender/image/upload/${venId}`,formData,{
            headers:{
                    'Content-Type':'multipart/form-data'
            }
    })
    .then(response =>response.data);
}

//load all product by category
export function  loadAllVendersByCategory (id)
{
        return privateAxios.get( `vender/category/${id}/venders`).then(res=>res.data);
}

//load all Vender by user 
export function loadAllVendersbyUser (id)
{
        return privateAxios.get(`vender/user/${id}/venders`).then(resp=>resp.data)
}

//Delete Vender  
export function deleteVendersuser (venId)
{
        return privateAxios.delete(`/vender/venders/${venId}`).then(resp=>resp.data)
}

//update Vender
export function updateVender(vender,venId){
        return privateAxios.put(`/vender/vender/${venId}`,vender).then(response=>response.data)
}

//load vender
export const loadVender=async(venId)=>{
    return privateAxios.get(`/vender/venders/`+venId).then(response=>response.data)
}

//load All Vender
export const loadAllVenders=async(pageNumber,pageSize)=>{
    return privateAxios.get(`/vender/venders?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=addedDate&sortDir=desc`).then(response=>response.data)
}

export function  loadAllVenderByCategory (id)
{
        return privateAxios.get( `/vender/category/${id}/venders`).then(res=>res.data);
}
