console.log("Exercise #4");

/*
--Exercise #4 (sugerencia filter() e includes())
--let student1Courses = ['Math', 'English', 'Programming'];
--let student2Courses = ['Geography', 'Spanish', 'Programming'];
--Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.

*/

function findCommonCourses(curso1, curso2) {
    let cursoComun = [];
    for (let i = 0; i < curso1.length; i++) {
        let curso = curso1[i];
        for (let j = 0; j < curso2.length; j++) {
            if (curso === curso2[j]) {
                cursoComun.push(curso);
                break; 
            }
        }
    }
    for (let i = 0; i < cursoComun.length; i++) {
        console.log(`Cursos en comun: ${cursoComun[i]}`);
    }
}
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
findCommonCourses(student1Courses, student2Courses);

