# Drag handlers for RangeSlider component
	
	<div style={{ width: '100%', height: '60px' }}>
		<RangeSlider 
			max={ state.max }
			min={ state.min }
			onChange={ ( state ) =>
			{
				setState( {
					min: state.min,
					max: state.max
				} )
			}}
			range={{
				min: 0,
				max: 100
			}}
		/>
	</div>