
//Variables Global's

var h = document.querySelector("#hours")
var getH = new Date()
var getD = document.querySelector("#data")
var res = document.querySelector("#txt1")

//Dates

function quadratica(){

    const D1 = String(getD.value)
    console.log(D1)
    
    //Get Dates

    const arc1 = (D1 === "1940-01-07")
    const arc2 = (D1 === "1945-08-05")
    const arc3 = (D1 === "7777-07-07")
    const arc4 = (D1 === "2020-09-12")
    const arc5 = (D1 === "2005-10-20")
    const arc6 = (D1 === "0001-12-25")
    const arc7 = (D1 === "1761-07-07")

//Archives

 const archivs = (arc1 || arc2 || arc3 || arc4 || arc5 || arc6 || arc7) 

        //File found

        if(archivs){
            h.innerHTML = "File Found..."
                typeWrite(h)
        }else{
            h.innerHTML = "No Files Found"
                typeWrite(h)
        }
        
        //Archives per dates

        if(arc1){
            setTimeout(function(){
                res.innerHTML = `Hoje as 20:00 o corpo do cientista Gerald Ford foi encontrado no seu 
                laboratorio com marcas do que parece ser garras no seu corpo inteiro, o seu rosto esta irreconhecivel, e ninguem sabe ao
                certo o que pode ter causado isso. $#°!¨(****%¨!@!) Arquivo Corrompido. Ironico. $(IkK)$`
                    setTimeout(function(){
                        res.innerHTML = "DRAGONBORNES. . ."
                            typeWrite(res);
                            setTimeout(function(){
                                res.innerHTML = ""
                                h.innerHTML = ""
                            },2000)     
                    },5000)
            },2000)

        }else if(arc2){
            newWin();
        }else if(arc3){
            archive3();
        }else if(arc4){
            setTimeout(() => {
               res.innerHTML = `Camila sua intrometida. Teve um fim não tão legal né?... 
            espero que entenda.. não sou eu.`
                setTimeout(() => {
                    res.innerHTML = ""
                    h.innerHTML = ""
                }, 5000);
            }, 2000);
        }else if (arc5){
            setTimeout(() => {
                const i = `<img class="forcag" src="images/who.png" alt="quem?" onclick="click()">`
                res.innerHTML = i
                setTimeout(() => {
                    window.alert("password = tentacao")
                }, 5000);
            }, 2000);
   
        }else if (arc6){
            setTimeout(() => {
                res.innerHTML = "Nascimento de Jesus... Nascimento de um aspecto.. sabia?"
                typeWrite(res);
                    setTimeout(() => {
                        const i = '<p> Vida.. </p>'
                        res.innerHTML = i;
                            setTimeout(() => {
                                res.innerHTML = ""
                                h.innerHTML = ""
                            }, 3000);
                    }, 8000);
            },2000);
        }else if (arc7){
            setTimeout(() => {
                window.alert(":)")
                location.href = "end.html"
            },2000);
        }
        //New Window
        function newWin(){
            setTimeout(function(){
                const btn = document.querySelector("#btn")
                btn.style.cssText = 'background-color: white;' + 'color: blue;'
                    setTimeout(function(){
                        btn.style.cssText = 'background-color: black;' + 'color: black;'
                        h.innerHTML = ""
                    },300)
            },1800)
        }
        //Arc 3
        function archive3(){
            setTimeout(function(){
                location.href="indexERROR.html"
                window.alert("..Tenho medo de isso me atingir pai.")
                window.alert("Sentimentos do passado me afetam.. sempre me afetaram....")
            },3100)
        }
 
}
   

//Type Writer

function typeWrite(element) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((str, index) => {
    setTimeout(function () {
        element.innerHTML += str
    }, 85 * index)
})

}      

