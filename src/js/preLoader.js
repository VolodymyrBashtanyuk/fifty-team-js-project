
import { Loading } from 'notiflix/build/notiflix-loading-aio';
class LoadSpinner{
    constructor(){}
    startSpinner(){
        Loading.arrows({
            svgColor: '#ff6b01',
        });
    }
    removeSpinner(){
        Loading.remove();
        
    }
    erorrSpinner(){
        Loading.arrows("temporary problems",{
            svgColor :"#ff6b01",
        })
    }
}
export default new LoadSpinner();