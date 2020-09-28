const LinkedList = require('./LinkedList');

const HashMap = require('./HashMap');

function main() {

    lotrFunc = () => {
        let lotr = new HashMap();
        lotr.MAX_LOAD_RATIO = 0.5;
        lotr.SIZE_RATIO = 3;
        lotr.set('Hobbit', 'Bilbo');
        lotr.set('Hobbit', 'Frodo');
        lotr.set('Wizard', 'Gandalf');
        lotr.set('Human', 'Aragorn');
        lotr.set('Elf', 'Legolas');
        lotr.set('Maiar', 'Sauron');
        lotr.set('Maiar', 'The Necromancer');
        lotr.set('RingBearer', 'Gollum');
        lotr.set('LadyOfLoght', 'Galadriel');
        lotr.set('HalfElven', 'Arwen');
        lotr.set('Ent', 'Treebeard');
        console.log(lotr.get('HalfElvenc'))
    };

    //This function sets and resets the key 'Hello World' on both hash maps.
    WhatDoesThisDo = () => {
        let str1 = 'Hello World.';
        let str2 = 'Hello World.';
        let map1 = new HashMap();
        map1.set(str1,10);
        map1.set(str2,20);
        let map2 = new HashMap();
        let str3 = str1;
        let str4 = str2;
        map2.set(str3,20);
        map2.set(str4,10);
    
        console.log(map1.get(str1));
        console.log(map2.get(str3));
    };

    deleteAll = (str) => {
       var newObj = {};
       let answer = '';
       for(let i = 0; i < str.length; i++){
           if(str[i] in newObj){
               i++
           }
           newObj[str[i]] = true;
       }
       for(var key of Object.keys(newObj)){
         answer+=key
       }
       console.log(answer)
    }

    palindrome = (str) => {
        let obj = {};
        let odd = 0;
        for(let i = 0; i < str.length; i++) {
            if(obj[str[i]] === undefined){
                obj[str[i]] = 1;
            } else {
                obj[str[i]]++
            }
        }
        for(var key of Object.keys(obj)){
            if(obj[key] % 2 === 1) {
                odd++
            }
        }
        if(odd > 1) {
            return false;
        }
        return true;
    }

    anagramGrouping = (array) => {
        let result = {};
        for(let i = 0; i<array.length; i++) {
            let current = sortString(array[i]);
            if(result[current]){
                result[current].push(array[i]);
            } else {
                result[current] = [array[i]];
            }
        }
        return result;
    }

    sortString = (str) => {
        return str.split('').sort().join(''); 
    }

    chainedList = (arr) => {
        let result = {};
        for(let i = 0; i < arr.length; i++) {
            if(result[arr[i]]){
                result[current].push(array[i]);
            } else {
                result[current] = [array[i]];
            }
        }
    }

}

main();

