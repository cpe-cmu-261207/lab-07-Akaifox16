import Link from 'next/link'

const Contact = () => {
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
      <>
        <table id ="Link">
            <tr>
                <td style= {style}><Link href="/">Home</Link></td>
                <td style= {style}><Link href="/gallery">Gallery</Link></td>
                <td style= {style}><Link href="/contact">Contact</Link></td>
                <td style= {style}><Link href="/gpa">GPA calculator</Link></td>
                <td style= {style}><Link href="/post">post</Link></td>
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
        <h1 >Contact</h1>
        <form action="">
            <table border="1px" >
                <tr >
                    <td><h4>Subject:</h4></td>
                    <td><input type="text" size="60px" /></td>
                </tr>
                <tr >
                    <td><h4>Massage:</h4></td>
                    <td><textarea name="message" id="massage" cols="30" rows="10" ></textarea></td>
                </tr>
                <tr >
                    <td><h4>Name:</h4></td>
                    <td><input type="text" size="60px"/></td>
                </tr>
                <tr>
                    <td><h4>Gender:</h4></td>
                    <td>
                        <form>
                            <input type="radio" name="gender"/>male
                            <input type="radio" name="gender"/>female
                            <input type="radio" name="gender"/>others
                        </form></td>
                </tr>
                <tr >
                    <td><h4>Phone:</h4></td>
                    <td><input type="text" size="60px"/></td>
                </tr>
                <tr >
                    <td><h4>Email:</h4></td>
                    <td><input type="text" size="60px"/></td>
                </tr>
                <tr >
                    <td></td>
                    <td><button type="submit" id="submit">submit</button></td>
                </tr>
            </table>
        </form>
      </>
  )
}

export default Contact