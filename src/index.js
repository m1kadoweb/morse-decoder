const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};



function decode(expr) {
    var encod_let = [];
    var decode_str = '';


    for(let i = 0; i < expr.length / 10; i++) {  
        encod_let[i] = expr.substr(i * 10, 10) 
    }

    for(let i = 0; i < encod_let.length; i++) {  
        encod_let[i] = encod_let[i].replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-')
        decode_str += MORSE_TABLE[encod_let[i]] || ' '
    }
    
    return decode_str.trim()
}


module.exports = {
    decode
}