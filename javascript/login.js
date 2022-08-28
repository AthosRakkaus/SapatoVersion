
//Variables and const's global
const res = document.querySelector("#res")
const nam = document.querySelector("#name")
const pass = document.querySelector("#pass")
const pag = document.querySelector("#pag")


//Login

function correct(){

        //Variables and const's
        
        const n1 = String(nam.value)
        const p1 = String(pass.value)

        //Chars

        const Prrhybz = (n1 === "Ikkkkkkarai" && p1 === "naodaprahackeararvores")
        const Eduardo = (n1 === "Eduardo" &&  p1 === "tentacao")
        const Camila = (n1 === "Camila" && p1 === "KehtoKaoksen")
        const Ayanokoji = (n1 === "Ayanokoji" && p1 === "Manipulacao")

            //Acesso

        if (Prrhybz){
            res.innerHTML="Bem vindo criador. Acessando ADM"
                    typeWrite(res);
                    setTimeout(function(){
                        location.href="index2.html"
                    },3100)
                    }

                else if (Eduardo){
                        res.innerHTML="Como?"
                    typeWrite(res)
                    setTimeout(() => {
                        location.href="index4.html"
                    }, 3100);    
                    }
                    
                else if (Camila){
                res.innerHTML = "Vc de novo?"
                    typeWrite(res);
                    setTimeout(() => {
                        location.href="index5.html"
                    }, 3100);

                    }else if (Ayanokoji){
                        res.innerHTML = "Medo..."
                        typeWrite(res);
                        setTimeout(() => {
                            location.href="index3.html"
                        }, 3100);
                    }
        else{
            res.innerHTML = "Acesso negado."
                typeWrite(res);
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
