export const definition = {
    "Locker 1": {
        id: 12345,
        type: 'category',
        items: {
            "BA Control Set C/W": {
                id: 12345,
                type: 'category',
                items: {
                    "BA Control Board": {
                        id: 12345,
                        type: 'unit',
                        expected: 1,
                    },
                    "Whiteboard Marker (Fine Tip, Erasable)": {
                        id: 12345,
                        type: 'set',
                        expected: 1,
                    },
                    "Easy Adjustable Timer": {
                        id: 12345,
                        type: 'set',
                        expected: 1,
                    },
                    "Stand": {
                        id: 12345,
                        type: 'set',
                        expected: 1,
                    },
                    "Time - Air Pressure conversaion table up to 300 bars": {
                        id: 12345,
                        type: 'set',
                        expected: 1,
                    },
                    "Compartment For 10 BA Tallies": {
                        id: 12345,
                        type: 'set',
                        expected: 1,
                    },
                    "BA Tallies": {
                        id: 12345,
                        type: 'unit',
                        expected: 6,
                    },
                    "9 litre PVSTOP (Solar Panel Block Out)": {
                        id: 12345,
                        type: 'unit',
                        expected: 1,
                    },
                    "Fire Extinguisher, Dry Chemical Powder, 9Kg": {
                        id: 12345,
                        type: 'unit',
                        expected: 1,
                    },
                    "Branchline Holder": {
                        id: 12345,
                        type: 'unit',
                        expected: 1,
                    },
                    "Portable Ground MOnitor c/w Webbing": {
                        id: 12345,
                        type: 'set',
                        expected: 1,
                    },
                    "Portable Pump c/w Detachable Wheels": {
                        id: 12345,
                        type: 'unit',
                        expected: 1,
                    },
                    "Safety Line (11mm), 60m c/w Rope Bag": {
                        id: 12345,
                        type: 'unit',
                        expected: 2,
                    },
                    "Water Rescue Line, 30m": {
                        id: 12345,
                        type: 'unit',
                        expected: 1,
                    },
                    "BA Guide Line c/w Cylindrical Canvas Carrying Bag": {
                        id: 12345,
                        type: 'unit',
                        expected: 2,
                    },
                },
            }
        },
    },
    "Locker 2": {
        id: 12345,
        type: 'category',
        items: { 
            "Air lifting bag Set c/w": {
                id: 12345,
                type: 'category',
                items: {
                    "12 ton air bag": {
                        id: 12345,
                        type: 'unit',
                        expected: 2,
                    },
                    "Dual deadman control": {
                        id: 12345,
                        type: 'unit',
                        expected: 1,
                    }, 
                    "Regulator": {
                        id: 12345,
                        type: 'unit',
                        expected: 1,
                    },
                    "10m hose with quick coupling (1x red, 1x yellow)": {
                        id: 12345,
                        type: 'unit',
                        expected: 2,
                    },
                    "5m hose black": {
                        id: 12345,
                        type: 'unit',
                        expected: 1,
                    }
                },
            },
            "eDraulic ram set c/w": {
                id: 12345,
                type: 'category',
                items: {
                    "eDraulic ram": {
                        id: 12345,
                        type: 'unit',
                        expected: 1,
                    },
                    "Battery (fitted)": {
                        id: 12345,
                        type: 'unit',
                        expected: 1,
                    }, 
                    "Ram extension": {
                        id: 12345,
                        type: 'unit',
                        expected: 1,
                    },
                    "Battery (spare)": {
                        id: 12345,
                        type: 'unit',
                        expected: 1,
                    },
                },
            },
            "Glass Management Kit c/w": {
                id: 12345,
                type: 'category',
                items: {
                    "Clear Rigid Screen Board": {
                        id: 12345,
                        type: 'unit',
                        expected: 1,
                    },
                    "Saw c/w Spare Blade": {
                        id: 12345,
                        type: 'unit',
                        expected: 1,
                    },
                    "Glass COllection Folder Bag": {
                        id: 12345,
                        type: 'unit',
                        expected: 1,
                    },
                    "Glass Puncher": {
                        id: 12345,
                        type: 'unit',
                        expected: 1,
                    },
                    "Seat Belt Cutter": {
                        id: 12345,
                        type: 'unit',
                        expected: 1,
                    },
                    "Adhesives Tapes": {
                        id: 12345,
                        type: 'unit',
                        expected: 2,
                    },
                    "Sharp Edge Cover (600mm x 600mm)": {
                        id: 12345,
                        type: 'unit',
                        expected: 2,
                    },
                    "Sharp Edge Cover (1800mm x 1800mm)": {
                        id: 12345,
                        type: 'unit',
                        expected: 2,
                    },
                    "Opaque Windscreen Sheet": {
                        id: 12345,
                        type: 'unit',
                        expected: 1,
                    },
                    "Patient Protection Sheets": {
                        id: 12345,
                        type: 'unit',
                        expected: 6,
                        last: 5,
                    },
                },
            },
            "Foo": {
                id: 12345,
                type: 'category',
                items: {
                    "Bar": {
                        id: 12345,
                        type: 'unit',
                        expected: 1,
                    },
                },
            },
        },
    },
};

const definition_extension = {
    removals: {
        "Locker 2": {
            "Foo": {
                "Bar": true,
            },
        },
    },
    additions: {
        "Locker 2": {
            id: 12345,
            type: 'category',
            items: {
                "Glass Management Kit c/w": {
                    id: 12345,
                    type: 'category',
                    items: {
                        "Air Bag Safety Cover": {
                            id: 12345,
                            type: 'unit',
                            expected: 1,
                        },
                    },
                },
            },
        },
        "Locker 3": {
            id: 12345,
            type: 'category',
            items: {
                "OGP Design System": {
                    id: 12345,
                    type: 'category',
                    items: {
                        "Awesome React Components": {
                            id: 12345,
                            type: 'unit',
                            expected: 39,
                            last: 14,
                        }
                    },
                },
            }
        },
    },
};

// TODO: Merge extension into final definition
