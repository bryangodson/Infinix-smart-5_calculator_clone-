                /*
            
            selecting the element with class ans...do that I can work with it later I named the selected element display . it can be anything sensible for it's purpose.
            */
        let display = document.querySelector(".ans");

        let final_ans = document.querySelector(".final_ans");

        function Add(x) {
            /*
            the Add Function is responsible for displaying the pressed button .
            x is the parameter passed in the element...
            I passed this .value in all the inputs...
            this.value will get the value of the current input pressed.
            */
            final_ans.classList.remove("moveup");
            
         /*
          
          the eval() Function in JavaScript does not recognize ÷ as division but rather this /.
          so I'm checking that if the value passed to parameter x in the input as this.value is revision sign then I'll assign a new value to x ... which JavaScript knows to be / .
          please note that 2 == are comparing one = is assigning. the same thing happens to " and • note that • is not a dot. this is a dot . I used • because it is begger and it appears in the center of the button."
         */
            if (x == "÷") {
                x = "/"
            }
            if (x == "x") {
                x = "*"
            }
            if (x == "•") {
                x = "."
            }
            display.innerText += x;
            display.scrollBy(20, 0);
            /*
            hmmm this will be hard to explain ... when you move up you'll understand the purpose of for loops in js.
            
            */
  var operands = ["*", "+","-","/"];
            for (i = 0; i < operands.length; i++) {
                if (display.innerText.includes(operands[i]) && display.innerText.endsWith("1") || display.innerText.endsWith("2") || display.innerText.endsWith("3") || display.innerText.endsWith("4") || display.innerText.endsWith("5") || display.innerText.endsWith("6") || display.innerText.endsWith("7") || display.innerText.endsWith("8") || display.innerText.endsWith("9") && display.innerText.length != 1) {
                    calculate();

                }
            }


        }

        function Delete() {
            display.innerText = display.innerText.slice(0, -1);


        }

        function DeleteAll() {
            display.innerText = "";
            final_ans.innerText = ""
        }

        function calculate() {
            /*
            try {
                
            }catch{
            
            
            }
            is a syntax for checking errors it avoids your app from crashing.
            I think these are what you should know for now.
            */
            try {
                let dis = document.querySelector(".ans");

                let and = eval(dis.innerText);
                final_ans.innerText = and;

                final_ans.style.color = "cornflowerblue";
                
                

            }
            catch(er) {
                final_ans.innerText = er;
                final_ans.style.color = "#CF4B36";
                
            }
        }
        function away() {


            display.classList.add("away");
            display.onanimationend = ()=> {
                display.classList.remove("away");
                display.innerText = "";


            }
            final_ans.classList.add("moveup");



        }


        function root() {

            let sq = Math.sqrt(display.innerText);
            final_ans.innerText = sq;

        }