import Ability from '@lib/simulation/Ability';

export const basicAbilities = [
  new Ability({
    name: 'Wrack',
    instantDamage: 100,
    cooldownTicks: 5,
    adrenalineChange: 8,
    type: 'basic',
  }),
  new Ability({
    name: 'Impact',
    instantDamage: 70,
    cooldownTicks: 25,
    adrenalineChange: 8,
    type: 'basic',
  }),
  new Ability({
    name: 'Dragon Breath',
    instantDamage: 120,
    cooldownTicks: 17,
    adrenalineChange: 8,
    type: 'basic',
  }),
  new Ability({
    name: 'Sonic Wave',
    instantDamage: 105,
    cooldownTicks: 9,
    adrenalineChange: 8,
    type: 'basic',
  }),
  new Ability({
    name: 'Shock',
    instantDamage: 70,
    cooldownTicks: 25,
    adrenalineChange: 8,
    type: 'basic',
  }),
  new Ability({
    name: 'Combust',
    cooldownTicks: 25,
    adrenalineChange: 8,
    dotDamage: 280,
    dotDurationTicks: 10,
    bypassesSunshine: true,
    type: 'basic',
  }),
  new Ability({
    name: 'Shock',
    instantDamage: 70,
    cooldownTicks: 17,
    adrenalineChange: 8,
    type: 'basic',
  }),
];

export const thresholdAbilities = [
  new Ability({
    name: 'Asphyxiate',
    instantDamage: 480,
    castTimeTicks: 8,
    cooldownTicks: 34,
    adrenalineChange: -15,
    type: 'threshold',
  }),
  new Ability({
    name: 'Deep Impact',
    instantDamage: 130,
    cooldownTicks: 25,
    adrenalineChange: -15,
    type: 'threshold',
  }),
  new Ability({
    name: 'Horror',
    instantDamage: 130,
    cooldownTicks: 25,
    adrenalineChange: -15,
    type: 'threshold',
  }),
  new Ability({
    name: 'Wild Magic',
    instantDamage: 280,
    cooldownTicks: 34,
    adrenalineChange: -15,
    type: 'threshold',
  }),
];

export const ultimateAbilities = [
  new Ability('Slice', 2000, 3, 3, +8),
  new Ability('Sever', 4000, 3, 16, +8),
  new Ability('Smash', 3000, 3, 10, +8),
];
