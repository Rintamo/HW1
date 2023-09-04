let displayValue = '';

function appendToDisplay(val) {
    displayValue += val;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function sqrt() {
    try {
        displayValue = Math.sqrt(eval(displayValue));
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function sine() {
    try {
        displayValue = Math.sin(eval(displayValue));
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function cosine() {
    try {
        displayValue = Math.cos(eval(displayValue));
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function logarithm() {
    try {
        displayValue = Math.log(eval(displayValue));
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
