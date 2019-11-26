<template>
  <nb-card class="main-card">
    <nb-card-item class="card-header" header>
      <nb-icon name="logo-usd" :style="{ fontSize: 28, color: '#666' }" />
      <nb-icon name="eye-off" :style="{ fontSize: 28, color: '#666' }" />
    </nb-card-item>
    <nb-card-item class="card-content">
      <nb-body>
        <nb-text class="card-content-title">Saldo disponível</nb-text>
        <nb-text class="card-content-description">
          R$ 197.611,65
        </nb-text>
      </nb-body>
    </nb-card-item>
    <nb-card-item footer class="card-footer">
      <nb-text class="card-footer-text"
        >Tranferência de R$ 1.000 recebida de Mário Sérgio Cortella hoje ás
        08:00h</nb-text
      >
    </nb-card-item>
  </nb-card>
</template>

<style lang="sccs" scoped>
.card-header {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-right: 30px;
}
.card-content {
  flex: 1;
  padding-left: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-right: 30px;
  justify-content: center;
}
.card-content-title {
  font-size: 13px;
  color: #999;
}
.card-content-description {
  font-size: 32px;
  margin-top: 3px;
  color: rgb(5, 228, 5);
}
.card-footer {
  padding-left: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-right: 30px;
  background-color: #eee;
  border-radius: 4px;
}
.card-footer-text {
  font-size: 12px;
  color: #333;
}
</style>
