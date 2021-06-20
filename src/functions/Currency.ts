


export const PrettyMoney = (money: number) => {
    let str: string = money.toString();
    let a : number = str.length % 3;
    let b : number = str.length / 3 - a / 3;
    let r = str.slice(0, a) + ".";
    for (let i = 0; i < b; i++) {
        let s = 3 * i + a;
        r += str.slice(s, s + 3) + ".";
    }
    // console.log("hihi: ", r.slice(0, -1))
    return r.slice(0, -1)
}