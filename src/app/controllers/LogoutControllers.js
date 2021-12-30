
class LogoutControllers {
  async get(req,res) {
    await res.clearCookie("accessToken")
    return res.status(200).json("Logouted !")
  }
}
module.exports = new LogoutControllers()