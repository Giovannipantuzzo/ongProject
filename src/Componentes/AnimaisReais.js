const animaisReais = [
  {
    id: 1,
    imagem: [
      "/images/sansao1.jpg",
      "/images/sansao2.jpg",
      "/images/sansao3.jpg",
      "/images/sansao4.jpg",
    ],
    nome: "Sansão",
    tempo: "1 ano",
    local: "Belo Horizonte/MG",
    tamanho: "P",
    sexo: "Female",
    descricao:
      "Pastoreio ( Vigiava os mosteiros ); Cão de companhia e pouco sociável; Territorialista. Comida preferida: Qualquer tipo de carne. Sociabilidade: Baixa, apenas com alguns membros da família.",
    Raca: "Spainel Tibetano",
  },
  {
    id: 2,
    imagem: [
      "/images/dalila1.jpg",
      "/images/dalila2.jpg",
      "/images/dalila3.jpg",
      "/images/dalila4.jpg",
    ],
    nome: "Dalila (Lilica)",
    tempo: "1 anos",
    local: "Belo Horizonte/MG",
    tamanho: "P",
    sexo: "Femêa",
    descricao:
      "Gosta de estar no ambiente e de atividades apenas de companhia.Comida preferida: Tangerina, frutas e legumes cru. Sociabilidade: média-baixa (apenas com a família), apegada a poucos membros da família e brinca raramente, mas extremamente amorosa",
    Raca: "Pequinês",
  },
  {
    id: 3,
    imagem: [
      "/images/moon1.jpg",
      "/images/moon2.jpg",
      "/images/moon3.jpg",
      "/images/moon4.jpg",
    ],
    nome: "Moon",
    tempo: "1 ano",
    local: "Teófilo Otoni/MG",
    tamanho: "P",
    sexo: "Femêa",
    descricao:
      "Dentre as coisas que ela gosta de fazer, cabe citar, deitar nas nossas camas e ficar debaixo das cobertas, beber água direto do tanque e ficar miando na minha porta quando ela está fechada. Além disso, ela gosta de roubar nossos biscoitos de polvilho e arranhar o tapete.",
    Raca: "Não Definida",
  },
  {
    id: 4,
    imagem: [
      "/images/1.jpg",
      "/images/2.jpg",
      "/images/3.jpg",
      "/images/4.jpg",
    ],
    nome: "Paçoca",
    tempo: "5 anos",
    local: "Ouro Preto/MG",
    tamanho: "P",
    sexo: "Femêa",
    descricao:
      "Adora passear todos os dias, ama andar de carro e tirar um cochilo depois do almoço. De manhã e de noite, é um anjo, mas de dia é uma fera. Come muito e morre de medo de tomar banho..",
    Raca: "Shih Tzu",
  },
  {
    id: 5,
    imagem: [
      "/images/benji1.jpg",
      "/images/benji2.jpg",
      "/images/benji3.jpg",
      "/images/benji4.jpg",
    ],
    nome: "Benji",
    tempo: "5 anos",
    local: "Belo Horizonte/MG",
    tamanho: "M",
    sexo: "Macho",
    descricao:
      "Ele era de um parente da minha família, porém essa pessoa estava passando por problemas difíceis uma época e chegou até a tomar remédios controlados, e nesse momento o Benji acabou sendo maltratado. Quando pegamos ele, estava um pouco traumatizado, mas com o tempo aqui em casa, dando carinho para ele, melhorou bastante. Ainda hoje ele é bem sensível a barulhos ou quaisquer sustos. Fica com medo facilmente e começa a chorar. É um cachorro muito dócil, amoroso e inteligente. Uma pessoa ao demonstrar algum sinal de violência para ele, ele deita no chão e fica virado de barriga pra cima. Gosta de comer coisas variadas como, batata doce, maçãs, banana, biscoitos. Algumas vezes ele chegou a sair pra rua, por descuido aqui em casa. Mas ele retornou haha. Um dia em especial, ele tinha fugido e por volta de umas 22:00 da noite escutamos ele batendo a patinha no portão, pedindo pra entrar.",
    Raca: "Vira-lata",
  },
  {
    id: 6,
    imagem: [
      "/images/belinha1.jpg",
      "/images/belinha2.jpg",
      "/images/belinha3.jpg",
      "/images/belinha4.jpg",
    ],
    nome: "Belinha",
    tempo: "2 ano",
    local: "Betim/MG",
    tamanho: "P",
    sexo: "Fêmea",
    descricao:
      "A Belinha é muito mansinha, sempre que vê alguém fica muito feliz. Ela odeia gatos e sempre procura briga com os animais maiores que ela. Sempre que possível procura um cantinho pra dormir e pegar sol. Também adora bichinhos de pelúcia, uma de suas brincadeiras favoritas é tentar rasgar esses bichinhos.",
    Raca: "Pinscher (n° 1)",
  },
  {
    id: 7,
    imagem: [
      "/images/suzi1.jpg",
      "/images/suzi2.jpg",
      "/images/suzi3.jpg",
      "/images/suzi4.jpg",
    ],
    nome: "Suzi",
    tempo: "2 anos",
    local: "Barra Longa/MG",
    tamanho: "P",
    sexo: "Fêmea",
    descricao:
      "Suzi é a cadelinha mais brincalhona que eu já tive, ela adora fazer bagunça e brincar, seja com adultos ou crianças. Uma cadela amável que adora brincar com a bolinha dela e de morder (suavemente) as pessoas pedindo atenção. Nas horas vagas ela dorme, na verdade ela hiberna em sua caminha.Entretanto quando ela está elétrica não pode ver um portão que já quer ir pra rua correr.",
    Raca: "Shih-tzu",
  },
  {
    id: 8,
    imagem: [
      "/images/x1.jpg",
      "/images/x2.jpg",
      "/images/x3.jpg",
      "/images/x4.jpg",
    ],
    nome: "X",
    tempo: "1 ano",
    local: "Belo Horizonte/MG",
    tamanho: "P",
    sexo: "Macho",
    descricao:
      "Esse é o X. Foi resgatado por mim durante uma corrida na orla da lagoa da Pampulha. Me seguiu por uns 3 metros e foi o suficiente. Chuto q na época ele tinha uns 3 meses. Ficou doente e foi salvo por um veterinário+ mediante à verba que eu tinha para comprar cerveja pelo resto do mês. Está comigo desde novembro de 2020, tem como alimentação básica a ração misturada com um patêzinho pra dar uma norteada, e ganha uns tiragosto de sachê, ovo de codorna cru e uns belisquete de carne crua. Qdo chegou tinha 600g, hj tem uns 4kg. Ainda não está castrado, pois a cirurgia ainda não coube no orçamento (professor é falido, estudante é falido ao quadrado, então estudante q é professor é falido ao cubo). Mas garanto que tem uma vida mais digna do que teria na orla da lagoa. Parceria construída na pandemia.",
    Raca: "Vira-lata",
  },
  {
    id: 9,
    imagem: [
      "/images/joaoTodoroki1.jpg",
      "/images/joaoTodoroki2.jpg",
      "/images/joaoTodoroki3.jpg",
      "/images/joaoTodoroki4.jpg",
    ],
    nome: "João Todoroki",
    tempo: "3 meses",
    local: "Belo Horizonte/MG",
    tamanho: "P",
    sexo: "Macho",
    descricao:
      "O João tem cerca de 3 meses, ele tem muita energia, ele é muito carinhoso e brinca bastante, especialmente com o outro gato, ele tem muita necessidade de atenção e por isso mia muito, mas ele é muito amigável com todos mundo no geral.",
    Raca: "Vira-lata",
  },
  {
    id: 10,
    imagem: [
      "/images/1.jpg",
      "/images/2.jpg",
      "/images/3.jpg",
      "/images/4.jpg",
    ],
    nome: "Lancelot",
    tempo: "6 anos",
    local: "Belo Horizonte/MG",
    tamanho: "M",
    sexo: "Macho",
    descricao:
      "Hobbys: entrar dentro de espaços apertados, dormir muito e brincar de pega pega.",
    Raca: "",
  },
  {
    id: 11,
    imagem: [
      "/images/amora1.jpg",
      "/images/amora2.jpg",
      "/images/amora3.jpg",
      "/images/amora4.jpg",
    ],
    nome: "Amora",
    tempo: "3 anos",
    local: "Belo Horizonte/MG",
    tamanho: "M",
    sexo: "Fêmea",
    descricao:
      "Ela é muito agitada, ansiosa e gosta de latir pra galera pra tá passando na rua. Mesmo assim, ela faz muita amizade com os vizinhos daqui, a rua toda conhece e gosta dela e os carteiros também.",
    Raca: "Vira-lata",
  },
  {
    id: 12,
    imagem: [
      "/images/juca1.jpg",
      "/images/juca2.jpg",
      "/images/juca3.jpg",
      "/images/juca4.jpg",
    ],
    nome: "Juca",
    tempo: "3 anos",
    local: "Conselheiro Lafaiete/MG",
    tamanho: "M",
    sexo: "Macho",
    descricao:
      "Ele tem problema nas patas de trás, por isso, tem que usar cadeira de rodas. Ele é animado, gosta de carinho e companhia",
    Raca: "Vira-lata",
  },
  {
    id: 13,
    imagem: [
      "/images/meg1.jpg",
      "/images/meg2.jpg",
      "/images/meg3.jpg",
      "/images/meg4.jpg",
    ],
    nome: "Meg",
    tempo: "2 anos",
    local: "Conselheiro Lafaiete/MG",
    tamanho: "P",
    sexo: "Fêmea",
    descricao:
      "Ela é brava, morde as pessoas, mas quando chove ela tem medo e corre pra ficar no colo. Também mostra carinho esfregando a cara dela no rosto das pessoas que deitarem no sofá. Ela gosta de pegar o travesseiro dela pela boca e arrastar até a varanda pra tomar sol também.",
    Raca: "Pequinês",
  },
  {
    id: 14,
    imagem: [
      "/images/pantera1.jpg",
      "/images/pantera2.jpg",
      "/images/pantera3.jpg",
      "/images/pantera4.jpg",
    ],
    nome: "Pantera",
    tempo: "4 anos",
    local: "Conselheiro Lafaiete/MG",
    tamanho: "M",
    sexo: "Fêmea",
    descricao: "",
    Raca: "Vira-lata",
  },
  {
    id: 15,
    imagem: [
      "/images/juju1.jpg",
      "/images/juju2.jpg",
      "/images/juju3.jpg",
      "/images/juju4.jpg",
    ],
    nome: "Juju",
    tempo: "4 anos",
    local: "Conselheiro Lafaiete/MG",
    tamanho: "M",
    sexo: "Fêmea",
    descricao: "",
    Raca: "Vira-lata",
  },
  {
    id: 16,
    imagem: [
      "/images/thor1.jpg",
      "/images/thor2.jpg",
      "/images/thor3.jpg",
      "/images/thor4.jpg",
    ],
    nome: "Thor",
    tempo: "2 anos",
    local: "Conselheiro Lafaiete/MG",
    tamanho: "P",
    sexo: "Macho",
    descricao:
      "Ele é nem lerdo, tá sempre no ritmo dele e gosta de dormir no sofá quando alguém tá assistindo série.",
    Raca: "Vira-lata",
  },
  {
    id: 17,
    imagem: [
      "/images/dumbo1.jpg",
      "/images/dumbo2.jpg",
      "/images/dumbo3.jpg",
      "/images/dumbo4.jpg",
    ],
    nome: "Dumbo",
    tempo: "3 anos",
    local: "Conselheiro Lafaiete/MG",
    tamanho: "P",
    sexo: "Macho",
    descricao:
      "Ele é bff da Luna, desde que se conheceram não se separaram mais. ele gosta de carinho e é ciumento, além disso tem umas patinhas curtas que todo mundo ama.",
    Raca: "Vira-lata",
  },
  {
    id: 18,
    imagem: [
      "/images/lessie1.jpg",
      "/images/lessie2.jpg",
      "/images/lessie3.jpg",
      "/images/lessie4.jpg",
    ],
    nome: "Lessie",
    tempo: "2 anos",
    local: "Belo Horizonte/MG",
    tamanho: "P",
    sexo: "Fêmea",
    descricao:
      "Brinca muito, fica correndo em volta da arvore no quintal e gosta muito de morder a orelha dos outros cachorros aqui de casa. Ela é bem ciumenta e gosta muito de colo também.",
    Raca: "Vira-lata",
  },
  {
    id: 19,
    imagem: [
      "/images/zuko1.jpg",
      "/images/zuko2.jpg",
      "/images/zuko3.jpg",
      "/images/zuko4.jpg",
    ],
    nome: "Zuko",
    tempo: "3 anos",
    local: "Muriaé-MG",
    tamanho: "M",
    sexo: "Macho",
    descricao:
      "O Zuko é um cachorro q adora atenção e ficar perto das pessoas, ele é bem calmo até você deixar ele empolgado, a partir disso nem ele consegue se controlar mais. No geral ele é bem inteligente e obediente (um pouco medroso também) ou seja, a companhia perfeita.",
    Raca: "Pastor alemão",
  },
  {
    id: 20,
    imagem: [
      "/images/atena1.jpg",
      "/images/atena2.jpg",
      "/images/atena3.jpg",
      "/images/atena4.jpg",
    ],
    nome: "Atena",
    tempo: "2 anos",
    local: "Belo Horizonte/MG",
    tamanho: "M",
    sexo: "Fêmea",
    descricao:
      "É uma mistura de labrador com Golden e gosta de passear, de brincar de buscar a bola e de brigar com a irmã mais nova dela.",
    Raca: "Vira-lata",
  },
  {
    id: 21,
    imagem: [
      "/images/amoraELilica1.jpg",
      "/images/amoraELilica2.jpg",
      "/images/amoraELilica3.jpg",
      "/images/amoraELilica4.jpg",
    ],
    nome: "Amora e Lilica",
    tempo: "8 anos e 1 mês",
    local: "Belo Horizonte/MG",
    tamanho: "G",
    sexo: "Fêmea",
    descricao: "Gêmias inseparáveis e muito bricalhonas.",
    Raca: "Rottweiler",
  },
  {
    id: 22,
    imagem: [
      "/images/mel1.jpg",
      "/images/mel2.jpg",
      "/images/mel3.jpg",
      "/images/mel4.jpg",
    ],
    nome: "Mel",
    tempo: "16 anos",
    local: "Belo Horizonte/MG",
    tamanho: "P",
    sexo: "Fêmea",
    descricao:
      "Melzinha é e sempre foi muito mau humorada e bravinha! Sempre latiu muito e isso não mudou depois de velhinha. Ama comer de tudo, principalmente pão de sal. Gosta dos seus irmãozinhos, mas é impaciente com eles, já que eles são crianças ainda.",
    Raca: "Poodle",
  },
  {
    id: 23,
    imagem: [
      "/images/sauron1.jpg",
      "/images/sauron2.jpg",
      "/images/sauron3.jpg",
      "/images/sauron4.jpg",
    ],
    nome: "Sauron",
    tempo: "1 ano",
    local: "Belo Horizonte/MG",
    tamanho: "P",
    sexo: "Macho",
    descricao:
      "Sauron é o cachorro mais amoroso do mundo! Além de ser um gordinho super fofo, nasceu com um rabinho curtinho, diferente do seu irmão. É muito faminto e tem espírito de velho, mas ao mesmo tempo ama brincar com seu irmão gêmeo. Ama carinho e, principalmente, AMA dar lambeijos.",
    Raca: "Vira-lata",
  },
  {
    id: 24,
    imagem: [
      "/images/bruno1.jpg",
      "/images/bruno2.jpg",
      "/images/bruno3.jpg",
      "/images/bruno4.jpg",
    ],
    nome: "Bruno",
    tempo: "1 ano",
    local: "Belo Horizonte/MG",
    tamanho: "P",
    sexo: "Macho",
    descricao:
      "Bruno é o cachorro mais ciumento do mundo. Não pode nem falar o nome da sua dona que ele começa a rosnar. Mas ao mesmo tempo é muuuito carente e carinhoso, ama deitar no colo dos humanos e receber carinho na barriga. Ama brincar com os humanos e com seu irmão gêmeo, o Sauron. Faz xixi nos lugares errados e ama comer petiscos caninos.",
    Raca: "Vira-lata",
  },
  {
    id: 25,
    imagem: [
      "/images/edSheeran1.jpg",
      "/images/edSheeran2.jpg",
      "/images/edSheeran3.jpg",
      "/images/edSheeran4.jpg",
    ],
    nome: "Ed Sheeran",
    tempo: "3 anos",
    local: "São Paulo/SP",
    tamanho: "M",
    sexo: "Macho",
    descricao:
      "Ama sachê, odeia visitas, gosta de dormir sozinho em guarda roupas, é bem interesseiro e dramático e ruim (coitado dos passarinhos que caem no quintal).",
    Raca: "Vira-lata",
  },
  {
    id: 26,
    imagem: [
      "/images/ayka1.jpg",
      "/images/ayka2.jpg",
      "/images/ayka3.jpg",
      "/images/ayka4.jpg",
    ],
    nome: "Ayka",
    tempo: "12 anos",
    local: "São Paulo/SP",
    tamanho: "P",
    sexo: "Fêmea",
    descricao:
      "Ela é bem estressada, como toda pinscher, ela come todo tipo de alimento, é bem ciumenta, ama uma coberta e ama passear.",
    Raca: "Pinscher",
  },
  {
    id: 27,
    imagem: [
      "/images/evie1.jpg",
      "/images/evie2.jpg",
      "/images/evie3.jpg",
      "/images/evie4.jpg",
    ],
    nome: "Evie",
    tempo: "4 anos",
    local: "São Paulo/SP",
    tamanho: "P",
    sexo: "Fêmea",
    descricao:
      "Ela é bem dócil com a família, um pouco estressada, uma verdadeira caçadora de animais pequenos, ama brincar, além de destruir e dormir nas plantas.",
    Raca: "Vira-lata",
  },
  {
    id: 28,
    imagem: [
      "/images/nina1.jpg",
      "/images/nina2.jpg",
      "/images/nina3.jpg",
      "/images/nina4.jpg",
    ],
    nome: "Nina",
    tempo: "Fêmea",
    local: "Lagoa da Prata/MG",
    tamanho: "M",
    sexo: "Fêmea",
    descricao:
      "A cadela é uma Golden Retriever que ama brincar com um flamingo de brinquedo, também gosta de dormir muito e come bastante.",
    Raca: "Golden Retriever",
  },
  {
    id: 29,
    imagem: [
      "/images/kappa1.jpg",
      "/images/kappa2.jpg",
      "/images/kappa3.jpg",
      "/images/kappa4.jpg",
    ],
    nome: "Kappa",
    tempo: "6 meses",
    local: "Belo Horizonte/MG",
    tamanho: "5 cm",
    sexo: "Macho",
    descricao:
      "É muito bravo, ele adora comer ração e odei divirto o espaço dele com qualquer outro animal. Já matou dois peixinhos durante a fase de adaptação deles",
    Raca: "Betta",
  },
  {
    id: 30,
    imagem: [
      "/images/teddy1.jpg",
      "/images/teddy2.jpg",
      "/images/teddy3.jpg",
      "/images/teddy4.jpg",
    ],
    nome: "Teddy",
    tempo: "6 anos",
    local: "Belo Horizonte/MG",
    tamanho: "P",
    sexo: "Macho",
    descricao:
      "Ele adora brincar e dormir na cama, mas odeia que tirem foto ou filmes ele, ele é adulto de porte pequeno.",
    Raca: "Vira-lata",
  },
  {
    id: 31,
    imagem: [
      "/images/ninna1.jpg",
      "/images/ninna2.jpg",
      "/images/ninna3.jpg",
      "/images/ninna4.jpg",
    ],
    nome: "Ninna",
    tempo: "5 anos",
    local: "Belo Horizonte/MG",
    tamanho: "P",
    sexo: "Fêmea",
    descricao:
      "Ela adora comer e receber carinho, inclusive ela fica arranhando as pessoas até que elas façam carinho nela.",
    Raca: "Shitszu",
  },
  {
    id: 32,
    imagem: [
      "/images/tempestade1.jpg",
      "/images/tempestade2.jpg",
      "/images/tempestade3.jpg",
      "/images/tempestade4.jpg",
    ],
    nome: "Tempestade",
    tempo: "7 meses",
    local: "Belo Horizonte/MG",
    tamanho: "M",
    sexo: "Fêmea",
    descricao:
      "Super caseiro e dócil. Adora um carinho e é o melhor amigo em tempos frios! Gosta de ficar deitadinha em cobertas quentinhas e gosta de acompanhar o dono por toda casa.",
    Raca: "Vira-lata",
  },
  {
    id: 33,
    imagem: [
      "/images/1.jpg",
      "/images/2.jpg",
      "/images/3.jpg",
      "/images/4.jpg",
    ],
    nome: "Saori",
    tempo: "9 meses",
    local: "Belo Horizonte/MG",
    tamanho: "M",
    sexo: "Fêmea",
    descricao:
      "Carinhosa, adora sache e ficar em casa. Gosta de deitar em baixo das cobertas e amassar o pãozinho no pé das pessoas. O lugar favorito dela é em cima do guarda roupa.",
    Raca: "Vira-lata",
  },
  {
    id: 34,
    imagem: [
      "/images/bob1.jpg",
      "/images/bob2.jpg",
      "/images/bob3.jpg",
      "/images/bob4.jpg",
    ],
    nome: "Bob",
    tempo: "3 anos",
    local: "Betim/MG",
    tamanho: "M",
    sexo: "Macho",
    descricao: "Um cachorro dócil e amigáve",
    Raca: "Vira-lata",
  },
  {
    id: 35,
    imagem: [
      "/images/jade1.jpg",
      "/images/jade2.jpg",
      "/images/jade3.jpg",
      "/images/jade4.jpg",
    ],
    nome: "Jade",
    tempo: "1 ano e 9 meses",
    local: "Divinópolis/MG",
    tamanho: "M",
    sexo: "Fêmea",
    descricao:
      "Ela adora brincar e passear, é muito carente e gosta muito de receber atenção.",
    Raca: "Vira-lata",
  },
  {
    id: 36,
    imagem: [
      "/images/pepeu1.jpg",
      "/images/pepeu2.jpg",
      "/images/pepeu3.jpg",
      "/images/pepeu4.jpg",
    ],
    nome: "Pepeu",
    tempo: "8 anos",
    local: "Belo Horizonte/MG",
    tamanho: "M",
    sexo: "Macho",
    descricao:
      "Pepeu é um cachorro q apesar de ter VÁRIOS problemas de saúde(alergia até à terra), pepeu é muito aventureiro. Adora caçar, desde insetos até macacos. Ele é bem inquieto e companheiro, enquanto tiver gente acordada ele está junto. A coisa que ele mais gosta de fazer, dentro de casa é ficar na varanda olhando o movimento da rua.",
    Raca: "Poodle",
  },
  {
    id: 37,
    imagem: [
      "/images/lola1.jpg",
      "/images/lola2.jpg",
      "/images/lola3.jpg",
      "/images/lola4.jpg",
    ],
    nome: "Lola",
    tempo: "3 anos",
    local: "Belo Horizonte/MG",
    tamanho: "M",
    sexo: "Fêmea",
    descricao:
      "A coisa que Lola mais ama fazer é dormir. Enquanto tiver alguém deitado, ela está junto. Se o quarto estiver escuro então, melhor ainda. Além disso Lola odeia que não durmam no horário certo, ela começa a ficar estressada e vai procurar outro quarto ou então embaixo da cama pra dormir.",
    Raca: "Poodle",
  },
  {
    id: 38,
    imagem: [
      "/images/darwin1.jpg",
      "/images/darwin2.jpg",
      "/images/darwin3.jpg",
      "/images/darwin4.jpg",
    ],
    nome: "Darwin",
    tempo: "tem 5 meses",
    local: "Belo Horizonte/MG",
    tamanho: "P",
    sexo: "Macho",
    descricao:
      "É muito agitado, muito apegado. Ele tem um pouquinho de espirito de gato, gosta de subir nas coisas e aconchegar no colo",
    Raca: "Vira-lata",
  },
  {
    id: 39,
    imagem: [
      "/images/frida1.jpg",
      "/images/frida2.jpg",
      "/images/frida3.jpg",
      "/images/frida4.jpg",
    ],
    nome: "Frida",
    tempo: "4 anos",
    local: "Três Pontas/MG",
    tamanho: "P",
    sexo: "Fêmea",
    descricao:
      "É a dona da casa. Ela é muito anti-social, não gostou nem um pouquinho dos filhotes qd eles chegaram, odeia ser pega no colo, odeia crianças, mas adora um carinho na cabeça e passa o dia inteiro na varanda ou dando role nos muros",
    Raca: "Vira-lata",
  },
];

export default animaisReais;
