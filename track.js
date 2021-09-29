import React, { Fragment } from 'react';
const TRAC = props => {
  const handleDelete = nam => {
    props.delete(nam);
  };
  const displayTrack = props.songs
    .filter(val => {
      if (props.searc == '') {
        return val;
      } else if (val.searc.includes(props.searc)) {
        return val;
      }
      console.log(props.searc);
    })
    .map((tracks, i) => {
      if (i > 0) {
        return (
          <>
            <div className="linkTra">
              {' '}
              <div className="" />
              <h4 style={{textTransform:"uppercase",fontWeight:'bold'}}> Song </h4>
              <p style={{textTransform:"uppercase"}}>
                Song Name : {tracks.SongName}<p></p>
                Artist :  {tracks.artist}<p></p>
                Genre :  {tracks.item_type} <p></p>           
                Year :  {tracks.yearReleased}
              </p>
              <a
                href="{tracks.link}"
                style={{paddindTop:"1",textTransform: 'uppercase' }}
              >
                {' '}
              </a>
            </div>
            <button onClick={() => handleDelete(tracks.SongName)}>
              delete
            </button>
          </>
        );
      }
    });
  return <Fragment>{displayTrack}</Fragment>;
};
export default TRAC;
