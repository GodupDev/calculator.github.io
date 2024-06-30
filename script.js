var oneButtons = document.getElementsByTagName("button");
var expression = document.getElementById("expression")
var answer = document.getElementById("answer")
var clock = document.getElementById("clock")
var main = document.getElementById("main")

var updateClock = () => {
    var now = new Date();
    clock.textContent = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);


for (var i = 0; i < oneButtons.length; i++) {
    oneButtons[i].addEventListener("click", function(event){
        if (this.textContent != "=" && this.textContent != "C" && this.textContent != "±" && this.textContent != "DEL" ){
            if (expression.value == "ERROR") expression.value = "";  
            expression.value += this.textContent;
        }
        if(this.textContent == "C"){
            main.innerHTML = `<input type="text" id="expression">`;
            expression = document.getElementById("expression")
            answer.textContent = "";
        }
        if(this.textContent == "=")
            if(expression.value.toLowerCase() == "từ thị bảo thi") 
                {main.innerHTML = `
                    <marquee behavior="scroll" direction="left" scrollamount="5">
                        I LIKE YOU ❤ Từ Thị Bảo Thi    
                    </marquee>`
                    console.log("ok")
                }
            else{
                try{answer.textContent = eval(expression.value.replace("×", "*"));}
                catch(error) {
                    expression.value = "ERROR";
                    expression.answer = String(error);
                }
            } 
        if(this.textContent == "DEL")
            expression.value = expression.value.slice(0, -1);
        if(this.textContent == "±"){
            if(expression.value.includes("+"))
                expression.value = expression.value.replace("+", "-");
            else{
                if (expression.value.includes("-")) expression.value = expression.value.replace("-", "+");
                else expression.value = "-"+expression.value;
            }
        }
    });
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        if(expression.value.toLowerCase() == "từ thị bảo thi") 
            {main.innerHTML = `
                <marquee behavior="scroll" direction="left" scrollamount="5">
                    I LIKE YOU ❤ Từ Thị Bảo Thi    
                </marquee>`
                console.log("ok")
            }
        else{
            try{answer.textContent = eval(expression.value.replace("×", "*"));}
            catch(error) {
                expression.value = "ERROR";
                expression.answer = String(error);
            }
        } 
    }
  });