class TimeLogList {
constructor() {
		

		this.allMyTimeLogInformation = []
	}
	
	
	addTimeLogInformation(newProject, newPhase,newDate,newStart,newIntTime,newStop,newDeltaTime,newComment){
		let newTimeLogInformation = new TimeLogInformation(newProject, newPhase,newDate,newStart,newIntTime,newStop,newDeltaTime,newComment)
		this.allMyTimeLogInformation.push(newTimeLogInformation)
	}
	
	/* getAllMyTimeLogInfo(){
		let result = ''
		this.allMyTimeLogInfo.forEach((aTimeLogInfo) =>{result = `${result}${aTimeLogInfo}\n`})
	} */

	
	
}




