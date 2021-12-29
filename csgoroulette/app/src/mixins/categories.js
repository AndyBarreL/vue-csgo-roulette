import { mapGetters } from "vuex";

export const listCategories = {
  data: () => ({
    categories: [],
  }),
  methods: {
    async getListCategories() {
      await this.$store.dispatch('category/getCategoryList');
    },
  },
  computed: {
    ...mapGetters('category', ['getCategories']),
  }
}