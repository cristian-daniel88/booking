class Week {

    constructor (date) {

        this.date = date;
       
       

        this.sunday= [

            {
                disable: false
            },

            {
                user: '',
                place: '',
                reserved: false
            },
            {
                user: '',
                place: '',
                reserved: false
            },
            {
                user: '',
                place: '',
                reserved: false
            },
            {
                user: '',
                place: '',
                reserved: false
            },
            {
                user: '',
                place: '',
                reserved: false
            },
            {
                user: '',
                place: '',
                reserved: false
            },
            {
                user: '',
                place: '',
                reserved: false
            },
            {
                user: '',
                place: '',
                reserved: false
            },
            {
                user: '',
                place: '',
                reserved: false
            },


        ]
        
        this.monday= [

            {
                disable: false
            },


            {
                user: '',
                place: '',
                reserved: false
            },
            {
                user: '',
                place: '',
                reserved: false
            },
            {
                user: '',
                place: '',
                reserved: false
            },
            {
                user: '',
                place: '',
                reserved: false
            },
            {
                user: '',
                place: '',
                reserved: false
            },
            {
                user: '',
                place: '',
                reserved: false
            },
            {
                user: '',
                place: '',
                reserved: false
            },
            {
                user: '',
                place: '',
                reserved: false
            },
            {
                user: '',
                place: '',
                reserved: false
            },


        ];

        this.tuesday= [

            {
                disable: false
            },


            {
                user:'',
                place:'',
                reserved: false
            },
            {
                user:'',
                place:'',
                reserved: false
            },
            {
                user:'',
                place:'',
                reserved: false
            },
            {
                user:'',
                place:'',
                reserved: false
            },
            {
                user:'',
                place:'',
                reserved: false
            },
            {
                user:'',
                place:'',
                reserved: false
            },
            {
                user:'',
                place:'',
                reserved: false
            },
            {
                user:'',
                place:'',
                reserved: false
            },
            {
                user:'',
                place:'',
                reserved: false
            },


        ];

        this.wednesday= [

            {
                disable: false
            },


            {
                user: '',
                place:'',
                reserved: false
            },
            {
                user: '',
                place:'',
                reserved: false
            },
            {
                user: '',
                place:'',
                reserved: false
            },
            {
                user: '',
                place:'',
                reserved: false
            },
            {
                user: '',
                place:'',
                reserved: false
            },
            {
                user: '',
                place:'',
                reserved: false
            },
            {
                user: '',
                place:'',
                reserved: false
            },
            {
                user: '',
                place:'',
                reserved: false
            },
            {
                user: '',
                place:'',
                reserved: false
            },


        ];

        this.thursday= [

            {
                disable: false
            },


            {
                user: '',
                place:'',
                reserved: false
            },
            {
                user: '',
                place:'',
                reserved: false
            },
            {
                user: '',
                place:'',
                reserved: false
            },
            {
                user: '',
                place:'',
                reserved: false
            },
            {
                user: '',
                place:'',
                reserved: false
            },
            {
                user: '',
                place:'',
                reserved: false
            },
            {
                user: '',
                place:'',
                reserved: false
            },
            {
                user: '',
                place:'',
                reserved: false
            },
            {
                user: '',
                place:'',
                reserved: false
            },


        ];

        this.friday= [

            {
                disable: false
            },


            {
                user: '',
                place:'',
                reserved: false
            },
            {
                user: '',
                place:'',
                reserved: false
            },
            {
                user: '',
                place:'',
                reserved: false
            },
            {
                user: '',
                place:'',
                reserved: false
            },
            {
                user: '',
                place:'',
                reserved: false
            },
            {
                user: '',
                place:'',
                reserved: false
            },
            {
                user: '',
                place:'',
                reserved: false
            },
            {
                user: '',
                place:'',
                reserved: false
            },
            {
                user: '',
                place:'',
                reserved: false
            },


        ];

        this.saturday= [

            {
                user: '',
                place:'',
                reserved: false
            },
            {
                user: '',
                place:'',
                reserved: false
            },
            {
                user: '',
                place:'',
                reserved: false
            },
            {
                user: '',
                place:'',
                reserved: false
            },
            {
                user: '',
                place:'',
                reserved: false
            },
            {
                user: '',
                place:'',
                reserved: false
            },
            {
                user: '',
                place:'',
                reserved: false
            },
            {
                user: '',
                place:'',
                reserved: false
            },
            {
                user: '',
                place:'',
                reserved: false
            },


        ]

    }

   
    
    s(hour, user, place) {
        
        this.sunday[hour].user = user;
        this.sunday[hour].place = place;
        this.sunday[hour].reserved = true;

    };


    m (hour, user, place) {

      

        this.monday[hour].user = user;
        this.monday[hour].place = place;
        this.monday[hour].reserved = true;


        

        
    };

    tu() {
        
        this.tuesday[hour].user = user;
        this.tuesday[hour].place = place;
        this.tuesday[hour].reserved = true;

    };

    w(hour, user, place) {
        
        this.wednesday[hour].user = user;
        this.wednesday[hour].place = place;
        this.wednesday[hour].reserved = true;

    };

    th(hour, user, place) {
        
        this.thursday[hour].user = user;
        this.thursday[hour].place = place;
        this.thursday[hour].reserved = true;

    };

    f(hour, user, place) {
        
        this.friday[hour].user = user;
        this.friday[hour].place = place;
        this.friday[hour].reserved = true;

    };

    s (hour, user, place) {

          
        this.saturday[hour].user = user;
        this.saturday[hour].place = place;
        this.saturday[hour].reserved = true;

    };


    disableSunday(){
        this.sunday[0].disable = true
        return
    }

    disableMonday(){
        this.monday[0].disable = true
        return
    }

    disableTusday(){
        this.tuesday[0].disable = true
        return
    }

    disableWednesday(){
        this.wednesday[0].disable = true
        return
    }

    disableThursday(){
        this.thursday[0].disable = true
        return 
    }

    disableFriday(){
        this.friday[0].disable = true
        return
    }

    disableSaturday(){
        this.saturday[0].disable = true
        return
    }




}

module.exports = Week


//const mondays= new Week('lunes');

//mondays.m(1, 'dd', 'northstreet')



 



  



