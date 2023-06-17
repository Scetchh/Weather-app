import { useCallback } from "react";

export const useHttp = () => {
    const getWeather = useCallback(async () => {
        try {
            const response = await fetch(
                'http://api.openweathermap.org/data/2.5/weather?q=Kursk&units=metric&APPID=22bc996e4d34b68483b2bb40cb714bd9');

            if (!response.ok) {
                throw new Error(`Could not fetch, status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
            return data;
        } catch(e) {
            throw e;
        }
    }, [])

    return getWeather;
};

