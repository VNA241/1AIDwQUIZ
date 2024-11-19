function toggleInfoDisplay(elementId, content) {
    const infoContainer = document.getElementById(elementId);
    if (!infoContainer.classList.contains("show")) {
        infoContainer.classList.add("show");
        infoContainer.innerHTML = content;
    } else {
        infoContainer.classList.remove("show");
        infoContainer.innerHTML = "";
    }
}

function mostrarParada() {
    toggleInfoDisplay("parada-info", `
        <section class="details">
            <div class="left">
                <h2>Parada Cardiorespiratória (PCR)</h2>
                A parada cardiorrespiratória ocorre quando o coração para de bater e a pessoa para de respirar.<br> 
                    Nessa situação, o socorro médico precisa ser acionado imediatamente.<br>
                    Enquanto se aguarda o atendimento, a massagem cardíaca deve ser iniciada para que o coração volte a pulsar.<br>
                    Segundo o protocolo da <strong>Sociedade Brasileira de Cardiologia</strong>, “Os aspectos principais a serem observados nas compressões são frequência, profundidade, retorno do tórax a cada compressão e interrupção mínima”.
                    <h3>Primeiros Socorros</h3>
                    <ol>
                        <li>Posicione-se ao lado da vítima e mantenha seus joelhos com certa distância um do outro, para que tenha melhor estabilidade (é melhor que a pessoa esteja deitada no chão);</li>
                        <li>Coloque o calcanhar da mão no esterno (osso que fica no centro do peito da pessoa).<br> Coloque a outra mão em cima da primeira mão e interligue os dedos;</li>
                        <li>Usando o peso do seu corpo, pressione diretamente para baixo de 5 a 6 centímetros no peito;</li>
                        <li>Permita o retorno completo do tórax após cada compressão, evitando “descansar” apoiado sobre o tórax da vítima. O movimento de sobe e desce deve ser contínuo;</li>
                        <li>Repita o movimento até que uma ambulância chegue e os profissionais assumam os cuidados.</li>
                    </ol>
            </div>
            <div class="right">
                <img src="img/CPR.gif" alt="CPR Process">
            </div>
        </section>
    `);
}

function mostrarDesmaio() {
    toggleInfoDisplay("desmaio-info", `
        <h2>Desmaios</h2>
        Os desmaios são definidos como uma mudança repentina e temporária no corpo, normalmente causado por uma perda breve de consciência, mas com recuperação espontânea.<br> Eles também são conhecidos como síncopes, sendo responsáveis por uma porcentagem considerável de atendimentos diários nos hospitais e podendo estar ligados a vários possíveis motivos, desde causas benignas a causas malignas.<br>
            É importante ressaltar que todos os desmaios tem uma causa principal que é a hipotensão, ou seja, a pressão baixa.
            <h3>Primeiros Socorros</h3>

            <ul>
                <li>Verifique a respiração e os batimentos cardíacos;</li>
                <li>Levante o queixo da vítima para facilitar a passagem de ar;</li>
                <li>Se for possível e não for agravar ainda mais a situação da vítima, coloque-a deitada de costas em um lugar confortável retirando objetos que ela possa se machucar, como pulseiras, relógios e óculos;</li>
                <li>Afrouxe as roupas da vítima;</li>
                <li>Se for possível e não for prejudicar o estado da vítima, eleve suas pernas, cuidadosamente, pois isso pode ajudar a pressão voltar ao normal caso ela esteja baixa;</li>
                <li>Se por acaso o estado de perda de consciência passar, deixe a vítima descansar enquanto aguarda o atendimento médico.</li>
            </ul>

            <img src="img/desmai.jpg" alt="desmaios-socorro">
    `);
}

function mostrarCortes() {
    toggleInfoDisplay("cortes-info", `
        <div class="carousel">
                <div class="carousel-item active" id="cortes-intro">
                    <h2>Cortes</h2>
                    <p>Cortes são ferimentos que acontecem com frequência em casa. Existem diversas formas de se machucar, seja com uma faca na cozinha, escorregando no chão molhado, pisando em um caco de vidro ou esbarrando em objetos pontudos.
                    <h3>Dicas de cuidados gerais</h3>
                    <ul>
                        <li>Jamais coloque álcool, pomadas e outros produtos sobre o ferimento. Somente lave com água e sabão;</li>
                        <li>Não assopre o ferimento para não contaminar o local;</li>
                        <li>Procure ajuda médica se surgirem sinais de <strong>infecção na região do corte</strong>;</li>
                    </ul>
                    É importante saber cuidar do ferimento para que ele não infeccione.</p>
                    <button onclick="showCarouselItem('superficial')">Próximo</button>
                </div>

                <div class="carousel-item" id="superficial">
                    <h2>Primeiros socorros em cortes superficiais</h2>
                    <ul>
                        <li>A primeira coisa a ser feita é ter certeza de que a ferida não é grave. Em seguida deve-se lavar as mãos com água e sabão;</li>
                        <li> Lave a ferida com muito cuidado com água e sabão. Certifique-se de que o local ficou bem limpo e livre de partículas que poderiam causar infecção;</li>
                        <li>Aplique um anti-séptico e seque o local em volta da ferida;</li>
                        <li> De acordo com a lesão, coloque uma gaze ou pano limpo para cobrir o ferimento. Não use algodão, pois as fibras do material podem colar na ferida, provocando novamente sangramento ao retirar o curativo;</li>
                        <li>Mantenha o corte limpo e seco para facilitar a cicatrização.</li>
                    </ul>
                    <img src="img/cortsup.jpg" alt="Corte Superficial" width="640" height="480">
                    <button onclick="showCarouselItem('cortes-intro')">Voltar</button>
                    <button onclick="showCarouselItem('profundos')">Próximo</button>
                </div>

                <div class="carousel-item" id="profundos">
                    <h2>Primeiros socorros em cortes profundos</h2>
                    <ol>
                        <li>É preciso manter a calma e controlar a hemorragia imediatamente;</li>
                        <li>Pressione uma gaze ou pano limpo sobre o corte. Se ele não for tão profundo, o sangramento deve parar em alguns minutos. Em seguida lave a ferida com água e sabão;</li>
                        <li>Caso a água não seja suficiente para remover a sujidade do corte, use uma gaze para retirar as partículas que ficaram coladas dentro do machucado;</li>
                        <li>Se houver um pedaço de cristal ou outro objeto cravado no corte não tente retirá-lo, pode provocar uma hemorragia maior;</li>
                        <li>Em casos de sangramento intenso, uma boa dica é elevar o membro para reduzir o fluxo de sangue;</li>
                        <li>Com a compressa de gaze contendo o sangramento, o médico deverá ser consultado imediatamente para avaliar o corte e realizar uma sutura;</li>
                        <li>Após a sutura, os curativos devem ser realizados para que a cicatrização seja eficaz.</li>
                    </ol>
                    <img src="img/corteprfno.jpg" alt="Corte Profundo" width="640" height="480">
                    <button onclick="showCarouselItem('superficial')">Voltar</button>
                </div>
            </div>
        </div>
    `);
}

function mostrarQueimaduras() {
    toggleInfoDisplay("queimaduras-info", `
        <div class="carousel">

            <div class="carousel-item active" id="queimadura-info">
                <h2>O QUE É UMA QUEIMADURA?</h2>
                Quando falamos em queimaduras da pele, logo nos vem à cabeça as queimaduras térmicas, provocadas por fogo ou intenso calor.<br>
                Porém, não só o calor é capaz de provocar queimaduras.
                De forma abrangente, as queimaduras ocorrem quando um grande grupo de células da pele ou de outros tecidos são agudamente destruídas por calor, descarga elétrica, fricção, frio excessivo, contato com produtos químicos ou radiação.
                As queimaduras podem ser leves ou profundas, pequenas ou extensas. A gravidade do quadro depende exatamente desses dois fatores: extensão e profundidade.
                <h2>GRAUS</h2>
                As queimaduras são classificadas segundo a sua profundidade e tamanho, sendo geralmente mensuradas pelo percentual da superfície corporal acometida.

                <img src="img/graus.png" alt="graus de queimaduras" width="1280" height="720">

                <button onclick="showCarouselItem('queimadura-1')">Próximo</button>
            </div>

            <div class="carousel-item" id="queimadura-1">
                <h2>QUEIMADURAS DE PRIMEIRO GRAU</H2>
                Também chamada queimadura superficial, são aquelas que envolvem apenas a epiderme, a camada mais superficial da pele.
                Os sintomas da queimadura de primeiro grau são intensa dor e vermelhidão local, mas com palidez na pele quando se toca.
                A lesão da queimadura de 1º grau é seca e não produz bolhas. Geralmente melhoram após 3 a 6 dias, podendo descamar, e não deixam sequelas.
                <h2>CUIDADOS COM A QUEIMADURA</h2>
                <ul>
                    <li>Arrefecer a região: Use água corrente e fria no local da queimadura.</li>
                    <li>Limpar a área: Use um sabão neutro para limpar o ferimento e remover contaminantes.</li>
                    <li>Hidratar: Use cremes hidratantes conforme o tipo de pele, evitando os que têm perfumes ou outras substâncias.</li>
                    <li>Proteger do sol: Use filtro solar no local lesionado durante os dias seguintes.</li>
                    <li>Manter coberto: Sair na rua com a área afetada totalmente coberta.</li>
                </ul>
                <img src="img/primeiro.jpg" alt="queimadura primeiro grau" width="640" height="480">
                <button onclick="showCarouselItem('queimadura-info')">Voltar</button>
                <button onclick="showCarouselItem('queimadura-2')">Próximo</button>
            </div>

            <div class="carousel-item" id="queimadura-2">
                <h2>QUEIMADURAS DE SEGUNDO GRAU</h2>
                As queimaduras de segundo grau são atualmente divididas em 2º grau superficial e 2º grau profundo.
                A queimadura de 2º grau superficial é aquela que envolve a epiderme e a porção mais superficial da derme.
                Os sintomas são os mesmos da queimadura de 1º grau incluindo ainda o aparecimento de bolhas e uma aparência úmida da lesão.<br>
                A cura é mais demorada podendo levar até 3 semanas; não costuma deixar cicatriz, mas o local da lesão pode ser mais claro.
                As queimaduras de 2º grau profundas são aquelas que acometem toda a derme, sendo semelhantes às queimaduras de 3º grau.<br>
                Como há risco de destruição das terminações nervosas da pele, este tipo de queimadura, bem mais grave
                <h2>CUIDADOS COM A QUEIMADURA</h2>
                <ul>
                    <li>Retirar o contato com a fonte de calor imediatamente.<br>
                        Se a roupa estiver grudada na pele, não se deve tentar retirar em casa, porque isso pode piorar as lesões na pele.
                    </li>
                    <li>Colocar o local debaixo de água corrente.</li>
                    <li>Evitar o uso de gelo, sabão, antissépticos, loções, pomadas ou cremes sem a orientação de um médico.</li>
                    <li>Molhar uma compressa estéril ou um pano limpo em soro fisiológico ou água fria e cobrir a área afetada.</li>
                </ul>
                <img src="img/segundo.jpg" alt="queimadura segundo grau" width="640" height="480">

                <button onclick="showCarouselItem('queimadura-1')">Voltar</button>
                <button onclick="showCarouselItem('queimadura-3')">Próximo</button>
            </div>

            <div class="carousel-item" id="queimadura-3">
                <h2>QUEIMADURAS DE TERCEIRO GRAU</h2>
                São as queimaduras profundas que acometem toda a derme e atinge tecidos subcutâneos, com destruição total de nervos, folículos pilosos, glândulas sudoríparas e capilares sanguíneos.<br> 
                Podendo inclusive atingir músculos e estruturas ósseas. São lesões esbranquiçadas/acinzentadas, secas, indolores e deformantes que não curam sem apoio cirúrgico, necessitando de enxertos.
                 <h2>CUIDADOS COM A QUEIMADURA</h2>
                <ul>
                    <li>Ligar <strong>imediatamente</strong> para emergência;</li>
                    <li>Resfriar a região afetada com soro fisiológico 0,9%, ou água da torneira fria;</li>
                    <li>Colocar cuidadosamente uma gaze esterilizada umedecida em soro fisiológico ou um pano limpo sobre a região afetada;</li>
                    <li>Não colocar nenhum tipo de produto na região afetada.</li>
                </ul>
                <img src="img/terceiro.jpg" alt="queimadura terceiro grau" width="640" height="480">
                <button onclick="showCarouselItem('queimadura-2')">Voltar</button>
            </div>
        </div>
    `);
}

function mostrarEngasgamento() {
    toggleInfoDisplay("engasgamento-info", `
        <h2>Engasgamento</h2>
        <ul>
            O engasgo é uma manifestação do organismo para expelir alimento ou objeto que toma um “caminho errado”, durante a deglutição (ato de engolir).<br> Na parte superior da laringe localiza-se a epiglote, uma estrutura composta de tecido cartilaginoso, localizada atrás da língua.<br> Funciona como uma válvula que permanece aberta para permitir a chegada do ar aos pulmões e se fecha quando engolimos algo, isso para bloquear a passagem do alimento para os pulmões e encaminhá-lo ao estômago.<br> O engasgo é considerado uma emergência, e em casos graves, pode levar a pessoa à morte por asfixia ou deixá-la inconsciente por um tempo.<br> Sendo assim, agir rapidamente evita complicações.
            <h2>Dicas de cuidados gerais</h2>
            <li>Posicione-se por trás e enlace a vítima com os braços ao redor do abdome (se for uma criança, ajoelhe-se primeiro), caso ela esteja consciente. Uma das mãos permanece fechada sobre a chamada “boca do estômago” (região epigástrica).</li>
            <li>A outra mão comprime a primeira, ao mesmo tempo em que empurra a “boca do estômago” para dentro e para cima, como se quisesse levantar a vítima do chão.</li>
            <li>Faça movimentos de compressão para dentro e para cima (como uma letra “J”), até que a vítima elimine o corpo estranho.</li>
        </ul>
        <img src="img/heimlich.jpg" alt="CPR Process" width="640" height="480">
    `);
}

function mostrarHemorragia() {
    toggleInfoDisplay("hemorragia-info", `
        <div class="carousel">
            <!-- First Carousel Item -->
            <div class="carousel-item active" id="hemorragia-intro">
                <h2>Hemorragia</h2>
                Hemorragia é a perda de sangue através de um corte ou ferida traumática, podendo acontecer também por motivos naturais (sangramento em nariz, ouvido, boca, ânus),
                Elas ocorrem quando os vasos sanguíneos são rompidos.<br>
                A gravidade da hemorragia é medida pela quantidade e rapidez que o sangue é perdido.<br>
                O principal risco da hemorragia é o choque hipovolêmico, situação clínica em que o corpo fica sem sangue suficiente nos vasos sanguíneos e isso pode levar à morte.<br>
                A intervenção rápida e eficaz tem como um dos principais objetivos, diminuir a perda de sangue até que a vítima seja atendida no serviço de emergência e 
                impedir que aconteça o choque hipovolêmico.<br>
                <button onclick="showCarouselItem('hemorragia-int')">Próximo</button>
            </div>

            <div class="carousel-item" id="hemorragia-int">
                <h2>HEMORRAGIA INTERNA</h2>
                <p>Hemorragia Interna é aquela em que o sangue não é visível, ou seja,
                todo o sangue perdido se acumula dentro das cavidades do próprio
                corpo, tais como: crânio, tórax, abdômen, entre outras.<br></p>
                <h2>Se não é possível ver o sangue, como detectar
                a hemorragia interna?</h2>
                <section id="more-info">
                    <div class="texto">
                        A situação do trauma e a compreensão de como ele
                        ocorreu, podem indicar a existência de hemorragias
                        internas. Sinais indiretos também podem alertar a pessoa
                        para a ocorrência deste tipo de hemorragia.
                    </div>
                    <div class="illu">
                        <img src="img/int-hemo-illu.jpg" alt="Bleeding Vessel">
                    </div>
                </section>

                <section id="hit-sign">
                    <div class="hit">
                        <h2>Histórico do Trauma</h2>
                        Trauma forte em região de
                        cabeça, tórax, abdômen,
                        dentre outras regiões, alertam
                        para o risco de hemorragias.
                        <img src="img/hit.jpg" alt="arm-spilling-blood">
                    </div>
                    <div class="sign">
                        <h2>Sinais Indiretos</h2>
                        Pulso rápido e fraco | Pele pálida, fria e úmida |<br>
                        Fraqueza, tontura, confusão mental | Sede |<br> Respiração acelerada<br>
                        <img src="img/monitor.jpg" alt="Monitor Médico">
                    </div>
                </section>
                <section id="cuidados">
                    <div class="hemo-cuid">
                        <p>As hemorragias internas são mais difíceis de detectar, por isso, quando suspeitar que está ocorrendo com alguém:</p>
                        <ul>
                            <li>Mantenha a calma;</li>
                            <li>Contate imediatamente o serviço de emergência (SAMU 192);</li>
                            <li>Mantenha à vítima consciente e não ofereça água ou alimentos;</li>
                            <li>Quanto mais rápido isso for feito, maior a probabilidade de salvar uma vida!</li>
                        </ul>
                        <img src="img/blood-house.jpg" alt="Hospital">
                    </div>
                </section>
                <button onclick="showCarouselItem('hemorragia-intro')">Voltar</button>
                <button onclick="showCarouselItem('hemorragia-ext')">Próximo</button>
            </div>

            <div class="carousel-item" id="hemorragia-ext">
                <h2>Hemorragia Externa</h2>
                <p>Hemorragia externa é aquela em que o sangue é eliminado para o exterior do organismo.<br> 
                Ela é mais fácil de identificar porque é possível ver o sangue. <br> 
                Mesmo quando a abertura dos vasos ocorre em órgãos internos, o sangue é conduzido para o meio externo através da boca, nariz, ouvido, etc.</p>

                <p>Pelo fato de podermos ver o sangue, podemos diferenciá-lo sobre o tipo de vaso lesionado:</p>
                <section class="types">
                    <div class="capilar">
                        <img src="img/capilar.jpg" alt="hemo-art" width="200" height="200">
                        <ul>
                            <li>Pequenas perdas de sangue</li>
                            <li>Rápida coagulação</li>
                        </ul>
                    </div>
                    <div class="venoso">
                        <img src="img/venoso.jpg" alt="hemo-art">
                        <ul>
                            <li>Grandes vasos</li>
                            <li>Perda de sangue com menor pressão</li>
                            <li>Sangue vermelho escuro</li>
                            <li>Menos grave</li>
                        </ul>
                    </div>
                    <div class="arterial">
                        <img src="img/arterial.jpg" alt="hemo-art">
                        <ul>
                            <li>Grandes vasos</li>
                            <li>Perda de sangue com grande pressão</li>
                            <li>Sangue vermelho vivo</li>
                            <li>Mais grave</li>
                        </ul>
                    </div>
                </section>
                <button onclick="showCarouselItem('hemorragia-int')">Voltar</button>
                <button onclick="showCarouselItem('hemorragia-ext-aid')">Próximo</button>
            </div>

            <!-- Fourth Carousel Item (Hemorragia Externa Aid) -->
            <div class="carousel-item" id="hemorragia-ext-aid">
                <h2>Como controlar uma hemorragia externa?</h2>
                <ul>
                    <li>Aplique pressão direta sobre o ferimento com um pano limpo ou gaze</li>
                    <li>Fazer pressão no ferimento por pelo menos 10 minutos</li>
                    <li>Se a compressa encharcar, não a retire, mas coloque outra por cima e pressione com mais força</li>
                    <li>Se o sangramento for intenso, tente elevar a parte do corpo afetada</li>
                    <li>Em caso de sangramento contínuo, procure <strong>imediatamente</strong> atendimento médico</li>
                </ul>
                <div class="hemo-heal">
                    <img src="img/ext-hemo-heal.jpg" alt="cuidados hemorragia externa">
                    <img src="img/ext-hemo-up.png" alt="cuidados hemorragia externa">
                </div>
                <button onclick="showCarouselItem('hemorragia-ext')">Voltar</button>
            </div>
        </div>
    `);
}

function mostrarConvulsao() {
    toggleInfoDisplay("convulsao-info", `
        <section class="details">
                <div class="left">
                    <h2>Convulsão</h2>
                    <h3>Primeiros Socorros</h3>
                    <ul>
                        <li>Jamais tente abrir a boca de alguém que esteja tendo uma convulsão. “A mandíbula é muito forte. A orientação é virar a pessoa de lado para que ela não aspire saliva”. Essa posição evita que a língua obstrua a passagem do ar e também que a pessoa se engasgue.</li>
                        <li>Coloque-a deitada no chão, mantenha-a afastada de objetos cortantes e móveis, e, se possível, retire colares e óculos e proteja a cabeça com uma almofada, travesseiro ou algo macio.</li>
                        <li>Não jogue água no rosto da pessoa.</li>
                        <li>As crises em geral duram cerca de dois minutos, mas podem se estender por até cinco. “Se o tempo for superior a esse, acione uma ambulância ou leve a pessoa a um hospital.</li>
                    </ul>
        
    `);
}

function showCarouselItem(itemId) {
    const items = document.querySelectorAll('.carousel-item');
    items.forEach(item => item.classList.remove('active'));
    document.getElementById(itemId).classList.add('active');
}
    