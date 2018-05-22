/* jshint undef: true, unused: true, esversion: 6, asi: true */

class AlternativeDynamicTable {
  constructor() {
    this.restrict = 'E'

    this.template = 
		`
		<table class = "table table-bordered" data-ng-if="mc.timeLogList">
		<tbody>
			<tr ng-repeat="timeLogInformation in mc.timeLogList.allMyTimeLogInformation">

				<td>{{timeLogInformation.project}}</td>
				<td>{{timeLogInformation.phase}}</td>
				<td>{{timeLogInformation.date}}</td>
				<td>{{timeLogInformation.start}}</td>
				<td>{{timeLogInformation.intTime}}</td>
				<td>{{timeLogInformation.stop}}</td>
				<td>{{timeLogInformation.deltaTime}}</td>
				<td>{{timeLogInformation.comment}}</td>

			</tr>
		<tbody>
	</table>
	`	
	
	
  }

  static directiveFactory() {
    AlternativeDynamicTable.instance = new AlternativeDynamicTable()
    return AlternativeDynamicTable.instance
  }
}