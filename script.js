let imgbox = document.getElementById("imgbox")
let qrimg = document.getElementById("qrimg") 
let inputBox = document.getElementById("inputbox") 



function generate(){
    if(inputBox.value.length > 0){
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +inputBox.value;
        imgbox.classList.add("show-img");
    }
    else{
        inputBox.classList.add("error");
        setTimeout(() =>{
            inputBox.classList.remove("error");
        }, 1000)
    }
    
}