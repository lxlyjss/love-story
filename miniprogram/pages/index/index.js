//index.js
const audioContext = wx.createInnerAudioContext()
audioContext.src = 'https://m10.music.126.net/20181222181345/70401c44a8b60ee65649f9e2cd7ca341/ymusic/9ddc/b10e/919e/2ef50b0473f7f2cce3193ed620898cd7.mp3'
audioContext.play();
const app = getApp()

Page({
  data: {
    photoList: [
      {
        imageUrl: 'cloud://production-fb572a.7072-production-fb572a/微信图片_20181222162832.jpg',
        width: 200,
        title: '老婆我爱你',
        top: 10,
        left: 100,
        color: '#000',
        rotate: 24
      },
      {
        imageUrl: 'cloud://production-fb572a.7072-production-fb572a/微信图片_20181222162744.jpg',
        width: 300,
        title: '爱你么么哒',
        top: 600,
        left: -100,
        color: '#000',
        rotate: 12
      },
      {
        imageUrl: 'cloud://production-fb572a.7072-production-fb572a/小仙女.jpg',
        width: 300,
        title: '我的宝宝是小仙女',
        top: -200,
        left: 500,
        color: '#000',
        rotate: -25
      },
      {
        imageUrl: 'cloud://production-fb572a.7072-production-fb572a/微信图片_20181222162821.jpg',
        width: 260,
        title: '圆球是我的宝贝!',
        top: -500,
        left: 500,
        color: '#000',
        rotate: -10
      },
      {
        imageUrl: 'cloud://production-fb572a.7072-production-fb572a/微信图片_20181222162838.jpg',
        width: 260,
        title: '球球我爱你!',
        top: -400,
        left: 900,
        color: '#000',
        rotate: -10
      }
    ],
    starList: []
  },

  onLoad: function() {
    this.setStar()
  },
  setStar () {
    let list = []
    for(let i = 0; i < 30; i++) {
      let widthOrHeight = this.getRandom(20, 60)
      let temp = {
        width: widthOrHeight,
        height: widthOrHeight,
        top: this.getRandom(50, 1200),
        left: this.getRandom(50, 700),
        rotate: this.getRandom(0, 20)
      }
      list.push(temp)
    }
    this.setData({starList: list})
  },
  getRandom (min, max) {
    return parseInt(Math.random() * (max - min + 1) + min, 10);
  }
})
