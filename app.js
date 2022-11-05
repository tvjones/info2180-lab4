window.onload = () => {
  //const searchBtn = document.getElementById("search-btn");
  const form = document.querySelector("form");

  const handleSubmit = (e) => {
    e.preventDefault();

    let inputVal = document.querySelector("input[name=query]").value;

    inputVal = inputVal.trim();
    //console.log(inputVal);

    const displayHero = () => {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          let response = httpRequest.responseText;
          //alert(response);
          document.querySelector("div#result").innerHTML = ""
          document.querySelector("div#result").innerHTML = response
        } else {
          alert("There was a problem with the request.");
        }
      }
    };


    const httpRequest = new XMLHttpRequest();
    let url = `./superheroes.php?query=${inputVal}`;
    httpRequest.onreadystatechange = displayHero
    httpRequest.open("GET", url);
    httpRequest.send();
/*
    const displayList = () => {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          let response = httpRequest.responseText;
          //alert(response);
        } else {
          alert("There was a problem with the request.");
        }
      }
    };*/

    
  };

  form.addEventListener("submit", handleSubmit);
};
