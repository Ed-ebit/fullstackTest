import TabPane from "antd/lib/tabs/TabPane";

export const awesomeCalc = ( [numerator, denominator, length, width, pitch] ) =>{
    let result = {
        result:''
    }
    console.log(numerator, denominator, length, width, pitch)
    const basePlane= +length * +width;
    const desiredShareOfBasePlane = numerator/denominator;
    const widthToDeduct = Math.abs(2.3/(Math.tan(pitch))); 
    console.log (widthToDeduct)
    if(+width-2*widthToDeduct <= 0) {return result ={result: 'die Deckenhöhe erreicht nie 2.30 m'}}
    const usableWidth = +width-2*widthToDeduct
    const usablePlane = usableWidth*+length
    const usableShareOfBasePlane = usablePlane/basePlane;
    result ={ 
        result:'', 
        basePlane: basePlane, 
        desiredShareOfBasePlane: desiredShareOfBasePlane,
        usablePlane: usablePlane,
        usableShareOfBasePlane: usableShareOfBasePlane, 
    } 
    if (usableShareOfBasePlane >= desiredShareOfBasePlane) {
        return ({...result, result:'ERFOLG, Vollgeschoss!'      
        })
    } else {
        return ({...result, result:'MISSERFOLG, kein Vollgeschoss!'      
        })
    }
}