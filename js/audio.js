


function audioplay() {

    document.getElementById("letra").innerHTML = `
            <marquee height="300px" scrolldelay="255" loop="1" behavior="scroll" direction="up">
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
                this modesty I just need 
                <br> space to
                do me ge a world
                <br>
                 
                that they're tryna see
                <br>
                A Stella Maxwell right beside of me
                <br>
                A Ferrari I'm buyin' three A closet of Saint 
            </p>

            <p> 
                
                Laurent, get what I want when I want
                <br>
                'Cause this hunger is driving me, yeah
                <br>
                I just need to be alone,
                <br> 
                I just need to be at home
            </p>

            <p>

                Understand what I'm speaking on
                <br> 
                if time is money I need a loan But
                <br> 
                regardless I'll always keep keepin'
                <br> 
                on Fuck fake friends,
                <br>
                we don't take L's
                <br> we just make
                M's While y'all follow, 
                <br>
                we just make trends
            </p>
            <p>


                
                I'm right back to work when that 
                <br>
                break ends

            </p>

            <p>

                Oh, it's just me, myself and I
                <br>
                Solo ride until I die
            </p>
            <p>'Cause I got me for life
            <br>
                (Got me for life, yeah)
                <br>
                Oh I don't need a hand to hold</p>
            <p>
                Even when the night is cold
                <br>
                I got that fire in my soul
                <br>
                I don't need anything to get me through the night
            </p>
            <p>Except the beat that's in my heart
                Yeah,
                <br> it's keeping me alive
                (Keeps me alive)</p>
            <p>
                I don't need anything to make me 
                <br>
                satisfied (You know) 
                <br>
                'Cause the music  fills me 
                <br>good and it
                <br>
                 gets me every time
                Yeah, and I don't like
                <br> talking to strangers
            </p>
            <p>
                So get the fuck off me I'm anxious
                <br>
                I'm tryna be cool but I may just go ape shit
                <br>
                Say "fuck y'all" to all of y'all faces
            </p>
            <p>It changes though now that I'm famous
            <br>
                Everyone knows how this lifestyle is dangerous
                <br>
                But I love it the rush is amazing</p>
            <p>Celebrate nightly and everyone rages
            <br>
                I found how to cope with my anger
                <br>
                I'm swimming in money Swimming in liquor</p>
            <p> my liver is muddy
                But it's all good I'm still sippin'
                <br> this bubbly
                This shit is lovely, this shit ain't random,
                <br> I didn't get lucky</p>
            <p>Made it right here 'cause I'm sick with it Cudi
            <br>
                They all take the money for granted
                <br>
                But don't want to work for
                <br>
                 it tell me now,
                isn't it funny? Nah</p>
            <p>Oh, it's just me, myself and I
                Solo ride until I die
                <br>
                'Cause I got me for life 
                <br>
                (Got me for life, yeah)
            </p>
            <p>
                Oh I don't need a hand to hold
                <br>
                Even when the night is cold
                <br>
                I got that fire in my soul</p>
            <p>I don't need anything to 
            <br>
            get me through the night
            <br>
                Except the beat that's in my heart
                <br>
                Yeah, it's keeping me alive
                <br>
                (Keeps me alive)
                <br>
                I don't need anything to make me satisfied 
                <br> (You know)
                <br>
                'Cause the music fills me good and 
                <br> it gets me every time</p>
            <p>Like ba-ba-ba-ba-da-ba
            <br>
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
                'Cause the music fills
                <br> me good and it gets
                </p> 
              <p>  me every time
            <br>
            Yeah, lonely nights
            <br>
             I laid awake
                <br>
                Pray the Lord, my soul to take
                <br>
                My heart's become too cold to break
                <br> 
                Know I'm great but I'm broke as hell
                <br>
                Having dreams that I'm folding cake
                <br>
                All my life I've been told to wait
                <br>
                But I'mma get it now, yeah it's no debate
                Yeah
            </p>
            <p>Oh, it's just me,
            <br>
             myself and I
            <br>
                Solo ride until I die
                'Cause I got me 
                <br>
                for life
                (Got me for life, yeah)
                <br>
                Oh I don't need a hand to hold
                <br>
                Even when the night is cold
                <br>
                I got that fire in my soul</p>
            <p>I don't need anything to get
            <br>
             me through the night
            <br>
                Except the beat that's in my heart
                <br>
                Yeah, it's keeping me alive
                (Keeps me alive)
                <br>
                I don't need anything to make me satisfied 
                <br> (You know)
                <br>
                'Cause the music fills me good and 
                <br>
                it gets me every time</p>
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
                'Cause the music fills me good
                <br> and it gets me every time
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