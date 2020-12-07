import React, {Component} from 'react'
import Job from '../job-directory'
import Jobs from '../jobs/jobs'
import './home.css'
import pics from '../picture/work.jpg'
import navbar from '../picture/nav.svg'
import Footer from '../footer/footer'


class Home extends Component{
constructor(){
    super()
    this.state ={
        jobCollection :Job
    }
}

render(){

    return(
        <div className='home'>
            <div className='homeContainer'>
    
                <div className="nav">
                    <img src={navbar} alt="nav bar"/>
                </div>
                <div className="imgBox">
                <img src={pics} alt="work at office"/>
                </div>

                <div className="jobText">
                An Online Portal That Helps You Find the Right Job 
                That Matches Your Skills. Sign Up Now. We Also Provide 
                You With Personalized Career Guidance To Help You Achieve 
                Your Goals. Post your job today. Find your dream team. Hire
                 top talent. Hire Qualified Candidates. 
                Types: Jobs in Nigeria, Career Advice, CV Review.
            </div>
                <div className="job-Container">
                {
        this.state.jobCollection.map(job=> 
        <Jobs key={job.id} job={job}>{job}</Jobs>)

                }
                </div>
                
                <Footer/>
            </div>
        </div>
    )
    }
}

export default Home