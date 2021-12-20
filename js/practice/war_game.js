'use strict';

console.log("OK");
class Attack {
    constructor(dmg, manaCost) {
        this.dmg = dmg;
        this.manaCost = manaCost;
    }
}

class Hero {

    static expForLevel = 100;
    static expForAttack = 10;

    #HP;
    #baseHP;
    #baseMP;
    #MP;
    #name;
    #type;
    #attack;
    #exp = 0;
    #level = 1;

    constructor(name, HP, MP, type, attack) {
        this.#name = name;
        this.#HP = HP;
        this.#baseHP = HP;
        this.#MP = MP;
        this.#baseMP = MP;
        this.#type = type;
        this.#attack = attack;
    }

    get attack() {
        return this.#attack;
    }

    get dmg() {
        if (this.attack.manaCost <= this.#MP)
            return this.attack.dmg;

        return 0;
    }

    get HP() {
        return this.#HP;
    }

    set HP(value) {
        if (value <= 0) this.#died();
        else this.#HP = value;
    }

    get exp() {
        return this.#exp;
    }

    set exp(value) {
        this.#exp = value;
        const needLevelExp = Hero.expForLevel * this.#level;
        if (this.#exp >= needLevelExp) {
            this.#levelUp();
            this.#exp = this.#exp - needLevelExp;
        }
    }

    doAttack(hero) {
        if (hero === this) return false;
        if (!this.dmg) return false;

        hero.HP -= this.dmg;
        this.#MP -= this.#attack.manaCost;
        this.exp += Hero.expForAttack;
    }

    showHero() {
        console.log(
            this.#type,
            this.#name,
            `${this.#HP}/${this.#baseHP}`,
            `${this.#MP}/${this.#baseMP}`,
            this.attack,
            this.#exp,
            this.#level,
        );
    }

    #levelUp() {
        this.#level++;
    }
    #died() {
        this.#exp = Math.floor(this.#exp / 2);
        this.HP = this.#baseHP;
        this.MP = this.#baseMP;
    }
}

class Orc extends Hero {

    constructor(name) {
        super(name, 2000, 1000, 'Orc', new Attack(50, 35));
    }

}

class Elf extends Hero {

    constructor(name) {
        super(name, 1000, 2000, 'Elf', new Attack(120, 150));
    }

}

class Human extends Hero {

    constructor(name) {
        super(name, 1500, 1500, 'Human', new Attack(80, 75));
    }

}

const human = new Human("Bill");
const elf = new Elf("Legolas");
const orc = new Orc("Rxar");

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const heroes = [human, orc, elf];

for (let i = 0; i < 1000; i++) {
    heroes[getRandomNumber(0, heroes.length)].doAttack(heroes[getRandomNumber(0, heroes.length)]);
}

human.showHero();
elf.showHero();
orc.showHero();