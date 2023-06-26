import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { useState, useEffect } from 'react';

import useWeatherService from '../../services/WeatherService';

import './appSearch.sass';

const AppSearch = () => {

    const [city, setCity] = useState(null);

    const getWeatherByCity = useWeatherService();

    useEffect(() => {
        updateCity('Sochi');
    }, [city])

    const updateCity = (city1) => {
        getWeatherByCity(city1)
            .then(setCity(city1))
    }

    
    return (
        <Formik
            initialValues={{
                city: ''
            }}
            validationSchema = {Yup.object({
                city: Yup.string()
                        .min(2, 'Минимум 2 символа!')
                        .required('Обязательное поле!')})}
            onSubmit={values => console.log(JSON.stringify(values, null, 2))}
        >
            <Form className='form'>
                <Field
                    className='form__input'
                    id="city" 
                    name='city' 
                    type='text' 
                    placeholder="Введите свой город"/>
                <button type='submit' className="form__button">Найти</button>
                <ErrorMessage className='error' name='city' component='div'/>
            </Form>
        </Formik>
    )
}

export default AppSearch;