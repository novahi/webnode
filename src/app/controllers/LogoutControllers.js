
class LogoutControllers {
  async get(req,res) {
    return await res.clearCookie("accessToken")
  }
}
module.exports = new LogoutControllers()