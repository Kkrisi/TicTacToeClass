import JatekTer from "./JatekTer.js"


class Allapotkezelo {

const jatekLISTA = [" "," ","X","O"," "," "," "," "," ",]
let lepes = 0;  
/*ha a lepes szamlalo paros, akkor x következik, ha ptlan akkor 0,
A lépészámlálót midnig növeljuk, ha rakattintunk egy elemre*/

new JatekTer(this.#jatekLISTA);

$(window).on("kattintasom",(event)=>{
    console.log(event.detail)

    let index = event.detail;
    if (lepes%2===0){
        jatekLISTA[index] = "X";
    } else {
        jatekLISTA[index] = "O";
    }
    this.#lepes++;

    /*Ujra megjelnitem a program állapotát*/
    new JatekTer(this.#jatekLISTA);
})

}
