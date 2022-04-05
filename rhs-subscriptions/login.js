function validate(){
    var username=document.querySelector('#username').value;
    var password=document.querySelector('#password').value;
    
    if (username===process.env.RHS_USERNAME && password===process.env.RHS_PASSWORD){
        alert('Correct username and password')
    }
    else{
        alert('Incorrect username or password');
    }
}