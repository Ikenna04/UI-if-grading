// Grading Scores From The Score Inputed By The User

let totalScore = prompt('Enter Your Total Score');
let grade;
let collegeStudent;
console.log(typeof totalScore);

if (totalScore <= 100 && totalScore >= 90) {
	grade = 'A';
} else if (totalScore < 90 && totalScore >= 80) {
	grade = 'B';
} else if (totalScore < 80 && totalScore >= 70) {
	grade = 'C';
} else if (totalScore < 70 && totalScore >= 60) {
	grade = 'D';
} else if (totalScore < 60 && totalScore >= 50) {
	grade = 'E';
} else if (totalScore < 50 && totalScore >= 0) {
	collegeStudent = confirm("Are You A College Student\nIf YES click 'OK'");
	if (collegeStudent) {
		grade = 'Your Result Is Unsatisfactory\nYou Got An F';
	} else {
		grade = 'F';
	}
} else {
	grade = 'Input A valid Number';
}
console.log('Your grade is ', grade);
alert(`Your score is ${totalScore}, so your grade is  ${grade}`);
