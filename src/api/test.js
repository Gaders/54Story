import axios from 'axios'
import Qs from 'qs'

export var cardNum1 = 0
export var storyNum1 = []
const APICARD = 'http://127.0.0.1:8001/card?token=eyJjbGFzcyI6IjAyMTExODA0IiwiY29sbGVnZSI6IuWFieeUteW3peeoi+WtpumZoi/ph43luoblm73pmYXljYrlr7zkvZPlrabpmaIgIiwiZXhwIjoiMTAyNDI3MDk1NzMiLCJoZWFkSW1nVXJsIjoiaHR0cDovL3RoaXJkd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL0FuVU00VW1nRWJ1cnVCVXhxMW5ObVdDbUw2a0FNUFJkbEZYYWNsV2xNS3NPeHQzdzc1c0pOQWJRR2ZlaDRNMWdoWTdiZDl4aWI3bnQ1SHZpYXFSVU1PaHcvMTMyIiwiaWF0IjoiMTU4Nzk5MjY5MyIsIm1ham9yIjoiIiwibmlja25hbWUiOiLlpKnkurrkuqbkuZ3oobAiLCJyZWFsTmFtZSI6IumZiOWFiOWLpCAgICAgICAgICIsInJlZElkIjoiZjVjNDA3YTA3YTJmMGE4NzJiZWIzNDkzMWY2MzRjY2Q0NGRlYmU0NCIsInN0dU51bSI6IjIwMTgyMTA2NTMiLCJzdWIiOiJ4YnMifQ==.LTBXqAMnhpsVUOriOON7ada4ImqJkdAfLih5EeQjIzBdBTRazllJSY902bFeT8kArTQtz4ZliFf2JQM2Lzy/KiJf/MG+s25/vibPwFzBGHUPS2AcNJjAksFHQkAv7ymIadbZYdDki5l3ESUj50nwxu5t440Nl48vRY5XiZklGEZTAL5xfuhCBqR16B6DbS6/rUhFf3/DQUYkFDhMuRnuP2WQ0QzGpN5CaPL91FL9iqIcO990Qjw/jgytP2YUF6N8uiUQ4+E6aZt/ahK4Uvbks2Q8KME+4rXu8je6FKVijomE7gtjk6LwJS7A8zRAtqAv/tvjWlMNuWwR3Z5tSZkwEw=='
const APIONLOAD = 'http://127.0.0.1:8001/onload?token=eyJjbGFzcyI6IjAyMTExODA0IiwiY29sbGVnZSI6IuWFieeUteW3peeoi+WtpumZoi/ph43luoblm73pmYXljYrlr7zkvZPlrabpmaIgIiwiZXhwIjoiMTAyNDI3MDk1NzMiLCJoZWFkSW1nVXJsIjoiaHR0cDovL3RoaXJkd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL0FuVU00VW1nRWJ1cnVCVXhxMW5ObVdDbUw2a0FNUFJkbEZYYWNsV2xNS3NPeHQzdzc1c0pOQWJRR2ZlaDRNMWdoWTdiZDl4aWI3bnQ1SHZpYXFSVU1PaHcvMTMyIiwiaWF0IjoiMTU4Nzk5MjY5MyIsIm1ham9yIjoiIiwibmlja25hbWUiOiLlpKnkurrkuqbkuZ3oobAiLCJyZWFsTmFtZSI6IumZiOWFiOWLpCAgICAgICAgICIsInJlZElkIjoiZjVjNDA3YTA3YTJmMGE4NzJiZWIzNDkzMWY2MzRjY2Q0NGRlYmU0NCIsInN0dU51bSI6IjIwMTgyMTA2NTMiLCJzdWIiOiJ4YnMifQ==.LTBXqAMnhpsVUOriOON7ada4ImqJkdAfLih5EeQjIzBdBTRazllJSY902bFeT8kArTQtz4ZliFf2JQM2Lzy/KiJf/MG+s25/vibPwFzBGHUPS2AcNJjAksFHQkAv7ymIadbZYdDki5l3ESUj50nwxu5t440Nl48vRY5XiZklGEZTAL5xfuhCBqR16B6DbS6/rUhFf3/DQUYkFDhMuRnuP2WQ0QzGpN5CaPL91FL9iqIcO990Qjw/jgytP2YUF6N8uiUQ4+E6aZt/ahK4Uvbks2Q8KME+4rXu8je6FKVijomE7gtjk6LwJS7A8zRAtqAv/tvjWlMNuWwR3Z5tSZkwEw=='

const APISTORY = 'http://127.0.0.1:8001/story?token=eyJjbGFzcyI6IjAyMTExODA0IiwiY29sbGVnZSI6IuWFieeUteW3peeoi+WtpumZoi/ph43luoblm73pmYXljYrlr7zkvZPlrabpmaIgIiwiZXhwIjoiMTAyNDI3MDk1NzMiLCJoZWFkSW1nVXJsIjoiaHR0cDovL3RoaXJkd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL0FuVU00VW1nRWJ1cnVCVXhxMW5ObVdDbUw2a0FNUFJkbEZYYWNsV2xNS3NPeHQzdzc1c0pOQWJRR2ZlaDRNMWdoWTdiZDl4aWI3bnQ1SHZpYXFSVU1PaHcvMTMyIiwiaWF0IjoiMTU4Nzk5MjY5MyIsIm1ham9yIjoiIiwibmlja25hbWUiOiLlpKnkurrkuqbkuZ3oobAiLCJyZWFsTmFtZSI6IumZiOWFiOWLpCAgICAgICAgICIsInJlZElkIjoiZjVjNDA3YTA3YTJmMGE4NzJiZWIzNDkzMWY2MzRjY2Q0NGRlYmU0NCIsInN0dU51bSI6IjIwMTgyMTA2NTMiLCJzdWIiOiJ4YnMifQ==.LTBXqAMnhpsVUOriOON7ada4ImqJkdAfLih5EeQjIzBdBTRazllJSY902bFeT8kArTQtz4ZliFf2JQM2Lzy/KiJf/MG+s25/vibPwFzBGHUPS2AcNJjAksFHQkAv7ymIadbZYdDki5l3ESUj50nwxu5t440Nl48vRY5XiZklGEZTAL5xfuhCBqR16B6DbS6/rUhFf3/DQUYkFDhMuRnuP2WQ0QzGpN5CaPL91FL9iqIcO990Qjw/jgytP2YUF6N8uiUQ4+E6aZt/ahK4Uvbks2Q8KME+4rXu8je6FKVijomE7gtjk6LwJS7A8zRAtqAv/tvjWlMNuWwR3Z5tSZkwEw=='
const getCard = async () => {
    const { data } = await axios({
        method: 'post',
        url: APICARD,
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
    })
    var cardNum = data.card.county + data.card.process + data.card.democracy + data.card.science
    cardNum1 = cardNum
    return cardNum
}

function storySum (arr) {
    let sum = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 1) {
            sum += 1
        }
    }
    return sum
}
const getStory = async () => {
    const  data  = await axios({
        method: 'post',
        url: APIONLOAD,
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
    })
    const storyFirst = storySum(data.data.story.frist)
    const storySecond = storySum(data.data.story.second)
    const storyThird = storySum(data.data.story.third)
    const storyNum = [storyFirst, storySecond, storyThird]
    storyNum1 = storyNum
    return storyNum
}

const getStoryNum = async () => {
    const  data  = await axios.post(APIONLOAD)
    const storyFirst = data.data.story.frist
    const storySecond = data.data.story.second
    const storyThird = data.data.story.third
    const storyNum = [storyFirst, storySecond, storyThird]
    storyNum1 = storyNum
    return storyNum
}

const updataCard = async (issnum, storynum, cardid) => {
    var data =  Qs.stringify({
        'issnum':issnum,
        'storynum':storynum,
        'cardid': cardid
    });
    const { info } = await axios({
        method: 'post',
        url: APISTORY,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'

        },
        data,
    })
    return info
}


export const isIphoneX = ()=> {
    if(window.screen.height / window.screen.width > 1.85 ) {
        return true
    }
}


export {
    getCard,
    getStory,
    updataCard,
    getStoryNum,
}
  