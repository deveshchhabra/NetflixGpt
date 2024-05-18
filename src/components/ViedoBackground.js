import React, { useState } from 'react'
import useMovieTrailer from '../hooks/useMovieViedo'
import {  useSelector } from 'react-redux'
import lang from '../utils/languageConstant'

const ViedoBackground = ({movieId}) => {

  const langKey=useSelector((store)=>store.config.lang)
  const MuteGpt=useSelector(store=>store.gpt.MuteGpt);
  console.log(MuteGpt)

    const trailerViedo=useSelector(store=>store.movies?.trailerViedo)
    useMovieTrailer({movieId});
    return (

    <div className='w-screen'>
     
      {console.log(lang[langKey].apiKey)}

{MuteGpt?"mute-1":""}
      <iframe
        className="w-screen aspect-video"
        src={
        // "https://www.youtube.com/embed/"+lang[langKey].apiKey + "?&autoplay=1&mute-1"
        //  // "https://www.youtube.com/embed/" +
        //  // trailerViedo?.key
        //   // + "?&autoplay=1&mute-1rel=0"
         
        "https://www.youtube.com/embed/"+lang[langKey].apiKey+`?&autoplay=1&mute=1${MuteGpt?"mute-1":""}`
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
     </div>
  )
}
export default ViedoBackground


// {
//     "id": 1399,
//     "results": [
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Inside Game of Thrones: A Story in Camera Work – BTS (HBO)",
//         "key": "y2ZJ3lTaREY",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2019-03-25T14:00:06.000Z",
//         "id": "5c999b48c3a36863b73b9d42"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Inside Game of Thrones: A Story in Prosthetics – BTS (HBO)",
//         "key": "f3MUpuRF6Ck",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2019-03-11T14:00:03.000Z",
//         "id": "5c92c2519251412b51773135"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "GAME OF THRONES - SEASON 1- TRAILER",
//         "key": "bjqEWgDVPe0",
//         "published_at": "2017-02-20T15:25:56.000Z",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "id": "5b5b91c2925141523700502c"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Opening Credits: Game of Thrones (HBO)",
//         "key": "s7L2PVdrb_8", =>youtube key
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Opening Credits",
//         "official": true,
//         "published_at": "2011-04-18T20:20:02.000Z",
//         "id": "6233756fba131b001f875249"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Game of Thrones | Season 1 | Official Trailer",
//         "key": "BpJYNVhGf1s",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2011-03-04T04:21:14.000Z",
//         "id": "5c9295200e0a267cd8168bd8"
//       }
//     ]
//   }