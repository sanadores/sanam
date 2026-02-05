"use server";
//Captura de datos del formulario
import { sendEmail } from "@/lib/brevo";

export async function handleForm(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const motivo = formData.get("motivo");
  const contact = formData.get("contact");
  const content = formData.get("content");

  if (!name || !email || !motivo || !contact || !content) {
    return { success: false, message: "No hay datos en el formulario" };
  }

  let motivo_contacto;
  if (motivo === "1") {
    motivo_contacto = "Agricultura";
  } else if (motivo === "2") {
    motivo_contacto = "Nutrición y salud humana";
  } else if (motivo === "3") {
    motivo_contacto = "Cuidado personal";
  } else if (motivo === "4") {
    motivo_contacto = "Otro";
  }

  const response = await sendEmail({
    subject: motivo_contacto as string, //Asunto del correo
    htmlContent: [
      //Datos para el cuerpo del correo
      {
        name: name as string,
        email: email as string,
        contact: contact as string,
        content: content as string,
      },
    ],
  });

  return response;
}
