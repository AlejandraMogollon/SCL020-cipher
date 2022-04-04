const cipher = {
  
  encode,
  decode


};

export default cipher;


function encode(originalMessage,shift){

  let result="";
  let alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  shift = ((shift % 26)+ 26) % 26;
  
  for (let i = 0; i < originalMessage.length; i++){
    if (alphabet.indexOf(originalMessage[i]) != -1)
    {

      console.log(originalMessage[i]);
      let position = (alphabet.indexOf(originalMessage[i]) + shift ) % 26;
      result += alphabet[position];

    } else {
      result += originalMessage[i];
    }
  }
 return result;
}


function decode(encryptedMessage, shift){
  let result="";
  let alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  shift = ((shift % 26)- 26) % 26;
  
  for (let i = 0; i < encryptedMessage.length; i++){
    if (alphabet.indexOf(encryptedMessage[i]) != -1)
    {

      console.log(encryptedMessage[i]);
      let position = (alphabet.indexOf(encryptedMessage[i]) - shift ) % 26;
      result += alphabet[position];

    } else {
      result += encryptedMessage[i];
    }
  }
 return result;
}



