import {useRouter} from 'next/router'

const Gallery = () => {
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
      <>
        <table>
            <tr >
                <td><a onClick = {() => route('/')} style = {style}>Home</a></td>
                <td><a onClick = {() => route('/gallery')} style = {style}>Gallery</a></td>
                <td><a onClick = {() => route('/contact')} style = {style}>Contact</a></td>
                <td><a onClick = {() => route('/gpa')} style = {style}>GPA Calc</a></td>
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
        <h1 >Gallery</h1>
        <table >
            <tr>
                <td><img src="photo/rice field.png" alt="pic1"/>
                    <p>Eat rice , no bread</p>
                </td>
                <td><img src="photo/stonk.jpg" alt="pic2"/>
                    <p>S T O N K S</p>
                </td>
                <td><img src="photo/Thumnaz.png" alt="pic3"/>
                    <p>mun kue pang!</p>
                </td>
                <td><img src="photo/genius.jpg" alt="pic4"/>
                    <p>G E N I U S !</p>
                </td>
            </tr>
            <tr>
                <td><img src="photo/ei b0ss.jpg" alt="pic5"/>
                <p>ei b0ss</p>
                </td>
                <td><img src="photo/requiem.jpeg" alt="pic6"/>
                <p>requiem da</p>
                </td>
                <td><img src="photo/liar.jpg" alt="pic7"/>
                <p>This is taste of a liar , Giorno Giorvana!</p>
                </td>
                <td><img src="photo/IC.jpg" alt="pic8"/>
                <p>Oh! IC.</p>
                </td>
            </tr>
        </table>
      </>
  )
}

export default Gallery