import Category from "../components/Category";
import commonAPI from "./commonAPI";
import server_url from "./serviceUrl";


//Api call for add video Details ,

 export const addVideo=async(video)=>{

   return await commonAPI("post",`${server_url}allvideos`,video)
}
  export const getVideoAPI=async()=>{
  return await commonAPI("get",`${server_url}allVideos`)
}
 export const deleteVideoAPI=async(videoId)=>{
  return  await commonAPI("delete",`${server_url}allVideos/${videoId}`,{})
}
//api call for add watch history

export const saveWatchHistory=async(videoDetails)=>{
  return await commonAPI("post",`${server_url}watchHistory`,videoDetails)
}
//
export const getHistoryAPI=async()=>{
  return await commonAPI("get",`${server_url}watchHistory`,"")
}
 export const deleteHistoryAPI=async(videoId)=>{
return await commonAPI("delete",`${server_url}watchHistory/${videoId}`,{})
}

//api call for add category

export const addCategoryAPI=async(categoryDetails)=>{

  return  await commonAPI("post",`${server_url}category`,categoryDetails)
}
//api call or get all category
 export const getAllCategoryAPI=async()=>{
  return  await commonAPI("get",`${server_url}category`,"")
}
//api cll for delete a category

export const deleteCategoryAPI=async(categoryId)=>{
  return await commonAPI("delete",`${server_url}category/${categoryId}`,{})
}


//api call for getting a single video

export const getSingleVideoAPI=async(videoId)=>{
  return await commonAPI("get",`${server_url}allvideos/${videoId}`,"")
  
}
//to update category  //api call for update category

export const updateCategoryAPI=async(categoryId,categoryDetails)=>{
  return await commonAPI("put",`${server_url}category/${categoryId}`,categoryDetails)
}

//api call for getting single category

export const getSinglecategoryAPI=async(categoryId,)=>{
  return await commonAPI("get",`${server_url}Category/${categoryId}`,"")
}