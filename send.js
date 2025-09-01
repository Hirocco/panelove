export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // tutaj możesz użyć np. nodemailer do wysyłki maila
    console.log("Nowa wiadomość:", name, email, message);

    res.status(200).send("success");
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
