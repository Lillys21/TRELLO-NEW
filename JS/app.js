  var list = document.getElementById('contain-list');
	/* El evento hará que se oculte el input y muestre un formulario */
  list.addEventListener('click', function() {
    event.preventDefault();

    var section = document.getElementById('contain-form');
    var sectionForm = document.getElementById('section-form');

    var first = document.createElement('fist');
    first.className = 'first';

    var input = document.createElement('input');
    input.className = 'contain-input';
    input.setAttribute('placeholder', 'Añadir una lista...');
    //input.type = ('placeholder', 'Añadir una lista...');

    var button = document.createElement('button');
    var text = document.createTextNode('Guardar');
    button.className = 'contain-butt';

    button.appendChild(text);
    first.appendChild(input);
    first.appendChild(button);
    section.appendChild(first);

    section.removeChild(sectionForm);

    /* Al realizar este evento se mostrará la lista agregada */

    button.addEventListener('click', function() {
      event.preventDefault();
      if (input.value) {
        var nameList = document.createElement('div');
        nameList.className = 'nameList';

        var textList = document.createElement('p');
        textList.textContent = input.value;
        textList.className = 'text-list';

        var hw = document.createElement('a');
        var textHw = document.createTextNode('Añadir una tarea...');
        hw.className = 'text-hw';
        hw.setAttribute('href', '#');

        section.removeChild(first);

        hw.appendChild(textHw);
        nameList.appendChild(textList);
        nameList.appendChild(hw);
        section.appendChild(nameList);

        section.appendChild(first);

        input.value = '';
      }

      /*Se va a mostrar un formulario con un textarea y un botón */

        hw.addEventListener('click', function() {
        var textarea = document.createElement('textarea');
        hw.className = 'text-ar';

        var adbutton = document.createElement('button');
        var adText = document.createTextNode('Agregar');
        adbutton.className = 'button-add';

        nameList.appendChild(textarea);
        adbutton.appendChild(adText);
        nameList.appendChild(adbutton);

        nameList.removeChild(hw);


        /* Se va a mostrar el texto de la tarea debajo de la lista */

        adbutton.addEventListener('click', function() {
          if (textarea.value === '') {

          } else {
            var addList = document.createElement('p');
            addList.textContent = textarea.value;
            addList.className = 'list-add';

            nameList.removeChild(textarea);

            nameList.appendChild(addList);
            nameList.appendChild(textarea);
            nameList.appendChild(adbutton);

            textarea.value = '';
          }
        });
      });
    });
  });
