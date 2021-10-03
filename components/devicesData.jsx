import React from "react";

const devices = [
    {
        "id": 1,
        "device": "Router",
        "image": require('../img/devices/router.png'),
        "scenario": "Hi user go ahead and set up your Home Router, all your smart devices are connected to this router for access to the internet, so go on and set a password for this device. Don't forget the password OK! ",
        "options": [
            { "id": 1, "label": "password" },
            { "id": 2, "label": "StroNgPassWord" },
            { "id": 3, "label": "Cisco123" },
            { "id": 4, "label": "@W3eakPa55W0rd", correct: true }
        ],
        "exploit": <div>
            <p>
                Your router was exploited due to a weak password setup by you and now the hacker has access to
                all Wi-Fi connected devices including your office laptop and other smart devices on the network.
            </p>
        </div>,
        "tips": <div>
            <div>Tips for a secure password: </div>
            <ul>
                <li>At least 8 characters—the more characters, the better</li>
                <li>A mixture of both uppercase and lowercase letters</li>
                <li>A mixture of letters and numbers Inclusion of at least one special character, e.g., ! @ # ? ]</li>
            </ul>
            <p>
                A strong password is hard to guess, but it should be easy for you to remember—a password that has
                to be written down is not strong, no matter how many of the above characteristics are employed.
            </p>
        </div>,
        "link": 'https://blog.avast.com/strong-password-ideas',
    },
    {
        "id": 2,
        "device": "Laptop",
        "image": require('../img/devices/laptop.png'),
        "scenario": "Great news! Your neighbor forgot to set a password for his router now you have a super speed Wi-Fi connection.🤩 Let's go-ahead connect to it and: ",
        "options": [
            { "id": 1, "label": "Download all those web series and check your social media feeds." },
            { "id": 2, "label": "Nah, never mind it, I have my own Wi-Fi. ", correct: true },
            { "id": 3, "label": "Check your office emails and finish off some office work."},
            { "id": 4, "label": "Purchase all house supply from Amazon quickly." }
        ],
        "exploit": <div>
            <p>
                Your laptop was compromised the moment you connected to an unknown or public WiFi. The hacker used
                the tool WiFi Pineapple to spoof/MITM the WiFi network. MITM attacks are a way of eavesdropping on a
                user by inserting a Pineapple between the user’s device and legitimate Wi-Fi access points.
            </p>
        </div>,
        "tips": <div>
            <div>How to protect yourself from malicious pineapple users: </div>
            <ul>
                <li>The easiest thing you can do is only connect to Wi-Fi networks you know and trust. </li>
                <li>
                    If you must get on public Wi-Fi, your best bet is to get a VPN. VPNs are a secure way
                    of surfing the net by first connecting to a VPN server before venturing onto the Internet.
                </li>
                <li>Another good rule of thumb is to only visit websites secured with HTTPS</li>
            </ul>
            <div>
                Finally, it’s important that whenever you are done connecting to a public Wi-Fi network that you
                configure your phone or computer to ‘forget’ that network.
            </div>
        </div>,
        "link": 'https://www.vice.com/en_us/article/pa39xv/pineapple-wifi-how-to-mitm-hack'
    },
    {
        "id": 3,
        "device": "Smartphone",
        "image": require('../img/devices/phone.png'),
        "scenario": "You just saw this amazing app on a blog that lets you watch all those Netflix content for free, that too with NO ADS and lifetime access. What are you waiting for!🤩 Go-ahead and:",
        "options": [
            { "id": 1, "label": "Install it and start downloading your favorite shows" },
            { "id": 2, "label": "Install it and share it with your friends so they can also watch it for free." },
            { "id": 3, "label": "Get a paid membership and install Netflix from the store.", correct: true },
            { "id": 4, "label": "Install the app, but don't sign in using your Google ID." }
        ],
        "exploit": <div>
            <p>
                You just installed a malicious app to your phone and compromised the security of the device.
                Now the hacker has full control over your phone’s data including images, contacts , files and
                everything else. He can initiate communication on your behalf or sabotage your office accounts
                and duties.
            </p>
        </div>,
        "tips": <div>
            <div>Tips to protect your mobile device from malware: </div>
            <ul>
                <li>
                    <b>Download apps only from reputable sources: </b>
                    Unofficial app stores are more likely to be sources of malware-infected apps.
                </li>
                <li>
                    <b>Don’t jailbreak/root your device: </b>
                    Jailbreaking/rooting your device removes a lot of its built-in security. While this may let
                    you do more with your device, it also leaves it more vulnerable to attacks.
                </li>
                <li>
                    <b>Encrypt your data:</b>
                    If you have sensitive data on your mobile device, make sure it’s encrypted.
                    It will then remain secure, even if malware steals it.
                </li>
                <li>
                    <b>Update software and hardware:</b>
                    Companies often release updates on mobile devices that address potential vulnerabilities.
                </li>
            </ul>
        </div>,
        "link":'https://www.securitymetrics.com/blog/5-ways-your-mobile-device-can-get-malware'
    },
    {
        "id": 4,
        "device": "RFID Card (Employee Card)",
        "image": require('../img/devices/id_card.png'),
        "scenario": "Got your first smart employee ID card with RFID feature, now everything is just a tap away, how awesome is that😎,Let me just go ahead and: ",
        "options": [
            { "id": 1, "label": "Meet up with your friends at a local coffee shop and show it off. " },
            { "id": 2, "label": "Keep it inside a metal cover and not show it off outside the office.", correct: true},
            { "id": 3, "label": "Wear it all the time😉 even at the weekends parties after work. "},
            { "id": 4, "label": "Hang it in your belt/neck and Don't care about it ,After all it's just an id card."}
        ],
        "exploit": <div>
            <p>
                That’s right “everything is just a tap away” and the hacker just cloned your RFID card when you showed
                it off outside the office ,at coffee shops and parties. Using tools like Proxmark hackers
                can easily clone your RFID in close proximity, just by walking near you.
            </p>
        </div>,
        "tips": <div>
            <div className="mb-1">How To Prevent RFID Hacking -</div>
            <ul>
                <li>Equip Your Wallet And Pockets To Stop RFID Signals by simply putting an aluminum foil cover.</li>
                <li>Double-Check Your RFID Security, use two factor methods.</li>
            </ul>
        </div>,
        "link":  "https://blog.kchung.co/rfid-hacking-with-the-proxmark-3/"
    },
    {
        "id": 5,
        "device": "Smart Bulb",
        "image": require('../img/devices/bulb.png'),
        "scenario": "Super Saver Sale happening on Amazon on electronics and home appliances and there are these cool smart bulbs with 16 million colors with smartphone control and Bluetooth connectivity just for 50 bucks. Let’s go ahead and: ",
        "options": [
            { "id": 1, "label": "Save a lot of money and get those cool bulbs before sale ends." },
            { "id": 2, "label": "Purchase a different bulb with no offers but from a trusted manufacturer.", correct: true},
            { "id": 3, "label": "Read all reviews and product description and then buy only 2 for  50 bucks. "},
            { "id": 4, "label": "Buy them for your entire house."}
        ],
        "exploit": <div>
            <p>
                Low cost items come with low cost security features, that's right when you made that compromise on
                money you had to sacrifice your home security to a hacker.
            </p>
            <p>
                "Through this exploitation, a threat actor can infiltrate a home or office's computer network
                over-the-air, spreading ransomware or spyware, by using nothing but a laptop and an antenna from
                over 100 meters"
            </p>
        </div>,
        "tips": <div>
            <div>Tips while buying smart devices online - </div>
            <ul>
                <li>
                    Never compromise on security when it comes to technology, read the product documentation carefully
                    and purchase smart devices with good security implementations.
                </li>
                <li>
                    Keep all your Smart devices up-to-date at all times, hackers find new ways to get into
                    your network every minute so be prepared.
                </li>
            </ul>
        </div>,
        "link": "https://thehackernews.com/2020/02/philips-smart-light-bulb-hacking.html"
    },
    {
        "id": 6,
        "device": "Health Tracker",
        "image": require('../img/devices/health_tracker.png'),
        "scenario": "You got a smart fitness tracker as a gift for your birthday, you are not a fitness freak or anything but love the design and usability. Let's go ahead and: ",
        "options": [
            { "id": 1, "label": "Always keep it paired with your phone while using.", correct: true},
            { "id": 2, "label": "I don't need all those features, not going to spend extra time on setting it up. "},
            { "id": 3, "label": "Enable all features and let your friends play with it. "},
            { "id": 4, "label": "Turn On all features but not pair it." }
        ],
        "exploit": <div>
            <p>
                The hacker exploited your health tracker and now has access to your health information and your
                location history for every day.When you decided not to pair your device with your phone you just
                opened up a door for the hacker as these device are in an advertising mode letting anyone pair
                with them if no actual user is setup.
            </p>
        </div>,
        "tips": <div>
            <div>How to protect yourself from this exploit?</div>
            <ul>
                <li>Using LE privacy implementation enabled devices.</li>
                <li>Adopting HTTPS and security pinning</li>
                <li>Introducing on-device encryption.</li>
            </ul>
        </div>,
        "link": "https://r-stylelab.com/company/blog/iot/vulnerability-of-fitness-trackers-risks-they-are-facing-and-tips-to-minimize-them"
    },
    {
        "id": 7,
        "device": "Desktop",
        "image": require('../img/devices/pc.png'),
        "scenario": "Received a mail from Universal Health Insurance Company, stating that you have been selected for a COVID relief plan for you and your family with 10 Lakhs cover at a premium of only 500/annum per person if you sign up today itself. The links and files for  enrollment are attached. Let's go ahead and: ",
        "options": [
            { "id": 1, "label": "Never mind I have my own insurance policy and not even open it.", correct: true },
            { "id": 2, "label": "Download and read the attached documents and sign up using the link."},
            { "id": 3, "label": "Enroll ASAP before the links expires"},
            { "id": 4, "label": "Reply to the mail and read all documents attached and then enroll. " }
        ],
        "exploit": <div>
            <p>
                You have become the victim of a successful phishing mail scam during COVID times. All your data has
                been compromised and the hacker now has access to your personal computer and connected
                devices and can use it for nefarious purposes.
            </p>
        </div>,
        "tips": <div>
            <div>Tips to look out for Phishing Emails - </div>
            <ul>
                <li>Too Good To Be True information</li>
                <li>Creating a Sense of Urgency</li>
                <li>Bogus Hyperlinks & Attachments</li>
                <li>Unsual Sender</li>
            </ul>
        </div>,
        "link": "https://www.phishing.org/what-is-phishing"
    },
    {
        "id": 8,
        "device": "Smart Assistant (Alexa/Google)",
        "image": require('../img/devices/alexa.png'),
        "scenario": "Got a brand new home assistant device to make your home more smart, but now the main confusion is where to place it for better accessibility. Let me just:  ",
        "options": [
            { "id": 1, "label": "Keep it near my home landline for easy access. "},
            { "id": 2, "label": "Keep it in a corner and mute it if I'm not using it.", correct: true },
            { "id": 3, "label": "Mute it and keep it near the windows for better connection" },
            { "id": 4, "label": "Place it in my cozy bedroom and make it do cool stuff always." }
        ],
        "exploit": <div>
            <p>
                Your home assistant was exploited and now the hacker can listen to your private conversation and
                issue commands and execute task on your behalf.The hacker can use two main attacks by using a
                malicious app to listen to you since you have not muted the device or can user a state of the art
                laser based attack to issue commands on your behalf.
            </p>
        </div>,
        "tips": <div>
            <ul>
                <li>Mute your home assistant if you are not using it/at least during private and sensitive conversations.</li>
                <li>Keep it away from other audio sources like landline as voicemails can sometimes confuse your assistant and issue commands.</li>
                <li> Place your device in a secure location away from windows or other openings to protect against laser based attacks.</li>
            </ul>
        </div>,
        "link": "https://www.wired.com/story/lasers-hack-amazon-echo-google-home/"
    },
    {
        "id": 9,
        "device": "Smart TV",
        "image": require('../img/devices/tv.png'),
        "scenario": "You bought a smart tv online as it was cheaper and smart compared to normal tv’s available(2 in one).But after 2 months you find that your internet bill is going up, so to save some money let me just: ",
        "options": [
            { "id": 1, "label": "Turn off all software updates on my Smart TV and save a lot of data. "},
            { "id": 2, "label": "Keep updates on but turn off autoplay feature. ", correct: true },
            { "id": 3, "label": "Stop watching all online shows and just watch the news. " },
            { "id": 4, "label": "Turn off all software updates and turn off autoplay feature. " }
        ],
        "exploit": <div>
            <p>
                The hacker exploited various vulnerabilities in your Smart TV’s OS as you turned off the security
                updates to save data.Here you sacrificed security over money and now just like a computer a smart tv
                can be used for all kinds of nefarious purposes by the hacker, to collect data and have full access
                over your networked devices.
            </p>
        </div>,
        "tips": <div>
            <ul>
                <li>Keep all security updates on check.</li>
                <li>Purchase Smart TV’s from trusted manufacturers only,which are properly configured to avoid backdoors.</li>
                <li>Secure all physical ports on the device like USB.</li>
            </ul>
        </div>,
        "link": "https://www.welivesecurity.com/2019/08/02/smart-tvs-way-attackers-home/"
    },
    {
        "id": 10,
        "device": "IP Camera",
        "image": require('../img/devices/cctv.png'),
        "scenario": "For maximum security in your house you have bought a new IP camera and installed it and connected it with your pc and phone, the device came with default password and username for better accessibility, Lets go ahead and: ",
        "options": [
            { "id": 1, "label": "Change it to a different username and password.", correct: true },
            { "id": 2, "label": "Write down the default password on a sticky note and put it over your PC. "},
            { "id": 3, "label": "Not write it down instead keep it in a secure password lock app." },
            { "id": 4, "label": "Remember the default creds and not put it down on any electronic device." }
        ],
        "exploit": <div>
            <p>
                You have fallen prey to the most common human error that leads to disastrous consequences and the
                birth of major exploits like Mirai.The default passwords of all devices are available in the public
                domain and now everyone in the internet can access your  cctv camera and use it for all kinds of
                malicious activity, including invading your privacy, logging your daily life or even to make a
                botnet out of all such devices to perform attacks like Mirai.
            </p>
        </div>,
        "tips": <div>
            <ul>
                <li>Your first priority should be changing the default credentials of any device you purchase.</li>
                <li>Keep the device updated with latest patches</li>
                <li>It’s best to isolate your camera from your internet facing router.</li>
            </ul>
        </div>,
        "link": "https://www.csoonline.com/article/2844283/peeping-into-73-000-unsecured-security-cameras-thanks-to-default-passwords.html"
    }
];

export default devices;