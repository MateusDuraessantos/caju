new Vue({
    el: '#app',
    methods: {
        openCard(event){
            let actived = document.querySelector('.itIsActived')
            elementEvent = event.currentTarget.classList
            if(!actived && elementEvent[1] == 'reponsive-1000') {
                elementEvent.remove('reponsive-1000')
                elementEvent.add('itIsActived')
            }
            else if (actived && event.currentTarget.classList[1] != 'itIsActived') {
                actived.classList.add("reponsive-1000")
                actived.classList.remove("itIsActived")
                elementEvent.add('itIsActived')
                elementEvent.remove('reponsive-1000')
            }
            else {
                elementEvent.add('reponsive-1000')
                elementEvent.remove('itIsActived')
            }
        }
    },
    data: {
       cartoes: [
           {
               title: 'Custo zero para experimentar',
               icon: './src/icons/favorite.svg',
               text: 'Prove da versatilidade dos multibenefícios Caju com custo zero para contratar',
           },
           {
               title: 'Piscou, chegou!',
               icon: './src/icons/rocket.svg',
               text: 'Os cartões são entregues em até 3 dias úteis em São Paulo (capital) e até 5 dias úteis nas demais cidades do Brasil',
           },
           {
               title: 'Avisa que é Visa! ',
               icon: './src/icons/credit.svg',
               text: 'O cartão Caju é bandeira Visa, passa na função crédito e é aceito em milhões de estabelecimentos ao redor do mundo ',
           },
           {
               title: 'Segurança jurídica garantida',
               icon: './src/icons/shield.svg',
               text: 'Oferecemos categorias de saldo fixas, para ficar nos conformes com o PAT',
           },
       ],
       items: [
           {
               title: 'Mobilidade',
               saldo: 'flexivel',
               icon: 'mobilidade.svg', 
               text: 'Saldo exclusivo para o transporte dos colaboradores, que pode ser usado para pagar a passagem de ônibus dentro e fora da cidade, metrô, aluguel de bicicletas e até aquelas corridas em carro de aplicativo nos dias de chuva.' ,
               color: "FFE082"
           },
           {
               title: 'Auxílio home office', 
               saldo: 'flexivel',
               icon: 'home-office.svg', 
               text: 'Saldo para pagar despesas de casa, como a conta de energia, internet, mobília para o escritório - com direito a aquela cadeira bacana para dar jeito na coluna! ', 
               color: "C1ABE6",
           },
           {
               title: 'Educação', 
               saldo: 'flexivel',
               icon: 'educacao.svg', 
               text: 'Saldo para aprender um novo idioma, fazer cursos e até pagar as mensalidades daquele curso superior tão ', 
               color: "F59BC5",
           },
           {
               title: 'Saúde', 
               saldo: 'flexivel',
               icon: 'saude.svg', 
               text: 'Saldo para cuidar do bemestar, que passa em academias, farmácias, laboratórios de exames e até atendimentos psicológicos para ficar zen. ', 
               color: "9BE59B",
           },
           {
               title: 'Cultura', 
               saldo: 'flexivel',
               icon: 'cultura.svg', 
               text: 'Saldo para utilizar nos momentos de lazer, como cinema, shows, livrarias, teatros e até no pagamento de streamings para maratonar as séries favoritas. ', 
               color: "74CFE8",
           },
           {
               title: 'Auxílio-alimentação', 
               saldo: 'fixo',
               icon: 'auxilio-alimentacao.svg', 
               text: 'Saldo versátil para utilizar nos restaurantes preferidos ou nas compras do mês no supermercado. ', 
               color: "F89682",
           },
           {
               title: 'Alimentação',
               saldo: 'fixo',
               icon: 'chapel.svg', 
               text: 'Saldo para usar no mercadinho perto de casa ou no hipermercado mais longe, que vende as coisinhas que só se', 
               color: "FFC16B",
           },
           {
               title: 'Refeição', 
               saldo: 'fixo',
               icon: 'fork-plate.svg', 
               text: 'Saldo para cuidar do bemestar, que passa em academias, farmácias, laboratórios de exames e até atendimentos psicológicos para ficar zen.',
               color: "F18184",
           }
        ],
        colaboradores: [
           {
               icon: 'health.svg',
               title: 'Corpo são, mente sã',
               text: 'Planos com milhares de academias, estúdios e aulas online para incentivar seus colaboradores a praticarem atividade física.',
           },
           {
               icon: 'cup.svg',
               title: 'Saúde em primeiro lugar ',
               text: 'Acesso a profissionais de saúde através de teleconsultas e pronto-atendimento quando for necessário.',
           },
           {
               icon: 'brain.svg',
               title: 'Psicoterapia na palma da mão',
               text: 'Acesso a profissionais de saúde através de teleconsultas e pronto-atendimento quando for necessário.',
           },
           {
               icon: 'health-one.svg',
               title: 'Descontinhos em exames e farmácias',
               text: 'Descontos em vários medicamentos e exames médicos. ',
           },
           {
               icon: 'book.svg',
               title: 'Apoio nas finanças e no juridiquês',
               text: 'Assessoria jurídica e contábil para desenrolar as pendências e cuidar do bolso dos colaboradores. ',
           },
           {
               icon: 'car.svg',
               title: 'Transporte garantido e com valor fixo',
               text: 'Gestão e compra do vale-transporte de forma automática e com preço fixo para o colaborador.',
           },
        ],
    },
})
