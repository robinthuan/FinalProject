import ApiConfig from '../../Utills/Apiconfig'
import * as types from '../ActionTypes'
import ApiService from '../../Utills/ApiSevice'

export function getWeatherOfCity(city) {
    return (dispatch) => {
        ApiService.getFromApi(ApiConfig.getWeather(city)).then((response) => {

            if (response.status == 200) {

                response.json().then(jsonObj => {

                    if (jsonObj.count != 0) {
                        console.log(jsonObj)
                        dispatch({
                            type: types.GET_WEATHER_SUCCESS,
                            json: jsonObj
                        })
                    }

                    else {
                        dispatch({
                            type: types.GET_WEATHER_FAIL,
                            json: "FAIL"
                        })
                    }
                })

            }

        }).then((responseJson) => {

        }).catch((error) => {
            console.log(error)
        })
    }

}