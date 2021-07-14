const cantLol = 'cant be changed'; 
let canLol = 'can be changed';
let reason = 'some idiot parked in the wrong spot';



function coolFunction(stuff, groceries){
    console.log(stuff, groceries);
};

let coolVariable = (milk, stuff, groceries) => {
    console.log(stuff, groceries, milk);

};




// coolVariable('more stuff ajkshdkj kja sdkajhsd kjahs ', 'fruit', 'no');



// coolFunction('some stuff','some vegetables');

const southWestFlights = {
    flight:{
        number: 34,
        status: 'Departed',
        arrived:{time: new Date,
                 date: new Date
        },
        manifest: undefined
    }
}

// console.log(southWestFlights.flight.arrived.manifest);

coolVariable = () => {
    console.log('ups')
}

coolVariable()