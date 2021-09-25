let name =  document.getElementsByClassName('input-name')
let pass =  document.getElementsByClassName('input-pass')
let login = false;
const url = "https://git.heroku.com/onlinelearningbend.git"

async function creatacount(name, pass) {
    login = true
    const data = await fetch(url, {
        method: "POST",
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify({ name, pass })
})
const updated_date = await data.json()
return updated_date
}

function right() {
let display =``
if ( login == true ) {
    display +=`<span>${data.name}</span>`
}
else{
    display +=`<span>"login"</span>` 
}
document.getElementsByName("sign-in").innerHTML = display
}
