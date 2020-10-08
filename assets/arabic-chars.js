var AChars = [
    { n:  1, letra:'A',  caracter:'alif' ,  som: new Audio('assets/audio/alif_a.mp3') , isolada: "ا", fim: "ـا", meio: "ـا", comeco: "ا", egoista: true},
    { n:  2, letra:'B',  caracter:'baa'  ,  som: new Audio('assets/audio/baa_a.mp3')  , isolada: "ب", fim: "ـب", meio: "ـبـ", comeco: "بـ", },
    { n:  3, letra:'T',  caracter:'taa'  ,  som: new Audio('assets/audio/taa_a.mp3')  , isolada: "ت", fim: "ـت", meio: "ـتـ", comeco: "تـ", },
    { n:  4, letra:'TH', caracter:'thaa' ,  som: new Audio('assets/audio/thaa_a.mp3') , isolada: "ث", fim: "ـث", meio: "ـثـ", comeco: "ثـ", },
    { n:  5, letra:'J',  caracter:'jiim' ,  som: new Audio('assets/audio/jiim_a.mp3') , isolada: "ج", fim: "ـج", meio: "ـجـ", comeco: "جـ", },
    { n:  6, letra:'H',  caracter:'Haa'  ,  som: new Audio('assets/audio/Haa_a1.mp3') , isolada: "ح", fim: "ـح", meio: "ـحـ", comeco: "حـ", },
    { n:  7, letra:'KH', caracter:'khaa' ,  som: new Audio('assets/audio/khaa_a.mp3') , isolada: "خ", fim: "ـخ", meio: "ـخـ", comeco: "خـ", },
    { n:  8, letra:'D',  caracter:'daal' ,  som: new Audio('assets/audio/daal_a.mp3') , isolada: "د", fim: "ـد", meio: "ـد", comeco: "د", egoista: true},
    { n:  9, letra:'DH', caracter:'dhaal',  som: new Audio('assets/audio/dhaal_a.mp3'), isolada: "ذ", fim: "ـذ", meio: "ـذ", comeco: "ذ", egoista: true},
    { n: 10, letra:'R',  caracter:'raa'  ,  som: new Audio('assets/audio/raa_a.mp3')  , isolada: "ر", fim: "ـر", meio: "ـر", comeco: "ر", egoista: true},
    { n: 11, letra:'Z',  caracter:'zaa'  ,  som: new Audio('assets/audio/zaa_a.mp3')  , isolada: "ز", fim: "ـز", meio: "ـز", comeco: "ز", egoista: true},
    { n: 12, letra:'S',  caracter:'siin' ,  som: new Audio('assets/audio/siin_a.mp3') , isolada: "س", fim: "ـس", meio: "ـسـ", comeco: "سـ", },
    { n: 13, letra:'SH', caracter:'shiin',  som: new Audio('assets/audio/shiin_a.mp3'), isolada: "ش", fim: "ـش", meio: "ـشـ", comeco: "شـ", },
    { n: 14, letra:'S',  caracter:'saad' ,  som: new Audio('assets/audio/saad_a.mp3') , isolada: "ص", fim: "ـص", meio: "ـصـ", comeco: "صـ", },
    { n: 15, letra:'D',  caracter:'daad' ,  som: new Audio('assets/audio/daad_a.mp3') , isolada: "ض", fim: "ـض", meio: "ـضـ", comeco: "ضـ", },
    { n: 16, letra:'T',  caracter:'Taa2' ,  som: new Audio('assets/audio/Taa2_a.mp3') , isolada: "ط", fim: "ـط", meio: "ـطـ", comeco: "طـ", },
    { n: 17, letra:'DH', caracter:'dhaa' ,  som: new Audio('assets/audio/dhaa_a.mp3') , isolada: "ظ", fim: "ـظ", meio: "ـظـ", comeco: "ظـ", },
    { n: 18, letra:'A',  caracter:'ayn'  ,  som: new Audio('assets/audio/ayn_a.mp3')  , isolada: "ع", fim: "ـع", meio: "ـعـ", comeco: "عـ", },
    { n: 19, letra:'GH', caracter:'ghayn',  som: new Audio('assets/audio/ghayn_a.mp3'), isolada: "غ", fim: "ـغ", meio: "ـغـ", comeco: "غـ", },
    { n: 20, letra:'F',  caracter:'faa'  ,  som: new Audio('assets/audio/faa_a.mp3')  , isolada: "ف", fim: "ـف", meio: "ـفـ", comeco: "فـ", },
    { n: 21, letra:'Q',  caracter:'qaaf' ,  som: new Audio('assets/audio/qaaf_a.mp3') , isolada: "ق", fim: "ـق", meio: "ـقـ", comeco: "قـ", },
    { n: 22, letra:'K',  caracter:'kaaf' ,  som: new Audio('assets/audio/kaaf_a.mp3') , isolada: "ك", fim: "ـك", meio: "ـكـ", comeco: "كـ", },
    { n: 23, letra:'L',  caracter:'laam' ,  som: new Audio('assets/audio/laam_a.mp3') , isolada: "ل", fim: "ـل", meio: "ـلـ", comeco: "لـ", },
    { n: 24, letra:'M',  caracter:'miim' ,  som: new Audio('assets/audio/miim_a.mp3') , isolada: "م", fim: "ـم", meio: "ـمـ", comeco: "مـ", },
    { n: 25, letra:'N',  caracter:'nuun' ,  som: new Audio('assets/audio/nuun_a.mp3') , isolada: "ن", fim: "ـن", meio: "ـنـ", comeco: "نـ", },
    { n: 26, letra:'H',  caracter:'haa'  ,  som: new Audio('assets/audio/haa_a2.mp3') , isolada: "ه", fim: "ـه", meio: "ـهـ", comeco: "هـ", },
    { n: 27, letra:'W',  caracter:'waaw' ,  som: new Audio('assets/audio/waaw_a.mp3') , isolada: "و", fim: "ـو", meio: "ـو", comeco: "و", },
    { n: 28, letra:'Y',  caracter:'yaa'  ,  som: new Audio('assets/audio/yaa_a.mp3')  , isolada: "ي", fim: "ـي", meio: "ـيـ", comeco: "يـ", }
];