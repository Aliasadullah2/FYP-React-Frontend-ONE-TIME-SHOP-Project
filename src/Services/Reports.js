import { myAxios, privateAxios } from "./Helper"

//create Report function
export const createReportapi = async (reportData)=>{

    return privateAxios.post(`/reports/user/${reportData.userId}/report`,reportData).then(response=> response.data)
}

//Delete Report  
export function deleteReportsuser (repId)
{
        return privateAxios.delete(`/reports/report/${repId}`).then(resp=>resp.data)
}

//update Report
export function updateReport(report,repId){
        return privateAxios.put(`/reports/report/1${repId}`,report).then(response=>response.data)
}

//load Report
export const loadReport=async(repId)=>{
    return privateAxios.get(`/reports/report/`+repId).then(response=>response.data)
}

//load All Report
export const loadAllReport=async(pageNumber,pageSize)=>{
    return privateAxios.get(`/reports/report?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=addedDate&sortDir=desc`).then(response=>response.data)
}

//load all Report by user 
export function loadAllReportbyUser (id)
{
        return privateAxios.get(`reports/user/${id}/reports`).then(resp=>resp.data)
}