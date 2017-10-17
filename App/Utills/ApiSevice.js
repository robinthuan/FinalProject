import ApiConfig from './Apiconfig'
export default class ApiService{
    static async getFromApi(url){
        return  fetch(url,{
            method:'GET',
            headers:{
                'Content-Type':ApiConfig.headerType
            }
        });

    }
}