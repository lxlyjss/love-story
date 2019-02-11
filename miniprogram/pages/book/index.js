// miniprogram/pages/book/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    audioContext: null,
    bannerIndex: -1,
    banner: {
      imgUrls: [
        {
          show: false,
          bgImg: "cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/book/section4_bg.jpg",
          imgs: [
            {
              imgUrl: 'cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/book/section4_img3.png',
              width: 780,
              height: 200,
              className: 'bounceInDown',
              left: -16,
              top: 430,
              transform: false,
              hasShadow: false
            },
            {
              imgUrl: 'cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/book/section4_img1.jpg',
              width: 560,
              height: 400,
              className: 'bounceInLeft',
              left: 24,
              top: 30,
              transform: false,
              hasShadow: true
            },
            {
              imgUrl: 'cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/book/section4_img2.jpg',
              width: 540,
              height: 422,
              className: 'bounceInRight',
              left: 188,
              top: 648,
              transform: false,
              hasShadow: true
            },
            {
              imgUrl: 'cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/book/section4_img4.png',
              width: 700,
              height: 160,
              className: 'flip',
              left: 25,
              top: 448,
              transform: false,
              hasShadow: false
            },
          ]
        },
        
        {
          show: false,
          bgImg: "cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/book/section2_bg.jpg",
          imgs: [
            {
              imgUrl: 'cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/book/section2_img1.png',
              width: 716,
              height: 1188,
              className: 'bounceInLeft',
              left: 0,
              top: -46,
              transform: false,
              hasShadow: false
            },
            {
              imgUrl: 'cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/book/section2_img2.jpg',
              width: 360,
              height: 312,
              className: 'bounceInDown delay4',
              left: 20,
              top: 40,
              transform: false,
              hasShadow: true
            },
            {
              imgUrl: 'cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/book/section2_img3.jpg',
              width: 630,
              height: 460,
              className: 'bounceInUp delay10',
              left: 40,
              top: 594,
              transform: false,
              hasShadow: true
            },
            {
              imgUrl: 'cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/book/section2_img4.png',
              width: 300,
              height: 120,
              className: 'flipInX delay20',
              left: 80,
              top: 406,
              transform: false,
              hasShadow: false
            },
          ]
        },
        {
          show: false,
          bgImg: "cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/book/section3_bg.jpg",
          imgs: [
            {
              imgUrl: 'cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/book/section2_img1.png',
              width: 750,
              height: 1200,
              className: 'bounceInDown delay4',
              left: 0,
              top: -72,
              transform: false,
              hasShadow: false
            },
            {
              imgUrl: 'cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/book/section3_img1.jpg',
              width: 540,
              height: 768,
              className: 'bounceInLeft delay10',
              left: 106,
              top: 256,
              transform: false,
              hasShadow: true
            },
            {
              imgUrl: 'cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/book/section3_img2.png',
              width: 628,
              height: 140,
              className: 'lightSpeedIn delay15',
              left: 60,
              top: 10,
              transform: false,
              hasShadow: false
            }
          ]
        },
        {
          show: false,
          bgImg: "cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/book/section5_bg.jpg",
          imgs: [
            {
              imgUrl: 'cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/book/section5_img1.jpg',
              width: 400,
              height: 534,
              className: 'zoomIn delay4',
              left: 180,
              top: 248,
              transform: false,
              hasShadow: true
            },
            {
              imgUrl: 'cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/book/section5_img2.png',
              width: 520,
              height: 176,
              className: 'zoomInDown delay10',
              left: 120,
              top: 40,
              transform: false,
              hasShadow: false
            },
          ]
        },
        {
          show: false,
          bgImg: "cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/book/section1_bg.jpg",
          imgs: [
            {
              imgUrl: 'cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/book/section1_word1.png',
              width: 480,
              height: 360,
              className: 'wobble delay2',
              left: 100,
              top: 0,
              transform: false,
              hasShadow: false
            },
            {
              imgUrl: 'cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/book/section1_img1.jpg',
              width: 360,
              height: 360,
              className: 'bounceInDown delay10',
              left: 200,
              top: 350,
              transform: false,
              hasShadow: true
            },
            {
              imgUrl: 'cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/book/section1_word2.png',
              width: 360,
              height: 360,
              className: 'bounceIn delay6',
              left: 340,
              top: 620,
              transform: false,
              hasShadow: false
            },
            {
              imgUrl: 'cloud://love-story-c127d4.6c6f-love-story-c127d4/photos/book/section1_img4.png',
              width: 520,
              height: 136,
              className: 'bounceIn delay20',
              left: 120,
              top: 840,
              transform: false,
              hasShadow: false
            },
          ]
        },
      ],
      indicatorDots: false,
      autoplay: false,
      interval: 2000,
      duration: 400,
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showShareMenu()
    setTimeout(() => {
      this.bannerChange({
        detail: {
          current: 0
        }
      })
    }, 1000)
    this.setBgAudio()
  },
  bannerChange (e) {
    this.setData({ bannerIndex: e.detail.current })
    let list = this.data.banner.imgUrls
    list.forEach((item, key) => {
      if (this.data.bannerIndex == key) {
        item.show = true
        item.imgs.forEach(imgs => {
          imgs.transform = true
        })
      } else {
        item.show = false
        item.imgs.forEach(imgs => {
          imgs.transform = false
        })
      }
    })
    setTimeout(() => {
      this.setData({ 
        'banner.imgUrls': list 
      });
    }, 500)
  },
  setBgAudio() {
    this.data.audioContext = wx.createInnerAudioContext()
    this.data.audioContext.src = 'https://d-ring.i4.cn/audio/2018/08/21/12/1534826459180_983286.mp3?0.14246061098950458'
    this.data.audioContext.autoplay = true;
    this.data.audioContext.loop = true;
    this.data.audioContext.onError((err) => {
      console.log(err)
    })
  },
  onHide() {
    this.data.audioContext.pause()
  },
  onShareAppMessage () {
    return {
      title: "献给我的最爱, 媛媛~"
    }
  }
})