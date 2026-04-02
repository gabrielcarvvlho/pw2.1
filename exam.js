class Exams {
  constructor(answer, weight) {
    this.answer = answer;
    this.weight = weight;
    this.exams = [];
  }

  add(answers) {
    this.exams.push(answers);
  }

  scores() {
    return this.exams.map((ans) => {
      return ans.reduce((total, a, i) => {
        return total + (a === this.answer[i] ? this.weight[i] : 0);
      }, 0);
    });
  }

  avg() {
    const scores = this.scores();
    if (scores.length === 0) return 0;
    return scores.reduce((sum, s) => sum + s, 0) / scores.length;
  }

  mini(count = this.exams.length) {
    return this.scores()
      .sort((a, b) => a - b)
      .slice(0, count);
  }

  maxi(count = this.exams.length) {
    return this.scores()
      .sort((a, b) => b - a)
      .slice(0, count);
  }

  lt(limit = 0) {
    return this.scores().filter((s) => s < limit);
  }

  gt(limit = 0) {
    return this.scores().filter((s) => s > limit);
  }
}

const prova = new Exams(["a", "b", "a", "c", "d"], [2, 2, 2, 2, 2]);

prova.add(["d", "b", "a", "b", "b"]);
prova.add(["a", "b", "a", "a", "d"]);
prova.add(["a", "b", "a", "c", "b"]);
prova.add(["c", "b", "a", "c", "d"]);

console.log("notas:", prova.scores());

console.log("maiores notas:", prova.maxi());

console.log("menores notas:", prova.mini());

console.log("media:", prova.avg());

console.log("notas menores que 5:", prova.lt(5));

console.log("notas maiores que 5:", prova.gt(5));
