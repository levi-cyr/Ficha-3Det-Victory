const fields = [
    "inputNomeBio", "ptsBio", "xpBio",
    "pa-min", "pa-max",
    "pm-min", "pm-max",
    "pv-min", "pv-max",
    "poder", "habilidade", "resistencia",
    "pericia"
];

function saveData() {
    // Bio
    let nomeBioData = document.getElementById("inputNomeBio").value
    let ptsBio = document.getElementById("ptsBio").value
    let xpBio = document.getElementById("xpBio").value

    let pa_atual = document.getElementById("pa-min").value
    let pa_max = document.getElementById("pa-max").value

    let pm_atual = document.getElementById("pm-min").value
    let pm_max = document.getElementById("pm-max").value

    let pv_atual = document.getElementById("pv-min").value
    let pv_max = document.getElementById("pv-max").value

    let poder = document.getElementById("poder").value
    let habilidade = document.getElementById("habilidade").value
    let resistencia = document.getElementById("resistencia").value

    let periciaFixa = document.getElementById("pericia").value

    let periciasAdicionadas = []
    const periciaContainers = document.querySelectorAll(".periciaContainer")
    periciaContainers.forEach(container => {
        const periciaInput = container.querySelector(".periciaTitulo")
        if (periciaInput) {
            periciasAdicionadas.push(periciaInput.value)
        }
    });

    let inventarioTituloFixo = document.getElementById("inventarioTitulo").value
    let inventarioDescricaoFixo = document.getElementById("inventarioDescricao").value

    let inventarios = []
    const inventarioContainers = document.querySelectorAll(".inventarioContainer")
    inventarioContainers.forEach(container => {
        const tituloInput = container.querySelector(".inventarioTitulo")
        const descricaoTextarea = container.querySelector(".inventarioDescricao")
        if (tituloInput && descricaoTextarea) {
            let inventario = {
                titulo: tituloInput.value,
                descricao: descricaoTextarea.value
            };
            inventarios.push(inventario)
        }
    });

    let anotacoesBio = quill.getText()

    //Arquetipos e kits
    let nomeArquetipoData = document.getElementById("arquetipoNome").value
    let ptsTituloArquetipo = document.getElementById("ptsTituloArquetipo").value
    let descricaoArquetipo = quill2.getText()

    let vantagemArquetipo = document.getElementById("vantagemArquetipo").value
    let vantagensAdicionadas = [];
    const vantagemContainers = document.querySelectorAll("#inputDivVantagemArquetipo .vantagemArquetipoContainer");
    vantagemContainers.forEach(container => {
        const tituloInput = container.querySelector(".vantagemArquetipoTitulo");
        if (tituloInput && tituloInput.id !== "vantagemArquetipo") {
            vantagensAdicionadas.push(tituloInput.value);
        }
    });

    let desvantagemArquetipo = document.getElementById("desvantagemArquetipo").value
    let desvantagensAdicionadas = [];
    const desvantagemContainers = document.querySelectorAll("#inputDivDesvantagemArquetipo .desvantagemArquetipoContainer");
    desvantagemContainers.forEach(container => {
        const tituloInput = container.querySelector(".desvantagemArquetipoTitulo");
        if (tituloInput) {
            desvantagensAdicionadas.push(tituloInput.value);
        }
    });

    let kitFixoNome = document.getElementById("kitFixoNome").value
    let ptsTituloKit = document.getElementById("ptsTituloKit").value
    let descricaoKitFixo = kitEditor.getText()

    let kitsAdicionados = [];
    const kitContainers = document.querySelectorAll(".kitContainer");
    kitContainers.forEach(container => {
        const tituloInput = container.querySelector(".arquetipoPoderesKitTitulo");
        const ptsInput = container.querySelector("#ptsTitulo");
        const editorDiv = container.querySelector(".editorKit .ql-editor");
        if (tituloInput && ptsInput && editorDiv) {
            let kit = {
                titulo: tituloInput.value,
                pts: ptsInput.value,
                descricao: editorDiv ? editorDiv.innerText : ''
            };
            kitsAdicionados.push(kit);
        }
    });


    let exigenciaArquetipo = document.getElementById("exigenciaArquetipo").value;
    let exigenciasAdicionadas = [];
    const exigenciaContainers = document.querySelectorAll("#inputDivExigencias .exigenciasKitContainer");
    exigenciaContainers.forEach(container => {
        const tituloInput = container.querySelector(".exigenciasKitTitulo");
        if (tituloInput && tituloInput.id !== "exigenciaArquetipo") {
            exigenciasAdicionadas.push(tituloInput.value);
        }
    });

    let poderArquetipo = document.getElementById("poderKits").value;

    let poderesAdicionados = [];
    const poderContainers = document.querySelectorAll("#inputDivPoderes .poderesKitContainer");
    poderContainers.forEach(container => {
        const tituloInput = container.querySelector(".poderesKitTitulo");
        if (tituloInput && tituloInput.id !== "poderKits") {
            poderesAdicionados.push(tituloInput.value);
        }
    });


    //Vantagens fixas e adicionais
    function coletarVantagens(selector) {
        let vantagens = [];
        const vantagemContainers = document.querySelectorAll(selector);
        vantagemContainers.forEach((container, index) => {
            const tituloInput = container.querySelector(".vantagemTitulo");
            const ptsInput = container.querySelector(".ptsVantagem");
            const descricaoTextarea = container.querySelector(".vantagemDescricao");
            if (tituloInput && ptsInput && descricaoTextarea) {
                let vantagem = {
                    id: index + 1,
                    titulo: tituloInput.value,
                    pts: ptsInput.value,
                    descricao: descricaoTextarea.value
                };
                vantagens.push(vantagem);
            }
        });
        return vantagens;
    }

    let vantagensAba1 = coletarVantagens("#inputDivVantagem1 .vantagemContainer, #inputDivVantagem1 .divVantagens");
    let vantagensAba2 = coletarVantagens("#inputDivVantagem2 .vantagemContainer, #inputDivVantagem2 .divVantagens");
    let vantagensAba3 = coletarVantagens("#inputDivVantagem3 .vantagemContainer, #inputDivVantagem3 .divVantagens");
    let vantagensAba4 = coletarVantagens("#inputDivVantagem4 .vantagemContainer, #inputDivVantagem4 .divVantagens");

    //Desvantagens fixas e adicionais
    function coletarDesvantagens(selector) {
        let desvantagens = [];
        const desvantagemContainers = document.querySelectorAll(selector);
        desvantagemContainers.forEach((container, index) => {
            const tituloInput = container.querySelector(".desvantagemTitulo");
            const ptsInput = container.querySelector(".ptsDesvantagem");
            const descricaoTextarea = container.querySelector(".desvantagemDescricao");
            if (tituloInput && ptsInput && descricaoTextarea) {
                let desvantagem = {
                    id: index + 1,
                    titulo: tituloInput.value,
                    pts: ptsInput.value,
                    descricao: descricaoTextarea.value
                };
                desvantagens.push(desvantagem);
            }
        });
        return desvantagens;
    }

    let desvantagensAba1 = coletarDesvantagens("#inputDivDesvantagem1 .desvantagemContainer, #inputDivDesvantagem1 .divDesvantagens");
    let desvantagensAba2 = coletarDesvantagens("#inputDivDesvantagem2 .desvantagemContainer, #inputDivDesvantagem2 .divDesvantagens");
    let desvantagensAba3 = coletarDesvantagens("#inputDivDesvantagem3 .desvantagemContainer, #inputDivDesvantagem3 .divDesvantagens");
    let desvantagensAba4 = coletarDesvantagens("#inputDivDesvantagem4 .desvantagemContainer, #inputDivDesvantagem4 .divDesvantagens");

    function coletarTecnicas(selector) {
        let tecnicas = [];
        const tecnicaContainers = document.querySelectorAll(selector);
        tecnicaContainers.forEach((container, index) => {
            const tituloInput = container.querySelector(".tecnicaTitulo");
            const ptsInput = container.querySelector(".ptsTecnicas");
            const requisitosInput = container.querySelector(".tecnicaRequisitos");
            const alcanceInput = container.querySelector(".tecnicaAlcance");
            const custoInput = container.querySelector(".tecnicaCusto");
            const duracaoInput = container.querySelector(".tecnicaDuracao");
            const descricaoTextarea = container.querySelector(".tecnicaDescricao");

            if (tituloInput && ptsInput && requisitosInput && alcanceInput && custoInput && duracaoInput && descricaoTextarea) {
                let tecnica = {
                    id: index + 1,
                    titulo: tituloInput.value,
                    pts: ptsInput.value,
                    requisitos: requisitosInput.value,
                    alcance: alcanceInput.value,
                    custo: custoInput.value,
                    duracao: duracaoInput.value,
                    descricao: descricaoTextarea.value
                };
                tecnicas.push(tecnica);
            }
        });
        return tecnicas;
    }

    let tecnicasAba1 = coletarTecnicas("#inputDivTecnicas1 .tecnicaContainer, #inputDivTecnicas1 .divTecnicas")
    let tecnicasAba2 = coletarTecnicas("#inputDivTecnicas2 .tecnicaContainer, #inputDivTecnicas2 .divTecnicas")
    let tecnicasAba3 = coletarTecnicas("#inputDivTecnicas3 .tecnicaContainer, #inputDivTecnicas3 .divTecnicas")
    let tecnicasAba4 = coletarTecnicas("#inputDivTecnicas4 .tecnicaContainer, #inputDivTecnicas4 .divTecnicas")


    let data = []
    data.push(nomeBioData)
    data.push(ptsBio)
    data.push(xpBio)

    data.push(pa_atual)
    data.push(pa_max)

    data.push(pm_atual)
    data.push(pm_max)

    data.push(pv_atual)
    data.push(pv_max)

    data.push(poder)
    data.push(habilidade)
    data.push(resistencia)

    data.push(periciaFixa)
    data.push(periciasAdicionadas.join(", "))

    data.push(inventarioTituloFixo)
    data.push(inventarioDescricaoFixo)

    inventarios.forEach((inventario, index) => {
        data.push(inventario.titulo)
        data.push(inventario.descricao)
    });

    data.push(anotacoesBio)

    //Arquetipo e kits
    let dataArquetipoKit = []

    dataArquetipoKit.push(nomeArquetipoData)
    dataArquetipoKit.push(ptsTituloArquetipo)
    dataArquetipoKit.push(descricaoArquetipo)

    dataArquetipoKit.push(vantagemArquetipo)
    dataArquetipoKit.push(vantagensAdicionadas.join(", "))

    dataArquetipoKit.push(desvantagemArquetipo)
    dataArquetipoKit.push(desvantagensAdicionadas.join(", "))

    dataArquetipoKit.push(kitFixoNome) //[7]
    dataArquetipoKit.push(ptsTituloKit) //[8]
    dataArquetipoKit.push(descricaoKitFixo) //[9]
    dataArquetipoKit.push(JSON.stringify(kitsAdicionados)) //[10]

    dataArquetipoKit.push(exigenciaArquetipo)
    dataArquetipoKit.push(exigenciasAdicionadas.join(", "))

    dataArquetipoKit.push(poderArquetipo)
    dataArquetipoKit.push(poderesAdicionados.join(", "))


    let mainData = {
        bio: data,
        fotoPersonagem: pictureData,
        arquetipoKit: dataArquetipoKit,
        vantagens1: vantagensAba1,
        vantagens2: vantagensAba2,
        vantagens3: vantagensAba3,
        vantagens4: vantagensAba4,
        desvantagens1: desvantagensAba1,
        desvantagens2: desvantagensAba2,
        desvantagens3: desvantagensAba3,
        desvantagens4: desvantagensAba4,
        tecnicas1: tecnicasAba1,
        tecnicas2: tecnicasAba2,
        tecnicas3: tecnicasAba3,
        tecnicas4: tecnicasAba4,
    }

    let dataString = JSON.stringify(mainData);

    let file = new Blob([dataString], { type: "text/plain" });
    let anchor = document.createElement("a");
    anchor.href = URL.createObjectURL(file);
    anchor.download = "Data.txt";
    anchor.click();
}

function loadData() {
    const file = document.getElementById("load-btn").files[0]
    const reader = new FileReader()

    reader.onloadend = function () {
        const load = JSON.parse(reader.result)

        const bioData = load.bio
        const pictureData = load.fotoPersonagem;
        const arquetipoData = load.arquetipoKit
        const vantagens1 = load.vantagens1
        const vantagens2 = load.vantagens2
        const vantagens3 = load.vantagens3
        const vantagens4 = load.vantagens4
        const desvantagens1 = load.desvantagens1
        const desvantagens2 = load.desvantagens2
        const desvantagens3 = load.desvantagens3
        const desvantagens4 = load.desvantagens4

        const tecnicas1 = load.tecnicas1
        const tecnicas2 = load.tecnicas2
        const tecnicas3 = load.tecnicas3
        const tecnicas4 = load.tecnicas4

        let currentIndex = 0

        // Carregar bio
        fields.forEach((field, index) => {
            if (document.getElementById(field) && bioData[index] !== undefined) {
                document.getElementById(field).value = bioData[index] || ''
                currentIndex++
            }
        })

        //Carregar perícias
        const periciaContainer = document.querySelector("#inputDivPericia")
        const periciasAdicionadas = bioData[currentIndex].split(", ")
        currentIndex++

        periciasAdicionadas.forEach(periciaTitulo => {
            addPericiaField("#inputDivPericia", "pericia")
            const periciaElements = periciaContainer.querySelectorAll(".periciaContainer .periciaTitulo")
            if (periciaElements.length > 0) {
                periciaElements[periciaElements.length - 1].value = periciaTitulo
            }
        })

        //Carregar inventário fixo
        document.getElementById("inventarioTitulo").value = bioData[currentIndex]
        currentIndex++
        document.getElementById("inventarioDescricao").value = bioData[currentIndex]
        currentIndex++

        //Carregar inventário adicional
        const inventarioContainer = document.querySelector("#inputDivInventario")
        const inventarios = []
        while (currentIndex < bioData.length - 1) {
            const inventarioTitulo = bioData[currentIndex]
            currentIndex++
            const inventarioDescricao = bioData[currentIndex]
            currentIndex++

            inventarios.push({ titulo: inventarioTitulo, descricao: inventarioDescricao })
        }

        inventarios.forEach(inventario => {
            addInputField("#inputDivInventario", "inventario")
            const inventarioElements = inventarioContainer.querySelectorAll(".inventarioContainer")
            if (inventarioElements.length > 0) {
                const lastInventarioElement = inventarioElements[inventarioElements.length - 1]
                const tituloElement = lastInventarioElement.querySelector(".inventarioTitulo")
                const descricaoElement = lastInventarioElement.querySelector(".inventarioDescricao")

                if (tituloElement) {
                    tituloElement.value = inventario.titulo
                }
                if (descricaoElement) {
                    descricaoElement.value = inventario.descricao
                }
            }
        })

        if (currentIndex < bioData.length) {
            quill.root.innerHTML = bioData[currentIndex] || ''
        }

        // Carregar arquetipos e kits
        if (arquetipoData && arquetipoData.length > 0) {
            document.getElementById("arquetipoNome").value = arquetipoData[0]
            document.getElementById("ptsTituloArquetipo").value = arquetipoData[1]
            quill2.root.innerHTML = arquetipoData[2] || ''

            document.getElementById("vantagemArquetipo").value = arquetipoData[3]
            const vantagensAdicionadas = arquetipoData[4].split(", ")
            vantagensAdicionadas.forEach(vantagemTitulo => {
                const container = document.querySelector("#inputDivVantagemArquetipo")
                if (container) {
                    addInputField("#inputDivVantagemArquetipo", "vantagemArquetipo")
                    const vantagemElements = container.querySelectorAll(".vantagemArquetipoTitulo")
                    if (vantagemElements.length > 0) {
                        vantagemElements[vantagemElements.length - 1].value = vantagemTitulo
                    }
                }
            });

            document.getElementById("desvantagemArquetipo").value = arquetipoData[5];
            const desvantagensAdicionadas = arquetipoData[6].split(", ");
            desvantagensAdicionadas.forEach(desvantagemTitulo => {
                const container = document.querySelector("#inputDivDesvantagemArquetipo");
                if (container) {
                    addInputField("#inputDivDesvantagemArquetipo", "desvantagemArquetipo");
                    const desvantagemElements = container.querySelectorAll(".desvantagemArquetipoTitulo");
                    if (desvantagemElements.length > 0) {
                        desvantagemElements[desvantagemElements.length - 1].value = desvantagemTitulo;
                    }
                }
            });

            document.getElementById("kitFixoNome").value = arquetipoData[7];
            document.getElementById("ptsTituloKit").value = arquetipoData[8];
            kitEditor.root.innerHTML = arquetipoData[9] || ''

            const kitsAdicionados = JSON.parse(arquetipoData[10]);
            const kitContainer = document.querySelector("#inputDivKits")
            kitsAdicionados.forEach((kit, index) => {
                addInputKits();
                const kitElements = kitContainer.querySelectorAll(".kitContainer")
                if (kitElements.length > 0) {
                    const lastKitElement = kitElements[kitElements.length - 1]
                    const tituloElement = lastKitElement.querySelector(".arquetipoPoderesKitTitulo")
                    const ptsElement = lastKitElement.querySelector("#ptsTitulo")
                    const descricaoElement = lastKitElement.querySelector(".editorKit .ql-editor")

                    if (tituloElement) {
                        tituloElement.value = kit.titulo
                    }
                    if (ptsElement) {
                        ptsElement.value = kit.pts
                    }
                    if (descricaoElement) {
                        descricaoElement.innerHTML = kit.descricao
                    }
                }
            })

            document.getElementById("exigenciaArquetipo").value = arquetipoData[11]
            const exigenciasAdicionadas = arquetipoData[12].split(", ")
            exigenciasAdicionadas.forEach(exigenciaTitulo => {
                const container = document.querySelector("#inputDivExigencias")
                if (container) {
                    addInputExigencias();
                    const exigenciaElements = container.querySelectorAll(".exigenciasKitTitulo")
                    if (exigenciaElements.length > 0) {
                        exigenciaElements[exigenciaElements.length - 1].value = exigenciaTitulo
                    }
                }
            })

            document.getElementById("poderKits").value = arquetipoData[13]
            const poderesAdicionados = arquetipoData[14].split(", ")
            poderesAdicionados.forEach(poderTitulo => {
                const container = document.querySelector("#inputDivPoderes")
                if (container) {
                    addInputPoderes();
                    const poderElements = container.querySelectorAll(".poderesKitTitulo")
                    if (poderElements.length > 0) {
                        poderElements[poderElements.length - 1].value = poderTitulo
                    }
                }
            })
        }

        // Carregar vantagens fixas e adicionais
        function carregarVantagens(vantagens, inputDivId) {
            const fixedElement = document.querySelector(`#${inputDivId} .divVantagens`)
            if (vantagens.length > 0) {
                const itemFixo = vantagens[0]
                if (itemFixo) {
                    fixedElement.querySelector('.vantagemTitulo').value = itemFixo.titulo
                    fixedElement.querySelector('.ptsVantagem').value = itemFixo.pts
                    fixedElement.querySelector('.vantagemDescricao').value = itemFixo.descricao
                }

                vantagens.slice(1).forEach(vantagem => {
                    if (inputDivId === 'inputDivVantagem1') addInputVantagem1()
                    if (inputDivId === 'inputDivVantagem2') addInputVantagem2()
                    if (inputDivId === 'inputDivVantagem3') addInputVantagem3()
                    if (inputDivId === 'inputDivVantagem4') addInputVantagem4()

                    const vantagemContainer = document.querySelector(`#${inputDivId}`)
                    const vantagemElements = vantagemContainer.querySelectorAll(".vantagemContainer")
                    if (vantagemElements.length > 0) {
                        const lastVantagemElement = vantagemElements[vantagemElements.length - 1]
                        lastVantagemElement.querySelector('.vantagemTitulo').value = vantagem.titulo
                        lastVantagemElement.querySelector('.ptsVantagem').value = vantagem.pts
                        lastVantagemElement.querySelector('.vantagemDescricao').value = vantagem.descricao
                    }
                });
            }
        }

        carregarVantagens(vantagens1, "inputDivVantagem1")
        carregarVantagens(vantagens2, "inputDivVantagem2")
        carregarVantagens(vantagens3, "inputDivVantagem3")
        carregarVantagens(vantagens4, "inputDivVantagem4")

        // Carregar desvantagens fixas e adicionais
        function carregarDesvantagens(desvantagens, inputDivId) {
            const fixedElement = document.querySelector(`#${inputDivId} .divDesvantagens`)
            if (desvantagens.length > 0) {
                const itemFixo = desvantagens[0]
                if (itemFixo) {
                    fixedElement.querySelector('.desvantagemTitulo').value = itemFixo.titulo
                    fixedElement.querySelector('.ptsDesvantagem').value = itemFixo.pts
                    fixedElement.querySelector('.desvantagemDescricao').value = itemFixo.descricao
                }
                desvantagens.slice(1).forEach(desvantagem => {
                    if (inputDivId === 'inputDivDesvantagem1') addInputDesvantagem1()
                    if (inputDivId === 'inputDivDesvantagem2') addInputDesvantagem2()
                    if (inputDivId === 'inputDivDesvantagem3') addInputDesvantagem3()
                    if (inputDivId === 'inputDivDesvantagem4') addInputDesvantagem4()

                    const desvantagemContainer = document.querySelector(`#${inputDivId}`)
                    const desvantagemElements = desvantagemContainer.querySelectorAll(".desvantagemContainer")
                    if (desvantagemElements.length > 0) {
                        const lastDesvantagemElement = desvantagemElements[desvantagemElements.length - 1]
                        lastDesvantagemElement.querySelector('.desvantagemTitulo').value = desvantagem.titulo
                        lastDesvantagemElement.querySelector('.ptsDesvantagem').value = desvantagem.pts
                        lastDesvantagemElement.querySelector('.desvantagemDescricao').value = desvantagem.descricao
                    }
                });
            }
        }

        carregarDesvantagens(desvantagens1, "inputDivDesvantagem1")
        carregarDesvantagens(desvantagens2, "inputDivDesvantagem2")
        carregarDesvantagens(desvantagens3, "inputDivDesvantagem3")
        carregarDesvantagens(desvantagens4, "inputDivDesvantagem4")

        if (pictureData) {
            const pictureImage = document.querySelector(".picture_image");
            if (pictureImage) {
                const img = document.createElement("img");
                img.src = pictureData;
                img.classList.add("picture_img");
                pictureImage.innerHTML = "";
                pictureImage.appendChild(img);
            }
        }

        function carregarTecnicas(tecnicas, inputDivId) {
            const fixedElement = document.querySelector(`#${inputDivId} .divTecnicas`);
            if (tecnicas.length > 0) {
                const itemFixo = tecnicas[0];
                if (itemFixo && fixedElement) {
                    const tituloElement = fixedElement.querySelector('.tecnicaTitulo');
                    const ptsElement = fixedElement.querySelector('.ptsTecnicas');
                    const requisitosElement = fixedElement.querySelector('.tecnicaRequisitos');
                    const alcanceElement = fixedElement.querySelector('.tecnicaAlcance');
                    const custoElement = fixedElement.querySelector('.tecnicaCusto');
                    const duracaoElement = fixedElement.querySelector('.tecnicaDuracao');
                    const descricaoElement = fixedElement.querySelector('.tecnicaDescricao');


                    if (tituloElement) tituloElement.value = itemFixo.titulo;
                    if (ptsElement) ptsElement.value = itemFixo.pts;
                    if (requisitosElement) requisitosElement.value = itemFixo.requisitos;
                    if (alcanceElement) alcanceElement.value = itemFixo.alcance;
                    if (custoElement) custoElement.value = itemFixo.custo;
                    if (duracaoElement) duracaoElement.value = itemFixo.duracao;
                    if (descricaoElement) descricaoElement.value = itemFixo.descricao;
                }

                tecnicas.slice(1).forEach(tecnica => {
                    if (inputDivId === 'inputDivTecnicas1') addInputTecnica1();
                    if (inputDivId === 'inputDivTecnicas2') addInputTecnica2();
                    if (inputDivId === 'inputDivTecnicas3') addInputTecnica3();
                    if (inputDivId === 'inputDivTecnicas4') addInputTecnica4();

                    const container = document.querySelector(`#${inputDivId}`);
                    const tecnicaElements = container.querySelectorAll(".tecnicaContainer");
                    if (tecnicaElements.length > 0) {
                        const lastTecnicaElement = tecnicaElements[tecnicaElements.length - 1];
                        const tituloElement = lastTecnicaElement.querySelector(".tecnicaTitulo");
                        const ptsElement = lastTecnicaElement.querySelector(".ptsTecnicas");
                        const requisitosElement = lastTecnicaElement.querySelector(".tecnicaRequisitos");
                        const alcanceElement = lastTecnicaElement.querySelector(".tecnicaAlcance");
                        const custoElement = lastTecnicaElement.querySelector(".tecnicaCusto");
                        const duracaoElement = lastTecnicaElement.querySelector(".tecnicaDuracao");
                        const descricaoElement = lastTecnicaElement.querySelector(".tecnicaDescricao");

                        if (tituloElement) tituloElement.value = tecnica.titulo;
                        if (ptsElement) ptsElement.value = tecnica.pts;
                        if (requisitosElement) requisitosElement.value = tecnica.requisitos;
                        if (alcanceElement) alcanceElement.value = tecnica.alcance;
                        if (custoElement) custoElement.value = tecnica.custo;
                        if (duracaoElement) duracaoElement.value = tecnica.duracao;
                        if (descricaoElement) descricaoElement.value = tecnica.descricao;
                    }
                });
            }
        }


        carregarTecnicas(tecnicas1, 'inputDivTecnicas1');
        carregarTecnicas(tecnicas2, 'inputDivTecnicas2');
        carregarTecnicas(tecnicas3, 'inputDivTecnicas3');
        carregarTecnicas(tecnicas4, 'inputDivTecnicas4');
    };


    if (file) {
        reader.readAsText(file)
    } else {
        alert("Nenhum arquivo selecionado")
    }
}
