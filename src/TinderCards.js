import React, { useState } from 'react';
import './TinderCards.css';
import TinderCard from './TinderCard.js';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Degen 8939',
            url: "https://lh3.googleusercontent.com/svF5mgVnRQt6tG9Is7l4D3akAMWnjy93oq_MBVzb-N3HfXJZ_y-j4W0eICfxHfMVgGV2kkPzpeJAW2X9KGB3EFMYv0MVpZYQp5ARqQ=s0"
        },
        {
            name: 'Degen 7398',
            url: "https://lh3.googleusercontent.com/LH2BHh9yxsbqbqRMda8qL2C6Bwp2KKCTNywOjZGYITXRL2JL4ohjMwsof40FvmzouMwJb_aE7bznT5shWMfS7V9z58n1q5CyXN-ZnZs=s0"
        },
        {
            name: 'Degen 5939',
            url: "https://lh3.googleusercontent.com/rC_UZDGWmIyA0sgIR_B01Aw5wCMkbaXjpO18LcTNN_xkqGFLMEV-o3dighc20WGAdcjNNo3bNmgFCr-dFo9WWlqcUBdrreFYscMG=s0"
        },
        {
            name: 'Degen 4668',
            url: "https://lh3.googleusercontent.com/w3r9QM0kgFP5jx7_U4efb-l-xPZot_7Vu1tQoU6aMOtupC8T3EJN-9gsafhOZDRB3kchYii19Jgezri0i0SfdCLnAbDQhqj96X-jKg=s0"
        },
        {
            name: 'Degen 2935',
            url: "https://lh3.googleusercontent.com/m0oegT07-gNGuqBOv9EdN0vHH_9Us6eVBYsg8q2DaqdIbte4LW-s3JjESJd0-xLAlRikiq2qa0atSck_OEtpYneqlO-EyhUN4w2piIk=s0"
        },
        {
            name: 'Degen 1560',
            url: "https://lh3.googleusercontent.com/AbumP7GDAIV64dljhYTydYUZ3NPLJAKNH99ux-Bq_W9DQ2XifQJSHsLbPemabCelqscNi_7QQ7vdkJ_esMpdECPFToJfQq3Ud_NovNY=s0"
        },
        {
            name: 'Degen 1341',
            url: "https://lh3.googleusercontent.com/9Yqmm-YvrnpXDxfpqdBGXh0RkFBXShJsIhq5QNQDJgAl7-C49yGGG9CJDGwsCrz7nPTxrkUjyH5X8rAEu_mUd-26zeEXPEiij4Ak=s0"
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {people.map(person => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div
                        style={{ backgroundImage: `url(${person.url})` }}
                        className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards;