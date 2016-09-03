$( document ).ready( function() {

	/*----------------* Sliding Banner *-----------------*/ 
 	$('.flexslider').flexslider({
		animation: "fade",
		controlNav: false,
		pauseOnHover: false,
		slideshowSpeed: 5000, 
		animationDuration: 2600
    });

 	$( '.slides li img' ).mouseover( function() {
 		$( '.flex-direction-nav li .next' ).css( { 'display':'block' } );
 		$( '.flex-direction-nav li .prev' ).css( { 'display':'block' } );
 		setTimeout(function() {
	 		$( '.flex-direction-nav li .next' ).css( {'right':'1%'} );
	 		$( '.flex-direction-nav li .prev' ).css( {'left':'1%'} );
 		}, 400);
 	} );
	// $( '.slides li img' ).mouseout( function() {
	// 		$( '.flex-direction-nav li .next' ).css( { 'right':'-3%' } );
	// 		$( '.flex-direction-nav li .prev' ).css( { 'left':'-3%' } );
	// 		setTimeout(function() {
	//  		$( '.flex-direction-nav li .next' ).css( 'display' , 'none' );
	//  		$( '.flex-direction-nav li .prev' ).css( 'display' , 'none' );
	// 		}, 400);
	// } );
	/*----------------* Hover Animation *----------------*/ 
	$( '.featured-icon' ).mouseover( function() {
		$( this ).children( ':first-child' ).addClass( 'animated tada hovered' );
		$( this ).children( 'i' ).addClass( 'text-hovered' );
	} );
	$( '.featured-icon' ).mouseout( function() {
		$( this ).children( ':first-child' ).removeClass( 'animated tada hovered' );
		$( this ).children( 'i' ).removeClass( 'text-hovered' );
	} );


	/*----------------* Waypoint For Menu *---------------*/ 

	var waypoint = new Waypoint( {
		element: document.getElementById( 'reset-waypoint-target' ),
		handler: function() {
			$( 'header' ).removeClass( 'animate-header' );
		}
	} );

	var waypoint2 = new Waypoint( {
		element: document.getElementById( 'waypoint-target' ),
		handler: function() {
			$( 'header' ).addClass( 'animate-header' );
		}
	} );

} );