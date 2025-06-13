<%@ Page Title="Home Page" Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WebApplicationPaulaUlate.Default" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Formulario Electrónico</title>
    <link href="Content/Style.css" rel="stylesheet" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="/Scripts/validacionDatos.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <asp:ScriptManager ID="ScriptManager1" runat="server" EnablePageMethods="true" />
        <div class="form-container">
            <h1>Formulario Electrónico</h1>

            <label>Nombre:</label>
            <input type="text" id="txtNombre" required="required" />

            <label>Correo Electrónico:</label>
            <input type="email" id="txtCorreo" required="required" />

            <button type="button" id="btnEnviar"  class="button" >Enviar</button>
        </div>

        <div id="datoTabla" class="datoTabla"></div>
    </form>
</body>
</html>

