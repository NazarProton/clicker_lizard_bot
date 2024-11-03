<template>
  <div class="text-content">
    <h1>Your Friends</h1>

    <div class="center">
      <button class="referal" @click="copy">{{ referaLText }}</button>
    </div>

    <h3 v-if="!friends.length">No friends yet</h3>

    <ul class="list">
      <li class="list-item" v-for="friend in friends" :key="friend.id">
        {{ friend.name }}
        <span class="list-btn done">50</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useTelegram } from '@/services/telegram';
import { useAppStore } from '@/stores/app';
import { computed, ref } from 'vue';

const app = useAppStore();
const { user } = useTelegram();

const referaLText = ref('Your referal');

const friends = computed(() =>
  Object.keys(app.user.friends).map((id) => ({
    id,
    name: app.user.friends[id],
  }))
);

function copy() {
  const url =
    user && user.id
      ? `https://t.me/ggprotonBot?start=${user.id}`
      : `https://t.me/ggprotonBot?start`;
  console.log(url);

  navigator.clipboard.writeText(url);
  referaLText.value = 'Copied!';

  const timeout = setTimeout(() => {
    referaLText.value = 'Your referal';
  }, 2000);

  clearTimeout(timeout);
}
</script>
