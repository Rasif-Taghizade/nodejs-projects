const speakeasy = require("speakeasy");

const verify = speakeasy.totp.verify({
    secret: "JFGCCUDYFZRC6SRQFFKE63KGLY7DIUKUMNEVKUC5KY4XEZTBIBZA",
    encoding: "base32",
    token: "686790"
});

console.log(verify)