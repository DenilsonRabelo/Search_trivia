window.onload = function (){
const numero = document.querySelector("#number")


const getData =  (res) => {
    for (const obj in res){
        if (document.querySelector('#'+obj)){
            document.querySelector('#'+obj).value = res[obj]
        }
    }
}



numero.addEventListener("blur", (e) =>{
    let search = numero.value
    fetch(`http://numbersapi.com/${search}?json`)
        .then(response =>{ response.json().then(data => getData(data))})
})
}