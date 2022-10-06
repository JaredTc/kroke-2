


function audioplay() {

    document.getElementById("letra").innerHTML = `
            <marquee height="220px" scrolldelay="185" loop="1" behavior="scroll" direction="up">
            <p>
                Oh, it's just me, myself and I
                <br>
                Solo ride until I die
                <br>
                'Cause I got me for life
                <br>
                Oh I don't need a hand to hold
            </p>

            <p>
                Even when the night is cold
                <br>
                I got that fire in my soul
                <br>
                And as far as I can see
                <br> I just need privacy
            </p>

            <p>
                Plus a whole lot of tree,
                fuck all
                <br>
                this modesty I just need space to
                <br>
                do me get a world
                that they're tryna see
                <br>
                A Stella Maxwell right beside of me
            </p>

            <p>
                A Ferrari I'm buyin' three
                A closet of Saint 
                Laurent, get what I want when <br>I want
                <br>
                'Cause this hunger is driving me, yeah
                I just need to be alone,I just need to be at home
            </p>

            <p>

                Understand what I'm speaking on
                <br> if time is money I need a loan But
                <br> regardless I'll always keep keepin'
                <br> on Fuck fake friends,
                we don't take L's we just make
                M's
            </p>
            <p>


                While y'all follow, we just make trends
                I'm right back to work when that break ends

            </p>

            <p>

                Oh, it's just me, myself and I
                Solo ride until I die
            </p>
            <p>'Cause I got me for life
                (Got me for life, yeah)
                Oh I don't need a hand to hold</p>
            <p>
                Even when the night is cold
                I got that fire in my soul
                I don't need anything to get me through the night
            </p>
            <p>Except the beat that's in my heart
                Yeah, it's keeping me alive
                (Keeps me alive)</p>
                <br>
            <p>
                I don't need anything to make me satisfied (You know)
                'Cause the music fills me good and it gets me every time
                Yeah, and I don't like talking to strangers
            </p>
            <p>
                So get the fuck off me I'm anxious
                I'm tryna be cool but I may just go ape shit
                Say "fuck y'all" to all of y'all faces
            </p>
            <p>It changes though now that I'm famous
                Everyone knows how this lifestyle is dangerous
                But I love it the rush is amazing</p>
            <p>Celebrate nightly and everyone rages
                I found how to cope with my anger
                I'm swimming in money Swimming in liquor</p>
            <p> my liver is muddy
                But it's all good I'm still sippin' this bubbly
                This shit is lovely, this shit ain't random, I didn't get lucky</p>
            <p>Made it right here 'cause I'm sick with it Cudi
                They all take the money for granted
                But don't want to work for it tell me now,
                isn't it funny? Nah</p>
            <p>Oh, it's just me, myself and I
                Solo ride until I die
                'Cause I got me for life
            </p>
            <p>
                (Got me for life, yeah)
                Oh I don't need a hand to hold
                Even when the night is cold
                I got that fire in my soul</p>
            <p>I don't need anything to get me through the night
                Except the beat that's in my heart
                Yeah, it's keeping me alive(Keeps me alive)
                I don't need anything to make me satisfied (You know)
                'Cause the music fills me good and it gets me every time</p>
            <p>Like ba-ba-ba-ba-da-ba
                Ba-ba-ba-da-ba (Yee!)
                <br>
                Ba-ba-ba-ba-da-ba
                <br>
                Ba-ba-ba-da-ba
                <br>
                Ba-ba-ba-ba-da-ba
                <br>
                Ba-ba-ba-da-ba
                <br>
                'Cause the music fills me good and it gets
                </p> 
              <p>  me every time
            
            Yeah, lonely nights I laid awake
                <br>
                Pray the Lord, my soul to take
                My heart's become too
                <br> cold to break
                Know I'm great but I'm broke as hell
                <br>
                Having dreams that I'm folding cake
                All my life I've been told to wait
                <br>
                But I'mma get it now, yeah it's no debate
                Yeah
            </p>
            <p>Oh, it's just me, myself and I
                Solo ride until I die
                'Cause I got me for life
                (Got me for life, yeah)
                Oh I don't need a hand to hold
                Even when the night is cold
                I got that fire in my soul</p>
            <p>I don't need anything to get me through the night
                Except the beat that's in my heart
                Yeah, it's keeping me alive
                (Keeps me alive)
                I don't need anything to make me satisfied (You know)
                'Cause the music fills me good and it gets me every time</p>
            <p>like ba-ba-ba-ba-da-ba
                <br>
                Ba-ba-ba-da-ba
                <br>
                Ba-ba-ba-ba-da-ba
                <br>
                Ba-ba-ba-da-ba
                <br>
                Ba-ba-ba-ba-da-ba
                <br>
                Ba-ba-ba-da-ba
                'Cause the music fills me good and it gets me every time
            </p>
        </marquee>`;





}

let username = document.getElementById('username');
let password = document.getElementById('password');


function startSession(event) {
    event.preventDefault()
    let user = username.value
    let pass = password.value

    if (user != null) {
        window.location.href = 'pages/G-Eazy.html';
    }

}