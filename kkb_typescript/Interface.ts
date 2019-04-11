// interface LabelledValue {
//     label: string,
//     size?: number //该属性可选
//     readonly x: number //只读属性
// }

function printLabel(labelledObj: { label: string, size: number }) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: 'Size 10 Object', x: 20};
printLabel(myObj);


let a: number[] = [1, 2.3, 4];
let ro: ReadonlyArray<number> = a;

//a = ro//error
a = ro as number[];

interface StringArray {
    [index: number]: string
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];
let myStr: string = myArray[0];

console.log("myStr", myStr);
