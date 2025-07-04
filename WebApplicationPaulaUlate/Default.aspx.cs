﻿using System;
using System.Collections.Generic;
using System.Web.Script.Services;
using System.Web.Services;
using System.Web.UI;


namespace WebApplicationPaulaUlate
{
    [ScriptService]
    public partial class Default : Page
    {
        static List<string[]> datos = new List<string[]>();

       // [WebMethod]
        [System.Web.Services.WebMethod]

        public static string GuardarDatos(string nombre, string correo)
        {
            datos.Add(new string[] { nombre, correo });

            string html = "<table class='datoTabla'><tr><th>Nombre</th><th>Correo</th></tr>";
            foreach (var item in datos)
            {
                html += $"<tr><td>{item[0]}</td><td>{item[1]}</td></tr>";
            }
            html += "</table>";

            return html;
        }
    }
}