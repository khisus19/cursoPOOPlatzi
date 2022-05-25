function isObject(subject){
    return typeof subject == "object";
}

function isArray(subject){
    return Array.isArray(subject);
}
//estas 2 funciones son funciones de validacion de datos, estan seran llamads y se les pasaran un parametro, la mayoria de datos se puede validar con typeof, ergo, los arrays son los unicos que tienen un metodo espacial = Array.isArray(objetoAsaberSiEsUnArray)

function deepCopy(subject){
    let copySubject;
    //dentro de sta funcion sucedera todo,el copysubject guardara los datos, este esta esperando a saber si los datos son objetos,arrays u otras cosas como strings

    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);
    //con las constantes subjectIsArray,   subjectIsObject trabajere los datos,  estas son las encargadas de llamar a  las funciones que hicimos fuera de la funcion deepCopy.

    if (subjectIsArray){
        copySubject = [];
    } else if (subjectIsObject){
        copySubject = {};
    } else {
        return subject;
    }
    //por ultimo empezamos a trabajar con los datos ya validados, segun el dato que sea correspondiente, trbajaremos objeto,arrays u otros valores.

    //2da parte del algoritmo
    for (key in subject) {
        //Creamos un bucle for, este bucle (a in b)se puede ejecutar en una estructura de datos como arrays, objetos. Este loop signfica que el elemento a pasara por TODA la estructura de datos de b, y claro, dependieno la posicion de a,este tendra el valor de donde este parado encima. ejemplo: 
        //let array = [52,42,56];
        //for(a in array) {
            //console.log(array[a]);
        //}
        const keyIsObject = isObject(subject[key])
        //con keyIsObject VUELVO a validar si los datos DENTRO de la estructura de datos YA VALIDADA son objetos o datos.

        if (keyIsObject){
            copySubject[key] = deepCopy(subject[key]);
            // si resulta que son objetos, entonces iremos copiando y pegando los datos en copySubject, y estos datos se iran copiando de manera identica y exitosa gracias la recursividad deepCopy(subject[key]);
        } else {
            if(subjectIsArray) {
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
            //estos 2 ultimos casos son mas sencillos ya que simplemente se basa en arrays u elementos que no sean ni arrays ni objetos 
        }
    }

    return copySubject;
    // Y al final de todo, la funcion debe devolver algo,verdad? en este caso, quien es el que almaceno todos los datos de el objeto que copiamos? el copySubject, bien, ese es quien retornamos.
}


const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        instagram: undefined,
        facebook: undefined,
    },
};

function requiredParam(param) {
    throw new Error(param + " este parámetro es obligatorio");
}

// Patrón RORO (Receive an Object, Return an Object)
function createStudent({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {}) {
    const private = {
        "_name": name,
    };

    const public = {
        email,
        age,
        approvedCourses,
        learningPaths,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },
        get name() {
            return private["_name"];
        },
        set name(newName) {
            if(newName.length != 0){
                private["_name"] = newName;
            } else {
                console.warn("Tu nombre debe tener al menos un carácter")
            }
        },
        // readName() {
        //     return private["_name"];
        // },
        // changeName(newName) {
        //     private["_name"] = newName;
        // },
    };

    /* Object.defineProperty(public,"readName", {
        writable: false,
        configurable: false,
    });
    Object.defineProperty(public, "changeName", {
        writable: false,
        configurable: false,
    }); */
    return public;
}

const juan = createStudent({email: "juanito@frijoles.com", name: "Juanito"});