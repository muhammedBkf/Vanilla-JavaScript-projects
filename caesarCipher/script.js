

//check if letter is uppercase
function isUpperCase(str) {
  return str === str.toUpperCase();
}

//decipher the string
let ceaserCipher = (str, key,type) => {
let decipher = '';

//decipher each letter
for(let i = 0; i < str.length; i++){
  
  //if letter is uppercase then add uppercase letters
  if(isUpperCase(str[i])){
    decipher += String.fromCharCode((str.charCodeAt(i) + key*type - 65) % 26 + 65);
  }else{
    //else add lowercase letters
    decipher += String.fromCharCode((str.charCodeAt(i) + key*type - 97) % 26 + 97);
  }
}
return decipher;
}

var pass=document.getElementById('password');
var key=document.getElementById('key');
//if we gonna crypt we put the the type to 1
document.getElementById('cryptButton').onclick=function(){
let s=pass.value;
let k=key.value;
    pass.value=ceaserCipher(s,k,1);
};
//if we gonna decrypt we put the the type to -1
document.getElementById('decryptButton').onclick=function(){
  let s=pass.value;
  let k=key.value;
  
      pass.value=ceaserCipher(s,k,-1);
  };