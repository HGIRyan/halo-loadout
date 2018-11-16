const express = require('express');
const bodyParser = require('body-parser');

let loadout =[{
    primaryWeapon: [],
    secondaryWeapon: [],
    grenade: [],
    armourAbility:[],
    uniqueId:[],
    startLoadout: [{
        primaryWeapon: {
                name: 'Assault Rifle',
                power: 80,
                firingMode: 'Automatic',
                capacity: '32 Rounds',
                faction: 'Human/UNSC',
                id: 1,
                img: 'https://vignette.wikia.nocookie.net/alteredrp-halorp/images/f/f9/Halo_5_Assault_Rifle.png/revision/latest?cb=20151012160152'
        },

    }]
    }]
// let primaryWeapon = [];
// let secondaryWeapon = [];
// let grenade = [];
// let armourAbility = [];
// let uniqueId = [];


module.exports = {
    test: (req, res) => {
        let { query, params, body } = req;
        res.status(200).send('Hey I Worked!!!');
    },
    // Create                                                                               C
    createPrimaryWeapon: (req, res) => {
        console.log(req.body)
        let { name, power, firingMode, capacity, faction, uniqueId, img } = req.body
        console.log(req.body)

        let newPrimaryWeapon = {
            name: name,
            power: power,
            firingMode: firingMode,
            capacity: capacity,
            faction: faction,
            id: uniqueId,
            img: img
        }
        uniqueId++
        loadout[0].primaryWeapon.push(newPrimaryWeapon);
        res.status(200).send(loadout[0].primaryWeapon)
    },
    createSecondaryWeapon: (req, res) => {
        console.log(req.body)
        let { name, power, firingMode, capacity, faction, uniqueId, img } = req.body
        console.log(req.body)

        let newSecondaryWeapon = {
            name: name,
            power: power,
            firingMode: firingMode,
            capacity: capacity,
            faction: faction,
            id: uniqueId,
            img: img
        }
        uniqueId++
        loadout[0].secondaryWeapon.push(newSecondaryWeapon);
        res.status(200).send(loadout[0].secondaryWeapon)
    },
    // Read                                                                                 R
    getLoadout1: (req, res) => {
        res.status(200).send(loadout1)
    }




}