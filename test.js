const URL = 'https://jsonplaceholder.typicode.com/postss';

fetch(URL)
    .then(response => {
        return response.json()
    })
    .then(data =>{
        console.log(data);
    })
    .catch(error =>{
        console.log("error occured", error);
    })