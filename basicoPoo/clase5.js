
// Objeto literal
const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso definitivo de html y css",
        "Curso practico de html y css",
    ],

    aproboCurso(curso) {
        this.cursosAprobados.push(curso);
    }
};

natalia.aproboCurso("Curso de Responsive design");
// console.log(natalia);

// Prototipo
function Student(name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;

    
}

// Método de un Prototipo
Student.prototype.aproboCurso = function (curso){
    this.cursosAprobados.push(curso);
}

const jesus = new Student("Jesús", 34, ["POO", "Práctico de Js"]);
// console.log(jesus);