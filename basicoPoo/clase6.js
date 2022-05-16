class Student {
    constructor(name, age, cursosAprobados) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    // Método de una Clase
    aprobarCurso(cursito){
        this.cursosAprobados.push(cursito);
    }
}

const juan = new Student("Juan", 9, ["Rompecabeza", "Chistes"]);
juan.aprobarCurso("Games");
// console.log(juan);

class Student2 {
    constructor({
        name,
        email,
        age,
        cursosAprobados = [],
    }){
        this.name = name;
        this.age = age;
        this.email = email;
        this.cursosAprobados = cursosAprobados;
    }
}

const miguelito = new Student2({
    name: "Miguel",
    age: 28,
    
    email: "miguelito@platzi.com"
});

console.log(miguelito);