<template>
  <v-navigation-drawer
    id="compactServerList"
    width="320px"
    height="calc(100% - 64px)"
    right="right"
    fixed
    dark
    :permanent="true"
    mobile-breakpoint="960"
  >
    <v-list v-if="servers.length > 0">
      <v-subheader>{{ $t("feed.serverList.title") }} </v-subheader>
      <Row v-for="(server, index) in servers" :key="index" :server="server" />
    </v-list>
    <div v-if="serversCount === -1" class="row text-center loadingContainer">
      <div class="col-sm-12 loading-spinner">
        <Spinner />
      </div>
    </div>
    <div
      v-if="serversCount < 1 && !isServersLoading"
      class="row text-center loadingContainer"
    >
      <div class="col-sm-12 loading-spinner">
        {{ $t("feed.serverList.noItems") }}
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue"
import { mapGetters } from "vuex"
import Row from "./TableRow.vue"
import Spinner from "@/components/LoadingIndicator/Spinner.vue"

export default Vue.extend({
  name: "ServerList",
  components: {
    Row,
    Spinner,
  },
  computed: {
    ...mapGetters(["servers", "serversCount", "isServersLoading"]),
  },
})
</script>

<style lang="scss" scoped>
#compactServerList {
  top: 64px !important;

  .loadingContainer {
    height: 100%;

    .loading-spinner {
      align-items: center;
      justify-content: center;
      display: flex;
    }
  }
}

@media only screen and (max-width: 960px) {
  #compactServerList {
    display: none;
  }
}
</style>
