//index.js


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
        width: 180,
        title: '球球你是个大笨猪!',
        color: '#000'
      },
      {
        imageUrl: 'cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/5.jpg',
        width: 220,
        title: '张媛是个大傻子!',
        color: '#000'
      },
      {
        imageUrl: 'cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/6.jpg',
        width: 300,
        title: '圆球love forever!',
        color: '#000'
      },
      {
        imageUrl: 'cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/7.jpg',
        width: 160,
        title: '张媛爱刘信林!',
        color: '#000'
      },
      {
        imageUrl: 'cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/8.jpg',
        width: 210,
        title: '媛媛永远是我的小仙女!',
        color: '#000'
      },
      {
        imageUrl: 'cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/9.jpg',
        width: 240,
        title: '嗝屁组合就是我们!',
        color: '#000'
      }
    ],
    starList: [],
    slideHeight: 0,
    audioContext: null
  },
  onLoad: function () {
    wx.showShareMenu()
    this.setStar()
    this.setPhotos()
    this.setBgAudio()
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
  setBgAudio () {
    this.data.audioContext = wx.createInnerAudioContext()
    this.data.audioContext.src = 'https://d-ring.i4.cn/audio/2018/06/08/16/1528445837537_334697.mp3?0.8640883349010355'
    this.data.audioContext.autoplay = true;
    this.data.audioContext.loop = true;
    this.data.audioContext.onError((err) => {
      console.log(err)
    })
  },
  onHide () {
    this.data.audioContext.pause()
  },
  onShareAppMessage() {
    return {
      title: "献给我的最爱, 媛媛~"
    }
  }
})
