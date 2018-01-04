# Area to drop files

	<DropZone
		onDrop={ ( event, files ) =>
		{
			console.log( 'Received files: ', files );
		}}
		onDragOver={ ( event ) =>
		{
			event.preventDefault();
			event.stopPropagation(); 
		}}
	/>