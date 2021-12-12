console.log("login added")

const emailid=document.getElementById("emailid")
const pass=document.getElementById("pass")
const login=document.getElementById("login")
const success=document.getElementById("success")




login.addEventListener('click',()=>{
    console.log(emailid.value)
    console.log(pass.value)
    let email=emailid.value
    let password=pass.value

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        console.log('signed in')
        location.replace('blank.html')
        var user = userCredential.user;
        console.log(user)
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        console.log(errorCode)
        var errorMessage = error.message;
    });
        
})

