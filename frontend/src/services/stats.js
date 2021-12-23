const DiceFormatError = new TypeError('Bad dice format, expected format example: 1d10, 1d100, 50d21');

function extendStat(stat = {}, fields = {}) {
  return { ...stat, ...fields };
}

function extendStats(statsArray = [], fields = {}) {
  return statsArray.map((stat) => ({ ...stat, ...fields }));
}

function setStatsValues(statsArray = [], valuesObj = {}) {
  return statsArray.map((attr) => {
    if (attr.key in valuesObj) {
      return { ...attr, ...valuesObj[attr.key] };
    } if ('default' in valuesObj) {
      return { ...attr, ...valuesObj.default };
    }
    return attr;
  });
}

function getStatKeys(statsArray = []) {
  return statsArray.map((stat) => stat.key);
}

function rollDice(dice = '1d20') {
  if (!/^\d+[d]+\d+$/.test(dice)) {
    throw DiceFormatError;
  }

  const [times, max] = dice.split('d');
  const result = [...Array(parseInt(times, 10)).keys()].reduce((acc) => {
    const random = Math.floor(Math.random() * (parseInt(max, 10) - 1 + 1) + 1);
    return { rolls: [...acc.rolls, random], sum: acc.sum + random };
  }, { rolls: [], sum: 0 });
  return result;
}

export {
  extendStat,
  extendStats,
  setStatsValues,
  getStatKeys,
  rollDice,
};
