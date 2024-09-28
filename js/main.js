function calculateImc() {
    result.style.display = "none";

    if (height.checkValidity() && weight.checkValidity()) { 
        valid.classList.remove("was-validated"); 
    } else { 
        valid.classList.add("was-validated"); 
        return; 
    }
        
    let imc = weight.valueAsNumber / Math.pow(height.valueAsNumber, 2);
    
    let output = "Resultado 👉 " + imc.toFixed(1);
    let alertClass = "container alert";
    let dieta = "";
    let habito = "";

    if (imc <= 18.5) {
        output += " → Bajo peso 😟.";
        alertClass += " alert-info";
        dieta = "Dieta rica en calorías, enfocada en proteínas, carbohidratos complejos y grasas saludables.";
        habito = "Entrenamiento de fuerza para ganar masa muscular.";
    }

    else if (imc <= 24.9) {
        output += " → Peso normal 😎.";
        alertClass += " alert-success";
        dieta = "Dieta equilibrada con porciones controladas, rica en frutas, verduras y proteínas magras.";
        habito = "Ejercicio regular que combine cardio y fuerza.";
    }

    else if (imc <= 29.9) {
        output += " → Sobrepeso 😦";
        alertClass += " alert-warning";
        dieta = "Dieta baja en calorías y azúcares refinados, rica en vegetales y proteínas magras.";
        habito = "Aumentar la actividad física diaria con ejercicios cardiovasculares.";
    }

    else if (imc <= 34.9) {
        output += " → Obesidad leve 😧.";
        alertClass += " alert-danger";
        dieta = "Dieta controlada en carbohidratos simples y enfocada en fibra y proteínas.";
        habito = "Plan de ejercicio moderado con enfoque en cardio y fuerza.";
    }

    else if (imc <= 40) {
        output += " → Obesidad media 😨.";
        alertClass += " alert-danger";
        dieta = "Dieta rica en proteínas y baja en grasas saturadas, enfocada en vegetales.";
        habito = "Incrementar el movimiento diario con ejercicios de bajo impacto.";
    }

    else {
        output += " → Obesidad mórbida 😱.";
        alertClass += " alert-danger";
        dieta = "Dieta hipocalórica controlada por un profesional, con nutrientes esenciales.";
        habito = "Rehabilitación física supervisada para mejorar la movilidad.";
    }

    if (!isNaN(imc)) {
        result.style.display = "";
        result.className = alertClass;
        result.innerHTML = `
            ${output}
            <br><strong>Dieta recomendada:</strong> ${dieta}
            <br><strong>Hábito saludable:</strong> ${habito}
        `;

        height.value = "";
        weight.value = "";
    }
}

const button = document.getElementById('button');
const valid  = document.getElementById('valid');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const result = document.getElementById('result');

button.addEventListener("click", calculateImc, false);
