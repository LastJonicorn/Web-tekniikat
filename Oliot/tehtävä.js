let courses = [];

document.querySelector("button").addEventListener("click", addCourse);
document.getElementById("show").addEventListener("click", showAll);

function addCourse(){
    let cname = document.getElementById("course").value;
    let sNum = document.getElementById("student_num").value;

    let course = {
        course_name: cname,
        student_num: sNum
    }

    courses.push(course);
}

function showAll(){
    courses.forEach(course => {
        let li = document.create("li");
        li.textContent = "Course" + course.course_name + " has" + course.student_num + 
        " students registered."

        document.querySelector("ul").appendChild(li);
    });
}