import nodemailer from "nodemailer"

export const emailRegistro = async ( datos ) => {
    
    const { email, nombre, token } = datos

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        }
      });

    // Información del Email 

    const info = await transport.sendMail ({
        from: '"Perfinance - Administra tus Finanzas" <cuentas@levmin.com>',
        to: email,
        subject: "Perfinance - Comprueba tu Cuenta",
        text: "Comprueba tu Cuenta en Perfinance",
        html: `<p>Hola: ${nombre} Comprueba tu Cuenta en Perfinance</p>
        <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguente enlace:
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>
        <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
        `
    })
}

export const emailOlvidePassword = async ( datos ) => {
    
  const { email, nombre, token } = datos

  const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      }
    });

  // Información del Email 

  const info = await transport.sendMail ({
      from: '"Perfinance - Administra tus Finanzas" <cuentas@levmin.com>',
      to: email,
      subject: "Perfinance - Reestablece tu Password",
      text: "Reestablece tu Password",
      html: `<p>Hola: ${nombre} Has solicitado reestablecer tu Password</p>
      <p>Sigue el siguente enlace para reestablecer tu Password:
      <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a>
      <p>Si tu no solicitaste este email, puedes ignorar el mensaje</p>
      `
  }) 
}