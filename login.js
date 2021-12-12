console.log("login added")


const emailid=document.getElementById("emailid")
const pass=document.getElementById("password")
const loginbtn=document.getElementById("loginbtn")
const success=document.getElementById("success")





loginbtn.addEventListener('click',()=>{
    console.log(emailid.value)
    console.log(pass.value)
    let email=emailid.value
    let password=pass.value
    location.replace('blank.html')

    /*
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        console.log('signed in')
        location.replace('table-1.html')
        var user = userCredential.user;
        console.log(user)
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        console.log(errorCode)
        var errorMessage = error.message;
    });

    */
        
})

