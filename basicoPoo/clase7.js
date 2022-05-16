class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@platzi.com",
    twitter: "fjuandc",
});

const miguelito = new Student({
    name: "Miguelito",
    username: "miguelitofeliz",
    email: "miguelitofeliz@platzi.com",
    instagram: "miguelito_feliz",
});

console.log(juan2);
console.log(miguelito);