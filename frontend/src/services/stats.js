const DiceFormatError = new TypeError("Bad dice format, expected format example: 1d10, 1d100, 50d21");

function extendStat(stat = {}, fields = {}) {
  return { ...stat, ...fields };
}

function extendStats(statsArray = [], fields = {}) {
  return statsArray.map((stat) => {
    return { ...stat, ...fields };
  });
}

function setStatsValues(statsArray = [], valuesObj = {}) {
  return statsArray.map((attr) => {
    if (attr.key in valuesObj) {
      return { ...attr, ...valuesObj[attr.key] };
    } else if ("default" in valuesObj) {
      return { ...attr, ...valuesObj["default"] };
    } else {
      return attr;
    }
  });
}

function getStatKeys(statsArray = []) {
  return statsArray.map((stat) => stat.key);
}

function rollDice(dice = "1d20") {
  if (!/^\d+[d]+\d+$/.test(dice)) {
    throw DiceFormatError;
  }

  const [times, max] = dice.split("d");

  let rolls = [];
  for (const _ of Array(parseInt(times)).keys()) {
    rolls.push(Math.floor(Math.random() * (parseInt(max) - 1 + 1) + 1));
  }

  return { rolls, sum: rolls.reduce((a, b) => a + b) };
}

export { extendStat, extendStats, setStatsValues, getStatKeys, rollDice };
