import {useEffect} from 'react';
import axios from 'axios'
import Link from 'next/link'

const baseURL = 'https://dummyapi.io/data/api'
const Home = () => {
  const style = {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '10px 10px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
  }

  return (
      <div >
        <table id ="Link">
            <tr >
                <td style= {style}><Link href="/">Home</Link></td>
                <td style= {style}><Link href="/gallery">Gallery</Link></td>
                <td style= {style}><Link href="/contact">Contact</Link></td>
                <td style= {style}><Link href="/gpa">GPA calculator</Link></td>
                <td style= {style}><Link href="/post">post</Link></td>
            </tr>
        </table>
        <table>
            <tr class = "name-tag">
                <td><h1>Kamonpat Sunthonpong</h1>
                    <h2>Student</h2>
                    <h2>kamonpat_s@cmu.ac.th</h2></td>
                <td><img class = "profile" src="photo/so yummy.png" alt="this is me ,so yummy ."/></td>
            </tr>
        </table>
        <h1  class = "title">Home</h1>        
        <table>
            <tr>
                <td>
                    <h2 class = "sub-title">About me</h2>
                    <p >I am sophomore student in Department of Computer Engineering at Chiang Mai university.</p>
                </td>
            </tr>
            <tr>
                <td>
                    <h2 class = "sub-title" >Skills</h2>
                    <table class = "skill" >
                        <tr >
                            <td >c++ lv6</td>
                            <td >java lv6</td>
                            <td >python3 lv2</td>
                        </tr>
                        <tr >
                            <td >cooking lv2</td>
                            <td >english lv3</td>
                            <td >sleeping lv8</td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <h2 class = "sub-title" >Hobby</h2>
                    <table >
                        <tr>
                            <td ></td>
                            <td>
                                <ul>
                                    <li>play game</li>
                                    <li>listen to music</li>
                                    <li>watching recommended videos on youtube</li>
                                    <li>programming</li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
      </div>
  )
}

export default Home
