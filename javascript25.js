const usuario = {
    numero : 21,
    alfanumerico : "juan camilo",
    email : "juanka@gmail.com",
    fecha : "19/11/2024"
}

const manejador ={
    get(objetivo,propieda){
        // console.log(`Obtiendo la propiedad ${propieda}`);
        return objetivo[propieda];
    },
    set(objetivo,propieda,valor){
        if(Object.keys(objetivo).indexOf(propieda) === -1){
            return console.error(`La propiedad ${propieda} no existe`);
        }
        objetivo[propieda] = valor;
        if(propieda == "numero" && !/^[0-9]+$/.test(valor)){
            throw new Error("Valor debe contener solo numeros y no debe tener espacios");
        }
        objetivo[propieda] = valor;
        if(propieda == "alfanumerico" && !/^[a-zA-Z0-9]+$/.test(valor)){
            throw new Error("Valor debe contener letras y tambien numeros y no debe tener espacios");
        }
        objetivo[propieda] = valor;
        if(propieda == "email" && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(valor)){
            throw new Error("Valor no perimitido,correo electronico invalido");
        }
        objetivo[propieda] = valor;
        if(propieda == "fecha" && !/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(valor)){
            throw new Error("fecha no permitida");   
        }
        objetivo[propieda] = valor;
    }
}

const proxy = new Proxy(usuario,manejador);
proxy.numero = 10;
proxy.alfanumerico = "progranmandos02";
proxy.email = "junkabeltran@gmail.com";
proxy.fecha = "01/11/2024";
console.log(proxy.numero);
console.log(proxy.alfanumerico);
console.log(proxy.email);
console.log(proxy.fecha);
console.log(usuario);





