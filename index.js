let countDownDate = new Date('July 23, 2023 24:00:00').getTime();

// Обновляем обратный отсчет каждую 1 секунду
let upDateTime = setInterval(function() {

let nowDate = new Date().getTime();
let distance = countDownDate - nowDate;

let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Выводим результат в виде элемента с id
document.getElementById('main__countdown').innerHTML =
    `<div class="countdown-number">
        <span class="days countdown-time">${days}</span>
        <div class="countdoun-text-background">
            <span class="countdown-text">Days</span>
        </div>
    </div>
    <div class="contdown-colon">:</div>
    <div class="countdown-number">
        <span class="hours countdown-time">${hours}</span>
        <div class="countdoun-text-background">
            <span class="countdown-text">Hours</span>
        </div>
    </div>
    <div class="contdown-colon">:</div>
    <div class="countdown-number">
        <span class="minutes countdown-time">${minutes}</span>
        <div class="countdoun-text-background">
            <span class="countdown-text">Minutes</span>
        </div>
    </div>
    <div class="contdown-colon">:</div>
    <div class="countdown-number">
        <span class="seconds countdown-time">${seconds}</span>
        <div class="countdoun-text-background">
            <span class="countdown-text">Seconds</span>
        </div>
    </div>`;
    
// Если обратный отсчет закончился
  if (distance < 0) {
    clearInterval(upDateTime);
    document.getElementById('main__countdown').innerHTML = "Time is up!";
  }
}, 1000);


//форма валидация и отправка
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);
    console.log(form)

    async function formSend(e) {
        e.preventDefault();

        let formData = new FormData(form)

        let response = await fetch('sendmail.php'{
            method: 'POST',
            body: formData
        });
        if(response.ok){
            let result = await response.json();
            alert(result.message);
            form.reset();
        }else{
            //popup.classList('.success')
        }

        // let error = formValidate(form);


        // if(error === 0) {
        // }else{
        //     alert('Заполните обязательные поля' )
        // }
    }

    // function formValidate(form){
    //     let error = 0;
    //     let formReq = document.querySelectorAll('._req');

    //     for(let index = 0; index < formReq.length; index++){
    //         const input = formReq[index];
    //         formRemoveError(input);

    //         if(input.classList.cotains('_email')){
    //             if(emailTest(input)){
    //                 formAddError(input);
    //                 error++;
    //         }else{
    //             if(input.value === ''){
    //                 formAddError(input);
    //                 error++;
    //             }
    //         }
    //         }
    //     }
    //     return error;
    // }

    // function formAddError(input) {
    //     input.parentElement.classList.add('.error');
    //     input.classList.add('_error')
    // }

    // function formRemoveError(input) {
    //     input.parentElement.classList.remove('.error');
    //     input.classList.remove('_error')
    // }

    // //функция теста email
    // function emailTest(input) {
    //     return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    // }

});

