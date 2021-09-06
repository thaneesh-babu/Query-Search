let api_url = "https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow"

function display(data, keyword) {
    var length= Object.keys(data.items).length;
    for (let question = 0; question < length; question++) {
        if (JSON.stringify(data.items[question].title).includes(keyword)) {
            document.write(JSON.stringify(data.items[question].title) + " - " + JSON.stringify(data.items[question].link));
            document.write("<br>");
        }
    }
}

function getKeyword() {

    let inputKeyword = document.getElementById("searchbar").value

    fetch(api_url) 
    .then(response=>response.json())

    .then(data=>display(data, inputKeyword))

}

//Figure out a way to fetch the API URL in JS. Refer to the API link to see how the JSON data looks like. 
