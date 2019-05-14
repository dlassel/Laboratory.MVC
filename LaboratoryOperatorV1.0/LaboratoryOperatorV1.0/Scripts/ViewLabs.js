﻿


new Vue({
    el: '#app',
    model: model,
    data() {
        return {
            search: '',
            Headers: [
                { text: 'Equipment', value: 'equipment' },
                { text: 'Location', value: 'location' },
                { text: 'Qty', value: 'qty' },
                {text: 'Add or Remove', value: 'addo', sortable: false, disabled:true}
            ],
            items: [
                //{ equipment: 'vernier-caliber', location: 'thatcher south room 3535  drawer 20', qty: 88 },

                //{ equipment: 'ruler', location: 'hickman  room 4535  drawer 20', qty: 2 },

                //{ equipment: 'firebase', location: 'thatcher south room 3535  drawer 20', qty: 420 },

                //{ equipment: 'is beter than', location: 'thatcher south room 3535  drawer 20', qty: 62 },

                //{ equipment: 'aws cuz its free', location: 'thatcher south room 3535  drawer 20', qty: 68 }
            ]
        }
    },

    mounted() {
        for (var i = 0; i < model.IndexList.length; i++)
        {
            this.items.push({ equipment: model.IndexList[i].itemName, location: model.IndexList[i].location, qty: model.IndexList[i].quantity })
        }
    },

    methods: {
        increment() {
            var x = this.items[0].qty;
            this.items[0].qty++;
        },
        decrement() {
            return;
        }
    }
})


//new Vue({
//    el: '#app',
//    //vuetify: new Vuetify(),

//    data: () => ({

//        search: '',
//        Headers: [
//            { text: 'Equipment', value: 'equipment' },
//            { text: 'Location', value: 'location' },
//            { text: 'Qty', value: 'qty' },
//            { text: 'Add or Remove', value: 'add' }
//        ],
//        equipments: [],
//        editedIndex: -1,
//        editedItem: {
//            name: '',
//            location: '',
//            Qty: 0
//        }
//    }),


//    created() {
//        this.initialize();
//    },

//    methods: {
//        initialize() {
//            this.equipment = [
//                { equipment: 'vernier-caliber', location: 'thatcher south room 3535  drawer 20', qty: 88 },

//                { equipment: 'ruler', location: 'hickman  room 4535  drawer 20', qty: 2 },

//                { equipment: 'firebase', location: 'thatcher south room 3535  drawer 20', qty: 420 },

//                { equipment: 'is beter than', location: 'thatcher south room 3535  drawer 20', qty: 62 },

//                { equipment: 'aws cuz its free', location: 'thatcher south room 3535  drawer 20', qty: 68 }
//            ]
//        }
//    },
    
//    decrement(item) {
//        this.editedIndex = this.equipments.indexOf(item)
//        this.editedItem = Object.assign({}, item)
//        this.dialog = true

//    }
//})

