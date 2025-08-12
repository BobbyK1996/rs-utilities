class Ability {
  constructor(name, damage, castTimeTicks, cooldownTicks, adrenalineChange) {
    this.name = name;
    this.damage = damage;
    this.castTimeTicks = castTimeTicks;
    this.cooldownTicks = cooldownTicks;
    this.adrenalineChange = adrenalineChange;

    this.remainingCooldown = 0;
  }

  isReady() {
    return this.remainingCooldown === 0;
  }

  startCooldown() {
    this.remainingCooldown = this.cooldownTicks;
  }

  tickCooldown() {
    if (this.remainingCooldown > 0) {
      this.remainingCooldown--;
    }
  }
}

export default Ability;
