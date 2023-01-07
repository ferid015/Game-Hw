



function ad() {

    let cvb = document.getElementById('log_inp').value;
    let greet = document.getElementById('greet');

    greet.innerHTML = 'Salam';

    console.log();


}


function giris() {

    let log_inp_value = document.getElementById('log_inp').value;
    let log_btn = document.getElementById('log_btn');
    

    if (log_inp.value.length > 2) {
        log_btn.innerHTML = 'Başlayın';
        document.getElementById('log_btn').style.backgroundColor = 'green';
        document.getElementById('log_btn').style.color = 'white';
        document.getElementById('log_btn').href = ('level.html');


    } else {
        log_btn.innerHTML = 'Daxil edin :';
        document.getElementById('log_btn').style.backgroundColor = 'red';
        document.getElementById('log_btn').style.color = 'white';
        document.getElementById('log_btn').href = ('');


    }

    console.log();

}


let count = 3 ;
let rdm = Math.round(Math.random() * 10 );
document.getElementById('easy_h1').innerHTML = `${count} sansiniz qalib` ;

function easy_gonder() {
    count--;
    let easy_inp = document.getElementById('easy_inp') ;

    document.getElementById('easy_h1').innerHTML = `${count} sansiniz qalib` ;

    if(easy_inp.value == rdm ){
        alert('qazandin')
    }else {
        alert('uduzdun')
    }
}