window.onload = () => {
  const searchBtn = document.getElementById("search-btn");

  searchBtn.addEventListener('click',()=>{


    
    const displayList = () =>{
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
            let response = httpRequest.responseText;
            alert(response);
            } else {
            alert('There was a problem with the request.');
            }
           }
    }

    const httpRequest = new XMLHttpRequest();
    let url = "./superheroes.php";
    httpRequest.onreadystatechange = displayList;
    httpRequest.open('GET', url);
    httpRequest.send();


  })
  

};
