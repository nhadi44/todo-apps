let users = []

var displayData = document.getElementById('display-data')

class People{
    constructor(id,name, email, dob, gender, address){
        this.id = id,
        this.name = name,
        this.email = email,
        this.dob = dob,
        this.gender = gender,
        this.address = address
    }

    renderToElemet(){
        var data = `
        <div class="card-data">
        <button class = "btn-close" onclick="btnClose(${this.id})">X</button>
            <table>
                <tr>
                    <td>Name</td>
                    <td></td>
                    <td></td>
                    <td>:</td>
                    <td>${this.name}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td></td>
                    <td></td>
                    <td>:</td>
                    <td>${this.email}</td>
                </tr>
                <tr>
                    <td>Date of Bird</td>
                    <td></td>
                    <td></td>
                    <td>:</td>
                    <td>${this.dob}</td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td></td>
                    <td></td>
                    <td>:</td>
                    <td>${this.gender}</td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td></td>
                    <td></td>
                    <td>:</td>
                    <td>${this.address}</td>
                </tr>
            </table>
        </div>
        <br>
        `
        return data
    }
}

function renderData(){
    let HTMLELement = ''
    for(var user of users){
        console.log(user)
        HTMLELement += user.renderToElemet()
    }

    displayData.innerHTML = HTMLELement
}

function addUser(){
    var id = Date.now()
    var inputName = document.getElementById('input-name').value
    var inputEmail = document.getElementById('input-email').value
    var inputDob = document.getElementById('input-dob').value
    var inputGender = document.getElementById('input-gender').value
    var inputAddress = document.getElementById('input-address').value

    var user = new People(
        id,
        inputName,
        inputEmail,
        inputDob,
        inputGender,
        inputAddress,

    )

    users.push(user)
    renderData()
}

function btnClose(id){
    for (var i = 0; i < users.length; i++){
        console.log(users[i].id)
        if(id === users[i].id){
            users.splice(i,1)
        }
    }
    renderData()
}
renderData()