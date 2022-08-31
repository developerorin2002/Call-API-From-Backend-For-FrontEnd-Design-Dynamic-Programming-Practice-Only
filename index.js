
const loadData = () =>{
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
        .then(data => displayUserData(data.results[0]))
};

const displayUserData = (user) =>{
    const getId = document.getElementById('img-container');
    getId.innerHTML = ``;
    const createDiv = document.createElement('div');
    createDiv.classList.add('img')
    createDiv.innerHTML = `
            <div class="img">
                <img src="${user.picture.large}" alt="" srcset="">
                <h2>Name : ${user.name.first}</h2>
                <h2>Gender: ${user.gender}</h2>
            </div>
    `
    getId.appendChild(createDiv);
}

document.getElementById('load-user-btn').addEventListener('click' , ()=>{
    loadData();
})