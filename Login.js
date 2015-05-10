function Login(){
        
        var username=document.login.username.value;
        username=username.toLowerCase();
        var password=document.login.password.value;
        password=password.toLowerCase();
        
            if (username == "admin" && password == "admin"){
                alert("Selamat anda berhasil login");
                window.location.href="L1(143040134)-2.html";
            }
            else if (username == "" && password == ""){
                alert("Silahkan isi dulu formnya :)");
            }
            else {
                alert("User name dan password anda salah!");
            }
}