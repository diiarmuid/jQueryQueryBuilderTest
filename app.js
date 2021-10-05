$(document).ready(function() {


	var options = {
		allow_empty: true,

		filters: [
			{
				id: 'step',
				label: 'Step',
				type: 'string',
				//optgroup: 'core',
				default_value: '',
				size: 100,
				unique: true
			},
			{
				id: 'question',
				label: 'Question',
				type: 'string',
				// optgroup: 'core',
				default_value: '',
				size: 100,
				unique: true
			}
		]
	};


	$('#builder').queryBuilder(options);

	$('.parse-json').on('click', function() {
		console.log(JSON.stringify(
			$('#builder').queryBuilder('getMongo'),
			undefined, 2
		));
	});



});