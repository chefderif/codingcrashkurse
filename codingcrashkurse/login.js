new Vue({
  el: "#app",
  data: {
    username: "",
    password: "",
    currentUser: "hind",
    feedback: "",
    users: [
      { name: "hind", password: "1234" },
      { name: "yasmin", password: "abc" },
      { name: "ouafa", password: "123abc" },
    ],
  },
  methods: {
    checkPassword(username, password) {
      return this.users.filter(
        (user) => username === user.name && password === user.password
      );
    },
    checkCredentials(event) {
      event.preventDefault();
      if (
        this.username === this.currentUser &&
        this.checkPassword(this.username, this.password).length !== 0
      ) {
        this.feedback = "Korrekte Credentials";
      } else {
        this.feedback = "Falsche Credentials";
      }
    },
    changeUser(name) {
      this.currentUser = name;
    },
  },
});
