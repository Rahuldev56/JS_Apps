class Person{

    constructor(fname,lname){
        this.fname=fname;
        this.lname=lname;

    }
    printName(){
        console.log(`My Name is ${this.fname} ${this.lname}`)

    }
}
const p1= new Person('Rahul','Dev')
const p2= new Person('Karan','Sharma')
p1.printName();