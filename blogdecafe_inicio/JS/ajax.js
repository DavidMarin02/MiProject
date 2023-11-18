function showContent() {
    // Obtener la URL del cuadro de texto
    var url = document.getElementById("url-input").value;

    // Mostrar la URL en el cuadro de texto
    document.getElementById("url-input").value = url;

    // Realizar la petición AJAX
    $.ajax({
        url: url,
        method: "GET",
        beforeSend: function () {
            // Antes de enviar la petición
            document.getElementById("status").innerText = "Estados de la petición: Cargando...";
        },
        complete: function () {
            // Después de completar la petición (independientemente del resultado)
            document.getElementById("status").innerText = "Estados de la petición: Completada";
        },
        success: function (data, status, xhr) {
            // Cuando la petición es exitosa
            document.getElementById("content-text").innerText = data;

            // Mostrar cabeceras HTTP
            var headersList = document.getElementById("headers-list");
            headersList.innerHTML = "";
            $.each(xhr.getAllResponseHeaders().split("\n"), function (i, header) {
                if (header.trim() !== "") {
                    var li = document.createElement("li");
                    li.innerText = header;
                    headersList.appendChild(li);
                }
            });

            // Mostrar código de estado
            document.getElementById("status-text").innerText = "Texto de estado: " + xhr.statusText;
            document.getElementById("status-code-text").innerText = "Código de estado: " + xhr.status;
        },
        error: function (xhr, status, error) {
            // Cuando hay un error en la petición
            document.getElementById("status").innerText = "Estados de la petición: Error";
            document.getElementById("content-text").innerText = "Error al realizar la petición: " + error;
        }
    });
}
