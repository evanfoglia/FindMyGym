import {Gym} from './gym';

export const GYMS: Gym[] = [
    {   id: 1, 
        name: 'American Fitness',
        picture: '../assets/American-logo.png',
        description: 'American Fitness is high end gym which includes classes and small group training. They specialize in functional training, offering different training packages to fit each person’s individual needs. Members can do 1 year contracts or go month to month.',
        contact: '(850) 907-3555', 
        cost: [
            {id: 'Basic 12 month commitment: $47.99 per month +  $79 initiation fee'}
        ],
        hours: '24/7',
        address: '6668 Thomasville Rd Tallahassee, FL 32312',
        reviews: '',
     }, 
    {   id: 2, 
        name: 'Anytime Fitness',
        picture: '../assets/Anytime.jpeg',
        description: 'Anytime Fitness is a general gym that caters to everyone. They have slightly less amenities than other gyms but offer more locations throughout the city and allow for 24/7 access.',
        contact: '(850) 671-2225', 
        cost: [
            {id: 'Call for more info on pricing'}
        ],
        hours: '24/7',
        address: '3219 Apalachee Pkwy, Tallahassee, FL 32311',
        reviews: '',
    }, 
    {   id: 3, 
        name: 'Atlas Fit',
        picture: '../assets/newAtlas.png',
        description: 'Atlas Fit isn’t like most gyms in the area. The gym prides itself by being different by letting their members train like athletes. They have sleds to push, barbells, and tires to flip. ',
        contact: '(850) 727-0652', 
        cost: [
            {id: 'Basic “Atlas”: $35/month' },
            {id: 'Atlas Warrior: $100/month - Includes group training 3x/week'},
            {id: 'Atlas Warrior Unlimited: $125/month // Includes unlimited group training'}
        ],
        
        hours: 'Mon-Thu: 6am-9pm; Fri: 8am-8pm; Sat: 8am-4pm; Sun: Closed',
        address: '603 W. Gaines Street Tallahassee, FL 32304',
        reviews: '',
    }, 
    {   id: 4, 
        name: 'Capital City Barbell',
        picture: '../assets/CCB.png',
        description: 'Capital City Barbell is a specialty gym for powerlifting and Olympic weightlifting. It’s home of the FSU weightlifting club. It’s a great gym for students or individuals looking for a completive and encouraging environment for strength training.',
        contact: '(850) 329-6850', 
        cost: [
            {id:'12 Month Commitment: $420 ($35/month)'},
            {id: 'Month to Month: $45/month'},
            {id: 'Semester: $40/month (4 months)'}
        ],
        hours: 'Mon-Fri: 9am-9pm; Sat: 9am-2pm; Sun: 1pm-4pm',
        address: '1416 W. Tennessee St. Suite E Tallahassee, FL, 32304',
        reviews: '',
     }, 
    {   id: 5, 
        name: 'Downtown Fitness', 
        picture: '../assets/downtown.jpg',
        description: 'Downtown Fitness is a general fitness gym, but slightly smaller than FSU leach. It’s located downtown and they offer classes, a basketball court and other amenities you can use with your friends.',
        contact: '(850) 512-1966', 
        cost: [
            {id: '$35 per month + $50 initiation fee'}
        ],
        hours: 'Mon: 6am-9pm; Tue: 6am-8pm; Wed: 6am-5pm; Thu: 6am-8pm; Fri: 6am-8pm; Sat: 9am-1pm; Sun: Closed',
        address: '115 South Duval Street Tallahassee, FL 32301',
        reviews: '',
    }, 
    {   id: 6, 
        name: 'FSU Leach Recreation Center', 
        picture: '../assets/leach.png',
        description: 'FSU Leach is the student gym for all FSU students. It’s free for all active students and available for a small price for alumni, faculty and others. It can get very crowded at peak times.',
        contact: '(850) 644-0548', 
        cost: [
            {id: 'Free for active students'},
            {id: '$35 per month for alumni'},
            {id: '$25 per month for faculty'},
            {id: '$60 per semester for returning students not currently enrolled'}
        ],   
        hours: 'Mon-Thu: 6am-10pm Fri: 6am-9pm Sat-Sun: 9am-9pm',
        address: '210 Leach Center, 118 Varsity Way Tallahassee, FL 32306',
        reviews: '',
    }, 
    {   id: 7, 
        name: 'Golds Gym',
        picture: '../assets/golds.jpg',
        description: 'Gold’s gym is a staple general fitness gym of Tallahassee. Many FSU students go to Gold’s since Leach can get very packed. ',
        contact: '(850) 201-9712', 
        cost: [
            {id: 'Basic: $25/month. Up to $99 enrollment fee. $39.99 annual fee. No classes included. No guests.'},
            {id: 'Platinum: $35/month. Up to $99 enrollment fee. $39.99 annual fee. Unlimited guest privileges if they have a local Tallahassee ID.'}
        ],
        hours: 'Mon-Thurs: 24hrs; Fri: 12AM-9PM; Sat-Sun: 9AM-7PM',
        address: '2020 W Pensacola St, Tallahassee, FL 32304',
        reviews: '',
    }, 
    {   id: 8, 
        name: 'Kinetix',
        picture: '../assets/kinetix.png',
        description: 'Kinetix is a general fitness gym that’s mainly catered for locals of Tallahassee. They offer group classes for additional cost. The gyms are newer than most other gyms in Tallahassee. ',
        contact: '(850) 597-8581', 
        cost: [
            {id: 'Silver: $19.99/Month.'},
        ], 
        hours: 'Mon-Fri: 4am-10pm; Sat: 8am-5pm; Sun: 9am-5pm',
        address: '2910 Kerry Forest Pkwy, Tallahassee, FL 32309',
        reviews: '',
    }, 
    {   id: 9, 
        name: 'Momentum Fitness', 
        picture: '../assets/momentum.svg',
        description: 'Momentum Fitness is another general fitness gym. It’s currently location is where used to be where Gold’s was and it’s very similar to the old Gold’s Gym. Similarly more so for general athletes and not for powerlifting/ weightlifting competitors.',
        contact: '(850) 385-9712', 
        cost: [
            {id: 'Paid in full: $200-$400.'},
            {id: 'Basic: month to month. $25/month. Up to $99 enrollment fee. $39.99 annual fee. No classes included. No guests.'},
            {id: 'Platinum: Month to month. $35/month. Up to $99 enrollment fee. $39.99 annual fee. Classes included. Unlimited guest privileges.'}
        ],
        hours: 'Mon-Thu: 5am-10pm; Fri: 5am-9pm; Sat: 7am-7pm; Sun: 9am-7pm',
        address: '2695 Capital Cir NE D, Tallahassee, FL 32308',
        reviews: '',
    }, 
    {   id: 10, 
        name: 'Planet Fitness',
        picture: '../assets/planet.png',
        description: 'Planet Fitness is a general fitness gym. It exists to provide a safe space for people to work out. Their “lunk alarm” decreases the amount of douchey college gym goers. There is no squat or bench racks. Only Smith machines are available with free weights and other equipment. ',
        contact: '(850) 597-7375', 
        cost: [ 
            {id: 'White Card: $10/month + $5 down. $39 annual fee. Month to month commitment. No guest privileges'},
            {id: 'Black Card: $19.99/Month + $0 down. $39 annual fee. Year long commitment with a $58 cancellation fee. Unlimited guest privileges. Unlimited access to all amenities.'}
        ],
        hours: '24/7',
        address: '1212 Capital Cir SE Unit C, Tallahassee, FL 32301',
        reviews: '',
    }, 
    {   id: 11, 
        name: 'Premier Health & Fitness Center',
        picture: '../assets/premier.png',
        description: 'It’s a very good gym for general fitness. It’s very well-equipped but very expensive, this is due to all the amenities it offers such as a sauna, basketball court and indoor track. ',
        contact: '(850) 431-2348', 
        cost: [
            {id: '50.51 + tax monthly for a year contract, $150 termination fee'},
            {id: '$ $45-60 enrollment fee $62.88 for month to month'}
        ],
        hours: 'Mon-Thu: 5am-10pm; Fri: 5am-9pm; Sat: 7am-7pm; Sun: 10am-6pm',
        address: '3521 Maclay Blvd S, Tallahassee, FL 32312',
        reviews: '',
    }, 
    {   id: 12, 
        name: 'Seminole Strength & Conditioning',
        picture: '../assets/seminole.png',
        description: 'It’s a powerlifting and bodybuilding gym. It’s primary goal is to give the individual all the tools they need to lift heavy. ',
        contact: '(352) 504-5567', 
        cost: 'Single Month: $50 Month to month $35/month, 3 month minimum. No enrollment fees.',
        hours: '24/7',
        address: '3944 NW Psge, Tallahassee, FL 32303',
        reviews: '',
    }, 
    {   id: 13, 
        name: 'YouFit',
        picture: '../assets/youfit.png',
        description: 'Youfit is a general fitness gym where prices are good and reasonable. For an additional cost, members can access multiple locations in the Tallahassee area.',
        contact: '(850) 241-1300', 
        cost: [
            {id: 'White Card: $10/month. $10 enrollment fee. $39.99 annual fee. Month to month contract. No class privileges.'},
            {id: 'Lime Card: $19.99/Month. No enrollment fee. $39.99 annual fee. Month to month contract.'}
        ], 
        hours: 'Mon-Fri: 24 Hours; Sat-Sun: 8am-8pm',
        address: '3111 Mahan Dr #12, Tallahassee, FL 32308',
        reviews: '',
    }, 


];