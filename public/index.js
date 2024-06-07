const form = document.getElementById('loginForm')

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    let uemail = document.getElementById('uemail').value.trim()
    let upass = document.getElementById('upassword').value.trim()

    if(uemail == "" && upass == ""){
        alert("Please Enter your email and password")
    } else if(upass ==""){
        alert("Please Enter your account password")
    }

    else if(uemail == ""){
        alert("Please Enter your email")
    }

    else{
        alert("Details captured")
    }
})