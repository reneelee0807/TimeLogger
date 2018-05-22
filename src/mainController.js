/* jshint undef: false, unused: false, esversion: 6, asi: true */
class MainController {
	constructor() {
		this.theTimeLogTable = new TimeLogTable()
		this.addTimeLog= {}
		//this.addStudentInfo ={}
		this.updateTimeLog ={}
		this.updateStudentInfo = {}
		this.isEditing = false
	}
	
	//format the date
	toDate(thisDate) {
        var dateFormat = document.getElementById(thisDate).value
        return dateFormat
    }

	//format the time 
    toTime(thisTime) {
        var timeFormat = document.getElementById(thisTime).value
        return timeFormat
    }
	
	calcIntTime()
	{
		let intTime = (this.addTimeLog.intTimeHour * 60) + this.addTimeLog.intTimeMins
		return intTime
	}
		
	calcDeltaTime()
	{
		let startTime = this.toTime('start').split(':')
        let stopTime = this.toTime('stop').split(':')
        let startTimeInDecimal = parseInt(startTime[0]) * 60 + parseInt(startTime[1])
        let stopTimeInDecimal = parseInt(stopTime[0]) * 60 + parseInt(stopTime[1])
        let intTime = this.calcIntTime()
        let deltaTime = stopTimeInDecimal - startTimeInDecimal - intTime
        return deltaTime
	}
		
	
	
	saveTimeLog(){
		this.theTimeLogTable.addTimeLog(this.addTimeLog.project, this.addTimeLog.phase, this.toDate('date'), this.toTime('start'), this.calcIntTime(), this.toTime('stop'), this.calcDeltaTime(), this.addTimeLog.comment)
        /* this.addTimeLog = ''
		this.addTimeLog ={} */
		this.reset()
	
		/*formatting startTime*/
		/* let startHour = this.addTimeLog.start.getHours()
		let startMinute = this.addTimeLog.start.getMinutes()
		//let startTime = `${sh}:${sm}`
		let startTimeInDecimal = parseInt(startHour)*60 + parseInt(startMinute)
		
		let stopHour = this.addTimeLog.stop.getHours()
		let stopMinute = this.addTimeLog.stop.getMinutes() */
		//let stopTime = `${h}:${m}`
		//let stopTimeInDecimal = parseInt(stopHour)*60 + parseInt(stopMinute)
		
		/* let t = this.addTimeLog.intTime.split(':')
		let intTimeInDecimal = parseInt(t[0],10)*1 + parseInt(t[1],10)/60 */
		
		//let intTimeInDecimal = (this.addTimeLog.intTimeHour * 60) + this.addTimeLog.intTimeMins

		/* let z = Number(stopTimeInDecimal - startTimeInDecimal - intTimeInDecimal).toFixed(2)
		let deltaTimeInDecimal = parseFloat(z)
		let d =  z.split('.') 
		let deltaTime = `${Number(d[0])} : ${Number(d[1]*0.60).toFixed(0)}`*/
		/* let deltaTime = stopTimeInDecimal - startTimeInDecimal - intTimeInDecimal
		
		let newTimeLog = {}
		if (!angular.equals({}, this.addTimeLog)) {
			if (this.isEditing !== false) {
			  this.theTimeLogTable.allMyTimeLogInfo[this.isEditing] = this.addTimeLog
			  this.isEditing = false
			  
			} else {
				//this.newTimeLog = this.addTimeLog
				this.theTimeLogTable.addStudentInfo(this.addTimeLog.student,this.addTimeLog.program,
													this.addTimeLog.instructor)
				this.theTimeLogTable.addTimeLogInfo(this.addTimeLog.project,
													this.addTimeLog.phase,this.addTimeLog.date,this.addTimeLog.start,
													intTimeInDecimal,this.addTimeLog.stop, deltaTime,
													this.addTimeLog.comment,startTimeInDecimal,stopTimeInDecimal,
													intTimeInDecimal,deltaTime  )
		
				this.addTimeLog = {}
				}
		
		//this.timeLogs = {}
		//this.addTimeLog ={}
		//this.timeLogs = this.theTimeLogTable
		//this.reset()
			
		} */
	}
	
	getObjectInfo(index) {
        this.updateTimeLog = this.theTimeLogTable.allMyTimeLogInfo[index]
        this.updateTimeLog.index = index
    }
	
	//edit the timeLog record
	editTimeLog() {
        let index = this.updateTimeLog.index
        Object.keys(this.addTimeLog).forEach((key) => {
            if (this.addTimeLog[key] !== null && this.addTimeLog[key] != 'index') {
                if (key == 'editDate') {
                    this.addTimeLog[key] = this.toDate(key)
                    this.theTimeLogTable.allMyTimeLogInfo[this.updateTimeLog.index].date = this.addTimeLog.editDate
                }
                if (key == 'stop') {
                    this.addTimeLog[key] = this.toTime('editStop')
                    this.theTimeLogTable.allMyTimeLogInfo[this.updateTimeLog.index].finish = this.addTimeLog.finish
                }
                if (key == 'start') {
                    this.addTimeLog[key] = this.toTime('editStart')
                    this.theTimeLogTable.allMyTimeLogInfo[this.updateTimeLog.index].start = this.addTimeLog.start
                }
                if (key == 'intTimeHour') {

                }
                if (key == 'intTimeMins') {
                    this.addTimeLog[key] = this.calcIntTime()
                    this.theTimeLogTable.allMyTimeLogInfo[this.updateTimeLog.index].intTime = this.addTimeLog.intTime
                } else {
                    this.theTimeLogTable.allMyTimeLogInfo[index][key] = this.addTimeLog[key]
                }
            }
        })
        this.theTimeLogTable.allMyTimeLogInfo[index].deltaTime = this.editCalcDelta(this.theTimeLogTable.allMyTimeLogInfo[index].start, this.theTimeLogTable.allMyTimeLogInfo[index].stop, this.theTimeLogTable.allMyTimeLogInfo[index].intTime)

        this.addTimeLog = {}
    }
	
	
	addClickHandler(){
		this.saveTimeLog()
	}
	resetClickHandler(){
		this.reset()
	}
	
	reset(){
		this.addTimeLog = {}
		this.isEditing = false		
	}
	
	/* edit(editTimeLog){
		this.isEditing = this.theTimeLogTable.allMyTimeLogInfo.indexOf(editTimeLog)
		this.addTimeLog = angular.copy(editTimeLog)
		
		//this.theTimeLogTable.addTimeLogInfo= angular.copy(editTimeLog)
	}
	 */
	
	editClickHandler(editTimeLog) {
		this.edit(editTimeLog)
	}
	
	removeClickHandler(removeTimeLog) {
		this.remove(removeTimeLog)
	}

	
	show() {
    this.isHidden = false
	}
	
	showContent(fileContent){
		this.fieldNames = []
        this.content = []
        this.student = ''
        this.programName = ''
        this.instructor = ''
        this.title = ''
        this.goal = ''

        let contentLines = fileContent.split('\n');
        for (let line of contentLines) {
            let items = line.split(',')
            if (items[0] !== '') 
			{
				//file info
                if (items[0] == ('Title')) 
				{
                    this.title = items[1]
                } 
				else if (items[0] == 'Student') 
				{
                    this.student = items[1]
                } 
				else if (items[0] == 'Program') 
				{
                    this.program = items[1]
                } 
				else if (items[0] == 'Instructor') 
				{
                    this.instructor = items[1]
                }  
				else if (items[0] == 'Project') {                    
                    this.fieldNames = items
                } 
				//timelog info
				else {
                    let IntTime = 0;
                    for (let item of items.slice(4, 5)) 
					{
                        if (IntTime === 'IntTime') 
						{
                            IntTime = Number(IntTime)
                        } 
						else 
						{
                            IntTime = IntTime * 1000 + parseFloat(item)
                        }
                    }

                    let deltatime = 0
                    for (let item of items.slice(6, 7)) {

                        if (items[6] !== '') {
                            let dtime = items[6][0] + items[6][1] + items[6][2] + items[6][3] + items[6][4] + items[6][5] + items[6][6] + items[6][7] + items[6][8]

                            if (dtime === 'DeltaTime') {

                                deltatime = Number(item.replace(dtime, 0))


                            } else {
                                deltatime = deltatime * 1000 + parseFloat(item)

                            }
                        }
                    }

                    this.content.push([items[0], items[1], items[2], items[3], IntTime, items[5], deltatime, items[7]])
                }
            }
        }
        this.theTimeLogTable.addStudentInfo(this.title, this.student, this.program, this.instructor)
        for (let data of this.content) 
		{
            this.theTimeLogTable.addTimeLog(data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7]);
        }
		
		/* this.fieldNames = []
		this.content = []
		
		let contentLines = fileContent.split('\n')		
		for (let line of contentLines.slice(2)) {
			let items = line.split(',')
			this.content.push([items[0], items[1],items[2],items[3],items[4],items[5],items[6],items[7]]) 
			
		}
		for (let data of this.content){
			let sh = (new Date(data[3])).getHours()
			let sm = (new Date(data[3])).getMinutes()
			//let startTime = `${sh}:${sm}`
			let startTimeInDecimal = parseInt(sh,10)*1 + parseInt(sm,10)/60
			
			let h = (new Date(data[5])).getHours()
			let m = (new Date(data[5])).getMinutes()
			//let stopTime = `${h}:${m}`
			let stopTimeInDecimal = parseInt(h,10)*1 + parseInt(m,10)/60
			
			/* let t = data[4].split(':')
			let intTimeInDecimal = parseInt(t[0],10)*1 + parseInt(t[1],10)/60 */
			
		/* 	let z = Number(stopTimeInDecimal - startTimeInDecimal - data[4]).toFixed(2)
			let deltaTimeInDecimal = parseFloat(z)
			let d =  z.split('.')
			let deltaTime = `${Number(d[0])} : ${Number(d[1]*0.60).toFixed(0)}`		
			this.theTimeLogTable.addTimeLogInfo(data[0], data[1], Date.parse(data[2]), Date.parse(data[3]), data[4], Date.parse(data[5]), deltaTime, data[7],startTimeInDecimal,stopTimeInDecimal,
													data[4],deltaTimeInDecimal) 

		} */ 
		
		
	}
	
	//deleteModal
	deleteTimeLog(removeTimeLog) {
		/* let index = this.theTimeLogTable.allMyTimeLogInfo.indexOf(removeTimeLog)
		this.theTimeLogTable.allMyTimeLogInfo.splice(index, 1)
		if (this.theTimeLogTable.length === 0){
			this.addTimeLog = {}
			this.timeLogs = null
		} */
		
        this.theTimeLogTable.allMyTimeLogInfo.splice(this.deleteTimeLogIndex, 1)
        this.deleteTimeLogIndex = ''
		//('#deleteOneModal').modal('hide')
		
    }
	
	updateFileInfoContent() {
        this.updateStudentInfo.forEach((val) => {
            let i = this.updateStudentInfo.indexOf(val)
            this.timelogger.allMyStudentInfo[i] = val
        })
    }

}
