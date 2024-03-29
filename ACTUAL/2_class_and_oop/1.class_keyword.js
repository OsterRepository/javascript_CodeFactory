/**
 * Class Keyword
 */
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    syaName(){
        return `안녕하세요 저는 ${this.name}입니다`;
    }
}

// constructor - 생성자
const yuJIn = new IdolModel('안유진', 2003);
console.log(yuJIn);
const wonYoung = new IdolModel('장원영', 2004);
console.log(wonYoung);
const gaeul = new IdolModel('가을', 2002);
console.log(gaeul);
const ray = new IdolModel('레이', 2004);
console.log(ray);
const liz = new IdolModel('리즈', 2004);
console.log(liz);
const eseo = new IdolModel('이서', 2007);
console.log(eseo);

console.log(yuJIn.name);
console.log(yuJIn.year);

console.log(yuJIn.syaName());
console.log(wonYoung.syaName());

console.log(typeof IdolModel);
console.log(typeof yuJIn);

