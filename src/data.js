import {
  IMGJoonaCovid,
  IMGMcReact,
  IMGMcVue,
  IMGOblongs,
  IMGSch,
  IMGSipPos,
  IMGTokoFuku,
  IMGZwallet,
  IMGJinventory,
  IMGWoocommerce,
  IMGDatawarehouse,
  IMGSmartwatch,
  IMGEcocabins,
  IMGTimeline,
  IMGBwaHotel,
  IMGTokoHijau,
} from './assets'

const projects = [
  {
    name: 'Joona Covid',
    image: IMGJoonaCovid,
    madeWith: 'ReactJs',
    demo: 'http://bit.ly/joonacovid',
    github: 'http://bit.ly/joonacovid_git',
    description:
      'JoonaCovid merupakan aplikasi untuk memantau kasus covid-19. Memiliki fitur statistik berdasarkan di seluruh dunia, per negara, dan juga diprivinsi Indonesia. Dibuat menggunakan ReactJs.',
    tags: ['ReactJs', 'Bootstrap'],
    type: 'Individu',
  },
  {
    name: 'Mangga Chat React',
    image: IMGMcReact,
    madeWith: 'MERN',
    demo: 'https://react-mc.netlify.app',
    github: '',
    description:
      'Mangga Chat (versi react) merupakan aplikasi real time chat yang dapat mengirim chat private maupun grup. Mangga chat memiliki fitur add friend, create group, acc friend, live notif. Di buat menggunakan MERN stack (MySQL, ExpressJs, ReactJs, NodeJs) dan SocketIO. Untuk versi react sendiri sudah support dark mode dan masih dalam tahap penyalinan dari vue ke react.',
    tags: ['ReactJs', 'MySQL', 'ExpressJs', 'NodeJs', 'SocketIO', 'Redux'],
    type: 'Individu',
  },
  {
    name: 'Mangga Chat Vue',
    image: IMGMcVue,
    madeWith: 'MEVN',
    demo: 'https://react-mc.netlify.app',
    github: 'http://bit.ly/manggachatgit',
    description:
      'Mangga Chat (versi vue) merupakan aplikasi real time chat yang dapat mengirim chat private maupun grup. Mangga chat memiliki fitur add friend, create group, acc friend, live notif. Di buat menggunakan MEVN stack (MySQL, ExpressJs, VueJs, NodeJs) dan SocketIO.',
    tags: ['VueJs', 'MySQL', 'ExpressJs', 'NodeJs', 'SocketIO', 'Vuex'],
    type: 'Individu',
  },
  {
    name: 'Oblongs',
    image: IMGOblongs,
    madeWith: 'MERN',
    demo: '',
    github: '',
    description:
      'Oblongs merupakan sebuah aplikasi e-commerce yang dibuat khusus untuk menjual pakaian, dibuat menggunakan MERN stack. Aplikasinya sendiri masih dalam tahap pengembangan.',
    tags: ['ReactJs', 'MySQL', 'ExpressJs', 'NodeJs', 'Redux'],
    type: 'Individu',
  },
  {
    name: 'Sip Pos',
    image: IMGSipPos,
    madeWith: 'MEVN',
    demo: 'http://bit.ly/demosippos',
    github: 'http://bit.ly/sippos_git',
    description:
      'Sip POS adalah sebuah aplikasi Point Of Sales untuk mengelola penjualan makanan dan minuman, dilengkapi dengan fitur history penjualan dan transaksi penjualan. Aplikasi ini di buat menggunakan MEVN stack (MySQL, ExpressJs, VueJs, NodeJs).',
    tags: ['VueJs', 'MySQL', 'ExpressJs', 'NodeJs', 'Vuex'],
    type: 'Individu',
  },
  {
    name: 'Toko Fuku',
    image: IMGTokoFuku,
    madeWith: 'MEVN',
    demo: '',
    github: 'http://bit.ly/tokofuku_git',
    description:
      'TokoFuku merupakan sebuah aplikasi e-commerce yang mempunyai fitur jual beli, user dapat mendaftar menjadi seller ataupun customer. Aplikasi ini dibuat menggunakan MEVN stack (MySQL, ExpressJs, VueJs, NodeJs). (link demo menyusul)',
    tags: ['VueJs', 'MySQL', 'ExpressJs', 'NodeJs', 'Vuex', 'Redis'],
    type: 'Team',
  },
  {
    name: 'Zwallet',
    image: IMGZwallet,
    madeWith: 'MEVN',
    demo: '',
    github: 'https://bit.ly/Zwallet_git',
    description:
      'ZWallet merupakan aplikasi e-money yang di dalam aplikasi tersebut terdapat beberapa fitur seperti transfer uang ke sesama user dan top up balance. Aplikasi ini dibuat menggunakan MEVN stack (MySQL, ExpressJs, VueJS, NodeJs). (link demo menyusul)',
    tags: ['VueJs', 'MySQL', 'ExpressJs', 'NodeJs', 'Vuex'],
    type: 'Team',
  },
  {
    name: 'SMKN 7 Baleendah',
    image: IMGSch,
    madeWith: 'Codeigniter',
    demo: 'http://smkn7baleendah.sch.id/',
    github: '',
    description:
      'Merupakan website sekolah untuk SMK Negeri 7 Baleendah, dibuat menggunakan codeigniter.',
    tags: ['PHP', 'Codeigniter', 'Bootstrap'],
    type: 'Individu',
  },
  {
    name: 'JInventory',
    image: IMGJinventory,
    madeWith: 'Codeigniter',
    demo: '',
    github: '',
    description:
      'JInventory merupakan aplikasi gudang + POS (Point Of Sales) untuk fitur sendiri user dapat melakukan jual dan beli barang, stock in/out, support multi cabang, deteksi barang akan kadaluarsa, dll.',
    tags: ['PHP', 'Codeigniter', 'Bootstrap'],
    type: 'Individu',
  },
  {
    name: 'Woocommerce Clone',
    image: IMGWoocommerce,
    madeWith: 'ReactJs + Tailwindcss',
    demo: 'https://joonacode.github.io/woocommerce-landing',
    github: 'https://github.com/joonacode/woocommerce-landing',
    description: 'Latihan tailwind css dengan slicing design web',
    tags: ['ReactJs', 'Tailwind CSS'],
    type: 'Individu',
  },
  {
    name: 'Datawarehouse',
    image: IMGDatawarehouse,
    madeWith: 'ReactJs + Tailwindcss',
    demo: 'https://joonacode.github.io/react-datawarehouse/',
    github: 'https://github.com/joonacode/react-datawarehouse',
    description: 'Latihan tailwind css dengan slicing design web',
    tags: ['ReactJs', 'Tailwind CSS'],
    type: 'Individu',
  },
  {
    name: 'Smartwatch',
    image: IMGSmartwatch,
    madeWith: 'ReactJs + Tailwindcss',
    demo: 'https://joonacode.github.io/react-smartwatch/',
    github: 'https://github.com/joonacode/react-smartwatch',
    description: 'Latihan tailwind css dengan slicing design web',
    tags: ['ReactJs', 'Tailwind CSS'],
    type: 'Individu',
  },
  {
    name: 'Ecocabins',
    image: IMGEcocabins,
    madeWith: 'ReactJs + Tailwindcss',
    demo: 'https://joonacode.github.io/react-ecocabins/',
    github: 'https://github.com/joonacode/react-ecocabins',
    description: 'Latihan tailwind css dengan slicing design web',
    tags: ['ReactJs', 'Tailwind CSS'],
    type: 'Individu',
  },
  {
    name: 'Timeline',
    image: IMGTimeline,
    madeWith: 'ReactJs + Tailwindcss',
    demo: 'http://jtimeline.netlify.app/',
    github: 'https://github.com/joonacode/react-timeline-landing',
    description: 'Latihan tailwind css dengan slicing design web',
    tags: ['ReactJs', 'Tailwind CSS'],
    type: 'Individu',
  },

  {
    name: 'Lentera House',
    image: IMGBwaHotel,
    madeWith: 'NextJS + Chakra UI',
    demo: 'https://lentera-house-bwa.vercel.app/',
    github: 'https://github.com/joonacode/lentera-house-bwa',
    description: 'Latihan Chakra UI dan NextJS dengan slicing design web.',
    tags: ['NextJs', 'Typescript', 'Chakra UI'],
    type: 'Individu',
  },
  {
    name: 'Toko Hijau',
    image: IMGTokoHijau,
    madeWith: 'ReactJS + Chakra UI',
    demo: 'https://tokohijau.netlify.app/',
    github: 'https://github.com/joonacode/toko-hijau',
    description:
      'Toko Hijau is a website where you can buy and sell anything online',
    tags: ['ReactJs', 'Typescript', 'Chakra UI'],
    type: 'Individu',
  },
]

export default projects
