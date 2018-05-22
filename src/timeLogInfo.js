class TimeLogInfo{
	constructor(newProject, newPhase,newDate,newStart,
				newIntTime,newStop,newDeltaTime,newComment,newStartTimeInDecimal,newStopTimeInDecimal,
				newIntTimeInDecimal,newDeltaTimeInDecimal){
		this.project = newProject
		this.phase = newPhase
		this.date = newDate
		this.start = newStart
		this.intTime = newIntTime
		this.stop = newStop
		this.deltaTime = newDeltaTime
		this.comment = newComment
		
		this.startTimeInDecimal = newStartTimeInDecimal
		this.stopTimeInDecimal = newStopTimeInDecimal
		this.intTimeInDecimal = newIntTimeInDecimal
		this.deltaTimeInDecimal = newDeltaTimeInDecimal
	}
	toString(){
		return `${this.project} ${this.phase} ${this.date} ${this.start} ${this.intTime} ${this.stop} ${this.deltaTime} ${this.comment}`
	}
	

}

