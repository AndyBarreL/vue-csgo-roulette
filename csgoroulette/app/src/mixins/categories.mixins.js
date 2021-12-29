import { mapGetters } from "vuex";

export const listCategories = {
  data: () => ({
    categories: [],
    activeIndex: '1',
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