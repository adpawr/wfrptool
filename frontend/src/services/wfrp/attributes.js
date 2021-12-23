import { setStatsValues, extendStats, rollDice } from "../stats";

const baseAttributes = [
  { key: "WS", name: "Weapon Skill" },
  { key: "BS", name: "Ballistic Skill" },
  { key: "S", name: "Strength" },
  { key: "T", name: "Toughness" },
  { key: "I", name: "Initiative" },
  { key: "AG", name: "Agility" },
  { key: "DEX", name: "Dexterity" },
  { key: "INT", name: "Intelligence" },
  { key: "WP", name: "Willpower" },
  { key: "FEL", name: "Fellowship" },
];

const _humanBase = {
  default: { baseValue: 20 },
};

const _elfBase = {
  WS: { baseValue: 30 },
  BS: { baseValue: 30 },
  I: { baseValue: 40 },
  AG: { baseValue: 30 },
  DEX: { baseValue: 30 },
  INT: { baseValue: 30 },
  WP: { baseValue: 30 },
  default: { baseValue: 20 },
};

const _dwarfBase = {
  WP: { baseValue: 40 },
  WS: { baseValue: 30 },
  T: { baseValue: 30 },
  DEX: { baseValue: 30 },
  AG: { baseValue: 10 },
  FEL: { baseValue: 10 },
  default: { baseValue: 20 },
};

const _halflingBase = {
  BS: { baseValue: 30 },
  WP: { baseValue: 30 },
  DEX: { baseValue: 30 },
  FEL: { baseValue: 30 },
  WS: { baseValue: 10 },
  S: { baseValue: 10 },
  default: { baseValue: 20 },
};

function rollStat(stats, stat) {
  return setStatsValues(stats, { [stat]: { rolledValue: rollDice("2d10").sum } });
}

function rollAllStats(stats) {
  return stats.map((stat) => {
    return { ...stat, rolledValue: rollDice("2d10").sum };
  });
}

function getCurrentValue(stat) {
  return stat.baseValue + stat.rolledValue + stat.advancements + stat.modifier;
}

function calculateCurrent(stats) {
  return stats.map((stat) => {
    return { ...stat, currentValue: getCurrentValue(stat) };
  });
}

const extendedAttributes = extendStats(baseAttributes, {
  rolledValue: 0,
  advancements: 0,
  modifier: 0,
  currentValue: 0,
});

const humanBase = setStatsValues(extendedAttributes, _humanBase);
const elfBase = setStatsValues(extendedAttributes, _elfBase);
const halflingBase = setStatsValues(extendedAttributes, _halflingBase);
const dwarfBase = setStatsValues(extendedAttributes, _dwarfBase);

const ops = {
  baseAttributes,
  extendedAttributes,
  humanBase,
  elfBase,
  halflingBase,
  dwarfBase,
  rollStat,
  rollAllStats,
  calculateCurrent,
};

export default ops;
