//定义数据类型 布尔值 数字 字符串 结构体

/**布尔值*/
let isDone: boolean = false;

// 数字
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

/**字符串*/
let mname: string = "bob";

mname = "smith";

/**数组*/
let list: number[] = [1, 2, 3];
let list1: Array<number> = [1, 2, 3];

/**元祖
 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组
 */
let x: [string, number];
x = ['hello', 10]; //OK

//x = [10, 'hello'] //Error

//当访问一个越界的元素，会使用联合类型替代
// x[3] = 'world';

/**枚举 从0开始为元素编号。 你也可以手动的指定成员的数值*/
enum Color {Red, Green, Blue}

let c: Color = Color.Red;   //输出0

enum LanguType {JAVA = 1, JavaScript}

let l: LanguType = LanguType.JAVA; //输出1

//也可以全部手动
enum Food {Pie = 1, Meat = 4}

let f: Food = Food.Meat; //输出4

/**Any 在编程阶段还不清楚类型的变量或只知道一部分数据的类型时，指定这个类型*/
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

/**Void void类型像是与any类型相反，它表示没有任何类型,当一个函数没有返回值时，你通常会见到其返回值类型是void*/
function warnUser(): void {
    console.log("This is my warning message");
}

/**Null 和 Undefined undefined和null两者各自有自己的类型分别叫做undefined和null，定义的意义不大*/
let u: undefined = undefined;
let n: null = null;

/**never:表示的是那些永不存在的值的类型**/
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function other(message: string) {
    return "bad"
}

/**Object:表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型**/

let o = {
    a: 'foo',
    b: 12,
    c: 'bar'
};

let {a, b} = o;

class Student {
    fullName: string;

    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string,
    lastName: string
}

function greeter(person: Person) {
    return "Hello," + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);
