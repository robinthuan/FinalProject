export default class ApiConfig {
    static headerType = 'application/json; charset=utf-8';
    static server = 'http://api.openweathermap.org/data/2.5/find?units=metric&appid=01cc37655736835b0b75f2b395737694&q='
    static server_icon="http://openweathermap.org/img/w/"
    static getWeather(city) {
        return this.server + city;
    }
    static getIcon(icon){
        return this.server_icon + icon +'.png'
    }
}