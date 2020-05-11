const xb1 = atob;
const MINION_LEVEL_STATS =
{

    "Revenant": {
        "1": {
            "cooldown": 29,
            "slots": 64
        },
        "2": {
            "cooldown": 29,
            "slots": 192
        },
        "3": {
            "cooldown": 26,
            "slots": 192
        },
        "4": {
            "cooldown": 26,
            "slots": 384
        },
        "5": {
            "cooldown": 23,
            "slots": 384
        },
        "6": {
            "cooldown": 23,
            "slots": 576
        },
        "7": {
            "cooldown": 19,
            "slots": 576
        },
        "8": {
            "cooldown": 19,
            "slots": 768
        },
        "9": {
            "cooldown": 14,
            "slots": 768
        },
        "10": {
            "cooldown": 14,
            "slots": 960
        },
        "11": {
            "cooldown": 10,
            "slots": 960
        }
    },
    "Tarantula": {
        "1": {
            "cooldown": 29,
            "slots": 64
        },
        "2": {
            "cooldown": 29,
            "slots": 192
        },
        "3": {
            "cooldown": 26,
            "slots": 192
        },
        "4": {
            "cooldown": 26,
            "slots": 384
        },
        "5": {
            "cooldown": 23,
            "slots": 384
        },
        "6": {
            "cooldown": 23,
            "slots": 576
        },
        "7": {
            "cooldown": 19,
            "slots": 576
        },
        "8": {
            "cooldown": 19,
            "slots": 768
        },
        "9": {
            "cooldown": 14,
            "slots": 768
        },
        "10": {
            "cooldown": 14,
            "slots": 960
        },
        "11": {
            "cooldown": 10,
            "slots": 960
        }
    },
    "Blaze": {
        "1": {
            "cooldown": 33,
            "slots": 64
        },
        "2": {
            "cooldown": 33,
            "slots": 192
        },
        "3": {
            "cooldown": 31,
            "slots": 192
        },
        "4": {
            "cooldown": 31,
            "slots": 384
        },
        "5": {
            "cooldown": 28,
            "slots": 384
        },
        "6": {
            "cooldown": 28,
            "slots": 576
        },
        "7": {
            "cooldown": 25,
            "slots": 576
        },
        "8": {
            "cooldown": 25,
            "slots": 768
        },
        "9": {
            "cooldown": 21,
            "slots": 768
        },
        "10": {
            "cooldown": 21,
            "slots": 960
        },
        "11": {
            "cooldown": 16,
            "slots": 960
        }
    },
    "Cactus": {
        "1": {
            "cooldown": 27,
            "slots": 64
        },
        "2": {
            "cooldown": 27,
            "slots": 192
        },
        "3": {
            "cooldown": 25,
            "slots": 192
        },
        "4": {
            "cooldown": 25,
            "slots": 384
        },
        "5": {
            "cooldown": 23,
            "slots": 384
        },
        "6": {
            "cooldown": 23,
            "slots": 576
        },
        "7": {
            "cooldown": 21,
            "slots": 576
        },
        "8": {
            "cooldown": 21,
            "slots": 768
        },
        "9": {
            "cooldown": 18,
            "slots": 768
        },
        "10": {
            "cooldown": 18,
            "slots": 960
        },
        "11": {
            "cooldown": 15,
            "slots": 960
        }
    },
    "Carrot": {
        "1": {
            "cooldown": 20,
            "slots": 64
        },
        "2": {
            "cooldown": 20,
            "slots": 192
        },
        "3": {
            "cooldown": 18,
            "slots": 192
        },
        "4": {
            "cooldown": 18,
            "slots": 384
        },
        "5": {
            "cooldown": 16,
            "slots": 384
        },
        "6": {
            "cooldown": 16,
            "slots": 576
        },
        "7": {
            "cooldown": 14,
            "slots": 576
        },
        "8": {
            "cooldown": 14,
            "slots": 768
        },
        "9": {
            "cooldown": 12,
            "slots": 768
        },
        "10": {
            "cooldown": 12,
            "slots": 960
        },
        "11": {
            "cooldown": 10,
            "slots": 960
        }
    },
    "Cave Spider": {
        "1": {
            "cooldown": 26,
            "slots": 128
        },
        "2": {
            "cooldown": 26,
            "slots": 256
        },
        "3": {
            "cooldown": 24,
            "slots": 256
        },
        "4": {
            "cooldown": 24,
            "slots": 384
        },
        "5": {
            "cooldown": 22,
            "slots": 384
        },
        "6": {
            "cooldown": 22,
            "slots": 576
        },
        "7": {
            "cooldown": 20,
            "slots": 576
        },
        "8": {
            "cooldown": 20,
            "slots": 768
        },
        "9": {
            "cooldown": 17,
            "slots": 768
        },
        "10": {
            "cooldown": 17,
            "slots": 960
        },
        "11": {
            "cooldown": 13,
            "slots": 960
        }
    },
    "Chicken": {
        "1": {
            "cooldown": 26,
            "slots": 192
        },
        "2": {
            "cooldown": 26,
            "slots": 320
        },
        "3": {
            "cooldown": 24,
            "slots": 320
        },
        "4": {
            "cooldown": 24,
            "slots": 384
        },
        "5": {
            "cooldown": 22,
            "slots": 384
        },
        "6": {
            "cooldown": 22,
            "slots": 576
        },
        "7": {
            "cooldown": 20,
            "slots": 576
        },
        "8": {
            "cooldown": 20,
            "slots": 768
        },
        "9": {
            "cooldown": 17,
            "slots": 768
        },
        "10": {
            "cooldown": 17,
            "slots": 960
        },
        "11": {
            "cooldown": 13,
            "slots": 960
        }
    },
    "Clay": {
        "1": {
            "cooldown": 32,
            "slots": 64
        },
        "2": {
            "cooldown": 32,
            "slots": 192
        },
        "3": {
            "cooldown": 30,
            "slots": 192
        },
        "4": {
            "cooldown": 30,
            "slots": 384
        },
        "5": {
            "cooldown": 27,
            "slots": 384
        },
        "6": {
            "cooldown": 27,
            "slots": 576
        },
        "7": {
            "cooldown": 24,
            "slots": 576
        },
        "8": {
            "cooldown": 24,
            "slots": 768
        },
        "9": {
            "cooldown": 20,
            "slots": 768
        },
        "10": {
            "cooldown": 20,
            "slots": 960
        },
        "11": {
            "cooldown": 16,
            "slots": 960
        }
    },
    "Coal": {
        "1": {
            "cooldown": 15,
            "slots": 64
        },
        "2": {
            "cooldown": 15,
            "slots": 192
        },
        "3": {
            "cooldown": 13,
            "slots": 192
        },
        "4": {
            "cooldown": 13,
            "slots": 384
        },
        "5": {
            "cooldown": 12,
            "slots": 384
        },
        "6": {
            "cooldown": 12,
            "slots": 576
        },
        "7": {
            "cooldown": 10,
            "slots": 576
        },
        "8": {
            "cooldown": 10,
            "slots": 768
        },
        "9": {
            "cooldown": 9,
            "slots": 768
        },
        "10": {
            "cooldown": 9,
            "slots": 960
        },
        "11": {
            "cooldown": 7,
            "slots": 960
        }
    },
    "Cobblestone": {
        "1": {
            "cooldown": 14,
            "slots": 64
        },
        "2": {
            "cooldown": 14,
            "slots": 192
        },
        "3": {
            "cooldown": 12,
            "slots": 192
        },
        "4": {
            "cooldown": 12,
            "slots": 384
        },
        "5": {
            "cooldown": 10,
            "slots": 384
        },
        "6": {
            "cooldown": 10,
            "slots": 576
        },
        "7": {
            "cooldown": 9,
            "slots": 576
        },
        "8": {
            "cooldown": 9,
            "slots": 768
        },
        "9": {
            "cooldown": 8,
            "slots": 768
        },
        "10": {
            "cooldown": 8,
            "slots": 960
        },
        "11": {
            "cooldown": 7,
            "slots": 960
        }
    },
    "Cocoa Beans": {
        "1": {
            "cooldown": 27,
            "slots": 64
        },
        "2": {
            "cooldown": 27,
            "slots": 192
        },
        "3": {
            "cooldown": 25,
            "slots": 192
        },
        "4": {
            "cooldown": 25,
            "slots": 384
        },
        "5": {
            "cooldown": 23,
            "slots": 384
        },
        "6": {
            "cooldown": 23,
            "slots": 576
        },
        "7": {
            "cooldown": 21,
            "slots": 576
        },
        "8": {
            "cooldown": 21,
            "slots": 768
        },
        "9": {
            "cooldown": 18,
            "slots": 768
        },
        "10": {
            "cooldown": 18,
            "slots": 960
        },
        "11": {
            "cooldown": 15,
            "slots": 960
        }
    },
    "Cow": {
        "1": {
            "cooldown": 26,
            "slots": 128
        },
        "2": {
            "cooldown": 26,
            "slots": 256
        },
        "3": {
            "cooldown": 24,
            "slots": 256
        },
        "4": {
            "cooldown": 24,
            "slots": 384
        },
        "5": {
            "cooldown": 22,
            "slots": 384
        },
        "6": {
            "cooldown": 22,
            "slots": 576
        },
        "7": {
            "cooldown": 20,
            "slots": 576
        },
        "8": {
            "cooldown": 20,
            "slots": 768
        },
        "9": {
            "cooldown": 17,
            "slots": 768
        },
        "10": {
            "cooldown": 17,
            "slots": 960
        },
        "11": {
            "cooldown": 13,
            "slots": 960
        }
    },
    "Creeper": {
        "1": {
            "cooldown": 27,
            "slots": 64
        },
        "2": {
            "cooldown": 27,
            "slots": 192
        },
        "3": {
            "cooldown": 25,
            "slots": 192
        },
        "4": {
            "cooldown": 25,
            "slots": 384
        },
        "5": {
            "cooldown": 23,
            "slots": 384
        },
        "6": {
            "cooldown": 23,
            "slots": 576
        },
        "7": {
            "cooldown": 21,
            "slots": 576
        },
        "8": {
            "cooldown": 21,
            "slots": 768
        },
        "9": {
            "cooldown": 18,
            "slots": 768
        },
        "10": {
            "cooldown": 18,
            "slots": 960
        },
        "11": {
            "cooldown": 14,
            "slots": 960
        }
    },
    "Dark Oak": {
        "1": {
            "cooldown": 48,
            "slots": 64
        },
        "2": {
            "cooldown": 48,
            "slots": 192
        },
        "3": {
            "cooldown": 45,
            "slots": 192
        },
        "4": {
            "cooldown": 45,
            "slots": 384
        },
        "5": {
            "cooldown": 42,
            "slots": 384
        },
        "6": {
            "cooldown": 42,
            "slots": 576
        },
        "7": {
            "cooldown": 38,
            "slots": 576
        },
        "8": {
            "cooldown": 38,
            "slots": 768
        },
        "9": {
            "cooldown": 33,
            "slots": 768
        },
        "10": {
            "cooldown": 33,
            "slots": 960
        },
        "11": {
            "cooldown": 27,
            "slots": 960
        }
    },
    "Diamond": {
        "1": {
            "cooldown": 29,
            "slots": 64
        },
        "2": {
            "cooldown": 29,
            "slots": 192
        },
        "3": {
            "cooldown": 27,
            "slots": 192
        },
        "4": {
            "cooldown": 27,
            "slots": 384
        },
        "5": {
            "cooldown": 25,
            "slots": 384
        },
        "6": {
            "cooldown": 25,
            "slots": 576
        },
        "7": {
            "cooldown": 22,
            "slots": 576
        },
        "8": {
            "cooldown": 22,
            "slots": 768
        },
        "9": {
            "cooldown": 19,
            "slots": 768
        },
        "10": {
            "cooldown": 19,
            "slots": 960
        },
        "11": {
            "cooldown": 15,
            "slots": 960
        }
    },
    "Emerald": {
        "1": {
            "cooldown": 28,
            "slots": 64
        },
        "2": {
            "cooldown": 28,
            "slots": 192
        },
        "3": {
            "cooldown": 26,
            "slots": 192
        },
        "4": {
            "cooldown": 26,
            "slots": 384
        },
        "5": {
            "cooldown": 24,
            "slots": 384
        },
        "6": {
            "cooldown": 24,
            "slots": 576
        },
        "7": {
            "cooldown": 21,
            "slots": 576
        },
        "8": {
            "cooldown": 21,
            "slots": 768
        },
        "9": {
            "cooldown": 18,
            "slots": 768
        },
        "10": {
            "cooldown": 18,
            "slots": 960
        },
        "11": {
            "cooldown": 14,
            "slots": 960
        }
    },
    "End Stone": {
        "1": {
            "cooldown": 26,
            "slots": 64
        },
        "2": {
            "cooldown": 26,
            "slots": 192
        },
        "3": {
            "cooldown": 24,
            "slots": 192
        },
        "4": {
            "cooldown": 24,
            "slots": 384
        },
        "5": {
            "cooldown": 22,
            "slots": 384
        },
        "6": {
            "cooldown": 22,
            "slots": 576
        },
        "7": {
            "cooldown": 19,
            "slots": 576
        },
        "8": {
            "cooldown": 19,
            "slots": 768
        },
        "9": {
            "cooldown": 16,
            "slots": 768
        },
        "10": {
            "cooldown": 16,
            "slots": 960
        },
        "11": {
            "cooldown": 13,
            "slots": 960
        }
    },
    "Enderman": {
        "1": {
            "cooldown": 32,
            "slots": 64
        },
        "2": {
            "cooldown": 32,
            "slots": 192
        },
        "3": {
            "cooldown": 30,
            "slots": 192
        },
        "4": {
            "cooldown": 30,
            "slots": 384
        },
        "5": {
            "cooldown": 28,
            "slots": 384
        },
        "6": {
            "cooldown": 28,
            "slots": 576
        },
        "7": {
            "cooldown": 25,
            "slots": 576
        },
        "8": {
            "cooldown": 25,
            "slots": 768
        },
        "9": {
            "cooldown": 22,
            "slots": 768
        },
        "10": {
            "cooldown": 22,
            "slots": 960
        },
        "11": {
            "cooldown": 18,
            "slots": 960
        }
    },
    "Fishing": {
        "1": {
            "cooldown": 78,
            "slots": 640
        },
        "2": {
            "cooldown": 75,
            "slots": 640
        },
        "3": {
            "cooldown": 72,
            "slots": 640
        },
        "4": {
            "cooldown": 72,
            "slots": 704
        },
        "5": {
            "cooldown": 68,
            "slots": 704
        },
        "6": {
            "cooldown": 68,
            "slots": 768
        },
        "7": {
            "cooldown": 62,
            "slots": 768
        },
        "8": {
            "cooldown": 62,
            "slots": 832
        },
        "9": {
            "cooldown": 53,
            "slots": 832
        },
        "10": {
            "cooldown": 53,
            "slots": 896
        },
        "11": {
            "cooldown": 35,
            "slots": 960
        }
    },
    "Ghast": {
        "1": {
            "cooldown": 50,
            "slots": 64
        },
        "2": {
            "cooldown": 50,
            "slots": 192
        },
        "3": {
            "cooldown": 47,
            "slots": 192
        },
        "4": {
            "cooldown": 47,
            "slots": 384
        },
        "5": {
            "cooldown": 44,
            "slots": 384
        },
        "6": {
            "cooldown": 44,
            "slots": 576
        },
        "7": {
            "cooldown": 41,
            "slots": 576
        },
        "8": {
            "cooldown": 41,
            "slots": 768
        },
        "9": {
            "cooldown": 38,
            "slots": 768
        },
        "10": {
            "cooldown": 38,
            "slots": 960
        },
        "11": {
            "cooldown": 32,
            "slots": 960
        }
    },
    "Glowstone": {
        "1": {
            "cooldown": 25,
            "slots": 64
        },
        "2": {
            "cooldown": 25,
            "slots": 192
        },
        "3": {
            "cooldown": 23,
            "slots": 192
        },
        "4": {
            "cooldown": 23,
            "slots": 384
        },
        "5": {
            "cooldown": 21,
            "slots": 384
        },
        "6": {
            "cooldown": 21,
            "slots": 576
        },
        "7": {
            "cooldown": 19,
            "slots": 576
        },
        "8": {
            "cooldown": 19,
            "slots": 768
        },
        "9": {
            "cooldown": 16,
            "slots": 768
        },
        "10": {
            "cooldown": 16,
            "slots": 960
        },
        "11": {
            "cooldown": 13,
            "slots": 960
        }
    },
    "Gold": {
        "1": {
            "cooldown": 22,
            "slots": 64
        },
        "2": {
            "cooldown": 22,
            "slots": 192
        },
        "3": {
            "cooldown": 20,
            "slots": 192
        },
        "4": {
            "cooldown": 20,
            "slots": 384
        },
        "5": {
            "cooldown": 18,
            "slots": 384
        },
        "6": {
            "cooldown": 18,
            "slots": 576
        },
        "7": {
            "cooldown": 16,
            "slots": 576
        },
        "8": {
            "cooldown": 16,
            "slots": 768
        },
        "9": {
            "cooldown": 14,
            "slots": 768
        },
        "10": {
            "cooldown": 14,
            "slots": 960
        },
        "11": {
            "cooldown": 11,
            "slots": 960
        }
    },
    "Gravel": {
        "1": {
            "cooldown": 26,
            "slots": 128
        },
        "2": {
            "cooldown": 26,
            "slots": 256
        },
        "3": {
            "cooldown": 24,
            "slots": 256
        },
        "4": {
            "cooldown": 24,
            "slots": 384
        },
        "5": {
            "cooldown": 22,
            "slots": 384
        },
        "6": {
            "cooldown": 22,
            "slots": 576
        },
        "7": {
            "cooldown": 19,
            "slots": 576
        },
        "8": {
            "cooldown": 19,
            "slots": 768
        },
        "9": {
            "cooldown": 16,
            "slots": 768
        },
        "10": {
            "cooldown": 16,
            "slots": 960
        },
        "11": {
            "cooldown": 13,
            "slots": 960
        }
    },
    "Ice": {
        "1": {
            "cooldown": 14,
            "slots": 64
        },
        "2": {
            "cooldown": 14,
            "slots": 192
        },
        "3": {
            "cooldown": 12,
            "slots": 192
        },
        "4": {
            "cooldown": 12,
            "slots": 384
        },
        "5": {
            "cooldown": 10,
            "slots": 384
        },
        "6": {
            "cooldown": 10,
            "slots": 576
        },
        "7": {
            "cooldown": 9,
            "slots": 576
        },
        "8": {
            "cooldown": 9,
            "slots": 768
        },
        "9": {
            "cooldown": 8,
            "slots": 768
        },
        "10": {
            "cooldown": 8,
            "slots": 960
        },
        "11": {
            "cooldown": 7,
            "slots": 960
        }
    },
    "Iron": {
        "1": {
            "cooldown": 17,
            "slots": 64
        },
        "2": {
            "cooldown": 17,
            "slots": 192
        },
        "3": {
            "cooldown": 15,
            "slots": 192
        },
        "4": {
            "cooldown": 15,
            "slots": 384
        },
        "5": {
            "cooldown": 14,
            "slots": 384
        },
        "6": {
            "cooldown": 14,
            "slots": 576
        },
        "7": {
            "cooldown": 12,
            "slots": 576
        },
        "8": {
            "cooldown": 12,
            "slots": 768
        },
        "9": {
            "cooldown": 10,
            "slots": 768
        },
        "10": {
            "cooldown": 10,
            "slots": 960
        },
        "11": {
            "cooldown": 8,
            "slots": 960
        }
    },
    "Lapis": {
        "1": {
            "cooldown": 29,
            "slots": 64
        },
        "2": {
            "cooldown": 29,
            "slots": 192
        },
        "3": {
            "cooldown": 27,
            "slots": 192
        },
        "4": {
            "cooldown": 27,
            "slots": 384
        },
        "5": {
            "cooldown": 25,
            "slots": 384
        },
        "6": {
            "cooldown": 25,
            "slots": 576
        },
        "7": {
            "cooldown": 23,
            "slots": 576
        },
        "8": {
            "cooldown": 23,
            "slots": 768
        },
        "9": {
            "cooldown": 21,
            "slots": 768
        },
        "10": {
            "cooldown": 21,
            "slots": 960
        },
        "11": {
            "cooldown": 18,
            "slots": 960
        }
    },
    "Magma Cube": {
        "1": {
            "cooldown": 32,
            "slots": 64
        },
        "2": {
            "cooldown": 32,
            "slots": 192
        },
        "3": {
            "cooldown": 30,
            "slots": 192
        },
        "4": {
            "cooldown": 30,
            "slots": 384
        },
        "5": {
            "cooldown": 28,
            "slots": 384
        },
        "6": {
            "cooldown": 28,
            "slots": 576
        },
        "7": {
            "cooldown": 25,
            "slots": 576
        },
        "8": {
            "cooldown": 25,
            "slots": 768
        },
        "9": {
            "cooldown": 22,
            "slots": 768
        },
        "10": {
            "cooldown": 22,
            "slots": 960
        },
        "11": {
            "cooldown": 18,
            "slots": 960
        }
    },
    "Melon": {
        "1": {
            "cooldown": 24,
            "slots": 64
        },
        "2": {
            "cooldown": 24,
            "slots": 192
        },
        "3": {
            "cooldown": 22,
            "slots": 192
        },
        "4": {
            "cooldown": 22,
            "slots": 384
        },
        "5": {
            "cooldown": 21,
            "slots": 384
        },
        "6": {
            "cooldown": 21,
            "slots": 576
        },
        "7": {
            "cooldown": 18,
            "slots": 576
        },
        "8": {
            "cooldown": 18,
            "slots": 768
        },
        "9": {
            "cooldown": 16,
            "slots": 768
        },
        "10": {
            "cooldown": 16,
            "slots": 960
        },
        "11": {
            "cooldown": 13,
            "slots": 960
        }
    },
    "Mushroom": {
        "1": {
            "cooldown": 30,
            "slots": 64
        },
        "2": {
            "cooldown": 30,
            "slots": 192
        },
        "3": {
            "cooldown": 28,
            "slots": 192
        },
        "4": {
            "cooldown": 28,
            "slots": 384
        },
        "5": {
            "cooldown": 26,
            "slots": 384
        },
        "6": {
            "cooldown": 26,
            "slots": 576
        },
        "7": {
            "cooldown": 23,
            "slots": 576
        },
        "8": {
            "cooldown": 23,
            "slots": 768
        },
        "9": {
            "cooldown": 20,
            "slots": 768
        },
        "10": {
            "cooldown": 20,
            "slots": 960
        },
        "11": {
            "cooldown": 16,
            "slots": 960
        }
    },
    "Oak": {
        "1": {
            "cooldown": 48,
            "slots": 64
        },
        "2": {
            "cooldown": 48,
            "slots": 192
        },
        "3": {
            "cooldown": 45,
            "slots": 192
        },
        "4": {
            "cooldown": 45,
            "slots": 384
        },
        "5": {
            "cooldown": 42,
            "slots": 384
        },
        "6": {
            "cooldown": 42,
            "slots": 576
        },
        "7": {
            "cooldown": 38,
            "slots": 576
        },
        "8": {
            "cooldown": 38,
            "slots": 768
        },
        "9": {
            "cooldown": 33,
            "slots": 768
        },
        "10": {
            "cooldown": 33,
            "slots": 960
        },
        "11": {
            "cooldown": 27,
            "slots": 960
        }
    },
    "Obsidian": {
        "1": {
            "cooldown": 45,
            "slots": 64
        },
        "2": {
            "cooldown": 45,
            "slots": 192
        },
        "3": {
            "cooldown": 42,
            "slots": 192
        },
        "4": {
            "cooldown": 42,
            "slots": 384
        },
        "5": {
            "cooldown": 39,
            "slots": 384
        },
        "6": {
            "cooldown": 39,
            "slots": 576
        },
        "7": {
            "cooldown": 35,
            "slots": 576
        },
        "8": {
            "cooldown": 35,
            "slots": 768
        },
        "9": {
            "cooldown": 30,
            "slots": 768
        },
        "10": {
            "cooldown": 30,
            "slots": 960
        },
        "11": {
            "cooldown": 24,
            "slots": 960
        }
    },
    "Pig": {
        "1": {
            "cooldown": 26,
            "slots": 64
        },
        "2": {
            "cooldown": 26,
            "slots": 192
        },
        "3": {
            "cooldown": 24,
            "slots": 192
        },
        "4": {
            "cooldown": 24,
            "slots": 384
        },
        "5": {
            "cooldown": 22,
            "slots": 384
        },
        "6": {
            "cooldown": 22,
            "slots": 576
        },
        "7": {
            "cooldown": 20,
            "slots": 576
        },
        "8": {
            "cooldown": 20,
            "slots": 768
        },
        "9": {
            "cooldown": 17,
            "slots": 768
        },
        "10": {
            "cooldown": 17,
            "slots": 960
        },
        "11": {
            "cooldown": 13,
            "slots": 960
        }
    },
    "Potato": {
        "1": {
            "cooldown": 20,
            "slots": 64
        },
        "2": {
            "cooldown": 20,
            "slots": 192
        },
        "3": {
            "cooldown": 18,
            "slots": 192
        },
        "4": {
            "cooldown": 18,
            "slots": 384
        },
        "5": {
            "cooldown": 16,
            "slots": 384
        },
        "6": {
            "cooldown": 16,
            "slots": 576
        },
        "7": {
            "cooldown": 14,
            "slots": 576
        },
        "8": {
            "cooldown": 14,
            "slots": 768
        },
        "9": {
            "cooldown": 12,
            "slots": 768
        },
        "10": {
            "cooldown": 12,
            "slots": 960
        },
        "11": {
            "cooldown": 10,
            "slots": 960
        }
    },
    "Pumpkin": {
        "1": {
            "cooldown": 32,
            "slots": 64
        },
        "2": {
            "cooldown": 32,
            "slots": 192
        },
        "3": {
            "cooldown": 30,
            "slots": 192
        },
        "4": {
            "cooldown": 30,
            "slots": 384
        },
        "5": {
            "cooldown": 27,
            "slots": 384
        },
        "6": {
            "cooldown": 27,
            "slots": 576
        },
        "7": {
            "cooldown": 24,
            "slots": 576
        },
        "8": {
            "cooldown": 24,
            "slots": 768
        },
        "9": {
            "cooldown": 20,
            "slots": 768
        },
        "10": {
            "cooldown": 20,
            "slots": 960
        },
        "11": {
            "cooldown": 16,
            "slots": 960
        }
    },
    "Quartz": {
        "1": {
            "cooldown": 22,
            "slots": 64
        },
        "2": {
            "cooldown": 22,
            "slots": 192
        },
        "3": {
            "cooldown": 21,
            "slots": 192
        },
        "4": {
            "cooldown": 21,
            "slots": 384
        },
        "5": {
            "cooldown": 19,
            "slots": 384
        },
        "6": {
            "cooldown": 19,
            "slots": 576
        },
        "7": {
            "cooldown": 17,
            "slots": 576
        },
        "8": {
            "cooldown": 17,
            "slots": 768
        },
        "9": {
            "cooldown": 14,
            "slots": 768
        },
        "10": {
            "cooldown": 14,
            "slots": 960
        },
        "11": {
            "cooldown": 11,
            "slots": 960
        }
    },
    "Rabbit": {
        "1": {
            "cooldown": 26,
            "slots": 192
        },
        "2": {
            "cooldown": 26,
            "slots": 320
        },
        "3": {
            "cooldown": 24,
            "slots": 320
        },
        "4": {
            "cooldown": 24,
            "slots": 448
        },
        "5": {
            "cooldown": 22,
            "slots": 448
        },
        "6": {
            "cooldown": 22,
            "slots": 576
        },
        "7": {
            "cooldown": 20,
            "slots": 576
        },
        "8": {
            "cooldown": 20,
            "slots": 768
        },
        "9": {
            "cooldown": 17,
            "slots": 768
        },
        "10": {
            "cooldown": 17,
            "slots": 960
        },
        "11": {
            "cooldown": 13,
            "slots": 960
        }
    },
    "Redstone": {
        "1": {
            "cooldown": 29,
            "slots": 64
        },
        "2": {
            "cooldown": 29,
            "slots": 192
        },
        "3": {
            "cooldown": 27,
            "slots": 192
        },
        "4": {
            "cooldown": 27,
            "slots": 384
        },
        "5": {
            "cooldown": 25,
            "slots": 384
        },
        "6": {
            "cooldown": 25,
            "slots": 576
        },
        "7": {
            "cooldown": 23,
            "slots": 576
        },
        "8": {
            "cooldown": 23,
            "slots": 768
        },
        "9": {
            "cooldown": 21,
            "slots": 768
        },
        "10": {
            "cooldown": 21,
            "slots": 960
        },
        "11": {
            "cooldown": 18,
            "slots": 960
        }
    },
    "Sand": {
        "1": {
            "cooldown": 26,
            "slots": 64
        },
        "2": {
            "cooldown": 26,
            "slots": 192
        },
        "3": {
            "cooldown": 24,
            "slots": 192
        },
        "4": {
            "cooldown": 24,
            "slots": 384
        },
        "5": {
            "cooldown": 22,
            "slots": 384
        },
        "6": {
            "cooldown": 22,
            "slots": 576
        },
        "7": {
            "cooldown": 19,
            "slots": 576
        },
        "8": {
            "cooldown": 19,
            "slots": 768
        },
        "9": {
            "cooldown": 16,
            "slots": 768
        },
        "10": {
            "cooldown": 16,
            "slots": 960
        },
        "11": {
            "cooldown": 13,
            "slots": 960
        }
    },
    "Sheep": {
        "1": {
            "cooldown": 26,
            "slots": 128
        },
        "2": {
            "cooldown": 26,
            "slots": 256
        },
        "3": {
            "cooldown": 24,
            "slots": 256
        },
        "4": {
            "cooldown": 24,
            "slots": 384
        },
        "5": {
            "cooldown": 22,
            "slots": 384
        },
        "6": {
            "cooldown": 22,
            "slots": 576
        },
        "7": {
            "cooldown": 20,
            "slots": 576
        },
        "8": {
            "cooldown": 20,
            "slots": 768
        },
        "9": {
            "cooldown": 17,
            "slots": 768
        },
        "10": {
            "cooldown": 17,
            "slots": 960
        },
        "11": {
            "cooldown": 13,
            "slots": 960
        }
    },
    "Skeleton": {
        "1": {
            "cooldown": 26,
            "slots": 64
        },
        "2": {
            "cooldown": 26,
            "slots": 192
        },
        "3": {
            "cooldown": 24,
            "slots": 192
        },
        "4": {
            "cooldown": 24,
            "slots": 384
        },
        "5": {
            "cooldown": 22,
            "slots": 384
        },
        "6": {
            "cooldown": 22,
            "slots": 576
        },
        "7": {
            "cooldown": 20,
            "slots": 576
        },
        "8": {
            "cooldown": 20,
            "slots": 768
        },
        "9": {
            "cooldown": 17,
            "slots": 768
        },
        "10": {
            "cooldown": 17,
            "slots": 960
        },
        "11": {
            "cooldown": 13,
            "slots": 960
        }
    },
    "Slime": {
        "1": {
            "cooldown": 26,
            "slots": 64
        },
        "2": {
            "cooldown": 26,
            "slots": 192
        },
        "3": {
            "cooldown": 24,
            "slots": 192
        },
        "4": {
            "cooldown": 24,
            "slots": 384
        },
        "5": {
            "cooldown": 22,
            "slots": 384
        },
        "6": {
            "cooldown": 22,
            "slots": 576
        },
        "7": {
            "cooldown": 19,
            "slots": 576
        },
        "8": {
            "cooldown": 19,
            "slots": 768
        },
        "9": {
            "cooldown": 16,
            "slots": 768
        },
        "10": {
            "cooldown": 16,
            "slots": 960
        },
        "11": {
            "cooldown": 12,
            "slots": 960
        }
    },
    "Snow": {
        "1": { "cooldown": 13 },
        "2": { "cooldown": 13 },
        "3": { "cooldown": 12 },
        "4": { "cooldown": 12 },
        "5": { "cooldown": 11 },
        "6": { "cooldown": 11 },
        "7": { "cooldown": 9.5 },
        "8": { "cooldown": 9.5 },
        "9": { "cooldown": 8 },
        "10": { "cooldown": 8 },
        "11": { "cooldown": 6.5 }
    },
    "Spider": {
        "1": {
            "cooldown": 26,
            "slots": 64
        },
        "2": {
            "cooldown": 26,
            "slots": 192
        },
        "3": {
            "cooldown": 24,
            "slots": 192
        },
        "4": {
            "cooldown": 24,
            "slots": 384
        },
        "5": {
            "cooldown": 22,
            "slots": 384
        },
        "6": {
            "cooldown": 22,
            "slots": 576
        },
        "7": {
            "cooldown": 20,
            "slots": 576
        },
        "8": {
            "cooldown": 20,
            "slots": 768
        },
        "9": {
            "cooldown": 17,
            "slots": 768
        },
        "10": {
            "cooldown": 17,
            "slots": 960
        },
        "11": {
            "cooldown": 13,
            "slots": 960
        }
    },
    "Sugar Cane": {
        "1": {
            "cooldown": 22,
            "slots": 64
        },
        "2": {
            "cooldown": 22,
            "slots": 192
        },
        "3": {
            "cooldown": 20,
            "slots": 192
        },
        "4": {
            "cooldown": 20,
            "slots": 384
        },
        "5": {
            "cooldown": 18,
            "slots": 384
        },
        "6": {
            "cooldown": 18,
            "slots": 576
        },
        "7": {
            "cooldown": 16,
            "slots": 576
        },
        "8": {
            "cooldown": 16,
            "slots": 768
        },
        "9": {
            "cooldown": 14,
            "slots": 768
        },
        "10": {
            "cooldown": 14,
            "slots": 960
        },
        "11": {
            "cooldown": 12,
            "slots": 960
        }
    },
    "Wheat": {
        "1": {
            "cooldown": 15,
            "slots": 128
        },
        "2": {
            "cooldown": 15,
            "slots": 256
        },
        "3": {
            "cooldown": 13,
            "slots": 256
        },
        "4": {
            "cooldown": 13,
            "slots": 384
        },
        "5": {
            "cooldown": 11,
            "slots": 384
        },
        "6": {
            "cooldown": 11,
            "slots": 576
        },
        "7": {
            "cooldown": 10,
            "slots": 576
        },
        "8": {
            "cooldown": 10,
            "slots": 768
        },
        "9": {
            "cooldown": 9,
            "slots": 768
        },
        "10": {
            "cooldown": 9,
            "slots": 960
        },
        "11": {
            "cooldown": 8,
            "slots": 960
        }
    },
    "Zombie": {
        "1": {
            "cooldown": 26,
            "slots": 64
        },
        "2": {
            "cooldown": 26,
            "slots": 192
        },
        "3": {
            "cooldown": 24,
            "slots": 192
        },
        "4": {
            "cooldown": 24,
            "slots": 384
        },
        "5": {
            "cooldown": 22,
            "slots": 384
        },
        "6": {
            "cooldown": 22,
            "slots": 576
        },
        "7": {
            "cooldown": 20,
            "slots": 576
        },
        "8": {
            "cooldown": 20,
            "slots": 768
        },
        "9": {
            "cooldown": 17,
            "slots": 768
        },
        "10": {
            "cooldown": 17,
            "slots": 960
        },
        "11": {
            "cooldown": 13,
            "slots": 960
        }
    }
};