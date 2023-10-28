/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "André Abrego",
  description:
    "",
  og: {
    title: "Portfolio - André Abrego",
    type: "website",
    url: "#",
  },
};

//Home Page
const greeting = {
  title: "André Abrego",
  logo_name: "AndreAbrego",
  subTitle:
    "Sou um entusiasta da programação com formação em engenharia. Minha paixão é criar soluções inovadoras e eficientes, abordando desafios complexos com uma abordagem analítica e criativa",
  resumeLink:
    "https://petrobrasbr-my.sharepoint.com/:b:/r/personal/andre_abrego_petrobras_com_br/Documents/Arquivos%20de%20Chat%20do%20Microsoft%20Teams/CV_Andre_Abrego.pdf?csf=1&web=1&e=D5UZMV",
  portfolio_repository: "https://github.com/AlsAbrego",
  githubProfile: "https://github.com/AlsAbrego",
  codaURL: "https://coda.io/@andre-abrego/aa-portfolio",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/AlsAbrego",
    fontAwesomeIcon: "fab fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/andreabrego",
    fontAwesomeIcon: "fab fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gilab",
    link: "https://codigo.petrobras.com.br/andre.abrego",
    fontAwesomeIcon: "fab fa-gitlab", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FC6D26", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "E-mail",
    link: "mailto:andre.abrego@petrobras.com.br",
    fontAwesomeIcon: "far fa-envelope", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#0078D4", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Whatssap",
    link: "https://wa.me/5518981986669",
    fontAwesomeIcon: "fab fa-whatsapp", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#25D366", //<i class=""></i>
  },
];

const skills = {
  data: [
    {
      title: "Data Science & Big data",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Entusiasta em ascensão em análises e modelagem de sistemas de big-data, deep-learning, e maching-learning",
        "⚡ Expericências iniciais com Tensorflow, PyTorch",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },

        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Desenvolvimento Full Stack",
      fileName: "FullStackImg",
      skills: [
        "⚡ Construção de webpages front-end  usando React-Redux, angular",
        "⚡ Desenvolvimento de aplicativos web usando interfaces em HTML/css",
        "⚡ Construção de aplicações em backend in Node, Express, Eel-Python, PHP",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "fa6-brands:node",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Aspirante em cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: ["⚡ Experiência em algumas plataforma e bancos de dados"],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },

        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "Entusiata em UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Design interface for web app",
        "⚡ Criação de logos e flyers usando softwares de edição de imagens e texto vetoriais",
        "⚡ Experiências básicas em Corel Draw, Figma, Inkscape, Adobre illustrator, ...",
      ],
      softwareSkills: [
        {
          skillName: "Corel",
          fontAwesomeClassname: "file-icons:coreldraw-alt",
          style: {
            color: "#37814A",
          },
        },
        {
          skillName: "Gimp",
          fontAwesomeClassname: "simple-icons:gimp",
          style: {
            color: "#5C5543",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Coursera",
      iconifyClassname: "cib:coursera",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://coursera.org/",
    },
    {
      siteName: "Edx",
      iconifyClassname: "simple-icons:edx",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.edx.org/",
    },
    {
      siteName: "Melhor aluno do curso de Engenharia Mecânica",
      iconifyClassname: "carbon:trophy",
      style: {
        color: "#006600",
      },
      profileLink: "https://www.feis.unesp.br/",
    },
    {
      siteName: "Prêmio Roberto Mange - Senai",
      iconifyClassname: "dashicons:awards",
      style: {
        color: "#EF2D5E",
      },
      profileLink:
        "https://pt.wikipedia.org/wiki/Pr%C3%AAmio_Engenheiro_Roberto_Mange",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "UNIVESP - Universidade Virtual do Estado de São Paulo",
      subtitle: "Graduação em Engenharia da Computação",
      logo_path: "univesp_logo.png",
      alt_name: "Univesp EAD",
      duration: "2022 - atual",
      descriptions: [
        "⚡ Graduação em Engenharia da Computação.",
        "⚡ Curso atualmente trancado!",
      ],
      website_link: "https://univesp.br/",
    },
    {
      title: "UNESP - Universidade Estadual Paulista",
      subtitle: "Mestrado em Engenharia Mecânica",
      logo_path: "unesp_logo.png",
      alt_name: "UNESP - Ilha Solteira",
      duration: "2015 - 2018",
      descriptions: [
        "⚡ Mestrado em Engenharia Mecânica com enfase em ciências térmicas.",
        "⚡ Estudo do fenomeno de interação fluido-estrutura em um modelo de válvula do tipo palheta com abordagem numérica e experimental.",
        "⚡ Estudo numérico usando o método de discretização e interpolação EbFVM (Element-Based Finite Volume) e FEM (Finite Element Method).",
        "⚡ Modelagem usando a metodologia de malhas particionadas com acoplamento forte (two-way coupling). Aplicação das equações governantes descritas em malhas Lagrangeana, Euleriana e ALE",
      ],
      website_link: "http://hdl.handle.net/11449/153550",
    },
    {
      title:
        "ENSEEIHT- École nationale supérieure d'électrotechnique, d'électronique, d'informatique, d'hydraulique et des télécommunications",
      subtitle:
        "Intercâmbio/Mécanique des Fluides, Énergétique & Environnement (MF2E)",
      logo_path: "INP_enseeiht_logo.png",
      alt_name: "ENSEEIHT - Toulouse-Franca",
      duration: "2012 - 2013",
      descriptions: [
        "⚡ Intercâmbio para a Instituto Nacional Politécnico na École ENSEEIHT, em Toulouse - França",
        "⚡ Cursei as disciplinas da graduação d'ingénieur Mécanique des Fluides, Énergétique & Environnement",
        "⚡ Fiz curso intensivo de francês em Grenoble e em Toulouse.",
      ],
      website_link:
        "https://www.enseeiht.fr/fr/formation/formation-ingenieur/departement-mf2e.html",
    },
    {
      title: "UNESP - Universidade Estadual Paulista",
      subtitle: "Graduação em Engenharia Mecânica",
      logo_path: "unesp_logo.png",
      alt_name: "UNESP - Ilha Solteira",
      duration: "2009 - 2014",
      descriptions: [
        "⚡ Obtive a graduação em engenharia mecânica, com uma sólida formação básica em uma das mais renomadas unversidades do país.",
        "⚡ Tive a oportunidade de realizar inciação científica na área experimental, desenvolvendo uma bancada nova, com foco no estudo do fenômeno de interação fluido-estrutura, que ocorre em válvulas automática de compressores.",
        "⚡ Eu recebi os prêmios de reconhecimento de melhor aluno nos três primeiros anos do curso de engenharia. Nos útltimos anos eu cursei no exterior.",
      ],
      website_link: "https://www.feis.unesp.br/",
    },
    {
      title: "SENAI - Serviço Nacional de Aprendizagem Industrial",
      subtitle: "Mecânico de usinagem, curso de aprendizagem industrial",
      logo_path: "senai_logo.png",
      alt_name: "SENAI-Araçatuba",
      duration: "2006 - 2007",
      descriptions: [
        "⚡ Curso técnico de aprendizagem industrial com foco em mecânica de usinagem.",
        "⚡ Uso de máquinas operatrizes tais como tornos, fresadoras, plainas, etc.",
        "⚡ Uso máquinas operatrizes controladas computacionalmente, como tornos CNC's, centros de usinagem, usando comandos G-code.",
      ],
      website_link: "https://aracatuba.sp.senai.br/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Técnico em Mecânico de Usinagem",
      subtitle: "- SENAI",
      logo_path: "senai_logo_black.png",
      certificate_link:
        "https://github.com/AlsAbrego/Certificados_/blob/fe3b21e4d3cfd27ad0d05d3e505305d0cc4569ab/certificados/CERTIFICADO_SENAI.pdf",
      alt_name: "SENAI-ARAÇATUBA",
      color_code: "#3E8DCC",
    },
    {
      title: "Reasoning, Data Analysis, and Writing",
      subtitle: "- Duke Univesity",
      logo_path: "duke_university_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/S7JLL8Z7CS3W",
      alt_name: "Dataanalysis",
      color_code: "#4285F499",
    },
    {
      title: "Python",
      subtitle: "- Let's Code/Ada Tech",
      logo_path: "ada_tech_lets_code.png",
      certificate_link:
        "https://github.com/AlsAbrego/Certificados_/blob/fe3b21e4d3cfd27ad0d05d3e505305d0cc4569ab/certificados/ifood-python-basics-b110e29d-7db4-4b8b-8f84-4247dddae006.pdf",
      alt_name: "AdaTech",
      color_code: "#A9A9A9",
    },
    {
      title: "Fullstack, Angular, API-Rest/Spring Boot, Java",
      subtitle: "- DIO ",
      logo_path: "digital_innovation_one_logo.png",
      certificate_link:
        "https://github.com/AlsAbrego/Certificados_/tree/main/certificados",
      alt_name: "DIO",
      color_code: "#B0E0E6",
    },
    {
      title: "Treinamentos corporativos",
      subtitle: "- Wyden/Educare",
      logo_path: "wyden_educare.png",
      certificate_link:
        "https://github.com/AlsAbrego/Certificados_/tree/main/certificados_corp",
      alt_name: "WYDEN-EDUCARE",
      color_code: "#FF5E0E",
    },
    {
      title: "Python/Simulação Numérica/Toelf/...",
      subtitle: "- Edx/Coursera - cursos sem certificado!",
      logo_path: "edX_coursera_logo.png",
      certificate_link: "",
      alt_name: "Edx-Coursera",
      color_code: "#e9ff69",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experiência ",
  subtitle: "Trabalhos, Estágios, Freelancers e voluntáriado",
  description:
    "Eu trabalhei em uma startup de tecnologia agrícola, Solinftec, como analista de inteligência de dados. Estive no mesmo período como docente dos cursos de Engenharia, no grupo Yduqs Unitoledo-Wyden. Atuo como sócio acionista na empresa HPx-Engenharia (Extreme Makers), como freelancer e engenheiro autonomo na Ideari Engenharia e como professor voluntário em algumas plataformas online de educação. Durante a graduação fiz estágio na área de P&D da empresa Jacto, trabalhei com o projeto e prototipagem da colhedeira K-3500.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Trabalho",
      work: true,
      experiences: [
        {
          title: "Engenheiro de Equipamentos Mecânicos",
          company: "Petróleo Brasileiro S.A - Petrobras",
          company_url: "https://petrobras.com.br/",
          logo_path: "Petrobras_logo.png",
          duration: "Fevereiro de 2023 - Atual",
          location: "Rio de Janeiro, RJ",
          description: "Em processo de alocação de vagas",
          color: "#0879bf",
        },
        {
          title: "Analista de Inteligência de Dados",
          company: "Solinftec",
          company_url: "https://www.solinftec.com/pt-br/",
          logo_path: "Solinftec_logo.png",
          duration: "Junho 2022 - Fevereiro 2023",
          location: "Araçatuba, SP",
          description:
            "Desenvolvedor de soluções usando painéis iterativos Power BI, soluções em python com interfaces gráficas de usuário (GUI), análises estatísticas e de correlações (PCA) utilizando o R. Monitor e conteúdista da plataforma de ensino EAD-Solinftec",
          color: "#9b1578",
        },
        {
          title: "Docente do curso de Engenharias",
          company: "Centro Universitário Toledo - Wyden",
          company_url: "https://www.wyden.com.br/unidades/unitoledo",
          logo_path: "Unitoledo_wyden_logo.png",
          duration: "Março 2018 - Fevereiro 2023",
          location: "Araçatuba, SP",
          description:
            "Professor adjunto. Participei do Núcleo Docente Estruturante (NDE). Fui coordenador da equipe do projeto Baja-SAE. Ministrei disciplinas nos cursos de Engenharia Mecânica, Química, Agronômica e no ciclo básico.",
          color: "#fc1f20",
        },
        {
          title: "Sócio da empresa HPX Engenharia e Tecnologia",
          company: "HPX Engenharia e Tecnologia",
          company_url: "https://loja.extrememakers.net/",
          logo_path: "Extreme_Makers_logo.png",
          duration: "Janeiro 2022 - Atual",
          location: "Birigui, SP",
          description:
            "Desenvolvimento de projetos e prestação de consultoria na área de engenharia em geral.",
          color: "#fc1f20",
        },
        {
          title: "Programador de máquinas CNC",
          company: "Líder Balanças",
          company_url: "https://www.liderbalancas.com.br/",
          logo_path: "Lider_Balanças_logo.png",
          duration: "Abril 2008 - Janeiro 2009",
          location: "Araçatuba, SP",
          description:
            "Operador e programador de tornos e centros de usinagens comandados por linhas numéricas (CNC). Usinagem de células de cargas em aços e alumínios, que posteriormente foram utilizadas para a colagem de extensômetros.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Estágios",
      experiences: [
        {
          title: "Estágio em Engenharia Mecânica na área P&D",
          company: "JACTO Inc.",
          company_url: "https://jacto.com/brasil",
          logo_path: "Jacto_logo.png",
          duration: "Junho 2014 - Dezembro 2014",
          location: "Pompéia, SP",
          description:
            "Desenvolvimento e Projetos de máquinas agrícolas, na área de pesquisa e desenvolvimento. Remodelagem, reprojeto e novos projeto para os desafios encontrados com o protótipo da colheitadeira de Café K3500.",
          color: "#000000",
        },
        {
          title: "Jovem aprendiz em mecânica de usinagem",
          company: "ARALCO - Usina de Açúcar e Álcool",
          company_url: "https://www.aralco.com.br/",
          logo_path: "grupoaralco_logo.png",
          duration: "Janeiro 2006 - Dezembro 2007",
          location: "St.Antônio do Aracanguá, SP",
          description:
            "Jovem aprendiz pelo programa do SENAI. Operação de máquinas operatrizes, tais como Tornos, Fresadoras, Plainas, Retificas, Furadeiras de Bancada, além de ajudar na manutenção preventiva, preditiva e corretiva no período entre safra.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Freelancer",
      experiences: [
        {
          title: "Engenheiro Mecânico Colaborador/Autônomo",
          company: "Ideari Engenharia",
          company_url: "https://ideari.com.br/",
          logo_path: "Ideari_logo.png",
          duration: "Janeiro 2020 - Atual",
          location: "Araçatuba, SP",
          description:
            "Trabalhos colaborativos na área de PMOC, perícias e projetos de engenharia.",
          color: "#4285F4",
        },
        {
          title: "Professor Universitário substituto",
          company: "UNESP & AEMS",
          company_url: "https://www.feis.unesp.br/",
          logo_path: "unesp_logo_2.png",
          duration: "2015 - 2016",
          location: "Ilha Solteira, SP",
          description:
            "Professor substituto para assistência para alunos da pósgraduação nas matérias de condução e convecção de calor, mecânica dos fluidos e termodinâmica.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projetos",
  description:
    "A maioria dos meus projetos envolvem de alguma forma programação, utilizando as mais diversas ferramentas tecnológicas. Tive experiência com paineis iterativos, criação de aplicações com e sem GUI e de aplicaçõe Web. Familiar com banco de dados e análises estatística de big-data. Trabalhos de estudos numéricos voltados para a engenharia",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publicações científicas",
  description: "Publicações resultados dos estudos de graduação e mestrado",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "02",
      name:
        "Influence of the valve-seat gap on the dynamics of reed type valves",
      createdAt: "2020",
      description:
        "Paper publicado pela revista International Journal of Refrigeration",
      url:
        "https://www.sciencedirect.com/science/article/pii/S0140700720302796",
    },
    {
      id: "03",
      name:
        "Experimental Analysis of the Precharging Effect on the Dynamic Behavior of a Reed Valve Used in Refrigeration Compressors",
      createdAt: "2017",
      description:
        "Artigo apresentadao na conferencia ABCM.COBEM2017.COB17-1713.",
      url: "https://doi.org/10.26678/ABCM.COBEM2017.COB17-1713",
    },

    {
      id: "01",
      name:
        "Interação fluido estrutura em um difusor radial: Um estudo experimental.",
      createdAt: "2019",
      description:
        "Publicação do trabalho de graduação como livro, pela editora Novas Edições Acadêmicas.",
      url:
        "https://my.nea-edicoes.com/catalogue/details/pt/978-620-2-40083-1/intera%25252525C3%25252525A7%25252525C3%25252525A3o-fluido-estrutura-em-um-difusor-radial",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Entre em contato comigo",
    profile_image_path: "AndreAbrego_logo.png",
    description:
      "Você pode me enviar mensagem, que eu o responderei no prazo de até 24 horas. Estou disponível em quase todas redes sociais.",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //   link: "https://blogs.ashutoshhathidara.com/",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Endreço",
    subtitle: "Rua Professor Gabizo, 252, Rio de Janeiro, RJ",
    locality: "Rio de Janeiro",
    country: "Brasil",
    region: "RJ",
    postalCode: "",
    streetAddress: "Rua Professor Gabizo",
    avatar_image_path: "address_image.svg",
    // location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
