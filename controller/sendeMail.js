import nodemailer from 'nodemailer'


export const sendeMail = async (req, res) => {
    let transporter = nodemailer.createTransport({
        // (email ke andar enable kar ke smtp ka host likhna hai)
        host: 'smtp.ethereal.email',//(ye ethereal ka use kar rahe hai)
        port: 587,
        auth: {
            user: 'aric.kub93@ethereal.email',
            pass: '8pHcjkqDjXAhf1xvpw'
        }
    });

    //connect with smtp server
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Intezar Alam 👻" <mdintezara35@gmail.com>', // sender address (apna emial dena hai )
        to: "mdintezaralam641@gmail.com",  // list of receivers(jisko bhejna hai uska email)
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    })
    //msg ka id milega 
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.json(info)

}