<template>
  <div v-if="!img.includes(null)" class="box">
    <div class="box-inner">
      <div class="box-front">
        <img :src="img" :alt="title" />
      </div>

      <div class="box-back p-2 position-relative">
        <h2 class="mt-2">{{ title }}</h2>

        <div class="d-flex justify-content-between align-items-start">
          <div id="flag" v-if="img">
            <img :src="getFlagApi" :alt="title" />
          </div>
          <div id="star">
            <i
              v-for="n in 5"
              :key="n"
              class="fa-star"
              :class="n <= getRate ? 'fa-solid' : 'fa-regular'"
            ></i>
            <span class="d-block">Voti totali: {{ vote }}</span>
          </div>
        </div>
        <div class="position-relative">
          <div class="mt-2" v-show="this.title !== this.originalTitle">
            <span class="fs-6 d-block text-start">Titolo originale: </span>
            <h4 v-if="isClicked" @click="isClicked = false" class="fs-3">
              {{ originalTitle }}
            </h4>
            <h5
              v-if="!isClicked"
              @click="isClicked = true"
              class="fs-3 text-start border-bottom"
            >
              {{ originalTitle }}
            </h5>
          </div>
        </div>

        <!--  -->
        <h6 class="fs-4 text-start position-absolute">OverView:</h6>
        <div id="overview" class="text-white mb-3 position-absolute">
          {{ overview }}
          <span v.if="overview === ''"
            >Al momento non abbiamo alcuna descrizione</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    img: String,
    title: String,
    originalTitle: String,
    overview: String,
    rate: Number,
    language: String,
    vote: Number,
  },
  data() {
    return {
      isClicked: true,
      /* flags: ["us", "fr", "it", "en"], */
    };
  },
  methods: {},
  computed: {
    /* getFlag() {
      let flag = `/images/flags/${this.language}.svg`;
      if (!this.flags.includes(this.language)) {
        flag = `/images/flags/fake.png`;
      }
      return flag;
    }, */
    getRate: function () {
      return Math.ceil(this.rate / 2);
    },
    getFlagApi() {
      let apiFlag = this.language.toLocaleUpperCase().substring(0, 2);
      if (apiFlag === "EN") {
        apiFlag = "GB";
      } else if (apiFlag === "JA") {
        apiFlag = "JP";
      } else if (apiFlag === "DA") {
        apiFlag = "CA";
      } else if (apiFlag === "ZH") {
        apiFlag = "ES";
      } else if (apiFlag === "Hi") {
        apiFlag = "CL";
      }
      console.log(`hello`, apiFlag);
      return (this.currentFlag =
        "https://flagsapi.com/" + apiFlag + "/flat/64.png");
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.dropdown {
  top: 10%;
  right: -70%;
  button {
    width: 100%;
    opacity: 0;
  }
  .dropdown-menu,
  .dropdown-item {
    background-color: black;
    bottom: 20px !important;
    color: white;
    height: 100px;
    max-width: 100%;
  }
}
h6 {
  bottom: 160px;
}
.fa-star {
  color: gold;
}

#flag {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    transform: scale(1.6);
  }
}

#overview {
  padding-right: 10px;
  bottom: 0;
  height: 150px;
  width: 95%;
  overflow-y: scroll;
  text-align: left;
}

h4 {
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}
h5 {
  cursor: pointer;
}
.box {
  background-color: transparent;
  width: 300px;
  height: 450px;
  perspective: 1000px;
  overflow: hidden;
}

.box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.5s;
  transform-style: preserve-3d;
}

.box:hover .box-inner {
  transform: rotateY(180deg);
}

.box-front,
.box-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.box-front {
  background-color: #cccccc;
  height: 100%;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.box-back {
  background: linear-gradient(
    315deg,
    rgb(22, 22, 22) 3%,
    rgb(31, 31, 31) 38%,
    rgb(0, 0, 0) 68%,
    rgb(22, 22, 22) 98%
  );
  animation: gradient 3s ease infinite;
  background-size: 200% 200%;
  color: #eeeeee;
  transform: rotateY(180deg);
}

@keyframes gradient {
  0% {
    background-position: 0% 0%;
  }

  50% {
    background-position: 100% 100%;
  }

  100% {
    background-position: 0% 0%;
  }
}
</style>
