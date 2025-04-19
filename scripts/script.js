new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
                {
          name: "Jalsa 2.0",
          artist: "Satinder Sartaaj ",
          cover: "https://pendujatt.com.se/uploads/album/mission-raniganj-the-great-bharat-rescue-vishal-mishra.webp",
          source: "https://audio.jukehost.co.uk/Z94Rg8c4NZDGrNrfsdzUOtuDG5Hot36X",
          url: "https://youtu.be/2EdgAic4nao?si=aQyWw6Q4R8g5-DF9",
          favorited: true
        },
        {
          name: " Aa Toh Sahii 😍",
          artist: "Meet Bros And Neha Kakkar",
          cover: "https://i.pinimg.com/736x/f7/27/95/f72795a964673486818a33540a61a7e4.jpg",
          source: "https://audio.jukehost.co.uk/3LurlzqIWDfpsB5fWNVdRNR9zMrk2iwx",
          url: "https://youtu.be/AYmy75tnmTU?si=TSafzWKVcNsKt70m",
          favorited: false
        },
        {
          name: "Ishqyaun Dhishqyaun🔫 ",
          artist: "Aditya Narayan",
          cover: "https://i.pinimg.com/474x/66/76/83/667683123181e4593fa7e9f363b5ec45.jpg",
          source: "https://audio.jukehost.co.uk/J33uHLobye8mNwLBiuU64QZrU5Nc2ycE",
          url: "https://youtu.be/yBRwrNNb564?si=8fRJ9CY3PpIjj0H5",
          favorited: true
        },

        {
          name: "Duniyaa",
          artist: " Akhil",
          cover: "https://i.pinimg.com/474x/ee/76/45/ee76457ff9dd2c248ce9b640d51067a5.jpg",
          source: "https://audio.jukehost.co.uk/Hl2Q3ao9skIymLNSyGILSUguwUTRar4m",
          url: "https://youtu.be/TbkJ5HhFXdg?si=0fgVr43xOk-BmKz7",
          favorited: false
        },

        {
          name: " Long Drive 🔥",
          artist: "Mika Singh",
          cover: "https://i.pinimg.com/474x/21/8c/51/218c51273a3971e4dc0844eaff569e16.jpg",
          source: "https://audio.jukehost.co.uk/pM4rycDnZfZwghHVUDHEaKwH2K6AlwVP",
          url: "https://youtu.be/frARuVJNpRQ?si=fAdBDeVUgkwwur1B",
          favorited: false
        },
        {
          name: "Palat Tera Hero Idhar Hai ",
          artist: "Arijit Singh ",
          cover: "https://i.pinimg.com/474x/cd/97/e8/cd97e8344e32c910d8266adaa7147fbc.jpg",
          source: "https://audio.jukehost.co.uk/a7hT3EsWyxGZxv4Psnzty2RDsPA36AyW",
          url: "https://youtu.be/2vKMY75kvjI?si=M93v3a4b0T892r7O",
          favorited: true
        },
        {
          name: "Tera Deedar Hua",
          artist: "Javed Ali",
          cover: "https://i.pinimg.com/736x/dc/2f/10/dc2f10ca1dbf65498a0f2ffceab71cdc.jpg",
          source: "https://audio.jukehost.co.uk/YMqbr2H14J6xqXwIjvOyNrITxNxg1epo",
          url: "https://youtu.be/i_HFdi1xxFM?si=9oYM9a2r1zwcSJMT",
          favorited: false
        },
        {
          name: "Dilliwali Girlfriend",
          artist: "Arijit Singh",
          cover: "https://i.pinimg.com/474x/e4/94/5b/e4945b715877784c2a18659c2f968743.jpg",
          source: "https://audio.jukehost.co.uk/lh0OEhfUufSWcbVT7TxivaXFwCfEi4wC",
          url: "https://youtu.be/1cDoRqPnCXU?si=iqt3UOtjsykKe-Zo",
          favorited: true
        },
  {
          name: "Tumhe Jo Maine Dekha",
          artist: "Shahrukh Khan, Sushmita Sen",
          cover: "https://i.pinimg.com/736x/9d/cd/40/9dcd40067cb94cd9b12d948eb225119d.jpg",
          source: "https://audio.jukehost.co.uk/4NVITZKVXwHcW2eduDVkB3G1LvC7CDR9",
          url: "https://youtu.be/9SE6B0h-4-Q?si=XLAWqfuLX_qgsY0_",
          favorited: false
        },
        {
          name: "Ishq Bulaava",
          artist: "Sanam Puri & Shipra Goyal",
          cover: "https://i.pinimg.com/474x/69/d6/5c/69d65c93148298351fa71892b1cd6327.jpg",
          source: "https://audio.jukehost.co.uk/75d8gySA2t7QSMPJlYfpVaMXb1BFpzpq",
          url: "https://youtu.be/c2gSzYLJ8sY?si=-I4R4SZCvsQRJqJG",
          favorited: true
        },
        {
          name: "Dil Jhoom",
          artist: "Arijit Singh & Mithoon",
          cover: "https://i.pinimg.com/474x/0a/08/28/0a082837c2af4942f31563bcf0eaf91d.jpg",
          source: "https://audio.jukehost.co.uk/jBvUr8OjhlIcPQFp4qWtkZpV8grjv3G1",
          url: "https://youtu.be/BsqrmY91nUQ?si=M505n44s64hI8l0y",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
