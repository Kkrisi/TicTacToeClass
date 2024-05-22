
export default class Elem {

    #ertek=""
    #szuloElem;
    #divElem;
    #index= 0;

    constructor(index, ertek,szuloElem){
        this.#index=index
        this.#ertek=ertek
        this.#szuloElem=szuloElem;
        this.#megjelenit()
        /*esemenykezelo*/
        /*a div elem megfogása*/
        this.#divElem = this.#szuloElem.children("div:last-child")
        console.log(this.#divElem)
        this.#divElem.on("click",()=>{
            console.log(this.#index)
            this.#trigger("kattintasom")
        });
    }

    #megjelenit(){
        /*elkészítjuk a html kodot*/
        let txt=`
            <div class="elem">
                <p>${this.#ertek}</p>
            </div>
        `

        this.#szuloElem.append(txt);
    }

    /*sajat esemeny letrehozasa*/
    #trigger(esemenyNev){
        const e = new CustomEvent(esemenyNev,{detail:this.#index})
        /*Az eseményt elerhetove teszem az egesz programban*/
        window.dispatchEvent(e)
    }
}