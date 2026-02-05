import * as brevo from "@getbrevo/brevo";

const brevoInstance = new brevo.TransactionalEmailsApi();

brevoInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY as string
);

interface Params {
  subject: string; //Asunto del correo
  htmlContent: {
    //Cuerpo del correo
    name: string;
    email: string;
    contact: string;
    content: string;
  }[];
}

const smtpEmail = new brevo.SendSmtpEmail();

export async function sendEmail({ subject, htmlContent }: Params) {
  //A quien se envia el correo
  smtpEmail.subject = "Solicitud de información: " + subject; //Asunto del correo
  smtpEmail.to = [{ email: "ventas@sanam.co" }];
  //Cuerpo del correo
  const htmlBody = htmlContent
    .map(
      (item) => `
    <p><strong>Nombre:</strong> ${item.name}</p>
    <p><strong>Correo electronico:</strong> ${item.email}</p>
    <p><strong>Contecto:</strong> ${item.contact}</p>
    <p><strong>Motivo:</strong> ${item.content}</p>
    <hr>
  `
    )
    .join("");

  smtpEmail.htmlContent = `<html><body classname="bg-red-500">${htmlBody}</body></html>`;

  // Quien envia el correo
  smtpEmail.sender = {
    // name: "Correo enviado desde la página web",
    email: "ventas@sanam.co",
  };

  //const responde = await brevoInstance.sendTransacEmail(smtpEmail);

  //console.log("La respuesta de brevo fue: " + responde);
  try {
    const response = await brevoInstance.sendTransacEmail(smtpEmail);
    console.log("Email sent successfully:", response);
    return { success: true }; // Devuelve un objeto indicando éxito
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false }; // Devuelve un objeto indicando error
  }
}
