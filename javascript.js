const persona = {
    nombre : "juan camilo",
    edad : 21
}

const manejador = {
    get(objetivo,propiedad){
        // console.log(objetivo);//objetivo ingresa y muestra al objeto de persona 
        // console.log(propiedad);//nos muestra la propida del objetivo a la cual estamos ingresando.
        console.log(`Obtiendo la propiedad ${propiedad}`);
        return objetivo[propiedad];//vamos a retornar a la propiedad del objetivo que en este caso viene siendo el objeto persona
    },
    set(objetivo,propieda,valor){
        if(Object.keys(objetivo).indexOf(propieda) === -1){
            return console.error(`La propiedad ${propieda} no existe`);
            
        }
        if(propieda == "nombre" && !/^[a-zA-Z\s]+$/.test(valor)){
            throw new Error("Valor debe contener solo letras y espacios");
            
        }
        if(propieda == "edad" && !/^[0-9]+$/.test(valor)){
            throw new Error("Valor debe contener solo numeros");
            
        }


        // if(Object.keys(objetivo) === "nombre"){
        //     console.log("puede validar nombre");
            
        // }else if(Object.keys(objetivo) === "edad"){
        //     console.log("puede modificar edad");
            
        // }else{
        //     throw new Error("propiedad no existe")
            
        // }
        

        if(propieda === "nombre" && isNaN(valor)){
            throw new Error("valor no permitido");
        }
        objetivo[propieda] = valor
    }
}

const proxy = new Proxy(persona,manejador);//persona es el objeto a la cual vamos a ingresar y manejar va hacer el intermedio a la cual vamos a validar que no se reciabn datos incorrectos en persona.
proxy.edad = "juanka"//set entrega validacion del manejador
console.log(proxy.nombre);//get es el que pide informacion del manejador
console.log(persona);

