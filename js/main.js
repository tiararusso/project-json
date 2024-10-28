fetch("./data/data.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);      
        const frame=document.getElementById ("loop");

        data.forEach((element)=>{
        console.log (element);
        let newCard=document.createElement("card");
        newCard.className="card";
        newCard.id=element.id;
        newCard.innerHTML=`<h2>${element.name}</h2><img src="${element.img}"> <p>${element.desc}</p>`; 
        /**"<h2>"+element.name+"</h2>"+"<p>"+element.desc+"</p>"; se puede escribir asi pero lo reescribimos con ``*/ 
        frame.appendChild(newCard);

        });
    })
    .catch((error) => console.error("Error loading JSON file", error));
