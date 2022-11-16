const currentCity=document.getElementById("cityname")
const currenttemperature=document.getElementById("currenttemperature")
const currentwind=document.getElementById("currentwind")
const currenthumidity=document.getElementById("currentHumidity")
const temp1=document.getElementById("temp1")
const wind1=document.getElementById("wind1")
const hum1=document.getElementById("hum1")

const temp2=document.getElementById("temp2")
const wind2=document.getElementById("wind2")
const hum2=document.getElementById("hum2")

const temp3=document.getElementById("temp3")
const wind3=document.getElementById("wind3")
const hum3=document.getElementById("hum3")

const temp4=document.getElementById("temp4")
const wind4=document.getElementById("wind4")
const hum4=document.getElementById("hum4")




const searchkey="89ae8c154a43f0558b65e4efe00d4715"
const key="ca2fb587f3a21de680832581f2ff233f"
if("geolocation"in navigator){
    navigator.geolocation.getCurrentPosition(setposition,showerror)
}
else{
    alert("browser does not support location")
}

function setposition(position){
    let latitude=position.coords.latitude
    let longitude=position.coords.longitude
console.log(latitude,longitude)

getweather(latitude,longitude)

}
function showerror(error){
    alert(error.message)
}
function getweather(latitude,longitude){
    let weatherurl=`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}&units=imperial`
    fetch (weatherurl).then(function(response){
        let data= response.json()
        return data
    }).then(function (data){
        console.log(data)
        currentCity.innerHTML=`${data.city.name}`
    currenttemperature.innerHTML=`Temp: ${Math.floor(data.list[0].main.temp)}F`
    currentwind.innerHTML=`Wind Speed: ${Math.floor(data.list[0].wind.speed)} MPH`
    currenthumidity.innerHTML=`Humidity: ${Math.floor(data.list[0].main.humidity)}%`

    temp1.innerHTML=`Temp: ${Math.floor(data.list[8].main.temp)}F`
    wind1.innerHTML=`Wind Speed: ${Math.floor(data.list[8].wind.speed)} MPH`
    hum1.innerHTML=`Humidity: ${Math.floor(data.list[8].main.humidity)}%`

    temp2.innerHTML=`Temp: ${Math.floor(data.list[16].main.temp)}F`
    wind2.innerHTML=`Wind Speed: ${Math.floor(data.list[16].wind.speed)} MPH`
    hum2.innerHTML=`Humidity: ${Math.floor(data.list[16].main.humidity)}%`

    temp3.innerHTML=`Temp: ${Math.floor(data.list[24].main.temp)}F`
    wind3.innerHTML=`Wind Speed: ${Math.floor(data.list[24].wind.speed)} MPH`
    hum3.innerHTML=`Humidity: ${Math.floor(data.list[24].main.humidity)}%`

    temp4.innerHTML=`Temp: ${Math.floor(data.list[32].main.temp)}F`
    wind4.innerHTML=`Wind Speed: ${Math.floor(data.list[32].wind.speed)} MPH`
    hum4.innerHTML=`Humidity: ${Math.floor(data.list[32].main.humidity)}%`



    
    })
   

}


function handlesubmit(event){
    // event.preventDefault()
    let v=document.getElementById("searchinput").value
    searchcity(v)
    console.log(v)

}

function searchcity(v){
    let query= v
    let searchurl=`api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${searchkey}`
fetch(searchurl).then(function(response){
    response.json()
}).then(function(data){
    console.log(data)
}
)


}