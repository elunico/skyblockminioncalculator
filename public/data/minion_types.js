const ca9 = () => xb1;
const MINIONS =
{
    "Tarantula": { "count": 1, "drops": [{ "chance": 1, "id": "SPIDER_EYE" }, { "chance": 3.5, "id": "STRING" }, { "chance": 0.2, "id": "IRON_INGOT" }] },
    "Revenant": { "count": 1, "drops": [{ "chance": 1, "id": "ROTTEN_FLESH" }, { "chance": 0.1, "id": "DIAMOND" }] },
    "Blaze": { "count": 1, "drops": [{ "chance": 1, "id": "BLAZE_ROD" }] },
    "Cactus": { "count": 1, "drops": [{ "chance": 1, "id": "CACTUS" }] },
    "Carrot": { "count": 3, "drops": [{ "chance": 1, "id": "CARROT_ITEM" }] },
    "Cave Spider": { "count": 1, "drops": [{ "chance": 0.5, "id": "STRING" }, { "chance": 1, "id": "SPIDER_EYE" }] },
    "Chicken": { "count": 1, "drops": [{ "chance": 1, "id": "RAW_CHICKEN" }, { "chance": 1, "id": "FEATHER" }] },
    "Clay": { "count": 4, "drops": [{ "chance": 1, "id": "CLAY_BALL" }] },
    "Coal": { "count": 1, "drops": [{ "chance": 1, "id": "COAL" }] },
    "Cobblestone": { "count": 1, "drops": [{ "chance": 1, "id": "COBBLESTONE" }] },
    "Cocoa Beans": { "count": 1, "drops": [{ "chance": 1, "id": "INK_SACK:3" }] },
    "Cow": { "count": 1, "drops": [{ "chance": 1, "id": "RAW_BEEF" }, { "chance": 1, "id": "LEATHER" }] },
    "Creeper": { "count": 1, "drops": [{ "chance": 1, "id": "SULPHUR" }] },
    "Dark Oak": { "count": 1, "drops": [{ "chance": 1, "id": "LOG_2:1" }] },
    "Diamond": { "count": 1, "drops": [{ "chance": 1, "id": "DIAMOND" }] },
    "Emerald": { "count": 1, "drops": [{ "chance": 1, "id": "EMERALD" }] },
    "End Stone": { "count": 1, "drops": [{ "chance": 1, "id": "ENDER_STONE" }] },
    "Enderman": { "count": 1, "drops": [{ "chance": 1, "id": "ENDER_PEARL" }] },
    "Fishing": { "count": 1, "drops": [{ "id": "RAW_FISH:3" }, { "id": "RAW_FISH" }, { "id": "PRISMARINE_CRYSTALS" }, { "id": "PRISMARINE_SHARD" }, { "id": "INK_SACK" }, { "id": "INK_SACK:3" }] },
    "Ghast": { "count": 1, "drops": [{ "chance": 1, "id": "GHAST_TEAR" }] },
    "Glowstone": { "count": 1, "drops": [{ "chance": 1, "id": "GLOWSTONE_DUST" }] },
    "Gold": { "count": 1, "drops": [{ "chance": 1, "id": "GOLD_INGOT" }] },
    "Gravel": { "count": 1, "drops": [{ "chance": 0.75, "id": "GRAVEL" }, { "chance": 0.25, "id": "FLINT" }] },
    "Ice": { "count": 1, "drops": [{ "chance": 1, "id": "ICE" }] },
    "Iron": { "count": 1, "drops": [{ "chance": 1, "id": "IRON_INGOT" }] },
    "Lapis": { "count": 1, "drops": [{ "chance": 1, "id": "INK_SACK:4" }] },
    "Magma Cube": { "count": 1, "drops": [{ "chance": 1, "id": "MAGMA_CREAM" }] },
    "Melon": { "count": 1, "drops": [{ "chance": 1, "id": "MELON" }] },
    "Mushroom": { "count": 1, "drops": [{ "chance": 0.5, "id": "BROWN_MUSHROOM" }, { "chance": 0.5, "id": "RED_MUSHROOM" }] },
    "Oak": { "count": 1, "drops": [{ "chance": 1, "id": "LOG" }] },
    "Obsidian": { "count": 1, "drops": [{ "chance": 1, "id": "OBSIDIAN" }] },
    "Pig": { "count": 1, "drops": [{ "chance": 1, "id": "PORK" }] },
    "Potato": { "count": 3, "drops": [{ "chance": 1, "id": "POTATO_ITEM" }] },
    "Pumpkin": { "count": 1, "drops": [{ "chance": 1, "id": "PUMPKIN" }] },
    "Quartz": { "count": 1, "drops": [{ "chance": 1, "id": "QUARTZ" }] },
    "Rabbit": { "count": 1, "drops": [{ "chance": 1, "id": "RABBIT_FOOT" }] },
    "Redstone": { "count": 1, "drops": [{ "chance": 1, "id": "REDSTONE" }] },
    "Sand": { "count": 1, "drops": [{ "chance": 1, "id": "SAND" }] },
    "Sheep": { "count": 1, "drops": [{ "chance": 1, "id": "MUTTON" }] },
    "Skeleton": { "count": 1, "drops": [{ "chance": 1, "id": "BONE" }] },
    "Slime": { "count": 1, "drops": [{ "chance": 1, "id": "SLIME_BALL" }] },
    "Snow": { "count": 4, "drops": [{ "chance": 1, "id": "SNOW_BALL" }] },
    "Spider": { "count": 1, "drops": [{ "chance": 1, "id": "STRING" }, { "chance": 0.5, "id": "SPIDER_EYE" }] },
    "Sugar Cane": { "count": 1, "drops": [{ "chance": 1, "id": "SUGAR_CANE" }] },
    "Wheat": { "count": 1, "drops": [{ "chance": 1, "id": "WHEAT" }, { "chance": 1, "id": "SEEDS" }] },
    "Zombie": { "count": 1, "drops": [{ "chance": 1, "id": "ROTTEN_FLESH" }] }
    // "Brown Mushroom Block": { "drops": [{ "id": "HUGE_MUSHROOM_1" }] },
    // "Hay Block": { "drops": [{ "id": "HAY_BLOCK" }] },
    // "Reg Mushroom Block": { "drops": [{ "id": "HUGE_MUSHROOM_2" }] },
    // "Strong Fragment": { "drops": [{ "id": "STRONG_FRAGMENT" }] },
    // "Tarantula Web": { "drops": [{ "id": "TARANTULA_WEB" }] },
}