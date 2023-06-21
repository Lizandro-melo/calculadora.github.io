const operations = ["/", "X", "-", "+", "="];

class Memory {

    _buffer = [0.0, 0.0];
    _bufferIndex = 0;
    operation;
    _value = "0";
    _wipeValue = false;

    applyCommand(command) {

        for (let i = 0; i < operations.length; i++) {
            if (operations[i] == command) {
                this.setOperation(command)
                return
            }
        }

        if (command == "AC") {
            this.allClear();
        } else if (command == "←") {
           return;
        } else {
            this.addDigit(command);

        }
    }

    setOperation(newOperation) {
        let isEqualSign = newOperation == "=";
        if (this._bufferIndex == 0) {
            if (!isEqualSign) {
                this.operation = newOperation;
                this._bufferIndex = 1;
                this._wipeValue = true;
            }
        } else {
            this._buffer[0] = this.calculate()
            this._buffer[1] = 0.0;
            this.operation = isEqualSign ? null : newOperation;
            this._bufferIndex = isEqualSign ? 0 : 1;
            this._value = isEqualSign ? this._buffer[0] : 0
        }
        this._wipeValue = true;
    }

    addDigit(digito) {
        let isDot = digito == ".";
        let wipeValue = (this._value == "0" && !isDot) || this._wipeValue;

        if (isDot && this._value.indexOf(".") > -1) {
            return;
        }

        let emptyValue = isDot ? "0" : "";
        let currentValue = wipeValue ? emptyValue : this._value;
        this._value = currentValue + digito;
        this._wipeValue = false;

        this._buffer[this._bufferIndex] = parseFloat(this._value) ?? 0;
    }

    allClear() {
        this._value = "0";
        this._buffer[0] = 0;
        this._buffer[1] = 0;
        this._bufferIndex = 0;
        this.operation = null;
        this._wipeValue = false;
    }

    calculate() {
        switch (this.operation) {
            case "/": return this._buffer[0] / this._buffer[1]
            case "X": return this._buffer[0] * this._buffer[1]
            case "-": return this._buffer[0] - this._buffer[1]
            case "+": return this._buffer[0] + this._buffer[1]
            default: return this._buffer[0];
        }
    }

    getValue() {
        return this._value;
    }

    getbuffer(index) {
        return this._buffer[index];
    }
}

const memory = new Memory(0, 0);

const buttons = document.querySelectorAll(".buttons");
const calculo = document.querySelector("#calculo");
const resultado = document.querySelector("#resultado");

calculo.addEventListener("input", () => {
    calculoDisplay = calculo.value;
    calculoDisplay = calculoDisplay.replace(/\D/g, "");
    calculo.value = calculoDisplay;
})

buttons.forEach(button => {
    button.addEventListener("click", () => {
        memory.applyCommand(button.textContent)
        calculo.value = memory.getValue()
        resultado.value = memory.getbuffer(0)
    });
})
