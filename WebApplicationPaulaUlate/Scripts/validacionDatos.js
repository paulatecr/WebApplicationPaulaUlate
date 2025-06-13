$(document).ready(function () {
    $("#btnEnviar").click(function () {
        let nombre = $("#txtNombre").val().trim();
        let correo = $("#txtCorreo").val().trim();
        let correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (nombre === "" || correo === "") {
            alert("Debe llenar todos los Campos");
            return;
        }

        if (!correoValido.test(correo)) {
            alert("Correo electrónico ingresado No es válido.");
            $("#txtCorreo").focus();
            return;
        }

        $("#btnEnviar").prop("disabled", true);

        $.ajax({
            type: "POST",
            url: "Default.aspx/GuardarDatos",
            data: JSON.stringify({ nombre: nombre, correo: correo }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                $("#datoTabla").html(response.d);
                $("#txtNombre").val("");
                $("#txtCorreo").val("");
            },
            error: function (xhr, status, error) {          
                alert("Error al Enviar Datos");
            },
            complete: function () {
                $("#btnEnviar").prop("disabled", false);
            }
        });
    });
});