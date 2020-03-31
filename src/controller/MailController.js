const express = require("express");

const emailService = require("../service/mail");

module.exports = {
  async store(req, res) {
    try {
      const { name, email, tel, know, subject } = req.body;

      // envio do email
      emailService.send(
        process.env.MAIL_RECEIVER,
        "Novo contato recebido no site",
        `<h1>Nova mensagem recebida no site</h1>
            <p>Enviado por: <b>${name}</b>" - ${email}</p>
            <p>Contato: ${tel}</p>
            <p>Ele(a) nos conheceu por: ${know}</p>
            <p>Assunto: ${subject}</p>`
      );
      console.log("[Mail] - Mail send success");
      res.status(200).send("Foi meu truta !");
    } catch (error) {
      console.log(error);
      res.status(400).send("Deu ruim parceiro");
    }
  }
};
