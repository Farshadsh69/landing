import fa_ir  from "./fa";
import en_us from "./en";


const lang=localStorage.getItem('lang')?localStorage.getItem('lang'):'en'


const direction={
    fa:'rtl',
    en:'ltr'
}
function getDirection(){
return direction[lang]
}
export {getDirection}

const fonts={
 fa:'IRANSans',
 en:'Barlow Black'
}
function getFonts(){
    return fonts[lang]
}
export {getFonts}


const translate={
fa:fa_ir,
en:en_us
}
function getTranslate(){
    return translate[lang]
}
export {getTranslate}