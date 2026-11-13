// Zoznam projektov v portfóliu.
// Každý projekt: kategória, názov, klient, rok, nástroje, popis a obrázky.
// Obrázky: ["priečinok/súbor.webp", šírka, výška] – prvý obrázok je titulný.
// Plná veľkosť je v Assets/<priečinok>/, náhľad v Assets/<priečinok>/nahlady/.
const PROJECTS = [
    {
        category: "tlac",
        title: "Svadobné tlačoviny",
        client: "",
        year: "2026",
        tools: ["Illustrator", "Photoshop"],
        desc: "Kompletná sada tlačovín na moju svadbu 6. 6. 2026 v Kaštieli Voderady: oznámenie, pozvánka k svadobnému stolu, harmonogram dňa, dress code s farebnou paletou, menu, monogram, etiketa na svadobné víno, ilustrácia kaštieľa a hracie karty, na ktoré hostia písali odkazy.",
        images: [
            ["tlac/svadba-oznamenie.webp", 1414, 2000],
            ["tlac/svadba-srdecne.webp", 1288, 957],
            ["tlac/svadba-detaily.webp", 1252, 1311],
            ["tlac/svadba-dresscode.webp", 1288, 1666],
            ["tlac/svadba-menu.webp", 1002, 2000],
            ["tlac/svadba-pan-a-pani.webp", 2000, 1334],
            ["tlac/svadba-monogram.webp", 885, 839],
            ["tlac/svadba-karta-monogram.webp", 1409, 2000],
            ["tlac/svadba-vino.webp", 827, 1300],
            ["tlac/svadba-vyberte-kartu.webp", 744, 1040],
            ["tlac/svadba-karta-a.webp", 744, 1040],
            ["tlac/svadba-karta-2.webp", 744, 1040],
            ["tlac/svadba-karta-3.webp", 744, 1040],
            ["tlac/svadba-karta-4.webp", 744, 1040],
            ["tlac/svadba-karta-5.webp", 744, 1040],
            ["tlac/svadba-karta-6.webp", 744, 1040],
            ["tlac/svadba-karta-7.webp", 744, 1040],
            ["tlac/svadba-karta-8.webp", 744, 1040],
            ["tlac/svadba-joker-cerveny.webp", 744, 1040],
            ["tlac/svadba-joker-cierny.webp", 744, 1040]
        ]
    },
    {
        category: "tlac",
        title: "Rozlúčka so slobodou – Barcelona",
        client: "",
        year: "2025",
        tools: ["Illustrator"],
        desc: "Tlačoviny na rozlúčku so slobodou v Barcelone: titulná grafika, časový plán víkendu, checklist výziev pre nevestu a strany do albumu so spomienkami.",
        images: [
            ["tlac/rozlucka-bcn.webp", 2000, 1197],
            ["tlac/rozlucka-bcn-plan.webp", 2000, 1426],
            ["tlac/rozlucka-bcn-checklist.webp", 1409, 2000],
            ["tlac/rozlucka-bcn-spomienky.webp", 2000, 1426],
            ["tlac/rozlucka-bcn-album.webp", 2000, 1426],
            ["tlac/rozlucka-bcn-album2.webp", 2000, 1426]
        ]
    },
    {
        category: "tlac",
        title: "Národná konferencia 2026",
        client: "IAESTE Slovakia",
        year: "2026",
        tools: ["Photoshop", "Illustrator"],
        desc: "Návrh dizajnu zberateľských kartičiek pre organizáciu IAESTE Slovakia na Národnú konferenciu 2026. Kartičky sú farebne odlíšené pre národné centrum, dozornú radu a lokálne centrá. Každá kartička má fotku, funkciu a vtipnú „superschopnosť“ danej osoby.",
        images: [
            ["tlac/nk26-nc1.webp", 815, 1111],
            ["tlac/nk26-nc2.webp", 815, 1111],
            ["tlac/nk26-nc3.webp", 815, 1111],
            ["tlac/nk26-dr.webp", 815, 1111],
            ["tlac/nk26-lc1.webp", 815, 1111],
            ["tlac/nk26-lc2.webp", 815, 1111],
            ["tlac/nk26-lc7.webp", 815, 1111],
            ["tlac/nk26-zadna.webp", 815, 1111]
        ]
    },
    {
        category: "tlac",
        title: "Kalendár 2025 a etikety na flaše",
        client: "",
        year: "2024",
        tools: ["Illustrator", "Photoshop"],
        desc: "Custom kalendár a nálepky prekreslené podľa fotiek psov",
        images: [
            ["tlac/kal1.webp", 1422, 2000],
            ["tlac/kal2.webp", 1422, 2000],
            ["tlac/kal3.webp", 1422, 2000],
            ["tlac/kal4.webp", 1422, 2000],
            ["tlac/krstna-nalepka4.webp", 1241, 1748],
            ["tlac/krstna-nalepka2.webp", 1717, 1209],
            ["tlac/krstna-nalepka3.webp", 1717, 1209],
            ["tlac/krstna-nalepka.webp", 1016, 1016]
        ]
    },
    {
        category: "tlac",
        title: "Veľtrh Dni Príležitostí",
        client: "IAESTE Slovakia",
        year: "2024, 2023, 2022, 2019, 2018",
        tools: ["Illustrator", "Photoshop"],
        desc: "Hlavný grafický dizajnér pre veľtrh DP. Veľtrh sa uskutočnuje 2 krát počas roka. Úprava a tvorba dizajnu pre všetky mestá organizácie. Tvorba: Plagáty, bannery, trojuholníky, mapy veľtrhu, sprievodca veľtrhu, brožúry, visačky, nálepky pre študentov...",
        images: [
            ["tlac/dp-01.webp", 1241, 1748],
            ["tlac/nlpkfri-03.webp", 1052, 1052],
            ["tlac/nlpkfri-04.webp", 1052, 1052],
            ["tlac/nlpkfri-05.webp", 1052, 1052],
            ["tlac/nlpkfri-06.webp", 1052, 1052],
            ["tlac/tombola-a-peciatky-2024-jar-artboard-2-01.webp", 1311, 1819],
            ["tlac/tombola-a-peciatky-2024-jar-02.webp", 1311, 1819],
            ["tlac/tombola.webp", 1277, 1784],
            ["tlac/dpba-01.webp", 1241, 1748],
            ["tlac/dpke-01.webp", 1241, 1748],
            ["tlac/d.webp", 1209, 1717],
            ["tlac/b.webp", 2000, 929],
            ["tlac/bk.webp", 2000, 929],
            ["tlac/bke.webp", 2000, 398],
            ["tlac/trojza3.webp", 1717, 1209],
            ["tlac/trojza2.webp", 1717, 1209],
            ["tlac/trojza.webp", 1717, 1209],
            ["tlac/mp.webp", 1717, 1209],
            ["tlac/mpz.webp", 1717, 1209],
            ["tlac/mpz2.webp", 1717, 1209],
            ["tlac/mpk.webp", 1717, 1209],
            ["tlac/mpb.webp", 1717, 1209],
            ["tlac/broz1.webp", 1717, 1209],
            ["tlac/broz2.webp", 1717, 1209],
            ["tlac/broz3.webp", 1717, 1209],
            ["tlac/broz4.webp", 1748, 1241],
            ["tlac/mpza.webp", 1209, 1717],
            ["tlac/mpza3-01.webp", 1241, 1748],
            ["tlac/mpza2-03.webp", 1209, 1717],
            ["tlac/mpza1.webp", 1209, 1717],
            ["tlac/dptom.webp", 1209, 1717],
            ["tlac/dpkj.webp", 1209, 1717],
            ["tlac/ocf.webp", 1209, 1717],
            ["tlac/vo.webp", 945, 1311],
            ["tlac/voz.webp", 945, 1311],
            ["tlac/vok.webp", 945, 1311],
            ["tlac/voko.webp", 945, 1311]
        ]
    },
    {
        category: "tlac",
        title: "International Hiking Weekend",
        client: "IAESTE Slovakia",
        year: "2024",
        tools: ["Illustrator"],
        desc: "Návrh dizajnu nálepiek a kartičiek na udalosť",
        images: [
            ["tlac/ihwn1.webp", 1016, 1016],
            ["tlac/ihwn2.webp", 1016, 1016],
            ["tlac/ihwkb.webp", 2000, 1420],
            ["tlac/ihwb.webp", 2000, 1420]
        ]
    },
    {
        category: "tlac",
        title: "Konferencia Step to Jump",
        client: "IAESTE Slovakia",
        year: "2023",
        tools: ["Illustrator"],
        desc: "Návrh dizajnu zberateľských kartičiek pre organizáciu IAESTE Slovakia na konferenciu Step to Jump. Počet kartičiek 100.",
        images: [
            ["tlac/jump-01.webp", 945, 1311],
            ["tlac/jump-02.webp", 945, 1311],
            ["tlac/jumpb-08.webp", 945, 1311],
            ["tlac/jumpb-09.webp", 945, 1311]
        ]
    },
    {
        category: "tlac",
        title: "Vianočný pozdrav",
        client: "IAESTE Slovakia",
        year: "2023",
        tools: ["Illustrator"],
        desc: "Návrh dizajnu pohladnice a etikety.",
        images: [
            ["tlac/pohladnica-03.webp", 2000, 1162],
            ["tlac/etiket-01.webp", 945, 945]
        ]
    },
    {
        category: "tlac",
        title: "Central European Convention",
        client: "IAESTE Slovakia",
        year: "2023",
        tools: ["Illustrator", "Photoshop"],
        desc: "Návrh dizajnu visačiek pre organizáciu IAESTE Slovakia na medzinárodnú konferenciu CEC Slovakia HRABOVO. Visačky boli navrhnuté vo 2 farbách - čierna pre organizátorov, ružová pre účastníkov. Počet vysačiek 165. Návrh dizajnu zberateľských kartičiek pre organizáciu IAESTE Slovakia na medzinárodnú konferenciu CEC Slovakia HRABOVO. Dizajn bol navrhnutý v zlatej a v ružovej farbe. Počet kartičiek 225.",
        images: [
            ["tlac/v-05.webp", 1311, 1819],
            ["tlac/v-121.webp", 1311, 1819],
            ["tlac/v-120.webp", 1311, 1819],
            ["tlac/v-06.webp", 1311, 1819],
            ["tlac/k-22.webp", 945, 1311],
            ["tlac/k-12.webp", 945, 1311],
            ["tlac/k-171.webp", 945, 1311],
            ["tlac/k.webp", 945, 1311]
        ]
    },
    {
        category: "tlac",
        title: "Stáže a IAESTE DAY",
        client: "IAESTE Slovakia",
        year: "2023-2018",
        tools: ["Illustrator", "Photoshop"],
        desc: "Návrh a úprava plagátov pre stáže a udalosť pre študentov - IAESTE DAY.",
        images: [
            ["tlac/jt2-01.webp", 1241, 1748],
            ["tlac/jt3-01.webp", 1241, 1748],
            ["tlac/jt4-04.webp", 1241, 1748],
            ["tlac/jt5-08.webp", 1241, 1748],
            ["tlac/staze-01.webp", 1241, 1748],
            ["tlac/id3-01.webp", 1241, 1748],
            ["tlac/idza-01.webp", 1241, 1748],
            ["tlac/id2-01.webp", 1241, 1748],
            ["tlac/staz.webp", 1742, 659]
        ]
    },
    {
        category: "tlac",
        title: "Annual Conference",
        client: "IAESTE Slovakia",
        year: "2020",
        tools: ["Illustrator", "Photoshop"],
        desc: "Návrh rollupu na konferenciu AC",
        images: [
            ["tlac/rollupzeleny-01.webp", 868, 2000],
            ["tlac/roll-02.webp", 868, 2000]
        ]
    },
    {
        category: "tlac",
        title: "Čarotajky",
        client: "",
        year: "2022",
        tools: ["Illustrator", "Photoshop"],
        desc: "Návrh etikiet pre sadu sviečok s prekvapením.",
        images: [
            ["tlac/caro.webp", 2000, 1414],
            ["tlac/vianca.webp", 2000, 1414],
            ["tlac/medo.webp", 2000, 1414],
            ["tlac/choco.webp", 2000, 1414],
            ["tlac/vianc.webp", 2000, 1414],
            ["tlac/med.webp", 2000, 1414]
        ]
    },
    {
        category: "tlac",
        title: "Rozlúčka so slobodou",
        client: "",
        year: "2022",
        tools: ["Illustrator"],
        desc: "Návrh tlačovín na rozlúčku so slobodou",
        images: [
            ["tlac/bride.webp", 1241, 1748],
            ["tlac/bride2.webp", 1209, 1717],
            ["tlac/bride3.webp", 1241, 1748]
        ]
    },
    {
        category: "tlac",
        title: "Narodeninový darček",
        client: "",
        year: "2022",
        tools: ["Illustrator", "Photoshop"],
        desc: "Custom Monopoly Alfa Romeo",
        images: [
            ["tlac/mnpol.webp", 2000, 2000],
            ["tlac/pokladnica.webp", 2000, 1414],
            ["tlac/pokladnica2.webp", 2000, 1414],
            ["tlac/pokladnica3.webp", 2000, 1414],
            ["tlac/sanca.webp", 2000, 1414],
            ["tlac/sanca2.webp", 2000, 1414],
            ["tlac/sanca3.webp", 2000, 1414],
            ["tlac/kart1.webp", 1241, 1748],
            ["tlac/kart2.webp", 1241, 1748],
            ["tlac/kart3.webp", 1241, 1748],
            ["tlac/kart4.webp", 1241, 1748],
            ["tlac/kart5.webp", 1241, 1748],
            ["tlac/kart6.webp", 1241, 1748],
            ["tlac/money.webp", 2000, 1024],
            ["tlac/money2.webp", 2000, 1024],
            ["tlac/money3.webp", 2000, 1024],
            ["tlac/money6.webp", 2000, 1017],
            ["tlac/money7.webp", 2000, 1017],
            ["tlac/money4.webp", 2000, 1024],
            ["tlac/money5.webp", 2000, 1024]
        ]
    },
    {
        category: "tlac",
        title: "Fakulta riadenia a informatiky, Žilinská Univerzita",
        client: "",
        year: "2022-2021",
        tools: ["Illustrator"],
        desc: "Návrh plagátu na predmet Projekt 1 a 3",
        images: [
            ["tlac/pr1.webp", 2000, 1402],
            ["tlac/pr2.webp", 2000, 1402]
        ]
    },
    {
        category: "tlac",
        title: "IAESTE CUP",
        client: "IAESTE Slovakia",
        year: "2019",
        tools: ["Illustrator", "Photoshop"],
        desc: "Návrh nálepiek pre účastníkov - súťaž v stolnom futbale IAESTE CUP",
        images: [
            ["tlac/nlpk.webp", 1209, 1717],
            ["tlac/nlpk2.webp", 1209, 1717]
        ]
    },
    {
        category: "tlac",
        title: "Ples pod Pilskom",
        client: "",
        year: "2020",
        tools: ["Illustrator", "Photoshop"],
        desc: "Návrh plagátu a vstupenky na ples.",
        images: [
            ["tlac/ples.webp", 1209, 1717],
            ["tlac/listok-ples.webp", 2000, 651]
        ]
    },
    {
        category: "soc-siete",
        title: "Veľtrh Dni Príležitostí",
        client: "IAESTE Slovakia",
        year: "2023-2018",
        tools: ["Illustrator", "Photoshop"],
        desc: "Úprava a tvorba dizajnu na sociálne siete. Tvorba: Titulky na FB, príspevky na FB, Instagram, Linkedin",
        images: [
            ["soc-siete/dpall.webp", 2000, 1125],
            ["soc-siete/dpba2.webp", 2000, 1125],
            ["soc-siete/dpall2.webp", 2000, 1125],
            ["soc-siete/dpba.webp", 2000, 1125],
            ["soc-siete/dpke.webp", 2000, 1125],
            ["soc-siete/dpza.webp", 2000, 1125],
            ["soc-siete/dpza2.webp", 1380, 1380],
            ["soc-siete/dpdob.webp", 1380, 1380],
            ["soc-siete/dpt.webp", 1380, 1380],
            ["soc-siete/dppa.webp", 1380, 1380],
            ["soc-siete/dptomb.webp", 1380, 1380],
            ["soc-siete/dpp.webp", 1380, 1380],
            ["soc-siete/dppr.webp", 1380, 1380],
            ["soc-siete/dppr2.webp", 1380, 1380],
            ["soc-siete/dppr3.webp", 1380, 1380],
            ["soc-siete/dpp6.webp", 1380, 1380],
            ["soc-siete/dpp2.webp", 1380, 1380],
            ["soc-siete/dpp3.webp", 1380, 1380],
            ["soc-siete/dpp7.webp", 1380, 1380],
            ["soc-siete/dpp4.webp", 1380, 1380],
            ["soc-siete/dpp5.webp", 1380, 1380],
            ["soc-siete/dptom.webp", 1380, 1380],
            ["soc-siete/dpocf.webp", 2000, 2000],
            ["soc-siete/ocf.webp", 2000, 1062]
        ]
    },
    {
        category: "soc-siete",
        title: "Stáže",
        client: "IAESTE Slovakia",
        year: "2023-2018",
        tools: ["Illustrator", "Photoshop"],
        desc: "Úprava a tvorba dizajnu na sociálne siete. Tvorba: Titulky na FB, príspevky na FB, Instagram, Linkedin",
        images: [
            ["soc-siete/jt.webp", 2000, 1125],
            ["soc-siete/jt2.webp", 2000, 1125],
            ["soc-siete/jt3.webp", 2000, 1125],
            ["soc-siete/jt4.webp", 2000, 1125],
            ["soc-siete/jaz.webp", 1380, 1380],
            ["soc-siete/jaz2.webp", 1380, 1380],
            ["soc-siete/jaz3.webp", 1380, 1380],
            ["soc-siete/jt-01.webp", 2000, 2000],
            ["soc-siete/jt-02.webp", 1380, 1380],
            ["soc-siete/contact.webp", 1380, 1380],
            ["soc-siete/staze.webp", 2000, 1414]
        ]
    },
    {
        category: "soc-siete",
        title: "Plagát",
        client: "",
        year: "2023",
        tools: ["Photoshop"],
        desc: "Návrh plagátu na kritie.",
        images: [
            ["soc-siete/sisa.webp", 2000, 1062]
        ]
    },
    {
        category: "soc-siete",
        title: "International Hiking Weekend",
        client: "IAESTE Slovakia",
        year: "2022, 2019",
        tools: ["Illustrator", "Photoshop"],
        desc: "Titulka a príspevky na soc siete pre udalosť IHW",
        images: [
            ["soc-siete/titulka-ihw1.webp", 2000, 1125],
            ["soc-siete/titulka-ihw2.webp", 2000, 1125],
            ["soc-siete/titulka-ihw.webp", 2000, 1125],
            ["soc-siete/ihwrl.webp", 1380, 1380],
            ["soc-siete/ihwrl2.webp", 1380, 1380],
            ["soc-siete/ihwreg.webp", 1380, 1380],
            ["soc-siete/ihwreg2.webp", 1380, 1380]
        ]
    },
    {
        category: "soc-siete",
        title: "Akcie pre študentov",
        client: "IAESTE Slovakia",
        year: "2019, 2018",
        tools: ["Illustrator"],
        desc: "Titulka pre udalosť pre študentov IAESTE CUP a Cestovatelský kvíz.",
        images: [
            ["soc-siete/ic.webp", 2000, 1125],
            ["soc-siete/ic2.webp", 2000, 1125],
            ["soc-siete/cestkviz.webp", 2000, 1125]
        ]
    },
    {
        category: "tricko",
        title: "International Hiking Weekend",
        client: "IAESTE Slovakia",
        year: "2024, 2022, 2019",
        tools: ["Illustrator", "Photoshop"],
        desc: "Návrh dizajnu na tričko",
        images: [
            ["tricko/ihw2024.webp", 2000, 1389],
            ["tricko/ihw24z.webp", 1241, 1748],
            ["tricko/ihw24p.webp", 2000, 1399],
            ["tricko/ihw3.webp", 1241, 1748],
            ["tricko/ihw4.webp", 2000, 1399],
            ["tricko/ihwt.webp", 1748, 1241],
            ["tricko/ihw.webp", 1748, 1241],
            ["tricko/ihw1.webp", 1241, 1748],
            ["tricko/ihw2.webp", 1241, 1748]
        ]
    },
    {
        category: "tricko",
        title: "Step to Jump",
        client: "IAESTE Slovakia",
        year: "2023",
        tools: ["Illustrator", "Photoshop"],
        desc: "Návrh dizajnu na tričko",
        images: [
            ["tricko/stept.webp", 2000, 1389],
            ["tricko/step-01.webp", 1414, 2000],
            ["tricko/step-02.webp", 2000, 1414]
        ]
    },
    {
        category: "tricko",
        title: "Central European Convention",
        client: "IAESTE Slovakia",
        year: "2023",
        tools: ["Illustrator", "Photoshop"],
        desc: "Návrh dizajnu tričiek na konferenciu CEC.",
        images: [
            ["tricko/cec.webp", 2000, 1389],
            ["tricko/cec2.webp", 2000, 1389],
            ["tricko/cec4.webp", 2000, 1402],
            ["tricko/cec3.webp", 2000, 1402],
            ["tricko/cec6.webp", 2000, 1402],
            ["tricko/cec5.webp", 2000, 1402]
        ]
    },
    {
        category: "tricko",
        title: "Midnight Nature",
        client: "",
        year: "2023",
        tools: ["Illustrator", "Photoshop"],
        desc: "Menšie úpravy dizajnu pre tričko a mikinu",
        images: [
            ["tricko/hood.webp", 1748, 1241],
            ["tricko/white.webp", 1748, 1241],
            ["tricko/fr2.webp", 1241, 1748],
            ["tricko/fr.webp", 1241, 1748]
        ]
    },
    {
        category: "ine",
        title: "Logo ottin",
        client: "ottin",
        year: "2026",
        tools: ["Illustrator"],
        desc: "Vytvorenie loga na mieru – vydra, ktorej tvár tvoria programátorské zátvorky { }, a nápis v hranatých zátvorkách. Farebná aj čiernobiela verzia, na svetlé aj tmavé pozadie, vo zvislom aj vodorovnom usporiadaní.",
        images: [
            ["ine/ottin.webp", 1182, 1054],
            ["ine/ottin-2.webp", 1182, 1054],
            ["ine/ottin-3.webp", 1182, 1054],
            ["ine/ottin-4.webp", 2000, 959],
            ["ine/ottin-5.webp", 2000, 959],
            ["ine/ottin-6.webp", 2000, 959]
        ]
    },
    {
        category: "ine",
        title: "Noviny SME MGR. na promócie",
        client: "",
        year: "2026",
        tools: ["Illustrator", "Photoshop"],
        desc: "Vtipná titulná strana novín ako darček na promócie – v štýle starých novín, so správami zo sveta Pána prsteňov.",
        images: [
            ["ine/noviny-mgr.webp", 1414, 2000]
        ]
    },
    {
        category: "ine",
        title: "Pohľadnica v štýle Pána prstenov na promócie",
        client: "",
        year: "2024",
        tools: ["Photoshop"],
        desc: "",
        images: [
            ["ine/promocie.webp", 2000, 1414]
        ]
    },
    {
        category: "ine",
        title: "Logo Central European Convention",
        client: "IAESTE Slovakia",
        year: "2023",
        tools: ["Illustrator", "Photoshop"],
        desc: "Návrh loga na udalosť CEC",
        images: [
            ["logo/logocec.webp", 1380, 1380],
            ["logo/logocec2.webp", 1380, 1380]
        ]
    },
    {
        category: "ine",
        title: "Katalóg Job",
        client: "IAESTE Slovakia",
        year: "2023 - 2022",
        tools: ["Illustrator", "Photoshop"],
        desc: "Návrh a úprava brožúry pre študentov - Katalóg Job",
        images: [
            ["ine/kj.webp", 2000, 1402],
            ["ine/kj2022.webp", 2000, 1402]
        ]
    },
    {
        category: "ine",
        title: "Lavis Servis",
        client: "",
        year: "2023",
        tools: ["Illustrator", "Photoshop"],
        desc: "Návrh webdesignu a naprogramovanie stránky pre Lavis-servis",
        images: [
            ["ine/ls.webp", 2000, 1875]
        ]
    },
    {
        category: "ine",
        title: "Custom hry a pohľadnice",
        client: "",
        year: "2022, 2019, 2018",
        tools: ["Illustrator", "Photoshop"],
        desc: "Custom hry, pohľadnice",
        images: [
            ["ine/kika.webp", 1209, 1717],
            ["ine/kika2.webp", 2000, 1402],
            ["ine/sima2.webp", 1209, 1717],
            ["ine/lenka.webp", 1209, 1717],
            ["ine/lenka2.webp", 2000, 1402],
            ["ine/sima.webp", 2000, 1402],
            ["ine/pohlad.webp", 2000, 1402]
        ]
    },
];
