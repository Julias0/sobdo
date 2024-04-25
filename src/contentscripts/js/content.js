const englishToKannada = {
  innovation: "sphūrtigalu",
  technology: "taṁtrajñāna",
  economy: "ārthika",
  culture: "saṁskṛti",
  politics: "rājakīya",
  strategy: "yōjane",
  leadership: "nētṛtva",
  sustainability: "sāmarthy",
  globalization: "viśvōnnati",
  entrepreneurship: "udyamashīlatē",
  marketing: "mārukattē",
  investment: "nivēśa",
  analytics: "viślēṣaṇe",
  ethics: "naitikate",
  philosophy: "darśana",
  psychology: "mānasika",
  sociology: "samājashāstra",
  democracy: "prajāsattāka",
  reform: "sudhāraṇe",
  policy: "nīti",
  diversity: "vaividhya",
  inclusion: "sērpaḍe",
  health: "ārōgya",
  education: "śikṣaṇa",
  science: "vijñāna",
  literature: "sāhitya",
  trend: "śrēṇi",
  challenge: "savālu",
  solution: "parihāra",
  research: "saṁśōdhane",
  development: "abhirvṛddhi",
  network: "neṭvaruk",
  collaboration: "sahakāra",
  performance: "kāryarīti",
  insight: "antaradṛṣṭi",
  impact: "pariṇāma",
  vision: "dṛṣṭi",
  mission: "kārya",
  values: "maulyagaḷu",
  integrity: "pūrṇatē",
  creativity: "racanātmakatē",
  passion: "utsāha",
  interview: "sākṣātkāra",
  questions: "praśṇeḷu",
  work: "kelasa",
  technical: "tāntrika",
  conversation: "sambhāṣaṇe",
  call: "kare",
  mind: "manas'su",
  unfair: "anyaya",
  fresh: 'taja'
};


function replaceWords(wordDictionary) {
  let newContent = document.body.innerHTML;
  Object.keys(wordDictionary).forEach((oldWord) => {
    newContent = newContent.replace(
      new RegExp(oldWord, "gi"),
      `<span aria-label="${oldWord}" class="hint--top hint--rounded hint--info hint--fit">${wordDictionary[oldWord]}</span>`
    );
  });

  document.body.innerHTML = newContent;
}

replaceWords(englishToKannada);

