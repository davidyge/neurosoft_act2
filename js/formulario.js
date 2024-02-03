async function enviarDatos(formularioId) {
  const formulario = document.getElementById(formularioId);
  const mensajeExito = document.getElementById(`mensaje-exito-${formularioId.charAt(formularioId.length - 1)}`); // Selecciona el contenedor correcto

  // Obtener los valores de los campos
  const nombre = formulario.querySelector('[name^="nombre"]').value.trim();
  const ruc = formulario.querySelector('[name^="ruc"]').value.trim();
  const telefono = formulario.querySelector('[name^="telefono"]').value.trim();
  const rubro = formulario.querySelector('[name^="rubro"]').value.trim();
  const otroRubro = formulario.querySelector('[name^="otroRubro"]').value.trim();

  // Validar que los campos no estén vacíos
  if (!nombre || !ruc || !telefono || !rubro || (rubro.trim() === "Elegir rubro") || (rubro === "otros" && !otroRubro)) {
    // Mostrar mensaje de error si algún campo está vacío
    mensajeExito.textContent = 'Por favor, completa todos los campos.';
    mensajeExito.className = 'alert alert-danger mt-3';
    return;
  }

  try {
    const response = await fetch('https://sheet.best/api/sheets/8629ae79-b329-47fa-8b80-ad5d7d5823d4', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "Nombre": nombre,
        "Ruc": ruc,
        "Telefono": telefono,
        "Rubro": rubro,
        "OtroRubro": otroRubro,
      }),
    });

    if (response.ok) {
      // Limpiar el formulario
      formulario.reset();
      // Mostrar mensaje de éxito
      mensajeExito.textContent = 'Solicitud enviada!! 😊';
      mensajeExito.className = 'alert alert-success mt-3';
      setTimeout(function () {
        mensajeExito.style.display = 'none';
      }, 4000);
    } else {
      throw new Error('Error al enviar los datos');
    }
  } catch (error) {
    console.error(error);
    // Mostrar mensaje de error si algo sale mal
    mensajeExito.textContent = 'Hubo un error al enviar los datos. Por favor, inténtalo de nuevo.';
    mensajeExito.className = 'alert alert-danger mt-3';
  }
}

