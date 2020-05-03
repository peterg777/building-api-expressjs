  
$('form').submit((ev) => {
    ev.preventDefault();

    let chirpText = $('#chirptext').val();
    let userinput = $('#userinput').val();
//sending JSon data
    $.ajax({
        type: 'POST',
        url: '/api/chirps',
        data: JSON.stringify({
            user: userinput,
            text: chirpText
        }),
        contentType: 'application/json'
    }).then((r) => {
        console.log('you kick ass!');
    }).catch((err) => {
        console.log(err);
    });
});
// get request
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
    // empties previous chirp
    $('ul').empty();
    //append chirp
    $('.chirps').append(`<div class="col-12">${chirp.text}</div>`);
}
// delete request
function deleteChirp(id) {
	$.ajax({
        type: 'DELETE',
        url: '/api/chirps/' + id,   
		
	})
	.then(() => getChirps())
	.catch(err => console.log(err));
}
//edit chirp with put request
function editChirp(user,text,chirp){
    $.ajax({
        type: 'PUT',
        url:'/api/chirps/' + id,
        data:{userinput, chirp: editChirp}
    })
    .then(() => getChirps())
    .catch()
}