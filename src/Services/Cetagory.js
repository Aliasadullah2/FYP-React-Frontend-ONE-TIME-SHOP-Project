import { myAxios, privateAxios } from "./Helper";

export const loadAllCategories = async ()=>{
    return  myAxios.get("/categories/all")
    .then(response=>{return response.data}).catch(error=>{
        return console.log(error)
    })
}

// export const AddCategories = async (CatData)=>{
//     return  myAxios.get(`categories/user/${CatData.id}`,CatData)
//     .then(response=>{return response.data}).catch(error=>{
//         return console.log(error)
//     })
// }

export const AddCategories = async (CatData)=>{
    console.log(CatData);
    return privateAxios.post(`/categories/user/${CatData.userId}`,CatData).then(response=> response.data)
}


// export const loadAllSimpleCategories = async ()=>{
//     return  myAxios.get("/categories/")
//     .then(response=>{return response.data}).catch(error=>{
//         return console.log(error)
//     })
// }

export const loadAllSimpleCategories= async (pageNumber,pageSize)=>{
    return myAxios.get(`/categories/?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=addedDate&sortDir=desc`).then(response =>response.data);
}

//Delete Category  
export function deleteCatuser (id)
{
        return privateAxios.delete(`/categories/${id}`).then(resp=>resp.data)
}

//update Vender
// export function updateCat(vender,venId){
//         return privateAxios.put(`/vender/vender/${venId}`,vender).then(response=>response.data)
// }