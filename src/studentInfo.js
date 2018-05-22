class StudentInfo{
	constructor(newStudent, newProgram, newInstructor){
		this.student = newStudent
		this.program = newProgram
		this.instructor = newInstructor
	}
	toString(){
		return `${this.student} ${this.program} ${this.instructor}`
	}
}