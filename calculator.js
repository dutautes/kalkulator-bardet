// Scientific Calculator Functions
let display = document.getElementById('display');

function appendToDisplay(value) {
    const operators = ['+', '-', '*', '/', '^'];

    // Cek jika input adalah titik
    if (value === '.') {
        let lastNumber = display.value.split(/[\+\-\*\/\^]/).pop();
        if (lastNumber.includes('.')) return;
    }

    // Cek jika input adalah operator
    if (operators.includes(value)) {
        let lastChar = display.value.slice(-1);
        // Jika display kosong atau karakter terakhir sudah operator, hentikan
        if (display.value === '' || operators.includes(lastChar)) return;
    }

    display.value += value;
}


function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateLog() {
    try {
        display.value = Math.log10(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateSqrt() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateSin() {
    try {
        display.value = Math.sin(eval(display.value) * Math.PI / 180);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateCos() {
    try {
        display.value = Math.cos(eval(display.value) * Math.PI / 180);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculatePercent() {
    try {
        let value = eval(display.value); // ambil nilai sekarang
        display.value = value / 100;     // ubah jadi persen
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateTan() {
    try {
        display.value = Math.tan(eval(display.value) * Math.PI / 180);
    } catch (error) {
        display.value = 'Error';
    }
}


// Keyboard Support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    if (key >= '0' && key <= '9' || key === '.') {
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === '^') {
        appendToDisplay('**');
    } else if (key === '%') {
        calculatePercent();
    }

});

// Sequence Calculator Functions
function calculateArithmetic() {
    const a = parseFloat(document.getElementById('firstTerm').value);
    const d = parseFloat(document.getElementById('commonDiff').value);
    const n = parseInt(document.getElementById('numTerms').value);
    
    if (isNaN(a) || isNaN(d) || isNaN(n)) {
        alert('Mohon masukkan angka yang valid');
        return;
    }

    let sequence = [];
    let sum = 0;
    
    for (let i = 0; i < n; i++) {
        const term = a + i * d;
        sequence.push(term);
        sum += term;
    }

    document.getElementById('sequenceOutput').innerHTML = `
        <p><strong>Barisan:</strong> ${sequence.join(', ')}</p>
        <p><strong>Rumus Suku ke-n:</strong> Un = ${a} + (n-1) × ${d}</p>
    `;
    
    document.getElementById('seriesSum').innerHTML = `
        <p><strong>Jumlah:</strong> ${sum}</p>
        <p><strong>Rumus Jumlah:</strong> Sn = ${n}/2 × (${a} + ${a + (n-1)*d})</p>
    `;
}

function calculateGeometric() {
    const a = parseFloat(document.getElementById('firstTerm').value);
    const r = parseFloat(document.getElementById('commonDiff').value);
    const n = parseInt(document.getElementById('numTerms').value);
    
    if (isNaN(a) || isNaN(r) || isNaN(n)) {
        alert('Mohon masukkan angka yang valid');
        return;
    }

    
    let sequence = [];
    let sum = 0;
    
    for (let i = 0; i < n; i++) {
        const term = a * Math.pow(r, i);    
        sequence.push(term);
        sum += term;
    }

    let Un = a * Math.pow(r, n - 1); // hitung suku ke-n

    document.getElementById('sequenceOutput').innerHTML = `
        <p><strong>Barisan:</strong> ${sequence.join(', ')}</p>
        <p><strong>Rumus Suku ke-n:</strong> Un = ${a} × ${r}<sup>n-1</sup></p>
        <p><strong>Hasil Un:</strong> ${Un}</p>
    `;
    
    document.getElementById('seriesSum').innerHTML = `
        <p><strong>Jumlah:</strong> ${sum}</p>
        <p><strong>Rumus Jumlah:</strong> Sn = ${a}(1-${r}<sup>${n}</sup>)/(1-${r})</p>
    `;
}

function calculateInfinite() {
    const a = parseFloat(document.getElementById('firstTerm').value);
    const r = parseFloat(document.getElementById('commonDiff').value);
    
    if (isNaN(a) || isNaN(r)) {
        alert('Mohon masukkan angka yang valid');
        return;
    }

    if (Math.abs(r) >= 1) {
        document.getElementById('sequenceOutput').innerHTML = `
            <p>Deret divergen karena |r| ≥ 1</p>
        `;
        document.getElementById('seriesSum').innerHTML = '';
        return;
    }
    const sum = a / (1 - r);

    let Un = a + (n - 1) * d; // hitung suku ke-n

    document.getElementById('sequenceOutput').innerHTML = `
        <p><strong>Barisan:</strong> ${sequence.join(', ')}</p>
        <p><strong>Rumus Suku ke-n:</strong> Un = ${a} + (n-1) × ${d}</p>
        <p><strong>Hasil Un:</strong> ${Un}</p>
    `;
        
    document.getElementById('seriesSum').innerHTML = `
        <p><strong>Jumlah (Sn):</strong> ${sum}</p>
        <p><strong>Rumus Jumlah:</strong> Sn = ${n}/2 × (${a} + ${a + (n-1)*d})</p>
    `;

}