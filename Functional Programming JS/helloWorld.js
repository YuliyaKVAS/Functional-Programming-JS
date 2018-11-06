function upperCaser(input){
    var result = '';
    var pre = '';
    for(let i = 0; i<input.length; i++){
        if(input.charCodeAt(i)>=97 && input.charCodeAt(i)<=122){
            pre = input.charCodeAt(i) - 32;
        }
        else{
            pre = input.charCodeAt(i);
        }
        result += String.fromCharCode(pre)
    }
    return result;
}

module.exports = upperCaser;