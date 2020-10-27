<template>
  <v-container>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="proprietaire"
              label="Nom du proprietaire"
            ></v-text-field>

            <v-text-field v-model="plaque" label="Plaque"></v-text-field>

            <v-row>
              <v-col>
                <v-checkbox v-model="vignete" label="Vignete"></v-checkbox>
              </v-col>
              <v-col>
                <v-checkbox v-model="assurence" label="Assurance"></v-checkbox>
              </v-col>
              <v-col>
                <v-checkbox v-model="permit" label="Permit"></v-checkbox>
              </v-col>
            </v-row>
            <v-btn @click.prevent="addDocs()" color="primary" class="px-8">
              Creer document
            </v-btn>
          </v-col>
          <v-col>
            <v-label>Gestion des documents des Auto-roulants</v-label>
            <v-simple-table>
              <template v-slot:default>
                <thead class="primary">
                  <tr>
                    <th class="text-left white--text">Name</th>
                    <th class="text-left white--text">Plaque</th>
                    <th class="text-left white--text">Vignete</th>
                    <th class="text-left white--text">Assurence</th>
                    <th class="text-left white--text">Permit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in docs" :key="item.name">
                    <td>{{ item.proprietaire }}</td>
                    <td>{{ item.plaque }}</td>
                    <td >
                      <v-chip v-if="item.vignete" class="ma-2 white--text" color="#21CE99"> Vignete </v-chip>
                      <v-chip v-else class="ma-2 white--text" color="red"> Vignete </v-chip>
                    </td>
                    <td>
                      <v-chip v-if="item.assurence" 
                      class="ma-2 white--text" color="#21CE99"> Assurence </v-chip>
                      <v-chip v-else class="ma-2 white--text" color="red"> Assurence </v-chip>
                    </td>
                    <td>
                      <v-chip v-if="item.permit" class="ma-2 white--text" color="#21CE99"> Permit </v-chip>
                      <v-chip v-else class="ma-2 white--text" color="red"> Permit </v-chip>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>


<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["docs"]),
    isTrue(item) {
      return item ? true : false;
    },
  },
  methods: {
    ...mapActions(["addCarData"]),
    addDocs() {
      if (!this.proprietaire && !this.plaque) {
        return;
      }
      this.addCarData({
        permit: this.permit,
        assurence: this.assurence,
        vignete: this.vignete,
        proprietaire: this.proprietaire,
        plaque: this.plaque,
      });

      (this.permit = false),
        (this.assurence = false),
        (this.vignete = false),
        (this.proprietaire = ""),
        (this.plaque = "");
    },
  },
  data() {
    return {
      permit: false,
      assurence: false,
      vignete: false,
      proprietaire: "",
      plaque: "",
    };
  },
};
</script>
