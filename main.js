"use strict";

/***************
* VARIABLE
--------------*/



/***************
* FUNCTION
--------------*/


function ajaxGetHtml() {
    return (html) => (document.querySelector("#target").innerHTML = html);
}

function ajaxCallHtml(url, callbackFunction) {
    fetch(url)
        .then((response) => response.text())
        .then(callbackFunction);
}

function ajaxGetJSON(index) {
    return (html) => {
        let data = JSON.parse(html);
        let content = "";

            switch (index) {
                case 2:
                    content += "<ul>"
                    data.forEach(item => {
                        content += `
                        <li>
                        <strong>Prénom: </strong>${item.firstName}<br>
                        Téléphone: ${item.phone}
                        </li>`;
                    })
                    break;
                case 4:
                    content += "<ul class='movie-list'>"
                    data.forEach(item => {
                        content += `
                            <li>
                            <img  alt='Affiche du film' src='../images/${item.cover}'>
                            <p><strong>${item.title}</strong> - <em>${item.duration}min</em></p>
                            </li>`;
            });
        }
        content += "</ul>";
        document.querySelector("#target").innerHTML = content;
    }
}
function ajaxCallJSON(url, callbackFunction){
    fetch(url)
        .then((response) => response.text())
        .then(callbackFunction);
}


function onClickExecute() {
    // Récupération de la valeur sélectionnée
    const input = document.querySelector('input[type="radio"]:checked');
    
    // Event en fonction du choix sélectionné
    switch (parseInt(input.value)) {
        case 1:
            ajaxCallHtml("data/1-get-html-article.html", ajaxGetHtml());
            break;
        case 2:
            ajaxCallJSON("data/2-get-contacts-list.json", ajaxGetJSON(2));
            break;
        case 3:
            ajaxCallHtml("data/3-get-html-movies.html", ajaxGetHtml());
            break;
        case 4:
            ajaxCallJSON("data/4-get-json-movies.json", ajaxGetJSON(4));
            break
        default:
            break;
    }
}


/***************
 * CODE
 --------------*/


document.querySelector("#run").addEventListener("click", onClickExecute);




