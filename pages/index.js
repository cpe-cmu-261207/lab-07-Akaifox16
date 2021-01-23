import {useEffect} from 'react';
import axios from 'axios'
import {useRouter} from 'next/router'

const baseURL = 'https://dummyapi.io/data/api'
const Home = () => {
  const router = useRouter()
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
  const route = (path) => {
    router.push({pathname: path})
  }

  return (
      <div>
        <table>
            <tr >
                <td><a onClick = {() => route('/')} style = {style}>Home</a></td>
                <td><a onClick = {() => route('/gallery')} style = {style}>Gallery</a></td>
                <td><a onClick = {() => route('/contact')} style = {style}>Contact</a></td>
                <td><a onClick = {() => route('/gpa')} style = {style}>GPA Calc</a></td>
                <td><a onClick = {() => route('/post')} style = {style}>Post</a></td>
            </tr>
        </table>
        <table>
            <tr >
                <td><h1>Kamonpat Sunthonpong</h1>
                    <h2>Student</h2>
                    <h2>kamonpat_s@cmu.ac.th</h2></td>
                <td><img src="photo/so yummy.png" alt="this is me ,so yummy ."/></td>
            </tr>
        </table>
        <h1 >Home</h1>        
        <table>
            <tr>
                <td>
                    <h2 >About me</h2>
                    <p >I am sophomore student in Department of Computer Engineering at Chiang Mai university.</p>
                </td>
            </tr>
            <tr>
                <td>
                    <h2 >Skills</h2>
                    <table >
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
                    <h2 >Hobby</h2>
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
