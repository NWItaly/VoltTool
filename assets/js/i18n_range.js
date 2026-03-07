/* ═══════════════════════════════════════════════════════════════
   VoltTool — i18n_range.js
   Esporta: tR
   Da includere DOPO i18n.js (usa `lang` già definito lì)
   ═══════════════════════════════════════════════════════════════ */

const STRINGS_RANGE = {
  it: {

    /* guide */
    guideMedio:    '<strong>Consumo medio:</strong> imposta la capacità della batteria e il consumo medio per stimare l\'autonomia.',
    guidePercorso: '<strong>Per tipo di percorso:</strong> confronta l\'autonomia nei tre scenari di guida. Il grafico mostra come scende la <strong>% di carica</strong> al crescere dei km percorsi.',

    /* section labels */
    secBattery:    'Batteria',
    secMode:       'Modalità di calcolo',
    secConsumption:'Consumo',
    secPercorso:   'Consumi per percorso',
    secOptions:    'Opzioni',

    /* mode buttons */
    modeMedio:    'Consumo medio',
    modePercorso: 'Per tipo di percorso',

    /* slider labels */
    slBattery:    'Capacità',
    slKwh:        'Consumo medio',
    slSpeedCity:  '🏙️ Città',
    slSpeedExtra: '🛣️ Extraurbano',
    slSpeedAuto:  '🛤️ Autostrada',
    slSocStart:   'Carica attuale',
    slSocEnd:     'Riserva minima',

    /* preset battery */
    presetBat40: 'Compatta',
    presetBat60: 'Media',
    presetBat80: 'SUV',

    /* accordion */
    chkSocLabel: 'Carica attuale e riserva',

    /* soc window note */
    socWindowNote: (pct, kwh) => `Finestra: <span>${pct} %</span> — ${kwh} kWh`,

    /* mini result */
    miniSocLabel: 'kWh disponibili',

    /* result box — medio */
    rbMedioLabel: 'Autonomia stimata',
    rbMedioNote:  (base, kwh100) => `${base} · ${kwh100} kWh/100 km`,

    /* result box — percorso */
    rbPercorsoLabel: 'Autonomia per tipo di percorso',
    rbCityLabel:     '🏙️ Città',
    rbExtraLabel:    '🛣️ Extraurbano',
    rbAutoLabel:     '🛤️ Autostrada',

    /* note base (usata in entrambe le modalità) */
    noteBaseSoc:  (from, to, kwh) => `${from} % → ${to} % · ${kwh} kWh`,
    noteBaseFull: (bat)           => `${bat} kWh (piena carica)`,

    /* chart */
    chartTitle:    'Autonomia per tipo di percorso',
    chartSubSoc:   (from, to, kwh) => `${from}% → ${to}% · ${kwh} kWh disponibili`,
    chartSubFull:  (bat)           => `Piena carica · ${bat} kWh`,
    axisKm:        'Km percorsi',
    axisPct:       'Carica batteria (%)',
    dsCity:        '🏙️ Città',
    dsExtra:       '🛣️ Extraurbano',
    dsAuto:        '🛤️ Autostrada',
    dsRiserva:     (pct) => `⚑ Riserva ${pct} %`,

    /* modal */
    modalTitleBattery:    'Capacità batteria',
    modalDescBattery:     'Inserisci la capacità nominale della batteria in kWh.',
    modalTitleKwh:        'Consumo medio',
    modalDescKwh:         'Inserisci il consumo medio in kWh per 100 km.',
    modalTitleSocStart:   'Carica attuale',
    modalDescSocStart:    'Percentuale di carica attuale della batteria.',
    modalTitleSocEnd:     'Riserva minima',
    modalDescSocEnd:      'Percentuale minima a cui vuoi fermarti per cercare una colonnina.',
    modalTitleSpeedCity:  'Consumo in città',
    modalDescSpeedCity:   'Consumo stimato in ambito urbano (kWh/100 km).',
    modalTitleSpeedExtra: 'Consumo extraurbano',
    modalDescSpeedExtra:  'Consumo stimato su strade extraurbane (kWh/100 km).',
    modalTitleSpeedAuto:  'Consumo in autostrada',
    modalDescSpeedAuto:   'Consumo stimato in autostrada (kWh/100 km).',
    btnOk:     'OK',
    btnCancel: 'Annulla',

    /* tooltip */
    tooltipKm: (km) => `${km} km`,
  },

  en: {

    /* guide */
    guideMedio:    '<strong>Average consumption:</strong> set the battery capacity and average consumption to estimate your range.',
    guidePercorso: '<strong>By journey type:</strong> compare range across three driving scenarios. The chart shows how <strong>battery %</strong> drops as km increase.',

    /* section labels */
    secBattery:    'Battery',
    secMode:       'Calculation mode',
    secConsumption:'Consumption',
    secPercorso:   'Consumption by journey type',
    secOptions:    'Options',

    /* mode buttons */
    modeMedio:    'Average consumption',
    modePercorso: 'By journey type',

    /* slider labels */
    slBattery:    'Capacity',
    slKwh:        'Average consumption',
    slSpeedCity:  '🏙️ City',
    slSpeedExtra: '🛣️ Extra-urban',
    slSpeedAuto:  '🛤️ Motorway',
    slSocStart:   'Current charge',
    slSocEnd:     'Minimum reserve',

    /* preset battery */
    presetBat40: 'Compact',
    presetBat60: 'Mid-size',
    presetBat80: 'SUV',

    /* accordion */
    chkSocLabel: 'Current charge and reserve',

    /* soc window note */
    socWindowNote: (pct, kwh) => `Window: <span>${pct} %</span> — ${kwh} kWh`,

    /* mini result */
    miniSocLabel: 'Available kWh',

    /* result box — medio */
    rbMedioLabel: 'Estimated range',
    rbMedioNote:  (base, kwh100) => `${base} · ${kwh100} kWh/100 km`,

    /* result box — percorso */
    rbPercorsoLabel: 'Range by journey type',
    rbCityLabel:     '🏙️ City',
    rbExtraLabel:    '🛣️ Extra-urban',
    rbAutoLabel:     '🛤️ Motorway',

    /* note base */
    noteBaseSoc:  (from, to, kwh) => `${from} % → ${to} % · ${kwh} kWh`,
    noteBaseFull: (bat)           => `${bat} kWh (full charge)`,

    /* chart */
    chartTitle:    'Range by journey type',
    chartSubSoc:   (from, to, kwh) => `${from}% → ${to}% · ${kwh} kWh available`,
    chartSubFull:  (bat)           => `Full charge · ${bat} kWh`,
    axisKm:        'Km driven',
    axisPct:       'Battery charge (%)',
    dsCity:        '🏙️ City',
    dsExtra:       '🛣️ Extra-urban',
    dsAuto:        '🛤️ Motorway',
    dsRiserva:     (pct) => `⚑ Reserve ${pct} %`,

    /* modal */
    modalTitleBattery:    'Battery capacity',
    modalDescBattery:     'Enter the nominal battery capacity in kWh.',
    modalTitleKwh:        'Average consumption',
    modalDescKwh:         'Enter average consumption in kWh per 100 km.',
    modalTitleSocStart:   'Current charge',
    modalDescSocStart:    'Current battery charge percentage.',
    modalTitleSocEnd:     'Minimum reserve',
    modalDescSocEnd:      'Minimum percentage at which you want to stop and find a charger.',
    modalTitleSpeedCity:  'City consumption',
    modalDescSpeedCity:   'Estimated consumption in urban areas (kWh/100 km).',
    modalTitleSpeedExtra: 'Extra-urban consumption',
    modalDescSpeedExtra:  'Estimated consumption on extra-urban roads (kWh/100 km).',
    modalTitleSpeedAuto:  'Motorway consumption',
    modalDescSpeedAuto:   'Estimated consumption on motorways (kWh/100 km).',
    btnOk:     'OK',
    btnCancel: 'Cancel',

    /* tooltip */
    tooltipKm: (km) => `${km} km`,
  },
};

const tR = STRINGS_RANGE[lang] || STRINGS_RANGE['it'];