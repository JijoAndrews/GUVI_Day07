var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all")

request.send();

request.onload=function()
{
    var result=JSON.parse(request.response);
    //console.log(result);

    var asiancountries = result.filter((element)=>element.region==="Asia").map((ele)=>ele.name.common);// question A
    console.log("Asian countries:",asiancountries);

    var populationcountries = result.filter((element)=>element.population<200000).map((ele)=>ele.name.common);// question B
    console.log("Countries Population less than 2-lakh :",populationcountries);

    countrydetails(result);// question c

    var totalpopulation= result.filter((element)=>element.population>200000).reduce(function (acc, ele) { return acc + ele.population; }, 0);// question D
    var usingusdollar = Object.keys(result).filter((username)=>result[username].currencies!==undefined && result[username].currencies.USD).map((username)=>result[username].name.common);// question E

    console.log("Total population of countries over 2-lakh:",totalpopulation);     
    console.log("Countries using Dollars:",usingusdollar);     
 
}



function countrydetails(arr)
{   
    arr.forEach(element => {console.log(`Name:${element.name.common},Capital:${element.capital},Flag:${element.flag}`)});// iterate using  forach and add it to an object name details. method-1
    
    // var details={};
    // arr.forEach(element => {details[element.name.common]=[element.capital,element.flag]});// iterate using  forach and add it to an object name details. method-2
    // for(var detail in details)
    // {
    //     console.log(`Detail:${details[detail]}`);// printing 
    // }
}
