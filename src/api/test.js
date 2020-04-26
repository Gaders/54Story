import axios from 'axios'
const API = 'https://'

const getCard = async () => {
    const { data } = await axios.get(API)
    const cardNum = data.card.county + data.card.process + data.card.democracy + data.card.science
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
    const { data } = await axios.get(API)
    const storyFirst = storySum(data.story.first)
    const storySecond = storySum(data.story.first)
    const storyThird = storySum(data.story.first)
    const storyNum = [storyFirst, storySecond, storyThird]
    return storyNum
}

const updataCard = async (issnum, storynum, cardid) => {
    const { data } = await axios.post(API, {
        issnum: issnum,
        storynum: storynum,
        cardid: cardid,
    })
    return data
}

export const isIphoneX = ()=> {
    if(window.screen.height / window.screen.width > 1.85 ) {
        return true
    }
}


export {
    getCard,
    getStory,
    updataCard
}
  