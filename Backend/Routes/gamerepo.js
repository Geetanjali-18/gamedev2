const express = require("express")
const router = express.Router()
var fetchuser = require("../middleware/fetchuser")
const repoType = require("../models/repo")
const { body, validationResult } = require("express-validator")
const user = require("../models/user")
// const repo = require("../models/repo")

router.post("/createrepo", fetchuser, [
    // body('message', "Message box should not be empty").isLength({ min: 1 })
], async (req, res) => {
    try {
        const { repoName, gameBudget, gmDetails, gameDesc, reviewSec } = req.body
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const repoCreate = new repoType({
            user: req.user.id, repoName, gameBudget, gmDetails, gameDesc, reviewSec
        })
        const saveRepo = await repoCreate.save()
        res.json(saveRepo)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Error")
    }
})

router.put("/editRepo/:repoID", fetchuser, async (req, res) => {
    const repoID = req.params.repoID
    const {repoName, repoBudget, gmDetails} = req.body
    try {
        //create a new note object
        const newRepo = {}
        if (repoName) { newRepo.repoName = repoName }
        if (repoBudget) { newRepo.repoBudget = repoBudget }
        if (gmDetails) { newRepo.gmDetails = gmDetails }
        
        let repo = await repoType.findById(repoID)
        if (!repo) { return res.status(404).send("Not found") }
        if (repo.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }
        repo = await repoType.findByIdAndUpdate(repoID, { $set: newRepo }, { new: true })
        // console.log(note)
        res.json({ repo })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }

}

)

router.put("/thumbsup/:repoID/:feedID", fetchuser, async (req, res) => {
    const repoID = req.params.repoID
    const feedID = req.params.feedID
    
    try {
        //create a new note object
       
        
        let repo = await repoType.findById(repoID)
        // console.log("repos is ", repo)
        if (!repo) { return res.status(404).send("Not found") }
        if (repo.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }
        let repoArr = repo.reviewSec
        repoArr.forEach((i)=>{
            if(i._id == feedID){
                i.rThumbsUp++;
                
            }
        })
        repo.reviewSec = repoArr

        repo = await repoType.findByIdAndUpdate(repoID, { $set: repo }, { new: true })
        // console.log(note)
        res.json({ repo })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }

}

)


router.put("/replybackrepo/:repoID/:feedID", fetchuser, async (req, res) => {
    const repoID = req.params.repoID
    const feedID = req.params.feedID
    const {replyIs} = req.body
    
    try {
        //create a new note object
       
        
        let repo = await repoType.findById(repoID)
        if (!repo) { return res.status(404).send("Not found") }
        if (repo.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }
        let repoArr = repo.reviewSec
        repoArr.forEach((i)=>{
            if(i._id == feedID){
                i.rReply = replyIs
                
            }
        })
        repo.reviewSec = repoArr
        repo = await repoType.findByIdAndUpdate(repoID, { $set: repo }, { new: true })
        // console.log(note)
        res.json({ repo })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }

}

)


router.post("/giveReview/:repoID", fetchuser, async (req, res) => {
    const repoID = req.params.repoID
    const {repoFeed} = req.body
    console.log(repoFeed)

    try {
        let repo = await repoType.findById(repoID)
        //create a new note object

        if (!repo) { return res.status(404).send("Not found") }
        // if (repo.user.toString() !== req.user.id) {
        //     return res.status(401).send("Not Allowed")
        // }
        // let repoArr = repo.reviewSec

        // repo.reviewSec = repoArr
        // repo = await repoType.findByIdAndUpdate(repoID, { $set: repo }, { new: true })
        // console.log(note)

        res.json({ repo })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }

}

)



router.get("/getReviews/:repoID", fetchuser, async (req, res) => {
    try {
        // const { to } = req.body
        const repoID = req.params.repoID


        const allReviews = await repoType.find({ _id: repoID })
        res.json(allReviews[0].reviewSec)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }
})

// route 3: Fetch Username From UserID: GET "/api/message/fetchusername" login required


router.get("/fetchusername/:id", fetchuser, async (req, res) => {
    try {
        // const {id} =req.body 
        const id = await user.findById(req.params.id)
        // console.log(id)
        // const usn = await user.findOne({id}).select("username -_id")
        res.json(id.username)

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error")
    }
})



// route 4: Fetch Username of all those who are in contacts: GET "/api/message/contacts" login required

router.get("/contacts", fetchuser, async (req, res) => {
    try {
        const id = req.user.id
        // console.log(id )
        // console.log(req.messages)
        let inContactsArr = []
        const allPresent = await messages.find({ chatid: id })
        await allPresent.forEach(async (i) => {
            let currentId = i.to === id ? i.user : i.to
            if (!inContactsArr.includes(JSON.stringify(currentId))) {
                // console.log((currentId))
                // console.log("all id pushed")
                inContactsArr.push(JSON.stringify(currentId))
            };

        });
        // const allPresent

        const allUsernamePresent = []
        let totalTime = 10 * inContactsArr.length


        await inContactsArr.forEach(async (i) => {
            const ids = await user.findById(JSON.parse(i))
            // await console.log("inside the foreach")
            // await console.log(JSON.stringify(ids.username))
            // console.log(JSON.stringify(ids.username))
            // if (!allUsernamePresent.includes(JSON.stringify(ids.username))) {
            // console.log((currentId))
            allUsernamePresent.push(ids)
            // allUsernamePresent.concat([JSON.stringify(ids.username)])


            // console.log("pushed Element")
            // };
            // await allUsernamePresent.push((ids.username))
        });

        // console.log(JSON.parse(inContactsArr[0]))
        // res.send(allUsernamePresent)
        setTimeout(() => {

            res.send(allUsernamePresent)
        }, totalTime);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})

router.post("/search", fetchuser, async (req, res) => {
    try {
        const usp = req.body.usnSearch

        let ifPresent = false;

        const usn = await user.findOne({ username: usp })
        if (!usn) {
            res.send(false)
        }
        else {
            ifPresent = true;
            res.json({ id: usn._id })
        }

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})



module.exports = router