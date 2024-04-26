import { myAxios,privateAxios } from "./Helper";

export const register= async(user)=>{
    return myAxios.post("/auth/register",user)
    .then((response)=> response.data)  
}

export const registeradmin= async(user)=>{
    return myAxios.post("/auth/Admin/register",user)
    .then((response)=> response.data)  
}

export const login= async (logindata,user)=>{
    return myAxios.post("/auth/login",logindata,user)
    .then((response)=> response.data)  
}

export const getUserbyId= async(id)=>{
    return privateAxios.get(`/users/${id}`).then(resp=>resp.data)
}

// export const updateUserById= async (id)=>{
//     return privateAxios.put(`users/${id}`).then(resp=>resp.data)
// }

//update Profile
export function updateUserById(myUser,id){
    return privateAxios.put(`/users/${id}`,myUser).then(response=>response.data)
}
//get all vender
// export function getallvender(){
//     return privateAxios.get(`/users/`).then(response=>response.data)
// }
// export function changepassworduser(id){
//     return privateAxios.post(`/users/${id}/changepassword`).then(response=>response.data)
// }

export const changepassworduser= async (userId,passwordReq)=>{
    return privateAxios.post(`/users/${userId}/changepassword`,passwordReq)
    .then((response)=> response.data)  
}

export const CreateUserAdmin = async (UserData)=>{
    // console.log(productData);
    return privateAxios.post(`/users/`,UserData).then(response=> response.data)
}

//get all User ?pageNumber=0&pageSize=10&sortBy=prodId
export const loadAllUsers= async (pageNumber,pageSize)=>{
    return privateAxios.get(`/users/?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=addedDate&sortDir=desc&sortBy=prodId`).then(response =>response.data);
}

//Delete User  
// export function deleteuser (id)
// {
//         return privateAxios.delete(`/users/${id}`).then(resp=>resp.data)
// }

//Delete User  
// export function deleteuser (id)
// {
//         return privateAxios.delete(`/users/${id}`).then(resp=>resp.data)
// }
//get all products Simple
export const deleteuser= async (id)=>{
    return privateAxios.delete(`/users/${id}`).then(response =>response.data);
}

export const uploadImageProfile= async (image,id)=>{

    let formData =new FormData()
    formData.append("image",image)



    return privateAxios
    .post(`/users/user/image/upload/${id}`,formData,{
            headers:{
                    'Content-Type':'multipart/form-data'
            }
    })
    .then(response =>response.data);
}

//get User by id 
export const loadUserbyid=async(id)=>{
    return myAxios.get(`/users/`+id).then(response=>response.data)
}