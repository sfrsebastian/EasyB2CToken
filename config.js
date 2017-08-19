module.exports = {
    tenant: process.env.tenant || "<Tenant>",
    client_id: process.env.client_id || "<Client ID>",
    redirect: process.env.redirect ||"<Redirect>/code",
    scopes: process.env.scopes || "<Scopes>",
    policy: process.env.policy || "<Tenant>",
    client_secret: process.env.policy || "<Secret>"
}