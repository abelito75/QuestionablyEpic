

// TODO: Write proper comments. See Lingering Sunmote for an example.
export function getTrinketEffectBC(effectName, player, contentType, itemLevel, userSettings = {}) {
  let bonus_stats = {};

  /* -------- Trinket Data holds a trinkets actual power values. Formulas here, data there. ------- */
  //let activeTrinket = trinket_data.find((trinket) => trinket.name === effectName);
  const activeTrinket = effectName;

  const cpm = 24;

  if (activeTrinket === undefined) {
    /* ---------------------------------------------------------------------------------------------- */
    /*                                         Error Handling                                         */
    /* ---------------------------------------------------------------------------------------------- */
    console.log("no trinket found");
    return bonus_stats;
  } else if ( 
    /* ---------------------------------------------------------------------------------------------- */
    /*                                      Essence of the Martyr                                     */
    /* ---------------------------------------------------------------------------------------------- */
    effectName === "Essence of the Martyr"
  ) {
      const effect = {
          duration: 20,
          cooldown: 120,
          value: 297,
      }
      bonus_stats.bonushealing = Math.round(effect.duration * effect.value / effect.cooldown);
  }
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                                        Eye of Gruul                                             */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Eye of Gruul"
) {
    const effect = {
      mana: 450,
      chance: 0.02,
    }
    bonus_stats.mp5 = Math.round(100*cpm * effect.chance * effect.mana / 12)/100
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                                   Bangle of Endless Blessings                                  */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Bangle of Endless Blessings"
) {
    const spiritEffect = {
      value: 130,
      duration: 20,
      cooldown: 120
    }
    const manaEffect = {
      ppm: 0.98,
      duration: 15
    }
    const fullMP5 = Math.sqrt(500) * 540 * 5 * 0.00932715221261;
    bonus_stats.mp5 = fullMP5 * manaEffect.ppm * manaEffect.duration * 0.15 / 60;
    bonus_stats.spirit = spiritEffect.value * spiritEffect.duration / spiritEffect.cooldown;
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                                        Pendant of the Violet Eye                               */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Pendant of the Violet Eye"
) {
    const effect = {
      cooldown: 120,
      duration: 20,
      castsInWindow: 20/1.75,
      stackingMp5: 21,
    }
    bonus_stats.mp5 = Math.round(100*((effect.castsInWindow+1)/2 * effect.stackingMp5) * effect.duration / effect.cooldown)/100
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                                        Figurine - Living Ruby Serpent                          */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Figurine - Living Ruby Serpent"
) {
    const effect = {
      duration: 20,
      cooldown: 300,
      value: 150,
    }
    bonus_stats.bonushealing = Math.round(effect.duration * effect.value / effect.cooldown);
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                                        Ribbon of Sacrifice                                             */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Ribbon of Sacrifice"
) {
  const effect = {
    cooldown: 120,
    duration: 20,
    castsInWindow: 20/1.75*0.7, // This only includes the number of heals on the specified target.
    stackingHealing: 30,
  }
    bonus_stats.bonushealing = 0
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                           Scarab of the Infinite Cycle                                         */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Scarab of the Infinite Cycle"
) {
    const effect = {
      haste: 320,
      duration: 6,
      uptime: 0.088,

    }
    bonus_stats.spellhaste = effect.haste * effect.uptime;
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                                 Lower City Prayerbook                                          */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Lower City Prayerbook"
) {
    const effect = {
      reduction: 22,
      duration: 15,
      casts: {"Holy Priest BC": 15/1.7, "Restoration Shaman BC": 15/2.6, "Restoration Druid BC": 15/1.7, "Holy Paladin BC": 15/1.7},
      cooldown: 60,
    }
    bonus_stats.mp5 = (effect.reduction * effect.casts[player.getSpec()] / effect.cooldown * 5);
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                                 Shiffar's Nexus-Horn                                           */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Shiffar's Nexus-Horn"
) {
    const effect = {

    }
    bonus_stats.bonushealing = 0
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                                Figurine - Talasite Owl                                         */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Figurine - Talasite Owl"
) {
    const effect = {
      mana: 900,
      cooldown: 300,

    }
    bonus_stats.mp5 = (effect.mana / effect.cooldown) * 5;
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                                        Xi'ri's Gift                                            */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Xi'ri's Gift"
) {
    const effect = {
      duration: 15,
      cooldown: 90,
      value: 280,
    }
    bonus_stats.bonushealing = Math.round(effect.duration * effect.value / effect.cooldown);
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                                      Warp-Scarab Brooch                                         */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Warp-Scarab Brooch"
) {
    const effect = {
      duration: 20,
      cooldown: 120,
      value: 282,
    }
    bonus_stats.bonushealing = Math.round(effect.duration * effect.value / effect.cooldown);
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                             Icon of the Silver Crescent                                        */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Icon of the Silver Crescent"
) {
    const effect = {

    }
    bonus_stats.bonushealing = 0
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                                    Draconic Infused Emblem                                     */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Draconic Infused Emblem"
) {
    const effect = {
      duration: 15,
      cooldown: 75,
      value: 190,
    }
    bonus_stats.bonushealing = Math.round(effect.duration * effect.value / effect.cooldown);
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                                 Oculus of the Hidden Eye                                       */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Oculus of the Hidden Eye "
) {
    const effect = {

    }
    bonus_stats.bonushealing = 0
}

else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                           The Restrained Essence of Sapphiron                                  */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "The Restrained Essence of Sapphiron"
) {
    const effect = {

    }
    bonus_stats.bonushealing = 0
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                                     Eye of the Dead                                            */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Eye of the Dead"
) {
    const effect = {

    }
    bonus_stats.bonushealing = 0
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                 Vengeance of the Illidari (Hellfire Quest Drop)                                */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Vengeance of the Illidari"
) {
    const effect = {
      duration: 15,
      cooldown: 90,
      value: 220
    }
    bonus_stats.bonushealing = effect.duration * effect.value / effect.cooldown;
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                    Ancient Crystal Insignia (Zangarmarsh Quest Drop)                           */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Ancient Crystal Insignia" || effectName === "Ancient Crystal Talisman"
) {
    const effect = {
      duration: 20,
      cooldown: 120,
      value: 104
    }
    bonus_stats.spelldamage = effect.duration * effect.value / effect.cooldown;
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                                   Terrokar Tablet of Vim                                       */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Terrokar Tablet of Vim"
) {
    const effect = {
      duration: 15,
      cooldown: 90,
      value: 156
    }
    bonus_stats.bonushealing = effect.duration * effect.value / effect.cooldown;
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                             Ancient Draenei Arcane Relic (QR)                                  */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Ancient Draenei Arcane Relic"
) {
    const effect = {
      duration: 15,
      cooldown: 90,
      value: 220
    }
    bonus_stats.bonushealing = effect.duration * effect.value / effect.cooldown;
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                                    Heavenly Inspiration                                        */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Heavenly Inspiration"
) {
    const effect = {
      duration: 15,
      cooldown: 90,
      value: 238
    }
    bonus_stats.bonushealing = effect.duration * effect.value / effect.cooldown;
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                              Warmth of Forgiveness                                             */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Warmth of Forgiveness "
) {
    const effect = {

    }
    bonus_stats.bonushealing = 0
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                                       Scarab Brooch                                            */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Scarab Brooch"
) {
    const effect = {

    }
    bonus_stats.bonushealing = 0
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                                    Hibernation Crystal                                         */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Hibernation Crystal"
) {
    const effect = {

    }
    bonus_stats.bonushealing = 0
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                             Living Root of the Wildheart                                       */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Living Root of the Wildheart" // DRUID ONLY.
) {
    const effect = {

    }
    bonus_stats.bonushealing = 0
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                                 Fel Reaver's Piston (VR)                                       */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Fel Reaver's Piston"
) {
    const effect = {

    }
    bonus_stats.bonushealing = 0
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                            Earring of Soulful Meditation                                       */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Earring of Soulful Meditation" // PRIEST ONLY
) {
    const effect = {

    }
    bonus_stats.bonushealing = 0
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                             Fathom-Brooch of the Tidewalker                                    */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Fathom-Brooch of the Tidewalker" // SHAMAN ONLY
) {
    const effect = {

    }
    bonus_stats.bonushealing = 0
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                                 Tome of Fiery Redemption                                       */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Tome of Fiery Redemption" // PALADIN ONLY
) {
    const effect = {

    }
    bonus_stats.bonushealing = 0
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                               Memento of Tyrande                                               */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Memento of Tyrande"
) {
    const effect = {
      mp5: 76,
      duration: 15,
      ppm: 0.92,

    }
    bonus_stats.mp5 = (effect.mp5 * effect.duration * effect.ppm) / 60
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                            Ashtongue Talisman of Acumen                                        */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Ashtongue Talisman of Acumen" // PRIEST
) {
    const effect = {

    }
    bonus_stats.bonushealing = 0
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                              Ashtongue Talisman of Equilibrium                                 */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Ashtongue Talisman of Equilibrium" // DRUID
) {
    const effect = {

    }
    bonus_stats.bonushealing = 0
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                              Ashtongue Talisman of Zeal                                        */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Ashtongue Talisman of Zeal" // PALADIN
) {
    const effect = {

    }
    bonus_stats.bonushealing = 0
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                            Ashtongue Talisman of Vision                                        */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Ashtongue Talisman of Vision" // SHAMAN
) {
    const effect = {

    }
    bonus_stats.bonushealing = 0
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                                  Tome of Diabolic Remedy                                       */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Tome of Diabolic Remedy"
) {
    const effect = {
      duration: 20,
      cooldown: 120,
      value: 396,
    }
    bonus_stats.bonushealing = Math.round(effect.duration * effect.value / effect.cooldown);
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                                   Glimmering Naaru Sliver                                      */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Glimmering Naaru Sliver"
) {
  const effect = {
    mana: 250,
    cooldown: 300,
    ticks: 8,
    efficiency: 0.4,
  }
  bonus_stats.mp5 = (effect.mana * effect.ticks * effect.efficiency / effect.cooldown * 5);
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                                Redeemer's Alchemist Stone                                      */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Redeemer's Alchemist Stone"
) {
    const effect = {
      manaPotion: (1800+3000)/2,
      manaPotionsPerMinute: 0.27, // Maximum is 0.5
      trinketBonus: 0.4,

    }
    bonus_stats.mp5 = effect.manaPotion * effect.manaPotionsPerMinute * effect.trinketBonus / 12
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                                   Figurine - Seaspray Albatross                                */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Figurine - Seaspray Albatross"
) {
    const effect = {

    }
    bonus_stats.bonushealing = 0
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                                    Vial of the Sunwell                                         */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Vial of the Sunwell"
) {
    const effect = {

    }
    bonus_stats.bonushealing = 0
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                                      Oshu'gun Relic                                            */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Oshu'gun Relic"
) {
    const effect = {
      duration: 20,
      cooldown: 120,
      value: 213,
    }
    bonus_stats.bonushealing = Math.round(effect.duration * effect.value / effect.cooldown);
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                                  Auslese's Light Channeler                                     */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "Auslese's Light Channeler"
) {
    const effect = {
      manaRestore: 215,
      cooldown: 180
    }
    bonus_stats.mp5 = (effect.manaRestore/effect.cooldown*5)
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                                        TrinketName                                             */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "TrinketName"
) {
    const effect = {

    }
    bonus_stats.bonushealing = 0
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                                        TrinketName                                             */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "TrinketName"
) {
    const effect = {

    }
    bonus_stats.bonushealing = 0
}
else if (
  /* ---------------------------------------------------------------------------------------------- */
  /*                                        TrinketName                                             */
  /* ---------------------------------------------------------------------------------------------- */
  effectName === "TrinketName"
) {
    const effect = {

    }
    bonus_stats.bonushealing = 0
}
  

  // Return bonus_stats
  return bonus_stats;
}