<template>
  <v-container>
    <v-simple-table>
      <template v-slot:default>
        <thead class="primary">
          <tr>
            <th class="text-left white--text">Victime</th>
            <th class="text-left white--text">Lieu</th>
            <th class="text-left white--text">Plaque</th>
            <th class="text-left white--text">Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in accidents" :key="i">
            <td>{{ item.victime }}</td>
            <td>
              <v-chip class="ma-2 white--text" color="grey"> {{ item.lieu }}</v-chip>
            </td>

            <td>{{ item.plaque }}</td>
            <td>{{ item.detail }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {},
  computed: {
    ...mapState(["accidents", "docs"]),
  },
  data() {
    return {};
  },
};
</script>
