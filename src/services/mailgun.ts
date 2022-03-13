import axios from "axios";

const mail = {
  from: "",
  to: "mathiaszunino@gmail.com",
  subject: "Portfolio",
  text: "",
};

export async function sendMail(data: { name: string; email: string; message: string }): Promise<void> {
  mail.from = `${data.name} <${data.email}>`;
  mail.text = data.message;
  await axios.post(`https://api.mailgun.net/v3/${import.meta.env.VITE_DOMAIN}/messages`, null, {
    params: { ...mail },
    auth: { username: "api", password: import.meta.env.VITE_API_KEY as string },
  });
}
