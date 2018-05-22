class TimeLogTable {
constructor() {
		this.allMyTimeLogInfo = []
		this.allMyStudentInfo = []
	}
	addTimeLog(newProject, newPhase,newDate,newStart,
				newIntTime,newStop,newDeltaTime,newComment,
				newStartTimeInDecimal,newStopTimeInDecimal,
				newIntTimeInDecimal,newDeltaTimeInDecimal) {
		let newTimeLogInfo = new TimeLogInfo(newProject,
				newPhase,newDate,newStart,newIntTime,newStop,
				newDeltaTime,newComment,newStartTimeInDecimal,
				newStopTimeInDecimal,newIntTimeInDecimal,
				newDeltaTimeInDecimal)
		this.allMyTimeLogInfo.push(newTimeLogInfo)
	}
	addStudentInfo(newTitle,newStudent,newProgram,newInstructor){
		/* let newStudentInfo= new StudentInfo(newStudent,newProgram,newInstructor)
		this.allMyStudentInfo.push(newStudentInfo) */
		this.allMyStudentInfo = [newTitle,newStudent,newProgram,newInstructor]
	}
	
	updateTimeLog(index, project, phase, date, start, intTime, stop, deltaTime, comment) {
        this.allMyTimeLogInfo[index] = {
            project,
            phase,
            date,
            start,
            intTime,
            stop,
            deltaTime,
            comment
        }
    }
	
	getAllMyTimeLogInfo(){
		let result = ''
		this.allMyTimeLogInfo.forEach((aTimeLogInfo) =>{result = `${result}${aTimeLogInfo}\n`})
	}

	
	calSumIntTime(){
		let sum = 0
			for(let timeLogInfo of this.allMyTimeLogInfo) {
			sum += timeLogInfo.intTimeInDecimal
		}
		return sum
	} 
	getMeanIntTime(){
		let out = 0
		out = this.calSumIntTime()/ this.allMyTimeLogInfo.length
		return out
	}
	calSumDeltaTime(){
		let sum = 0 
			for(let timeLogInfo of this.allMyTimeLogInfo) {
			sum += timeLogInfo.deltaTimeInDecimal
		}
		return sum
	}
	getMeanDeltaTime(){
		let out = 0
		out = this.calSumDeltaTime()/ this.allMyTimeLogInfo.length
		return out
	}
	getIntTimeDeviation(){
		let result = 0
			for(let timeLogInfo of this.allMyTimeLogInfo){
				result += Math.abs(timeLogInfo.intTimeInDecimal - this.getMeanIntTime())
			}
		return result
	}
	getDeltaTimeDeviation(){
		let result = 0
			for(let timeLogInfo of this.allMyTimeLogInfo){
				result += timeLogInfo.deltaTimeInDecimal - this.getMeanDeltaTime()
			}
		return result
	}
	getOtherPart(){
		let n = 0

		let result = 0
		 for(let timeLogInfo of this.allMyTimeLogInfo){
			 n += (Math.pow((timeLogInfo.intTimeInDecimal - this.getMeanIntTime()),2)) *
			 (Math.pow((timeLogInfo.deltaTimeInDecimal - this.getMeanDeltaTime()),2))
			 result = Math.sqrt(n)
			
		 }
		 return result
	}
	
	
	getIntTimeAndDeltaTime(){
		let result = 0
			for(let timeLogInfo of this.allMyTimeLogInfo){
				result += (timeLogInfo.intTimeInDecimal - this.getMeanIntTime()) * (timeLogInfo.deltaTimeInDecimal - this.getMeanDeltaTime() )
			}
		return result
	}
	
	getCorrelationCoefficient() {
		let result = 0
		result = this.getIntTimeAndDeltaTime() / this.getOtherPart()
		return result
	}
/* 	getCovarianceForIntTimeAndDeltaTime(){
		let result = 0
		result = this.getIntTimeAndDeltaTime() / (this.allMyTimeLogInfo.length -1)
		return result
	}
	getCorrelationCoefficient(){
		let result = 0
		result = this.getCovarianceForIntTimeAndDeltaTime() / (this.getIntTimeDeviation() * this.getDeltaTimeDeviation())
		return result
	} */
}




