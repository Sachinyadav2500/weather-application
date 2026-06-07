// http://api.weatherapi.com/v1/current.json?key=1f5fa44182bd412bb3962903260706&q=Lucknow&aqi=no


const temperatureField= document.querySelector(".temp");
const locationField= document.querySelector(".location_time p");
const dateandTimeField= document.querySelector(".location_time span");
const conditionField= document.querySelector(".condition p");
const conditionIcon= document.querySelector(".condition img");
const searchField= document.querySelector(".search_area");
const form = document.querySelector('form');


form.addEventListener('submit' , searchForLocation)

let target='Ayodhya'

const fetchResults = async (targetLocation)=>{

    let url= `http://api.weatherapi.com/v1/current.json?key=1f5fa44182bd412bb3962903260706&q=${targetLocation}&aqi=no`
    const res= await fetch(url)
    const data= await res.json()

    console.log(data)

    let locationName= data.location.name
    let time= data.location.localtime
    let temp= data.current.temp_c
    let condition= data.current.condition.text
    let icon= data.current.condition.icon

    updateDetails(temp , locationName , time , condition , icon)
}

function updateDetails(temp , locationName , time , condition, icon ){

    temperatureField.innerText= temp +"°C"
    locationField.innerText=locationName
    dateandTimeField.innerText=time
    conditionField.innerText=condition 
    conditionIcon.src = "https:" + icon;
}

function searchForLocation(e){
    e.preventDefault()

    target=searchField.value
    fetchResults(target)
}

fetchResults(target)