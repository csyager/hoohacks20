function getParam() {
    var params = document.URL.split("?").pop();
    var username = params.split("&")[0].split("=")[1]
    var sub = params.split("&")[1].split("=")[0]
    document.getElementById("test").innerHTML = sub;

    if(sub == "join"){
        document.getElementById("code").style.display="block";
        document.getElementById("name").style.display="none";
        document.getElementById("name_header").style.display="none";
        document.getElementById("code_header").style.display="block";
    } 
}