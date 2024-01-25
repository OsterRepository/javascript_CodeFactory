/**
 * Inheritance
 */
class IdolModel{
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class FemaleIdolModel extends IdolModel{
    dance(){
        return '여자 아이돌이 춤을 춥니다.';
    }
}

class MaleIdolModel extends IdolModel{
    sing(){
        return '남자 아이돌이 노래를 부릅니다.'
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin.dance());

const jiMin = new MaleIdolModel('지민', 1995);
console.log(jiMin);
console.log(jiMin.sing());
console.log(jiMin.year);

const cf = new IdolModel('코팩', 1992);
console.log(cf);

console.log(cf.name);

console.log(yuJin instanceof  IdolModel);
console.log(yuJin instanceof  MaleIdolModel);

console.log(jiMin instanceof  IdolModel);
console.log(jiMin instanceof  MaleIdolModel);

console.log(cf instanceof  IdolModel);
console.log(cf instanceof  MaleIdolModel);




