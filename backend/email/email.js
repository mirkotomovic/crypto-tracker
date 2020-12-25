import dotenv from 'dotenv';
import { markdown } from 'nodemailer-markdown';
import nodemailer from 'nodemailer';
import Handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_AUTH_USER,
    pass: process.env.EMAIL_AUTH_PASS,
  },
});

transporter.use('compile', markdown({ useEmbeddedImages: true }));

const mailReady = await transporter.verify();
if (mailReady) {
  console.log('Server is ready to take our messages');
}

export const sendMail = async (template, data) => {
  fs.readFile(
    `${path.resolve()}/email/templates/welcome.hbs.md`,
    'utf8',
    (err, source) => {
      const template = Handlebars.compile(source);

      try {
        transporter.sendMail({
          from: 'me@example.com',
          to: 'receiver@example.com',
          markdown: template(data),
        });
      } catch (error) {
        console.error({ error });
      }
    }
  );
};
