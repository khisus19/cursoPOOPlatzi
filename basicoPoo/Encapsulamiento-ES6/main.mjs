function videoPlay(id) {
    const urlSecreta = "https://platziultrasecreta.com/" + id;
    console.log("Se está reproduciendo desde " + urlSecreta)
}
function videostop(id) {
    const urlSecreta = "https://platziultrasecreta.com/" + id;
    console.log("Pausamos la url: " + urlSecreta)
}

export class PlatziClass {
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir() {
        videoPlay(this.videoID);
    }
    pausar() {
        videostop(this.videoID);
    }
}

class Course {
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish",
    }) {
        this.name = name;
        this.classes = classes;
    }
};

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

class FreeStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, "+ this.name + " solo puedes ver cursos gratis")
        }
    }
}

class BasicStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        if (newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos básicos");
        }
    }
}

class ExpertStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}