//Çıktı alma yöntemleri
//? Document write ile çıktı alma. document bir objedir
document.write("Javascript Dersleri <br>");
document.write(21);
//? console log metodu ile çıktı  alma. console bir class bunun metotlarını kullanıyoruz. Bu çıktı ekrana gelmez consolda yazar.
console.log("Çıktı Alma Metotları");
//? alert (uyarı) popup ile çıktı alma.
alert("Merhaba");
console.log(window);

function selamVer(){
    var selam="Herkese selam"; //function scope
    console.log(selam);
}
selamVer();

