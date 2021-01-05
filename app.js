



window.addEventListener('dfMessengerLoaded', function (event) {
    // console.log("chatbot cargado");

    const dfMessenger = document.querySelector('df-messenger');
    dfMessenger.showMinChat();

    console.log(dfMessenger);

    // dfMessenger.renderCustomText('Buenos dìas');



    dfMessenger.addEventListener('df-button-clicked',function(event){


            if(event.detail.element.text == 'azul'){
  document.body.style.backgroundColor = "blue";

            } else if (event.detail.element.text == 'rojo'){

  document.body.style.backgroundColor = "red";

            } else if (event.detail.element.text == 'verde'){

  document.body.style.backgroundColor = "green";

            } else if(event.detail.element.text == 'amarillo'){
  document.body.style.backgroundColor = "yellow";
  } else if(event.detail.element.text == 'blanco'){
  document.body.style.backgroundColor = "white";
            }

    });

    dfMessenger.addEventListener('df-user-input-entered',function(event){
      console.log('df-user-input-entered '+ event.detail.input);

    });


});
