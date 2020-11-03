const userList = document.querySelector('#user-list')
const container = document.querySelector('#github-container')

function main(){
    addClickListens()
}

function addFoundUser(user){
        userList.innerHTML += `<li>
        <img src=${user.avatar_url} class='avatar'>
        <a href=${user.html_url}>${user.login}</a>
        </li>`
}

function addClickListens(){
    const form = document.querySelector('#github-form')
    const input = document.querySelector('#search')
    form.addEventListener('submit', function(e){  
        e.preventDefault()      
        let url  = `https://api.github.com/search/users?q=${input.value}`
        fetch(url)
        .then (resp => resp.json())
        .then (users => {
            userList.innerHTML = ""
            users.items.forEach(addFoundUser)
        })
    })
}


main()