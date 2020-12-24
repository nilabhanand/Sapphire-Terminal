
const Twitter = require('twitter');
module.exports = (app, io) => {
    let twitter = new Twitter({
        consumer_key: 'B5pqkSXEFJb6k9N3MDlnz1ywC',
        consumer_secret: 'prREolNxIydAxHHy65DUApT3ci3fFSma701y7sXaSxaaEPcvjB',
        access_token_key: '774959845-o1xGpOw8S8m0UFMuUotLxYzlyog0WIeGZlVaFSQ6',
        access_token_secret: 'xvjtvT96iiLzavHvfnk5eJAwti23jTmgHAL5BFUqOorlH'
    });

    let socketConnection;
    let twitterStream;


    app.locals.searchTerm = 'Forex'; //Default search term for twitter stream.
    app.locals.showRetweets = false; //Default
    var user_array = ['1289077393387393024,18856867,59393368,25073877,31064165,19399038']
    /**
     * Resumes twitter stream.
     */
    const stream = () => {
        console.log('Resuming for ' + app.locals.searchTerm);
        twitter.stream('statuses/filter', { follow: '1289077393387393024,18856867,59393368,31064165,19399038,3295423333,2704294333,865624663841320960' }, (stream) => {
            stream.on('data', (tweet) => {
                sendMessage(tweet);
            });

            stream.on('error', (error) => {
                console.log(error);
            });

            twitterStream = stream;
        });
    }

    
    /**
     * Sets search term for twitter stream.
     */
    /*
    app.post('/setSearchTerm', (req, res) => {
        let term = req.body.term;
        app.locals.searchTerm = term;
        twitterStream.destroy();
        stream();
    });
    */

    /**
     * Pauses the twitter stream.
     */
    app.post('/pause', (req, res) => {
        console.log('Pause');
        twitterStream.destroy();
    });

    /**
     * Resumes the twitter stream.
     */
    app.post('/resume', (req, res) => {
        console.log('Resume');
        stream();
    });

    //Establishes socket connection.
    io.on("connect", socket => {
        socketConnection = socket;
        stream();
        socket.on("connect", () => console.log("Client connected1"));
        socket.on("disconnect", () => {
            console.log("Client disconnected1");
        });
    });

    /**
     * Emits data from stream.
     * @param {String} msg 
     */
    const sendMessage = (msg) => {

        if ( msg.user.screen_name === "mindful__trader" || msg.user.screen_name === 'breakingmkts'|| msg.user.screen_name === 'deltaone' || msg.user.screen_name === 'zerohedge' || msg.user.screen_name === 'FirstSquawk' || msg.user.screen_name === "LiveSquawk" || msg.user.screen_name === 'Fxhedgers' || msg.user.screen_name === 'ForexLive' ) {
            socketConnection.emit("tweets", msg);
            console.log(msg.text);
        }else {
            //console.log(msg.user.screen_name);
        }
        /*
        if (msg.text.includes('RT') || (msg.user.screen_name !== "mindful__trader" || msg.user.screen_name !== "zerohedge" || msg.user.screen_name !== "LiveSquawk" || msg.user.screen_name !== "Fxhedgers")) {
            //return;
            console.log(msg.user.screen_name);
        }else{
            socketConnection.emit("tweets", msg);  
        }
        //socketConnection.emit("tweets", msg);
        */
    }
};