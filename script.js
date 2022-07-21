let file = document.querySelector( "#file-item" )


file.addEventListener( "change", readFile )

function readFile () {
    let file = this.files[0]

    if ( file.length === 0 ) {
        console.log( "no file was upload" )
    } else {
        console.log( "we got a valid file" )
        file.text()
            .then( ( data ) => {
                console.log( data )
                return data
            } )

        // var reader = new FileReader();
        // reader.onload = function ( event ) {
        //     console.log( 'File content:', event.target.result );
        // };
        // let finalResult = reader.readAsText( file );
    }
}

