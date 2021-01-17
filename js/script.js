window.addEventListener('scroll', function(){
    let imagen1 = document.querySelectorAll('#img1')[0];
    let imagen5 = document.querySelectorAll('#img5')[0];
    let imagen9 = document.querySelectorAll('#img9')[0];
    let imagen13 = document.querySelectorAll('#img13')[0];

    let altura1 = window.innerHeight/1.5;
    
    let distancia1 = imagen1.getBoundingClientRect().top;
    

    if(distancia1 <= altura1){
        imagen1.style.opacity = '1';
        imagen5.style.opacity = '1';
        imagen9.style.opacity = '1';
        imagen13.style.opacity = '1';
    }
/*------------------------------------------------------------*/
    let imagen2 = document.querySelectorAll('#img2')[0];
    let imagen6 = document.querySelectorAll('#img6')[0];
    let imagen10 = document.querySelectorAll('#img10')[0];
    let imagen14 = document.querySelectorAll('#img14')[0];

    let altura2 = window.innerHeight/1.6;

    let distancia2 = imagen2.getBoundingClientRect().top;

    if(distancia2 <= altura2){
        imagen2.style.opacity = '1';
        imagen6.style.opacity = '1';
        imagen10.style.opacity = '1';
        imagen14.style.opacity = '1';
    }
/*-------------------------------------------------------------*/

    let imagen3 = document.querySelectorAll('#img3')[0];
    let imagen7 = document.querySelectorAll('#img7')[0];
    let imagen11 = document.querySelectorAll('#img11')[0];
    let imagen15 = document.querySelectorAll('#img15')[0];

    let altura3 = window.innerHeight/1.68;

    let distancia3 = imagen3.getBoundingClientRect().top;

    if(distancia3 <= altura3){
        imagen3.style.opacity = '1';
        imagen7.style.opacity = '1';
        imagen11.style.opacity = '1';
        imagen15.style.opacity = '1';
    }
/*---------------------------------------------------------------*/

    let imagen4 = document.querySelectorAll('#img4')[0];
    let imagen8 = document.querySelectorAll('#img8')[0];
    let imagen12 = document.querySelectorAll('#img12')[0];
    let imagen16 = document.querySelectorAll('#img16')[0];

    let altura4 = window.innerHeight/1.7;

    let distancia4 = imagen4.getBoundingClientRect().top;

    if(distancia4 <= altura4){
        imagen4.style.opacity = '1';
        imagen8.style.opacity = '1';
        imagen12.style.opacity = '1';
        imagen16.style.opacity = '1';
    }

    console.log( distancia4 )
});

