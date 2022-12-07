function EncryptZigZag() {
    plaintext = document.getElementById("toEncrypt").value.toLowerCase().replace(/[^a-z]/g, "");  
    if(plaintext.length < 1){ alert("Teks kosong! Tidak bisa di enkripsi"); return; }    
    var key = parseInt(document.getElementById("key").value);
    if(key > Math.floor(2*(plaintext.length-1))){ alert("kunci terlalu besar untuk plainteks!"); return; }  
    ciphertext = "";
    for(line=0; line<key-1; line++){
        skip=2*(key-line-1);   j=0;
        for(i=line; i<plaintext.length;){
            ciphertext += plaintext.charAt(i);
            if((line==0) || (j%2 == 0)) i+=skip;
            else i+=2*(key-1) - skip;  
            j++;          
        }
    }
    for(i=line; i<plaintext.length; i+=2*(key-1)) ciphertext += plaintext.charAt(i);
    document.getElementById("toDecrypt").value = ciphertext;
}

function DecryptZigZag(f) {
    ciphertext = document.getElementById("toDecrypt").value.toLowerCase().replace(/[^a-z]/g, "");  
    if(ciphertext.length < 1){ alert("Teks kosong! Tidak bisa di dekripsi"); return; }    
    var key = parseInt(document.getElementById("key").value);
    if(key > Math.floor(2*(ciphertext.length-1))){ alert("please enter 1 - 22."); return; }      
    pt = new Array(ciphertext.length);   k=0;
    for(line=0; line<key-1; line++){
        skip=2*(key-line-1);  j=0;
        for(i=line; i<ciphertext.length;){
            pt[i] = ciphertext.charAt(k++);
            if((line==0) || (j%2 == 0)) i+=skip;
            else i+=2*(key-1) - skip;  
            j++;        
        }
    }
    for(i=line; i<ciphertext.length; i+=2*(key-1)) pt[i] = ciphertext.charAt(k++);
    document.getElementById("toEncrypt").value = pt.join("");
}