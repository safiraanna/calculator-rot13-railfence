function encryptROT13(){
    const message = document.querySelector('#toEncrypt').value
    if(message=="") {
      alert("Teks kosong! Tidak bisa di enkripsi"); 
    }
    
    var t = message.split('')
    var key = 'abcdefghijklmnopqrstuvwxyz'
    var word = ''
    
    t.forEach((letter)=> {
      idx = key.indexOf(letter.toLowerCase());
      if(idx !== -1) {
        idx < key.length / 2 ?
        letter == letter.toUpperCase() ?
        word += key[idx + 13].toUpperCase() :
        word += key[idx + 13] :
        letter == letter.toUpperCase() ?
        word += key[idx - (key.length / 2)].toUpperCase() :
        word += key[idx - (key.length / 2)];
      } else {
        idx === -1 ? word += letter : '';
      }
    });
    
    document.getElementById("toDecrypt").value = word;
  }


  function decryptROT13() {
    if(document.querySelector('#toDecrypt').value=="") {
      alert("Teks kosong! Tidak bisa di dekripsi");
    }
    
    var t = document.querySelector('#toDecrypt').value.split('')
    var key = 'abcdefghijklmnopqrstuvwxyz'
    var word = ''
    
    t.forEach((letter)=> {
        idx = key.indexOf(letter.toLowerCase());
        if(idx !== -1){
          idx >= key.length / 2 ?
          letter == letter.toUpperCase() ?
          word += key[13-(key.length - idx)].toUpperCase() :
          word += key[13-(key.length - idx)] :
          letter == letter.toUpperCase() ?
          word += key[idx + 13].toUpperCase() :
          word += key[idx + 13];
        } else {
          idx === -1 ? word += letter : '';
        }
    });
    
    document.getElementById("toEncrypt").value = word;
  }

  var btnContainer = document.getElementsByClassName("cipher");
  var btns = btnContainer.getElementsByClassName("aa");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
  });
}