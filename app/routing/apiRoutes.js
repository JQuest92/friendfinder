var friends = require("../data/friends");

module.exports = function(app)
{
    app.get("/api/friends", function(req, res)
    {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){

        var surveyed = req.body;
        var diff = 0;
        var maxDiff = 100;
        var newFriend;

        //console.log(friends[0].scores);


        for(var i = 0; i < surveyed.opinions.length; i++){
            surveyed.opinions[i] = Number(surveyed.opinions[i]);}

        for(var i = 0; i < (friends.length - 1); i++)
        {
            var totalDiff = 0;
            //console.log("I: " + i);
            for(var j = 0; j < friends[i].scores.length; j++)
            {  // console.log("IN inner loop");
                diff = Math.abs(surveyed.opinions[j] - friends[i].scores[j]);
                totalDiff += diff;
                console.log("\n\nTotalDiff: " + totalDiff + "\n\n");
            }//end inner for
            //console.log("Out of inner loop");
            if(totalDiff < maxDiff)
            {
                newFriend = friends[i];
                maxDiff = totalDiff;
            }
        }//end out for
        console.log("can i make it here?");
        friends.push(surveyed);
        console.log(newFriend.name);
        res.json(newFriend);
    });
};