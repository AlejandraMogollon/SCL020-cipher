import cipher from './cipher.js';



// console.log(cipher);


 window.addEventListener("load", start, true);

function start (){
  document.getElementById("original").addEventListener(
    "keyup",
    function (){
      this.value = this.value.toUpperCase();
    },
    true
  );

  document.getElementById("encrypted").addEventListener(
    "keyup",
    function (){
      this.value = this.value.toUpperCase();
    },
    true
  );
}


window.eventCode = function eventCode(){

    let originalMessage = document.getElementById("original").value;
    let shift = document.getElementById("shift").value;

    if (originalMessage === "" || shift === ""){
        alert ("You Need to type a Message and choose a Shift for Code a Message");
    }

    let encodeMessage = cipher.encode(originalMessage,shift); 

    document.getElementById("encrypted").value = encodeMessage;

    return;
    
    
}

window.eventDecode = function eventDecode(){

    let encryptedMessage = document.getElementById("encrypted").value;
    let shift = document.getElementById("shift").value;

    if (encryptedMessage === "" || shift === ""){
        alert ("You Need to type a Message and choose a Shift for Code a Message");
    }

    let decodeMessage = cipher.decode(encryptedMessage,shift); 

    document.getElementById("original").value = decodeMessage;

    return;
    
    
}

