//index.js
const audioContext = wx.createInnerAudioContext()
audioContext.src = 'https://m10.music.126.net/20181222181345/70401c44a8b60ee65649f9e2cd7ca341/ymusic/9ddc/b10e/919e/2ef50b0473f7f2cce3193ed620898cd7.mp3'
audioContext.play();
const app = getApp()

Page({
  data: {
    photoList: [
      {
        imageUrl: 'cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/1.jpg',
        width: 200,
        title: '老婆我爱你',
        color: '#000'
      },
      {
        imageUrl: 'cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/10.jpg',
        width: 300,
        title: '爱你么么哒',
        color: '#000'
      },
      {
        imageUrl: 'cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/11.jpg',
        width: 300,
        title: '我的宝宝是小仙女',
        color: '#000'
      },
      {
        imageUrl: 'cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/2.jpg',
        width: 260,
        title: '圆球是我的宝贝!',
        color: '#000'
      },
      {
        imageUrl: 'cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/3.jpg',
        width: 260,
        title: '球球我爱你!',
        color: '#000'
      },
      {
        imageUrl: 'cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/4.jpg',
        width: 260,
        title: '球球我爱你!',
        color: '#000'
      },
      {
        imageUrl: 'cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/5.jpg',
        width: 260,
        title: '球球我爱你!',
        color: '#000'
      },
      {
        imageUrl: 'cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/6.jpg',
        width: 260,
        title: '球球我爱你!',
        color: '#000'
      },
      {
        imageUrl: 'cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/7.jpg',
        width: 260,
        title: '球球我爱你!',
        color: '#000'
      },
      {
        imageUrl: 'cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/8.jpg',
        width: 260,
        title: '球球我爱你!',
        color: '#000'
      },
      {
        imageUrl: 'cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/9.jpg',
        width: 260,
        title: '球球我爱你!',
        color: '#000'
      }
    ],
    starList: [],
    slideHeight: 0
  },
  onLoad: function () {
    this.setStar()
    this.setPhotos()
  },
  setStar() {
    let list = []
    for (let i = 0; i < 20; i++) {
      let widthOrHeight = this.getRandom(20, 60)
      let temp = {
        width: widthOrHeight,
        height: widthOrHeight,
        top: this.getRandom(0, 1000),
        left: this.getRandom(0, 350),
        rotate: this.getRandom(0, 20)
      }
      list.push(temp)
    }
    this.setData({ starList: list })
  },
  setPhotos() {
    let list = this.data.photoList;
    list.forEach(item => {
      item.top = this.getRandom(0, 1) * 150
      item.left = this.getRandom(0, 100)
      item.rotate = this.getRandom(0, 20) > 10 ? this.getRandom(0, 20) : -this.getRandom(0, 20)
    })
    this.setData({ "photoList": list })
  },
  getRandom(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min, 10);
  },
  onBoxScroll(e) {
    console.log(e.detail.scrollTop)
  }
})
