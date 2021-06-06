import React, { useEffect, useState } from 'react';

const Tempw = () => {

    const[city,setcity]=useState(null);
    const[search,setsearch]=useState("patna");

    useEffect(()=>{
        const fetchApi= async()=>{
            const url =`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3a1c43054df0faa5473648715dbf5844`;
            const response=await fetch(url);
            const resjson = await response.json();
            // console.log(resjson);
            setcity(resjson.main);
        }
        fetchApi();
    },[search])

    const year=new Date().getFullYear();
    return (
        <> 
           <h1 className="text-capitalize text-center font-weight-bold"> Whether App </h1>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        className="inputField"
                        onChange={(event) =>{ setsearch(event.target.value)

                        }}
                    />
                </div>
            {!city ? (
                <p className="errorMsg"> No Data Found </p>
            ) : (
                <>
                <div className="info">
            <h2 className="location">
            <i className="fas fa-street-view"> </i> {search}

            </h2>
            <h1 className="temp">
                {city.temp} cel
            </h1>
            <h3 className="tempmin_max">
            min :{city.temp_min} cel max :{city.temp_max} cel
            </h3>

      <div className="wave -one"></div>
      <div className="wave -two"></div>
      <div className="wave -three"></div>
            </div>
                </>
            )}
            
            </div>

            <footer >
                <p className="text-center text-capitalize my-2 font-weight-normal">{year} Designed By Vikas Sharma`</p>
            </footer>
        </>
    )
};

export default Tempw;
