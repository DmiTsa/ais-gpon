class UserController {
  async registration(req, res) {}
  async login(req, res) {}
  async check(req, res) {
    res.json('auth');
  }
}

module.exports = new UserController();
