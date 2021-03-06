let Fs = require("fs");

const DEFAULT_AVATAR_URL = "";

class Users {
  constructor() {
    let users = JSON.parse(Fs.readFileSync("data/users.json", "UTF-8", "r"));

    this.userByWallet = {};
    for (let i = 0; i < users.length; i++) {
      let user = users[i];

      if (user.wallet === "") {
        continue;
      }

      if (user.wallet != null || user.wallet != undefined) {
        this.userByWallet[user.wallet.toLowerCase()] = user;
      }
    }
  }

  getByAddress(address) {
    if (!this.userByWallet[address]) {
      return null;
    }

    return this.userByWallet[address];
  }
}

module.exports = Users;
