const boton1 = document.getElementById('boton1');
    boton1.addEventListener('click', animate);

    const boton2 = document.getElementById('boton2');
    boton2.addEventListener('click', animate2);

    const boton3 = document.getElementById('boton3');
    boton3.addEventListener('click', animate3);

    function animate() {
        const box = document.getElementById('box');
        box.classList.add('animate');
        setTimeout(function () {
            box.classList.remove('animate');
        }, 4000);
    }

    function animate2() {
        const box = document.getElementById('box');
        box.classList.add('animate2');
        setTimeout(function () {
            box.classList.remove('animate2');
        }, 2000);
    }

    function animate3() {
        const box = document.getElementById('box');
        box.classList.add('animate3');
        setTimeout(function () {
            box.classList.remove('animate3');
        }, 3000);
    }
function copiarValores() {
                              var id01Value = document.getElementById("id01").value;
                              document.getElementById("id02").innerHTML ="id01: " + id01Value + "<br>id02: " + id01Value;
                            }
function tipoNodo() {
                              var id03Value = document.getElementById("id03").value;
                              var id04Element = document.getElementById("id04");
                              id04Element.innerHTML = "Contenido: " + id03Value + "<br>Tipo: " + id04Element.nodeName;
                            }
function accederContenido() {
                              var iframe = document.getElementById("demo");
                              iframe.contentDocument.body.innerHTML = document.body.innerHTML;
                              iframe.style.display = "block";
                            }

    function mostrarTexto() {
    var texto = document.getElementById("miInput").value;
    const box1 = document.getElementById("box1");
    box1.style.background = texto;
    box1.innerText = texto;
  }

 
  const caja = document.querySelector('.caja');
    const resetButton = document.getElementById('resetButton');
    let hoverEffectActive = false;

    function toggleHoverEffect() {
      caja.classList.toggle('hover-effect');
      hoverEffectActive = !hoverEffectActive;
    }

    function resetHoverEffect() {
      caja.classList.remove('hover-effect');
      hoverEffectActive = false;
      caja.removeEventListener('mouseenter', toggleHoverEffect);
        caja.removeEventListener('mouseleave', toggleHoverEffect);
    }

    caja.addEventListener('mouseenter', toggleHoverEffect);
    caja.addEventListener('mouseleave', toggleHoverEffect);
    resetButton.addEventListener('click', resetHoverEffect);


    // Crear un nuevo elemento de lista
    var newItem = document.createElement("li");
    var textNode = document.createTextNode("Elemento 3");
    newItem.appendChild(textNode);

    // Agregar el nuevo elemento a la lista existente
    var list = document.getElementById("list");
    list.appendChild(newItem);

    // Crear un nuevo elemento de párrafo
    var newParagraph = document.createElement("p");
    var paragraphText = document.createTextNode("Este es un párrafo nuevo.");
    newParagraph.appendChild(paragraphText);

    // Agregar el nuevo párrafo al contenedor principal
    var container = document.getElementById("container");
    container.appendChild(newParagraph);


    

// Obtener los botones de filtrado
    var filterButtons = document.getElementsByClassName("filter-button");

    // Obtener la galería de imágenes y los elementos de la galería
    var gallery = document.getElementById("gallery");
    var galleryItems = gallery.getElementsByClassName("gallery-item");

    // Agregar eventos de clic a los botones de filtrado
    for (var i = 0; i < filterButtons.length; i++) {
      filterButtons[i].addEventListener("click", function() {
        var filter = this.dataset.filter;
        filterGallery(filter);
      });
    }

    // Función para filtrar la galería de imágenes
    function filterGallery(filter) {
      for (var i = 0; i < galleryItems.length; i++) {
        var item = galleryItems[i];
        if (filter === "all" || item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      }
    }




// Obtener la lista de nodos de las tareas y el contenedor de tareas
    var taskList = document.getElementsByClassName("task-list")[0];
    var taskNodes = taskList.childNodes;
    var taskContainer = document.getElementById("taskContainer");

    // Agregar evento de clic a los botones de eliminar
    taskContainer.addEventListener("click", function(event) {
      if (event.target.classList.contains("delete-button")) {
        var taskItem = event.target.closest(".task-item");
        taskList.removeChild(taskItem);
      }
    });

    // Agregar evento de cambio a los checkboxes de las tareas
    taskContainer.addEventListener("change", function(event) {
      if (event.target.classList.contains("task-checkbox")) {
        var taskItem = event.target.closest(".task-item");
        taskItem.classList.toggle("completed");
      }
    });

    // Agregar evento de clic al botón de agregar tarea
    document.getElementById("addTaskButton").addEventListener("click", function() {
      var newTaskInput = document.getElementById("newTaskInput");
      var taskText = newTaskInput.value.trim();

      if (taskText !== "") {
        var newTaskItem = document.createElement("div");
        newTaskItem.className = "task-item";
        newTaskItem.innerHTML = `
          <input type="checkbox" class="task-checkbox">
          <span class="task-text">${taskText}</span>
          <button class="delete-button">Eliminar</button>
        `;

        taskList.appendChild(newTaskItem);
        newTaskInput.value = "";
      }
    });