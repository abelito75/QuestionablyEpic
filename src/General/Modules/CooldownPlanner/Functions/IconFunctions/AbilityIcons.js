import React from "react";
import AuraMasteryIcon from "Images/Classes/Paladin/Specialisation/Holy/Icons/AuraMastery.jpg";
import AvengingWrathIcon from "Images/Classes/Paladin/Specialisation/Holy/Icons/AvengingWrath.jpg";
import DivineHymnIcon from "Images/Classes/Priest/Specialisation/Holy/Icons/DivineHymn.jpg";
import EvangelismIcon from "Images/Classes/Priest/Specialisation/Discipline/Icons/Evangelism.jpg";
import HealingTideTotemIcon from "Images/Classes/Shaman/Specialisation/Restoration/Icons/HealingTideTotem.jpg";
import PowerWordBarrierIcon from "Images/Classes/Priest/Specialisation/Discipline/Icons/PowerWordBarrier.jpg";
import RevivalIcon from "Images/Classes/Monk/Specialisation/Mistweaver/Icons/Revival.jpg";
import SalvationIcon from "Images/Classes/Priest/Specialisation/Holy/Icons/Salvation.jpg";
import SpiritLinkTotemIcon from "Images/Classes/Shaman/Specialisation/Restoration/Icons/SpiritLinkTotem.jpg";
import TranquilityIcon from "Images/Classes/Druid/Specialisation/Restoration/Icons/Tranquility.jpg";
import TreeofLifeIcon from "Images/Classes/Druid/Specialisation/Restoration/Icons/TreeofLife.jpg";
import DivineTollIcon from "Images/Classes/Paladin/CovenantAbilities/DivineToll.jpg";
import AshenHallowIcon from "Images/Classes/Paladin/CovenantAbilities/AshenHallow.jpg";
import VanquishersHammerIcon from "Images/Classes/Paladin/CovenantAbilities/VanquishersHammer.jpg";
import BlessingOfSeasonsIcon from "Images/Classes/Paladin/CovenantAbilities/BlessingOfSeasons.jpg";
import KindredSpiritsIcon from "Images/Classes/Druid/CovenantAbilities/KindredSpirits.jpg";
import RavenousFrenzyIcon from "Images/Classes/Druid/CovenantAbilities/RavenousFrenzy.jpg";
import AdaptiveSwarmIcon from "Images/Classes/Druid/CovenantAbilities/AdaptiveSwarm.jpg";
import ConvokeTheSpiritsIcon from "Images/Classes/Druid/CovenantAbilities/ConvokeTheSpirits.jpg";
import BoonoftheAscendedIcon from "Images/Classes/Priest/CovenantAbilities/BoonoftheAscended.jpg";
import MindgamesIcon from "Images/Classes/Priest/CovenantAbilities/Mindgames.jpg";
import UnholyNovaIcon from "Images/Classes/Priest/CovenantAbilities/UnholyNova.jpg";
import FaeBlessingsIcon from "Images/Classes/Priest/CovenantAbilities/FaeBlessings.jpg";
import VesperTotemIcon from "Images/Classes/Shaman/CovenantAbilities/VesperTotem.jpg";
import ChainHarvestIcon from "Images/Classes/Shaman/CovenantAbilities/ChainHarvest.jpg";
import PrimordialWaveIcon from "Images/Classes/Shaman/CovenantAbilities/PrimordialWave.jpg";
import FaeTransfusionIcon from "Images/Classes/Shaman/CovenantAbilities/FaeTransfusion.jpg";
import WeaponsofOrderIcon from "Images/Classes/Monk/CovenantAbilities/WeaponsofOrder.jpg";
import FallenOrderIcon from "Images/Classes/Monk/CovenantAbilities/FallenOrder.jpg";
import BonedustBrewIcon from "Images/Classes/Monk/CovenantAbilities/BonedustBrew.jpg";
import FaelineStompIcon from "Images/Classes/Monk/CovenantAbilities/FaelineStomp.jpg";
import DarknessIcon from "Images/Classes/DemonHunter/DarknessIcon.jpg";
import RallyingCryIcon from "Images/Classes/Warrior/RallyingCryIcon.jpg";
import SpiritShellIcon from "Images/Classes/Priest/Specialisation/Discipline/Icons/Talents/SpiritShellIcon.jpg";
import VampiricEmbraceIcon from "Images/Classes/Priest/Specialisation/Shadow/VampiricEmbrace.jpg";
import AntiMagicZoneIcon from "Images/Classes/DeathKnight/AntiMagicZone.jpg";
import PowerInfusionIcon from "Images/Classes/Priest/Specialisation/Discipline/Icons/PowerInfusion.jpg";
import IronbarkIcon from "Images/Classes/Druid/Specialisation/Restoration/Icons/Ironbark.jpg";
import BlessingOfSacrificeIcon from "Images/Classes/Paladin/Specialisation/Holy/Icons/BlessingOfSacrifice.jpg";
import LifeCocoonIcon from "Images/Classes/Monk/Specialisation/Mistweaver/Icons/LifeCocoon.jpg";
import FlourishIcon from "Images/Classes/Druid/Specialisation/Restoration/Icons/Talents/FlourishIcon.jpg";
import AncestralProtectionIcon from "Images/Classes/Shaman/Specialisation/Restoration/Icons/Talents/AncestralProtectionTotemIcon.jpg";
import GuardianSpiritIcon from "Images/Classes/Priest/Specialisation/Holy/Icons/GuardianSpiritIcon.jpg";
import RaptureIcon from "Images/Classes/Priest/Specialisation/Discipline/Icons/Rapture.jpg";
import PainSupression from "Images/Classes/Priest/Specialisation/Discipline/Icons/PainSupression.jpg";
import BlessingOfProtection from "Images/Classes/Paladin/Specialisation/Holy/Icons/spell_holy_sealofprotection.jpg";
import BlessingOfFreedom from "Images/Classes/Paladin/Specialisation/Holy/Icons/spell_holy_sealofvalor.jpg";
import LayOnHands from "Images/Classes/Paladin/Specialisation/Holy/Icons/spell_holy_layonhands.jpg";
import TigersLust from "Images/Classes/Monk/Specialisation/Mistweaver/Icons/ability_monk_tigerslust.jpg";

// Should probably work this off GUID

export default function abilityIcons(props, style) {
  let spell = "";
  let source = "";
  let alt = "";

  // Holy Paladin
  // Paladin Base Abilities
  if (props === 31821) {
    spell = "spell=31821";
    source = AuraMasteryIcon;
    alt = "Aura Mastery";
  }
  if (props === 31884) {
    spell = "spell=31884";
    source = AvengingWrathIcon;
    alt = "Avenging Wrath";
  }
  // Paladin Covenant Cooldowns
  if (props === 304971) {
    spell = "spell=304971";
    source = DivineTollIcon;
    alt = "Divine Toll";
  }
  if (props === 316958) {
    spell = "spell=316958";
    source = AshenHallowIcon;
    alt = "Ashen Hallow";
  }
  if (props === 328204) {
    spell = "spell=328204";
    source = VanquishersHammerIcon;
    alt = "Vanquisher's Hammer";
  }
  if (props === 328278) {
    spell = "spell=328278";
    source = BlessingOfSeasonsIcon;
    alt = "Blessing of the Seasons";
  }
  // Restoration Druid
  if (props === 740) {
    spell = "spell=740";
    source = TranquilityIcon;
    alt = "Tranquility";
  }
  if (props === 33891) {
    spell = "spell=33891";
    source = TreeofLifeIcon;
    alt = "Incarnation: Tree of Life";
  }
  if (props === 197721) {
    spell = "spell=197721";
    source = FlourishIcon;
    alt = "Flourish";
  }
  // Druid Covenant Cooldowns
  if (props === 326434) {
    spell = "spell=326434";
    source = KindredSpiritsIcon;
    alt = "Kindred Spirits";
  }
  if (props === 323546) {
    spell = "spell=323546";
    source = RavenousFrenzyIcon;
    alt = "Ravenous Frenzy";
  }
  if (props === 325727) {
    spell = "spell=325727";
    source = AdaptiveSwarmIcon;
    alt = "Adaptive Swarm";
  }
  if (props === 323764) {
    spell = "spell=323764";
    source = ConvokeTheSpiritsIcon;
    alt = "Convoke the Spirits";
  }
  // Holy Priest
  if (props === 265202) {
    spell = "spell=265202";
    source = SalvationIcon;
    alt = "Holy Word: Salvation";
  }
  if (props === 64843) {
    spell = "spell=64843";
    source = DivineHymnIcon;
    alt = "Divine Hymn";
  }

  if (props === 47788) {
    spell = "spell=47788";
    source = GuardianSpiritIcon;
    alt = "Guardian Spirit";
  }

  // Discipline Priest
  if (props === 62618) {
    spell = "spell=62618";
    source = PowerWordBarrierIcon;
    alt = "Power Word: Barrier";
  }
  if (props === 246287) {
    spell = "spell=246287";
    source = EvangelismIcon;
    alt = "Evangelism";
  }
  if (props === 109964) {
    spell = "spell=109964";
    source = SpiritShellIcon;
    alt = "Spirit Shell";
  }
  if (props === 47536) {
    spell = "spell=47536";
    source = RaptureIcon;
    alt = "Rapture";
  }
  if (props === 33206) {
    spell = "spell=33206";
    source = PainSupression;
    alt = "Pain Supression";
  }
  // Priest Covenant Abilities
  if (props === 325013) {
    spell = "spell=325013";
    source = BoonoftheAscendedIcon;
    alt = "Boon of the Ascended";
  }
  if (props === 323673) {
    spell = "spell=323673";
    source = MindgamesIcon;
    alt = "Mindgames";
  }
  if (props === 324724) {
    spell = "spell=324724";
    source = UnholyNovaIcon;
    alt = "Unholy Nova";
  }
  if (props === 327661) {
    spell = "spell=327661";
    source = FaeBlessingsIcon;
    alt = "Fae Blessings";
  }
  // Restoration Shaman
  if (props === 108280) {
    spell = "spell=108280";
    source = HealingTideTotemIcon;
    alt = "Healing Tide Totem";
  }
  if (props === 98008) {
    spell = "spell=98008";
    source = SpiritLinkTotemIcon;
    alt = "Spirit Link Totem";
  }

  if (props === 207399) {
    spell = "spell=207399";
    source = AncestralProtectionIcon;
    alt = "Ancestral Protection Totem";
  }

  // Shaman Covenant Abilities
  if (props === 324386) {
    spell = "spell=324386";
    source = VesperTotemIcon;
    alt = "Vesper Totem";
  }
  if (props === 320674) {
    spell = "spell=320674";
    source = ChainHarvestIcon;
    alt = "Chain Harvest";
  }
  if (props === 326059) {
    spell = "spell=326059";
    source = PrimordialWaveIcon;
    alt = "Primordial Wave";
  }
  if (props === 328923) {
    spell = "spell=328923";
    source = FaeTransfusionIcon;
    alt = "Fae Transfusion";
  }
  // Mistweaver Monk
  if (props === 115310) {
    spell = "spell=115310";
    source = RevivalIcon;
    alt = "Revival";
  }
  // Monk Covenant Abilities
  if (props === 310454) {
    spell = "spell=310454";
    source = WeaponsofOrderIcon;
    alt = "Weapons of Order";
  }
  if (props === 326860) {
    spell = "spell=326860";
    source = FallenOrderIcon;
    alt = "Fallen Order";
  }
  if (props === 325216) {
    spell = "spell=325216";
    source = BonedustBrewIcon;
    alt = "Bonedust Brew";
  }
  if (props === 327104) {
    spell = "spell=327104";
    source = FaelineStompIcon;
    alt = "Faeline Stomp";
  }
  if (props === 196718) {
    spell = "spell=196718";
    source = DarknessIcon;
    alt = "Darkness";
  }
  if (props === 97462) {
    spell = "spell=97462";
    source = RallyingCryIcon;
    alt = "Rallying Cry";
  }
  if (props === 15286) {
    spell = "spell=15286";
    source = VampiricEmbraceIcon;
    alt = "Vampiric Embrace";
  }
  if (props === 51052) {
    spell = "spell=51052";
    source = AntiMagicZoneIcon;
    alt = "Anti Magic Zone";
  }
  if (props === 10060) {
    spell = "spell=10060";
    source = PowerInfusionIcon;
    alt = "Power Infusion";
  }
  if (props === 102342) {
    spell = "spell=102342";
    source = IronbarkIcon;
    alt = "Ironbark";
  }
  if (props === 6940) {
    spell = "spell=6940";
    source = BlessingOfSacrificeIcon;
    alt = "Blessing of Sacrifice";
  }
  if (props === 116849) {
    spell = "spell=116849";
    source = LifeCocoonIcon;
    alt = "Blessing of Sacrifice";
  }
  if (props === 1022) {
    spell = "spell=1022";
    source = BlessingOfProtection;
    alt = "Blessing of Protection";
  }
  if (props === 1044) {
    spell = "spell=1044";
    source = BlessingOfFreedom;
    alt = "Blessing of Freedom";
  }
  if (props === 633) {
    spell = "spell=633";
    source = LayOnHands;
    alt = "Lay on Hands";
  }
  if (props === 116841) {
    spell = "spell=116841";
    source = TigersLust;
    alt = "Tiger's Lust";
  }

  if (props === "" || props === undefined) {
    return null;
  }

  return (
    <a data-wowhead={spell}>
      <img style={{ ...style }} src={source} alt={alt} />
    </a>
  );
}
