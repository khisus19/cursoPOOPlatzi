class Course {
    constructor({
        name,
        classes = [],
    }) {
        this.name = name;
        this.classes = classes;
    }
};

const cursoProgBasica = new Course({
    name: "Curso Gratis de programación básica"
});

class LearningPath {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }
}

const escuelaWeb = new LearningPath({
    name: "Escuela de desarrollo web",
    courses: [
        cursoProgBasica,
        "Curso definitivo de HTML y CSS",
        "Curso práctico de HTML y CSS",
    ]
})

const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        "Curso de DataBusiness",
        "Curso de Dataviz"
    ]
})

const escuelaVideojuegos = new LearningPath({
    name: "Escuela de desarrollo de Videojuegos",
    courses: [
        "Curso de prog básica",
        "Curso de Unity",
        "Curso de Unreal",
    ],
})