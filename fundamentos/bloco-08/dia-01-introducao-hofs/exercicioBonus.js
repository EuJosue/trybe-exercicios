const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 75,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttack = () => Math.round(Math.random() + (dragon.strength - 15)) + 15;

const warriorAttack = () => {
  const minimalDamage = warrior.strength;
  const maximumDamage = warrior.strength * warrior.weaponDmg;
  return Math.round(Math.random() + maximumDamage - minimalDamage) + minimalDamage;
};

const mageAttack = () => {
  if (mage.mana < 15) return 'Não possui mana suficiente';
  const minimalDamage = mage.intelligence;
  const maximumDamage = mage.intelligence * 2;
  return {
    damage: Math.round(Math.random() + maximumDamage - minimalDamage) + minimalDamage,
    spendMana: 15,
  }
};

const gameActions = {
  warriorTurn: (callback) => {
    const damageAtkWarrior = callback();
    warrior.damage = damageAtkWarrior;
    dragon.healthPoints -= damageAtkWarrior;
  },
  mageTurn: (callback) => {
    const ObjAtkMage = callback();
    mage.damage = ObjAtkMage.damage;
    mage.mana = ObjAtkMage.spendMana;
    dragon.healthPoints -= ObjAtkMage.damage;
  },
  dragonTurn: (callback) => {
    const damageAtkDragon = callback();
    dragon.damage = damageAtkDragon;
    mage.healthPoints -= damageAtkDragon;
    warrior.healthPoints -= damageAtkDragon;
  },
  update: () => battleMembers,
}

while (dragon.healthPoints > 0) {
  if (warrior.healthPoints > 0) gameActions.warriorTurn(warriorAttack);
  if (mage.healthPoints > 0) gameActions.mageTurn(mageAttack);
  if (dragon.healthPoints > 0) gameActions.dragonTurn(dragonAttack);
  console.log(gameActions.update());
}
