import React, { useEffect, useState } from 'react'
import "../Dash/Profile/Profile.css"
import Sidebar from '../Dash/Sidebar'
// import "./runOwlCarousel"
import dash from "../Dash/Dashboard.module.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReviewPage from "../Dash/Profile/ReviewPage"


const prfDet = {
    firstName: "Ankit",
    lastName: "Kumar",
    phoneNo: "9999999999",
    email: "abc@email.com",
    ecoPts: "27",
    totalSold: "8",
    TotalEarn: "23586",
    wallet: "16586",

}


const postData = [{

    "_id": "651d7d1d1079ee209906957d",
    "user": "651d2bc7196b4e64c8eac476",
    "repoName": "GameSliders",
    "gameBudget": 500,

    "gmDetails": {
        "thumbUp": 0,
        "gameDesc": "This is a game project.",
        "timeDur": "50 days",
        "teamSize": 20,
        "techStack": ["Unity", "Java"]
    },

    "reviewSec": [
        {
            "rDevName": "Vivek Dhir",
            "rReply": "Unity used with wgl",
            'rThumbsUp': 5,
            "rDesc": "What techstacks were used",
            "_id": "651d7d1d1079ee209906957e"
        },


        {
            "rDevName": "Harshit Kaushik",
            "rReply": "Yes",
            "rThumbsUp": 0,
            "rDesc": "Is it python project",
            "_id": "651d7d1d1079ee209906957f",
            "date": "2023-10-04T14:56:29.593+00:00"
        }
    ]
}]

const Profile = (props) => {
    const options = {
        loop: true,
        autoplay: true,

    }
    
    // useEffect(() => {

    //     props.setSetsideState(1)
    //     return () => {

    //     }
    // }, [])

    const [revSection, setRevSection] = useState([])
    useEffect(() => {
      setRevSection(postData[0].reviewSec)
    // console.log(postData[0].reviewSec)
      return () => {
        
      }
    }, [])
    

    const [prfDetState, setPrfDetState] = useState(prfDet)
    const handleOnChangePrf = (e) => {
        if (editMode) {
            setPrfDetState({ ...prfDet, [e.target.name]: e.target.value })

        }
    }


    const handleOnEditClick = () => {
        setEditMode(true)
    }

    const handleOnSaveWithdraw = () => {
        setEditMode(false)
    }
    const [editMode, setEditMode] = useState(false)
    
    const [isReplied, setIsReplied] = useState(false)
    const [replyText, setReplyText] = useState("")

   
    
    return (
        <>
            <div className={dash.dash3}>
                <Sidebar />

                <div className={dash.rightPortalDash3}>
                    <div className='profileSection3'>

                        <div className="developerEditShare">


                            <div class="card">
                                <div className="upperCardPostSection">
                                    <h5 class="card-header cardHeaderPost">Your Post</h5>
                                    <div className="card-header cardHeaderUpper"><i class="fa-solid fa-pen-to-square"></i></div>

                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">WarX</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi harum laborum, numquam expedita blanditiis similique esse ab! Non, dolor voluptatibus sed ullam laborum, a veritatis ut, ab suscipit nemo dolore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure ex sint in alias facilis! Ex quod quas quam veritatis accusantium enim vel iusto quia iure? Illum in adipisci quos explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit alias doloremque atque cumque voluptates maiores nisi est? Accusamus quidem minima nobis aut totam, tempora, animi omnis illum soluta sit maiores!</p>

                                    <a href="#" class="btn btn-primary my-5">See code</a>

                                    <OwlCarousel className='owl-theme owlGameSection' loop margin={10} nav {...options}>
                                        <div class='item'>
                                            <div className="carouselImgDiv">
                                                <img src="https://cdn.2kgames.com/web/common/images/specopstheline_keyart_L_1.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div class='item'>
                                            <div className="carouselImgDiv">
                                                <img src="https://i.ytimg.com/vi/Dman_NEYShA/maxresdefault.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div class='item'>
                                            <div className="carouselImgDiv">
                                                <img src="https://miro.medium.com/v2/resize:fit:1358/1*tGHsYf0gW70xDtL6U_zVMw.jpeg" alt="" />
                                            </div>
                                        </div>
                                        <div class='item'>
                                            <div className="carouselImgDiv">
                                                <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/50300/ss_d15b53353fd8c5b36f6f97887735addbcfdae5ab.1920x1080.jpg?t=1569016017" alt="" />
                                            </div>
                                        </div>

                                    </OwlCarousel>

                                </div>
                            </div>

                        </div>

                        <div className="developerReviewSection">
                            <h1>Reviews</h1>
                            <div className="allReveiewsToPost">
                                {revSection.map((i) => {
                                    return <ReviewPage key = {i._id} rDevName = {i.rDevName} rDesc = {i.rDesc} />

                                })}
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;