import stars from '../assets/symbols/stars.png';
import userHead from '../assets/symbols/userHead.png';

export default function Profile() {
  return (
    <div>

      <div id="bannerPhoto"></div>

      <div style={{marginLeft:'200px'}}>
        <div id="profileBioSquare">
          <img href="" alt="" src={userHead}
            style={{
              width: '75px',
              height: '75px',
            }} />
        </div>

        <div id="profileBio">
          <h2 style={{ margin: '0'}}>Pancho Rodriguez</h2>
          <h4 style={{ margin: '0'}}>Fullerton, CA</h4>
          <h4 style={{ display: 'flex', alignItems: 'center', margin: '0' }}>
            <img href="" alt="" src={stars}
              style={{
                width: '40px',
                height: '40px',
                marginRight: '10px'
              }}/>
            2 Reviews
          </h4>
          </div> {/* end of profileBio */}
      </div>

      <div>
        <h2 style={{
          position: 'absolute',
          width: '291px',
          height: '50px',
          left: '630px',
          top: '400px',
          fontFamily: 'Quicksand',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '40px',
          lineHeight: '50px',
          color: '#317B22',
          zIndex: '3'
        }}>
          Recent Activity</h2>
      </div>

        {/*Start of the Recent Activity Section*/}
      <div id="Recent-Activity-Section">
        <div style={{
          position: 'absolute',
          width: '440px',
          height: '320px',
          left: '540px',
          top: '500px',
          background: '#317B22',
          boxShadow: '5px 5px 6px rgba(0, 0, 0, 0.25)',
          borderRadius: '10px'
        }}></div>

        
        <div id="profileBioSquare" 
          style={{
            borderRadius: '100px',
            left: '550px',
            top: '280px',
            width: '10px',
            height: '10px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            }}>
          <img href="" alt="" src={userHead}
            style={{
              width: '50px',
              height: '50px',
              marginLeft: '-20px'
            }} />
        </div>

        <div id="profileBio" style={{
          top: '50%',
          right:'50%'
        }}>
          <h2 style={{ margin: '0'}}>Pancho Rodriguez</h2>
          <h4 style={{ margin: '0'}}>Fullerton, CA</h4>
          </div>

      </div> {/*End of Recent Activity Section*/}

      <div id="About-Me-Section">
        <h2 style={{
          position: 'absolute',
          width: '184px',
          height: '50px',
          left: '1100px',
          top: '400px',
          fontFamily: 'Quicksand',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '40px',
          lineHeight: '50px',
          color: '#317B22'
      }}>
        About Me</h2>

        <h3 style={{
          position: 'absolute',
          width: '240px',
          height: '37px',
          left: '1130px',
          top: '455px',
          fontFamily: 'Quicksand',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '32px',
          lineHeight: '40px',
          color: '#317B22'
          }}>
          Favorite Things
        </h3>

        <ul style={{
        position: 'absolute',
        width: '230px',
        height: '86px',
        left: '1110px',
        top: '500px',
        fontFamily: 'Quicksand',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '24px',
        lineHeight: '30px',
        color: '#000000'
        }}>
          <li>Dogs</li>
          <li>Animals</li>
          <li>Discovery Channel</li>
        </ul>

        <h3 style={{
          position: 'absolute',
          width: '290px',
          height: '37px',
          left: '1130px',
          top: '585px',
          fontFamily: 'Quicksand',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '32px',
          lineHeight: '40px',
          color: '#317B22'
          }}>
          OpenDoors Member
        </h3>
        <p style={{
          position: 'absolute',
          width: '230px',
          height: '86px',
          left: '1150px',
          top: '640px',
          fontFamily: 'Quicksand',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '24px',
          lineHeight: '30px',
          color: '#000000'
          }}
        >Since April 4th, 2023</p>

      </div> {/* end of About me Section*/}

      <div id="fillerSpace"></div>

    </div>

  )
}
