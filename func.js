function sumRecords(){
    var args = [].slice.call(arguments);

    return args.reduce(function(val1, val2){
        return parseInt(val1, 10) + parseInt(val2, 10);
    });
}

function allWord(){
    var args = [].slice.call(arguments);

    return args.map(function(element){
        return element.toLowerCase().trim();
    })
    
}

function isHasOrNot(option){
    var args = [].slice.call(arguments, 1);
    switch(option){
        case 1:
            return args.every(function(element, index, array){
                var testExp = /^[a-zA-z]+$/;
                return testExp.test(element);
             });
        case 2:
            return args.some(function(element, index, array){
                var testExp = /^[a-zA-Z]+$/;
                return testExp.test(element);
            })


    }
}

function makeString(ldim, rdim, str){
    return ldim + str + rdim;
};
var named = makeString.bind(undefined, "-", "-");


function bindFirstArg(fn, a){
    return function(b){
        return fn(a,b);
    }
}

function add(a, b){
    return a + b;
}

function multiply(a, b){
    return a * b;
}


function makeStr(str, ldim = "'", rdim = "'"){
    return ldim + str + rdim;
}

console.log(makeStr(169));


var addOne = bindFirstArg(add, 5);
console.log(addOne(5));
console.log(addOne(10));

var multiOne = bindFirstArg(multiply, 2);
console.log(multiOne(2));
console.log(multiOne(5));






console.log(named("Teste"));


var sum  = sumRecords("2.3", 2, 1, 3, "16", 12.1);
console.log(sum);

var word = allWord("Johnny ", " Brooks");
console.log(word);

var teste = isHasOrNot(2, "Johhny", "Brooks", 12);
console.log(teste)