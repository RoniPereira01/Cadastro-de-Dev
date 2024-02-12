function createLabel(text, htmlFor) {
    const label = document.createElement('label');
    label.htmlFor = htmlFor;
    label.innerText = text;
    return label;
}

function createInput(id, value, name, type = 'text', placeholder = '') {
    const input = document.createElement('input');
    input.id = id;
    input.value = value;
    input.name = name;
    input.type = type;
    input.placeholder = placeholder;
    return input;
}

const addTechBtn = document.getElementById('addTechBnt');
const form = document.getElementById('devForm');
const develops = [];
let inputRows = 0;

addTechBtn.addEventListener('click', function (ev) {
    const stackInputs = document.getElementById('stackInputs');

    const newRow = document.createElement('li');
    const rowIndex = inputRows;
    inputRows++;
    newRow.id = 'inputRows' + rowIndex;
    newRow.className = 'inputRow';

    const techNameLabel = createLabel('Nome:', 'techName-' + rowIndex);
    const techNameInput = createInput('techName' + rowIndex, null, 'techName');

    const expLabel = createLabel('Experiencia:')

    const id1 = 'expRadio-' + rowIndex + '.1'
    const expRadio1 = createInput(id1 + rowIndex, '0-2 anos', 'techExp-' + rowIndex, 'radio')
    const expLabel1 = createLabel('0-2 anos',  id1)

    const ide2 = 'expRadio-' + rowIndex + '.2'
    const expRadio2 = createInput(ide2 + rowIndex, '3-4 anos', 'techExp-' + rowIndex, 'radio')
    const expLabel2 = createLabel('3-4 anos',  ide2)

    const ide3 = 'expRadio-' + rowIndex + '.3'
    const expRadio3 = createInput(ide3 + rowIndex, '5+ anos', 'techExp-' + rowIndex, 'radio')
    const expLabel3 = createLabel('5+ anos',  ide3)


    const removeRowBTN = document.createElement('button')
    removeRowBTN.type = 'button'
    removeRowBTN.innerText = 'Remover'
    removeRowBTN.addEventListener('click', function(){
        stackInputs.removeChild(newRow)
    })

    newRow.append(techNameLabel, techNameInput,expLabel, expRadio1,expLabel1,expRadio2,expLabel2,expRadio3,expLabel3, removeRowBTN);

    stackInputs.appendChild(newRow);
})
 
form.addEventListener('submit', function (ev) {
    ev.preventDefault()

    const fullnameInput = document.getElementById('fullname')
    const inputRows = Document.queySelectorAll('.inputRow')

    inputRows.forEach(function(row){
        const tecName = document.querySelector('#' + row.id + 'input[name = "techName"]').value
        const techExp = document.querySelector('#' + row.id + 'input[type = "radio"]: checked').value
        technologies.push ({name: tecName,exp:techExp})

        const newDev ={ fullname : fullnameInput.value,technologies: technologies}
        developers.push(newDev)
        alert('Dev cadastrado com sucesso!')

        fullnameInput.value = ''
        inputRows.forEach(function(row){
            row.remove()
        })

        console.log(developers)
    })

})