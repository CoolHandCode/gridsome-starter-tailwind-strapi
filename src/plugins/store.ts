// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as locales from '../utils/locales'

interface Store {
  state: State
  set: (key: keyof State, value: string & Locale[]) => void
  clear: (key: keyof State) => void
}

interface Locale {
  code: string
  name: string
  title: string
}

interface State {
  locale: string | null
  locales: Locale[]
  languages: string | null
}
export const store: Store = {
  state: {
    locale: 'en',
    locales,
    languages: 'Languages',
  },

  set(key: keyof State, value: string & Locale[]) {
    this.state[key] = value
    if (localStorage) {
      localStorage.setItem(key, value)
    }
  },
  clear(key: keyof State) {
    delete this.state[key]
    if (localStorage) localStorage.removeItem(key)
  },
}
export default {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  install: function (Vue: any) {
    Vue.prototype.$store = store
  },
}
