<template>
  <header>
    <nav
      class="
        flex flex-wrap
        items-center
        justify-between
        w-full
        py-4
        md:py-0
        px-4
        text-lg text-white
        bg-clip-padding
        backdrop-filter backdrop-blur-xl
      "
    >
      <div class="p-5 flex items-baseline">
        <a href="/">
          <g-image width="80" src="~/assets/images/coolhandcode-logo.png" />
        </a>
        <h1 class="inline">Gridsome: Strapi Starter</h1>
      </div>

      <div class="w-full md:flex md:items-center md:w-auto" id="menu">
        <ul class="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
          <li>
            <label class="block mt-4">
              <span class="text-gray-700 font-heading text-upper">{{
                languages ? languages : 'Languages'
              }}</span>
              <select
                v-model="locale"
                @change="selectLanguage"
                class="form-select text-gray-400 font-heading mt-1 block w-full"
              >
                <option :value="l.code" v-for="l in state.locales" :key="l.code">
                  {{ l.name }}
                </option>
              </select>
            </label>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script type="ts">
export default {
  props: {
    localizations: {
      type: Array,
      default: () => [],
    },
    article: {
      type: Object,
      default: () => {return {}},
    },
  },
  data() {
    return {
      state: {},
      languages: '',
      locale: '',
    }
  },
  mounted() {
    // Set initial locale and languages title from localstorage
    this.$store.set('locale',localStorage.getItem('locale') || 'en')
    this.$store.set('languages',localStorage.getItem('languages') || 'Languages')

    this.state = this.$store.state
    this.locale = this.$store.state.locale
    this.languages = this.$store.state.languages
  },
  methods: {
    selectLanguage(event) {
      const newLocale = event.target.value
      const currentLocale = this.$store.state.locale
      if (newLocale) {
        this.$store.set('locale', newLocale)
        this.locale = newLocale
        this.$store.state.locales.forEach((element) => {
          if(element.code === newLocale) {
            this.$store.set('languages',element.title)
            this.languages = element.title
          }
        });
      }

      if(newLocale !== currentLocale) {
        if (process.isClient && (!this.localizations || this.localizations.length === 0)) {
          window.location.href = '/'+ newLocale
        } else {
          this.localizations.forEach((loc) => {
            if(loc.locale === newLocale) {
              this.$emit('locale-changed', loc)             }
          })
        }
      }
    },
  },
}
</script>
