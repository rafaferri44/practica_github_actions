const nodemailer = require("nodemailer");
const core = require("@actions/core");
let user_core = core.getInput("user_mail");
let user_pass = core.getInput("user_pass");
let dest = core.getInput("dest");
let linter_execution = core.getInput("linter_execution");
let cypress_execution = core.getInput("cypress_execution");
let add_badge_job = core.getInput("add_badge_job");
let deploy_job_execution = core.getInput("deploy_job_execution_execution");
// async..await is not allowed in global scope, must use a wrapper
async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: user_core,
            pass: user_pass
        }

    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <rferritorro@gmail.com>', // sender address
        to: dest, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Mailer by Rafa Ferri", // plain text body
        html: `Se muestran el resultado de los jobs:
        - linter_execution: ${linter_execution}
        - cypress_execution: ${cypress_execution}
        - add_badge_job: ${add_badge_job}
        - deploy_job_execution: ${deploy_job_execution}
        `, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);