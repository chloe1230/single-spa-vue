<template>
  <el-row type="flex" justify="center" class="main_container">
    <el-col
      :span="5"
      v-for="(card, index) in cards"
      :key="card.value"
      :offset="index > 0 ? 2 : 0"
    >
      <div class="card_main" @click="handleClick(card.value)">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="card.image">
          <div class="card_footer">
            <span>{{ card.name }}</span>
          </div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>

export default {
  name: 'Cards',
  data () {
    return {
      cards: [
        {
          name: 'App1',
          value: 'app1',
          image: 'https://picsum.photos/id/274/800/680'
        },
        {
          name: 'App2',
          value: 'app2',
          image: 'https://picsum.photos/id/299/800/680'
        }
      ]
    }
  },
  methods: {
    handleClick (path) {
      this.$router.push({ path: path })
    }
  },
}
</script>
