class Ability {
  constructor({
    name,
    instantDamage = 0,
    castTimeTicks = 3,
    cooldownTicks = 0,
    adrenalineChange = 0,
    dotDamage = 0,
    dotDurationTicks = 0,
    bypassesSunshine = false,
    type = 'basic',
  }) {
    this.name = name;
    this.instantDamage = instantDamage;
    this.castTimeTicks = castTimeTicks;
    this.cooldownTicks = cooldownTicks;
    this.adrenalineChange = adrenalineChange;

    this.dotDamage = dotDamage;
    this.dotDurationTicks = dotDurationTicks;

    this.bypassesSunshine = bypassesSunshine;

    this.type = type;

    this.remainingCooldown = 0;

    this.activeDotTicksLeft = 0;
  }

  isReady() {
    return this.remainingCooldown === 0;
  }

  startCooldown() {
    this.remainingCooldown = this.cooldownTicks;
  }

  tickCooldown() {
    if (this.remainingCooldown > 0) this.remainingCooldown--;
  }

  startDot() {
    if (this.dotDamage > 0 && this.dotDurationTicks > 0)
      this.activeDotTicksLeft = this.dotDurationTicks;
  }

  tickDot() {
    if (this.activeDotTicksLeft > 0) {
      this.activeDotTicksLeft--;

      return this.dotDamage / this.dotDurationTicks;
    }
    return 0;
  }
}

export default Ability;
