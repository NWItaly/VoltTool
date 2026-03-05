/* ═══════════════════════════════════════════════════════════════
   VoltTool — i18n_charging.js
   Esporta: tC
   Da includere DOPO i18n.js (usa `lang` già definito lì)
   ═══════════════════════════════════════════════════════════════ */

const STRINGS_CHARGE = {
  it: {

    /* guide */
    guideTime: '<strong>Modalità tempo:</strong> imposta la durata della ricarica e scopri quanti kWh accumuli. Il grafico confronta diverse potenze nello stesso intervallo.',
    guideKwh: '<strong>Modalità energia:</strong> imposta i kWh da caricare e scopri quanto tempo impieghi. Il grafico confronta il tempo necessario a diverse potenze.',

    /* section labels */
    secPhase:   'Tipo di alimentazione',
    secPower:   'Potenza di ricarica',
    secMode:    'Modalità di calcolo',
    secInputTime: 'Durata ricarica',
    secInputKwh:  'Energia da caricare',
    secOptions: 'Opzioni aggiuntive',

    /* phase buttons — testo + sottotitolo */
    phMono: '🔌 Monofase',     phMonoSub: '230 V · 6–32 A',
    phTri:  '⚡ Trifase',      phTriSub:  '400 V · 6–32 A',
    phDc:   '🏎 DC',           phDcSub:   'fino a 350 kW',

    /* slider labels */
    slPowerAC:      '⚡ Corrente (A)',
    slPowerDC:      '⚡ Potenza (kW)',
    slTime:         '⏱ Durata',
    slKwh:          '🔋 Energia',
    slCapacity:     '🔋 Capacità batteria',
    slSocStart:     '📉 SoC iniziale',
    slSocEnd:       '📈 SoC finale',
    slLoss:         '📉 Perdita',
    slCurveThresh:  '📐 Soglia rallentamento',
    slCurveEnd:     '📉 Potenza finale (% del max)',

    /* mode buttons */
    modeTimeBtn: '⏱ Dato il tempo → kWh accumulati',
    modeKwhBtn:  '🔋 Dati i kWh → tempo necessario',

    /* accordion check labels */
    chkRealLabel:  '🔋 Batteria reale (capacità + SoC)',
    chkCurveLabel: '📐 Curva decrescente',
    chkLossLabel:  '📉 Perdita di ricarica',

    /* mini result dentro "uso reale" */
    miniRealLabel: 'kWh da caricare',

    /* result box */
    rbLabelTime: '⚡ Energia accumulata',
    rbLabelKwh:  '⏱ Tempo di ricarica stimato',

    rbNoteTime: (kw, h, tot) =>
      `${kw} kW × ${h} h = ${tot} kWh`,
    rbNoteLoss: (loss, net) =>
      `+ ${loss}% perdite → ${net} kWh netti`,
    rbNoteSocCap: (from, to) =>
      `⚠ Limitato da SoC: ${from}%→${to}%`,
    rbNoteKwh: (gross, kw) =>
      `${gross} kWh ÷ ${kw} kW`,
    rbNoteLossKwh: (net, loss, gross) =>
      `(${net} kWh netti + ${loss}% = ${gross} kWh lordi)`,

    /* cap info sotto titolo grafico */
    capInfo: (from, to, kwh) =>
      `⚠ Limite reale: ${from}%→${to}% SoC = ${kwh} kWh`,

    /* curva note */
    curveNote: (thresh, end) =>
      `Oltre ${thresh}% SoC la potenza cala linearmente fino al ${end}% del max (a 100% SoC).`,

    /* chart */
    chartTitle:     'Confronto potenze di ricarica',
    chartModeTime:  (t) => `${t} di ricarica`,
    chartModeKwh:   (kwh) => `obiettivo ${kwh} kWh`,
    axisTime: 'Tempo',
    axisKwh:  'kWh',

    /* dataset labels */
    dsLabelAC:    (amps, kw) => `${amps} A · ${kw} kW`,
    dsLabelDC:    (kw) => `${kw} kW`,

    /* modal */
    modalTitlePowerAC: 'Corrente (A)',   modalDescPowerAC: 'Corrente in Ampere (6–32)',
    modalTitlePowerDC: 'Potenza DC (kW)', modalDescPowerDC: 'Potenza in kW (7–350)',
    modalTitleTime:    'Durata ricarica', modalDescTime:    'Minuti totali di ricarica',
    modalTitleKwh:     'Energia da caricare', modalDescKwh: 'kWh netti da caricare in batteria',
    modalTitleCap:     'Capacità batteria',   modalDescCap: 'Capacità nominale in kWh',
    btnOk: 'OK', btnCancel: 'Annulla',

    /* time formatter */
    fmtMin: (min) => {
      min = Math.round(min);
      if (min < 60) return `${min} min`;
      const h = Math.floor(min / 60), m = min % 60;
      return m === 0 ? `${h} h` : `${h} h ${m} min`;
    },
  },

  en: {

    guideTime: '<strong>Time mode:</strong> set the charging duration and find out how many kWh you accumulate. The chart compares different power levels over the same interval.',
    guideKwh:  '<strong>Energy mode:</strong> set the kWh to charge and find out how long it takes. The chart compares the time needed at different power levels.',

    secPhase:     'Power supply type',
    secPower:     'Charging power',
    secMode:      'Calculation mode',
    secInputTime: 'Charging duration',
    secInputKwh:  'Energy to charge',
    secOptions:   'Advanced options',

    phMono: '🔌 Single-phase',  phMonoSub: '230 V · 6–32 A',
    phTri:  '⚡ Three-phase',   phTriSub:  '400 V · 6–32 A',
    phDc:   '🏎 DC',            phDcSub:   'up to 350 kW',

    slPowerAC:     '⚡ Current (A)',
    slPowerDC:     '⚡ Power (kW)',
    slTime:        '⏱ Duration',
    slKwh:         '🔋 Energy',
    slCapacity:    '🔋 Battery capacity',
    slSocStart:    '📉 Initial SoC',
    slSocEnd:      '📈 Target SoC',
    slLoss:        '📉 Loss',
    slCurveThresh: '📐 Taper threshold',
    slCurveEnd:    '📉 Final power (% of max)',

    modeTimeBtn: '⏱ Given time → kWh accumulated',
    modeKwhBtn:  '🔋 Given kWh → time needed',

    chkRealLabel:  '🔋 Real battery (capacity + SoC)',
    chkCurveLabel: '📐 Decreasing curve',
    chkLossLabel:  '📉 Charging loss',

    miniRealLabel: 'kWh to charge',

    rbLabelTime: '⚡ Energy accumulated',
    rbLabelKwh:  '⏱ Estimated charging time',

    rbNoteTime: (kw, h, tot) =>
      `${kw} kW × ${h} h = ${tot} kWh`,
    rbNoteLoss: (loss, net) =>
      `+ ${loss}% loss → ${net} kWh net`,
    rbNoteSocCap: (from, to) =>
      `⚠ Capped by SoC: ${from}%→${to}%`,
    rbNoteKwh: (gross, kw) =>
      `${gross} kWh ÷ ${kw} kW`,
    rbNoteLossKwh: (net, loss, gross) =>
      `(${net} kWh net + ${loss}% = ${gross} kWh gross)`,

    capInfo: (from, to, kwh) =>
      `⚠ Real limit: ${from}%→${to}% SoC = ${kwh} kWh`,

    curveNote: (thresh, end) =>
      `Above ${thresh}% SoC, power tapers linearly down to ${end}% of max (at 100% SoC).`,

    chartTitle:    'Charging power comparison',
    chartModeTime: (t) => `${t} charging`,
    chartModeKwh:  (kwh) => `target ${kwh} kWh`,
    axisTime: 'Time',
    axisKwh:  'kWh',

    dsLabelAC: (amps, kw) => `${amps} A · ${kw} kW`,
    dsLabelDC: (kw) => `${kw} kW`,

    modalTitlePowerAC: 'Current (A)',     modalDescPowerAC: 'Current in Ampere (6–32)',
    modalTitlePowerDC: 'DC Power (kW)',   modalDescPowerDC: 'Power in kW (7–350)',
    modalTitleTime:    'Charging duration', modalDescTime:  'Total charging minutes',
    modalTitleKwh:     'Energy to charge',  modalDescKwh:  'Net kWh to put into battery',
    modalTitleCap:     'Battery capacity',  modalDescCap:  'Nominal capacity in kWh',
    btnOk: 'OK', btnCancel: 'Cancel',

    fmtMin: (min) => {
      min = Math.round(min);
      if (min < 60) return `${min} min`;
      const h = Math.floor(min / 60), m = min % 60;
      return m === 0 ? `${h}h` : `${h}h ${m}m`;
    },
  },
};

const tC = STRINGS_CHARGE[lang] || STRINGS_CHARGE['it'];