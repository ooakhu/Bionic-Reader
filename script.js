let file = document.querySelector( "#file-item" )
const baseUrl = 'https://bionic-reading1.p.rapidapi.com/convert'

const readFile = async function () {
    let file = document.querySelector( "#file-item" ).files[0]

    if ( file.length === 0 ) {
        console.log( "no file was upload" )
    } else {
        console.log( "we got a valid file" )
        let result = await file.text()
        console.log( result )
        return result
    }
}


const bionicRead = async function () {
    let book = await readFile()
    const config = {
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            "X-RapidAPI-Key": "36b8a549c8msheef6311c5717a93p18c557jsnedc848359f16",
            "X-RapidAPI-Host": "bionic-reading1.p.rapidapi.com"
        },
        data: {
            "content": book,
            "response_type": "page",
            "request_type": "html",
            "fixation": 2,
            "saccade": 10
        }
    }

    let result = await axios.post( baseUrl, config )
    console.log( result )
}



file.addEventListener( "change", bionicRead )