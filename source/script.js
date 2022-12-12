apiFunction = (api) => {
    return new Promise((res, rej) => {
        let apiCall = new XMLHttpRequest();
        apiCall.open("GET", api);
        apiCall.send();
        apiCall.onload = () => {
            if (apiCall.readyState === 4 && apiCall.status === 200) {
                res(JSON.parse(apiCall.responseText))
            } else {
                rej(Error("The Data Have Been Interrupted 0_0"))
            }
        }
    })
}

apiFunction("https://api.freecurrencyapi.com/v1/latest?apikey=xgtF1tAQJ0HGgUFXgzwwIPMbpzp49Cb7UaBG0SVP").then((Currency) => {
    return Currency.data;
}).then((Currency) => {


    class currencyPair {
        constructor(first, second, third) {
            this.firstPair = first;
            this.secondPair = second;
            this.Index = third;
        }
        first() {
            Currency.SAR = 3.75;



            //create container 
            let mainContainer = document.querySelector(".container");
            let container = document.createElement("div");
            container.className = `currencyContainer ${this.Index}`;
            mainContainer.append(container)

            // end of the container 

            // this is input


            let input = document.createElement("input");
            input.setAttribute("type", "number");
            input.className = `input input${this.Index}`
            container.append(input)
            // finish input

            //this is label
            let label = document.createElement("div");
            label.className = `label ${this.Index}`
            label.innerHTML = `(${this.firstPair})  To  (${this.secondPair})`
            container.append(label)
            // making swap button

            // end of the label


            // this is result 

            let result = document.createElement("div")
            result.className = `result${this.Index}`
            container.append(result)

            // end of the result 

            //make event to div
            let inputBe = document.querySelectorAll(`.input`);
            let chosedInput = inputBe[this.Index - 1];
            let resultpick = document.querySelector(`.result${this.Index}`)
            let multiplyValue = Currency[this.secondPair] / Currency[this.firstPair];

            // resultpick.innerHTML = this.Index;
            //finish declaring
            chosedInput.addEventListener("input", () => {
                resultpick.innerHTML = `${chosedInput.value * multiplyValue.toFixed(2)} ${this.secondPair}`
            })
            //end of event
            // let swapBtn = document.createElement("div")
            // swapBtn.className = `swapbtn swapbtn${this.Index}`
            // label.append(swapBtn)
            // document.querySelector(`.swapbtn${this.Index}`).addEventListener
            //     ("click", () => {
            //         console.log(this.firstPair, typeof (this.secondPair))
            //         [this.firstPair,this.secondPair]=[this.secondPair,this.firstPair]
            //         [first,secon]
            //         console.log("i have been clicked")
            //     })


        }

    }

    c2 = new currencyPair("USD", "SAR", 1).first()
    c5 = new currencyPair("USD", "CNY", 2).first()
    c1 = new currencyPair("SAR", "USD", 3).first()
    c3 = new currencyPair("SAR", "CNY", 4).first()
    c6 = new currencyPair("CNY", "USD", 5).first()
    c4 = new currencyPair("CNY", "SAR", 6).first()
})








