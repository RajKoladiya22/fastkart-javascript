let user = [];
let check = 0
const checkpolicy = () => {
    check = 1
}
const signUp = () => {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        if(!name){
            alert("Name is Required");
            return false
        }
        if(!email){
            alert("Email is Required");
            return false
        }
        if(!password){
            alert("Password is Required");
            return false
        }
        if(check == 1){

                let userid = Math.floor(Math.random() * 1000000);
                let obj = {
                    userid,name,email,password
                }
                if(localStorage.getItem('register') === null || localStorage.getItem('register') === undefined){
                    user.push(obj);
                    localStorage.setItem('register',JSON.stringify(user));
                }else{
                    let allrecord = JSON.parse(localStorage.getItem('register'));
                    allrecord.push(obj);
                    localStorage.setItem('register',JSON.stringify(allrecord));
                }
                alert("User successfully register")
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("password").value = "";   
        }else{
            alert("Please check Policy");
        } 
        
        //hii
}