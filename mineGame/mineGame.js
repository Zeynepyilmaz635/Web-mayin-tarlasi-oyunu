













/*
document.addEventListener("DOMContentLoaded",run26);  //document sayfam demk sayfam yükldniğinde çalşsn dedik
function run26(){
    const currentDateFirst = new Date();
    const currentHoursFirst = currentDateFirst.getHours();
    
    const currentMinutesFirst = currentDateFirst.getMinutes();
    console.log("hours: " + currentHoursFirst);
    console.log("minutes: " + currentMinutesFirst);
    document.getElementById("start").innerHTML = "Başlangıç --> Saat : " + currentHoursFirst +" Dakika : " + currentMinutesFirst ; 
}

*/
//!localStorage.clear();  // localdeki verileri siler
const currentDateFirst = new Date();
const yearFirst = currentDateFirst.getFullYear(); // Yıl (örneğin: 2023)
const monthFirst = currentDateFirst.getMonth(); // Ay (0'dan başlayarak; Ocak 0, Şubat 1, ...)
const dayFirst = currentDateFirst.getDate(); 
console.log(currentDateFirst);

const currentHoursFirst = currentDateFirst.getHours();
console.log("hours: " + currentHoursFirst);
const currentMinutesFirst = currentDateFirst.getMinutes();
console.log("minutes: " + currentMinutesFirst);
document.getElementById("start").innerHTML = "Başlangıç --> Saat : " + currentHoursFirst +" Dakika : " + currentMinutesFirst ; 


let template = [];

const numRows = 10;
const numCols = 10;

for (let i = 0; i < numRows; i++) {
    let row = [];
    for (let j = 0; j < numCols; j++) {
        row.push("*");
        console.log(row[j]);
    }
    template.push(row);
}

let mineCount = 0; // 0'a eşit olmayan bir sayı ile başlatılmalı

while (mineCount < 30) { // Maden sayısı 30'a ulaşana kadar devam eder
    const min = 0;
    const max = 9; // Dizi indeksleri 0'dan başladığı için 9 olmalı
    const rowRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    const colRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    
    if (template[rowRandom][colRandom] === "*") { // Hücrede zaten maden yoksa
        template[rowRandom][colRandom] = "o";
        mineCount += 1;
    }
}

console.log(template);




let clickButton=0;
const buton=document.querySelectorAll(".cc");
buton.forEach(function(todo){
    todo.addEventListener("dblclick",run3);
})







/*//TODO:  SAĞ TIK OLAYI
const buttons = document.querySelectorAll(".cc");

buttons.forEach(function(button) {
    button.addEventListener("contextmenu", function(event) {
        event.preventDefault(); // Tarayıcının varsayılan sağ tıklama menüsünü engelle

        const buttonElement = event.target;

        
        if (buttonElement.querySelector('img')) {
            buttonElement.innerHTML = '';
        } else {
            
            const resimElementi = document.createElement('img');
            resimElementi.src = 'flagg.jpg';
            resimElementi.alt = 'Eklenen Resim';

            
            buttonElement.appendChild(resimElementi);
        }
    });
});

*/














/*
function run4(e){
    const buttonElement = e.target;
    buttonElement.innerHTML = ''; // Buton içeriğini temizle
    resimElementi.src = 'flagg.jpg';
    resimElementi.alt = 'Eklenen Resim';
        
    buttonElement.appendChild(resimElementi);
    
}*/



function run3(e){









     //!!!!!!!!!!!!KULLnıcıya durulan dk ayısının istatiğini vermk için yaptım minutesCONCAT BÜYÜKTEN KÜÇÜĞE SIRALA İLK 3 ÜNÜ DE EKRANA BİLGİLENDİRME TABLOSUNDA VERMK İÇİN 
    //!!!!!!!!Alltaki kodlarda istatik çıkarlıp ekrana veriliyor
    let getir2=JSON.parse(localStorage.getItem("istatikControl"));
    const newDizi = getir2.slice().sort((a, b) => b - a);
    const liste1=document.querySelector("#list1");
    liste1.innerHTML="1.en iyi skor: " + newDizi[1];
    const liste2=document.querySelector("#list2");
    liste2.innerHTML="2.en iyi skor: " + newDizi[2];
    const liste3=document.querySelector("#list3");
    liste3.innerHTML="3.en iyi skor: " + newDizi[3];










    let mineNumberControl=0;
    
    console.log(e.target.id);
    console.log(e.target.textContent + " adlı butona çift tıklandı")
    
    kelime=e.target.id;
    word=kelime.split("id");
    const r=parseInt(word[1]);
    const c=parseInt(word[2]);
    if(template[r][c]=="*"){
        console.log("mayin yok");
    
        

             
        if( r>=1 && c>=1 && template[r-1][c-1]=="o"){
            mineNumberControl+=1;

        }
        if( r>=1 && template[r-1][c]=="o"){
            mineNumberControl+=1;
        }
        if( r>=1 && c<=8 && template[r-1][c+1]=="o"){

            mineNumberControl+=1;
        }
        if( c>=1 && template[r][c-1]=="o"){
            mineNumberControl+=1;
        }
        
        if( c<=8 && template[r][c+1]=="o"){
            mineNumberControl+=1;
        }
        console.log("zey");
        if( r<=8 && c>=1 && template[r+1][c-1]=="o"){

            mineNumberControl+=1;
        }
        
        if(r<=8 && template[r+1][c]=="o"){
            mineNumberControl+=1;
        }
        if( r<=8 && c<=8 && template[r+1][c+1]=="o"){
            mineNumberControl+=1;
        }
        

        //TODO: SKOR YAP

       
       console.log("mineeeee : " + mineNumberControl);

        //TODO: RESİM EKLEME KODU ASLA SİLME 
        //!RESİMLER 32 PİKSEL BOYUTLANDIRMA AYNN KALIYOR TÜR JPG
        const buttonElement = e.target;
        buttonElement.innerHTML = ''; // Buton içeriğini temizle
        
        const resimElementi = document.createElement('img');
        if(mineNumberControl==0){
            resimElementi.src = 'zero.jpg'; // Eklemek istediğiniz resmin yolunu burada belirtin
        }
        else if(mineNumberControl==1){
            resimElementi.src = 'one.jpg'; // Eklemek istediğiniz resmin yolunu burada belirtin
        }
        else if(mineNumberControl==2){
            resimElementi.src = 'two.jpg'; // Eklemek istediğiniz resmin yolunu burada belirtin
        }
        else if(mineNumberControl==3){
            resimElementi.src = 'three.jpg'; // Eklemek istediğiniz resmin yolunu burada belirtin
        }
        else if(mineNumberControl==4){
            resimElementi.src = 'four.jpg'; // Eklemek istediğiniz resmin yolunu burada belirtin
        }
        else if(mineNumberControl==5){
            resimElementi.src = 'five.jpg'; // Eklemek istediğiniz resmin yolunu burada belirtin
        }
        else if(mineNumberControl==6){
            resimElementi.src = 'six.jpg'; // Eklemek istediğiniz resmin yolunu burada belirtin
        }
        else if(mineNumberControl==7){
            resimElementi.src = 'seven.jpg'; // Eklemek istediğiniz resmin yolunu burada belirtin
        }
        else if(mineNumberControl==8){
            resimElementi.src = 'eight.jpg'; // Eklemek istediğiniz resmin yolunu burada belirtin
        }


        //resimElementi.src = 'eight.jpg'; // Eklemek istediğiniz resmin yolunu burada belirtin
        resimElementi.alt = 'Eklenen Resim';
        
        buttonElement.appendChild(resimElementi);
        //!ASLA SİLME
        
        clickButton+=1;

        const openB=document.querySelector("#openButton");
        openB.innerHTML="Açılan buton sayısı : " + clickButton ;

        const remainingB=document.querySelector("#remainingButton");
        remainingB.innerHTML="Kalan buton sayısı: " + (100-clickButton);

        const notMineB=document.querySelector("#notMineButton");
        notMineB.innerHTML="Mayın harici kalan buton sayısı : " + (100-30-clickButton);
       
        
    }else{
        
        const currentDateLast = new Date();
        const currentHoursLast = currentDateLast.getHours();
        const currentMinutesLast = currentDateLast.getMinutes();
        console.log("hours: " + currentHoursLast);
        console.log("minutes: " + currentMinutesLast);
        //document.getElementById("over").innerHTML = "Bitiş --> Saat : " + currentHoursLast + " Dakika : " + currentMinutesLast;
        
        //! LOCAL STRONGE KAYDETMEK İÇİN BİLGİLERİ ARRAYE AKTARDIM
        ary=[];
        minutesFollow=[];
        ary.push(dayFirst);  //başlangıç gün bilgisi  0 
        ary.push(monthFirst);  //başlangıç ay bilgisi  1 
        ary.push(yearFirst);  //başlangıç yıl bilgisi   2
        ary.push(currentHoursFirst); //başlangıç saati    3 
        ary.push(currentMinutesFirst);  //başlangıç dakikası    4
        ary.push(currentHoursLast);  //bitiş saati       5
        ary.push(currentMinutesLast);  //bitiş dakikası    6
        ary.push("ozan");
        console.log(ary);
        
        
        
        


        
        let getir=JSON.parse(localStorage.getItem("veri"));  //!kayıtlı veriyi aldık
        const concatDizis=getir.concat(ary);  //!kayıtlı veri ile yeni veriyi birleştirdik
        localStorage.setItem("veri",JSON.stringify(concatDizis));  // veri  key adı concatDizis de value ye yazılır  
        //! üstte yeni oluşturulan birlştirilmiş veriyi yazdık

        
        
      
       
        location.reload(); // mine bastığımızda sayfa yenilenir.

        console.log("mayin var");
        

        alert("Mayına Bastınız! Game Over");
        
        
        /*
        let s=0;
        aryControl=[];
        concatDizis.forEach(function(todo){
            
            if(s==3){
                sh=todo;
            }
            if(s==4){
                sm=todo;
            }
            if(s==5){
                eh=todo;
            }
            if(s==6){
                em=todo;
            }
            if(todo=="ozan"){

                if(em<sm && eh>sh){
                    dakika=(em+60)-sm;
                    saat=(eh-1)-sh;
                    toplamDakika=(saat*60)+dakika;
                    aryControl.push(toplamDakika);


                }
                s=0;
            }else{
                s+=1;
            }
            
        });

        console.log("hesaplamalarrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr: " + aryControl);

*/

       /*
       
let dizi1=["enes","yakup","bilal","mehmet","arda"];
dizi1.forEach(function(isim){
    console.log(isim);
});
 */







    }
    console.log(word);
    console.log(word[1]);
    console.log(word[2]);





    


}

















