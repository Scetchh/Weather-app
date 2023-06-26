import { useHttp } from "../components/hooks/http.hook";

const useWeatherService = () => {
    const request = useHttp();

    const getWeatherByCity = async (city) => {
        const res = await request(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=22bc996e4d34b68483b2bb40cb714bd9`);
        return _transformWeatherByCity(res);
    }

    const _transformWeatherByCity = (weather) => {
        return {
            city: weather.name,
            temp: weather.main.temp
        }
    }

    return getWeatherByCity;
}

export default useWeatherService;