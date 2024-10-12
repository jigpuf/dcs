export default [
  {
    module: "9202",
    series: "C-series",
    channelType: "AI(V)",
    header: "DB-37 Socket",
    uses: [
      {
        use: "Differential AI",
        channelCount: 16,
        instruments: ["Pressure Ducers", "Position Feedback"],
        wires: {
          count: {
            red: 0,
            white: 16,
            green: 16,
            black: 4,
            purple: 0,
            brown: 0,
            blue: 0,
            orange: 0,
          },
          pins: {
            red: "",
            white: "(AI+) 1-8, 11-18",
            green: "(AI-)20-27,30-37",
            black: "(Com) 9-10, 28-29",
            purple: "",
            brown: "",
            blue: "",
            orange: "",
            empty: "19",
          },
        },
      },
    ],
  },
  {
    module: "9205",
    series: "C-series",
    channelType: "AI(V)",
    header: "DB-37 Socket",
    uses: [
      {
        use: "Module to Limit Board Output",
        channelCount: "32",
        instruments: ["Limits"],
        wires: {
          count: {
            red: 0,
            white: 37,
            green: 0,
            black: 0,
            purple: 0,
            brown: 0,
            blue: 0,
            orange: 0,
          },
          pins: {
            red: "",
            white: "1-37",
            green: "",
            black: "",
            purple: "",
            brown: "",
            blue: "",
            orange: "",
            empty: "",
          },
        },
      },
      {
        use: "Module to Valve Command Board Feedback",
        channelCount: "32",
        instruments: ["Valve Feedback"],
        wires: {
          count: {
            red: 0,
            white: 37,
            green: 0,
            black: 0,
            purple: 0,
            brown: 0,
            blue: 0,
            orange: 0,
          },
          pins: {
            red: "",
            white: "1-37",
            green: "",
            black: "",
            purple: "",
            brown: "",
            blue: "",
            orange: "",
            empty: "",
          },
        },
      },
      {
        use: "AI(V) Single ended",
        channelCount: "32",
        instruments: ["AI single-ended Instruments"],
        wires: {
          count: {
            red: 0,
            white: 32,
            green: 0,
            black: 3,
            purple: 0,
            brown: 0,
            blue: 0,
            orange: 0,
          },
          pins: {
            red: "",
            white: "(AI+) 1-8, 11-18, 20-27, 30-37",
            green: "",
            black: "(Com) 10, 29 (AI Sense) 19",
            purple: "",
            brown: "",
            blue: "",
            orange: "",
            empty: "9, 28",
          },
        },
      },
    ],
  },
  {
    module: "9216",
    series: "C-series",
    channelType: "RTD",
    header: "DB-37 Socket",
    uses: [
      {
        use: "100 Ohm RTD",
        channelCount: "8",
        instruments: ["100 Ohm RTD"],
        wires: {
          count: {
            red: 8,
            white: 8,
            green: 8,
            black: 8,
            purple: 0,
            brown: 0,
            blue: 0,
            orange: 0,
          },
          pins: {
            red: "(Ex+) 1, 3, 5, 7, 11, 13, 15, 17",
            white: "(Sig+) 20, 22, 24, 26, 30, 32, 34, 36",
            green: "(Sig-) 2, 4, 6, 8, 12, 14, 16, 18",
            black: "(Ex-) 21, 23, 25, 27, 31, 33, 35, 37",
            purple: "",
            brown: "",
            blue: "",
            orange: "",
            empty: "9-10, 19, 28-29",
          },
        },
      },
    ],
  },
  {
    module: "9220",
    series: "C-series",
    channelType: "",
    header: "DB-37 Socket",
    uses: [
      {
        use: "",
        channelCount: "16",
        instruments: [""],
        wires: {
          count: {
            red: 0,
            white: 16,
            green: 16,
            black: 5,
            purple: 0,
            brown: 0,
            blue: 0,
            orange: 0,
          },
          pins: {
            red: "",
            white: "1-8, 11-18",
            green: "20-27, 30-37",
            black: "9-10, 19, 28-29",
            purple: "",
            brown: "",
            blue: "",
            orange: "",
            empty: "",
          },
        },
      },
    ],
  },
  {
    module: "9237",
    series: "C-series",
    channelType: "Bridge",
    header: "DB-37 Socket",
    uses: [
      {
        use: "Full Bridge Load Cell",
        channelCount: "4",
        instruments: ["Full Bridge Load Cells"],
        wires: {
          count: {
            red: 5,
            white: 4,
            green: 4,
            black: 5,
            purple: 0,
            brown: 0,
            blue: 4,
            orange: 4,
          },
          pins: {
            red: "(Ex+) 2, 6, 12, 16 (VSup+) 10",
            white: "(AI+) 3, 7, 13, 17",
            green: "(AI-) 22, 26, 32, 36",
            black: "(EX-) 21, 25, 31, 35 (Vsup-) 29",
            purple: "",
            brown: "",
            blue: "(RS-) 20, 24, 30, 34",
            orange: "(RS+) 1, 5, 11, 15",
            empty: "4, 8-9, 14, 18-19, 23, 27-28, 33, 37",
          },
        },
      },
    ],
  },
  {
    module: "9264",
    series: "C-series",
    channelType: "AO(V)",
    header: "DB-37 Socket",
    uses: [
      {
        use: "Analog Out(V)",
        channelCount: "16",
        instruments: [""],
        wires: {
          count: {
            red: 16,
            white: 0,
            green: 0,
            black: 17,
            purple: 0,
            brown: 0,
            blue: 0,
            orange: 0,
          },
          pins: {
            red: "(AO+) 1-8, 11-18",
            white: "",
            green: "",
            black: "(Com) 19, 20-27, 30-37",
            purple: "",
            brown: "",
            blue: "",
            orange: "",
            empty: "9-10, 28-29",
          },
        },
      },
    ],
  },
  {
    module: "9266",
    series: "C-series",
    channelType: "AO(I)",
    header: "DB-37 Socket",
    uses: [
      {
        use: "",
        channelCount: "",
        instruments: ["V200"],
        wires: {
          count: {
            red: 9,
            white: 0,
            green: 0,
            black: 9,
            purple: 0,
            brown: 0,
            blue: 0,
            orange: 0,
          },
          pins: {
            red: "(AO+) 1-8 (VSup) 29",
            white: "",
            green: "",
            black: "(Com) 20-27,19",
            purple: "",
            brown: "",
            blue: "",
            orange: "",
            empty: "9-18, 28, 30-37",
          },
        },
      },
    ],
  },
  {
    module: "9476",
    series: "C-series",
    channelType: "Digital Out",
    header: "DB-37 Socket",
    uses: [
      {
        use: "Valve Command",
        channelCount: "32",
        instruments: ["Valve Command Board"],
        wires: {
          count: {
            red: 36,
            white: 0,
            green: 0,
            black: 1,
            purple: 0,
            brown: 0,
            blue: 0,
            orange: 0,
          },
          pins: {
            red: "(CMD) 1-8, 11-18, 20-27, 30-37 (VSup) 9-10, 28-29",
            white: "",
            green: "",
            black: "(Com) 37",
            purple: "",
            brown: "",
            blue: "",
            orange: "",
            empty: "",
          },
        },
      },
    ],
  },
  {
    module: "Valve Driver",
    series: "C-series",
    channelType: "Valve Command",
    header: "DB-37 Pin(All 4 Connectors)",
    uses: [
      {
        use: "Valve Channels",
        channelCount: "16",
        instruments: ["Valves"],
        wires: {
          count: {
            red: 16,
            white: 0,
            green: 0,
            black: 16,
            purple: 0,
            brown: 0,
            blue: 0,
            orange: 0,
          },
          pins: {
            red: "(Valve+) 1-16",
            white: "",
            green: "",
            black: "(Valve-) 20-35",
            purple: "",
            brown: "",
            blue: "",
            orange: "",
            empty: "17-19, 36-39",
          },
        },
      },
      {
        use: "Valve CMD-FDBK to 9205",
        channelCount: "32",
        instruments: ["Valve FDBK"],
        wires: {
          count: {
            red: 0,
            white: 37,
            green: 0,
            black: 0,
            purple: 0,
            brown: 0,
            blue: 0,
            orange: 0,
          },
          pins: {
            red: "",
            white: "1-37",
            green: "",
            black: "",
            purple: "",
            brown: "",
            blue: "",
            orange: "",
            empty: "",
          },
        },
      },
      {
        use: "Valve CMD from 9476",
        channelCount: "32",
        instruments: ["Valve CMD"],
        wires: {
          count: {
            red: 36,
            white: 0,
            green: 0,
            black: 0,
            purple: 0,
            brown: 0,
            blue: 0,
            orange: 0,
          },
          pins: {
            red: "1-36",
            white: "",
            green: "",
            black: "37",
            purple: "",
            brown: "",
            blue: "",
            orange: "",
            empty: "",
          },
        },
      },
    ],
  },
  {
    module: "Limit Board",
    series: "",
    channelType: "Limits",
    header: "DB-37 Open=Pin, Close=Pin, Output=Pin, Return=Socket",
    uses: [
      {
        use: "Output to Module 9205",
        channelCount: "32",
        instruments: ["Limit Board Output"],
        wires: {
          count: {
            red: 0,
            white: 37,
            green: 0,
            black: 0,
            purple: 0,
            brown: 0,
            blue: 0,
            orange: 0,
          },
          pins: {
            red: "",
            white: "1-37",
            green: "",
            black: "",
            purple: "",
            brown: "",
            blue: "",
            orange: "",
            empty: "",
          },
        },
      },
      {
        use: "Open Channel",
        channelCount: "32",
        instruments: ["Limit Open"],
        wires: {
          count: {
            red: 0,
            white: 0,
            green: 0,
            black: 0,
            purple: 1 - 32,
            brown: 0,
            blue: 0,
            orange: 0,
          },
          pins: {
            red: "",
            white: "",
            green: "",
            black: "",
            purple: "1-32",
            brown: "",
            blue: "",
            orange: "",
            empty: "",
          },
        },
      },
      {
        use: "Close to Channel",
        channelCount: "32",
        instruments: ["Limit CLose"],
        wires: {
          count: {
            red: 0,
            white: 0,
            green: 0,
            black: 0,
            purple: 0,
            brown: 32,
            blue: 0,
            orange: 0,
          },
          pins: {
            red: "",
            white: "",
            green: "",
            black: "",
            purple: "",
            brown: "1-32",
            blue: "",
            orange: "",
            empty: "",
          },
        },
      },
      {
        use: "Channel return to Limit Board",
        channelCount: "32",
        instruments: ["Limit Return"],
        wires: {
          count: {
            red: 0,
            white: 32,
            green: 0,
            black: 0,
            purple: 0,
            brown: 0,
            blue: 0,
            orange: 0,
          },
          pins: {
            red: "",
            white: "1-32",
            green: "",
            black: "",
            purple: "",
            brown: "",
            blue: "",
            orange: "",
            empty: "",
          },
        },
      },
    ],
  },
  {
    module: "",
    series: "",
    channelType: "",
    header: "",
    uses: [
      {
        use: "",
        channelCount: "",
        instruments: [""],
        wires: {
          count: {
            red: 0,
            white: 0,
            green: 0,
            black: 0,
            purple: 0,
            brown: 0,
            blue: 0,
            orange: 0,
          },
          pins: {
            red: "",
            white: "",
            green: "",
            black: "",
            purple: "",
            brown: "",
            blue: "",
            orange: "",
            empty: "",
          },
        },
      },
    ],
  },
];