var form = document.getElementById("formType");
var gender = document.getElementById("inputState2");
var region = document.getElementById("inputState");
var index=1;
var x = "0123456789!@#$%^&*()_-+=[];:.?/ABCEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var body = document.getElementsByTagName('body')[0];
body.style.backgroundImage = 'url(https://i.ytimg.com/vi/p_OX8TPf5Rk/maxresdefault.jpg)';
function generator(){
    for (let index = 0; index < 1; index++){
        var x=Math.floor((Math.random()*14)+1);
        console.log(x);
        document.getElementById('divImage').innerHTML+=`
        <img src="images/avatar${x}.png" style="width:200px;">
        
    `;
    }
}
function generate(){
    var password='';
    for (let index = 1; index<=10;index++){
        var c = Math.floor((Math.random()*x.length)+0);
        password += x.charAt(c);
    }
    console.log(password);
    document.getElementById('pass').innerHTML=`<h1 style = 'color:white;'><center>New password: ${password}</center></h1>;`
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    getData();
});
function getData(){
    let gethttp = new XMLHttpRequest;
    gethttp.open('GET',`https://uinames.com/api/?region=${region.value}&gender=${gender.value}`,true);
    gethttp.onload=function(){
        if (this.status==200){
            let data= JSON.parse(this.responseText);
            console.log(data);
            document.getElementById("names").innerHTML+=`
            <tr style = "background-color:black;color:white;">
            <th scope ="row">${index}</th>
            <td >${data.name}</td>
            <td >${data.surname}</td>
            <td >${data.gender}</td>
            <td >${data.region}</td>
            </tr>
        `
            index++;
        } else{
            console.log("error");
        }
    }
    gethttp.send();
}