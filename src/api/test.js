export const isIphoneX = ()=> {
    if(window.screen.height / window.screen.width > 1.85 ) {
        return true
    }
}