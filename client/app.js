  
$('form').submit((ev) => {
    ev.preventDefault();

    let chirpText = $('#chirpText').val();

    $.ajax({
        type: 'POST',
        url: '/api/chirps',
        data: JSON.stringify({
            text: chirpText
        }),
        contentType: 'application/json'
    }).then((r) => {
        console.log('you kick ass!');
    }).catch((err) => {
        console.log(err);
    });
});

$.ajax({
    type: 'GET',
    url: '/api/chirps',
    dataType: 'json'
}).then((chirps) => {
    console.log(chirps);
    let keys = Object.keys(chirps);

    for (let key of keys) {
        if (key !== 'nextid') {
            createChirp(chirps[key]);
        }
    }
}).catch((err) => {
    console.log(err);
});

function createChirp(chirp) {
    $('.chirps').append(`<div class="col-12">${chirp.text}</div>`);
}