module.exports = {
    tenant: process.env.tenant || "uhub.onmicrosoft.com",
    client_id: process.env.client_id || "66ecf18d-c907-4c85-8852-515b0b058b1b",
    redirect: process.env.redirect ||"http://localhost:3000/code",
    scopes: process.env.scopes || "openid offline_access https://uhub.onmicrosoft.com/channels/read",
    policy: process.env.policy || "B2C_1_b2c_signin_signup",
    client_secret: process.env.policy || "Cf2E^xV4]%HUT=!G"
}