import { Stats } from 'fs';
import Player from 'General/Modules/Player/Player';
import { runCastSequence, buildRamp, allRamps } from "./DiscPriestRamps";


describe("Evang Cast Sequence", () => {
    const player = new Player("Mock", "Discipline Priest", 99, "NA", "Stonemaul", "Night Elf");
    
    const boonSeq = buildRamp('Boon', 10, ["Divine Bell"], player.activeStats.haste, ['Rapture'])
    const fiendSeq = buildRamp('Fiend', 10, ["Divine Bell"], player.activeStats.haste, ['Rapture'])
    console.log(boonSeq);
    //const baselineBoon = (boonSeq, player.activeStats, {"Clarity of Mind": true, "Pelagos": frunCastSequencealse}, {"Courageous Ascension": 226, "Shining Radiance": 226});
    //const baselineFiend = runCastSequence(fiendSeq, player.activeStats, {"Clarity of Mind": true, "Pelagos": false}, {"Courageous Ascension": 226, "Shining Radiance": 226});
    
    //const baseline = baselineBoon + baselineFiend;

    test("Legendaries", () => {
        const baseline = allRamps(boonSeq, fiendSeq, player.activeStats, {"Clarity of Mind": false, "Pelagos": false}, {});
        //const clarityOfMind = allRamps(boonSeq, fiendSeq, player.activeStats, {"Clarity of Mind": true, "Pelagos": false}, {});
        //const pelagos = allRamps(boonSeq, fiendSeq, player.activeStats, {"Clarity of Mind": false, "Pelagos": true}, {});
        //const exaltation = allRamps(boonSeq, fiendSeq, player.activeStats, {"Clarity of Mind": false, "Pelagos": false}, {"Exaltation": 226});
        //const comExaltation = allRamps(boonSeq, fiendSeq, player.activeStats, {"Clarity of Mind": true, "Pelagos": false}, {"Exaltation": 226});
        //const rabidShadows = allRamps(boonSeq, fiendSeq, player.activeStats, {"Clarity of Mind": false, "Pelagos": false}, {"Rabid Shadows": 226});
        //console.log("RUNNING COURAGEOUS");
        const courageousAscension = allRamps(boonSeq, fiendSeq, player.activeStats, {"Clarity of Mind": false, "Pelagos": false}, {"Courageous Ascension": 226});

        //console.log("Clarity of Mind: " + ((clarityOfMind - baseline) / 180))
        //console.log("Pelagos: " + ((pelagos - baseline) / 180))
        //console.log("Exaltation: " + ((exaltation - baseline) / 180))
        //console.log("CoM + Exaltation: " + ((comExaltation - baseline) / 180))
        //console.log("Rabid Shadows: " + ((rabidShadows - baseline) / 180));
        console.log("Cour Asc: " + ((courageousAscension - baseline) / 180));

    });

    /*
    test("Stat Weights", () => {

        //console.log("Boon Ramp with CoM, Bell: " + runCastSequence(demoSequence4, player.activeStats, {"Clarity of Mind": true}, {"Courageous Ascension": 226, "Shining Radiance": 226}));
        //console.log("Boon Ramp with CoM, Bell & Kleia: " + runCastSequence(demoSequence4, player.activeStats, {"Clarity of Mind": true, "Kleia": true}, {"Courageous Ascension": 226}));

        
        // Weights
        
        const stats = ['intellect','versatility', 'crit', 'haste', 'mastery'];
        const results = {};
        stats.forEach(stat => {

            const adjustedStats = JSON.parse(JSON.stringify(player.activeStats));
            adjustedStats[stat] = adjustedStats[stat] + 15;

            const seq1 = buildRamp('Boon', 10, ["Divine Bell"], adjustedStats['haste'], ['Rapture'])
            const seq2 = buildRamp('Fiend', 10, ["Divine Bell"], player.activeStats.haste, ['Rapture'])

            results[stat] = Math.round(runCastSequence(seq1, adjustedStats, {"Clarity of Mind": true, "Pelagos": false}, {"Courageous Ascension": 226, "Shining Radiance": 226}) +
                                    (runCastSequence(seq2, adjustedStats, {"Clarity of Mind": true, "Pelagos": false}, {"Courageous Ascension": 226, "Shining Radiance": 226})));
            
        });
        const weights = {}
        stats.forEach(stat => {
            weights[stat] = (results[stat] - baseline) / (results['intellect'] - baseline);
        });

        console.log(weights); 
    }); */
    
});

describe("Sequence Builder", () => {
    const player = new Player("Mock", "Discipline Priest", 99, "NA", "Stonemaul", "Night Elf");
    
    test("Basic Test", () => {
        buildRamp('Boon', 10, ["Divine Bell"], player.activeStats.haste, ['Rapture'])
        buildRamp('Fiend', 10, ["Divine Bell"], player.activeStats.haste, ['Rapture'])

    })

});