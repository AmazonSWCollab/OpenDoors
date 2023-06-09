/* images */
import stars from '../assets/symbols/stars.png';
import userHead from '../assets/symbols/userHead.png';
import dogHeart from '../assets/symbols/dog-heart.png';

/* buttons */
import { MoreButton, PhotoViewerButton } from '../components/profilePageButtons';

export default function Profile() {
  return (
    <div>

      {/*Placeholder for a banner photo that a user can upload*/}
      <div id="bannerPhoto"></div>

      {/*green square that holds the bigger default user icon*/}
      <div style={{marginLeft:'75px'}}>
        <div id="profileBioSquare">
          <img href="" alt="" src={userHead}
            style={{
              width: '75px',
              height: '75px',
            }} />
        </div>

        {/*user bio info: name, city, state, default stars icon*/}
        <div id="profileBio">
          <h2 style={{ margin: '0'}}>Pancho Rodriguez (Example Profile Page)</h2>
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

      {/* ---- Badges section ----*/}
      <div>
      <h3 style={{
          position: 'absolute',
          width: '220px',
          height: '50px',
          left: '130px',
          top: '325px',
          fontFamily: 'Quicksand',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '40px',
          lineHeight: '50px',
          color: '#507A22'
      }}>
        My Badges
        </h3>
      </div>

      {/* --------- Recent Activity Section -----------*/}
      <div>
        <h2 style={{
          position: 'absolute',
          width: '291px',
          height: '50px',
          left: '630px',
          top: '323px',
          fontFamily: 'Quicksand',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '40px',
          lineHeight: '50px',
          color: '#507A22',
          zIndex: '3'
        }}>
          Recent Activity</h2>
      </div>

      <div>
        <div style={{
          position: 'absolute',
          width: '440px',
          height: '320px',
          left: '540px',
          top: '400px',
          background: '#507A22',
          boxShadow: '5px 5px 6px rgba(0, 0, 0, 0.25)',
          borderRadius: '10px'
        }}>
        </div>

        {/* circle that holds the default user's icon in Review Activity section */}
        <div id="profileBioSquare"
          style={{
            borderRadius: '100px',
            left: '550px',
            top: '360px',
            width: '10px',
            height: '10px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            background: '#DD9500'
            }}>
          <img href="" alt="" src={userHead}
            style={{
              width: '50px',
              height: '50px',
              marginLeft: '-20px'
            }} />
        </div>

        {/* profile bio next to green circle that holds user icon */}
        <div style={{
          position: 'absolute',
          top: '410px',
          left:'650px',
          zIndex: '4',
          color: 'white'
        }}>
          <h2 style={{ margin: '0'}}>Pancho Rodriguez</h2>
          <h4 style={{ margin: '0'}}>Fullerton, CA</h4>
        </div>

        {/* Buttons */}
        <div>
          <MoreButton text="More" />
        </div>
        <div>
          <PhotoViewerButton text="2 Photos"/>
        </div>

        {/* Text box of Recent Activity*/}
        <div style={{
          position: 'absolute',
          width: '400px',
          height: '150px',
          left: '559px',
          top: '515px',
          background: '#D5CFE1',
          borderRadius: '10px',
          zIndex: '2'
        }}>
          <p style={{padding:'15px'}}>
            I loved that they let me have my service animal in this place. I love this place.
          </p>
        </div>

        {/* symbols of inclusivity box*/}
        <div>
          <img href="" alt="" src={dogHeart}
              style={{
                position: 'absolute',
                width: '35px',
                height: '35px',
                left: '775px',
                top: '676px',
                zIndex: '3'
              }} />
        </div>

        {/* time of last post */}
        <div style={{
          position: 'absolute',
          width: '112px',
          height: '24px',
          left: '565px',
          top: '680px',
          fontFamily: 'Quicksand',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '20px',
          lineHeight: '20px',
          color: '#FFFFFF',
          zIndex: '2'
        }}>
          <p>2 months ago</p>
        </div>

      </div> {/*End of Recent Activity Section*/}

      {/* ----------Start of the About me Section---------*/}
      <div>
        <h2 style={{
          position: 'absolute',
          width: '184px',
          height: '50px',
          left: '1180px',
          top: '323px',
          fontFamily: 'Quicksand',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '40px',
          lineHeight: '50px',
          color: '#507A22'
      }}>
        About Me
        </h2>

        <h3 style={{
          position: 'absolute',
          width: '240px',
          height: '37px',
          left: '1130px',
          top: '385px',
          fontFamily: 'Quicksand',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '32px',
          lineHeight: '40px',
          color: '#507A22'
          }}>
          Favorite Things
        </h3>

        <ul style={{
        position: 'absolute',
        width: '230px',
        height: '86px',
        left: '1155px',
        top: '430px',
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
          left: '1125px',
          top: '530px',
          fontFamily: 'Quicksand',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '32px',
          lineHeight: '40px',
          color: '#507A22'
          }}>
          OpenDoors Member
        </h3>
        <p style={{
          position: 'absolute',
          width: '230px',
          height: '86px',
          left: '1155px',
          top: '580px',
          fontFamily: 'Quicksand',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '24px',
          lineHeight: '30px',
          color: '#000000'
          }}
        >Since April 4th, 2023</p>

      </div> {/* end of About me Section*/}

      <div id="fillerSpace" style={{height:'200px'}}></div>

    </div>

  )
}
