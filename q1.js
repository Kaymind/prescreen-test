let regex = /\s+(\w)?/gi;

String.prototype.camelCase = function(){
    let output = this.toLowerCase().replace(regex, function(match, letter) {
        return letter.toUpperCase();
    })
    return output;
}

const res = 'I have some spaces in it'.camelCase();
console.log(res)