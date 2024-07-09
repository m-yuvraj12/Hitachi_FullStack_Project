function isNumeric(str: string): boolean {
    return /^[0-9]+$/.test(str);
}

export function validateEmail(email:string):boolean{
    const emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

export function validateDate(dob:string):boolean{
    const datePattern: RegExp = /^2([0][0-1][0-9])|2([0][2][0-4])|[1][9][0-9][0-9](\-)([1][0-2]|0?[1-9])(\-)(3[01]|[12][0-9]|0?[1-9])/;
    return datePattern.test(dob);
}

export function validateFirstName(name:string):boolean{
    if(name.length>15) return false;
    for(let i=0;i<name.length;i++){
        if(!name.charAt(i).match(/[a-zA-Z]/)){
            return false;
        }
    }
    return true;
}

export function validateLastName(name:string):boolean{
    if(name.length>15) return false;
    for(let i=0;i<name.length;i++){
        if(!name.charAt(i).match(/[a-zA-Z]/)){
            return false;
        }
    }
    return true;
}

export function validateAddress(address:string):boolean{
    if(address.length>25) return false;
    for(let i=0;i<address.length;i++){
        if(!address.charAt(i).match(/[a-zA-Z ]/)){
            return false;
        }
    }
    return true;
}
export function validatePin(pin:string):boolean{
    if(pin.length===6 && isNumeric(pin))
        return true;
    return false;
}
export function validateCity(city:string):boolean{
    for(let i=0;i<city.length;i++){
        if(!city.charAt(i).match(/[a-zA-Z ]/)){
            return false;
        }
    }
    return true;
}
export function validateState(state:string):boolean{
    for(let i=0;i<state.length;i++){
        if(!state.charAt(i).match(/[a-zA-Z ]/)){
            return false;
        }
    }
    return true;
}
export function validateAadhar(str:string):boolean{
    if(str.length===12 &&  isNumeric(str) ){
        return true;
    }
    return false;
}
export default function validateSim(simNumber :string , serviceNumber  : string){
    
    if(simNumber.length===12 && serviceNumber.length===10 && isNumeric(simNumber) && isNumeric(serviceNumber)){
        return true;
    }
        return false;
}