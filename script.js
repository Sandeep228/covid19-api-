// async & await 
// async function foo(){
//     let data = await "hi";
//     console.log(data);
// }
// foo();


// function foo() {
//     return new Promise(resolve=>{
//         setTimeout(()=>resolve("hello everyone "),5000);
//     });
// }

// async function compute() {
//     var result = await foo();
//     console.log(result);
// }

// compute();


// try and catch 

// function foo(){
//     return new Promise((resolve,reject)=>setTimeout(()=>reject('server error'),5000));
// }

// async function compute() {
//     try {
//         let res1 = await foo();
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// compute();


// var resturi = 'https://restcountries.eu/rest/v2/all';
// async function getdata(){
//     let rescont = await fetch(resturi);
//     let rescontdata =await rescont.json();
//     let cc = rescontdata[0].name;
//     let openweather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cc}&appid=80068cbd4a400943886f621221c2d48e`);
//     let openweatherdata = await openweather.json();
//     console.log(openweatherdata);
// }

// getdata();

var table = document.createElement('table');
table.setAttribute('class','table');

var thead = document.createElement('thead');
thead.setAttribute('class','thead-dark');

var tr = document.createElement('tr');
var th = createtrth('th','Date')
var th1 = createtrth('th','Confirmed');
var th2 = createtrth('th','Active');
var th3 = createtrth('th','Deaths');

tr.append(th,th1,th2,th3);
thead.append(tr);




function createtrth (elementname,value=""){
     var ele = document.createElement(elementname);
     ele.innerHTML = value;
     return ele;
}



 function foo(){
    let cc = document.getElementById("text").value;
    console.log(cc);
    async function getdata() {
        let data =  await fetch(`https://api.covid19api.com/total/dayone/country/${cc}`);
        let datares = await data.json();
        console.log(datares);
        let res , res1 , res2;
        for(let i =0;i<datares.length;i++){
            res = datares[i].Date;
            res1= datares[i].Confirmed;
             res2 =datares[i].Active;
             res3 = datares[i].Deaths;
             console.log( "Date is " + res + " "+ res1 + " " + res2 + " " + res3);

             //row1
              var tbody = document.createElement('tbody');
               var tr = document.createElement('tr');
               var td1 = createtrth('td',res);
               var td2 = createtrth('td',res1);
               var td3 = createtrth('td',res2);
               var td4 = createtrth('td',res3);

                tr.append(td1,td2,td3,td4);
                tbody.append(tr);

                table.append(thead,tbody);
                document.body.append(table);
        }
            
    
    }
    getdata();

}


