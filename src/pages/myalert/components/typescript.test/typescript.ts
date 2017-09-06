// let x:number;
// let y: number |undefined;
// let z:number | null |undefined;
// x=1;
// y=undefined;
// z=null;

// // ×
// // y=z;
// // x=y;
// // x=z;

// // √
// y=x;
// z=y;
// z=x;
// z=y=x;
// z=x=y;
// // ===============
// enum color{
//     red="red",
//     blue="blue",
//     green="green",
// }
// // =================
// function arrayMap<T,U>(f:(x:T)=>U):(a:T[])=>U[]{
//     return a=>a.map(f)
// }

// const lengths:(a:string[])=>number[]=arrayMap(s=>s.length);
// // ============
// let a:Promise<string>=new Promise(resolve=>{resolve("10")});
// // ====
// let f:<T>(x:T)=>T=y=>y;
// // ====可选参数===
// interface Options{
//     data?:string,
//     timeout?:number,
//     checked?:boolean,
// }

// function sendMsg(options:Options){

// }

// const opts={
//     data:"Hellow",
//     retrioy:"true",
// }

// sendMsg(opts);
// // ========接口==========
// interface SquareConfig1{
//     readonly color?:string;
//     width?:number;
// }

// function createSquare1(config:SquareConfig):{color:string;area:number}{
//     let newSquare={color:'red',area:100};
//     if(config.color){
//         newSquare.color=config.color;
//     }
//     if(config.width){
//         newSquare.area=config.width*config.width;
//     }
//     return newSquare;
// }

// let mySquare1=createSquare({color:"red",width:10})
// // =====================
// interface SquareConfig {
//     color?: string;
//     width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//     let newSquare={color:'red',area:100};
//     if(config.color){
//         newSquare.color=config.color;
//     }
//     if(config.width){
//         newSquare.area=config.width*config.width;
//     }
//     return newSquare;
// }

// // let mySquare = createSquare({ colour: "red", width: 100 });
// // ======================
// interface StringArray{
//     [index:number]:string;
// }

// let myArray0:StringArray;
// myArray0=['1','2','3'];
// let myStr:string=myArray0[0];
// // ==================
// class Animal{
//     name:string;
// }
// class Dog extends Animal{
//     breed:string;
// }
// //共有支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，
// //但是数字索引的返回值必须是字符串索引返回值类型的子类型。 
// // 错误：使用'string'索引，有时会得到Animal!
// // interface ErrorInterface{
// //     [n:number]:Animal;
// //     [n:string]:Dog;
// // }

// // ===========================
// interface NumberDictionary{
//     [index:string]:number;
//     length:number;
//     // name:string; // 错误，`name`的类型与索引类型返回值的类型不匹配
// }

// // =========在接口中描述一个方法，在类里实现它，=========
// interface ClockInterface{
//     currentTime:Date;
//     setTime(d:Date);
// }

// class Clock implements ClockInterface{
//     currentTime:Date;
//     setTime(d:Date){
//         this.currentTime=new Date();
//     }

//     constructor(h:number,m:number){}
// //接口描述了类的公共部分，而不是公共和私有两部分。 
// //它不会帮你检查类是否具有某些私有成员。
// }
// // ==============================

// // ======继承==========
// class Animal {
//     name: string;
//     constructor(thename: string) {
//         this.name = thename
//     }
//     Move(distanceInMeter:number=0){
//         console.log(`${this.name} moved ${distanceInMeter}m.`)
//     }
// }

// class Sanke extends Animal{
//     constructor(name:string){
//         super(name);
//     }
//     move(distanceInMeter=5){
//         super.Move(distanceInMeter);
//     }
// }

// // ==============