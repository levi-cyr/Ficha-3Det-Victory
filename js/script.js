const inputFile = document.querySelector("#picture_input")
const pictureImage = document.querySelector(".picture_image")
const pictureImageText = ""
let pictureData = "";

pictureImage.innerHTML = pictureImageText

inputFile.addEventListener("change", function (e) {
    const inputTarget = e.target
    const file = inputTarget.files[0]
    if (file) {
        const reader = new FileReader()
        reader.addEventListener("load", function (e) {
            const readerTarget = e.target
            const img = document.createElement("img")
            img.src = readerTarget.result
            img.classList.add("picture_img")
            pictureImage.innerHTML = ""
            pictureImage.appendChild(img)
            pictureData = readerTarget.result;
        });
        reader.readAsDataURL(file)
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const paMinInput = document.getElementById("pa-min")
    const paMaxInput = document.getElementById("pa-max")
    const pmMinInput = document.getElementById("pm-min")
    const pmMaxInput = document.getElementById("pm-max")
    const pvMinInput = document.getElementById("pv-min")
    const pvMaxInput = document.getElementById("pv-max")

    const paBar = document.getElementById("pa-bar")
    const pmBar = document.getElementById("pm-bar")
    const pvBar = document.getElementById("pv-bar")

    function updateBar(minInput, maxInput, bar) {
        const minValue = parseInt(minInput.value, 10) || 0
        const maxValue = parseInt(maxInput.value, 10) || 0

        const percentage = Math.max(0, Math.min(100, ((minValue / maxValue) * 100)))

        bar.style.width = `${percentage}%`
    }

    function incrementValue(inputId, bar, minInput, maxInput) {
        const input = document.getElementById(inputId)
        let value = parseInt(input.value, 10) || 0
        input.value = value + 1
        updateBar(minInput, maxInput, bar)
    }

    function decrementValue(inputId, bar, minInput, maxInput) {
        const input = document.getElementById(inputId)
        let value = parseInt(input.value, 10) || 0
        if (value > 0) {
            input.value = value - 1
        }
        updateBar(minInput, maxInput, bar)
    }

    document.getElementById('pa-min-up').addEventListener('click', function () {
        incrementValue('pa-min', paBar, paMinInput, paMaxInput)
    })

    document.getElementById('pa-min-down').addEventListener('click', function () {
        decrementValue('pa-min', paBar, paMinInput, paMaxInput)
    })

    document.getElementById('pa-max-up').addEventListener('click', function () {
        incrementValue('pa-max', paBar, paMinInput, paMaxInput)
    })

    document.getElementById('pa-max-down').addEventListener('click', function () {
        decrementValue('pa-max', paBar, paMinInput, paMaxInput)
    })

    document.getElementById('pm-min-up').addEventListener('click', function () {
        incrementValue('pm-min', pmBar, pmMinInput, pmMaxInput)
    })

    document.getElementById('pm-min-down').addEventListener('click', function () {
        decrementValue('pm-min', pmBar, pmMinInput, pmMaxInput)
    })

    document.getElementById('pm-max-up').addEventListener('click', function () {
        incrementValue('pm-max', pmBar, pmMinInput, pmMaxInput)
    })

    document.getElementById('pm-max-down').addEventListener('click', function () {
        decrementValue('pm-max', pmBar, pmMinInput, pmMaxInput)
    })

    document.getElementById('pv-min-up').addEventListener('click', function () {
        incrementValue('pv-min', pvBar, pvMinInput, pvMaxInput)
    })

    document.getElementById('pv-min-down').addEventListener('click', function () {
        decrementValue('pv-min', pvBar, pvMinInput, pvMaxInput)
    })

    document.getElementById('pv-max-up').addEventListener('click', function () {
        incrementValue('pv-max', pvBar, pvMinInput, pvMaxInput)
    })

    document.getElementById('pv-max-down').addEventListener('click', function () {
        decrementValue('pv-max', pvBar, pvMinInput, pvMaxInput)
    })

    document.getElementById('poder-up').addEventListener('click', function () {
        incrementValue('poder')
    })

    document.getElementById('poder-down').addEventListener('click', function () {
        decrementValue('poder')
    })

    document.getElementById('habilidade-up').addEventListener('click', function () {
        incrementValue('habilidade')
    })

    document.getElementById('habilidade-down').addEventListener('click', function () {
        decrementValue('habilidade')
    })

    document.getElementById('resistencia-up').addEventListener('click', function () {
        incrementValue('resistencia')
    })

    document.getElementById('resistencia-down').addEventListener('click', function () {
        decrementValue('resistencia')
    })

    paMinInput.addEventListener("input", () => updateBar(paMinInput, paMaxInput, paBar))
    paMaxInput.addEventListener("input", () => updateBar(paMinInput, paMaxInput, paBar))
    pmMinInput.addEventListener("input", () => updateBar(pmMinInput, pmMaxInput, pmBar))
    pmMaxInput.addEventListener("input", () => updateBar(pmMinInput, pmMaxInput, pmBar))
    pvMinInput.addEventListener("input", () => updateBar(pvMinInput, pvMaxInput, pvBar))
    pvMaxInput.addEventListener("input", () => updateBar(pvMinInput, pvMaxInput, pvBar))

    updateBar(paMinInput, paMaxInput, paBar)
    updateBar(pmMinInput, pmMaxInput, pmBar)
    updateBar(pvMinInput, pvMaxInput, pvBar)
})

function addInputArquetipo() {
    addInputField("#inputDivArquetipo", "inventario")
}

function switchTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tabcontent")
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"
    }

    const tablinks = document.getElementsByClassName("tablinks")
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "")
    }

    document.getElementById(tabName).style.display = "flex"
    evt.currentTarget.className += " active"
}

function switchTabAqtKit(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tabcontent")
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"
    }

    const tablinks = document.getElementsByClassName("tablinks")
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "")
    }

    document.getElementById(tabName).style.display = "block"
    evt.currentTarget.className += " active"
}

document.getElementById("defaultOpen").click()

function addInputVantagem1() {
    addCampoVantagem("#inputDivVantagem1", "vantagem")
}
function addInputVantagem2() {
    addCampoVantagem("#inputDivVantagem2", "vantagem")
}
function addInputVantagem3() {
    addCampoVantagem("#inputDivVantagem3", "vantagem")
}
function addInputVantagem4() {
    addCampoVantagem("#inputDivVantagem4", "vantagem")
}

function addInputDesvantagem1() {
    addCampoDesvantagem("#inputDivDesvantagem1", "desvantagem")
}

function addInputDesvantagem2() {
    addCampoDesvantagem("#inputDivDesvantagem2", "desvantagem")
}

function addInputDesvantagem3() {
    addCampoDesvantagem("#inputDivDesvantagem3", "desvantagem")
}

function addInputDesvantagem4() {
    addCampoDesvantagem("#inputDivDesvantagem4", "desvantagem")
}

function addInputTecnica1() {
    addCampoTecnica("#inputDivTecnicas1", "tecnica")
}
function addInputTecnica2() {
    addCampoTecnica("#inputDivTecnicas2", "tecnica")
}
function addInputTecnica3() {
    addCampoTecnica("#inputDivTecnicas3", "tecnica")
}
function addInputTecnica4() {
    addCampoTecnica("#inputDivTecnicas4", "tecnica")
}

function addInputPericia() {
    addPericiaField("#inputDivPericia", "pericia")
}

function addInputVantagemArquetipo() {
    addInputField("#inputDivVantagemArquetipo", "vantagemArquetipo")
}

function addInputDesvantagemArquetipo() {
    addInputField("#inputDivDesvantagemArquetipo", "desvantagemArquetipo")
}

function addInputExigencias() {
    addInputField("#inputDivExigencias", "exigenciasKit")
}

function addInputPoderes() {
    addInputField("#inputDivPoderes", "poderesKit")
}

function addInputInventario() {
    addInputField("#inputDivInventario", "inventario")
}

let nextInventarioId = 1

function addInputField(containerSelector, className) {
    const divContainer = document.createElement("div")
    divContainer.className = className + "Container"

    const inputTitulo = document.createElement("input")
    inputTitulo.type = "text"
    inputTitulo.placeholder = "Título"
    inputTitulo.className = className + "Titulo"
    inputTitulo.id = className + "Titulo" + nextInventarioId
    inputTitulo.name = className + "Titulo" + nextInventarioId

    const textareaDescricao = document.createElement("textarea")
    textareaDescricao.placeholder = "Descrição"
    textareaDescricao.className = className + "Descricao"
    textareaDescricao.id = className + "Descricao" + nextInventarioId
    textareaDescricao.name = className + "Descricao" + nextInventarioId

    const removeButton = document.createElement("button")
    removeButton.className = "add-button"
    removeButton.onclick = function () {
        divContainer.remove()
        adjustInventarioIds(); 
    };
    removeButton.innerHTML = "<i class='bi bi-dash-circle'></i>"

    divContainer.appendChild(inputTitulo)
    divContainer.appendChild(removeButton)
    divContainer.appendChild(textareaDescricao)

    document.querySelector(containerSelector).appendChild(divContainer)

    nextInventarioId++
}

function adjustInventarioIds() {
    const inventarioContainers = document.querySelectorAll(".inventarioContainer")
    inventarioContainers.forEach((container, index) => {
        const inputTitulo = container.querySelector(".inventarioTitulo")
        const textareaDescricao = container.querySelector(".inventarioDescricao")
        if (inputTitulo && textareaDescricao) {
            inputTitulo.id = "inventarioTitulo" + (index + 1)
            inputTitulo.name = "inventarioTitulo" + (index + 1)
            textareaDescricao.id = "inventarioDescricao" + (index + 1)
            textareaDescricao.name = "inventarioDescricao" + (index + 1)
        }
    });

    nextInventarioId = inventarioContainers.length + 1; 
}

function addCampoVantagem(containerSelector, className) {
    const divContainer = document.createElement("div")
    divContainer.className = className + "Container"
    const inputTitulo = document.createElement("input")
    inputTitulo.type = "text"
    inputTitulo.placeholder = "Vantagem"
    inputTitulo.className = className + "Titulo"

    const textareaDescricao = document.createElement("textarea")
    textareaDescricao.placeholder = "Descrição"
    textareaDescricao.className = className + "Descricao"

    const ptsVantagem = document.createElement("input")
    ptsVantagem.className = "ptsVantagem"
    ptsVantagem.placeholder = "PTs"

    const removeButton = document.createElement("button")
    removeButton.className = "add-button"
    removeButton.onclick = function () { divContainer.remove(); };
    removeButton.innerHTML = "<i class='bi bi-dash-circle'></i>"

    divContainer.appendChild(inputTitulo)
    divContainer.appendChild(removeButton)
    divContainer.appendChild(ptsVantagem)
    divContainer.appendChild(textareaDescricao)

    document.querySelector(containerSelector).appendChild(divContainer)
}

function addCampoDesvantagem(containerSelector, className) {
    const divContainer = document.createElement("div")
    divContainer.className = className + "Container"
    const inputTitulo = document.createElement("input")
    inputTitulo.type = "text"

    inputTitulo.placeholder = "Desvantagem"


    inputTitulo.className = className + "Titulo"

    const textareaDescricao = document.createElement("textarea")
    textareaDescricao.placeholder = "Descrição"
    textareaDescricao.className = className + "Descricao"

    const ptsDesvantagem = document.createElement("input")
    ptsDesvantagem.className = "ptsDesvantagem"
    ptsDesvantagem.placeholder = "PTs"

    const removeButton = document.createElement("button")
    removeButton.className = "add-button"
    removeButton.onclick = function () { divContainer.remove(); };
    removeButton.innerHTML = "<i class='bi bi-dash-circle'></i>"

    divContainer.appendChild(inputTitulo)
    divContainer.appendChild(removeButton)
    divContainer.appendChild(ptsDesvantagem)
    divContainer.appendChild(textareaDescricao)

    document.querySelector(containerSelector).appendChild(divContainer)
}

function addCampoTecnica(containerSelector, className) {
    const divContainer = document.createElement("div")
    divContainer.className = className + "Container"
    const inputTecnica = document.createElement("input")
    inputTecnica.type = "text"
    const inputRequisitos = document.createElement("input")
    inputRequisitos.type = "text"
    const inputAlcance = document.createElement("input")
    inputRequisitos.type = "text"
    const inputCusto = document.createElement("input")
    inputRequisitos.type = "text"
    const inputDuracao = document.createElement("input")
    inputRequisitos.type = "text"


    inputTecnica.placeholder = "Tecnicas"
    inputRequisitos.placeholder = "Requisitos"
    inputAlcance.placeholder = "Alcance"
    inputCusto.placeholder = "Custo"
    inputDuracao.placeholder = "Duração"

    inputTecnica.className = className + "Titulo"
    inputRequisitos.className = className + "Requisitos"
    inputAlcance.className = className + "Alcance"
    inputCusto.className = className + "Custo"
    inputDuracao.className = className + "Duracao"

    const textareaDescricao = document.createElement("textarea")
    textareaDescricao.placeholder = "Descrição"
    textareaDescricao.className = className + "Descricao"

    const ptsDesvantagem = document.createElement("input")
    ptsDesvantagem.className = "ptsTecnicas"
    ptsDesvantagem.placeholder = "Nivel"

    const removeButton = document.createElement("button")
    removeButton.className = "add-button"
    removeButton.onclick = function () { divContainer.remove(); };
    removeButton.innerHTML = "<i class='bi bi-dash-circle'></i>"

    divContainer.appendChild(inputTecnica)
    divContainer.appendChild(removeButton)
    divContainer.appendChild(ptsDesvantagem)
    divContainer.appendChild(inputRequisitos)
    divContainer.appendChild(inputAlcance)
    divContainer.appendChild(inputCusto)
    divContainer.appendChild(inputDuracao)
    divContainer.appendChild(textareaDescricao)

    document.querySelector(containerSelector).appendChild(divContainer)
}

let nextPericiaId = 1; 

function addPericiaField(containerSelector, className) {
    const divContainer = document.createElement("div")
    divContainer.className = className + "Container"

    const inputTitulo = document.createElement("input")
    inputTitulo.type = "text"
    inputTitulo.placeholder = "Pericia"
    inputTitulo.className = className + "Titulo"
    inputTitulo.id = className + nextPericiaId
    inputTitulo.name = className + nextPericiaId

    const removeButton = document.createElement("button")
    removeButton.className = "add-button"
    removeButton.onclick = function () {
        divContainer.remove()
        adjustPericiaIds()
    };
    removeButton.innerHTML = "<i class='bi bi-dash-circle'></i>"

    divContainer.appendChild(inputTitulo)
    divContainer.appendChild(removeButton)

    document.querySelector(containerSelector).appendChild(divContainer)

    nextPericiaId++
}

function adjustPericiaIds() {
    const periciaContainers = document.querySelectorAll(".periciaContainer");
    periciaContainers.forEach((container, index) => {
        const inputTitulo = container.querySelector(".periciaTitulo");
        inputTitulo.id = "pericia" + (index + 1)
        inputTitulo.name = "pericia" + (index + 1)
    });

    nextPericiaId = periciaContainers.length + 1
}

let kitCounter = 1

function addInputKits() {
    kitCounter++
    addInputFieldKit("#inputDivKits", kitCounter)
}

function addInputFieldKit(containerSelector, counter) {
    const divContainer = document.createElement("div")
    divContainer.className = "kitContainer"

    const titleRow = document.createElement("div")
    titleRow.className = "top-row"

    const inputTitulo = document.createElement("input")
    inputTitulo.type = "text"
    inputTitulo.placeholder = "Nome do kit " + counter
    inputTitulo.className = "arquetipoPoderesKitTitulo"

    const inputPts = document.createElement("input")
    inputPts.type = "text"
    inputPts.placeholder = "PTs"
    inputPts.id = "ptsTitulo"
    inputPts.className = "arquetipoPoderesKitTitulo"

    titleRow.appendChild(inputTitulo)
    titleRow.appendChild(inputPts)

    const h1Descricao = document.createElement("h1")
    h1Descricao.textContent = "Descrição"

    const editorDiv = document.createElement("div")
    editorDiv.id = "editorKit" + counter
    editorDiv.className = "editorKit"

    const removeButton = document.createElement("button")
    removeButton.className = "addKit-button"
    removeButton.onclick = function () {
        divContainer.remove();
        kitCounter--;
    };
    removeButton.innerHTML = "<i class='bi bi-dash-circle'></i>"

    divContainer.appendChild(removeButton)
    divContainer.appendChild(titleRow)
    divContainer.appendChild(h1Descricao)
    divContainer.appendChild(editorDiv)

    document.querySelector(containerSelector).appendChild(divContainer)

    new Quill('#editorKit' + counter, {
        theme: 'snow'
    });
}

const kitEditor = new Quill('#editorKit1', {
    theme: 'snow'
});

const quill = new Quill('#editor', {
    theme: 'snow'
});

const quill2 = new Quill('#editor2', {
    theme: 'snow'
});

/*const quill3 = new Quill('#editor3', {
    theme: 'snow'
});
*/
